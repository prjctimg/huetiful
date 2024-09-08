//  @ts-nocheck

import {
	sortedColl,
	mcchn,
	chnDiff,
	factorIterator,
	or,
	and,
	isArray,
	map,
	eq,
	filteredColl
} from './internal.js';
import { family, luminance, mc, token } from './utils.js';
import { contrast } from './accessibility.js';
import {
	averageAngle,
	averageNumber,
	differenceHyab,
	fixupHueLonger,
	fixupHueShorter
} from 'culori/fn';
import { limits } from './constants.js';
import {
	Collection,
	ColorToken,
	DistributionOptions,
	FilterByOptions,
	SortByOptions,
	Stats,
	StatsOptions,
	Factor
} from './types.js';

/**
 * Computes statistical values about the passed in color collection.
 *
 * The properties from each returned `factor` object are:
 *
 * * `against` - The color being used for comparison.
 *
 * Required for the `distance` and `contrast` factors.
 * If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.
 * * `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).
 *
 *
 * * `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
 * * `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
 * * `mean` - The average value for the `factor`.
 *
 * :::tip
 * The `mean` property can be overloaded by the `relativeMean` option:
 *
 * * If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
 * For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."
 *
 * :::
 * 
 * These properties are available at the topmost level of the resultant object:
 *
 * * `achromatic` - The amount of colors which are gray out of the total colors in the collection as a value in the range [0,1].
 * * `colorspace` - The colorspace in which the values were computed from, expected to be hue based.
 * Defaults to `lch` if an invalid mode like `rgb` is used.
 *
 * @param {Collection} collection The collection to compute stats from. Any collection with color tokens as values will work.
 * @param {StatsOptions} options
 * @returns {Stats}
 */
function stats<Iterable extends Collection, Options extends StatsOptions>(
	collection: Iterable,
	options: Options
) {
	let { factor, relative, colorspace, against } = options || {};

	/*
                                    //// DEFAULT OPTIONS  \\\\
      factor
      if factor is defined we return the specified
      factors else all factors if undefined.
  

     relative
     return the largest/smallest factor distances by default
     else compare the distances agains a comparison color.
   
   colorspace
    default is lch if an invalid colorpace is passed in
    expects the colorspace to be hue based
   
   
  against
  default is cyan so that factors dependant on the argument
  don't f*ck things up in the result object

   */

	factor = or(factor, undefined);
	relative = or(relative, false);
	colorspace = or(colorspace, 'lch');
	against = or(against, 'cyan');

	//convert all color tokens to excepted colorspace

	collection = map(collection, token);

	// put a bunch of stuff in arrays. f*ck readability :lol:
	//  z,j,v are similar
	// Callback functions for retrieving factors
	const getStatsObject = (fact) => {
			// if relativeMean is true
			// use the overload on all other factors when fetching their mean

			const [sortedTokens, getChannel, getContrast] = [
				(a, b) => sortedColl(a, b, 'asc', true)(collection),
				(a) => (b) => mc(a)(b),
				(a) => contrast(a, against)
			];
			return or(
				and(eq(relative, true), {
					chroma: sortedTokens(fact, chnDiff(against, mcchn('c', colorspace))),
					luminance: (() => {
						// @ts-ignore
						let cb1 = (a) => (b) => Math.abs(luminance(a) - luminance(b));
						return sortedTokens(fact, cb1(against));
					})(),
					lightness: sortedTokens(
						fact,
						chnDiff(against, mcchn('l', colorspace))
					),
					hue: sortedTokens(fact, chnDiff(against, `${colorspace}.h`)),
					contrast: sortedTokens(fact, getContrast)
				}),
				{
					chroma: sortedTokens(fact, getChannel(mcchn('c', colorspace))),
					luminance: sortedTokens(fact, luminance),
					lightness: sortedTokens(fact, getChannel(mcchn('l', colorspace))),
					hue: sortedTokens(fact, getChannel(colorspace + `.h`))
				}
			)[fact];
		},
		len =
			// @ts-ignore
			collection.length,
		factorStats = (fact) => {
			// we filter out falsy values from the collection to avoid getting NaN
			// @ts-ignore
			const callback = (a, b) => (c) => map(a, b(c)),
				i = (a) => (b) => differenceHyab()(a, b),
				h = (a) => (b) => contrast(a, b);
			return {
				chroma: callback(mc(mcchn('c', colorspace)), averageNumber),
				distance: callback(i, averageNumber),

				hue: callback(mc(colorspace + `.h`), averageAngle),
				lightness: callback(mc(mcchn('l', colorspace)), averageNumber),
				contrast: callback(h, averageNumber),
				luminance: callback(luminance, averageNumber)
			}[fact];
		},
		commonStats = (fact) => {
			const [x, y] = [getStatsObject(fact)[0], getStatsObject(fact)[len - 1]];

			return {
				against: or(
					and(or(relative, eq(fact, or('contrast', 'distance'))), against),
					null
				),
				colors: [x['color'], y['color']],
				// @ts-ignore
				mean: factorStats(fact)(collection),
				extremums: [x[fact], y[fact]],
				families: [family(x['color']), family(y['color'])]
			};
		},
		statsObject = factorIterator(factor, commonStats);
	statsObject['achromatic'] =
		// @ts-ignore
		values(collection).filter(achromatic).length / len;
	statsObject['colorspace'] = colorspace;

	return statsObject;
}

/**
 * Sorts colors according to the specified `factor`. The supported options are:
 *
 * * `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
 * The contrast is tested `against` a comparison color  which can be specified in the `options` object.
 * * `'lightness'` - Sorts colors according to their lightness.
 * * `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
 * * `'distance'` - Sorts colors according to their distance.
 * The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
 * * `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 * :::tip
 * The return type is determined by the type of `collection`:
 * 
 * * Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
 * * `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.
 * 
 * :::
 * 
 * @param {Collection} collection The `collection` of colors to sort.
 * @param {SortByOptions} options
 * @returns {Collection}  

 * @example

import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortBy(sample,{ against:'yellow' kind:'distance',order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
function sortBy<Iterable extends Collection, Options extends SortByOptions>(
	collection: Iterable,
	options?: Options
): Collection {
	let { against, colorspace, factor, order, relative } = or(
		options,
		{} as Options
	);
	factor = or(factor, undefined);
	relative = or(relative, false);
	colorspace = or(colorspace, 'lch');
	against = or(against, 'cyan');
	order = or(order, 'asc');
	// lightness and chroma channel constants respectively
	const [lightnessChannel, chromaChannel] = ['l', 'c'].map((w) =>
			mcchn(w, colorspace, false)
		),
		callback = (a) => sortedColl(factor, a, order),
		// returns factor cbs determined by the options
		getFactor = (fact) => {
			const v = (a) => (b) => Math.abs(luminance(a) - luminance(b)),
				u = (a) => (c) => differenceHyab()(a, c),
				w = (a) => (c) => contrast(c, a);
			return or(
				and(relative, {
					chroma: callback(
						chnDiff(against, mc(colorspace + '.' + chromaChannel))
					),
					hue: callback(chnDiff(against, mc(`${colorspace}.h`))),
					luminance: callback(v(against)),
					lightness: callback(
						chnDiff(against, mc(colorspace + '.' + lightnessChannel))
					)
				}),
				{
					chroma: callback(mc(colorspace + '.' + chromaChannel)),
					hue: callback(mc(`${colorspace}.h`)),
					luminance: callback(luminance),
					distance: callback(u(against)),
					contrast: callback(w(against)),
					lightness: callback(mc(colorspace + '.' + lightnessChannel))
				}
			)[fact](collection);
		};

	// @ts-ignore
	return factorIterator(factor, getFactor);
}

/**
 * Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.
 *@param factor The property you want to distribute to the colors in the collection for example `hue | luminance`
 * @param  Optional overrides to change the default configursation

  @returns {undefined}
 */
function distribute<
	Iterable extends Collection,
	Options extends DistributionOptions
>(collection: Iterable, options?: Options): Collection {
	// Destructure the opts to check before distributing the factor
	let {
			extremum,
			excludeSelf,
			excludeAchromatic,
			colorspace,
			hueFixup,
			factor
		} = options || {},
		// @ts-ignore
		get_cb,
		// @ts-ignore
		set_cb;

	// Set the extremum to distribute to default to max if its not min
	extremum = or(extremum, 'max');

	// Exclude the colorToken with the specified factor extremum being distributed
	excludeSelf = or(excludeSelf, false);

	// Exclude achromatic colors from the manipulations. The colors are returned in the resultant collection
	excludeAchromatic = or(excludeAchromatic, false);

	// The fixup to use when tweaking the hue channels
	// @ts-ignore
	hueFixup =
		factor === 'hue'
			? hueFixup === 'longer'
				? fixupHueLonger
				: fixupHueShorter
			: null;
	colorspace = or(colorspace, 'lch');

	// v is expected to be a color object so that we can access the color's hue property during the mapping
	// set the callbacks depending on the type of factor
	switch (factor) {
		case 'chroma':
			break;
		case 'hue':
			break;
		case 'luminance':
			break;
		case 'lightness':
			break;
	}

	/**
	 *
	 * @param {any} collection The colors to manipulate.
	 * @returns {any} The collection with each color's `factor` adjusted.
	 */
}

/**
 * Filters a collection of colors using the specified `factor` as the criterion. The supported options are:
 * * `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * * `'lightness'` - Returns colors in the specified lightness range.
 * * `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 
 * * `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
 * * `luminance` - Returns colors in the specified luminance range.
 * * `'hue'` - Returns colors in the specified hue ranges between 0 to 360.
 * 
 * :::tip
 * For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range. 
 * This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. 
 * But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 * 
 * :::
 * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param {Collection} collection The collection of colors to filter.  
 * @param  options
 * @example
 * 
 * import { filterBy } from 'huetiful-js'

let sample = [
  '#00ffdc',
  '#00ff78',
  '#00c000',
  '#007e00',
  '#164100',
  '#ffff00',
  '#310000',
  '#3e0000',
  '#4e0000',
  '#600000',
  '#720000',
]

 */
function filterBy<Iterable extends Collection, Options extends FilterByOptions>(
	collection: Iterable,
	options: Options
): Collection {
	let { against, colorspace, factor, ranges } = or(options, {} as Options),
		start: number,
		end: number;
	factor = or(factor, undefined);
	colorspace = or(colorspace, 'lch');
	against = or(against, 'cyan');

	const filter = (cb, start, end) => {
			return filteredColl(factor, cb)(collection, start, end);
		},
		chromaChannel = mcchn('c', colorspace, false),
		lightnessChannel = mcchn('l', colorspace, false),
		callback = (fact) => {
			const defaultRanges: { [F in Factor] } = {
					hue: [0, 359],
					contrast: [0, 21],
					chroma: [...limits[colorspace][chromaChannel]],
					lightness: [...limits[colorspace][lightnessChannel]],
					distance: [0, Infinity],
					luminance: [0, 1]
				},
				ctrst = (a) => (b) => contrast(b, a),
				dstnce = (a) => differenceHyab()(a, against);

			if (isArray(factor) || undefined) {
				start = or(ranges[fact][0], defaultRanges[fact][0]);
				end = or(ranges[fact][1], defaultRanges[fact][1]);
			} else if (eq(typeof fact, 'string')) {
				start = or(ranges[0], defaultRanges[fact][0]);

				end = or(ranges[1], defaultRanges[fact][1]);
			}

			return {
				chroma: filter(
					mc(mcchn('c', colorspace, true)),

					// @ts-ignore
					start,
					end
				),
				lightness: filter(
					mc(mcchn('l', colorspace, true)),
					// @ts-ignore
					start,
					end
				),
				hue: filter(
					mc(`${colorspace}.h`),
					// @ts-ignore
					start,
					end
				),
				distance: filter(
					dstnce(token(against)),

					// @ts-ignore
					start,
					end
				),
				contrast: filter(
					ctrst(against),

					start,
					end
				),
				luminance: filter(
					luminance,
					// @ts-ignore
					start,
					end
				)
			}[fact];
		};

	// @ts-ignore
	return factorIterator(factor, callback);
}

export { stats, sortBy, filterBy, distribute };

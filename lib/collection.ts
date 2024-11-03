import {
	and,
	chnDiff,
	ctrst,
	dstnce,
	eq,
	filteredColl,
	iterator,
	map,
	mcchn,
	or,
	sortedColl,
	values,
} from "./internal.ts";
import { achromatic, family, luminance, mc, token } from "./utils.ts";
import { contrast } from "./accessibility.ts";
import { averageAngle, averageNumber } from "culori/fn";
import { limits } from "./constants.ts";
import type {
	Collection,
	Colorspaces,
	Factor,
	FilterByOptions,
	SortByOptions,
	Stats,
	StatsOptions,
} from "./types.d.ts";
import type { ColorToken } from "./types.d.ts";

/**
 * Computes statistical values about the passed in color collection.
 *
 * The properties from each returned `factor` object are:
 *
 * * `against` - The color being used for comparison. Required for the `distance` and `contrast` factors.
 * If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.
 * * `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).
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
 * :::tip
 *
 * * The `factor` is expected to be an array of strings with each element being a valid `factor`. Every key is a `factor`, with the stats of that `factor` as the value in the result object.
 *
 * To get all the factors in the result object pass `undefined` to `factor`.
 *
 * :::
 *
 * @param  collection The collection to compute stats from. Any collection with color tokens as values will work.
 * @param options
 */
function stats<
	Iterable extends Collection,
	Options extends StatsOptions,
>(collection: Iterable, options?: Options): Stats {
	let { factor, relative, colorspace, against } = or(
		options,
		{},
	) as Options;

	factor = or(factor, undefined);
	relative = or(relative, false);
	colorspace = or(colorspace, "lch");
	against = or(against, "cyan") as ColorToken;

	const hexColors = map(collection, token);

	const getStatsObject = (fact: Factor) => {
		const sortedTokens = (a: Factor, b: unknown) =>
			sortedColl(a, b, "asc")(hexColors);

		// @ts-ignore:
		return or(
			and(eq(relative, true), {
				chroma: sortedTokens(
					fact,
					chnDiff(
						against,
						mcchn("c", colorspace),
					),
				),
				luminance: (() => {
					const cb1 = (a: ColorToken) => (b: ColorToken) =>
						Math.abs(
							luminance(a) - luminance(b),
						);
					return sortedTokens(fact, cb1(against));
				})(),
				lightness: sortedTokens(
					fact,
					chnDiff(
						against,
						mcchn("l", colorspace),
					),
				),
				hue: sortedTokens(
					fact,
					chnDiff(against, `${colorspace}.h`),
				),
				contrast: sortedTokens(
					fact,
					ctrst(against),
				),
			}),
			{
				chroma: sortedTokens(
					fact,
					mc(mcchn("c", colorspace)),
				),
				luminance: sortedTokens(fact, luminance),
				lightness: sortedTokens(
					fact,
					mc(mcchn("l", colorspace)),
				),
				hue: sortedTokens(
					fact,
					mc(`${colorspace}.h`),
				),
			},
		)[fact];
	};
	const len: number = values(collection).length;
	const factorStats = (fact: Factor) => {
		// @ts-ignore:
		const callback = (a, b) => (c) => map(a, b(c));
		const h = (a: ColorToken) => (b: ColorToken) => contrast(a, b);

		// @ts-ignore:
		return {
			chroma: callback(
				mc(mcchn("c", colorspace)),
				averageNumber,
			),
			distance: callback(dstnce, averageNumber),

			hue: callback(
				mc(`${colorspace}.h`),
				averageAngle,
			),
			lightness: callback(
				mc(mcchn("l", colorspace)),
				averageNumber,
			),
			contrast: callback(h, averageNumber),
			luminance: callback(luminance, averageNumber),
		}[fact];
	};
	const commonStats = (fact: Factor) => {
		const [x, y] = [
			getStatsObject(fact)[0],
			getStatsObject(fact)[len - 1],
		];

		return {
			against: or(
				and(
					or(
						relative,
						eq(
							fact,
							or("contrast", "distance"),
						),
					),
					against,
				),
				null,
			),
			colors: [x.color, y.color],
			// @ts-ignore:
			mean: factorStats(fact)(collection),
			extremums: [x[fact], y[fact]],

			families: [family(x.color), family(y.color)],
		};
	};
	const statsObject = iterator(factor, commonStats);

	// @ts-ignore:
	statsObject.achromatic = values(collection).filter(achromatic).length / len;

	// @ts-ignore:
	statsObject.colorspace = colorspace;

	return statsObject as Stats;
}

/**
 * Sorts colors according to the specified `factor`. The supported options are:
 *
 * :::tip
 *
 * * The `factor` is expected to be an array of strings with each element being a valid `factor`. Every key is a `factor`, with the sorted collection as the value in the result object.
 *
 * To get all the factors in the result object pass `undefined` to `factor`.
 *
 * :::
 *
 * * `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
 * The contrast is tested `against` a comparison color  which can be specified in the `options` object.
 * * `'lightness'` - Sorts colors according to their lightness.
 * * `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
 * * `'distance'` - Sorts colors according to their distance.
 * The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
 * * `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 *
 * :::tip
 * The return type is determined by the type of `collection`:
 *
 * * Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
 * * `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.
 *
 * :::
 *
 * @param collection The `collection` of colors to sort.
 * @param  options
 * @example

import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortBy(sample,{ against:'yellow' kind:'distance',order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
function sortBy<
	Iterable extends Collection,
	Options extends SortByOptions,
>(collection: Iterable, options?: Options): Collection {
	// @ts-ignore:
	let { against, colorspace, factor, order, relative } = or(
		options,
		{} as Options,
	);
	factor = or(factor, "hue");
	relative = or(relative, false);
	colorspace = or(colorspace, "lch");
	against = or(against, "cyan");
	order = or(order, "asc");
	// lightness and chroma channel constants respectively
	const [lightnessChannel, chromaChannel] = [
		"l",
		"c",
	].map((w) => mcchn(w, colorspace, false));
	const sort = (a: unknown) => sortedColl(factor, a, order);
	// returns factor cbs determined by the options
	const callback = (fact: Factor) => {
		const lmnce = (b: ColorToken) =>
			Math.abs(luminance(against) - luminance(b));
		const u = (ch: string) =>
			mc(`${colorspace}.${ch}`) as unknown as string;

		// @ts-ignore: fact is used as the index
		return or(
			and(relative, {
				chroma: sort(
					chnDiff(against, u(chromaChannel)),
				),
				hue: sort(chnDiff(against, u("h"))),
				luminance: sort(lmnce),
				lightness: sort(
					chnDiff(against, u(lightnessChannel)),
				),
			}),
			{
				chroma: sort(u(chromaChannel)),
				hue: sort(u("h")),
				luminance: sort(luminance),
				distance: sort(dstnce(against)),
				contrast: sort(ctrst(against)),
				lightness: sort(u(lightnessChannel)),
			},
		)[fact](collection);
	};

	return iterator(factor, callback);
}

/**
 * Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.
 * @param collection The property you want to distribute to the colors in the collection for example `hue | luminance`
 * @param options  Optional overrides to change the default configursation
 */
// function distribute<
// 	Iterable extends Collection,
// 	Options extends DistributionOptions,
// >(collection: Iterable, options?: Options): Collection {
// 	// Destructure the opts to check before distributing the factor
// 	let {
// 		extremum,
// 		excludeSelf,
// 		excludeAchromatic,
// 		colorspace,
// 		hueFixup,
// 		factor,
// 	} = or(options, {}) as Options;
// 	// Set the extremum to distribute to default to max if its not min
// 	extremum = or(extremum, "max");

// 	// Exclude the colorToken with the specified factor extremum being distributed
// 	excludeSelf = or(excludeSelf, false);

// 	// Exclude achromatic colors from the manipulations. The colors are returned in the resultant collection
// 	excludeAchromatic = or(excludeAchromatic, false);

// 	// The fixup to use when tweaking the hue channels
// 	// @ts-ignore
// 	hueFixup = factor === "hue"
// 		? hueFixup === "longer" ? fixupHueLonger : fixupHueShorter
// 		: null;
// 	colorspace = or(colorspace, "lch");
// 	const facts: { [K in Factor] } = {
// 		hue: "h",
// 		lightness: mcchn("l", colorspace),
// 		chroma: mcchn("c", colorspace),
// 		distance: 0,
// 		luminance: 0,
// 		contrast: 0,
// 	};
// 	// v is expected to be a color object so that we can access the color's hue property during the mapping
// 	// set the callbacks depending on the type of factorStats
// }

/**
 * Filters a collection of colors using the specified `factor` as the criterion.
 *
 * :::tip
 *
 * * The `factor` is expected to be an array of strings with each element being a valid `factor`. Every key is a `factor`, with the filtered collection as the value in the result object.
 *
 * To get all the factors in the result object pass `undefined` to `factor`.
 *
 * :::
 *
 * The supported options are:
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
 * But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 *
 * [See the color spaces page](https://culorijs.org/color-spaces/) for the expected ranges.
 *
 * :::
 *
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param collection The collection of colors to filter.
 * @param  options Options to customise filtering behaviour.
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
function filterBy<
	Iterable extends Collection,
	Options extends FilterByOptions,
>(collection: Iterable, options: Options): Collection {
	let { against, colorspace, factor, ranges } = or(
		options,
		{},
	) as Options;

	factor = or(factor, "hue");
	colorspace = or(colorspace, "lch") as Colorspaces;
	against = or(against, "cyan") as ColorToken

	const filter = (cb: unknown) => (fact: Factor) =>
			filteredColl(fact, cb)(collection, start, end),
		chromaChannel = mcchn("c", colorspace, false),
		lightnessChannel = mcchn("l", colorspace, false),
		defaultRanges = {
			hue: [0, 359],
			contrast: [0, 21],
			// @ts-ignore:
			chroma: [...limits[colorspace][chromaChannel]],
		
			lightness: [
					// @ts-ignore:
				...limits[colorspace][lightnessChannel],
			],
			distance: [0, Number.POSITIVE_INFINITY],
			luminance: [0, 1],
		};
	let start: number, end: number;

	const callback = (fact: Factor) => {
		// @ts-ignore:
		start = or(ranges[fact][0], defaultRanges[fact][0]);
		// @ts-ignore:
		end = or(ranges[fact][1], defaultRanges[fact][1]);

		return {
			chroma: filter(
				mc(mcchn("c", colorspace, true)),
			),
			lightness: filter(
				mc(mcchn("l", colorspace, true)),
			),
			hue: filter(mc(`${colorspace}.h`)),
			distance: filter(dstnce(token(against))),
			contrast: filter(ctrst(against)),
			luminance: filter(luminance),
		}[fact](fact);
	};

	return iterator(factor, callback) as Collection;
}

export { filterBy, sortBy, stats };

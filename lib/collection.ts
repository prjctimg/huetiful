import {
	averageAngle,
	averageNumber,
	fixupHueLonger,
	fixupHueShorter,
} from "culori/fn";
import { limits } from "./constants.ts";
import {
	chnDiff,
	COLOR_SPACES,
	ctrst,
	dstnce,
	entries,
	filteredColl,
	hf,
	iterator,
	map,
	mcchn,
	or,
	sortedColl,
	values,
} from "./internal.ts";
import type {
	Collection,
	Colorspaces,
	ColorToken,
	DistributionOptions,
	Factor,
	FilterByOptions,
	SortByOptions,
	Stats,
	StatsOptions,
} from "./types.d.ts";
import {
	family,
	luminance,
	mc,
	token,
} from "./utils.ts";

/**
 * Computes statistical values about the specified `factor(s)` from the passedin collection.
 *
 * The properties from each returned `factor` object are:
 *
 * * `against` - The color being used for comparison. Required for the `distance` and `contrast` factors.
 * If `relativeMean` is `false`, other factors that take the comparison color token as an overload (`contrast | distance`) will have this property's value as `null`.
 * * `colorspace` - The colorspace in which the `factors` were computed in. It has no effect on the `contrast` or `distance` factors (for now).
 *
 * * `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
 * * `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
 * * `mean` - The average value for the `factor`.
 *
 * :::tip
 * The `mean` property can be overloaded by the `relativeMean` option:
 *
 * * If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
 * For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from the passed in collection."
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
 * @param options The optional overrides to customize the computing behaviour for the factors.
 */
function stats(
	collection: Collection = [],
	options?: StatsOptions,
): Stats {
	let { factor, relative, against, colorspace } =
		options || ({} as StatsOptions);

	relative = relative || false;
	colorspace = "lch";
	against = "cyan";
	relative = false;

	const getStatsObject = (fact: Factor) => {
		const sortedTokens = (
			b: (x: unknown) => unknown,
		) => sortedColl(fact, b)(collection);

		// @ts-ignore:`
		const meanCallback = (relative === true && {
			chroma:
				// @ts-ignore:
				chnDiff(against, mcchn("c", colorspace)),

			luminance: (a: ColorToken) =>
				Math.abs(
					luminance(a) - luminance(against),
				),
			lightness: chnDiff(
				against,
				mcchn("l", colorspace),
			),
			hue: chnDiff(against, `${colorspace}.h`),

			contrast: ctrst(against),
			distance: dstnce(against),
		}) || {
			chroma: mc(mcchn("c", colorspace)),

			luminance: luminance,
			lightness: mc(mcchn("l", colorspace)),

			hue: mc(`${colorspace}.h`),
		};

		// if the relative is true then exit
		if (
			["contrast", "distance"].includes(fact) &&
			relative
		) {
			return;
		}
		// @ts-ignore:
		return sortedTokens(meanCallback[fact]);
	};

	/**
	 * @param b The callback func for computing the targeted factor. Must be unary
	 * @param c The function to wrap the resulting collection of computed factors in.
	 */
	const callback =
		(b: (x?: ColorToken) => number) =>
		(c: (x: number[]) => number) =>
			c(map(collection, b) as number[]);

	const len: number = values(collection).length;
	const factorStats = {
		chroma: callback(mc(mcchn("c", colorspace)))(
			averageNumber,
		),
		distance: callback(dstnce(against))(
			averageNumber,
		),

		hue: callback(mc(`${colorspace}.h`))(
			averageAngle,
		),
		lightness: callback(
			mc(mcchn("l", colorspace)),
		)(averageNumber),
		contrast: callback(ctrst(against))(
			averageNumber,
		),
		luminance: callback(luminance)(averageNumber),
	};

	const commonStats = (fact: Factor) => {
		// @ts-ignore:
		const x = getStatsObject(fact)[0];
		// @ts-ignore:
		const y = getStatsObject(fact)[len - 1];

		const res = {
			against:
				relative ||
				["contrast", "distance"].includes(fact)
					? against
					: null,
			colors: [x?.color, y?.color],
			// @ts-ignore:
			mean: factorStats[fact],
			extremums: [x[fact], y[fact]],

			families: [
				family(x?.color),
				family(y?.color),
			],
		};
		return res;
	};

	console.log(commonStats("distance"));
	// console.log(factorStats.contrast);
	// @ts-ignore:
	// const statsObject = iterator(
	// 	factor,
	// 	// @ts-ignore:
	// 	commonStats,
	// 	true,
	// ) as Stats;
	//
	// // @ts-ignore:
	// statsObject.achromatic =
	// 	values(collection).filter(achromatic).length /
	// 	len;
	//
	// // @ts-ignore:
	// statsObject.colorspace = colorspace;
	//
	// console.log(statsObject);
}

/**
 * Sorts colors according to the specified `factor(s)`. The supported options are:
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
 * @param collection The `collection` of colors to sort. Any object with enumerable keys and color tokens as values will work. 
 * @param  options The optional overrides to customize the sorting behaviour.
 * @example

import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortBy(sample,{ against:'yellow' kind:['distance'],order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
function sortBy(
	collection: Collection = [],
	options?: SortByOptions,
): Collection {
	// @ts-ignore:
	let {
		against,
		colorspace,
		factor,
		order,
		relative,
		factorObject,
	} = options || ({} as SortByOptions);

	against = against || "cyan";
	colorspace =
		COLOR_SPACES.includes(
			colorspace?.toLowerCase() as Colorspaces,
		) && /h/gi.test(colorspace)
			? colorspace
			: "lch";
	relative = relative || false;
	order = ["desc", "asc"].includes(
		order?.toLowerCase(),
	)
		? order
		: "asc";
	// lightness and chroma channel constants respectively
	const [lightnessChannel, chromaChannel] = [
		"l",
		"c",
	].map((w) => mcchn(w, colorspace, false));
	//  @ts-ignore:
	// @ts-ignore:
	for (const c in entries(collection))
		collection[c[0]] = token(c[1], {
			kind: "obj",
			targetMode: "lch",
		});

	// returns factor cbs determined by the options
	const callback = (fact: Factor) => {
		const lmnce = (b: ColorToken) =>
				Math.abs(
					luminance(against) - luminance(b),
				),
			sort = (a: unknown) =>
				// @ts-ignore:
				sortedColl(fact, a, order)(collection);
		const u = (ch: string) =>
			mc(
				`${colorspace}.${ch}`,
			) as unknown as string;

		// biome-ignore lint/suspicious/noImplicitAnyLet: don't really need to be explicit with types in here...
		let sortingCallbacks;
		// if relative is true and the fact is not [contrast,distance,luminance]....
		if (
			relative &&
			![
				"contrast",
				"distance",
				"luminance",
			].includes(fact.toLowerCase())
		) {
			// then return an object of callback fns that do not use the `against` parameter to work.
			// This creates a sort of 'overloaded' comparator fn
			sortingCallbacks = {
				chroma: chnDiff(
					against,
					u(chromaChannel),
				),
				hue: chnDiff(against, u("h")),
				lightness: chnDiff(
					against,
					u(lightnessChannel),
				),
			};
		} else {
			// return an object with the default comparator fns
			// including the ones we did NOT want in the if... clause
			// because they're not overloadable with rhe `against` parameter
			sortingCallbacks = {
				chroma: u(chromaChannel),
				hue: u("h"),
				luminance: lmnce,
				distance: dstnce(against),
				contrast: ctrst(against),
				lightness: u(lightnessChannel),
			};
		}

		// get our collection with the specified factor
		return sort(sortingCallbacks[fact]);
	};

	// @ts-ignore:
	return iterator(factor, callback, factorObject);
}

// distributionFunc => the function to use when tweaking the channel values. We use Culori's mapper function

/**
 * Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.
 * @param collection The property you want to distribute to the colors in the collection for example `hue | luminance`
 * @param options  Optional overrides to change the default configursation
 */
function distribute<
	Options extends DistributionOptions,
>(
	collection: Collection,
	options?: Options,
): Collection {
	// Destructure the opts to check before distributing the factor
	let {
		extremum,
		excludeSelf,
		excludeAchromatic,
		colorspace,
		hueFixup,
		factor,
	} = (options || {}) as Options;
	// Set the extremum to distribute to default to max if its not min
	extremum = extremum || "max";

	factor = ["chroma"];
	// Exclude the colorToken with the specified factor extremum being distributed from the mapping
	excludeSelf = excludeSelf || false;

	// Exclude achromatic colors from the manipulations. The colors are returned in the resultant collection
	excludeAchromatic = excludeAchromatic || false;

	// if(excludeAchromatic)
	//   collection  =  map(collection,achromatic);

	// The fixup to use when tweaking the hue channels
	// @ts-ignore:
	hueFixup = factor.includes("hue")
		? hueFixup === "longer"
			? fixupHueLonger
			: fixupHueShorter
		: hf;
	colorspace = or(colorspace, "lch");

	type ExtremumObject = {
		[K in Factor]:
			| Array<{
					color: ColorToken[];
					factor: number;
			  }>
			| Array<{ [K in Factor]: number }>;
	};
	const extremumsObject = sortBy(collection, {
		factorObject: true,
		factor: factor,
		order:
			extremum !== "mean" && extremum === "max"
				? "desc"
				: "asc",
	}) as ExtremumObject;
	console.log(values(extremumsObject));

	if (extremum !== "mean")
		// @ts-ignore:
		for (const k of factor)
			extremumsObject[k] =
				// @ts-ignore:
				extremumsObject[k][0][k];
	if (extremum === "mean")
		// @ts-ignore:
		for (const k of factor)
			extremumsObject[k] = extremumsObject[k].map(
				(o) => o[factor],
			);

	return extremumsObject;
}

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
 * * `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the `'against'` param) and the specified contrast ranges.
 * * `'lightness'` - Returns colors in the specified lightness range.
 * * `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.

 * * `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the `'against'` param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
 * * `luminance` - Returns colors in the specified luminance range.
 * * `'hue'` - Returns colors in the specified hue ranges between 0 to 360.
 *
 * :::tip
 *
 * For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 * This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range.
 * But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as is else the value is treated as if in the range specified in [Culori's](https://culorijs.org/color-spaces) and will return the normalized value.
 *
 * [See the color spaces page](https://culorijs.org/color-spaces/) for the expected ranges.
 *
 * :::
 *
 * Supports expression strings e.g `'>=0.5'`.
 *
 * The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param collection The collection of colors to filter. Any object with enumerable keys and color tokens as values will work. 
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
function filterBy(
	collection: Collection = [],
	options: FilterByOptions = {
		against: "cyan",
		colorspace: "lch",
		factor: undefined,
		ranges: undefined,
	},
): Collection {
	let {
		against,
		colorspace,
		factor,
		ranges,
		factorObject,
	} = options || ({} as FilterByOptions);

	//  handling defaults internally helps avoid undefined values as compared to passing it to the parameter list
	against = against || "cyan";
	colorspace =
		COLOR_SPACES.includes(
			colorspace?.toLowerCase() as Colorspaces,
		) && /h/gi.test(colorspace)
			? colorspace
			: "lch";

	//  get the saturation and lightness channels
	const chromaChannel = mcchn(
		"c",
		colorspace,
		false,
	);

	const lightnessChannel = mcchn(
		"l",
		colorspace,
		false,
	);
	const defRanges = {
		hue: [0, 359],
		contrast: [0, 21],

		// @ts-ignore:
		chroma:
			// @ts-ignore:
			limits[colorspace][chromaChannel],

		lightness:
			// @ts-ignore:
			limits[colorspace][lightnessChannel],

		distance: [0, Number.POSITIVE_INFINITY],
		luminance: [0, 1],
	};
	let start: number, end: number;

	const callback = (fact: Factor) => {
		start = ranges[fact][0] || defRanges[fact][0];
		end = ranges[fact][1] || defRanges[fact][1];

		// the callback fn to use when comparing factors

		const filteringCallback = {
			chroma: mc(mcchn("c", colorspace)),

			lightness: mc(mcchn("l", colorspace)),
			hue: mc(`${colorspace}.h`),
			distance: dstnce(token(against)),
			contrast: ctrst(against),
			luminance: luminance,
		}[fact];

		return filteredColl(fact, filteringCallback)(
			collection,
			start,
			end,
		);
	};

	// @ts-ignore:
	return iterator(factor, callback, factorObject);
}

export { distribute, filterBy, sortBy, stats };

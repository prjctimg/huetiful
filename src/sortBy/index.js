//  @ts-nocheck

/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').Collection} Collection
 * @typedef { import('../types.js').Colorspaces} Colorspaces
 * @typedef {import('../types.js').Factor} Factor
 * @typedef {import('../types.js').Order} Order
 * @typedef {import('../types.js').SortByOptions} SortByOptions
 */

import { sortedColl, mcchn, chnDiff, wtf, or, and } from '../fp/index.js';
import { luminance } from '../luminance/luminance.js';
import { mc } from '../mc/mc.js';
import { contrast } from '../core/contrast.js';
import { differenceHyab } from 'culori/fn';

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
 * 
 * The return type is determined by the type of `collection`:
 * 
 * * Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
 * * `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.
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
function sortBy(collection = [], options = undefined) {
	let { against, colorspace, factor, order, relative } = options || {};
	factor = or(factor, undefined);
	relative = or(relative, false);
	colorspace = or(colorspace, 'lch');
	against = or(against, 'cyan');
	order = or(order, 'asc');

	const [l, c] = ['l', 'c'].map((w) => mcchn(w, colorspace, false)),
		y = (a) => sortedColl(factor, a, order),
		// returns factor cbs determined by the options
		z = (h) => {
			return or(
				and(relative, {
					chroma: y(chnDiff(against, mc(colorspace + '.' + c))),
					hue: y(chnDiff(against, mc(`${colorspace}.h`))),
					luminance: (() => {
						let v = (a) => (b) => Math.abs(luminance(a) - luminance(b));
						return y(v(against));
					})(),
					lightness: y(chnDiff(against, mc(colorspace + '.' + l)))
				}),
				{
					chroma: y(mc(colorspace + '.' + c)),
					hue: y(mc(`${colorspace}.h`)),
					luminance: y(luminance),
					distance: (() => {
						const u = (a) => (c) => differenceHyab()(a, c);

						return y(u(against));
					})(),
					contrast: (() => {
						const w = (a) => (c) => contrast(c, a);
						return y(w(against));
					})(),
					lightness: y(mc(colorspace + '.' + l))
				}
			)[h](collection);
		};

	return wtf(factor, z);
}

export { sortBy };

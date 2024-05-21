/**
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection
 * @typedef { import('./types.js').Colorspaces} Colorspaces
 * @typedef {import('./types.js').Factor} Factor
 * @typedef {import('./types.js').Order} Order
 * @typedef {import('./types.js').SortByOptions} SortByOptions
 */

import { sortedColl, mcchn, chnDiff, wtf, or } from './fp/index.js';
import { luminance } from './luminance.js';
import { mc } from './mc.js';
import { contrast } from './contrast.js';
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
	var { against, colorspace, factor, order, relative } = options || {};
	factor = or(factor, undefined);
	relative = or(relative, false);
	colorspace = or(colorspace, 'lch');
	against = or(against, 'cyan');
	order = or(order, 'asc');

	var [l, c] = ['l', 'c'].map((w) => mcchn(w, colorspace, false)),
		y = (a) => sortedColl(factor, a, order),
		// returns factor cbs determined by the options
		z = (h) => {
			var x;
			if (relative) {
				switch (h) {
					case 'chroma':
						x = y(chnDiff(against, mc(colorspace + '.' + c)));
						break;
					case 'hue':
						x = y(chnDiff(against, mc(`${colorspace}.h`)));
						break;
					case 'luminance':
						// @ts-ignore
						let v = (a) => (b) => Math.abs(luminance(a) - luminance(b));
						x = y(v(against));
						break;

					case 'lightness':
						x = y(chnDiff(against, mc(colorspace + '.' + l)));
						break;
				}
			} else {
				switch (h) {
					case 'chroma':
						x = y(mc(colorspace + '.' + c));
						break;
					case 'hue':
						x = y(mc(`${colorspace}.h`));
						break;
					case 'luminance':
						x = y(luminance);
						break;
					case 'distance':
						var u = (a) => (c) => {
							return differenceHyab()(a, c);
						};

						x = y(u(against));
						break;
					case 'contrast':
						let w = (a) => (c) => contrast(c, a);
						x = y(w(against));
						break;
					case 'lightness':
						x = y(mc(colorspace + '.' + l));
						break;
				}
				return x(collection);
			}
		};

	return wtf(factor, z);
}

export { sortBy };

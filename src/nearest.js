/**
 *
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection
 * @typedef { import('./types.js').Colorspaces} Colorspaces
 * @typedef {import('./types.js').ScaleValues} ScaleValues
 */

import { and, eq, or, values } from './fp/index.js';
import { nearest as nrst, differenceHyab } from 'culori/fn';
import { colors } from './palettes/colors.js';

/**
 * Returns the nearest color(s) in a collection as compared `against` the passed in color using the `differenceHyab` metric function.
 * 
 * * To get the nearest color from the Tailwind CSS default palette pass in the string `tailwind` as the `collection` parameter.
 * * If the `num` parameter is more than 1, the returned collection of colors has the colors sorted starting with the nearest color first
 * 
 * @param {Collection | 'tailwind'} collection The collection of colors to search for nearest colors.
 * @returns {Collection}
 * @example
 *
 * let cols = colors('all', '500')
 *
console.log(nearest(cols, 'blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
function nearest(collection, options) {
	var { against, num } = options || {};
	num = or(num, 1);
	against = or(against, 'cyan');
	const f = (a, b) => {
		var o = nrst(values(a), differenceHyab(), (c) => c)(b, num);
		return or(and(eq(num, 1), o[0]), o);
	};

	return or(
		and(eq(collection, 'tailwind'), f(colors('all'), against)),
		f(collection, against)
	);
}

export { nearest };

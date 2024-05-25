/**
 
 * @typedef { import('./types.js').Collection} ColorToken
 */

import { family } from './family.js';
import { achromatic } from './achromatic.js';
import { and } from './fp/index.js';

/**
 * Returns the name of the hue family which is biasing the passed in color.
 * 
 * * If an achromatic color is passed in it returns the string `'gray'`
 * * If the color has no bias it returns `false`.
 * @param {ColorToken} color The color to query its overtone.
 * @returns {string | false}
 * @example
 * 
 * import { overtone } from "huetiful-js";
 *
console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
 */
function overtone(color) {
	var h = family(color);

	// We check if the color can be found in the defined ranges
	// @ts-ignore
	return or(
		and(achromatic(color), 'gray'),
		// @ts-ignore
		or(and(/-/.test(h), h.split('-')[1]), false)
	);
}

export { overtone };

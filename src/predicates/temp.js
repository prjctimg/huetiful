/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').Collection} Collection
 * @typedef { import('../types.js').Colorspaces} Colorspaces
 * @typedef {import('../types.js').Stats} Stats
 
 */

import hue from '../palettes/hue.js';
import { floorCeil, inRange, keys } from '../fp/index.js';
import { mc } from '../mc/mc.js';

/**
 * Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'`.
 * 
 * @param {ColorToken} color The color to check the temperature.
 * @returns {'cool' | 'warm'} True if the color is cool else false.
 * @example
 *
 * import { isCool } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]



 */
function temp(color) {
	function f(q, y) {
		return keys(hue).some((k) =>
			inRange(floorCeil(q), hue[k][y][0], hue[k][y][1])
		);
	}

	// First we need to get the hue value which we'll pass to the predicate
	return f(mc('lch.h')(color), 'cool') ? 'cool' : 'warm';
}

export { temp };

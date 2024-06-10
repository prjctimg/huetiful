/**
 * @typedef { import('../types.js').Collection} Collection
 * @typedef { import('../types.js').SchemeType} SchemeType
 * @typedef { import('../types.js').DiscoverOptions} DiscoverOptions
 */

import { differenceHyab } from 'culori/fn';
import { or, eq, values, entries, wtf } from '../fp/index.js';
import { scheme } from '../scheme/index.js';
import { nearest } from '../nearest.js';

/**
 * Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes. 
 * 
 * The function returns different values based on the `kind` parameter passed in:
 * 
 * * An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
 * * Else it returns an object of all the palette types as keys and their values as an array of colors. 
 * 
 * If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.
 * @param {Collection} colors The collection of colors to create palettes from. Preferably use 6 or more colors for better results.
* @param {DiscoverOptions} options
 * @returns {Collection} 
 * @example
 *
 * import { discover } from 'huetiful-js'

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
  "#3e0000",
  "#310000",
]

console.log(discover(sample, { kind:'tetradic' }))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
 */
function discover(colors = [], options) {
	//  Initialize and sanitize parameters

	let { kind } = options || {};

	colors = values(colors);

	/*
	 * 					* GLOBAL VARIABLES
	 *						* f - The callback to test if colors are equal or not
	 *						* c - The targeted palettes map
	 *						* a - Result collection of the queried palettes
	 *
	 *
	 *
	 *
	 */

	// I have this weird urge to just put stuff in arrays...elegant
	var [a, c, f] = [{}, {}, (a, b) => differenceHyab()(a, b)],
		z = (u) => {
			for (const [h, g] of entries(colors)) {
				c[h] = scheme(g, { kind: u });
			}

			var j = [];
			for (var [i, r] of entries(c)) {
				// @ts-ignore
				var m = nearest(colors.filter((n) => !j.some((o) => eq(f(n, o), 0))));

				j.push(m);

				a[i] = a[i] ? a[i] : j;
			}

			return u ? a[u] : a;
		};

	// Get the values of any collection

	// @ts-ignore
	return wtf(kind, z, ['analogous', 'triadic', 'tetradic', 'complementary']);
}

export { discover };

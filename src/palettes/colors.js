/**

 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef {import('../types.js').TailwindColorFamilies} TailwindColorFamilies
 * @typedef {import('../types.js').ScaleValues} ScaleValues

 */

/// Extracted from TailwindCSS

import { and, eq, keys, or, values } from '../fp/index.js';
import tailwind from './tailwind.js';

/**
 *
 *  Returns TailwindCSS color value(s) from the default palette.
 * 
 * The function behaves as follows:
 * 
 * * If called with both `shade` and `value` parameters, it returns that color as a hex string. For example `'blue'` and `'500'` would return the equivalent of `blue-500`.
 * * If called with no parameters or just the `'all'` parameter as the `shade`, it returns an array of colors from `'050'` to `'900'` for every `shade`. 
 * 
 * Note that to specify `'050'` as a number you just pass `50`. Values are all valid as string or number for example `'100'` and`100` .
 * * If the `shade ` is `'all'` and the `value` is specified, it returns an array of colors at the specified `value` for each `shade`.
 * @param {TailwindColorFamilies | 'all'} shade The hue family to return.
 * @param  {ScaleValues} value The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid.
 * @returns {Array<string>|string} 
 * @example
 *
 * import { colors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
console.log(colors('red'));
// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]


console.log(colors('red','900'));
// '#7f1d1d'

* 

 */

function colors(shade = 'all', value = undefined) {
	var w = tailwind;

	var [d, k] = ['all', keys(w)];

	var [p, q] = [
		(h) => k.includes(h),
		(i) =>
			[
				'50',
				'100',
				'200',
				'300',
				'400',
				'500',
				'600',
				'700',
				'800',
				'900'
			].includes(i?.toString())
	];

	// @ts-ignore
	shade = shade.toLowerCase();
	var o;
	if (eq(shade, d)) {
		if (q(value)) {
			o = k.map((y) => w[y][value]);
		} else {
			o = k.map((y) => values(w[y])).flat(2);
		}
	} else if (p(shade)) {
		if (q(value)) {
			o = w[shade][value];
		} else {
			o = values(w[shade]);
		}
	} else if (or(!shade, and(!shade, !value))) {
		o = k.map((h) => w[h]);
	}
	return o;
}

export { colors };

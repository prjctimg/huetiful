// @ts-nocheck
/**
 * @typedef { import('../types.js').Collection} ColorToken
 */

import { and, gte, or } from '../fp/index.js';
import { token } from '../core/token.js';

/**
 * Checks if a color token is achromatic (without hue or simply grayscale).
 * 
 * @param {ColorToken} color The color token to test if it is achromatic or not.
 * @returns {boolean}
 * [[include:achromatic.md]]

 */
function achromatic(color) {
	color = token(color, { kind: 'obj', targetMode: 'lch' });

	// If a color has no lightness then it has no hue so its technically not achromatic since white and black are not grayscale
	var f = (x) => typeof x === 'undefined' || x === 0 || x === NaN;

	return or(
		and(
			and(
				or(f(color['l']), gte(color['l'], 100)),
				or(!f(color['c'], f(color['c'])))
			),
			false
		),
		or(and(f(color['c']), true), false)
	);
}

export { achromatic };

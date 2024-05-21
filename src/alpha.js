/**
 * @typedef { import('./types.js').Collection} ColorToken
 */

import { token } from './token.js';
import {
	and,
	eq,
	exprParser,
	getAlphaMode,
	inRange,
	isArray,
	or
} from './fp/index.js';

/**
 *
 * Returns the color token's alpha channel value.
 * 
 *  If the the `amount` parameter is passed in, it sets the color token's alpha channel with the `amount` specified 
 * and returns the color as a hex string.
 * 
 * * Also supports math expressions as a `string` for the `amount` parameter. 
 * For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value. 
 * In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `*  -  /  +`.
 * 
 * @param {ColorToken} color The color with the opacity/alpha channel to retrieve or set.
 * @param {number | string} amount The value to apply to the opacity channel. The value is between `[0,1]`
 * @returns {number|string}
 * @example
 *
 * // Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
 */
function alpha(color, amount = undefined) {
	const c = 'alpha',
		m = getAlphaMode(color);

	var o = token(color, { targetMode: m, kind: 'obj' });
	if (typeof amount === 'undefined' || null) {
		return o[c];
	} else if (typeof amount === 'number') {
		if (inRange(amount, 0, 1)) {
			o[c] = amount;
		} else {
			o[c] = amount / 100;
		}
	} else if (typeof amount === 'string') {
		// @ts-ignore
		o = exprParser(o, c, amount);
	}

	return token(o);
}

export { alpha };

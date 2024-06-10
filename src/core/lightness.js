/**
 * @typedef { import('../types.js').Collection} ColorToken
 */

import { max, min } from '../fp/index.js';
import { token } from './token.js';

/**
 * Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.
 * @param {ColorToken} color The color to darken.
 * @param {number} amount The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.1`.
 * @returns {string}
 * @example
 *
 *  import { lightness } from "huetiful-js";
 * 
 // dakening a color
console.log(lightness('blue', 0.3, true));

// '#464646'

// brightening a color, we can omit the final param 
// because it's false by default.
console.log(brighten('blue', 0.3));
//#464646


 */
function lightness(color, amount, darken = false) {
	var f = () => {
		// @ts-ignore
		var o = token(color, { kind: 'obj', targetMode: 'lab65' });
		if (typeof amount === 'number') {
			// @ts-ignore
			o['l'] = (darken ? max : min)([
				100,
				o['l'] + 100 * (darken ? -amount : amount)
			]);
		}
		// @ts-ignore
		return token(o);
	};
	// @ts-ignore
	return f();
}

export { lightness };

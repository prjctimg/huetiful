/**
 * @typedef { import('./types.js').Collection} ColorToken
 */

import { max, token, min } from './index.js';

function f(a = 0.1, b, c) {
  // @ts-ignore
  var o = token('object', { targetMode: 'lab65' })(c);
  if (typeof a === 'number') {
    // @ts-ignore
    o['l'] = b([100, o['l'] + 100 * a]);
  }
  // @ts-ignore
  return token(o);
}

/**
 * Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.
 * @param {ColorToken} color The color to darken.
 * @param {number} amount The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.1`.
 * @returns {string}
 * @example
 *
 *  import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646

 */
function darken(color, amount) {
  // @ts-ignore
  return f(-amount, max, color);
}
/**
 * The inverse of `darken`. Brightens the passed in color by increasing the lightness channel by `amount` of the channel. For example `0.3` means increase the lightness by `0.3` of the channel's current value.
 * @param {ColorToken} color The color to brighten.
 * @param {number} amount The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.1`.
 * @returns {string} 
 * @example
 *
 *  import { brighten } from "huetiful-js";
 *
console.log(brighten('blue', 0.3, 'lch'));
//#464646

 */
function brighten(color, amount) {
  return f(amount, min, color);
}

export { brighten, darken };

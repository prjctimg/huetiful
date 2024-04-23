/**
 * @typedef {import('../types/types.js').ColorToken} ColorToken
 */

import { token } from './token.js';
import { gmchn } from './fp/index.js';

/**
 * Gets the value of the specified channel on the passed in color.
 * @param {string} mc The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.
 * @example
 *
 * import { get } from 'huetiful-js'

console.log(get('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 * */
export function get(mc) {
  /**
   * @public
   *
   * @param {ColorToken} color The color being queried.
   * @returns {number} The value of the queried channel.
   */
  return (color) => {
    const [m, c] = (mc || color[0] || color['mode']).split('.');
    // @ts-ignore
    // @ts-ignore
    var o;
    if (Array.isArray(color) || typeof color === 'object') {
      if (m === (color[0] || color['mode'])) {
        if (Array.isArray(color)) {
          o = color[gmchn(m).indexOf(c)];
        } else {
          o = color[c];
        }
      }
    } else {
      // @ts-ignore
      o = token('object', { targetMode: m })(color)[c];
    }
    return o;
  };
}

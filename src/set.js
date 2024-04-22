/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 */

import { exprParser } from './fp';
import { token } from './token.js';

/**
 *  Sets the value for the specified channel in a color.
 * @param {string} mc The mode and channel to work with. For example 'rgb.b'.
 * @example
 *
 * import { set } from 'huetiful-js'

let myColor = set('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
 */
export function set(mc) {
  /**
   * @public
   * @param {number|string} value The value to set on the queried channel. Also supports expressions as strings e.g set('lch.c)("#fc23a1","*0.5")
   * @param {ColorToken} color Any recognizable color token.
   * @returns {ColorToken} The mutated color. Preserves the `ColorToken` type of the passed in color.
 
   */
  return (color, value) => {
    const [m, c] = mc.split('.');

    // @ts-ignore
    const o = token('object', { targetMode: m })(color);

    if (c) {
      if (typeof value === 'number') {
        // @ts-ignore
        o[c] = value;
      } else if (typeof value === 'string') {
        // @ts-ignore
        exprParser(o, c, value);
      } else {
        throw new Error(`unsupported value for set`);
      }

      // @ts-ignore
      return o;
    } else {
      throw new Error(`unknown channel ${c} in mode ${m}`);
    }
  };
}

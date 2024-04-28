/**
 * @typedef {import('./types.js').Collection} ColorToken
 */
import { exprParser } from './fp/index.js';
import { token } from './token.js';
import { gmchn } from './fp/index.js';

/**
 * Sets the value of the specified channel on the passed in color.
 * 
 * If the `amount` parameter is `undefined` it gets the value of the specified channel.
 * @param {string} modeChannel The mode and channel to be retrieved. For example `'rgb.b'` will return the value of the blue channel in the RGB color space of that color.
 
 * @example
 *
 * import { mc } from 'huetiful-js'

console.log(mc('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 * 
*/

function mc(modeChannel) {
  /**
   
   * @param {ColorToken} color Any recognizable color token.
  * @param {string|number} [value=undefined] The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"`
 
   * @returns  {number|ColorToken}
 
   */
  return (color, value) => {
    if (!value) {
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
    } else {
      {
        const [m, c] = modeChannel.split('.');

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
      }
    }

    const [m, c] = (modeChannel || color[0] || color['mode']).split('.');
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

export { mc };

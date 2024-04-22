/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').FactObject} FactObject
 */

import { adjustHue, rand, or } from './fp';
import { token } from './token.js';
import { family } from './family.js';
import { get } from './get.js';
import { set } from './set.js';

/**
 * Returns the complementary color (180 degrees from that color) of the passed in color token.
 * 
 * The object (if the `obj` parameter is `true`) returns:
 * 
 * * The complimentary color for the passed in color token
 * * The hue family from which the complimentary color was found.
 * 
 * The function is internally guarded against achromatic colors which means no action will be done on a gray color and it will be returned as is. Pure black or white (`'#000000'` and `'#ffffff'` respectively) may return unexpected results.
 * 
 * @param {ColorToken} color The color to retrieve its complimentary hue.
 * @param {boolean} obj Optional boolean whether to return an object with the result color hue family or just the result color. Default is `false`.
 * @returns {ColorToken|FactObject}
 * @example
 *import { complementary } from "huetiful-js";
 *
 *
console.log(complementary("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(complementary("purple"))
// #005700ff
 */
function complimentary(color, colorspace, obj = false) {
  var mc = `${or(colorspace, 'jch')}.h`;

  var h = adjustHue(get(mc)(color) + 180 * rand(0.965, 1));

  var o = (h && {
    hue: family(h),
    // @ts-ignore
    color: token('hex')(set(mc)(color, h))
  }) || { hue: 'gray', color: color };
  // @ts-ignore
  return (obj && o) || o['color'];
}

export { complimentary };

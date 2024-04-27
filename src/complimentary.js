/**
 * @typedef { import('../types/types.js').Collection} ColorToken
 * @typedef { import('../types/types.js').FactObject} FactObject
 */

import { adjustHue, rand, or } from './fp/index.js';
import { token } from './token.js';
import { family } from './family.js';
import { mc } from './mc.js';

/**
 * Returns the complimentary color of the passed in color token. A complimentary color is 180 degrees away on the hue channel.
 * 
 * The object (if the `obj` parameter is `true`) returns:
 * 
 * * The complimentary color for the passed in color token
 * * The hue family from which the complimentary color was found.
 * 
 * The function is internally guarded against achromatic colors which means no action will be done on a gray color and it will be returned as is. Pure black or white (`'#000000'` and `'#ffffff'` respectively) may return unexpected results.
 * 
 * @param {ColorToken} baseColor The color to retrieve its complimentary equivalent.
 * @param {boolean} obj Optional boolean whether to return an object with the result color's hue family or just the result color. Default is `false`.
 * @returns {ColorToken|FactObject}
 * @example
 *import { complimentary } from "huetiful-js";
 *
 *
console.log(complimentary("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(complimentary("purple"))
// #005700ff
 */
function complimentary(baseColor, obj = false) {
  var h = adjustHue(mc('jch.h')(baseColor) + 180 * rand(0.965, 1));

  var o = (h && {
    hue: family(h),
    // @ts-ignore
    color: token('hex')(set('jch.h')(baseColor, h))
  }) || { hue: 'gray', color: baseColor };
  // @ts-ignore
  return (obj && o) || o['color'];
}

export { complimentary };

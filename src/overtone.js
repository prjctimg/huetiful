/**
 
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 */

import { family } from './family.js';
import { achromatic } from './achromatic.js';

/**
 * @public
 
 * Returns the hue which is biasing the passed in color
 * @param {ColorToken} color The color to query its overtone.
 * @returns {string} The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.
 * @example
 *
 * import { overtone } from "huetiful-js";
 *
console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
 */
function overtone(color) {
  var h = family(color);

  // We check if the color can be found in the defined ranges
  // @ts-ignore
  return (
    (achromatic(color) && 'gray') ||
    // @ts-ignore
    (/-/.test(h) && h.split('-')[1]) ||
    false
  );
}

export { overtone };

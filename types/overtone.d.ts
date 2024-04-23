export type ColorToken = import('../types/types.js').ColorToken;
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
export function overtone(color: ColorToken): string;

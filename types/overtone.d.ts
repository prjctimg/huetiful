export type ColorToken = import('./types.js').Collection;
/**
 * Returns the name of the hue family which is biasing the passed in color.
 *
 * * If an achromatic color is passed in it returns the string `'gray'`
 * * If the color has no bias it returns `false`.
 * @param {ColorToken} color The color to query its overtone.
 * @returns {string | false}
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
export function overtone(color: ColorToken): string | false;

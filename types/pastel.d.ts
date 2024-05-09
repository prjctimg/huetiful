export type ColorToken = import('./types.js').Collection;
/**
 * Returns a random pastel variant of the passed in color token.
 *
 * @param {ColorToken} baseColor The color to return a pastel variant of.
 * @returns {ColorToken} A random pastel color.
 * @example
 *
import { pastel } from 'huetiful-js'

console.log(pastel("green"))

// #036103ff
 */
export function pastel(baseColor: ColorToken): ColorToken;

export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type SchemeType = import('../types/types.js').SchemeType;
/**
 *@public
 *  Generates a randomised classic color scheme from a single color.
 * @param {SchemeType|string}  kind  Any classic color scheme either .
  * @returns {Collection} A collection of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */
export function scheme(kind?: SchemeType | string): Collection;

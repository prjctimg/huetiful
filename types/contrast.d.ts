export type ColorToken = import('../types/types.js').ColorToken;
/**
 * Gets the contrast between the passed in colors. Swapping color `a` and `b` in the parameter list doesn't change the resulting value.
 * @param {ColorToken} a First color to query.
 * @param {ColorToken} b The color to compare against.
 * @returns {number}
 * @example
 *
 * import { contrast } from 'huetiful-js'
 *
 * console.log(contrast("black", "white"));
 * // 21
 */
export function contrast(a: ColorToken, b: ColorToken): number;

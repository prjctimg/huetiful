export type ColorToken = import('../types/types.js').ColorToken;
export type FactObject = import('../types/types.js').FactObject;
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
export function complimentary(color: ColorToken, colorspace: any, obj?: boolean): ColorToken | FactObject;

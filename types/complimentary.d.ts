export type ColorToken = import('./types.js').Collection;
export type FactObject = import('./types.js').FactObject;
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
export function complimentary(baseColor: ColorToken, obj?: boolean): ColorToken | FactObject;

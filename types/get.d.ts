/**
 * Gets the value of the specified channel on the passed in color.
 * @param {string} mc The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.
 * @example
 *
 * import { get } from 'huetiful-js'

console.log(get('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 * */
export function get(mc: string): (color: ColorToken) => number;
export type ColorToken = import('../types/types.js').ColorToken;

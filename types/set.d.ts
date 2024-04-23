/**
 *  Sets the value for the specified channel in a color.
 * @param {string} mc The mode and channel to work with. For example 'rgb.b'.
 * @example
 *
 * import { set } from 'huetiful-js'

let myColor = set('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
 */
export function set(mc: string): (color: ColorToken, value: number | string) => ColorToken;
export type ColorToken = import('../types/types.js').ColorToken;

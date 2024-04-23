export type ColorToken = import('../types/types.js').ColorToken;
/**
 * The inverse of `darken`. Brightens the passed in color by increasing the lightness channel by `amount` of the channel. For example `0.3` means increase the lightness by `0.3` of the channel's current value.
 * @param {ColorToken} color The color to brighten.
 * @param {number} amount The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.5`.
 * @returns {ColorToken} The brightened color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 *  import { brighten } from "huetiful-js";
 *
console.log(brighten('blue', 0.3, 'lch'));
//#464646

 */
export function brighten(color: ColorToken, amount?: number): ColorToken;
/**
 * Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.
 * @param {ColorToken} color The color to darken.
 * @param {number} amount The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`.
 * @returns {ColorToken} The darkened color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 *  import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646

 */
export function darken(color?: ColorToken, amount?: number): ColorToken;

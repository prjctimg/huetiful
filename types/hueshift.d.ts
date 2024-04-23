export type HueShiftOptions = import('../types/types.js').HueShiftOptions;
export type ColorToken = import('../types/types.js').ColorToken;
/**
 * Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts down) from a single color. Min and max lightness values determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the scheme of the hueshift. Colors are internally converted to LCH.
 * @param {HueShiftOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 *@returns A collection of the hueshifted colors. The length of the resultant array is the number of `iterations` multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the `ColorToken` type of the passed in color.
 * @example
 * import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
  '#ffffe1', '#ffdca5',
  '#ca9a70', '#935c40',
  '#5c2418', '#3e0000',
  '#310000', '#34000f',
  '#38001e', '#3b002c',
  '#3b0c3a'
]
 */
export function hueshift(color: any, options?: HueShiftOptions): import("../types/types.js").ColorToken[];

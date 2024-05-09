export type HueShiftOptions = import('./types.js').HueshiftOptions;
export type ColorToken = import('./types.js').Collection;
/**
 * Creates a palette of hue shifted colors from the passed in color.
 *
 * Hue shifting means that:
 *
 * * As a color becomes lighter, its hue shifts up (increases).
 * * As a color becomes darker its hue shifts down (decreases).
 *
 * The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extreme respectively.
 *
 *  The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or `(num * 2) + 1`.
 *
 * @param baseColor The color to use as the base of the palette.
 * @param {HueShiftOptions} options The optional overrides object.
 *@returns {Array<string>}
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
export function hueshift(baseColor: any, options?: HueShiftOptions): Array<string>;

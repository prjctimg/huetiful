//@ts-nocheck
import { defaultTo, multiply } from "lodash-es";
import { converter, formatHex } from "culori";
import type { HueColorSpaces, Color } from "../paramTypes.ts";
// ported froma chroma-js brighten

/**
 * @function
 * Darkens the color by reducing the lightness channel. .
 * @param   color The color to darken.
 * @param amount The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns color The darkened color.
 */
const darken = (color: Color, amount: number): Color => {
  defaultTo(amount, 1);
  const default_mode = "lab";
  const Kn = 18;

  // Addv acheck here like the one in set.js
  const lab = converter(mode)(color);
  lab["l"] -= multiply(Kn, amount);
  return formatHex(converter(default_mode)(lab));
};

/**
 *
 * @param color The color to brighten.
 * @param amount The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns
 */
const brighten = (color: Color, amount: number | string): Color => {
  return darken(color, -amount);
};

export { brighten, darken };

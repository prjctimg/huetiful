import { defaultTo, multiply } from "lodash-es";
import { converter, formatHex } from "culori";
import type { HueColorSpaces, baseColor } from "../paramTypes.ts";
// ported froma chroma-js brighten

/**
 * Darkens the color by reducing the lightness channel. .
 * @param   color The color to darken.
 * @param amount The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns color The darkened color.
 */
const darken = (
  color: baseColor,
  amount: number,
  mode: keyof HueColorSpaces
) => {
  defaultTo(amount, 1);
  const mode = "lab";
  const Kn = 18;

  // Addv acheck here like the one in set.js
  const lab = converter(mode)(color);
  lab["l"] -= multiply(Kn, amount);
  return formatHex(converter(mode)(lab));
};

/**
 *
 * @param color The color to brighten.
 * @param amount The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns
 */
const brighten = (color: baseColor, amount: number | string) => {
  return darken(color, -amount);
};

export { brighten, darken };

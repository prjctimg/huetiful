import { useMode, modeRgb } from "culori/fn";
import { toHex } from "./toHex.ts";
import type { Color } from "../types";

/**
 * @function
 * @description Returns the numerical equivalent of a color.
 * @param color The color to convert to its numerical equivalent.
 * @returns value The numerical value of the color from 0 to 16,777,215.
 * @example
 * 
 * import { rgb2num } from 'huetiful-js'

console.log(rgb2num("b2c3f1"))
// 11715569
 */

const rgb2num = (color: Color): number => {
  const toRgb = useMode(modeRgb);
  const rgb: Color = toRgb(toHex(color));

  return ((255 * rgb["r"]) << 16) + ((255 * rgb["g"]) << 8) + 255 * rgb["b"];
};

export { rgb2num };

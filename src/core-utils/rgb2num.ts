//@ts-nocheck

import { converter } from "culori";
import type { Color } from "../paramTypes.ts";

/**
 * @function
 * Returns the numerical equivalent of a color.
 * @param color The color to convert to its numerical equivalent.
 * @returns value The numerical value of the color from 0 to 16,777,215.
 */

const rgb2num = (color: Color): number => {
  const rgb = converter("rgb")(color);
  return (rgb["r"] << 16) + (rgb["g"] << 8) + rgb["b"];
};

export { rgb2num };

import { add, inRange, stubFalse, stubTrue } from "lodash-es";
import { interpolate } from "culori";
import type { Color } from "../paramTypes.ts";
import { rgb2num } from "../core-utils/rgb2num.ts";

/**
 * @function
 *  @description Checks if a color is achromatic(without hue or simply grayscale).
 * @param color The color to test if it is achromatic or not.
 * @returns boolean Returns true if the color is achromatic else false
 */
const isAchromatic = (color: Color): boolean => {
  const black = "#000000",
    white = "#FFFFFF";
  // What tests can I use to detemine if a color is achromatic

  // 1) Interpolate between white and black and then get the range of the colors from rgb2num. Use rgb mode internally.
  // create the grayscale function
  const gray = interpolate([black, white]);

  //Capture the min and max numerical range for grayscale colors
  const t_min = 0.005,
    t_max = 0.995;
  const min = rgb2num(gray(t_min)),
    max = rgb2num(gray(t_max));

  return inRange(rgb2num(color), min, max) ? stubTrue() : stubFalse();
  // 2) Check if the saturation channel is zero or falsy for color spaces with saturation/chroma channel
};

export { isAchromatic };

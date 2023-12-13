import { filteredArr } from "../fp/array/filteredArr.ts";
import { getChannel } from "../getters_and_setters/get.ts";
import type { Color, Factor } from "../types";

//filterByHue takes an array of colors and
/**
 * @function
 * Returns colors in the specified hue ranges between 0 to 360.
 * @param colors The array of colors to filter.
 * @param  startHue The minimum end of the hue range.
 * @param  endHue The maximum end of the hue range.
 * @returns  Array of the filtered colors.
 * @example
 * let sample = [
  '#00ffdc',
  '#00ff78',
  '#00c000',
  '#007e00',
  '#164100',
  '#ffff00',
  '#310000',
  '#3e0000',
  '#4e0000',
  '#600000',
  '#720000',
]

filterByHue(sample, 20, 80)

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
 */

const filterByHue = (colors: Color[], startHue = 0, endHue = 360): Color[] => {
  const factor: Factor = "hue";
  const cb = getChannel("lch.h");

  return filteredArr(factor, cb)(colors, startHue, endHue);
};

export { filterByHue };

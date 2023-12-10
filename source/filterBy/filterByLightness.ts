import { filteredArr } from "../fp/array/filteredArr.ts";
import { getChannel } from "../getters_and_setters/get.ts";
import { Color, Factor } from "../types";
/**
 *  @function
 * @description Returns an array of colors in the specified lightness range. The range is between 0 and 100.
 * @param  colors The array of colors to filter.
 * @param  startLightness The minimum end of the lightness range.
 * @param  endLightness The maximum end of the lightness range.
 * @returns Array of filtered colors.
 * @example
 * 
 * import { filterByLightness } from 'huetiful-js'
let sample = [
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

filterByLightness(sample, 20, 80)

// [ '#00c000', '#007e00', '#164100', '#720000' ]
 */

const filterByLightness = (
  colors: Color[],
  startLightness = 5,
  endLightness = 100
): Color[] => {
  // Formatting color tokens to parseable type
  // Create an object that has the lightness and name of color as properties.
  const factor: Factor = "lightness";
  const cb = getChannel("lch.l");

  return filteredArr(factor, cb)(colors, startLightness, endLightness);
};

export { filterByLightness };

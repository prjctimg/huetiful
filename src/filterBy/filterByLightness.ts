import { colorObjArr, filteredArr } from "../core-utils/helpers.ts";
import { getChannel } from "../core-utils/get.ts";
import { Color, factor } from "../paramTypes.ts";
/**
 *  @function
 * @description Returns an array of colors in the specified lightness range. The range is between 0 and 100.
 * @param  colors The array of colors to filter.
 * @param  startLightness The minimum end of the lightness range.
 * @param  endLightness The maximum end of the lightness range.
 * @returns Array of filtered colors.
 */

const filterByLightness = (
  colors: Color[],
  startLightness = 5,
  endLightness = 100
): Color[] => {
  // Formatting color tokens to parseable type
  // Create an object that has the lightness and name of color as properties.
  const factor: factor = "lightness";
  const cb = getChannel("lch.l");

  return filteredArr(factor, cb)(colors, startLightness, endLightness);
};

export { filterByLightness };

import { colorObjArr, filteredArr } from "../core-utils/helpers.ts";
import { getChannel } from "../core-utils/get.ts";
import { Color, filterBy } from "../paramTypes.ts";
/**
 *  @function
 * Returns an array of colors in the specified lightness range. The range is between 0 and 100.
 * @param  colors The array of colors to filter.
 * @param  startLightness The minimum end of the lightness range.
 * @param  endSaturation The maximum end of the lightness range.
 * @returns Array of filtered colors.
 */

const filterByLightness: filterBy = (
  colors,
  startLightness = 5,
  endSaturation = 100
): Color[] => {
  // Formatting color tokens to parseable type
  // Create an object that has the lightness and name of color as properties.
  const factor = "lightness";
  const cb = getChannel("lch.l");

  return filteredArr(factor, cb)(colors, startLightness, endSaturation);
};

export { filterByLightness };

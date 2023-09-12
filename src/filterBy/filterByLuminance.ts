import { colorObjArr, filteredArr } from "../core-utils/helpers.ts";
import { wcagLuminance } from "culori";
import { factor } from "../paramTypes.js";
import { Color } from "../paramTypes.ts";
/**
 *  @function
 * Returns an array of colors in the specified luminance range. The range is normalised to [0,1].
 * @param  colors The array of colors to filter.
 * @param  startLuminance The minimum end of the luminance range.
 * @param  endLuminance The maximum end of the luminance range.
 * @returns Array of filtered colors.
 */

const filterByLuminance = (
  colors: Color[],
  startLuminance = 0.05,
  endLuminance = 1
): Color[] => {
  // Formatting color tokens to parseable type
  // Create an object that has the luminance and name of color as properties.
  const factor: factor = "luminance";
  const cb = wcagLuminance;

  return filteredArr(factor, cb)(colors, startLuminance, endLuminance);
};

export { filterByLuminance };

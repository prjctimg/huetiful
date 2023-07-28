import { colorObjArr, filteredArr } from "./helpers.ts";
import { wcagLuminance } from "culori";

/**
 *  @function
 * Returns an array of colors in the specified luminance range
 * @param  colors The array of colors to filter.
 * @param  startLuminance The minimum end of the luminance range.
 * @param  endLuminance The maximum end of the luminance range.
 * @returns Array of filtered colors.
 */

const filterByLuminance = (
  colors = [],
  startLuminance = 0.05,
  endLuminance = 1
) => {
  // Formatting color tokens to parseable type
  // Create an object that has the luminance and name of color as properties.
  const factor = "luminance";
  const cb = wcagLuminance;

  return filteredArr(factor)(
    colorObjArr(factor, cb)(colors),
    startLuminance,
    endLuminance
  );
};

export { filterByLuminance };

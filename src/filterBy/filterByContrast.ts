import { colorObjArr, filteredArr } from "../core-utils/helpers.ts";
import { wcagContrast } from "culori";

import { Color, factor } from "../paramTypes.ts";
/**
 *  @function
 * Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * @param  colors The array of colors to filter.
 * @param  startContrast The minimum end of the contrast range.
 * @param  endContrast The maximum end of the contrast range.
 * @returns Array of filtered colors.
 */

const filterByContrast = (
  colors: Color[],
  against: Color,
  startContrast = 0.05,
  endContrast?: number
): Color[] => {
  // Formatting color tokens to parseable type
  // Create an object that has the contrast and name of color as properties.
  const factor: factor = "contrast";
  const cb = (against: Color) => (color: Color) => wcagContrast(color, against);

  return filteredArr(factor, cb(against))(colors, startContrast, endContrast);
};

export { filterByContrast };

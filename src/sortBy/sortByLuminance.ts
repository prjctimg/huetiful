import type { sortBy } from "../paramTypes.ts";
import { sortedArr } from "../core-utils/helpers.ts";
import { getLuminance } from "../core-utils/luminance.ts";

/**
 * @function
 * @description Sorts colors according to the relative brightness as defined by WCAG definition.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns An array of the sorted color values.
 
 */

const sortByLuminance: sortBy = (colors, order) => {
  const factor = "luminance";
  const cb = getLuminance;
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colors);
};

export { sortByLuminance };

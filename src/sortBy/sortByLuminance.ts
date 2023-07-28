import type { sortBy } from "../paramTypes.js";

import { getLuminance } from "../core-utils/luminance.js";

/**
 * Sorts colors according to the relative brightness as defined by WCAG definition.
 * @param {Array<string>} colors The array of colors to sort
 * @param {string} order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns [colors] An array of the sorted color values.
 * @see Uses chroma.luminance() https://vis4.net/chroma-js/#color-luminance
 */

const sortByLuminance: sortBy = (colors, order) => {
  const factor = "luminance";
  const cb = getLuminance;
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colorObjArr, colors);
};

export { sortByLuminance };

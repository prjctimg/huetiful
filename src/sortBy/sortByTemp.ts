import { getTemp } from "../core-utils/rgb2temperature.ts";
import type { baseColor } from "../paramTypes.ts";
import { colorObjArr, sortedArr } from "../core-utils/helpers.ts";
import { defaultTo } from "lodash";

/**
 * @function
 * Sorts colors according to temperature value in Kelvins according to the temperature scale in Chroma.temperature(). Achromatic colors may return awkward results.
 * @param  colors The array of colors to sort
 * @param {'warm'|'cool'} order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns [colors] An array of the sorted color values.
 * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
 */

const sortByTemp = (
  colors: baseColor[],
  order: "asc" | "desc"
): baseColor[] => {
  // Purifying the data.All colors are converted to the specified mode to ensure unbiased results.
  const factor = "temp";
  const cb = getTemp;
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colorObjArr, colors);
};

export { sortByTemp };

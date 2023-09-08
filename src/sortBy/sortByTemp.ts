import { getTemp } from "../core-utils/getTemp.ts";
import type { Color, factor } from "../paramTypes.ts";
import { sortedArr } from "../core-utils/helpers.ts";

/**
 * @function
 * @description Sorts colors according to temperature value in Kelvins according to the temperatu. Achromatic colors may return awkward results.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns  An array of the sorted color values.
 * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
 */

const sortByTemp = (colors: Color[], order: "asc" | "desc"): Color[] => {
  // Purifying the data.All colors are converted to the specified mode to ensure unbiased results.
  const factor: factor = "temp";
  const cb = getTemp;
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colors);
};

export { sortByTemp };

// This function is hanging. Debug it

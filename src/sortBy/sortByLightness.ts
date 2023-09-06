import type { factor, Color } from "../paramTypes.ts";
import { getChannel } from "../core-utils/get.ts";
import { sortedArr } from "../core-utils/helpers.ts";

/**
 * @function
 * @description Sorts colors according to their lightness.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns An array of the sorted color values.
 */

const sortByLightness = (colors: Color[], order: "asc" | "desc"): Color[] => {
  const factor: factor = "lightness";
  const cb = getChannel("lch.l");
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colors);
};

export { sortByLightness };

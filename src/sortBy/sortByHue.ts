import { getChannel } from "../core-utils/get.ts";
import { sortedArr } from "../core-utils/helpers.ts";
import type { factor, Color } from "../paramTypes.ts";

/**
 * @function
 * @description Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported
 * @param  colors The array of colors to sort
 * @param order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns  An array of the sorted color values.
 * @param mode The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.
 */

// Todo: Add the mode param so that users can select mode to work with. The default is
const sortByHue = (colors: Color[], order: "asc" | "desc"): Color[] => {
  const factor: factor = "hue";
  const cb = getChannel("lch.h");
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colors);
};

export { sortByHue };

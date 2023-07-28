import _ from "lodash";
import purify from "../core-utils/purify.mjs";
import { getChannel } from "../core-utils/helpers.mjs";
import hslHueMap from "../color-maps/hslHueMap.mjs";
import { differenceEuclidean, nearest } from "culori";
import type { Colors, HueColorSpaces } from "../colors/colors.js";
import { sortBy } from "../paramTypes.js";

/**
 * @function sortByHue * Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported
 * @param {Array<any>} colors The array of colors to sort
 * @param {string} order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns [colors] An array of the sorted color values.
 * @param {string} mode The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.
 */

// Todo: Add the mode param so that users can select mode to work with. The default is
const sortByHue: sortBy = (colors, order) => {
  const factor = "hue";
  const cb = getChannel("lch.h");
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colorObjArr, colors);
};

export { sortByHue };

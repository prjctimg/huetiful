import type { Factor, Color, HueColorSpaces } from "../types";
import { getChannel } from "../getters_and_setters/get.ts";
import { sortedArr } from "../fp/array/sortedArr.ts";
import { checkArg } from "../fp/misc.ts";
import { matchLightnessChannel } from "../fp/string/matchLightnessChannel.ts";

/**
 * @function
 * @description Sorts colors according to their lightness.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @param mode The mode colorspace to use for filtering color lightness. Defaut is lch65
 * @returns An array of the sorted color values.
 * @example
 * import { sortByLightness } from "huetiful-js";

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
]

sortByLightness(sample)

// [
  '#310000', '#3e0000',
  '#4e0000', '#600000',
  '#720000', '#164100',
  '#007e00', '#00c000',
  '#00ff78', '#00ffdc',
  '#ffff00'
]


sortByLightness(sample,'desc')

// [
  '#ffff00', '#00ffdc',
  '#00ff78', '#00c000',
  '#007e00', '#164100',
  '#720000', '#600000',
  '#4e0000', '#3e0000',
  '#310000'
]

 */
// For lightness use a different color space
const sortByLightness = (
  colors: Color[],
  order: "asc" | "desc",
  mode?: HueColorSpaces
): Color[] => {
  const factor: Factor = "lightness";
  mode = checkArg(mode, "lch65");

  const cb = getChannel(`${mode}.${matchLightnessChannel(mode)}`);
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colors);
};

export { sortByLightness };

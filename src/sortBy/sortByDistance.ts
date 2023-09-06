import type { factor, Color, ColorSpaces } from "../paramTypes.ts";
import { getChannel } from "../core-utils/get.ts";
import { sortedArr } from "../core-utils/helpers.ts";
import { differenceEuclidean } from "culori";

/**
 * @function
 * @description Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is compared against a color which is used for comparison for all the colors in the array.
 * @param  colors The array of colors to sort.
 * @param against The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array.
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
 * @param mode The color space to calculate the distance in .
 * @returns An array of the sorted color values.
 */

const sortByDistance = (
  colors: Color[],
  against: Color,
  order?: "asc" | "desc",
  {
    mode,
    weights,
  }: { mode?: ColorSpaces; weights?: [number, number, number, number] }
): Color[] => {
  const factor: factor = "distance";
  const cb = (against: Color, mode: ColorSpaces) => (color: Color) =>
    differenceEuclidean(mode || "lch", weights || [1, 1, 1, 0])(against, color);
  //Sorting the color array of object by the 'distance' property in the specified order.

  return sortedArr(factor, cb(against, mode), order)(colors);
};

export { sortByDistance };

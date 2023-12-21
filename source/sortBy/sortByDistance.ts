import type {
  Factor,
  Color,
  ColorSpaces,
  ColorDistanceOptions,
} from "../types";
import { sortedArr } from "../fp/array/sortedArr.ts";
import { differenceEuclidean } from "culori/fn";
import { checkArg } from "../fp/misc.ts";

// Use lchuv

/**
 * @function
 * @description Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist
 * @param  colors The array of colors to sort.
 * @param against The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array.
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
 * @param mode The color space to calculate the distance in . The default is the cylindrical variant of the CIELUV colorspace ('lchuv')
 * @returns An array of the sorted color values.
 * @example
 * import { sortByDistance } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortByDistance(sample, 'yellow', 'asc', {
    mode: 'lch',
  })
)

// [ 'brown', 'red', 'green', 'purple' ]

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortByDistance(sample, 'yellow', 'asc', {
    mode: 'lch',
  })
)

// [ 'green', 'brown', 'red', 'purple' ]
 */

function sortByDistance(
  colors: Color[],
  against: Color,
  order?: "asc" | "desc",
  options?: ColorDistanceOptions
): Color[] {
  let { mode, weights } = options || {};

  mode = checkArg(mode, "lchuv");
  weights = checkArg(weights, [1, 1, 1, 0]);
  const factor: Factor = "distance";

  const cb = (against: Color, mode: ColorSpaces) => (color: Color) => {
    // @ts-ignore
    return differenceEuclidean(mode, weights)(against, color);
  };

  //Sorting the color array of object by the 'distance' property in the specified order.
  return sortedArr(factor, cb(against, mode), order)(colors);
}

export { sortByDistance };

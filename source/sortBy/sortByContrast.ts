// @ts-nocheck
import type { Factor, Color } from "../types";
import { sortedArr } from "../fp/array/sortedArr.ts";
import { wcagContrast } from "culori/fn";

/**
 * @function
 * @description Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns An array of the sorted color values.
 * @example
 * 
 * import { sortByContrast } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(sortByContrast(sample, 'yellow'))
// [ 'red', 'green', 'brown', 'purple' ]

console.log(sortByContrast(sample, 'yellow', 'desc'))
// [ 'purple', 'brown', 'green', 'red' ]
 
 */

const sortByContrast = (
  colors: Color[],
  against: Color,
  order: "asc" | "desc"
): Color[] => {
  const factor: Factor = "contrast";
  const cb = (against: Color) => (color: Color) => wcagContrast(color, against);
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb(against), order)(colors);
};

export { sortByContrast };

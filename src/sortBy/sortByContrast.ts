// @ts-nocheck
import type { factor, Color } from "../paramTypes.ts";
import { sortedArr } from "../core-utils/helpers.ts";
import { wcagContrast } from "culori";

/**
 * @function
 * @description Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns An array of the sorted color values.
 
 */

const sortByContrast = (
  colors: Color[],
  against: Color,
  order: "asc" | "desc",
): Color[] => {
  const factor: factor = "contrast";
  const cb = (against: Color) => (color: Color) => wcagContrast(color, against);
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb(against), order)(colors);
};

export { sortByContrast };

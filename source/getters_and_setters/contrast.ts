import { wcagContrast } from "culori/fn";

import { toHex } from "../converters/toHex";
import type { Color, Factor } from "../types";
import { channelDifference, gt, sortedArr } from "../fp";

const factor: Factor = "contrast";
const cb = (color) => (against) => getContrast(color, against);

/**
 *@function
 * @description Gets the largest contrast value from the passed in colors compared against a sample color.
 * @param colors The array of colors to query the color with the largest contrast value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false.
 * @param mode THe mode colorspace to retrieve the contrast value from.
 * @returns The largest contrast value in the colors passed in or a custom object.
 * @example 
 * 
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }

 */

const getFarthestContrast = (
  colors: Color[],
  against: Color,
  colorObj?: boolean
): number | { factor: number; name: Color } => {
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    cb(against),
    "desc",
    true
  )(colors);
  let value: number | { factor: number; name: Color };

  if (gt(result.length, 0)) {
    if (colorObj) {
      value = result[0];
    } else {
      value = result[0][factor];
    }
  }
  // @ts-ignore
  return value;
};

/**
 * @function
 * @description Gets the smallest contrast value from the passed in colors compared against a sample color.
 * @param colors The array of colors to query the color with the smallest contrast value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false.
 * @param mode THe mode colorspace to retrieve the contrast value from.
 * @returns The smallest contrast value in the colors passed in or a custom object.
 * @example 
 * 
 * import { getNearestContrast } from 'huetiful-js'
 * 
console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
 */
const getNearestContrast = (
  colors: Color[],
  against: Color,
  colorObj?: boolean
) => {
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    cb(against),
    "asc",
    true
  )(colors);
  let value: number | { factor: number; name: Color };

  if (gt(result.length, 0)) {
    if (colorObj) {
      value = result[0];
    } else {
      value = result[0][factor];
    }
  }

  //@ts-ignore
  return value;
};

/**
 * @function
 * @description Gets the relative luminance of the lightest color
 * @param color
 * @param against
 * @returns The relative luminance of the lightest color.
 * @example
 *
 * import { getContrast } from 'huetiful-js'
 *
 * console.log(getContrast("black", "white"));
 * // 21
 */
const getContrast = (color: Color, against: Color): number => {
  // @ts-ignore
  return wcagContrast(toHex(color), toHex(against));
};

export { getContrast, getFarthestContrast, getNearestContrast };

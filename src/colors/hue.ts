//This module contains getNearestHue,getFarthestHue,minHue and maxHue which are collection based utils that return the color with the queried factor.

import { Color, HueColorSpaces, colorFactorObj, factor } from "../paramTypes";
import { getChannel } from "../core-utils/get.ts";
import {
  defaultTo,
  filter,
  fromPairs,
  get,
  isUndefined,
  map,
  gt,
  sortBy,
  subtract,
  last,
  first,
  remove,
} from "lodash-es";
import { colorObjArr, filteredArr, sortedArr } from "../core-utils/helpers";

//  Globals

const { abs } = Math;

const factor: factor = "hue";
const mode = (colorSpace: HueColorSpaces): string =>
  `${defaultTo(colorSpace, "lch")}.h`;
// The hue value of our color which we are using for comparison
const targetHue = (color: Color, colorSpace: HueColorSpaces): number =>
  getChannel(mode(colorSpace))(color);

// The callback to invoke per color in the passed in collection.
// Return the absolute value since hue is a cyclic value which can either be  in clockwise/anti-clockwise.
//This means that the color object with the smallest hue value is the  nearest color/hue.
const cb =
  (color: Color, colorSpace: HueColorSpaces) => (subtrahend: Color) => {
    return abs(
      subtract(
        targetHue(color, colorSpace),
        getChannel(mode(colorSpace))(subtrahend)
      )
    );
  };

// Callback func for the minHue and maxHue utils. The funny thing is that most of the code is similar with minor changes here and there
const predicate = (colorSpace: HueColorSpaces) => (color: Color) => {
  return getChannel(mode(colorSpace))(color) || undefined;
};

/**
 *
 * @function
 * @description Returns the smallest hue difference between the passed in color and each element in the colors collection. Achromatic colors are excluded from the final result array. Use isAchromatic to remove grays from your color collection as a predicate to Array.map()
 * @param color The color to use its hue value as the minuend.
 * @param colors The collection of colors to compare against.
 * @param colorSpace The mode color space to perform the computation in.
 * @returns The hue value from the color with the smallest hue distance. It returns undefined
 */
const getNearestHue = (
  color: Color,
  colors: Color[],
  colorSpace?: HueColorSpaces
): number => {
  return get(
    first(
      remove(
        sortedArr(factor, cb(color, mode(colorSpace)), "asc", true)(colors),
        (el) => el[factor] !== undefined
      )
    ),
    factor
  );
};

/**
 *
 * @function
 * @description Returns the largest hue difference between the passed in color and each element in the colors collection. Achromatic colors are excluded from the final result array. Use isAchromatic to remove grays from your color collection as a predicate to Array.map()
 * @param color The color to use its hue value as the minuend.
 * @param colors The collection of colors to compare against.
 * @param colorSpace The mode color space to perform the computation in.
 * @returns The hue value from the color with the largest hue distance. It returns undefined
 */

const getFarthestHue = (
  color: Color,
  colors: Color[],
  colorSpace?: HueColorSpaces
): number => {
  return get(
    last(
      remove(
        sortedArr(factor, cb(color, mode(colorSpace)), "asc", true)(colors),
        (el) => el[factor] !== undefined
      )
    ),
    factor
  );
};

/**
 *@function
 * @description Gets the smallest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest hue value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The smallest hue value in the colors passed in or a custom object.
 */
const minHue = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  const result: Array<{ factor: number; name: Color }> = remove(
    sortedArr(factor, predicate(colorSpace), "asc", true)(colors),
    (el) => el[factor] !== undefined
  );
  let value;

  if (gt(result.length, 0)) {
    if (colorObj) {
      value = first(result);
    } else {
      value = get(first(result), factor);
    }
  }

  return value;
};

/**
 *@function
 * @description Gets the largest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the largest hue value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The largest hue value in the colors passed in or a custom object.
 */
const maxHue = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  const result: Array<{ factor: number; name: Color }> = remove(
    sortedArr(factor, predicate(colorSpace), "asc", true)(colors),
    (el) => el[factor] !== undefined
  );

  let value;

  if (gt(result.length, 0)) {
    if (colorObj) {
      value = last(result);
    } else {
      value = get(last(result), factor);
    }
  }

  return value;
};

export { getFarthestHue, getNearestHue, maxHue, minHue };

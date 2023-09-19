// @ts-nocheck
// This module contains minChroma,maxChroma,getFarthestChroma,getNearestChroma

import { Color, HueColorSpaces, factor } from "../paramTypes";
import { getChannel } from "../core-utils/get.ts";
import {
  defaultTo,
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
  split,
  lt,
} from "lodash-es";
import { colorObjArr, filteredArr, sortedArr } from "../core-utils/helpers";

//  The factor being investigated.

const factor: factor = "saturation";

// I must test if the passed in mode has a chroma/saturation channel. Should I use RegExp  ?

const mode = (colorSpace: HueColorSpaces | string): string => {
  // Matches any string with c or s
  const reChroma = /(s|c)/;
  let ch = reChroma.exec(colorSpace);

  return reChroma.test(colorSpace)
    ? `${colorSpace}.${ch[0]}`
    : Error(`The color space ${colorSpace} has no chroma/saturation channel.`);
};

// The callback to invoke per color in the passed in collection.
// The subtrahend is each color in the collection
//This means that the color object with the smallest chroma value is the  nearest chroma.
// First check which value is greater and then act accordingly. Refactor hue.ts so that it returns negative
const chromaDiff =
  (color: Color, colorSpace: HueColorSpaces | string) =>
  (subtrahend: Color) => {
    let cs = mode(colorSpace);
    return lt(getChannel(cs)(color), getChannel(cs)(subtrahend))
      ? subtract(getChannel(cs)(subtrahend), getChannel(cs)(color))
      : subtract(getChannel(cs)(color), getChannel(cs)(subtrahend));
  };

// If the predicate returns undefined or false on the chroma channel then it means that it is an achromatic color.
// Callback func for the minHue and maxHue utils. The funny thing is that most of the code is similar with minor changes here and there
const predicate = (colorSpace: HueColorSpaces) => (color: Color) =>
  getChannel(mode(colorSpace))(color) || undefined;

/**
 *
 * @function
 * @description Returns the smallest chroma/saturation difference between the passed in color and each element in the colors collection. Achromatic colors are excluded from the final result array. Use isAchromatic with Array.map to remove grays from your color collection.
 * @param color The color to use its chroma/saturation value as the minuend.
 * @param colors The collection of colors to compare against.
 * @param colorSpace The mode color space to perform the computation in.
 * @returns The chroma/saturation value from the color with the smallest chroma distance. If the colors are achromatic, it returns undefined.
 */
const getNearestChroma = (
  color: Color,
  colors: Color[],
  colorSpace?: HueColorSpaces,
): number => {
  const cb = chromaDiff(color, colorSpace || "lch");
  let sortedObjArr = remove(
    sortedArr(factor, cb, "asc", true)(colors),
    (el) => el[factor] !== undefined,
  );
  return get(first(sortedObjArr), factor);
};

/**
 *
 * @function
 * @description Returns the largest chroma/saturation difference between the passed in color and each element in the colors collection. Achromatic colors are excluded from the final result array. Use isAchromatic with Array.map to remove grays from your color collection.
 * @param color The color to use its chroma/saturation value as the minuend.
 * @param colors The collection of colors to compare against.
 * @param colorSpace The mode color space to perform the computation in.
 * @returns The chroma/saturation value from the color with the largest saturation distance. If the colors are achromatic, it returns undefined.
 */

const getFarthestChroma = (
  color: Color,
  colors: Color[],
  colorSpace?: HueColorSpaces,
): number => {
  const cb = chromaDiff(color, colorSpace || "lch");
  let sortedObjArr = remove(
    sortedArr(factor, cb, "asc", true)(colors),
    (el) => el[factor] !== undefined,
  );
  return get(last(sortedObjArr), factor);
};

/**
 *@function
 * @description Gets the smallest chroma/saturation value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest chroma/saturation value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false.
 * @returns The smallest chroma/saturation value in the colors passed in or a custom object.
 */
const minChroma = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false,
): number | { factor: number; color: Color } => {
  const result: Array<{ factor: number; name: Color }> = remove(
    sortedArr(factor, predicate(colorSpace || "lch"), "asc", true)(colors),
    (el) => el[factor] !== undefined,
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
 * @description Gets the largest saturation value from the passed in colors.
 * @param colors The array of colors to query the color with the largest saturation value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false.
 * @returns The largest saturation value in the colors passed in or a custom object.
 */
const maxChroma = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false,
): number | { factor: number; color: Color } => {
  const result: Array<{ factor: number; name: Color }> = remove(
    sortedArr(factor, predicate(colorSpace || "lch"), "asc", true)(colors),
    (el) => el[factor] !== undefined,
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

export { getFarthestChroma, getNearestChroma, maxChroma, minChroma };

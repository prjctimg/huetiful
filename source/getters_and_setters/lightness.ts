import { getChannel } from "../getters_and_setters/get";
import { sortedArr } from "../fp/array/sortedArr";
import type { Color, Factor, HueColorSpaces } from "../types";
import {
  channelDifference,
  checkArg,
  gt,
  matchLightnessChannel,
} from "../fp/index";

// use jch
const lightness = (mode) => {
  mode = checkArg(mode, "jch");
  return `${mode}.${matchLightnessChannel(mode)}`;
};
// The subtrahend is each color in the collection
//This means that the color object with the smallest lightness value is the  nearest lightness.
// First check which value is greater and then act accordingly. Refactor hue.ts so that it returns negative

const factor: Factor = "lightness";

/**
 *@function
 * @description Gets the smallest lightness value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @param mode THe mode colorspace to retrieve the lightness value from.
 * @returns The smallest lightness value in the colors passed in or a custom object.
 * @example
 * 
 * import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }

 */
const getNearestLightness = (
  colors: Color[],
  mode?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  //  The factor being investigated.

  const cb = getChannel(lightness(mode));
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    cb,
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
  // @ts-ignore
  return value;
};

/**
 * @function
 * @description Gets the largest lightness value from the passed in colors.
 * @param colors The array of colors to query the color with the largest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @param mode THe mode colorspace to retrieve the lightness value from.
 * @returns The largest lightness value in the colors passed in or a custom object.
 * @example 
 * 
 * import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, true))

// { lightness: 80.94668903360088, name: '#f3bac1' }

 */
const getFarthestLightness = (
  colors: Color[],
  mode?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  //  The factor being investigated.

  const cb = getChannel(lightness(mode));
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    cb,
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

export { getFarthestLightness, getNearestLightness };

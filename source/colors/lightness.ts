// @ts-nocheck

import { getChannel } from "../getters_and_setters/get.ts";
import { sortedArr } from "../fp/array/sortedArr.ts";
import type { Color, Factor } from "../types";

const lightness = "lab.l";

// use jch

// The subtrahend is each color in the collection
//This means that the color object with the smallest lightness value is the  nearest lightness.
// First check which value is greater and then act accordingly. Refactor hue.ts so that it returns negative
const lightnessDiff = (color: Color) => (subtrahend: Color) => {
  if (getChannel(lightness)(color) < getChannel(lightness)(subtrahend)) {
    return getChannel(lightness)(subtrahend) - getChannel(lightness)(color);
  } else {
    return getChannel(lightness)(color) - getChannel(lightness)(subtrahend);
  }
};

/**
 *
 * @function
 * @description Returns the smallest lightness difference between the passed in color and each element in the colors collection. Alightnesstic colors are excluded from the final result array. Use isAlightnesstic with Array.map to remove grays from your color collection.
 * @param color The color to use its lightness value as the minuend.
 * @param colors The collection of colors to compare against.
 * @returns The lightness value from the color with the smallest lightness distance. If the colors are alightnesstic, it returns undefined.
 * @example
 * 
 * import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness("green", sample))

//26.338769793418493
 *
 */
const getNearestLightness = (color: Color, colors: Color[]): number => {
  //  The factor being investigated.

  const factor: Factor = "lightness";
  const cb = lightnessDiff(color);
  const sortedObjArr = sortedArr(factor, cb, "asc", true)(colors);
  return sortedObjArr[0][factor];
};

/**
 *
 * @function
 * @description Returns the largest lightness difference between the passed in color and each element in the colors collection. Alightnesstic colors are excluded from the final result array. Use isAlightnesstic with Array.map to remove grays from your color collection.
 * @param color The color to use its lightness value as the minuend.
 * @param colors The collection of colors to compare against.
 * @returns The lightness value from the color with the largest lightness distance.
 * @example
 * 
 * import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness("green", sample))

// 34.668980006120606

 */

const getFarthestLightness = (color: Color, colors: Color[]): number => {
  //  The factor being investigated.

  const factor: Factor = "lightness";
  const cb = lightnessDiff(color);
  const sortedObjArr = sortedArr(factor, cb, "desc", true)(colors);
  return sortedObjArr[0][factor];
};

/**
 *@function
 * @description Gets the smallest lightness value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @returns The smallest lightness value in the colors passed in or a custom object.
 * @example
 * 
 * import { minLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(minLightness(sample, true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }

 */
const minLightness = (
  colors: Color[],
  colorObj = false
): number | { factor: number; color: Color } => {
  //  The factor being investigated.

  const factor: Factor = "lightness";
  const cb = getChannel(lightness);
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
  return value;
};

/**
 *@function
 * @description Gets the largest lightness value from the passed in colors.
 * @param colors The array of colors to query the color with the largest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @returns The largest lightness value in the colors passed in or a custom object.
 * @example 
 * 
 * import { maxLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(maxLightness(sample, true))

// { lightness: 80.94668903360088, name: '#f3bac1' }

 */
const maxLightness = (
  colors: Color[],
  colorObj = false
): number | { factor: number; color: Color } => {
  //  The factor being investigated.

  const factor: Factor = "lightness";
  const cb = getChannel(lightness);
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
  return value;
};

export {
  getFarthestLightness,
  getNearestLightness,
  maxLightness,
  minLightness,
};

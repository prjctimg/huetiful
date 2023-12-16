//This module contains getNearestHue,getFarthestHue,getNearestHue and getFarthestHue which are collection based utils that return the color with the queried factor.

import { getChannel } from "../getters_and_setters/get";
import { sortedArr } from "../fp/array/sortedArr";
import type { Color, HueColorSpaces, Factor } from "../types";

//  Globals

const { abs } = Math;

// Use jch by default

const factor: Factor = "hue";
const baseFunc = (colors, colorSpace, colorObj, order) => {
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    predicate(colorSpace as string),
    order,
    true
  )(colors).filter((el) => el[factor] !== undefined);

  let value;

  if (result.length > 0) {
    if (colorObj) {
      value = result[0];
    } else {
      value = result[0][factor];
    }
  }

  return value;
};
const mode = (colorSpace: string): string => `${colorSpace || "lch"}.h`;
// The hue value of our color which we are using for comparison
const targetHue = (color: Color, colorSpace: string): number =>
  getChannel(mode(colorSpace))(color);

// The callback to invoke per color in the passed in collection.
// Return the absolute value since hue is a cyclic value which can either be  in clockwise/anti-clockwise.
//This means that the color object with the smallest hue value is the  nearest color/hue.

// Callback func for the getNearestHue and getFarthestHue utils. The funny thing is that most of the code is similar with minor changes here and there
const predicate = (colorSpace: string) => (color: Color) => {
  return getChannel(mode(colorSpace))(color) || undefined;
};

/**
 *@function
 * @description Gets the smallest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest hue value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The smallest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
 */
const getNearestHue = (
  colors: Color[],
  colorSpace?: HueColorSpaces | string,
  colorObj = false
): number | { factor: number; color: Color } => {
  return baseFunc(colors, colorSpace, colorObj, "asc");
};

/**
 *@function
 * @description Gets the largest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the largest hue value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The largest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
 */
const getFarthestHue = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  return baseFunc(colors, colorSpace, colorObj, "desc");
};

export { getFarthestHue, getNearestHue };

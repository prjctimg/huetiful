// This module contains getNearestChroma,getFarthestChroma,getFarthestChroma,getNearestChroma

import { Color, HueColorSpaces, Factor } from "../types";
import { getChannel } from "./get";
import { matchChromaChannel } from "../fp/string/matchChromaChannel";
import { sortedArr } from "../fp/array/sortedArr";

// I must test if the passed in mode has a chroma/saturation channel. Should I use RegExp  ?

// Use jch by default
// First check which value is greater and then act accordingly. Refactor hue.ts so that it returns negative
const chromaDiff =
  (color: Color, colorSpace: HueColorSpaces | string) =>
  (subtrahend: Color) => {
    const cs = matchChromaChannel(colorSpace);

    if (getChannel(cs)(color) < getChannel(cs)(subtrahend)) {
      return getChannel(cs)(subtrahend) - getChannel(cs)(color);
    } else {
      return getChannel(cs)(color) - getChannel(cs)(subtrahend);
    }
  };

// If the predicate returns undefined or false on the chroma channel then it means that it is an achromatic color.
// Callback func for the minHue and maxHue utils. The funny thing is that most of the code is similar with minor changes here and there
const predicate = (colorSpace: HueColorSpaces) => (color: Color) =>
  getChannel(matchChromaChannel(colorSpace))(color) || undefined;

/**
 *@function
 * @description Gets the smallest chroma/saturation value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest chroma/saturation value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false.
 * @returns The smallest chroma/saturation value in the colors passed in or a custom object.
 * @example
 * 
 * import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
 */
const getNearestChroma = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  //  The factor being investigated.

  const factor: Factor = "saturation";
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    predicate(colorSpace || "lch"),
    "asc",
    true
  )(colors).filter((el) => el[factor] !== undefined);

  let value: number | { factor: number; name: Color };

  if (result.length > 0) {
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
 *@function
 * @description Gets the largest saturation value from the passed in colors.
 * @param colors The array of colors to query the color with the largest saturation value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false.
 * @returns The largest saturation value in the colors passed in or a custom object.
 * @example 
 * 
 * import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
 */
const getFarthestChroma = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  //  The factor being investigated.

  const factor: Factor = "saturation";
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    predicate(colorSpace || "lch"),
    "desc",
    true
  )(colors).filter((el) => el[factor] !== undefined);

  let value: { factor: number; name: Color } | number;

  if (result.length > 0) {
    if (colorObj) {
      value = result[0];
    } else {
      value = result[0][factor];
    }
  }
  // @ts-ignore
  return value;
};

export { getFarthestChroma, getNearestChroma };

//This module contains getNearestHue,getFarthestHue,minHue and maxHue which are collection based utils that return the color with the queried factor.

import { getChannel } from '../getters_and_setters/get.ts';
import { sortedArr } from '../fp/array/sortedArr.ts';
import type { Color, HueColorSpaces, Factor } from '../types';

//  Globals

const { abs } = Math;

// Use jch by default

const factor: Factor = 'hue';

const mode = (colorSpace: string): string => `${colorSpace || 'lch'}.h`;
// The hue value of our color which we are using for comparison
const targetHue = (color: Color, colorSpace: string): number =>
  getChannel(mode(colorSpace))(color);

// The callback to invoke per color in the passed in collection.
// Return the absolute value since hue is a cyclic value which can either be  in clockwise/anti-clockwise.
//This means that the color object with the smallest hue value is the  nearest color/hue.
const cb = (color: Color, colorSpace: string) => (subtrahend: Color) => {
  return abs(
    targetHue(color, colorSpace) - getChannel(mode(colorSpace))(subtrahend)
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
 * @returns The hue value from the color with the smallest hue distance. If the colors are achromatic, it returns undefined.
 * @example
 * 
 * import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue('lime', sample, 'lch'))

// 23.962083662849253
 */
const getNearestHue = (
  color: Color,
  colors: Color[],
  colorSpace?: HueColorSpaces
): number => {
  return sortedArr(
    factor,
    cb(color, mode(colorSpace)),
    'asc',
    true
  )(colors).filter((el) => el[factor] !== undefined)[0][factor];
};

/**
 *
 * @function
 * @description Returns the largest hue difference between the passed in color and each element in the colors collection. Achromatic colors are excluded from the final result array. Use isAchromatic to remove grays from your color collection as a predicate to Array.map()
 * @param color The color to use its hue value as the minuend.
 * @param colors The collection of colors to compare against.
 * @param colorSpace The mode color space to perform the computation in.
 * @returns The hue value from the color with the largest hue distance. If the colors are achromatic, it returns undefined.
 *@example
import { getFarthestHue } from 'huetiful-js'

 let sample = [
  '#00ffdc',
  '#00ff78',
  '#00c000',
  '#007e00',
  '#164100',
  '#ffff00',
  '#310000',
  '#3e0000',
  '#4e0000',
  '#600000',
  '#720000',
]

console.log(getFarthestHue('lime', sample, 'lch'))
// 139.16534433552653

*/

const getFarthestHue = (
  color: Color,
  colors: Color[],
  colorSpace?: HueColorSpaces
): number => {
  return sortedArr(
    factor,
    cb(color, mode(colorSpace)),
    'desc',
    true
  )(colors).filter((el) => el[factor] !== undefined)[0][factor];
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
 * import { minHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(minHue(sample, 'lch'))
// 12.462831644544274
 */
const minHue = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    predicate(colorSpace),
    'asc',
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

/**
 *@function
 * @description Gets the largest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the largest hue value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The largest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { maxHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(maxHue(sample, 'lch'))
// 273.54920266436477
 */
const maxHue = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    predicate(colorSpace),
    'desc',
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

export { getFarthestHue, getNearestHue, maxHue, minHue };

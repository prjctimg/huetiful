//@ts-nocheck
import { getChannel } from '../core-utils/get.ts';
import hueTempMap from '../color-maps/samples/hueTemperature.js';
import { min, max } from '../fp/array.ts';
import { inRange } from '../fp/number.ts';
import { find, customConcat } from '../fp/object.ts';
import type { Color } from '../paramTypes.ts';
import { isAchromatic } from './achromatic.ts';

/**
 * @function
 * @description Returns the hue which is biasing the passed in color
 * @param color The color to query its overtone.
 * @returns The name of the overtone hue. If an achromatic color is passed in it return the string gray otherwise if the color has no bias it returns false.
 * @example
 * 
 * import { overtone } from "huetiful-js";
 * 
console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
 */
const overtone = (color: Color): string | boolean => {
  const factor = getChannel('lch.h')(color);
  let hues: string[];

  // We check if the color can be found in the defined ranges
  find(hueTempMap, (hue: object, key: string) => {
    // Capture the min and max values and see if the passed in color is within that range
    let minVal = min(customConcat(hue));
    let maxVal = max(customConcat(hue));

    // If the color is achromatic return the string gray
    if (isAchromatic(color)) {
      return (hues = 'gray');
    } else if (inRange(factor, minVal, maxVal) && /-/.test(key)) {
      return (hues = key.split('-'));
    } else {
      return (hues = false);
    }
  });

  if (typeof hues == 'string') {
    return hues;
  } else {
    return hues[1];
  }
};

export { overtone };

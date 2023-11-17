//@ts-nocheck
import { getChannel } from '../getters_and_setters/get.ts';
import hueTempMap from '../color-maps/samples/hueTemperature';
import { isAchromatic } from './achromatic.ts';
import type { Color } from '../paramTypes.ts';
import { inRange } from '../fp/number.ts';
import { max, min } from '../fp/array.ts';
import { customConcat } from '../fp/object.ts';

/**

 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} factor The value to compare against
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
const customFindKey = (collection: object, factor: number) => {
  // If the color is achromatic return the string gray

  const propKeys = Object.keys(collection);

  const result: string = propKeys
    .filter((key) => {
      const hueVals = customConcat(collection[key]);
      // @ts-ignore
      const minVal = min(...hueVals);
      // @ts-ignore
      const maxVal = max(...hueVals);
      // Capture the min and max values and see if the passed in color is within that range

      return inRange(factor, minVal, maxVal);
    })
    .toString();

  return result;
};

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
  let hue = customFindKey(hueTempMap, factor);

  // We check if the color can be found in the defined ranges

  if (isAchromatic(color)) {
    return 'gray';
  } else if (/-/.test(hue)) {
    hue = hue.split('-');
    return hue[1];
  } else {
    return false;
  }
};

export { overtone };

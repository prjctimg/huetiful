// This module has object methods

import type { callback, factor, Color } from '../paramTypes';
import { min, max } from './array';
import { inRange } from './number';

// @ts-nocheck
const colorObj = (factor: factor, callback: callback) => (color: Color) => {
  return { [factor]: callback(color), name: color };
};

/**

 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} factor The value to compare against
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
const findKey = (
  collection: object,

  factor: number
) => {
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

      console.log(minVal);
      console.log(maxVal);
      return inRange(factor, minVal, maxVal);
    })
    .toString();

  return result;
};

const customConcat = (hue: object) => {
  const res: number[] = [];
  const { keys } = Object;
  if (typeof hue == 'object') {
    const hueKeys = keys(hue);

    //@ts-ignore
    res.push(...hueKeys.map((key) => hue[key]));
  }
  return res;
};
export { colorObj, findKey, customConcat };

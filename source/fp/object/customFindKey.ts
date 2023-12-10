import { inRange } from '../number/inRange.js';
import { max, min } from '../array/min_max.js';
import { customConcat } from './customConcat.js';

/**

 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} factor The value to compare against
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
export const customFindKey = (collection: object, factor: number) => {
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

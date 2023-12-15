import { colorObj } from '../object/colorObj';
import { Factor, Color } from '../../types';

/*
 * @function
 * @private
 * Creates a custom object with a factor to pass to the predicate function.
 * @param factor The quality being queried.
 * @param cb The callback function for computing the factor's start.
 * @param colors The array of colors to iterate over.
 * @returns An array of objects.
 */
export const colorObjArr =
  (factor: Factor, callback) =>
  (colors: Color[]): Array<{ factor: Factor; name: Color }> => {
    const cb = colorObj(factor, callback);
    // @ts-ignore
    return colors.map((color) => cb(color));
  };

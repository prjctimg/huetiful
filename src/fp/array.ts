// This module has array methods
// @ts-nocheck
import { colorObj } from './object';
import { factor, Color, callback, order } from '../paramTypes';
import { gt, gte, lt, lte, inRange } from './number';
/*
 * @function
 * @private
 * Creates a custom object with a factor to pass to the predicate function.
 * @param factor The quality being queried.
 * @param cb The callback function for computing the factor's start.
 * @param colors The array of colors to iterate over.
 * @returns An array of objects.
 */
const colorObjArr =
  (factor: factor, callback) =>
  (colors: Color[]): Array<{ factor: factor; name: Color }> => {
    const cb = colorObj(factor, callback);
    return colors.map((color) => cb(color));
  };

/**
 * @description Filters an array according to the value of a color's queried factor
 * @param factor The property to query and use as filtering criteria
 * @param cb The function to use for comparison
 * @returns The filtered array
 */
const filteredArr =
  (factor: factor, cb?: callback) =>
  (colors: Color[], start: number | string, end: number): Color[] => {
    let result: Color[];

    if (typeof start === 'number') {
      result = colorObjArr(
        factor,
        cb
      )(colors)
        .filter((color) => inRange(color[factor], start, end))
        .map((color) => color['name']);

      return result;

      // If string split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
    } else if (typeof start === 'string') {
      //The pattern to match
      const reOperator = /^(>=|<=|<|>)/;

      const value = /[0-9]*\.?[0-9]+/;

      // Array
      const val = value.exec(start),
        op = reOperator.exec(start);

      const mapFilter = (test: (x: number, y: number) => boolean): Color[] => {
        return colorObjArr(
          factor,
          cb
        )(colors)
          .filter((el) => test(el[factor], parseFloat(val['0'])))
          .map((el) => el['name']);
      };
      switch (op['0']) {
        case '<':
          result = mapFilter(lt);

          break;
        case '>':
          result = mapFilter(gt);
          break;
        case '<=':
          result = mapFilter(lte);
          break;
        case '>=':
          result = mapFilter(gte);
          break;
      }
    }
    return result;
  };

/**
 * @description Helper function for native sorting method for arrays.
 * @param factor The property to query.
 * @param order Either ascending or descending.
 * @returns A sorted array.
 */
const customSort = (order: order, factor?: factor) => {
  //  Special thanks to deechris27 on youtube
  // a-b gives asc order & b-a gives desc order
  factor = factor || 'factor';
  return (a, b) => {
    if (order === 'asc') {
      return a[factor] - b[factor];
    } else if (order === 'desc') {
      return b[factor] - a[factor];
    }
  };
};

/**
 *  Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.
 * @param factor The property to query
 * @param callback The function to use for comparison.
 * @returns An array of colors or color objects.
 */

const sortedArr =
  (factor: factor, callback: callback, order: order, colorObj = false) =>
  (colors: Color[]) => {
    const results: Color[] | Array<{ factor: number; name: Color }> =
      colorObjArr(factor, callback)(colors);
    //  (colorObj && color) || color['name'];

    // Assign the value of colorObj to results variable

    // Sort the array using our customSort helper function
    results.sort(customSort(order, factor));

    // colorObj parameter is true return the array of color objects
    // else just return the color's name value.
    if (colorObj) {
      return results;
    } else {
      return results.map((color) => color['name']);
    }
  };

// from the lodash implementation of _.min and _.max
const identity = (value) => {
  return value;
};
const baseExtremum = (array: number[], iteratee, comparator) => {
  var index = -1,
    length = array.length;

  while (++index < length) {
    var value = array[index],
      current = iteratee(value);

    if (
      current != null &&
      (computed === undefined
        ? current === current
        : comparator(current, computed))
    ) {
      var computed = current,
        result = value;
    }
  }
  return result;
};

/**
 * @description Gets the smallest value in an array
 * @param array The array to retrieve minimum value
 * @returns The smallest number in the array
 */
const min = (array: number[]): number => {
  return array && array.length ? baseExtremum(array, identity, lt) : undefined;
};
/**
 * @description Gets the largest value in an array
 * @param array The array to retrieve maximum value
 * @returns The largest number in the array
 */

const max = (array: number[]): number => {
  return array && array.length ? baseExtremum(array, identity, gt) : undefined;
};

export { colorObjArr, filteredArr, sortedArr, customSort, max, min };

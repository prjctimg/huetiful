/* eslint-disable no-ternary */
// @ts-nocheck

import { gt, lt } from '../number/comparison';

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

export { min, max };

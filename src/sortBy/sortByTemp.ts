//@ts-nocheck
import { getTemp } from '../converters/getTemp.ts';
import type { Color, factor } from '../paramTypes.ts';
import { sortedArr } from '../fp/array/sortedArr.ts';

/**
 * @function
 * @description Sorts colors according to temperature value in Kelvins according to the temperatu. Achromatic colors may return awkward results.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns  An array of the sorted color values.
 * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
 * @example
 * import { sortByTemp } from 'huetiful-js'
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

let sorted = sortByTemp(sample)
console.log(sorted)

let sortedDescending = sortByTemp(sample, 'desc')
console.log(sortedDescending)
 */

const sortByTemp = (colors: Color[], order: 'asc' | 'desc'): Color[] => {
  // Purifying the data.All colors are converted to the specified mode to ensure unbiased results.
  const factor: factor = 'temp';
  const cb = getTemp;
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colors);
};

export { sortByTemp };

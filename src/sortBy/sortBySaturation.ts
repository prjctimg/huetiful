// @ts-nocheck
import type { factor, Color } from '../paramTypes.ts';
import { getChannel } from '../getters_and_setters/get.ts';
import { sortedArr } from '../fp/array/sortedArr.ts';

/**
 * @function
 * @description Sorts colors according to their saturation.
 * @param  colors The array of colors to sort
 * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns An array of the sorted color values.
 * @example
 * import { sortBySaturation } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];

let sorted = sortBySaturation(sample);
console.log(sorted);

// [
  '#310000', '#3e0000',
  '#164100', '#4e0000',
  '#600000', '#720000',
  '#00ffdc', '#007e00',
  '#00ff78', '#00c000',
  '#ffff00'
]

let sortedDescending = sortBySaturation(sample,'desc');
console.log(sortedDescending)
// [
  '#ffff00', '#00c000',
  '#00ff78', '#007e00',
  '#00ffdc', '#720000',
  '#600000', '#4e0000',
  '#164100', '#3e0000',
  '#310000'
]

 */

const sortBySaturation = (colors: Color[], order: 'asc' | 'desc'): Color[] => {
  const factor: factor = 'saturation';
  const cb = getChannel('lch.c');
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colors);
};

export { sortBySaturation };

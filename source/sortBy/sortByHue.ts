// @ts-nocheck
import { getChannel } from "../getters_and_setters/get.ts";
import { sortedArr } from "../fp/array/sortedArr.ts";

import type { Factor, Color } from "../types";

/**
 * @function
 * @description Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported
 * @param  colors The array of colors to sort
 * @param order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
* @param mode The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. 
* @returns  An array of the sorted color values.
 * @example
 * let sample = [
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


let sorted = sortByHue(sample);
console.log(sorted)
// [
  '#310000', '#3e0000',
  '#4e0000', '#600000',
  '#720000', '#ffff00',
  '#164100', '#00c000',
  '#007e00', '#00ff78',
  '#00ffdc'
]

let sortedDescending = sortByHue(sample,'desc');
console.log(sortedDescending)
// [
  '#00ffdc', '#00ff78',
  '#007e00', '#00c000',
  '#164100', '#ffff00',
  '#720000', '#600000',
  '#4e0000', '#3e0000',
  '#310000'
]

 */

// Todo: Add the mode param so that users can select mode to work with. The default is lch
const sortByHue = (
  colors: Color[],
  order: "asc" | "desc",
  mode = "jch"
): Color[] => {
  const factor: Factor = "hue";
  const reHue = /h/gi.test(mode);
  if (reHue) {
    const cb = getChannel(`${mode}.h`);
    //Sorting the color array of object by the 'temp' property in the specified order.

    return sortedArr(factor, cb, order)(colors);
  } else {
    throw Error(`The color space ${mode} has no hue channel try 'lch' instead`);
  }
};

export { sortByHue };

// @ts-nocheck
import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  filterGrayscale
} from 'culori/fn';
import { toHex } from '../converters/toHex';
import type { Color } from '../paramTypes';

// This module is focused on creating color blind safe palettes that adhere to the minimum contrast requirements

// How can I achieve this ?
// 1. First I pass the color(s) to a color vision deficiency simulation function
// 2. Check if the color has the minimum required contrast as compared to a dark/light mode surface which can optionally be overriden
// 3. Check the min luminance contrast ratio between the color and background.
// 4. Find out which channels do I need to tweak in order to fix up the colors.
// 5. Maybe provide an optional adaptive boolean which returns dark/light mode variant colors of the color blind safe palettes.

// Add reference to articles
// Read more about the minimum accepted values for palette accessibility

const baseColorDeficiency = (
  def: 'red' | 'blue' | 'green' | 'monochromacy',
  col: Color,
  sev: number
) => {
  let result: Color;
  col = toHex(col);
  switch (def) {
    case 'blue':
      result = filterDeficiencyTrit(sev)(col);
      break;
    case 'red':
      result = filterDeficiencyProt(sev)(col);
      break;
    case 'green':
      result = filterDeficiencyDeuter(sev)(col);
      break;
    case 'monochromacy':
      result = filterGrayscale(sev, 'lch')(col);
      break;
  }

  return toHex(result);
};

/**
 * @function
 * @description Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.
 * @param deficiency The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value.
 * @see For a deep dive on  color vision deficiency go to
 * @param color The color to return its deficiency simulated variant.
 * @param severity The intensity of the filter. The exepected value is between [0,1]. For example 0.5
 * @returns The color as its simulated variant as a hexadecimal string.
 * @example
 * 
 * import { colorDeficiency, toHex } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'. 
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = colorDeficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = colorDeficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
 */
const colorDeficiency =
  (deficiency: 'red' | 'blue' | 'green' | 'monochromacy') =>
  (color: Color, severity = 1) => {
    // Store the keys of deficiency types
    const deficiencies: string[] = ['red', 'blue', 'green', 'monochromacy'];
    // Cast 'red' as the default parameter
    deficiency = [deficiency || 'red'].toString().toLowerCase();

    if (
      typeof deficiency === 'string' &&
      deficiencies.some((el) => el === deficiency)
    ) {
      return baseColorDeficiency(deficiency, color, severity);
    } else {
      throw Error(
        `Unknown color vision deficiency ${deficiency}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`
      );
    }
  };

export { colorDeficiency };

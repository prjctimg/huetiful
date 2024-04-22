/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').DeficiencyType} DeficiencyType
 */

import { token } from './token.js';
import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  filterGrayscale
} from 'culori/fn';
import { or } from './fp/index.js';

// This module is focused on creating color blind safe palettes that adhere to the minimum contrast requirements
// How can I achieve this ?
// 1. First I pass the color(s) to a color vision deficiency simulation function
// 2. Check if the color has the minimum required contrast as compared to a dark/light mode surface which can optionally be overriden
// 3. Check the min luminance contrast ratio between the color and background.
// 4. Find out which channels do I need to tweak in order to fix up the colors.
// 5. Maybe provide an optional adaptive boolean which returns dark/light mode variant colors of the color blind safe palettes.
// Add reference to articles
// Read more about the minimum accepted values for palette accessibility
/**
 * Returns the color as a simulation of the passed in `defeciencyType` of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.
 * @param {DeficiencyType} [kind='red'] The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is `'red'` when the deficiency parameter is undefined or any falsy value.
 * @returns The color as its simulated variant. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 * import { deficiency, token('hex') } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = deficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = deficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
 */
function deficiency(kind) {
  const f = (d, c, t) => {
    let res;
    c = token('hex')(c);
    switch (d) {
      case 'blue':
        res = filterDeficiencyTrit(t)(c);
        break;
      case 'red':
        res = filterDeficiencyProt(t)(c);
        break;
      case 'green':
        res = filterDeficiencyDeuter(t)(c);
        break;
      case 'monochromacy':
        res = filterGrayscale(t, 'lch')(c);
        break;
    }

    return token('hex')(res);
  };

  /**
   * @param {ColorToken} color The color to return its simulated variant.
   * @param {number} [severity=0.1] The intensity of the filter. The exepected value is between [0,1]. Default is `0.1`.
   */
  return (color, severity) => {
    // Store the keys of deficiency types
    const deficiencies = ['red', 'blue', 'green', 'monochromacy'];
    // Cast 'red' as the default parameter
    kind = or(kind, 'red');

    if (typeof kind === 'string' && deficiencies.some((el) => el === kind)) {
      return f(kind, color, severity);
    } else {
      throw Error(
        `Unknown color vision deficiency ${kind}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`
      );
    }
  };
}

export { deficiency };

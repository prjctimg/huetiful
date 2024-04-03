/**
 * @typedef {import('../types/types.js').DeficiencyType} DeficiencyType
 */

import { color2hex } from './converters.js';
import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  filterGrayscale
} from 'culori/fn';
import { or } from './helpers.js';

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
 * @public
 *
 * Returns the color as a simulation of the passed in `defeciencyType` of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.
 * @param {DeficiencyType} [deficiencyType='red'] The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is `'red'` when the defeciency parameter is undefined or any falsy value.
 * @returns The color as its simulated variant. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 * import { colorDeficiency, color2hex } from 'huetiful-js'

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

function colorDeficiency(deficiencyType) {
  const baseColorDeficiency = (def, col, sev) => {
    let result;
    col = color2hex(col);
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

    return color2hex(result);
  };

  /**
   * @param {import('../types/types.js').ColorToken} color The color to return its simulated variant.
   * @param {number} [severity=1] The intensity of the filter. The exepected value is between [0,1]. For example 0.5
   */
  return (color, severity) => {
    // Store the keys of deficiency types
    const deficiencies = ['red', 'blue', 'green', 'monochromacy'];
    // Cast 'red' as the default parameter
    deficiencyType = or(deficiencyType, 'red');

    if (
      typeof deficiencyType === 'string' &&
      deficiencies.some((el) => el === deficiencyType)
    ) {
      return baseColorDeficiency(deficiencyType, color, severity);
    } else {
      throw Error(
        `Unknown color vision deficiency ${deficiencyType}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`
      );
    }
  };
}

// Things I need to understand first:
// 1. What is adaptive color exactly
// -> Adaptive color is meant to adjust to luminance changes in the surrounding colors (or simply background)

// 2. What makes color adaptive
// -> Being able to look perceptually similar between different themes or backgrounds. For example a certain color looks over saturated in a dark theme. We can change the color's luminance to compensate for this shortfall whilst maintaining the hue and saturation constraints in our design system.

// 3. What is contrast and how does it affect adaptive color
// -> Contrast is the perceived difference in color i.e the ability of one color to stand out from another. This allows colors to be legible on different backgrounds.

// 4. What are the specifics of contrast ratio in relation to design elements
// -> Contrast ratios allow us to define the contrast relationship between the colors we're working with. For example certain text must meet a minimum contrast ratio in order for it to be easily viewable to a wider userbase.

// 5. What are the nuances of dark/light mode. How is the color corrected when we switch themes
// -> Certain colors will diverge from our color system if we tune them up. For example yellow will turn dark yellow if we adjust it to meet WCAG requirements in light mode. Therefore such colors cannot be used for text.

// 6. How can this be implemented in code

// Providing a min luminance contrast ratio between text and background.
//

// adaptive returns an object of the adjusted colors
// {lightMode/darkMode:Color[]}

// Possible params
// 1. backgroundColor -> The backgroundColor to compare against
// 2. colors -> The colors to tune
// 3. viewingConditions

// First I need to declare some constants to serve as starting points
////// Approach was adapted from Adobe's Leonardo tool

/////// Rough concept of adaptive color

// Dark theme factors to consider
// 1. if color is darker than background. It means that color is not legible and will be tuned up
// 2. if color is lighter than background. it means its legible

// Light theme factors to consider
// 1. if a color is lighter than background. This means color is not compliant and will be fixed up.
// 2. if a color is darker than background. It means its legible

// Constants
// - baseluminance
// - colorluminance

// Find contrast colors
// find contrast color pairs that are harmonius

// The relative luminance returned should be compliant to the defined ratio

function adaptive(color, theme = { light: '#fff', dark: '#000' }) {
  var min_c,
    par = 0.5;
}

export { colorDeficiency };

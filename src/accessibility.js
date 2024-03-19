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

  return (color, severity = 1) => {
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

export { colorDeficiency };

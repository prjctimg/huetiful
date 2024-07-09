/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').DeficiencyType} DeficiencyType
 * @typedef {import('../types.js').DeficiencyOptions} DeficiencyOptions
 */

import { token } from "./token.js";
import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  filterGrayscale,
} from "culori/fn";
import { or } from "../fp/index.js";
import { wcagContrast } from "culori/fn";

/**
 * Gets the contrast between the passed in colors.
 *
 * Swapping color `a` and `b` in the parameter list doesn't change the resulting value.
 * @param {ColorToken} a First color to query.
 * @param {ColorToken} b The color to compare against.
 * @returns {number}
 * @example
 *
 * import { contrast } from 'huetiful-js'
 *
 * console.log(contrast("black", "white"));
 * // 21
 */
function contrast(a, b) {
  // @ts-ignore
  return wcagContrast(token(a), token(b));
}

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
 * Simulates how a color may be perceived by people with color vision deficiency.
 * 
 * To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:
 * 
 * * 'tritanopia' - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
 * * 'deuteranopia' - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
 * * 'protanopia' - An inability to distinguish the color 'red'. The `kind` is `'red'`.
 *
 * @param {ColorToken} color The color to return its simulated variant
 * @param {DeficiencyOptions} options
 * @example
 *
 * import { deficiency } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.5

console.log(deficiency(['rgb', 230, 100, 50, 0.5],{ kind:'blue', severity:0.5 }))
// '#dd663680'

 */
function deficiency(
  color,
  options = {
    kind: "red",
    severity: 0.1,
  }
) {
  var { kind, severity } = options || {};

  const f = (d, c, t) => {
    let o;
    c = token(c);
    switch (d.toLowerCase()) {
      case "blue":
        o = filterDeficiencyTrit(t)(c);
        break;
      case "red":
        o = filterDeficiencyProt(t)(c);
        break;
      case "green":
        o = filterDeficiencyDeuter(t)(c);
        break;
      case "monochromacy":
        o = filterGrayscale(t, "lch")(c);
        break;
    }

    return token(o, options["token"]);
  };

  // Store the keys of deficiency types
  const deficiencies = ["red", "blue", "green", "monochromacy"];
  // Cast 'red' as the default parameter
  kind = or(kind, "red");

  if (deficiencies.some((el) => el === kind.toLowerCase())) {
    // @ts-ignore
    return f(kind, color, severity);
  } else {
    throw Error(
      `Unknown color vision deficiency ${kind}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`
    );
  }
}

export { deficiency, contrast };

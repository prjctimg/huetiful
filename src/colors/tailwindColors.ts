//@ts-nocheck

import {
  map,
  has,
  isUndefined,
  identity,
  get,
  isEqual,
  toLower,
} from "lodash-es"
import tailwindHues from "../color-maps/defaultTailwindPalette.ts"
import type { HueMap, ScaleValues } from "../paramTypes.ts"

/**
 * @function
 * @description Wrapper function that returns TailwindCSS color value(s) of the specified shade. If invoked with no parameters it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,
 * @param  val The tone value of the shade. Values are in incrementals of 100. Both numeric (100) and its string equivalent ('100') are valid.
 * @returns color A hex string value or array of hex strings.
 * @example
 * 
 * import { tailwindColors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = tailwindColors("red");
console.log(red());
// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]


console.log(red(100));
// '#fee2e2'

console.log(red('900'));
// '#7f1d1d'


 *
 */
const tailwindColors =
  (shade: keyof HueMap) =>
  (val?: ScaleValues): string | string[] => {
    // This is a curried func that takes in the shade and returns a function that takes in a value from 100 thru 900
    shade = toLower(shade)

    // We check if the shade is a valid Tailwind shade if not we return pure black.
    let targetHue

    if (has(tailwindHues, shade)) {
      targetHue = tailwindHues[shade]
    } else {
      throw Error(
        `${shade} is not a valid shade in the default Tailwind palette`
      )
    }

    if (typeof val === "undefined") {
      return values(targetHue)
    } else if (has(targetHue, val)) {
      return targetHue[val]
    } else {
      throw Error(
        `${val} is not a valid scale value. Values are in increments of 100 up to 900 e.g "200"`
      )
    }
  }

export { tailwindColors }

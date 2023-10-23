//@ts-nocheck
// Original source from   George Francis: Coloring with Code
// Can we also lightnessMapper palette types to create hue shifted variants per each color in the palette ?

import { converter, formatHex } from "culori"
import {
  range,
  defaultTo,
  divide,
  map,
  multiply,
  subtract,
  add,
  lt,
} from "lodash-es"
import type { Color } from "../paramTypes.ts"
import { adjustHue } from "../core-utils/helpers.ts"
const { ceil } = Math

const lightnessMapper =
  (n: number) =>
  (start1: number, end1: number) =>
  (start2: number, end2: number) =>
    ((n - start1) / (end1 - start1)) * (end2 - start2) + start2

/**
 * @function
 * @description Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the base of the hueshift. Colors are internally converted to LCH.
 * @param minLightness  Minimum lightness value (range 0-100).
 * @param maxLightness  Maximum lightness value (range 0-100).
 * @param num The number of iterations to do on the color. It equals the amount of elements in the result array.
 * @param hueStep  Controls how much the hue will shift at each iteration.
 * @param hex Optional boolen to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.
 * @returns An array of colors.
 * @example
 * 
 * import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000", {}, true);

console.log(hueShiftedPalette);

// [
  '#ffffe1', '#ffdca5',
  '#ca9a70', '#935c40',
  '#5c2418', '#3e0000',
  '#310000', '#34000f',
  '#38001e', '#3b002c',
  '#3b0c3a'
]
 */

const hueshift = (
  color: Color,
  opts = { minLightness, maxLightness, hueStep, num },
  hex = false
): Color[] => {
  color = converter("lch")(color)
  let { minLightness, maxLightness, hueStep, num } = opts

  // Pass in default values if any of the opts is undefined
  minLightness = minLightness || 10
  maxLightness = maxLightness || 90
  hueStep = opts["hueStep" || 12]
  num = num || 6

  let palette = [color]

  //Each iteration add a darker shade to the start of the array and a lighter tint to the end.
  range(1, num).map((val) => {
    //adjustHue checks hue values are clamped.
    let hueDark = adjustHue(color["h"] - hueStep * val)
    let hueLight = adjustHue(color["h"] + hueStep * val)

    // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].
    const lightnessDark = lightnessMapper(val)(0, 4)(color["l"], minLightness)

    const lightnessLight = lightnessMapper(val)(0, 4)(color["l"], maxLightness)

    palette.push({
      l: lightnessDark,
      c: color["c"],
      h: hueDark,
      mode: "lch",
    })

    palette.unshift({
      l: lightnessLight,
      c: color["c"],
      h: hueLight,
      mode: "lch",
    })
  })

  if (hex) {
    return map(palette, formatHex)
  } else {
    return palette
  }
}

export { hueshift as hueShift }

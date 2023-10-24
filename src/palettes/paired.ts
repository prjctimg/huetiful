// @ts-nocheck
// From colorbrewr

import {
  add,
  concat,
  defaultTo,
  divide,
  flatten,
  fromPairs,
  get,
  isEqual,
  map,
  multiply,
  range,
  reverse,
  slice,
  toString,
  uniq,
  values,
} from "lodash-es"
import { getChannel } from "../core-utils/get.ts"
import { setChannel } from "../core-utils/set.ts"
import { Color, tone } from "../paramTypes.ts"
import {
  converter,
  easingSmootherstep,
  fixupHueShorter,
  formatHex8,
  interpolate,
  interpolatorSplineBasis,
  interpolatorSplineBasisClosed,
  interpolatorSplineNatural,
  fixupAlpha,
  samples,
} from "culori"
import { adjustHue } from "../core-utils/helpers.ts"

/**
 * @function pairedScheme
 * @description Creates a scheme that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.
 * @param color The color to return a paired color scheme from.
 * @param via The tone to interpolate through (either white or black). Default is white.
 * @param hueStep The value to increment the base color's hue channel with.
 * @param num The number of color samples to generate.
 * @param overrides The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns An array containing the paired scheme.
 * @example 
 * 
 * import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green", 6, 5, "dark"))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
const pairedScheme = (
  color: Color,
  hueStep: number,
  num: number,
  via: tone
): Color[] => {
  color = converter("lch")(color)
  // get the hue of the passed in color and add it to the step which will result in the final color to pair with
  let derivedHue = setChannel("lch.h")(color, color["h"] + hueStep || 12)

  // Set the tones to color objects with hardcoded hue values and lightness channels clamped at extremes
  let tones = {
    dark: "#263238",
    light: { l: 100, c: 0.1, h: 0, mode: "lch" },
  }

  let scale = interpolate([color, tones[via || "dark"], derivedHue], "lch", {
    h: {
      use: interpolatorSplineBasis,
      fixup: fixupHueShorter,
    },
    c: interpolatorSplineNatural,
    l: interpolatorSplineBasisClosed,
    alpha: { fixup: fixupAlpha },
  })

  const { abs, round } = Math

  // Declare the num of iterations in samples() which will be used as the t value
  // Since the interpolation returns half duplicate values we double the sample value
  // Guard the num param against negative values and floats
  let smp = samples((round(abs(num)) || 4) * 2)

  //The array to capture the different iterations
  let results: Color[]
  results = map(smp, (t) => formatHex8(scale(easingSmootherstep(t))))

  // Return a slice of the array from the start to the half length of the array
  return slice(results, 0, results.length / 2)
}

export { pairedScheme }

// For 20 iterations only 11 colors are unique.
// What if I remove _.uniq ?
// How can I ensure that the colors return a unique color per iteration ?

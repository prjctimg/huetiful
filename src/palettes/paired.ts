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
  toString,
  uniq,
} from "lodash-es";
import { getChannel } from "../core-utils/get.ts";
import { setChannel } from "../core-utils/set.ts";
import { Color, tone } from "../paramTypes.ts";
import {
  converter,
  easingInOutSine,
  easingSmootherstep,
  fixupAlpha,
  fixupHueShorter,
  formatHex8,
  interpolate,
  interpolatorSplineBasis,
  interpolatorSplineBasisClosed,
  interpolatorSplineNatural,
  samples,
} from "culori";
import { adjustHue } from "../core-utils/helpers.ts";

/**
 * @function pairedScheme
 * @description Creates a scheme that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.
 * @param color The color to return a paired color scheme from.
 * @param via The tone to interpolate through (either white or black). Default is white.
 * @param hueStep The value to increment the base color's hue channel with.
 * @param num The number of color samples to generate.
 * @param overrides The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns An array containing the paired scheme.
 */
const pairedScheme = (
  color: Color,
  hueStep: number,
  num: number,
  via: tone,
  overrides = {
    h: {
      use: interpolatorSplineBasis,
      fixup: fixupHueShorter,
    },
    c: interpolatorSplineNatural,
    l: interpolatorSplineBasisClosed,
    alpha: { fixup: fixupAlpha },
  },
): Color[] => {
  color = converter("lch")(color);
  // get the hue of the passed in color and add it to the step which will result in the final color to pair with
  let derivedHue = setChannel("lch.h")(color, add(color["h"], hueStep || 12));

  // Set the tones to color objects with hardcoded hue values and lightness channels clamped at extremes
  let tones = {
    dark: "#263238",
    light: { l: 100, c: 0, h: 0, mode: "lch" },
  };

  let scale = interpolate(
    [color, tones[via || "dark"], derivedHue],
    "lch",
    overrides,
  );

  // Declare the num of iterations in samples() which will be used as the t value and a reverse array for the derivedHue
  let smp = samples(num || 4);
  let reverseSmp = reverse(smp);

  //The arrays to capture the different iterations
  let baseHueArr = [];
  let derivedHueArr = [];

  // The muations on the arrays
  let c1 = (x) => baseHueArr.unshift(scale(easingInOutSine(x)));
  let c2 = (y) => derivedHueArr.push(scale(easingInOutSine(reverseSmp[y])));

  //Map the samples to c1 and c2
  map(smp, (t, y) => c1(t) && c2(y));
  // Concat,deduplicate the color arrays and return them as hex
  return uniq(map(concat(baseHueArr, derivedHueArr), (c) => formatHex8(c)));
};

export { pairedScheme };

// For 20 iterations only 11 colors are unique.
// What if I remove _.uniq ?
// How can I ensure that the colors return a unique color per iteration ?

/**
 * (c) Dean Tarisai
 * @file pairedScheme.ts
 * Licensed under the Apache 2.0 license
 *
 */

import { toHex } from "../converters/toHex.ts";
import { setChannel } from "../getters_and_setters/set.ts";
import { Color, PairedSchemeOptions } from "../types";
import {
  interpolate,
  samples,
  useMode,
  modeLch,
  easingSmoothstep,
} from "culori/fn";
import { checkArg } from "../fp/misc.ts";
import { interpolatorConfig } from "../fp/defaults.ts";

/**
 * @function pairedScheme
 * @description Creates a scheme that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.
 * @param color The color to return a paired color scheme from.
 * @param options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns An array containing the paired scheme.
 * @example 
 * 
 * import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,iterations:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
const pairedScheme = (
  color: Color,
  options?: PairedSchemeOptions
): Color[] | Color => {
  // eslint-disable-next-line prefer-const
  let { iterations, via, hueStep, easingFunc } = options || {};

  iterations = checkArg(iterations, 1);
  easingFunc = checkArg(easingFunc, easingSmoothstep);
  via = checkArg(via, "light");
  hueStep = checkArg(hueStep, 5);

  const toLch = useMode(modeLch);
  color = toLch(toHex(color));

  // get the hue of the passed in color and add it to the step which will result in the final color to pair with
  const derivedHue = setChannel("lch.h")(color, color["h"] + hueStep);

  // Set the tones to color objects with hardcoded hue values and lightness channels clamped at extremes
  const tones = {
    dark: { l: 0, c: 0, h: 0, mode: "lch65" },
    light: { l: 100, c: 0, h: 0, mode: "lch65" },
  };

  const scale = interpolate(
    [color as unknown as string, tones[via as string], derivedHue, easingFunc],
    "lch",
    checkArg(options, interpolatorConfig)
  );

  if (iterations <= 1) {
    return toHex(scale(0.5));
  } else {
    // Declare the num of iterations in samples() which will be used as the t value
    // Since the interpolation returns half duplicate values we double the sample value
    // Guard the num param against negative values and floats
    const smp = samples(iterations * 2);

    //The array to capture the different iterations
    const results: Color[] = smp.map((t) => toHex(scale(easingFunc(t))));
    // Return a slice of the array from the start to the half length of the array
    return results.slice(0, results.length / 2);
  }
};

export { pairedScheme };

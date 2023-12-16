// Use eathtone colors as control points for the bezier interpolation
// takes one color and returns the specified amount of samples
// @ts-nocheck
import {
  interpolate,
  samples,
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineMonotone,
  interpolatorSplineBasisClosed,
  easingSmootherstep,
} from "culori/fn";
import type { Color, EarthtoneOptions } from "../types";
import { toHex } from "../converters/toHex.ts";
import { checkArg } from "../fp/misc.ts";
import { interpolatorConfig } from "../fp/defaults.ts";
//Add an overrides object with interpolation function and

/**
 * @function
 * @description Creates a scale of a spline based interpolation between an earthtone and a color.
 * @param color The color to interpolate an earth tone with.
  * @param options Optional overrides for customising interpolation and easing functions.
 * @returns The array of colors resulting from the earthtone interpolation as hex codes.
 * @example
 * 
 * import { earthtone } from 'huetiful-js'


console.log(earthtone("pink",{earthtones:'clay',iterations:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]

 */

const earthtone = (color: Color, options?: EarthtoneOptions): Color[] => {
  let {
    chromaInterpolator,
    hueFixup,
    hueInterpolator,
    lightnessInterpolator,
    iterations,
    earthtones,
    easingFunc,
  } = options || {};

  iterations = checkArg(iterations, 1);

  earthtones = checkArg(earthtones, "dark");
  const tones = {
    "light-gray": "#e5e5e5",
    silver: "#f5f5f5",
    sand: "#c2b2a4",
    tupe: "#a79e8a",
    mahogany: "#958c7c",
    "brick-red": "#7d7065",
    clay: "#6a5c52",
    cocoa: "#584a3e",
    "dark-brown": "#473b31",
    dark: "#352a21",
  };

  const base: Color = tones[earthtones.toLowerCase()];

  const f = interpolate(
    [base, toHex(color), easingFunc],
    "lch",
    checkArg(options, interpolatorConfig)
  );

  if (iterations === 1) {
    return toHex(f(0.5));
  } else {
    return samples(iterations).map((t) => toHex(f(t)));
  }
};

export { earthtone };

// Use eathtone colors as control points for the bezier interpolation
// takes one color and returns the specified amount of samples
// @ts-nocheck
import {
  formatHex8,
  interpolate,
  samples,
  easingSmootherstep,
  interpolatorSplineNatural,
  fixupHueShorter,
  lch,
} from "culori";
import type { Color, earthtones } from "../paramTypes.ts";
import { defaultTo, get, keys, map } from "lodash-es";
import { Interpolator } from "culori/src/interpolate/Interpolator.js";

/**
 * @function
 * @description Creates a scale of a spline based interpolation between an earthtone and a color.
 * @param color The color to interpolate an earth tone with.
 * @param earthtone The earthtone to interpolate with.
 * @param num The number of iterations to produce from the color and earthtone.
 * @returns The array of colors resulting from the earthtone interpolation as hex codes.
 */
const earthtone = (color: Color, earthtone: earthtones, num = 1): Color[] => {
  color = lch(color);

  let tones = {
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
  let base = get(tones, defaultTo(earthtone, "dark"));

  let f = interpolate([base, color, easingSmootherstep], "lch", {
    h: {
      use: interpolatorSplineNatural,
      fixup: fixupHueShorter,
    },
  });

  return map(samples(num), (t) => formatHex8(f(t)));
};

export { earthtone };

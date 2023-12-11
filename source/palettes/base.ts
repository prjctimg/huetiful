//@ts-nocheck
import { useMode, modeLch, easingSmoothstep, samples } from "culori/fn";

import type { ColorToken } from "../types";
import { adjustHue } from "../fp/number/adjustHue.ts";
import { random } from "../fp/number/random.ts";
import { toHex } from "../converters/toHex.ts";
import { checkArg } from "../fp/misc.ts";
// Globals
const cb = (iterations: number, distance: number, color: ColorToken) =>
  samples(iterations).map((val) =>
    adjustHue((color["h"] + distance) * (val * easingSmoothstep(val)))
  );

/**
 * @function
 * @description Generates a randomised classic color scheme from a single base color.
 * @param  scheme  Any classic color scheme either "analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary".
 * @param easingFunc Optional parameter to pass in a custom easing function. The default is smoothstep
 * @returns An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.
 * @example
 * 
 import { base } from 'huetiful-js'

console.log(base("triadic")("#a1bd2f", true))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */

const base =
  (scheme: "analogous" | "triadic" | "tetradic" | "complementary") =>
  (color: ColorToken, easingFunc: (t: number) => number): ColorToken[] => {
    scheme = scheme.toLowerCase();
    easingFunc = checkArg(easingFunc, easingSmoothstep);
    // Converting the color to lch
    const lch = useMode(modeLch);
    color = lch(color);
    const lowMin = 0.05,
      lowMax = 0.495,
      highMin = 0.5,
      highMax = 0.995;
    const targetHueSteps = {
      analogous: cb(3, 12, color),
      triadic: cb(3, 120, color),
      tetradic: cb(4, 90, color),
      complementary: cb(2, 180, color),
    };
    // For each step return a  random value between lowMin && lowMax multipied by highMin && highMax and 0.9 of the step
    for (const scheme of Object.keys(targetHueSteps)) {
      targetHueSteps[scheme].map(
        (step: number) =>
          random(step * lowMax, step * lowMin) +
          random(step * highMax, step * highMin) / 2
      );
    }
    // The map for steps to obtain the targeted palettes

    const colors = targetHueSteps[scheme].map((step: number) => ({
      l: color["l"],
      c: color["c"],
      h: step * easingFunc(1 / targetHueSteps[scheme].length),
      mode: "lch",
    }));

    return colors.map(toHex);
  };

export { base };

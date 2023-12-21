//@ts-nocheck
// Original source from   George Francis: Coloring with Code
// Can we also lightnessMapper palette types to create hue shifted variants per each color in the palette ?

import { easingSmoothstep, modeLch, samples, useMode } from "culori/fn";
import type { Color, HueShiftOptions } from "../types";
import { adjustHue } from "../fp/number/adjustHue.ts";
import { toHex } from "../converters/toHex.ts";
import { checkArg } from "../fp/misc.ts";
function lightnessMapper(n: number) {
  return (start1: number, end1: number) => (start2: number, end2: number) =>
    ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

/**
 * @function
 * @description Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the base of the hueshift. Colors are internally converted to LCH.
 * @param options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 *@returns An array of colors in hex. The length of the resultant array is the number of iterations multiplied by 2 plus the base color passed or (iterations*2)+1
 * @example
 * import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

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

function hueShift(color: Color, options?: HueShiftOptions): Color[] {
  const toLch = useMode(modeLch);
  color = toLch(toHex(color));

  let { iterations, hueStep, minLightness, maxLightness, easingFunc } =
    options || {};

  // Pass default values in case the options object is overridden
  easingFunc = checkArg(easingFunc, easingSmoothstep);
  iterations = checkArg(iterations, 6) + 1;
  hueStep = checkArg(hueStep, 5);
  minLightness = checkArg(minLightness, 10);
  maxLightness = checkArg(maxLightness, 90);
  // Pass in default values if any of the opts is undefined
  const tValues = samples(iterations);
  const palette: Color[] = [color];

  // Maximum number of iterations possible.
  //Each iteration add a darker shade to the start of the array and a lighter tint to the end.
  for (let i = 1; i < iterations; i++) {
    //adjustHue checks hue values are clamped.
    const hueDark = adjustHue(color["h"] - hueStep * i);
    const hueLight = adjustHue(color["h"] + hueStep * i);

    // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].
    const lightnessDark = lightnessMapper(easingFunc(tValues[i - 1]))(
      0.1,
      iterations
    )(color["l"], minLightness);

    const lightnessLight = lightnessMapper(easingFunc(tValues[i - 1]))(
      0.05,
      iterations
    )(color["l"], maxLightness);

    palette.push({
      l: lightnessDark,
      c: color["c"],
      h: hueDark,
      mode: "lch",
    });

    palette.unshift({
      l: lightnessLight,
      c: color["c"],
      h: hueLight,
      mode: "lch",
    });
  }
  return palette.map(toHex);
}

export { hueShift };

//@ts-nocheck
// Original source from   George Francis: Coloring with Code
// Can we also lightnessMapper palette types to create hue shifted variants per each color in the palette ?

import { easingSmootherstep, modeLch, samples, useMode } from 'culori/fn';
import type { Color } from '../paramTypes.ts';
import { adjustHue } from '../fp/number/adjustHue.ts';
import { toHex } from '../converters/toHex.ts';

const lightnessMapper =
  (n: number) =>
  (start1: number, end1: number) =>
  (start2: number, end2: number) =>
    ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;

/**
 * @function
 * @description Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the base of the hueshift. Colors are internally converted to LCH.
 * @param minLightness  Minimum lightness value (range 0-100).
 * @param maxLightness  Maximum lightness value (range 0-100).
 * @param iterations The number of iterations to perform on the color. The length of the resultant array is the number of iterations multiplied by 2 plus the base color passed or (iterations*2)+1.
 * @param hueStep  Controls how much the hue will shift at each iteration.
 * @param hex Optional boolen to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.
 * @returns An array of colors in either hex or as LCH color objects.
 * @example
 * 
 * import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000",true);

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

const hueShift = (
  color: Color,
  hex = false,
  {
    minLightness,
    maxLightness,
    hueStep,
    iterations,
    easingFn
  }: {
    minLightness?: number;
    maxLightness?: number;
    hueStep?: number;
    iterations?: number;
    easingFn: (t: number) => number;
  }
): Color[] => {
  minLightness = minLightness || 10;
  maxLightness = maxLightness || 90;
  hueStep = hueStep || 5;
  iterations = iterations || 6;
  easingFn = easingSmootherstep || easingFn;
  const toLch = useMode(modeLch);

  color = toLch(toHex(color));

  // Pass in default values if any of the opts is undefined

  const palette: Color[] = [color];

  // Maximum number of iterations possible.
  const MAX_SAFE_ITERATIONS = 360 / hueStep;
  //Each iteration add a darker shade to the start of the array and a lighter tint to the end.

  if (iterations <= MAX_SAFE_ITERATIONS) {
    samples(iterations).map((t) => {
      //adjustHue checks hue values are clamped.
      const hueDark = adjustHue(color['h'] - hueStep * t);
      const hueLight = adjustHue(color['h'] + hueStep * t);

      // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].
      const lightnessDark = lightnessMapper(easingFn(t))(0.1, iterations)(
        color['l'],
        minLightness
      );

      const lightnessLight = lightnessMapper(easingFn(t))(0.05, iterations)(
        color['l'],
        maxLightness
      );

      palette.push({
        l: lightnessDark,
        c: color['c'],
        h: hueDark,
        mode: 'lch'
      });

      palette.unshift({
        l: lightnessLight,
        c: color['c'],
        h: hueLight,
        mode: 'lch'
      });
    });
  } else {
    throw Error(
      `The number of iterations exceeds the maximum number of iterations. The maximum iterations are determined by the size of the hueStep. To find the maximum iterations possible, use this formula: 360/hueStep`
    );
  }

  if (hex) {
    return palette.map(toHex);
  } else {
    return palette;
  }
};

export { hueShift };

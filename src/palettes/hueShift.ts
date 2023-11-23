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
  options = {
    minLightness: 10,
    maxLightness: 90,
    hueStep: 5,
    iterations: 6,
    easingFn: easingSmootherstep
  }
): Color[] => {
  const toLch = useMode(modeLch);

  color = toLch(toHex(color));

  // Pass default values in case the options object is overridden
  options['easingFn'] = options['easingFn'] || easingSmootherstep;
  options['hueStep'] = options['hueStep'] || 5;
  options['iterations'] = (options['iterations'] || 6) + 1;
  options['minLightness'] = options['minLightness'] || 10;
  options['maxLightness'] = options['maxLightness'] || 90;

  // Pass in default values if any of the opts is undefined
  const tValues = samples(options['iterations']);
  const palette: Color[] = [color];

  // Maximum number of iterations possible.

  //Each iteration add a darker shade to the start of the array and a lighter tint to the end.

  for (let i = 1; i < options['iterations']; i++) {
    //adjustHue checks hue values are clamped.
    const hueDark = adjustHue(color['h'] - options['hueStep'] * i);
    const hueLight = adjustHue(color['h'] + options['hueStep'] * i);

    // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].
    const lightnessDark = lightnessMapper(options['easingFn'](tValues[i - 1]))(
      0.1,
      options['iterations']
    )(color['l'], options['minLightness']);

    const lightnessLight = lightnessMapper(options['easingFn'](tValues[i - 1]))(
      0.05,
      options['iterations']
    )(color['l'], options['maxLightness']);

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
  }
  if (hex) {
    return palette.map(toHex);
  } else {
    return palette;
  }
};

export { hueShift };

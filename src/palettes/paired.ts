// @ts-nocheck
// From colorbrewr

import { toHex } from '../converters/toHex.ts';
import { setChannel } from '../getters_and_setters/set.ts';
import { Color, EarthtoneOptions } from '../paramTypes.ts';
import {
  interpolate,
  samples,
  easingSmootherstep,
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineMonotone,
  interpolatorSplineBasisClosed,
  useMode,
  modeLch
} from 'culori/fn';

/**
 * @function pairedScheme
 * @description Creates a scheme that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.
 * @param color The color to return a paired color scheme from.
 * @param via The tone to interpolate through (either white or black). Default is white.
 * @param hueStep The value to increment the base color's hue channel with.
 * @param iterations The number of color samples to generate.
 * @param overrides The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns An array containing the paired scheme.
 * @example 
 * 
 * import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,iterations:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
const pairedScheme = (color: Color, options: EarthtoneOptions): Color[] => {
  // eslint-disable-next-line prefer-const

  options['iterations'] = options['iterations'] || 4;

  options['hueStep'] = options['hueStep'] || 5;
  options['via'] = options['via'] || 'dark';
  options['easingFunc'] = options['easingFunc'] || easingSmootherstep;
  options['lightnessInterpolator'] =
    options['lightnessInterpolator'] || interpolatorSplineMonotone;
  options['chromaInterpolator'] || interpolatorSplineNatural;
  options['hueInterpolator'] || interpolatorSplineBasisClosed;
  options['hueFixup'] = options['hueFixup'] || fixupHueShorter;
  const toLch = useMode(modeLch);
  color = toLch(toHex(color));

  // get the hue of the passed in color and add it to the step which will result in the final color to pair with
  const derivedHue = setChannel('lch.h')(
    color,
    color['h'] + options['hueStep']
  );

  // Set the tones to color objects with hardcoded hue values and lightness channels clamped at extremes
  const tones = {
    dark: '#263238',
    light: { l: 100, c: 0.0001, h: 0, mode: 'lch' }
  };

  const scale = interpolate([color, tones[options['via']], derivedHue], 'lch', {
    h: {
      fixup: options['hueFixup'],
      use: options['hueInterpolator']
    },
    c: {
      use: options['chromaInterpolator']
    },
    l: {
      use: options['lightnessInterpolator']
    }
  });

  if (options['iterations'] <= 1) {
    return toHex(scale(0.5));
  } else {
    // Declare the num of iterations in samples() which will be used as the t value
    // Since the interpolation returns half duplicate values we double the sample value
    // Guard the num param against negative values and floats
    const smp = samples(options['iterations'] * 2);

    //The array to capture the different iterations
    const results: Color[] = smp.map((t) =>
      toHex(scale(options['easingFunc'](t)))
    );
    // Return a slice of the array from the start to the half length of the array
    return results.slice(0, results.length / 2);
  }
};

export { pairedScheme };

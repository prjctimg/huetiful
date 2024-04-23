/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection

 * @typedef {import('../types/types.js').PairedSchemeOptions} PairedSchemeOptions
 */

import { lte, or } from './fp/index.js';
import { token } from './token.js';
import { set } from './set.js';
import { interpolator } from './interpolator.js';
import { samples } from 'culori/fn';

/**
 *@public Creates a palette that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.
 * @param {ColorToken} color The color to return a paired color scheme from.
 * @param {PairedSchemeOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns An array containing the paired scheme.Preserves the `ColorToken` type of the passed in color.
 * @example
 *
 * import { pair } from 'huetiful-js'

console.log(pair("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
function pair(color, options) {
  // eslint-disable-next-line prefer-const
  let { num, via, hueStep } = options || {}; // I cant get intellisense when I use or()

  num = or(num, 1);

  via = or(via, 'light');
  hueStep = or(hueStep, 5);

  //  @ts-ignore
  color = token('object')(color);

  // get the hue of the passed in color and add it to the step which will result in the final color to pair with
  const g = set('lch.h')(color, color['h'] + hueStep);

  // Set the tones to color objects with hardcoded hue values and lightness channels clamped at extremes
  const u = {
    dark: { l: 0, c: 0, h: 0, mode: 'jch' },
    light: { l: 100, c: 0, h: 0, mode: 'jch' }
  };

  const f = interpolator([color, u[via], g], {
    colorspace: 'jch'
  });

  if (lte(num, 1)) {
    // @ts-ignore
    return token('hex')(f(0.5));
  } else {
    // Declare the num of iterations in samples() which will be used as the t value
    // Since the interpolation returns half duplicate values we double the sample value
    // Guard the num param against negative values and floats
    // @ts-ignore
    const s = samples(num * 2);

    //The array to capture the different iterations
    // @ts-ignore
    const o = s.map((t) => token('hex')(f(t)));
    // Return a slice of the array from the start to the half length of the array
    return o.slice(0, o.length / 2);
  }
}

export { pair };

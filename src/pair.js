/**
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection

 * @typedef {import('./types.js').PairedSchemeOptions} PairedSchemeOptions
 */

import { lt, lte, or } from './fp/index.js';
import { token } from './token.js';
import { mc } from './mc.js';
import { interpolator } from './interpolator.js';
import { samples } from 'culori/fn';

/**
 * Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
 * The colors are then spline interpolated via white or black.
 * 
 * A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.
 * @param {ColorToken} baseColor The color to return a paired color scheme from.
 * @param {PairedSchemeOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns {Array<string|ColorToken>|string|ColorToken}
 * @example
 *
 * import { pair } from 'huetiful-js'

console.log(pair("green",{hueStep:6,num:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
function pair(baseColor, options) {
  // eslint-disable-next-line prefer-const
  let { num, via, hueStep, colorspace } = options || {}; // I cant get intellisense when I use or()

  via = or(via, 'light');
  hueStep = or(hueStep, 5);

  //  @ts-ignore
  baseColor = token(baseColor, { kind: 'object' });

  // get the hue of the passed in color and add it to the step which will result in the final color to pair with
  const g = mc(`${or(colorspace, 'jch')}.h`)(
    baseColor,
    Math.abs(baseColor['h'] + (lt(hueStep, 0) ? -hueStep : hueStep))
  );

  // Set the tones to color objects with hardcoded hue values and lightness channels clamped at extremes.
  // This is because pure black returns a falsy channel (have'nt found out which yet but it f*cks up the results smh).
  // Question: Black is  the absence of hue or ligtness or both ? Why ?
  const u = {
    dark: { l: 0, c: 0, h: 0, mode: 'jch' },
    light: { l: 100, c: 0, h: 0, mode: 'jch' }
  };

  const f = (l) =>
    interpolator([baseColor, u[via], g], {
      colorspace: colorspace,
      num: l,
      token: options['token']
    });

  // Declare the num of iterations in samples() which will be used as the t value
  // Since the interpolation returns half duplicate values we double the sample value
  // Guard the num param against negative values and floats

  // Return a slice of the array from the start to the half length of the array

  return lte(num, 1) ? f(1) : f(num * 2).slice(0, num);
}

export { pair };

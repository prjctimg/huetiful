/**
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection
 * @typedef {import('./types.js').InterpolatorOptions} InterpolatorOptions
 
*/

import {
  samples,
  interpolate,
  interpolatorSplineBasis,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone,
  interpolatorSplineMonotoneClosed,
  interpolatorSplineNatural,
  interpolatorSplineNaturalClosed
} from 'culori/fn';
import { or, mcchn, mlchn, pltrconfg, gt, gte, values } from './fp/index.js';
import { token } from './token.js';

/**
 * Interpolates the passed in colors and returns a collection of colors from the interpolation.
 * 
 * Some things to keep in mind when creating color scales using this function:
 * 
 * * To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object. 
 * * If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
 * * If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.
 *  
 * @param {Collection} baseColors The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray.
 * @param {InterpolatorOptions} options Optional overrides.
 * @returns {Array<string|ColorToken> | string|ColorToken}
 *
 * @example
 *
 * import { interpolator } from 'huetiful-js';

console.log(interpolator(['pink', 'blue'], { num:8 }));

// [
  '#ffc0cb', '#ff9ebe',
  '#f97bbb', '#ed57bf',
  '#d830c9', '#b800d9',
  '#8700eb', '#0000ff'
]
 *
 */
function interpolator(
  baseColors = [],

  options = {
    colorspace: 'lch',
    num: 1,
    kind: 'basis',
    closed: false
  }
) {
  var { hueFixup, easingFn, kind, closed, colorspace, num } = options || {};
  // Set the internal defaults
  easingFn = or(easingFn, pltrconfg['ef']);

  let f;
  switch (kind) {
    case 'basis':
      f = (closed && interpolatorSplineBasisClosed) || interpolatorSplineBasis;
      break;
    case 'monotone':
      f =
        (closed && interpolatorSplineMonotoneClosed) ||
        interpolatorSplineMonotone;
      break;
    case 'natural':
      f =
        (closed && interpolatorSplineNaturalClosed) ||
        interpolatorSplineNatural;
  }

  baseColors = values(baseColors);

  // @ts-ignore
  let p = interpolate([...baseColors, easingFn], colorspace, {
    // @ts-ignore
    h: {
      fixup: hueFixup,
      use: or(f, pltrconfg['hi'])
    },
    [mlchn(colorspace)]: {
      use: or(f, pltrconfg['li'])
    },
    [mcchn(colorspace)]: {
      use: or(f, pltrconfg['ci'])
    }
  });

  // make sure samples is an absolute integer
  // @ts-ignore
  num = gte(num, 1) ? Math.abs(num) : 1;

  var o;
  if (gt(num, 1)) {
    // @ts-ignore
    o = samples(num).map((s) => token(p(s), options['token']));
  } else {
    // @ts-ignore
    o = token(p(0.5), options['token']);
  }
  // @ts-ignore
  return o;
}

export { interpolator };

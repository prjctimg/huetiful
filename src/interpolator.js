/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef {import('../types/types.js').InterpolatorOptions} InterpolatorOptions
 
*/

import {
  samples as _smp,
  interpolate as _pltr,
  interpolatorSplineBasis,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone,
  interpolatorSplineMonotoneClosed,
  interpolatorSplineNatural,
  interpolatorSplineNaturalClosed
} from 'culori/fn';
import {
  or,
  mcchn,
  mlchn,
  pltrconfg,
  gt,
  gte,
  values,
  token,
  gmchn
} from './index.js';

/**
 *  Returns a spline interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.
 * @param {Collection} colors The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray.
 * @param {InterpolatorOptions} options Optional overrides.
 * @returns A collection of colors resulting from the interpolation.
 *
 * @example
 *
 * import { interpolator } from 'huetiful-js';

console.log(interpolator(['pink', 'blue'], 'lch', 8));

// [
  '#ffc0cb', '#ff9ebe',
  '#f97bbb', '#ed57bf',
  '#d830c9', '#b800d9',
  '#8700eb', '#0000ff'
]
 *
 */
function interpolator(
  colors = [],

  options = {
    colorspace: 'lch',
    num: 1,
    kind: 'basis',
    closed: false
  }
) {
  var {
    hueFixup,
    easingFn,
    kind,
    closed,
    colorspace,
    num: iterations
  } = options || {};
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

  colors = values(colors);

  // @ts-ignore
  let p = _pltr([...colors, easingFn], colorspace, {
    // @ts-ignore
    h: {
      fixup: hueFixup,
      use: or(f, pltrconfg['hi'])
    },
    [gmchn(mlchn(colorspace), 1)]: {
      use: or(f, pltrconfg['li'])
    },
    [gmchn(mcchn(colorspace), 1)]: {
      use: or(f, pltrconfg['ci'])
    }
  });

  // make sure samples is an absolute integer
  // @ts-ignore
  iterations = gte(iterations, 1) ? Math.abs(iterations) : 1;

  var o;
  if (gt(iterations, 1)) {
    // @ts-ignore
    o = _smp(iterations).map((s) => token('hex')(p(s)));
  } else {
    // @ts-ignore
    o = o.push(token('hex')(p(0.5)));
  }
  return o;
}

export { interpolator };

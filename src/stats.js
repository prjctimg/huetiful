/**
 * @typedef { import('../types/types.js').Collection} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').Colorspaces} Colorspaces
 * @typedef {import('../types/types.js').Stats} Stats
 * @typedef {import('../types/types.js').StatsOptions} StatsOptions
 */

import { differenceHyab, averageNumber, averageAngle } from 'culori/fn';
import {
  mlchn,
  mcchn,
  chnDiff,
  sortedColl,
  or,
  values,
  isArray
} from './index.js';
import { luminance } from './luminance.js';
import { mc } from './mc.js';
import { contrast } from './contrast.js';
/**
 * Computes statistical values about the passed in color collection.
 *
 * The topmost properties from each returned `factor` object are:
 *
 * * `against` - The color being used for comparison.
 *
 * Required for the `distance` and `contrast` factors.
 * If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.
 * * `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).
 *
 *
 * * `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
 * * `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
 * * `mean` - The average value for the `factor`.
 * * `displayable` - The percentage of the displayable or colors with channel ranges that can be rendered in  that colorspace when converted to RGB.
 *
 * The `mean` property can be overloaded by the `relativeMean` option:
 *
 * * If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
 * For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."
 *
 * @param {Collection} collection The collection to compute stats from. Any collection with color tokens as values will work.
 * @param {StatsOptions} options Optional parameters to specify how the data should be computed.
 * @returns {Stats}
 */
function stats(
  collection,
  options = {
    against: 'cyan',

    colorspace: 'lch'
  }
) {
  var { factor, relativeMean, colorspace, against } = options;

  function y(n, m, o, l) {
    const result = (y) =>
      sortedColl(n, m, o, true)(y).filter((g) => g[n] !== undefined);

    return (w) => (l && result(w)[0]) || result(w)[0][n];
  }

  function z(cspace) {
    return mc(`${mlchn(cspace)}`);
  }

  function g(a) {
    return (b) => contrast(a, b);
  }

  function j(i) {
    return (c) => mc(`${or(i, 'jch')}.h`)(c);
  }
  function v(i) {
    return (color) => mc(mcchn(i))(color);
  }
  var m,
    n = (b, m) => (a) => m(values(a).map(b));
  // similar to get farthest or nearest factor fom...
  var f_cb = (e, f) => {
    var cb;

    // if relativeMean is true
    // use the overload on all other factors when fetching their mean
    if (relativeMean) {
      switch (f) {
        case 'chroma':
          cb = y(f, chnDiff(against, mcchn(colorspace)), e, true);
          break;
        case 'luminance':
          // @ts-ignore
          let cb1 = (a) => (b) => Math.abs(luminance(a) - luminance(b));
          cb = y(f, cb1(against), e, true);
          break;
        case 'lightness':
          cb = y(f, chnDiff(against, mlchn(colorspace)), e, true);
          break;
        case 'hue':
          cb = y(f, chnDiff(against, `${colorspace}.h`), e, true);
          break;
        case 'contrast':
          cb = y(f, g(against), e, true);
          break;
      }
    } else {
      switch (f) {
        case 'chroma':
          cb = y(f, v(colorspace), e, true);
          break;
        case 'luminance':
          break;
        case 'lightness':
          cb = y(f, z(colorspace), e, true);
          break;
        case 'hue':
          cb = y(f, j(colorspace), e, true);
          break;
      }
    }

    switch (f) {
      case 'chroma':
        m = n(mc(mcchn(colorspace)), averageNumber);
        break;

      case 'distance':
        let i = (a) => (b) => differenceHyab()(a, b);
        m = n(i, averageNumber);
        break;
      case 'hue':
        m = n(mc(`${colorspace}.h`), averageAngle);

        break;
      case 'lightness':
        m = n(mc(mlchn(colorspace)), averageNumber);
        break;
      case 'contrast':
        let h = (a) => (b) => contrast(a, b);
        m = n(h, averageNumber);

      case 'luminance':
        m = n(luminance, averageNumber);
        break;
    }

    return cb;
  };

  var p = {},
    t = (k) => ({
      against:
        k !== ('contrast' || 'distance') && !relativeMean ? null : against,
      color: [
        f_cb('min')(collection)['color'],
        f_cb('max')(collection)['color']
      ],
      // @ts-ignore
      mean: m(collection),
      extremums: [f_cb('min')(collection)[k], f_cb('max')(collection)[k]]
    });

  // if its an array add each factor as a key to the object
  if (isArray(factor)) {
    for (const k of values(factor)) {
      p[k] = t(k);
    }
  } else if (typeof factor === 'string') {
    // @ts-ignore
    p = t(factor);
  }

  // if factor is falsy return all the factors
  else {
    for (const k of [
      'hue',
      'chroma',
      'lightness',
      'distance',
      'contrast',
      'luminance'
    ]) {
      p[k] = t(k);
    }
  }

  p['displayable'] =
    // @ts-ignore
    values(collection).map(inGamut('rgb')).length / collection.length;
  p['colorspace'] = colorspace;
  // @ts-ignore
  return p;
}

export { stats };

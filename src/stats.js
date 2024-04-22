/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').Colorspaces} Colorspaces
 * @typedef {import('../types/types.js').Stats} Stats
 
 */

import { differenceHyab, averageNumber, averageAngle } from 'culori/fn';
import { mlchn, mcchn, chnDiff, sortedColl, or, values } from './index.js';
import { luminance } from './luminance.js';
import { get } from './get.js';
import { contrast } from './contrast.js';
/**
 * Computes statistical values about the passed in color collection and returns an object.
 *
 * The topmost properties are:
 *
 * * `against` - The color being used for comparison. Required for the `distance` and `contrast` factors.
 * * `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast | distance` factors.
 *
 *  For each `factor`, there is an object with the following signature:
 * * `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
 * * `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
 * * `mean` - The average value for the `factor`.
 *
 * If the `against` option is specified, it will also affect the final extremums for all the factors. This is because the `against` parameter will be used as a subtrahend for calculating the distance between each `extremum`. For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest factor from thr passed in collection."
 *
 * @param {Collection} collection The collection to compute stats from. Any collection with color tokens as values will work.
 * @param  options Optional parameters to specify how the data should be computed.
 * @returns {Stats}
 */
function stats(
  collection,
  options = {
    /**
     * @type {ColorToken}  The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor.
     */
    against: null,
    /**
     * @type {Colorspaces} The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.
     */
    colorspace: 'lch'
  }
) {
  var { colorObj, colorspace, against, mean } = options;

  function y(n, m, o, l) {
    const result = (y) =>
      sortedColl(n, m, o, true)(y).filter((el) => el[n] !== undefined);

    return (w) => (l && result(w)[0]) || result(w)[0][n];
  }

  function z(cspace) {
    return get(`${mlchn(cspace)}`);
  }

  function g(a) {
    return (b) => contrast(a, b);
  }

  function j(i) {
    return (c) => get(`${or(i, 'jch')}.h`)(c);
  }
  function v(i) {
    return (color) => get(mcchn(i))(color);
  }
  var m,
    m_cb = (b, m) => (a) => m(values(a).map(b));
  // similar to get farthest or nearest factor fom...
  var f_cb = (e, f) => {
    var cb;
    if (typeof against !== 'undefined') {
      switch (f) {
        case 'chroma':
          cb = y(f, chnDiff(against, mcchn(colorspace)), e, colorObj);
          break;
        case 'luminance':
          // @ts-ignore
          let cb1 = (a) => (b) => Math.abs(luminance(a) - luminance(b));
          cb = y(f, cb1(against), e, colorObj);
          break;
        case 'lightness':
          cb = y(f, chnDiff(against, mlchn(colorspace)), e, colorObj);
          break;
        case 'hue':
          cb = y(f, chnDiff(against, `${colorspace}.h`), e, colorObj);
          break;
        case 'contrast':
          cb = y(f, g(against), e, colorObj);
          break;
      }
    } else {
      switch (f) {
        case 'chroma':
          cb = y(f, v(colorspace), e, colorObj);
          break;
        case 'luminance':
          break;
        case 'lightness':
          cb = y(f, z(colorspace), e, colorObj);
          break;
        case 'hue':
          cb = y(f, j(colorspace), e, colorObj);
          break;
      }
    }

    switch (f) {
      case 'chroma':
        m = m_cb(get(mcchn(colorspace)), averageNumber);
        break;

      case 'distance':
        let cb1 = (a) => (b) => differenceHyab()(a, b);
        m = m_cb(cb1, averageNumber);
        break;
      case 'hue':
        m = m_cb(get(`${colorspace}.h`), averageAngle);

        break;
      case 'lightness':
        m = m_cb(get(mlchn(colorspace)), averageNumber);
        break;
      case 'contrast':
        var cb2 = (a) => (b) => contrast(a, b);
        m = m_cb(cb2, averageNumber);

      case 'luminance':
        m = m_cb(luminance, averageNumber);
        break;
    }

    return cb;
  };

  var _o = {};

  for (const k of [
    'hue',
    'chroma',
    'lightness',
    'distance',
    'contrast',
    'luminance'
  ]) {
    _o[k] = {
      against,
      color: [
        f_cb('min')(collection)['color'],
        f_cb('max')(collection)['color']
      ],
      // @ts-ignore
      mean: m(collection),
      extremums: [f_cb('min')(collection)[k], f_cb('max')(collection)[k]]
    };
  }

  // @ts-ignore
  return {
    colorspace,
    ..._o
  };
}

export { stats };

/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').HueColorSpaces} HueColorSpaces
 * @typedef {import('../types/stats.js').Stats} Stats
 
 */

/**

 * @license
 * stats.js - Utility for computing statistical data from collections of colors.
Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { differenceHyab, averageNumber, averageAngle } from 'culori/fn';
import {
  getLuminance,
  getChannel,
  getContrast,
  mlchn,
  mcchn,
  chnDiff,
  sortedColl,
  or,
  values
} from './index.js';

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
     * @type {HueColorSpaces} The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.
     */
    colorspace: 'lch'
  }
) {
  var { colorObj, colorspace, against, mean } = options;

  function baseFunc(fctr, cb, o, cObj) {
    const result = (y) =>
      sortedColl(fctr, cb, o, true)(y).filter((el) => el[fctr] !== undefined);

    return (col) => (cObj && result(col)[0]) || result(col)[0][fctr];
  }

  function lightnessPredicate(cspace) {
    return getChannel(`${mlchn(cspace)}`);
  }

  function contrastPredicate(color) {
    return (against) => getContrast(color, against);
  }

  function huePredicate(cspace) {
    return (c) => getChannel(`${or(cspace, 'jch')}.h`)(c);
  }
  function chromaPredicate(colorspace) {
    return (color) => getChannel(mcchn(colorspace))(color);
  }
  var m,
    m_cb = (b, m) => (a) => m(values(a).map(b));
  // similar to get farthest or nearest factor fom...
  var f_cb = (e, f) => {
    var cb;
    if (typeof against !== 'undefined') {
      switch (f) {
        case 'chroma':
          cb = baseFunc(f, chnDiff(against, mcchn(colorspace)), e, colorObj);
          break;
        case 'luminance':
          let cb1 = (a) => (b) => Math.abs(getLuminance(a) - getLuminance(b));
          cb = baseFunc(f, cb1(against), e, colorObj);
          break;
        case 'lightness':
          cb = baseFunc(f, chnDiff(against, mlchn(colorspace)), e, colorObj);
          break;
        case 'hue':
          cb = baseFunc(f, chnDiff(against, `${colorspace}.h`), e, colorObj);
          break;
        case 'contrast':
          cb = baseFunc(f, contrastPredicate(against), e, colorObj);
          break;
      }
    } else {
      switch (f) {
        case 'chroma':
          cb = baseFunc(f, chromaPredicate(colorspace), e, colorObj);
          break;
        case 'luminance':
          break;
        case 'lightness':
          cb = baseFunc(f, lightnessPredicate(colorspace), e, colorObj);
          break;
        case 'hue':
          cb = baseFunc(f, huePredicate(colorspace), e, colorObj);
          break;
      }
    }

    switch (f) {
      case 'chroma':
        m = m_cb(getChannel(mcchn(colorspace)), averageNumber);
        break;

      case 'distance':
        let cb1 = (x) => (y) => differenceHyab()(x, y);
        m = m_cb(cb1, averageNumber);
        break;
      case 'hue':
        m = m_cb(getChannel(`${colorspace}.h`), averageAngle);

        break;
      case 'lightness':
        m = m_cb(getChannel(mlchn(colorspace)), averageNumber);
        break;
      case 'contrast':
        var cb2 = (x) => (y) => getContrast(x, y);
        m = m_cb(cb2, averageNumber);

      case 'luminance':
        m = m_cb(getLuminance, averageNumber);
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

export default stats;

/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').HueColorSpaces} HueColorSpaces
 * @typedef {import('../types/types.js').Factor} Factor
 * @typedef {import('../types/types.js').Order} Order
 */

/**
 * @license
 * sortBy.js - Utilities for sorting collections of colors.
Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { sortedColl, mlchn, mcchn, getLuminance, getChannel } from './index.js';
import { wcagContrast, differenceHyab } from 'culori/fn';

/**
 * @public
 * Sorts colors according to the specified `factor`. The supported options are:
 *
 * * `'contrast'` - Sorts colors according to their contrast value as defined by WCAG. The contrast is tested `against` a comparison color  which can be specified in the `options` object.
 * * `'lightness'` - Sorts colors according to their lightness.
 * * `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
 * * `'distance'` - Sorts colors according to their distance. The distance factor is determined by the colorspace used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the collection.
 * * `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 *
 * @param {Factor} factor The factor to use for sorting the colors.
 * @param {Order} [order='asc'] The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`).
 * @param options
 
 
 * @example
 *import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortBy('distance','desc',{ against:'yellow'})(sample)
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
function sortBy(
  factor,
  order,
  options = {
    /**
     * @type {ColorToken}  The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor.
     */
    against: '#fff',
    /**
     * @type {HueColorSpaces} The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.
     */
    colorspace: 'lch'
  }
) {
  var { against, colorspace } = options,
    cb;
  switch (factor) {
    case 'chroma':
      cb = sortedColl('chroma', getChannel(mcchn(colorspace)), order);
      break;
    case 'hue':
      cb = sortedColl('hue', getChannel(`${colorspace}.h`), order);
      break;
    case 'luminance':
      cb = sortedColl('luminance', getLuminance, order);
      break;
    case 'distance':
      var cb1 = (a) => (c) => {
        return differenceHyab()(a, c);
      };

      cb = sortedColl('distance', cb1(against), order);
      break;
    case 'contrast':
      let cb2 = (a) => (c) => wcagContrast(c, a);
      cb = sortedColl('contrast', cb2(against), order);
      break;
    case 'lightness':
      cb = sortedColl('lightness', getChannel(mlchn(colorspace)), order);
      break;
  }

  /**
   * @param {Collection} collection The `collection` of colors to sort.
   * @returns {Collection} The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays. 

   */
  return (collection) => {
    return cb(collection);
  };
}

export default sortBy;

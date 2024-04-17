/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').HueColorSpaces} HueColorSpaces
 * @typedef {import('../types/types.js').Factor} Factor
 * @typedef {import('../types/types.js').Order} Order
 */

/**
 * @license
 * filterBy.js - Utility for filtering collections of colors.
Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { differenceHyab } from 'culori/fn';

import {
  mcchn,
  mlchn,
  filteredColl,
  getLuminance,
  getContrast,
  getChannel,
  color2hex
} from './index.js';
import ranges from './maps/ranges.js';

function baseFilterBy(factor, cb, start, end) {
  return (collection) => filteredColl(factor, cb)(collection, start, end);
}

/**
 * Filters a collection of colors using the specified `factor` as the criteria. The supported options are:
 * * `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * * `'lightness'` - Returns colors in the specified lightness range.
 * * `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 
 * * `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
 * * `luminance` - Returns colors in the specified luminance range.
 * * `'hue'` - Returns colors in the specified hue ranges between 0 to 360.
 * 
 * 
 * For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range. 
 * This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. 
 * But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 * 
 * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
 *
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * 
 * 
 * @param {Factor} factor The factor to use as a filtering criteria.
 * @param {number|string}  start The minimum end of the `factor` range.
 * @param {number|string} end The maximum end of the `factor` range. 
 * @returns Array of filtered colors.
 *
 * @example
 * 
 * import { filterBy } from 'huetiful-js'

let sample = [
  '#00ffdc',
  '#00ff78',
  '#00c000',
  '#007e00',
  '#164100',
  '#ffff00',
  '#310000',
  '#3e0000',
  '#4e0000',
  '#600000',
  '#720000',
]

console.log(filterBy('contrast','>=3')(sample,{ against:'green' }))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
 */
function filterBy(
  factor,
  start,
  end,
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
      end = !end ? ranges[colorspace][mcchn(colorspace).split('.')[1]][1] : end;

      cb = baseFilterBy(
        factor,
        getChannel(mcchn(colorspace)),

        // @ts-ignore
        start,
        end
      );

      break;
    case 'contrast':
      let cb2 = (against) => (color) => getContrast(color, against);

      cb = baseFilterBy(
        'contrast',
        cb2(against),
        // @ts-ignore
        start,
        end
      );
      break;
    case 'distance':
      let cb1 = (against) => (color) => differenceHyab()(against, color);

      cb = baseFilterBy(
        'distance',
        cb1(color2hex(against)),

        // @ts-ignore
        start,
        end
      );
      break;
    case 'hue':
      cb = baseFilterBy(
        factor,
        getChannel(`${colorspace}.h`),
        // @ts-ignore
        start,
        end
      );
      break;
    case 'lightness':
      end = !end ? ranges[colorspace][mcchn(colorspace).split('.')[1]][1] : end;
      cb = baseFilterBy(
        factor,
        getChannel(mlchn(colorspace)),
        // @ts-ignore
        start,
        end
      );
      break;
    case 'luminance':
      cb = baseFilterBy(
        factor,
        getLuminance,
        // @ts-ignore
        start,
        end
      );
      break;
    default:
      break;
  }

  /**
   * @param {Collection}  collection The collection of colors to filter.
   * @param options
   * @returns {Collection}  A collection of the filtered colors.
   */
  return (collection) => {
    return cb(collection);
  };
}

export default filterBy;

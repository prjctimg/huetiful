/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').HueColorSpaces} HueColorSpaces
 * @typedef {import('../types/types.js').FactObject} FactObject

 */

/**
 * @license
 * filterBy.js - Utilities for filtering collections of colors.
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
import { color2hex } from './converters.js';
import { getLuminance, getContrast, getChannel } from './utils.js';
import { mcchn, mlchn, filteredColl, norm, reOp, reNum } from './helpers.js';
import modeRanges from './color-maps/samples/modeRanges.js';

function baseFilterBy(
  factor,
  cb,
  collection,
  start = 0,
  end = 1,
  colorspace = 'lch'
) {
  const normFacts = {
    saturation: mcchn,
    lightness: mlchn
  };

  colorspace = colorspace.toLowerCase();

  var [sym1, startVal, endVal, sym2] = [
    reOp(start),
    reNum(start),
    reNum(end),
    reOp(end)
  ];

  // if (normFacts[factor]) {
  //   startVal = norm(startVal, normFacts[factor](colorspace));
  //   end = norm(endVal, normFacts[factor](colorspace));
  // }

  if (typeof start === 'string' && sym1) {
    // @ts-ignore
    startVal = sym1.concat(startVal.toString());
  }

  if (typeof end === 'string' && sym2) {
    // @ts-ignore
    endVal = sym2.concat(endVal.toString());
  }

  return filteredColl(factor, cb)(collection, startVal, endVal);
}

/**
 *
 * Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 * This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.
   * 
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
   * 
   * @param {number|string}  start The minimum end of the `chroma` range.
   * @param {number|string} end The maximum end of the `chroma` range.
   * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
 * @param {HueColorSpaces} colorspace The color space to fetch the `chroma` value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do.
 * @returns {Collection} Collection of filtered colors.
 * @example
 * import { filterByChroma } from 'huetiful-js'


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
  '#720000'
];

console.log(filterByChroma(sample, 0.1));

// [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]
 */

function filterByChroma(
  collection,
  start = 0.05,
  end = 100,
  colorspace = 'lch'
) {
  const modeChannel = mcchn(colorspace);

  const factor = 'saturation';
  // eslint-disable-next-line no-ternary
  end = !end ? modeRanges[colorspace][modeChannel.split('.')[1]][1] : end;

  return baseFilterBy(
    factor,
    getChannel(modeChannel),
    collection,
    // @ts-ignore
    start,
    end,
    colorspace
  );
}

/**
 *
 *  Returns colors in the specified luminance range.
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`

 * @param {Collection}  collection The collection of colors to filter.
 * @param {number|string}  start The minimum end of the luminance range.
 * @param {number|string} end The maximum end of the luminance range.
 * @returns Array of filtered colors.
 * @example
 *
 * import { filterByLuminance } from 'huetiful-js'
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

filterByLuminance(sample, 0.4, 0.9)

// [ '#00ffdc', '#00ff78' ]
 */

function filterByLuminance(collection, start = 0.05, end = 1) {
  // @ts-ignore
  return baseFilterBy('luminance', getLuminance, collection, start, end);
}

/**
 *
 * Returns colors in the specified lightness range.
 *
 * The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 * This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
  * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
 * @param {Collection}  collection The collection of colors to filter.
 * @param {number|string}  start The minimum end of the lightness range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param {number|string} end The maximum end of the lightness range.
 * @param {HueColorSpaces} colorspace The mode colorspace to retrieve the lightness value from. The default is lch65
 * @returns {Collection} Collection of filtered colors.
 * @example
 *
 * import { filterByLightness } from 'huetiful-js'
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

filterByLightness(sample, 20, 80)

// [ '#00c000', '#007e00', '#164100', '#720000' ]
 */

function filterByLightness(collection, start = 0.05, end, colorspace = 'lch') {
  const fct = 'lightness';

  const modeChannel = mcchn(colorspace);

  // eslint-disable-next-line no-ternary
  end = !end ? modeRanges[colorspace][modeChannel.split('.')[1]][1] : end;

  return baseFilterBy(
    fct,
    getChannel(mlchn(colorspace)),
    collection,
    // @ts-ignore
    start,
    end,
    colorspace
  );
}

/**
 *
 * Returns colors in the specified hue ranges between 0 to 360.
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param {Collection} collection The collection of colors to filter.
 * @param {number|string}  start The minimum end of the 'hue' range. 
 * @param {number|string} end The maximum end of the hue range.
 * @returns {Collection}  A collection of the filtered colors.
 * @example
 * let sample = [
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

filterByHue(sample, 20, 80)

// [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
 */

function filterByHue(collection, start = 0, end = 360, colorspace = 'lch') {
  return baseFilterBy(
    'hue',
    getChannel(`${colorspace}.h`),
    collection,
    // @ts-ignore
    start,
    end
  );
}

/**
 *
 * Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param {Collection}  collection The collection of colors to filter.
 * @param {number|string}  start The minimum end of the `distance` range.
 * @param {number|string} end The maximum end of the `distance` range.
 * @returns {Collection} Collection of filtered colors.
 * @example
 * import { filterByDistance } from 'huetiful-js'

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
]

console.log(filterByDistance(sample, "yellow", 0.1))
// [ '#ffff00' ]
 */

function filterByDistance(collection, against, start = 0.05, end = Infinity) {
  const cb = (against) => (color) => differenceHyab()(against, color);

  return baseFilterBy(
    'distance',
    cb(color2hex(against)),
    collection,
    // @ts-ignore
    start,
    end
  );
}

/**
 *
 * Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param {Collection}  collection The collection of colors to filter.
 * @param {number|string}  start The minimum end of the contrast range.
 * @param {number|string} end The maximum end of the contrast range.
 * @returns {Collection} Collection of filtered colors.
 *
 * @example
 *
 * import { filterByContrast } from 'huetiful-js'

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

console.log(filterByContrast(sample, 'green', '>=3'))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
 */

function filterByContrast(
  collection = [],
  against = '#fff',
  start = 1,
  end = 21
) {
  const cb = (against) => (color) => getContrast(color, against);
  // @ts-ignore
  return baseFilterBy('contrast', cb(against), collection, start, end);
}

export {
  filterByContrast,
  filterByDistance,
  filterByLuminance,
  filterByChroma,
  filterByHue,
  filterByLightness,
  baseFilterBy
};

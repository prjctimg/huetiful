/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').HueColorSpaces} HueColorSpaces
 * @typedef {import('../types/types.js').FactObject} FactObject
 
 */

/**
 * @license
 * stats.js - Functions for computing statistical data from collections of colors.
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

/**
 * Returns the largest chroma/saturation difference between the colors in a collection `against` a comparison color.
 * @param {Collection} collection The collection of colors to query.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} colorspace The mode colorspace to retrieve the channel being queried.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The largest chroma/saturation difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 * import { getFarthestChromaFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getFarthestChromaFrom(sample,against,mode))

        // 35


 */

function getFarthestChromaFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'saturation',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}

/**
 * Gets the largest hue angle difference between the colors in a collection `against` a comparison color.
 * @param {Collection} collection The collection of colors to query.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} colorspace The mode colorspace to retrieve the channel being queried.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The largest hue angle difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 * import { getFarthestHueFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getFarthestHueFrom(sample,against,mode))

        // 35
 */

function getFarthestHueFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'hue',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}

/**
 * Returns the largest `lightness` difference between the colors in a collection `against` a comparison color.
 * @param {Collection} collection The collection of colors to query.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} colorspace The mode colorspace to retrieve the channel being queried.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The largest `lightness` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 * import { getFarthestLightnessFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getFarthestLightnessFrom(sample,against,mode))

        // 35


 */

function getFarthestLightnessFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'lightness',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}
/**
 * Returns the smallest chroma/saturation difference between the colors in a collection `against` a comparison color.
 * @param {Collection} collection The collection of colors to query.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} colorspace The mode colorspace to retrieve the channel being queried.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The smallest chroma/saturation difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 *
 * import { getNearestChromaFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getNearestChromaFrom(sample,against,mode))

        // 5


 */

function getNearestChromaFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'saturation',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}

/**
 * Returns the smallest hue angle difference between the colors in a collection `against` a comparison color.
 * @param {Collection} collection The collection of colors to query.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} colorspace The mode colorspace to retrieve the channel being queried.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The smallest hue angle difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 * import { getNearestHueFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getNearestHueFrom(sample,against,mode))

        // 5


 */

function getNearestHueFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'hue',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}

/**
 * Returns the smallest `lightness` difference between the colors in a collection `against` a comparison color.
 * @param {Collection} collection The collection of colors to query.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} colorspace The mode colorspace to retrieve the channel being queried.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The smallest` lightness` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 * import { getNearestLightnessFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getNearestLightnessFrom(sample,against,mode))

        // 5

 */

function getNearestLightnessFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'lightness',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}

/**
 * Returns the largest `luminance` difference between the colors in a collection `against` a comparison color.
 * @param {Collection} collection The collection of colors to query.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The largest `lightness` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 * import { getFarthestLuminanceFrom } from 'huetiful-js'
 * var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 10, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = { l: 5, c: 5, h: 5, mode: 'lch' };

console.log(getFarthestLuminanceFrom(sample, against));
// 0.10644205738623673


 */

function getFarthestLuminanceFrom(collection, against, colorObj) {
  var cb = (a) => (b) => Math.abs(getLuminance(a) - getLuminance(b));
  return baseFunc('luminance', collection, cb(against), 'desc', colorObj);
}

/**
 * Returns the smallest `luminance` difference between the colors in a collection `against` a comparison color.
 * @param {Collection} collection The collection of colors to query.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`luminance`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The smallest `luminance` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 * import { getNearestLuminanceFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },

      console.log(getNearestLuminanceFrom(sample, against));

// 0.00831940271523677

 */

function getNearestLuminanceFrom(collection, against, colorObj) {
  var cb = (a) => (b) => Math.abs(getLuminance(a) - getLuminance(b));
  return baseFunc('luminance', collection, cb(against), 'asc', colorObj);
}
/**
 * Returns the average `chroma` from the passed in `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum.
 * @param {Collection} collection The collection of color tokens to query.
 * @param {HueColorSpaces} colorspace The colorspace to fetch the `chroma` channel value from.
 * @returns {number} The average `chroma` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.
 * @example
 *
* import { getMeanChroma } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]

        console.log(getMeanChroma(sample))

        // 30

 */

function getMeanChroma(collection = [], colorspace = 'lch') {
  var cb = getChannel(mcchn(colorspace));
  return averageNumber(values(collection).map(cb));
}

/**
 * Returns the average `lightness` from the passed in `collection` of colors.
 * @param {Collection} collection The collection of color tokens to query.
 * @param {HueColorSpaces} colorspace The colorspace to fetch the `lightness` channel value from.
 * @returns {number} The average `lightness` in the passed in `collection`.
 * @example
 *
 * import { getMeanLightness } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]

        console.log(getMeanLightness(sample))

        // 20
 */

function getMeanLightness(collection = [], colorspace = 'lch') {
  var cb = getChannel(mlchn(colorspace));
  return averageNumber(values(collection).map(cb));
}

/**
 * Returns the average `hue` from the passed in `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum if `excludeGreys` is `true`. This can help make your color scales make more 'visual sense since the `hue` channel depends on the `chroma` channel to look colorful. This will also alter the final average hue angle returned.
 * @param {Collection} collection The collection of color tokens to query.
 * @param {HueColorSpaces} colorspace The colorspace to fetch the `hue` channel value from.
 * @param {boolean} excludeGreys Optional boolean to filter out achromatic colors from the passed in `collection`. Default is `false`.
 * @returns {number} The average `hue` angle in the passed in `collection`.
 * @example
 *
* import { getMeanHue } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 10, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 6, mode: 'lch' }
        ]

        console.log(getMeanHue(sample))

        // 12
 */

function getMeanHue(collection, colorspace = 'lch', excludeGreys = false) {
  var cb = (cb = getChannel(`${colorspace}.h`));
  return averageAngle(values(collection).map(cb));
}

/**
 * Returns the average `distance` from the passed in `collection` of colors using the `differenceHyab` metric. In the future, an option to specify the metric to use when querying the `distance` factor.
 * @param {Collection} collection The collection of color tokens to query.
 * @param {ColorToken} against The color to compare the distance from. Used by the metric function for each color in the `collection`. Default is `black`.
 * @returns {number} The average `distance` in the passed in `collection` .
 * @example
 * import { getMeanDistance } from 'huetiful-js'
 *

var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 30, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = 'blue';

console.log(getMeanDistance(sample, against));


// 142.7183074639663
 */

function getMeanDistance(collection, against = '#fff') {
  var cb = (x) => (y) => differenceHyab()(x, y);
  return averageNumber(values(collection).map(cb(against)));
}

/**
 * Returns the average `contrast` from the passed in `collection` of colors.
 * @param {Collection} collection The collection of color tokens to query.
 * @param {ColorToken} against The color to compare the `contrast` against. Used by the `getContrast` function for each color in the `collection`. Default is `black`
 * @returns {number} The average `distance` in the passed in `collection` .
 * @example
 *
 * import { getMeanContrast } from 'huetiful-js'
 *
 *
var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 30, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = 'blue';

console.log(getMeanContrast(sample, against));

// 1.5960886749927419

 */
function getMeanContrast(collection, against = '#fff') {
  var cb = (x) => (y) => getContrast(x, y);

  return averageNumber(values(collection).map(cb(against)));
}

/**
 * Returns the average relative `luminance` from the passed in `collection` of colors.
 * @param {Collection} collection The collection of color tokens to query.
 * @returns {number} The average relative `luminance` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.
 * @example
 *
 * import { getMeanLuminance } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]

        console.log(getMeanLuminance(sample))

        // 0.05158704622405754
 */

function getMeanLuminance(collection) {
  return averageNumber(values(collection).map(getLuminance));
}

// The baseFunc for getting specifified factor extremums
function baseFunc(fctr, collection, cb, order, colorObj) {
  const result = sortedColl(
    fctr,
    cb,
    order,
    true
  )(collection).filter((el) => el[fctr] !== undefined);

  return (colorObj && result[0]) || result[0][fctr];
}
/**
 * Returns the smallest contrast value from the passed in colors compared against a sample color.
 * @param {Collection} collection The collection of colors to query the color with the smallest contrast value.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The smallest contrast value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getNearestContrast } from 'huetiful-js'
 *
console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
 */

function getNearestContrast(collection, against, colorObj) {
  return baseFunc(
    'contrast',
    collection,
    contrastPredicate(against),
    'asc',
    colorObj
  );
}

/**
 *
 * Returns the largest contrast value from the passed in colors compared against a sample color.
 * @param {Collection} collection The collection of colors to query the color with the largest contrast value.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The largest contrast value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }

 */

function getFarthestContrast(collection, against, colorObj) {
  return baseFunc(
    'contrast',
    collection,
    contrastPredicate(against),
    'desc',
    colorObj
  );
}
/**
 *
 * Returns the smallest `chroma` / `saturation` value from the passed in colors.
 * @param {Collection} collection The collection of colors to query the color with the smallest chroma/saturation value.
 * @param {HueColorSpaces} colorspace The mode `colorspace` to retrieve saturation/chroma values.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The smallest chroma/saturation value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
 */

function getNearestChroma(collection, colorspace, colorObj = false) {
  return baseFunc(
    'saturation',
    collection,
    chromaPredicate(colorspace),
    'asc',
    colorObj
  );
}

/**
 *
 * Gets the largest saturation value from the passed in colors.
 * @param {Collection} collection The collection of colors to query the color with the largest saturation value.
 * @param {HueColorSpaces} colorspace The mode `colorspace` to perform the computation in.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The largest saturation value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
 */

function getFarthestChroma(collection, colorspace, colorObj = false) {
  return baseFunc(
    'saturation',
    collection,
    chromaPredicate(colorspace),
    'desc',
    colorObj
  );
}
/**
 *
 * Gets the smallest lightness value from the passed in colors.
 * @param {Collection} collection The collection of colors to query the color with the smallest lightness value.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @param {HueColorSpaces} colorspace The mode `colorspace` to retrieve the lightness value from.
 * @returns {number|FactObject} The smallest lightness value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, 'lch',true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }

 */

function getNearestLightness(collection = [], colorspace, colorObj = false) {
  const fctr = 'lightness';
  return baseFunc(
    fctr,
    collection,
    lightnessPredicate(colorspace),
    'asc',
    colorObj
  );
}

/**
 *
 *  Gets the largest `lightness` value from the passed in colors.
 * @param {Collection} collection The collection of colors to query the color with the largest `lightness` value.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @param {HueColorSpaces} colorspace The mode `colorspace` to retrieve the `lightness` value from.
 * @returns {number|FactObject} The largest `lightness` value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, 'lch',true))

// { lightness: 80.94668903360088, name: '#f3bac1' }

 */

function getFarthestLightness(collection, colorspace, colorObj = false) {
  const fctr = 'lightness';
  return baseFunc(
    fctr,
    collection,
    lightnessPredicate(colorspace),
    'desc',
    colorObj
  );
}

/**
 *
 * Returns the smallest hue angle from the passed in colors.
 * @param {Collection} collection The collection of colors to query the color with the smallest hue value.
 * @param {HueColorSpaces} colorspace The mode `colorspace` to perform the computation in.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The smallest hue value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
 */

function getNearestHue(collection, colorspace, colorObj = false) {
  return baseFunc('hue', collection, huePredicate(colorspace), 'asc', colorObj);
}
/**
 *
 * Returns the largest hue angle from the passed in colors.
 * @param {Collection} collection The array of colors to query the color with the largest hue value.
 * @param {HueColorSpaces} colorspace The mode `colorspace` to perform the computation in.
 * @param {boolean} colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`.
 * @returns {number|FactObject} The largest hue value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
 */

function getFarthestHue(collection, colorspace, colorObj = false) {
  return baseFunc(
    'hue',
    collection,
    huePredicate(colorspace),
    'desc',
    colorObj
  );
}

export {
  getFarthestChroma,
  getNearestChroma,
  getFarthestContrast,
  getNearestContrast,
  getFarthestHue,
  getNearestHue,
  getFarthestChromaFrom,
  getFarthestHueFrom,
  getFarthestLightnessFrom,
  getNearestChromaFrom,
  getNearestHueFrom,
  getNearestLightnessFrom,
  getFarthestLuminanceFrom,
  getNearestLuminanceFrom,
  getMeanChroma,
  getMeanHue,
  getMeanDistance,
  getMeanContrast,
  getMeanLuminance,
  getMeanLightness,
  getFarthestLightness,
  getNearestLightness
};

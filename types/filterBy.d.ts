/**
 * @license
 * filterBy.js - Utilities for filtering collections of colors.
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import type { ColorToken, HueColorSpaces } from './types';
/**
 *
 * Returns colors in the specified saturation range.
 *
 * @ The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 * This means a value in the range `[0,1]` will return, for example if you pass `startSaturation` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.
 * @param  collection The collection of colors to filter.
 * @param  start The minimum end of the saturation range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param  end The maximum end of the saturation range.
 * @param colorspace The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do.
 * @returns Collection of filtered colors.
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
declare function filterByChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  start?: number | string,
  end?: number | string,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;
/**
 *
 *  Returns colors in the specified luminance range.
 * @param  collection The collection of colors to filter.
 * @param  start The minimum end of the luminance range.Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param  end The maximum end of the luminance range.
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
declare function filterByLuminance(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  start?: number | string,
  end?: number | string
): Array<ColorToken> | Map<any, ColorToken>;
/**
 *
 * Returns colors in the specified lightness range.
 *
 * The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 * This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 * @param  collection The collection of colors to filter.
 * @param  start The minimum end of the lightness range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param  end The maximum end of the lightness range.
 * @param colorspace The mode colorspace to retrieve the lightness value from. The default is lch65
 * @returns Collection of filtered colors.
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
declare function filterByLightness(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  start?: number | string,
  end?: number | string,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;
/**
 *
 * Returns colors in the specified hue ranges between 0 to 360.
 * @param collection The collection of colors to filter.
 * @param  start The minimum end of the hue range. Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param  end The maximum end of the hue range.
 * @returns  Array of the filtered colors.
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
declare function filterByHue(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  start?: number | string,
  end?: number | string,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;
/**
 *
 * Returns colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges. Uses the `differenceHyab` metric for calculating the distances.
 * @param  collection The collection of colors to filter.
 * @param  start The minimum end of the distance range.Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param  end The maximum end of the distance range.
 * @returns Collection of filtered colors.
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
declare function filterByDistance(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  start?: number | string,
  end?: number | string
): Array<ColorToken> | Map<any, ColorToken>;
/**
 *
 * Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * @param  collection The collection of colors to filter.
 * @param  start The minimum end of the contrast range.Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param  end The maximum end of the contrast range.
 * @returns Collection of filtered colors.
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
declare function filterByContrast(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  start?: number | string,
  end?: number | string
): Array<ColorToken> | Map<any, ColorToken>;

export {
  filterByContrast,
  filterByDistance,
  filterByLuminance,
  filterByChroma,
  filterByHue,
  filterByLightness
};

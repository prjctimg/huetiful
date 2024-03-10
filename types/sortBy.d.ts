/**
 * @license
 * sortBy.ts - Utilities for sorting collections of colors.
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import type {
  ColorToken,
  ColorDistanceOptions,
  HueColorSpaces,
  Order
} from './types';
/**
 *
 * Sorts colors according to the intensity of their `chroma` in the specified `colorspace`.
 * @param  collection The `collection` of colors to sort.
 * @param  order The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`)
 * @param colorspace The `mode` colorspace to compute the saturation value in. The default is lch .
 * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays. 
 * @example
 * import { sortByChroma } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];

let sorted = sortByChroma(sample);
console.log(sorted);

// [
  '#310000', '#3e0000',
  '#164100', '#4e0000',
  '#600000', '#720000',
  '#00ffdc', '#007e00',
  '#00ff78', '#00c000',
  '#ffff00'
]

let sortedDescending = sortByChroma(sample,'desc');
console.log(sortedDescending)
// [
  '#ffff00', '#00c000',
  '#00ff78', '#007e00',
  '#00ffdc', '#720000',
  '#600000', '#4e0000',
  '#164100', '#3e0000',
  '#310000'
]

 */
declare function sortByChroma(
  collection: ArrayLike<ColorToken> | Map<any, ColorToken> | object,
  order?: 'asc' | 'desc',
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken> | object;
/**
 *
 *  Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 * @param  collection The `collection` of colors to sort.
 * @param  order The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`)
 * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays. 
 * @example
 * import { sortByLuminance } from "huetiful-js";
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];



let sorted = sortByLuminance(sample)
console.log(sorted)
// [
  '#310000', '#3e0000',
  '#4e0000', '#600000',
  '#720000', '#164100',
  '#007e00', '#00c000',
  '#00ff78', '#00ffdc',
  '#ffff00'
]

let sortedDescending = sortByLuminance(sample, "desc");
console.log(sortedDescending)
// [
  '#ffff00', '#00ffdc',
  '#00ff78', '#00c000',
  '#007e00', '#164100',
  '#720000', '#600000',
  '#4e0000', '#3e0000',
  '#310000'
]

 
 */
declare function sortByLuminance(
  collection: ArrayLike<ColorToken> | Map<any, ColorToken> | object,
  order: 'asc' | 'desc'
): Array<ColorToken> | Map<any, ColorToken> | object;
/**
 *
 *  Sorts colors according to their lightness.
 * @param  collection The `collection` of colors to sort.
 * @param  order The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`)
 * @param colorspace The mode colorspace to use for filtering color lightness. Defaut is lch65
 * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays. 
 * @example
 * import { sortByLightness } from "huetiful-js";

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
]

sortByLightness(sample)

// [
  '#310000', '#3e0000',
  '#4e0000', '#600000',
  '#720000', '#164100',
  '#007e00', '#00c000',
  '#00ff78', '#00ffdc',
  '#ffff00'
]


sortByLightness(sample,'desc')

// [
  '#ffff00', '#00ffdc',
  '#00ff78', '#00c000',
  '#007e00', '#164100',
  '#720000', '#600000',
  '#4e0000', '#3e0000',
  '#310000'
]

 */
declare function sortByLightness(
  collection: ArrayLike<ColorToken> | Map<any, ColorToken> | object,
  order?: 'asc' | 'desc',
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken> | object;
/**
 *
 *  Sorts colors according to their hue angle values. It works with any `colorspace` with a hue channel.
 * @param  collection The `collection` of colors to sort. Achromatic colors are not supported because when displayed on the screen, the colors would be grayscale (so visually, there's no sign of hue). This behaviour is because the `hue` channel is dependant on the `lightness` and `saturation / chroma` channels . For example, a falsy value like `0` or `undefined` turns the color  grayscale whilst lightness at both extremes renders a color totally white (max) or black (min).
 * @param order The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`)
* @param colorspace The mode `colorspace` to compute the color distances in. All colors within the collection will be converted to mode. Note that hue values between modes like `hsl` and `lch` do not align so you may get weird results if you mix colors with different colorspaces.
* @returns  The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays. 
 * @example
 * let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
];


let sorted = sortByHue(sample);
console.log(sorted)
// [
  '#310000', '#3e0000',
  '#4e0000', '#600000',
  '#720000', '#ffff00',
  '#164100', '#00c000',
  '#007e00', '#00ff78',
  '#00ffdc'
]

let sortedDescending = sortByHue(sample,'desc');
console.log(sortedDescending)
// [
  '#00ffdc', '#00ff78',
  '#007e00', '#00c000',
  '#164100', '#ffff00',
  '#720000', '#600000',
  '#4e0000', '#3e0000',
  '#310000'
]

 */
declare function sortByHue(
  collection: ArrayLike<ColorToken> | Map<any, ColorToken> | object,
  order?: 'asc' | 'desc',
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken> | object;
/**
 *
 *  Sorts colors according to their contrast value as defined by WCAG. The contrast is tested `against` a comparison color.
 * @param  collection The `collection` of colors to sort.
 * @param  order The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`)
 * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays. 
 * @example
 *
 * import { sortByContrast } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(sortByContrast(sample, 'yellow'))
// [ 'red', 'green', 'brown', 'purple' ]

console.log(sortByContrast(sample, 'yellow', 'desc'))
// [ 'purple', 'brown', 'green', 'red' ]
 
 */
declare function sortByContrast(
  collection: ArrayLike<ColorToken> | Map<any, ColorToken> | object,
  against: ColorToken,
  order?: 'asc' | 'desc'
): Array<ColorToken> | Map<any, ColorToken> | object;
/**
 *
 *  Sorts colors according to their distance. The distance factor is determined by the colorspace used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the collection.
 * @param  collection The `collection` of colors to sort..
 * @param against The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array.
 * @param  order The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`)
 * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
 * @param colorspace The color space to calculate the distance in . The default is `'lchuv'`
 * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays. 
 * @example
 * import { sortByDistance } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortByDistance(sample, 'yellow', 'asc', {
    mode: 'lch',
  })
)

// [ 'brown', 'red', 'green', 'purple' ]

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortByDistance(sample, 'yellow', 'asc', {
    mode: 'lch',
  })
)

// [ 'green', 'brown', 'red', 'purple' ]
 */
declare function sortByDistance(
  collection: ArrayLike<ColorToken> | Map<any, ColorToken> | object,
  against: ColorToken,
  order?: 'asc' | 'desc',
  options?: ColorDistanceOptions
): Array<ColorToken> | Map<any, ColorToken> | object;
export {
  sortByContrast,
  sortByDistance,
  sortByLightness,
  sortByChroma,
  sortByHue,
  sortByLuminance
};

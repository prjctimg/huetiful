/**
 * @license
 * generators.ts -  Palette utilities for generating color scales for huetiful-js.
 * Contains colors from TailwindCSS released under the MIT permissive licence.
 * Contains parts of chroma.js released under the Apache-2.0 license.
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
  EarthtoneOptions,
  HueColorSpaces,
  HueShiftOptions,
  InterpolatorOptions,
  PairedSchemeOptions,
  UniformColorSpaces
} from './types';
/**
 *
 *  Generates a randomised classic color scheme from a single color.
 * @param  schemeType  Any classic color scheme either `"analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary"`.
* @param color The color to use as a base for the palette.
@param easingFn The easing function to apply to the palette. It's applied on the `hue` channel.
 * @returns A collection of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.
 * @example
 *
 import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */
declare function scheme(
  schemeType: 'analogous' | 'triadic' | 'tetradic' | 'complementary' | string
): (
  color: ColorToken,
  easingFunc?: (t: number) => number
) => ArrayLike<ColorToken>;
/**
 *
 * Takes a collection of colors and finds the nearest matches using the `differenceHyab()` difference metric for a set of predefined palettes. The function does not work on achromatic colors, you may use `isAchromatic` to filter grays from your collection in the mode `colorspace` before passing it to the function.
 * @param colors The collection of colors to create palettes from. Preferably use 6 or more colors for better results.
 * @param schemeType (Optional) The palette type you want to return.
 * @returns An array of colors if the `schemeType` parameter is specified else it returns a `Map` object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
 * @example
 *
 * import { discoverPalettes } from 'huetiful-js'

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
  "#3e0000",
  "#310000",
]

console.log(discoverPalettes(sample, "tetradic"))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
 */
declare function discoverPalettes(
  colors: ArrayLike<ColorToken> | object,
  schemeType?: 'analogous' | 'triadic' | 'tetradic' | 'complementary',
  colorspace?: UniformColorSpaces
): ArrayLike<ColorToken> | object;
/**
 *
 *  Creates a scale of a spline interpolation between an earthtone and a color.
 * @param color The color to interpolate an earth tone with.
  * @param options Optional overrides for customising interpolation and easing functions.
 * @returns Collection of colors resulting from the earthtone interpolation as hex codes.
 * @example
 *
 * import { earthtone } from 'huetiful-js'


console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]

 */
declare function earthtone(
  color: ColorToken,
  colorspace?: HueColorSpaces,
  options?: EarthtoneOptions
): ArrayLike<ColorToken>;
/**
 * Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts down) from a single color. Min and max lightness values determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the scheme of the hueshift. Colors are internally converted to LCH.
 * @param options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 *@returns An array of colors in hexadecimal. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`
 * @example
 * import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
  '#ffffe1', '#ffdca5',
  '#ca9a70', '#935c40',
  '#5c2418', '#3e0000',
  '#310000', '#34000f',
  '#38001e', '#3b002c',
  '#3b0c3a'
]
 */
declare function hueShift(
  color: ColorToken,
  colorspace?: UniformColorSpaces,
  options?: HueShiftOptions
): ArrayLike<ColorToken>;
/**
 *
 *  Returns a spline interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.
 * @param colors The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result.
 * @param colorspace The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.
 * @param kind The type of the spline interpolation method. Default is basis.
 * @param closed Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is `false`
 * @param options Optional channel specific overrides.
 * @returns An array hexadecimal string of the resultant color.
 *
 * @example
 *
 * import { interpolateSpline } from 'huetiful-js';

console.log(interpolateSpline(['pink', 'blue'], 'lch', 8));

// [
  '#ffc0cb', '#ff9ebe',
  '#f97bbb', '#ed57bf',
  '#d830c9', '#b800d9',
  '#8700eb', '#0000ff'
]
 *
 */
declare function interpolateSpline(
  colors: ArrayLike<ColorToken> | object,
  colorspace?: HueColorSpaces,
  iterations?: number,
  kind?: 'natural' | 'monotone' | 'basis',
  closed?: boolean,
  options?: Pick<InterpolatorOptions, 'hueFixup' | 'easingFn' | 'domain'>
): Array<string>;
/**
 * @internal
 */
declare function pltr(
  colors: ArrayLike<ColorToken>,
  colorspace?: HueColorSpaces,
  options?: object
): (
  t: number
) => import('culori/src/common').FindColorByMode<
  | 'lch'
  | 'jch'
  | 'dlch'
  | 'lch65'
  | 'lchuv'
  | 'oklch'
  | 'hsl'
  | 'hsv'
  | 'hsi'
  | 'hwb'
  | 'okhsl'
  | 'okhsv'
  | 'rgb'
  | 'a98'
  | 'cubehelix'
  | 'dlab'
  | 'jab'
  | 'lab'
  | 'lab65'
  | 'lrgb'
  | 'luv'
  | 'oklab'
  | 'p3'
  | 'prophoto'
  | 'rec2020'
  | 'xyz50'
  | 'xyz65'
  | 'yiq'
>;
/**
 * Creates a palette that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.
 * @param color The color to return a paired color scheme from.
 * @param options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns An array containing the paired scheme.
 * @example
 *
 * import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
declare function pairedScheme(
  color: ColorToken,
  options?: PairedSchemeOptions
): ArrayLike<ColorToken> | ColorToken;
/**
 *
 *  Returns a random pastel variant of the passed in color.
 * @param color The color to return a pastel variant of.
 * @returns A random pastel color.
 * @example
 *
 *
import { pastel } from 'huetiful-js'

console.log(pastel("green"))

// #036103ff
 */
declare function pastel(color: ColorToken): ColorToken;
export {
  discoverPalettes,
  hueShift,
  pairedScheme,
  pastel,
  scheme,
  interpolateSpline,
  pltr as interpolator,
  earthtone
};

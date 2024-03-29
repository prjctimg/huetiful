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
import type { ColorToken, HueColorSpaces } from './types';
declare function filterByChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  start?: number | string,
  end?: number | string,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;
declare function filterByLuminance(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  start?: number | string,
  end?: number | string
): Array<ColorToken> | Map<any, ColorToken>;
declare function filterByLightness(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  start?: number | string,
  end?: number | string,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;
declare function filterByHue(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  start?: number | string,
  end?: number | string,
  colorspace?: HueColorSpaces
): Array<ColorToken> | Map<any, ColorToken>;
declare function filterByDistance(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  start?: number | string,
  end?: number | string
): Array<ColorToken> | Map<any, ColorToken>;
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

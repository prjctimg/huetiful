/** 
 * @license
 * filterBy.ts - Utilities for filtering collections of colors.
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { differenceEuclidean } from 'culori/fn';
import { toHex } from './converters';
import { Color, ColorSpaces, Factor, HueColorSpaces } from './types';
import { getLuminance, getContrast, getChannel } from './utils';
import {
  checkArg,
  matchChromaChannel,
  normalize,
  matchLightnessChannel,
  filteredArr
} from './helpers';

function baseFilterBy(factor, cb, colors, start, end) {
  return filteredArr(factor, cb)(colors, start, end);
}

/**
 *  @function
 * @description Returns an array of colors in the specified saturation range. The range is normalised to [0,1].
 * @param  colors The array of colors to filter.
 * @param  startSaturation The minimum end of the saturation range.
 * @param  endSaturation The maximum end of the saturation range.
 * @param colorspace The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do.
 * @returns Array of filtered colors.
 * @example
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

function filterBySaturation(
  colors: Color[],
  startSaturation = 0.05,
  endSaturation = 1,
  colorspace?: HueColorSpaces
): Color[] {
  const modeChannel = matchChromaChannel(colorspace);
  const reDigits = Number(
    /([0-9])/g.exec(startSaturation as unknown as string)['0']
  );
  return baseFilterBy(
    'saturation',
    getChannel(modeChannel),
    colors,
    normalize(reDigits, modeChannel),
    normalize(endSaturation, modeChannel)
  );
}

/**
 *  @function
 * @description Returns an array of colors in the specified luminance range. The range is normalised to [0,1].
 * @param  colors The array of colors to filter.
 * @param  startLuminance The minimum end of the luminance range.
 * @param  endLuminance The maximum end of the luminance range.
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

function filterByLuminance(
  colors: Color[],
  startLuminance = 0.05,
  endLuminance = 1
): Color[] {
  return baseFilterBy(
    'luminance',
    getLuminance,
    colors,
    startLuminance,
    endLuminance
  );
}

/**
 *  @function
 * @description Returns an array of colors in the specified lightness range. The range is between 0 and 100.
 * @param  colors The array of colors to filter.
 * @param  startLightness The minimum end of the lightness range.
 * @param  endLightness The maximum end of the lightness range.
 * @param colorspace The mode colorspace to retrieve the lightness value from. The default is lch65
 * @returns Array of filtered colors.
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

function filterByLightness(
  colors: Color[],
  startLightness = 5,
  endLightness = 100,
  colorspace?: HueColorSpaces
): Color[] {
  return baseFilterBy(
    'lightness',
    getChannel(matchLightnessChannel(colorspace)),
    colors,
    startLightness,
    endLightness
  );
}

//filterByHue takes an array of colors and
/**
 * @function
 * Returns colors in the specified hue ranges between 0 to 360.
 * @param colors The array of colors to filter.
 * @param  startHue The minimum end of the hue range.
 * @param  endHue The maximum end of the hue range.
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

function filterByHue(
  colors: Color[],
  startHue = 0,
  endHue = 360,
  colorspace?: HueColorSpaces
): Color[] {
  return baseFilterBy(
    'hue',
    getChannel(`${colorspace}.h`),
    colors,
    startHue,
    endHue
  );
}

/**
 *  @function
 * Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.
 * @param  colors The array of colors to filter.
 * @param  startDistance The minimum end of the distance range.
 * @param  endDistance The maximum end of the distance range.
 * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
 * @param colorspace The color space to calculate the distance in .
 * @returns Array of filtered colors.
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

function filterByDistance(
  colors: Color[],
  against: Color,
  startDistance = 0.05,
  endDistance?: number,
  colorspace?: ColorSpaces,
  weights?: [number, number, number, number]
): Color[] {
  const cb = (against) => (color) =>
    differenceEuclidean(
      checkArg(colorspace, 'lchuv'),
      checkArg(weights, [1, 1, 1, 0])
    )(against, color);

  return baseFilterBy(
    'distance',
    cb(toHex(against)),
    colors,
    startDistance,
    endDistance
  );
}

/**
 *  @function
 * Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * @param  colors The array of colors to filter.
 * @param  startContrast The minimum end of the contrast range.
 * @param  endContrast The maximum end of the contrast range.
 * @returns Array of filtered colors.
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
  colors: Color[],
  against: Color,
  startContrast = 1,
  endContrast = 21
): Color[] {
  const cb = (against: Color) => (color: Color) => getContrast(color, against);
  return baseFilterBy(
    'contrast',
    cb(against),
    colors,
    startContrast,
    endContrast
  );
}

export {
  filterByContrast,
  filterByDistance,
  filterByLuminance,
  filterBySaturation,
  filterByHue,
  filterByLightness
};

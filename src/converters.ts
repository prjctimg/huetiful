/*
 * @license
 * converters.ts - Converter functions for huetiful-js.
 * Contains parts of chroma.js released under the same license.
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
  useMode,
  modeRgb,
  converter,
  modeDlch,
  modeJch,
  modeLch,
  modeLch65,
  modeLchuv,
  modeOklch,
  formatHex
} from 'culori/fn';
import type {
  ColorTuple,
  Colorspaces,
  ColorToken,
  UniformColorSpaces
} from './types';
import 'culori/all';
import { formatHex8, colorsNamed } from 'culori/fn';
import { getModeChannel } from './helpers';

/**
 * Converter function with mode definitions for uniform color spaces. The function is curried to return a converter in the passed colospace.
 * @param colorspace The mode converter to return.
 * @returns The converter function in the mode colorspace.
 */
function ucsConverter(colorspace: UniformColorSpaces) {
  const ucsDefinitions = {
    jch: modeJch,
    lch: modeLch,
    dlch: modeDlch,
    lchuv: modeLchuv,
    oklch: modeOklch,
    lch65: modeLch65
  };

  return useMode(ucsDefinitions[colorspace.toLowerCase()]);
}
/**
 *
  Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), numbers from 0 to 166,777,215 and arrays in the form of [string,number,number,number,numer?] the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.
 * @param color The color to convert to hexadecimal. Works on color objects and CSS named colors.
 * @returns A hexadecimal representation of the passed in color.
 * @example
 * import { toHex } from "huetiful-js";
 * 
console.log(toHex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(toHex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
 */
function toHex(color: ColorToken): string {
  // the result to return at the end of the function
  var output;
  // if its of type string and not a CSS named color then its probably hex so we don't convert it
  if (typeof color === 'string') {
    // @ts-ignore
    if (!Object.keys(colorsNamed).some((el) => el === color.toLowerCase())) {
      return color;
    }
    return formatHex(color);
  } else if (typeof color === 'boolean') {
    return (color !== true && '#ffffff') || '#000000';
  } else if (typeof color === 'number') {
    output = num2rgb(color, true) as string;
  } else {
    // Get the mode variable
    const mode =
      (typeof color === 'object' &&
        Array.isArray(color) &&
        (color[0] as ColorTuple[0])) ||
      (color['mode'] as Colorspaces);
    const alpha =
      (typeof color === 'object' &&
        Array.isArray(color) &&
        (color[color.length - 1] as ColorTuple[4])) ||
      (color['alpha'] as number);

    var channelKeys = getModeChannel(mode).split('');

    if (mode) {
      // coerce color tuple to object
      if (Array.isArray(color)) {
        var channels = color.slice(1, 4);
        var res = {};
        channelKeys.map((key, idx) => (res[key] = channels[idx]));
        // Assign mode and alpha
        res['mode'] = mode;
        res['alpha'] = alpha;

        // @ts-ignore
        color = res;
      }
      // eslint-disable-next-line no-constant-condition
      if (mode === 'rgb' || 'lrgb') {
        if (
          channelKeys.map((key) => color[key]).some((ch) => Math.abs(ch) > 1)
        ) {
          for (const key in channelKeys) {
            color[key] = color[key] / 255;
          }
          // @ts-ignore
          output = (alpha && formatHex8(color)) || formatHex(color);
        }
      } else if (typeof color === 'object') {
        // @ts-ignore
        output = (alpha && formatHex8(color)) || formatHex(color);
      }
    }
  }

  // eslint-disable-next-line no-constant-condition

  return output;
}

// Ported from chroma-js with slight modifications
/**
 * 
 *  Returns the RGB color equivalent of any number between 0 and 16,777,215.
 * @param num The number to convert to RGB
 * @returns color An RGB color object or hex string.
 * @example
 * 
 * import { num2rgb } from 'huetiful-js'

console.log(num2rgb(900, true))
// #000384
 */

function num2rgb(num: number, hex = false): ColorToken {
  if (typeof num === 'number' && num >= 0 && num <= 0xffffff) {
    const r = num >> 16;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;

    const output = {
      r: r / 255,
      g: g / 255,
      b: b / 255,
      mode: 'lrgb'
    };
    // @ts-ignore
    return (hex && formatHex(output)) || output;
  } else {
    throw Error('unknown num color: ' + num);
  }
}

/**
 * 
 *  Returns the numerical equivalent of a color.
 * @param color The color to convert to its numerical equivalent.
 * @returns value The numerical value of the color from 0 to 16,777,215.
 * @example
 * 
 * import { rgb2num } from 'huetiful-js'

console.log(rgb2num("b2c3f1"))
// 11715569
 */

function rgb2num(color: ColorToken): number {
  // @ts-ignore
  const rgb: ColorToken = useMode(modeRgb)(toHex(color));
  return ((255 * rgb['r']) << 16) + ((255 * rgb['g']) << 8) + 255 * rgb['b'];
}

/* eslint-disable no-ternary */

//ported from chroma-js

/**
 * 
 *  Converts the temperature value (in Kelvins) to an RGB color.
 * @param kelvin The number of Kelvins. From 0 to 30,000 .
 * @param hex Optional boolean parameter to either return an RGB color object or hexadecimal string. Default is true.
 * @returns color The color as a hexadecimal  or RGB color object.
 * @example
 * 
 * import { temp2Color } from 'huetiful-js'

console.log(temp2Color(2542))
// #ffa44a
 */

function temp2Color(kelvin: number, hex = false): ColorToken {
  const { log } = Math;
  const temp = kelvin / 100;

  var r: number, g: number, b: number;
  if (temp < 66) {
    r = 255;
    g =
      temp < 6
        ? 0
        : -155.25485562709179 -
          0.44596950469579133 * (g = temp - 2) +
          104.49216199393888 * log(g);
    b =
      temp < 20
        ? 0
        : -254.76935184120902 +
          0.8274096064007395 * (b = temp - 10) +
          115.67994401066147 * log(b);
  } else {
    r =
      351.97690566805693 +
      0.114206453784165 * (r = temp - 55) -
      40.25366309332127 * log(r);
    g =
      325.4494125711974 +
      0.07943456536662342 * (g = temp - 50) -
      28.0852963507957 * log(g);
    b = 255;
  }
  const result = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    mode: 'rgb'
  };
  return (hex && toHex(result)) || result;
}

/**
 * 
 *  Returns an array of channel values in the mode color space.
 * @param color Any recognizable color token.
 * @param mode The mode color space to return channel values for
 * @returns An array of channel values with the colorspace as first element and the alpha channel if its explicitly defined in the passed in color.
 * @example 
 * 
 * 
let rgbColor = {
  r: 0.4,
  g: 0.3,
  b: 0.7,
  mode: "rgb",
};
console.log(toColorTuple(rgbColor,'rgb'));

// [ 'rgb', 0.4, 0.3, 0.7 ]

 */

function toColorTuple(color: ColorToken, mode: Colorspaces) {
  // @ts-ignore
  const colorObject: ColorToken = converter(mode)(color);

  if (toHex(color)) {
    // @ts-ignore

    const arr: ColorTuple = Object.keys(colorObject)
      .filter((ch) => ch !== 'mode')
      .map((key) => colorObject[key]);
    arr.unshift(mode);
    return arr;
  } else {
    throw Error(
      `${color} is not a valid color token. Try something like 'purple' or ['lch',85,60,143.5]`
    );

    // throw Error(`mode is not a valid color space`)
  }
}

export { num2rgb, rgb2num, temp2Color, toColorTuple, ucsConverter, toHex };

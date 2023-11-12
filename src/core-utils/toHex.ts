// @ts-nocheck

import 'culori/css';
import { formatHex8, formatHex, colorsNamed } from 'culori/fn';
import { num2rgb } from './num2rgb';
import { inRange } from '../fp/number';
import type { Color } from '../paramTypes';

/**
 *@function
 @description Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), numbers from 0 to 166,777,215 and arrays in the form of [string,number,number,number,numer?] the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.
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
const toHex = (color: Color): Color => {
  // the result to return at the end of the function
  let res = {};

  // if its of type string and not a CSS named color then its probably hex so we don't convert it
  if (
    typeof color === 'string' &&
    !Object.keys(colorsNamed).some((el) => el === color)
  ) {
    return color;
  } else {
    if (Array.isArray(color) && inRange(color.length, 4, 5)) {
      // capture the mode and remove it from the array
      const mode: string = color[0];

      // Capture the channel values
      const channels: number[] =
        color.length === 5 ? color.slice(1, color.length - 1) : color.slice(1);
      // The color array's length

      // set mode to a substring which trims the string at an index that is the reslt of length - 3
      const modeChannels = mode.substring(mode.length - 3);
      const getModeChan = (key: number) => modeChannels.charAt(key);
      // the object that will be conditionally mutated depending on the array's length
      // set the res mode property before the mode variable is mutated

      // If our mode is rgb...
      if (mode === 'rgb') {
        // if our rgb values are [0,255] we normalize them to [0,1]
        // for Culori to make sense of the channel values else it defaults o white
        if (channels.some((ch) => Math.abs(ch) > 1)) {
          channels.map((ch, key) => (res[getModeChan(key)] = ch / 255));
        }
        // else just map the values to channels
      } else {
        channels.map((ch, key) => (res[getModeChan(key)] = ch));
      }

      res['mode'] = mode;

      // if channel array has the alpha value
      // we assign it and then remove it from the channel array
      // and then set the arrHasAlpha variable to true

      // store the result as a hex string

      res = formatHex(res);
    }
    // if its a number use num2rgb
    else if (typeof color === 'number') {
      res = num2rgb(color, true);
    } // if its not a string and has a lengh property then its an array...
    else {
      res = (color['alpha'] && formatHex8(color)) || formatHex(color);
    }
    return res;
  }
};

export { toHex };

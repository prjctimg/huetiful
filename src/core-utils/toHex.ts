// @ts-nocheck

import 'culori/css';
import { formatHex8, formatHex } from 'culori/fn';
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
  // if its a plain color object use formatHex
  if (Array.isArray(color) && inRange(color.length, 4, 5)) {
    // capture the mode and channel values seperately
    let mode: string = color[color.length - 1];

    let channels: number[];

    // the object that will be conditionally mutated depending on the array's length
    let res = {};
    if (color.length == 4) {
      // also applies to the 'else' clause
      // set the res mode property before the mode variable is mutated
      res['mode'] = mode;

      // slice the appropiate amount of channels in this case 3
      channels = color.slice(0, 3);

      // set mode to a substring which trims the string at an index that is the reslt of length - 3
      mode = mode.substring(mode.length - 3);

      // for every channel value
      // set the property of the res object to have a key
      // that is the substring at the specified index
      // and its value to be this.val
      channels.map((val, key) => {
        res[mode.charAt(key)] = val;

        if (mode === 'rgb') {
          if (color.length === 5) {
            res['alpha'] = color[color.length - 2];
            channels = color.slice(0, color.length - 2);
          }
          // if our rgb values are [0,255] we normalize them to [0,1]
          // for Culori to make sense of the channel values else it defaults o white
          if (channels.some((ch) => Math.abs(ch) > 1)) {
            return channels.map(
              (ch, key) => (res[mode.charAt(key)] = ch / 255)
            );
          }
        } else {
          return channels.map((ch, key) => (res[mode.charAt(key)] = ch));
        }
      });

      // store the result as a hex string

      res = formatHex(res);
    } else {
      res['mode'] = mode;
      res['alpha'] = color[color.length - 2];
      channels = color.slice(0, 3);
      mode = mode.substring(mode.length - 3).concat('a');
      channels.map((ch, key) => {
        res[mode.charAt(key)] = ch;
      });
      res = formatHex8(res);
    }
    return res;
  }
  // if its a number use num2rgb
  else if (typeof color == 'number') {
    return num2rgb(color, true);
  } // if its not a string and has a lengh property then its an array...
  else if (typeof color == 'object' || typeof color == 'string') {
    return (color['alpha'] && formatHex8(color)) || formatHex(color);
  }
};

export { toHex };

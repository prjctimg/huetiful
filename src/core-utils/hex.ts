// @ts-nocheck
import type { Color } from '../paramTypes';
import { formatHex8, formatHex } from 'culori';
import { num2rgb } from './num2rgb';
import { inRange } from '../fp/number';

/**
 *@function
 @description Converts color objects and CSS named colors to hexadecimal.
 * @param color The color to convert to hexadecimal. Works on color objects and CSS named colors.
 * @returns A hexadecimal representation of the passed in color.
 * @example
 * import { hex } from "huetiful-js";
 * 
console.log(hex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(hex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
 */
const hex = (color: Color): Color => {
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

        // if our rgb values are [0,255] we normalize them to [0,1]
        // for Culori to make sense of the channel values else it defaults o white
        if (mode === 'rgb' || 'rgba') {
          if (channels.some((ch) => !inRange(ch, 0, 1))) {
            res['r'] /= 255;
            res['g'] /= 255;
            res['b'] /= 255;
          }
        }
        return res;
      });
      // store the result as a hex string

      res = formatHex(res);
    } else {
      res['mode'] = mode;
      channels = color.slice(0, 4);
      mode = mode.substring(mode.length - 3).concat('a');
      channels.map((val, key) => (res[mode.charAt(key)] = val));
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

export { hex };

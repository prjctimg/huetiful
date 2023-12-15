import 'culori/css';
import { formatHex8, formatHex, colorsNamed } from 'culori/fn';
import { num2rgb } from './num2rgb';
import { getModeChannel } from '../fp/misc';
import type { Color } from '../types';

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
const toHex = (color: Color): string => {
  // the result to return at the end of the function
  let src = {};

  // if its of type string and not a CSS named color then its probably hex so we don't convert it
  if (
    typeof color === 'string' &&
    !Object.keys(colorsNamed).some((el) => el === color)
  ) {
    return color;
  } else {
    // If our color is an array
    if (Array.isArray(color)) {
      // capture the mode
      const mode: string = color[0];

      // set mode to a substring which trims the string at an index that is the reslt of length - 3
      const modeChannels = mode.substring(mode.length - 3);
      // Gets the channel key from the passed in mode

      // Store the channels excluding alpha
      const channels = (
        src: object,
        colorArr: [string, number, number, number?]
      ) => {
        // Remove the mode element
        colorArr.shift();
        if (colorArr.length === 4) {
          // @ts-ignore
          colorArr = colorArr.slice(0, 3);
        }
        return colorArr;
      };

      /**
       * Returns a color object with normalized RGB values or just maps value to keys and return the resultant object
       * @param src The object to manipulate
       * @param mode The color space.
       * @param colorArr  The array of the color's channel values excluding the alpha/opacity channel
       * @returns A color object
       */
      const channelMapper = (
        src = {},
        mode: string,
        colorArr: [number, number, number]
      ): number[] => {
        src['mode'] = mode;
        // If our mode is rgb...
        if (src['mode'] === 'rgb') {
          // if our rgb values are [0,255] we normalize them to [0,1]
          // for Culori to make sense of the channel values else it defaults o white
          if (colorArr.some((ch) => Math.abs(ch) > 1)) {
            colorArr.map(
              (ch, key) => (src[getModeChannel(mode, key)] = ch / 255)
            );
          }
        } else {
          colorArr.map((ch, key) => (src[getModeChannel(mode, key)] = ch));
        }
        // @ts-ignore
        return src;
      };
      src['alpha'] = color[4] || 1;
      // @ts-ignore
      src = channelMapper(src, modeChannels, channels(src, color));
      // @ts-ignore
      src = (src['alpha'] < 1 && formatHex8(src)) || formatHex(src);
    }
    // if its a number use num2rgb
    else if (typeof color === 'number') {
      src = num2rgb(color, true);
    } else {
      // @ts-ignore
      src = formatHex8(color);
    }
    // @ts-ignore
    return src;
  }
};

export { toHex };

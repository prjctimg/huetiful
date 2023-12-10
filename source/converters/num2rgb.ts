//@ts-nocheck

import 'culori/css';
import type { Color } from '../paramTypes';
import { toHex } from './toHex.ts';
// If the value is a floating point then we treat the decimal value as the opacity of the color.

// If the value passedin is a float then the decimal is treated as opacity
// The outputn is rounded up when you pass in an integer

/**
 * @function
 * @description Returns the RGB color equivalent of any number between 0 and 16,777,215.
 * @param num The number to convert to RGB
 * @returns color An RGB color object or hex string.
 * @example
 * 
 * import { num2rgb } from 'huetiful-js'

console.log(num2rgb(900, true))
// #000384
 */
const num2rgb = (num: number, hex = false): Color => {
  if (typeof num === 'number' && num >= 0 && num <= 0xffffff) {
    const r = num >> 16;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;

    const output = {
      r: r / 255,
      g: g / 255,
      b: b / 255,
      mode: 'rgb'
    };

    if (hex) {
      return toHex(output);
    } else {
      return output;
    }
  } else {
    throw Error('unknown num color: ' + num);
  }
};

export { num2rgb };

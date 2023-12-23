import type { Color } from '../types';
import { toHex } from './toHex.ts';

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



function num2rgb(num: number, hex = false): Color {
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

    return hex && toHex(output) || output;
  } else {
    throw Error('unknown num color: ' + num);
  }
}

export { num2rgb };

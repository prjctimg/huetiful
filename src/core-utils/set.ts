//@ts-nocheck

// ported from chroma-js Color.set

import { converter } from 'culori/fn';
import 'culori/css';
import { toHex } from './hex.ts';
import { expressionParser } from '../fp/string.ts';
import type { Color } from '../paramTypes.ts';
/**
 * @function
 *@description Sets the value for the specified channel in a color.
 * @param  color Any recognizable color token.
 * @param  mc The mode and channel to work with. For example 'rgb.b'.
 * @param  value The value to set on the queried channel. Also supports expressions as strings e.g set('lch.c)("#fc23a1","*0.5")
 * @returns color The mutated color.
 * 
 * @example
 * 
 * import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
 */

const setChannel =
  (mc: string) =>
  (color: Color, value: number | string): Color => {
    const [mode, channel] = mc.split('.');
    const src: Color = converter(mode)(toHex(color));

    if (channel) {
      if (typeof value === 'number') {
        src[channel] = value;
      } else if (typeof value === 'string') {
        expressionParser(src, channel, value);
      } else {
        throw new Error(`unsupported value for setChannel`);
      }

      return src;
    } else {
      throw new Error(`unknown channel ${channel} in mode ${mode}`);
    }
  };

export { setChannel };

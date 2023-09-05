//@ts-nocheck

// ported from chroma-js Color.set

import { slice, isString, isNumber, toNumber, split } from "lodash-es";
import { converter } from "culori";
import type { Color } from "../paramTypes.ts";
import { expressionParser } from "./helpers.ts";
/**
 * @function
 *@description Sets the value for the specified channel in a color.
 * @param  color Any recognizable color token.
 * @param  mc The mode and channel to work with. For example 'rgb.b'.
 * @param  value The value to set on the queried channel. Also supports expressions as strings e.g set('lch.c)("#fc23a1","*0.5")
 * @returns color The mutated color.
 */

const setChannel =
  (mc: string) =>
  (color: Color, value: number | string): Color => {
    const [mode, channel] = split(mc, ".");
    const src: Color = converter(mode)(color);

    if (channel) {
      if (isNumber(value)) {
        src[channel] = value;
      } else if (isString(value)) {
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

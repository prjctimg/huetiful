//@ts-nocheck
import { easingSmootherstep, modeLab, useMode } from 'culori/fn';
import { toHex } from './hex.ts';
import { expressionParser } from '../fp/string.ts';
import { isInt } from '../fp/number.ts';
import type { Color } from '../paramTypes.ts';
// ported froma chroma-js brighten

/**
 * @function
 * @description Darkens the color by reducing the lightness channel. .
 * @param   color The color to darken.
 * @param value The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @returns color The darkened color.
 * @example
 * 
 * 

 */
const darken = (color: Color, value: number | string): Color => {
  const Kn = 18;
  const channel = 'l';
  const lab = useMode(modeLab);
  const src = lab(toHex(color));

  if (typeof value === 'number') {
    src['l'] -= Kn * (value * easingSmootherstep(value / 100));
  } else if (typeof value === 'string') {
    expressionParser(src, channel, value || 1);
  }

  return formatHex(src);
};

/**
 *
 * @param color The color to brighten.
 * @param value The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns
 */
const brighten = (color: Color, value: number | string): Color => {
  const { abs } = Math;
  let result: Color;
  if (typeof value == 'number') {
    result = darken(color, -value);
  } else if (typeof value == 'string') {
    let amt: number;

    if (isInt(value)) {
      amt = parseInt(value.slice(1));
    } else {
      amt = parseFloat(value.slice(1));
    }
    amt = abs(amt);
    result = darken(color, -amt);
  }
  return result;
};

export { brighten, darken };

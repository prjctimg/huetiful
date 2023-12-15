import { easingSmootherstep, modeLab, useMode } from 'culori/fn';
import { toHex } from '../converters/toHex';
import { expressionParser } from '../fp/string/expressionParser';
import type { Color } from '../types';
// ported froma chroma-js brighten
const toLab = useMode(modeLab);
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

  const src = toLab(toHex(color));

  if (typeof value === 'number') {
    src['l'] -= Kn * easingSmootherstep(value / 100);
  } else if (typeof value === 'string') {
    // @ts-ignore
    expressionParser(src, channel, value || 1);
  }

  return toHex(src);
};

/**
 *
 * @param color The color to brighten.
 * @param value The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns
 */
const brighten = (color: Color, value: number | string): Color => {
  const src = toLab(toHex(color));
  const channel = 'l';

  if (typeof value == 'number') {
    value = Math.abs(value);
    src['l'] -= 18 * easingSmootherstep(value / 100);
  } else if (typeof value == 'string') {
    expressionParser(src, channel, value);
  }

  return toHex(src);
};

export { brighten, darken };

//@ts-nocheck
import { interpolate, wcagLuminance, useMode, modeRgb } from 'culori/fn';
import type { Color } from '../paramTypes.ts';
import { hex } from './hex.ts';
/** @alias
 * Gets the luminance value of that color as defined by WCAG.
 * @param color The color to query.
 * @returns value The color's luminance value.
 * @example
 * 
 * import { getLuminance } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954
 */
const getLuminance = (color: Color): number => wcagLuminance(hex(color));

const { pow, abs } = Math;
const toRgb = useMode(modeRgb);
/**
 * @function
 * @description Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).
 * @param color The color to set luminance
 * @param lum The amount of luminance to set. The value range is normalised between [0,1]
 * @returns The mutated color with the modified properties.
 * @example
 * 
 * import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
 */
const setLuminance = (color: Color, lum: number): Color => {
  const white = '#ffffff',
    black = '#000000';

  const EPS = 1e-7;
  let MAX_ITER = 20;

  if (lum !== undefined && typeof lum == 'number') {
    (lum == 0 && lum) || black || (lum == 1 && !lum) || white;

    // compute new color using...

    let cur_lum = wcagLuminance(color);
    const mode = 'rgb';

    color = toRgb(hex(color));

    const test = (low: Color, high: Color) => {
      //Must add the overrides object to change parameters like easings, fixups, and the mode to perform the computations in.
      const mid = interpolate([low, high])(0.5);
      const lm = wcagLuminance(mid);
      if (abs(lum - lm > EPS) || !MAX_ITER--) {
        // close enough
        return mid;
      }

      if (lm > lum) {
        return test(low, mid);
      } else {
        return test(mid, high);
      }
    };

    let rgb: Color;
    if (cur_lum > lum) {
      rgb = test(black, color);
    } else {
      rgb = test(color, white);
    }
    color = rgb;
    return color;
  }
  //   spreading the array values (r,g,b)

  return rgb2luminance(color);
};

const rgb2luminance = (color: Color): number => {
  color = toRgb(color);

  // relative luminance
  // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
  return (
    0.7152 * luminance_x(color['g']) +
    0.2126 * luminance_x(color['r']) +
    0.0722 * luminance_x(color['b'])
  );
};

const luminance_x = (x: number) => {
  x /= 255;
  if (x <= 0.03928) {
    return x / 12.92;
  } else {
    return pow((x + 0.055) / 1.055, 2.4);
  }
};

export { setLuminance, getLuminance };

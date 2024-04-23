/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef {import('../types/types.js').SchemeType} SchemeType
 */

import { easingSmoothstep, samples } from 'culori/fn';
import { adjustHue, rand, or, keys } from './fp/index.js';
import { token } from './token.js';

/**
 *@public
 *  Generates a randomised classic color scheme from a single color.
 * @param {SchemeType|string}  kind  Any classic color scheme either .
  * @returns {Collection} A collection of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */
function scheme(kind = 'analogous') {
  /**
   * @param {string}  color The color to use as a base for the palette.
   * @param {(t:number)=>number} [easingFn=undefined] The easing function to apply to the palette. It's applied on the `hue` channel.
 
   */
  // @ts-ignore
  return (color = 'cyan', easingFn) => {
    kind = kind.toLowerCase();

    const f = (iterations, distance, color) =>
      samples(iterations).map((val) =>
        adjustHue(
          (color['h'] + distance) * (val * or(easingFn, easingSmoothstep)(val))
        )
      );

    // @ts-ignore
    color = token('object', { targetMode: 'jch' })(color);
    const u = 0.05,
      v = 0.495,
      w = 0.5,
      x = 0.995;
    const y = {
      analogous: f(3, 12, color),
      triadic: f(3, 120, color),
      tetradic: f(4, 90, color),
      complementary: f(2, 180, color)
    };
    // For each step return a  random value between lowMin && lowMax multipied by highMin && highMax and 0.9 of the step
    for (const s of keys(y)) {
      y[s].map((d) => rand(d * v, d * u) + rand(d * x, d * w) / 2);
    }
    // The map for steps to obtain the targeted palettes
    const o = y[kind].map((d) => ({
      l: color['l'],
      c: color['c'],
      h: d * or(easingFn, easingSmoothstep)(1 / y[kind].length),
      mode: 'jch'
    }));

    return o;
  };
}

export { scheme };

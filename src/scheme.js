/**
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection

 * @typedef {import('./types.js').SchemeOptions} SchemeOptions
 */

import { easingSmoothstep, samples } from 'culori/fn';
import {
  adjustHue,
  rand,
  or,
  keys,
  entries,
  isArray,
  values,
  mlchn,
  gmchn,
  mcchn
} from './fp/index.js';
import { token } from './token.js';

/**
 * Generates a randomised classic color scheme from the passed in color.
 * 
 * The classic palette types are:
 * 
 * * `triadic` - Picks 3 colors 120 degrees apart.
 * * `tetradic` - Picks 4 colors 90 degrees apart.
 * * `complimentary` - Picks 2 colors 180 degrees apart.
 * * `monochromatic` - Picks `num` amount of colors from the same hue family   .
 * * `analogous` - Picks 3 colors 12 degrees apart.
 * 
 * The `kind` parameter can either be a string or an array:
 * 
 * * If it is an array, each element should be a `kind` of palette. 
 * It will return a color map with the array elements as keys.
 * Duplicate values are simply ignored.
 * * If it is a string it will return an array of colors of the specified `kind` of palette.
 * * If it is falsy it will return a color map of all palettes.
 * 
 * Note that the `num` parameter works on the `monochromatic` palette type only.
 * @param baseColor The color to create the palette(s) from.
 * @param {SchemeOptions} options Optional overrides.
 * @returns {Collection}
 * @example
 *
 import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */
function scheme(baseColor = 'cyan', options) {
  let { colorspace, kind, easingFn } = options || {};
  // @ts-ignore
  kind = or(kind, 'analagous').toLowerCase();

  const f = (h, l, m) =>
    samples(h).map((d) =>
      adjustHue((m['h'] + l) * (d * or(easingFn, easingSmoothstep)(d)))
    );

  baseColor = token(baseColor, { targetMode: colorspace, kind: 'object' });
  let y = {
    analogous: f(3, 12, baseColor),
    triadic: f(3, 120, baseColor),
    tetradic: f(4, 90, baseColor),
    complimentary: f(2, 180, baseColor)
  };
  // extremums lowMin,lowMax, highMin, highMax respectively
  const [u, v, w, x, l] = [0.05, 0.495, 0.5, 0.995, y[kind].length];
  // For each step return a  random value between lowMin && lowMax multipied by highMin && highMax and 0.9 of the step
  for (const [m, n] of entries(y)) {
    y[m] = n.map((d) => rand(d * v, d * u) + rand(d * x, d * w) / 2);
  }
  // The map for steps to obtain the targeted palettes

  const [m, n] = [mlchn(colorspace), mcchn(colorspace)];

  if (isArray(kind)) {
    var e = {};
    for (const r of values(kind)) {
      e[r] = y[kind].map((d) => ({
        [m]: baseColor[m],
        [n]: baseColor[n],
        h: baseColor['h'] + d * or(easingFn, easingSmoothstep)(1 / l),
        mode: colorspace
      }));
    }
    return e;
  } else {
    return y[kind].map((d) => ({
      [m]: baseColor[m],
      [n]: baseColor[n],
      h: baseColor['h'] + d * or(easingFn, easingSmoothstep)(1 / l),
      mode: colorspace
    }));
  }
}

export { scheme };

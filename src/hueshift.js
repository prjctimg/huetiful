/**
 * @typedef {import('../types/types.js').HueShiftOptions} HueShiftOptions
 * @typedef {import('../types/types.js').ColorToken} ColorToken
 */

import { easingSmoothstep } from 'culori/fn';
// @ts-ignore
import { adjustHue, or, mcchn, mlchn, gmchn, lt, gt, gte } from './fp/index.js';
import { token } from './token.js';
import ranges from './maps/ranges.js';

/**
 * Creates a palette of hue shifted colors from the passed in color.
 * 
 * Hue shifting means that:
 * 
 * * As a color becomes lighter, its hue shifts up (increases).
 * * As a color becomes darker its hue shifts down (decreases).
 * 
 * The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extreme respectively.
 * 
 *  The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or `(num * 2) + 1`.
 * 
 * @param color The color to use as the base of the palette.
 * @param {HueShiftOptions} options The optional overrides object.
 *@returns {Array<string>}
 * @example
 * import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
  '#ffffe1', '#ffdca5',
  '#ca9a70', '#935c40',
  '#5c2418', '#3e0000',
  '#310000', '#34000f',
  '#38001e', '#3b002c',
  '#3b0c3a'
]
 */
function hueshift(
  color,
  options = {
    colorspace: 'jch'
  }
) {
  var { colorspace } = options || {};
  const f = (n) => (a0, b0) => (a1, b1) =>
    ((n - a0) / (b0 - a0)) * (b1 - a1) + a1;

  // @ts-ignore
  color = token('object', { targetMode: colorspace.toLowerCase() })(color);

  // @ts-ignore
  let { num, hueStep, minLightness, maxLightness, easingFn } = options;
  const [l, c, [u, v]] = [
    gmchn(mlchn(colorspace), 0),
    gmchn(mcchn(colorspace), 1),
    ranges['jch']['j']
  ];

  // Pass default values in case the options object is overridden
  easingFn = or(easingFn, easingSmoothstep);
  num = or(num, 6) + 1;
  hueStep = or(hueStep, 5);

  // if value is beyond max normalize all the values ensuring that the end is higher than start
  // and that if minval was less than max range we will get that channel's ewquivalent value on the [0,100] scale.
  minLightness =
    typeof minLightness === 'number' &&
    gte(minLightness, 0) &&
    lt(minLightness, maxLightness)
      ? minLightness
      : v * 0.1 + u;
  maxLightness =
    typeof maxLightness === 'number' && lt(maxLightness, v) ? maxLightness : v;
  // Pass in default values if any of the opts is undefined
  const z = [color];
  // Maximum number of iterations possible.
  //Each iteration add a darker shade to the start of the array and a lighter tint to the end.
  // @ts-ignore
  for (let i = 1; i < num; i++) {
    //adjustHue checks hue values are clamped.
    // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].
    const [y, x] = [
      {
        [l]: f(i)(0.1, num)(color[l], minLightness),
        [c]: color[c],
        // @ts-ignore
        h: adjustHue(color['h'] - hueStep * (i * easingFn(i))),
        mode: colorspace
      },
      {
        [l]: f(i)(u, v)(u, 100),
        [c]: color[c],
        // @ts-ignore
        h: adjustHue(color['h'] + hueStep * (i * easingFn(i))),
        mode: colorspace
      }
    ];
    z.push(x);
    z.unshift(y);
  }
  // @ts-ignore
  return Array.from(new Set(z)).map(token('hex'));
}

export { hueshift };

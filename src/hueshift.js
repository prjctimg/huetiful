/**
 * @typedef {import('../types/types.js').HueShiftOptions} HueShiftOptions
 * @typedef {import('../types/types.js').ColorToken} ColorToken
 */

import { easingSmoothstep } from 'culori/fn';
import { adjustHue, or, mcchn, mlchn, gmchn, lt, gt, gte } from './fp';
import { token } from './token.js';
import ranges from './maps/ranges';

/**
 * Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts down) from a single color. Min and max lightness values determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the scheme of the hueshift. Colors are internally converted to LCH.
 * @param {HueShiftOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 *@returns A collection of the hueshifted colors. The length of the resultant array is the number of `iterations` multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the `ColorToken` type of the passed in color.
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
export function hueshift(
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

  let { iterations, hueStep, minLightness, maxLightness, easingFunc } = options;
  const [l, c, [u, v]] = [
    gmchn(mlchn(colorspace), 0),
    gmchn(mcchn(colorspace), 1),
    ranges['jch']['j']
  ];

  // Pass default values in case the options object is overridden
  easingFunc = or(easingFunc, easingSmoothstep);
  iterations = or(iterations, 6) + 1;
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
  for (let i = 1; i < iterations; i++) {
    //adjustHue checks hue values are clamped.
    // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].
    const [y, x] = [
      {
        [l]: f(i)(0.1, iterations)(color[l], minLightness),
        [c]: color[c],
        h: adjustHue(color['h'] - hueStep * (i * easingFunc(i))),
        mode: colorspace
      },
      {
        [l]: f(i)(u, v)(u, 100),
        [c]: color[c],
        h: adjustHue(color['h'] + hueStep * (i * easingFunc(i))),
        mode: colorspace
      }
    ];
    z.push(x);
    z.unshift(y);
  }
  return Array.from(new Set(z)).map(token('hex'));
}

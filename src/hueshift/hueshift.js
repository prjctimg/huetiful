/**
 * @typedef {import('../types.js').HueshiftOptions} HueShiftOptions
 * @typedef {import('../types.js').Collection} ColorToken
 */

import { easingSmoothstep, formatHex8 } from 'culori/fn';
// @ts-ignore
import { adjustHue, or, lt, lte } from '../fp/index.js';
import { token } from '../core/token.js';

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
 * @param baseColor The color to use as the base of the palette.
 * @param {HueShiftOptions} options The optional overrides object.
 
 * @example
 * import { hueshift } from "huetiful-js";

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
function hueshift(baseColor, options) {
	// @ts-ignore
	let { num, hueStep, minLightness, maxLightness, easingFn } = options || {};

	baseColor = or(baseColor, 'cyan');

	easingFn = or(easingFn, easingSmoothstep);
	num = or(num, 6) + 1;
	hueStep = or(hueStep, 5);

	baseColor = token(baseColor, {
		kind: 'obj',
		targetMode: 'lch'
	});

	var z = [baseColor];

	// // if value is beyond max normalize all the values ensuring that the end is higher than start
	// // and that if minval was less than max range we will get that channel's equivalent value on the [0,100] scale.
	maxLightness = lte(maxLightness, 95) ? maxLightness : 90;
	minLightness = lt(minLightness, maxLightness) ? minLightness : 10;

	/**
	 * @internal
	 * Normalizes any value in the range [0,1] to the ranges supported by the colorspace
	 
	 */
	function f(i, e1, e2) {
		return Math.abs(
			((i - 0) / (e1 - 0)) * (e2 - baseColor['l']) + baseColor['l']
		);
	}

	// Maximum number of iterations possible.
	//Each iteration add a darker shade to the start of the array and a lighter tint to the end.
	// @ts-ignore
	for (let i = 1, j = i / num; i < num; i++) {
		// 	//adjustHue checks hue values are clamped.
		// 	// Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].

		const [y, x] = [
			{
				l: f(i, num, minLightness),
				c: baseColor['c'],
				// @ts-ignore
				h: adjustHue(baseColor['h'] - hueStep * easingFn(j)),
				mode: 'lch'
			},
			{
				l: f(i, num, maxLightness),
				c: baseColor['c'],
				// @ts-ignore
				h: adjustHue(baseColor['h'] + hueStep),
				mode: 'lch'
			}
		];

		z.push(x);
		z.unshift(y);
	}
	//@ts-ignore
	return Array.from(new Set(z)).map(formatHex8);
}

export { hueshift };

// @ts-nocheck
/**
 * @typedef { import('./types.js').Collection} ColorToken
 */

import { and, gte, or } from './fp/index.js';
import { token } from './token.js';

/**
 * Checks if a color token is achromatic (without hue or simply grayscale).
 * 
 * A color token is considered achromatic or gray if:
 * 
 * * It has a falsy chroma/saturation channel when its channel values are computed in a hue based colorspace because the hue channel depends on the chroma channel for the final color to be non-gray (or colorful).
 * * It has a falsy hue channel (usually happens if you use a custom interpolation method other than interpolatorLinear and one of the hue channels in the interpolation has a falsy channel) which makes the hue `NaN`.
 * 
 * @param {ColorToken} color The color token to test if it is achromatic or not.
 * @returns {boolean}
 * @example
 import { achromatic } from "huetiful-js";

 achromatic('pink')
// false

let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];

console.log(sample.map(achromatic));

// [false, false, false,false]

achromatic('gray')
// Returns true

* We can expand this example by interpolating between black and white and then getting some samples to iterate through.
* @example

import { interpolator } from "huetiful-js"

// we create an interpolation using black and white with 12 samples
let grays = interpolator(["black", "white"],{ num:12 });

console.log(grays.map(achromatic));

//
 [false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]

 */
function achromatic(color) {
	color = token(color, { kind: 'obj', targetMode: 'lch' });

	// If a color has no lightness then it has no hue so its technically not achromatic since white and black are not grayscale
	var f = (x) => typeof x === 'undefined' || x === 0 || x === NaN;

	return or(
		and(
			and(
				or(f(color['l']), gte(color['l'], 100)),
				or(!f(color['c'], f(color['c'])))
			),
			false
		),
		or(and(f(color['c']), true), false)
	);
}

export { achromatic };

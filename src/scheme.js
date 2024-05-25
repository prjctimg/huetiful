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
	entries,
	isArray,
	values,
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
 * @param {ColorToken} baseColor The color to create the palette(s) from.
 * @param {SchemeOptions} options Optional overrides.
 * @returns {Collection}
 * @example
 *
 import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */
// @ts-ignore
function scheme(baseColor = 'cyan', options) {
	let { colorspace, kind, easingFn } = options || {};
	// @ts-ignore
	kind = kind?.toLowerCase();
	colorspace = or(colorspace, 'lch');
	// @ts-ignore
	baseColor = token(baseColor, { targetMode: colorspace, kind: 'obj' });
	const f = (h, l) =>
		samples(h).map((d) =>
			adjustHue((baseColor['h'] + l) * (d * or(easingFn, easingSmoothstep)(d)))
		);

	let y = {
		analogous: f(3, 12),
		triadic: f(3, 120),
		tetradic: f(4, 90),
		complimentary: f(2, 180)
	};
	// extremums lowMin,lowMax, highMin, highMax and  respectively
	const [r, s, t, u] = [0.05, 0.495, 0.5, 0.995];
	// For each step return a  random value between lowMin && lowMax multipied by highMin && highMax and 0.9 of the step
	for (const [m, n] of entries(y)) {
		for (const [i, h] of entries(n)) {
			y[m][i] = rand(h * s, h * r) + rand(h * u, h * t) / 2;
		}
	}
	// The map for steps to obtain the targeted palettes

	var [[l, c], e] = [['l', 'c'].map((a) => mcchn(a, colorspace, false)), {}];

	var z = (x = 0) => ({
		[l]: baseColor[l],
		[c]: baseColor[c],
		h: adjustHue(baseColor['h'] + x),
		mode: colorspace
	});
	if (isArray(kind)) {
		for (const k of values(kind)) {
			for (const [v, u] of entries(y[k])) {
				e[k][v] = z(u);
			}
		}
	} else if (kind) {
		for (const u of values(y[kind])) {
			e = z(u);
		}
	} else {
		for (const [j, k] of entries(y)) {
			for (const [v, u] of entries(k)) {
				e[j][v] = z(u);
			}
		}
	}
	// @ts-ignore
	return e;
}

export { scheme };

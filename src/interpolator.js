/**
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection
 * @typedef {import('./types.js').InterpolatorOptions} InterpolatorOptions
 
*/

import {
	samples,
	interpolate,
	interpolatorSplineBasis,
	interpolatorSplineBasisClosed,
	interpolatorSplineMonotone,
	interpolatorSplineMonotoneClosed,
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed,
	fixupHueShorter,
	fixupHueLonger
} from 'culori/fn';
import { or, mcchn, pltrconfg, gt, gte, values, and } from './fp/index.js';
import { token } from './token.js';

/**
 * Interpolates the passed in colors and returns a color scale that is evenly split into `num` amount of samples. 
 * 
 * The interpolation behaviour can be overidden allowing us to get slightly different effects from the same `baseColors`.
 * 
 * The behaviour of the interpolation can be customized by:
 * 
 * * Changing the `kind` of interpolation
 * 
 * 	* natural
 * 	* basis
 * 	* monotone
 * * Changing the easing function (`easingFn`)
 *  
 *   * 
 * 
 * Some things to keep in mind when creating color scales using this function:
 * 
 * * To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object. 
 * * If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
 * * If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.
 *  
 * @param {Collection} baseColors The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray.
 * @param {InterpolatorOptions} options Optional overrides.
 * @returns {Array<string|ColorToken> | string|ColorToken}
 *
 * @example
 *
 * import { interpolator } from 'huetiful-js';

console.log(interpolator(['pink', 'blue'], { num:8 }));

// [
  '#ffc0cb', '#ff9ebe',
  '#f97bbb', '#ed57bf',
  '#d830c9', '#b800d9',
  '#8700eb', '#0000ff'
]
 *
 */
function interpolator(baseColors = [], options = undefined) {
	var { hueFixup, stops, easingFn, kind, closed, colorspace, num } =
		options || {};
	// Set the internal defaults
	easingFn = or(easingFn, pltrconfg['ef']);
	kind = or(kind, 'basis');
	num = or(num, 1);
	// @ts-ignore
	hueFixup = hueFixup === 'shorter' ? fixupHueShorter : fixupHueLonger;
	let f;
	switch (kind) {
		case 'basis':
			f = (closed && interpolatorSplineBasisClosed) || interpolatorSplineBasis;
			break;
		case 'monotone':
			f =
				(closed && interpolatorSplineMonotoneClosed) ||
				interpolatorSplineMonotone;
			break;
		case 'natural':
			f =
				(closed && interpolatorSplineNaturalClosed) ||
				interpolatorSplineNatural;
	}

	baseColors = values(baseColors);
	var [l, o] = [stops?.length, undefined];
	if (l) {
		o = baseColors.slice(0, l - 1).map((c, i) => [c, stops[i]]);
		// @ts-ignore
		baseColors = o.concat(baseColors.slice(l));
	}

	// @ts-ignore
	let p = interpolate([...baseColors, easingFn], colorspace, {
		// @ts-ignore
		h: {
			fixup: hueFixup,
			use: or(f, pltrconfg['hi'])
		},
		[mcchn('l', colorspace, false)]: {
			use: or(f, pltrconfg['li'])
		},
		[mcchn('c', colorspace, false)]: {
			use: or(f, pltrconfg['ci'])
		}
	});

	// make sure samples is an absolute integer
	// @ts-ignore
	num = or(and(gte(num, 1), Math.abs(num)), 1);

	return or(
		and(
			gt(num, 1),
			//  @ts-ignore
			samples(num).map((s) => token(p(s), options?.token))
		),
		// @ts-ignore
		token(p(0.5), options?.token)
	);
}

export { interpolator };

/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').TokenOptions} TokenOptions
 */

import { averageNumber, random } from 'culori/fn';
import { and, max, min, or } from '../fp/index.js';
import { token } from '../core/token.js';

/**
 * Returns a random pastel variant of the passed in color token.
 * 
 * @param {ColorToken} baseColor The color to return a pastel variant of.
 * @param {TokenOptions|undefined} options
 * @returns {ColorToken} A random pastel color.
 * @example
 *
import { pastel } from 'huetiful-js'

console.log(pastel("green"))

// #036103ff
 */
function pastel(baseColor, options = undefined) {
	/**
	 * The colors from which the randomized values are obtained from were extracted from this article:
	 *
	 * @see www.wikipedia.com Wikipedia
	 * The elements in each array are chroma, lightness of the color in jch and then the color in numerical representation. Got the values from sample pastel colors on the Wikipedia article
	 */
	var w = [
		[0.3582677165354331, 0.996078431372549, 16538982.504333857],
		[0.4395161290322581, 0.9725490196078431, 15694401.836627495],
		[0.472, 0.9803921568627451, 15986490.838712374],
		[0.3305785123966942, 0.9490196078431372, 14834893.772825705],
		[0.2992125984251969, 0.996078431372549, 7446012.731034764],
		[0.38818565400843885, 0.9294117647058824, 8247112.202928809]
	];
	const [u, v] = [w.map((o) => o[0]), w.map((o) => o[1])];

	const t = {
		ms: averageNumber(u),
		ml: averageNumber(v),
		mns: min(u),
		mxs: max(u),
		mnv: min(v),
		mxv: max(v)
	};
	// @ts-ignore

	var q = random('hsv', {
		s: [t['mns'], t['mxs']],
		v: [t['mnv'], t['mxv']],
		h: token(baseColor, { targetMode: 'hsv', kind: 'obj' })['h']
	});

	// check if it is displayable

	// @ts-ignore
	return or(and(options, token(q, options)), q);
}

export { pastel };

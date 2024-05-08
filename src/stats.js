/**
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection
 * @typedef { import('./types.js').Colorspaces} Colorspaces
 * @typedef {import('./types.js').Stats} Stats
 * @typedef {import('./types.js').StatsOptions} StatsOptions
 */

import { differenceHyab, averageNumber, averageAngle } from 'culori/fn';
import {
	mcchn,
	chnDiff,
	sortedColl,
	or,
	values,
	isArray,
	wtf
} from './fp/index.js';
import { luminance } from './luminance.js';
import { mc } from './mc.js';
import { contrast } from './contrast.js';
import { token } from './token.js';
import { achromatic } from './achromatic.js';
import { family } from './family.js';
/**
 * Computes statistical values about the passed in color collection.
 *
 * The properties from each returned `factor` object are:
 *
 * * `against` - The color being used for comparison.
 *
 * Required for the `distance` and `contrast` factors.
 * If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.
 * * `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).
 *
 *
 * * `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
 * * `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
 * * `mean` - The average value for the `factor`.
 *
 * The `mean` property can be overloaded by the `relativeMean` option:
 *
 * * If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
 * For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."
 *
 * These properties are available at the topmost level of the resultant object:
 *
 * * `achromatic` - The amount of colors which are gray out of the total colors in the collection as a value in the range [0,1].
 * * `colorspace` - The colorspace in which the values were computed from, expected to be hue based.
 * Defaults to `lch` if an invalid mode like `rgb` is used.
 *
 * @param {Collection} collection The collection to compute stats from. Any collection with color tokens as values will work.
 * @param {StatsOptions} options
 * @returns {Stats}
 */
function stats(collection = [], options = undefined) {
	var { factor, relative, colorspace, against } = options || {};

	/*
                                    //// DEFAULT OPTIONS  \\\\
      factor
      if factor is defined we return the specified
      factors else all factors if undefined.
  

     relative
     return the largest/smallest factor distances by default
     else compare the distances agains a comparison color.
   
   colorspace
    default is lch if an invalid colorpace is passed in
    expects the colorspace to be hue based
   
   
  against
  default is cyan so that factors dependant on the argument
  don't f*ck things up in the result object

   */

	factor = or(factor, undefined);
	relative = or(relative, false);
	colorspace = or(colorspace, 'lch');
	against = or(against, 'cyan');

	//convert all color tokens to excepted colorspace
	collection = values(collection).map((i) => token(i));

	// put a bunch of stuff in arrays. f*ck readability :lol:

	// Callback functions for retrieving factors
	var [o, y, z, g, j, v, m] = [
			(f) => {
				var u;

				// if relativeMean is true
				// use the overload on all other factors when fetching their mean
				if (relative) {
					switch (f) {
						case 'chroma':
							u = y(f, chnDiff(against, mcchn('c', colorspace)));
							break;
						case 'luminance':
							// @ts-ignore
							let cb1 = (a) => (b) => Math.abs(luminance(a) - luminance(b));
							u = y(f, cb1(against));
							break;
						case 'lightness':
							u = y(f, chnDiff(against, mcchn('c', colorspace)));
							break;
						case 'hue':
							u = y(f, chnDiff(against, `${colorspace}.h`));
							break;
						case 'contrast':
							u = y(f, g(against));
							break;
					}
				} else {
					switch (f) {
						case 'chroma':
							u = y(f, v(colorspace));
							break;
						case 'luminance':
							u = y(f, luminance);
							break;
						case 'lightness':
							u = y(f, z(colorspace));
							break;
						case 'hue':
							u = y(f, j(colorspace));
							break;
					}
				}

				return u;
			},
			(n, m) => sortedColl(n, m, 'asc', true)(collection),
			(m) => mc(mcchn('l', colorspace)),
			(a) => contrast(a, against),
			(i) => (c) => mc(`${or(i, 'lch')}.h`)(c),
			(i) => (c) => mc(mcchn('c', colorspace))(c),

			collection.length
		],
		[t, i] = [
			(k) => {
				// we filter out falsy values from the collection to avoid getting NaN
				var [n, v] = [
					(b, m) => (a) =>
						m(
							values(a)
								.map((i) => b(i))
								.filter((i) => i)
						),
					null
				];
				switch (k) {
					case 'chroma':
						v = n(mc(mcchn('c', colorspace)), averageNumber);
						break;

					case 'distance':
						let i = (a) => (b) => differenceHyab()(a, b);
						v = n(i, averageNumber);
						break;
					case 'hue':
						v = n(mc(`${colorspace}.h`), averageAngle);

						break;
					case 'lightness':
						v = n(mc(mcchn('l', colorspace)), averageNumber);
						break;
					case 'contrast':
						let h = (a) => (b) => contrast(a, b);
						v = n(h, averageNumber);

					case 'luminance':
						v = n(luminance, averageNumber);
						break;
				}
				return v;
			},
			(k) => {
				var [x, y] = [o(k)[0], o(k)[m - 1]];

				return {
					against:
						relative || k === ('contrast' || 'distance') ? against : null,
					colors: [x['color'], y['color']],
					// @ts-ignore
					mean: t(k)(collection),
					extremums: [x[k], y[k]],
					families: [family(x['color']), family(y['color'])]
				};
			}
		],
		p = wtf(factor, i);

	p['achromatic'] =
		// @ts-ignore
		values(collection).filter(achromatic).length / collection.length;
	p['colorspace'] = colorspace;

	return p;
}

export { stats };

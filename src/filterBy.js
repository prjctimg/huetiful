/**
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection
 * @typedef {import('./types.js').Factor} Factor
 * @typedef {import('./types.js').Colorspaces} Colorspaces
 * @typedef {import('./types.js').FilterByOptions} FilterByOptions
 */

import { differenceHyab } from 'culori/fn';

import { mcchn, filteredColl, wtf, isArray, or } from './fp/index.js';
import { token } from './token.js';
import { mc } from './mc.js';
import { contrast } from './contrast.js';
import { luminance } from './luminance.js';
import limits from './maps/limits.js';

/**
 * Filters a collection of colors using the specified `factor` as the criterion. The supported options are:
 * * `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * * `'lightness'` - Returns colors in the specified lightness range.
 * * `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 
 * * `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
 * * `luminance` - Returns colors in the specified luminance range.
 * * `'hue'` - Returns colors in the specified hue ranges between 0 to 360.
 * 
 * 
 * For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range. 
 * This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. 
 * But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 * 
 * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
 *
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param {Collection} collection The collection of colors to filter.  
 * @param {FilterByOptions} options
 * @returns {Collection}
 * @example
 * 
 * import { filterBy } from 'huetiful-js'

let sample = [
  '#00ffdc',
  '#00ff78',
  '#00c000',
  '#007e00',
  '#164100',
  '#ffff00',
  '#310000',
  '#3e0000',
  '#4e0000',
  '#600000',
  '#720000',
]

 */
function filterBy(collection, options) {
	var { against, colorspace, factor, ranges } = options || {};

	factor = or(factor, undefined);
	//	relative = or(relative, false);
	colorspace = or(colorspace, 'lch');
	against = or(against, 'cyan');
	//	order = or(order, 'asc');

	var w = (b, s, e) => {
			return filteredColl(factor, b)(collection, s, e);
		},
		p = (k) => {
			/**
			 * @type { string | number } x
			 * The `start` or min extremum.
			 */
			let x,
				/**
				 * @type { string | number } x
				 * The `end` or max extremum.
				 */
				y,
				z,
				[c, l] = [mcchn('c', colorspace, false), mcchn('l', colorspace, false)];
			if (isArray(factor) || undefined) {
				x = ranges[k][0];
				y = or(ranges[k][1], undefined);
				switch (k?.toLowerCase()) {
					case 'chroma':
						y = !y ? limits[colorspace][c][1] : y;

						z = w(
							mc(c),

							// @ts-ignore
							x,
							y
						);

						break;
					case 'contrast':
						let q = (a) => (b) => contrast(b, a);

						z = w(
							q(against),

							x,
							y
						);
						break;
					case 'distance':
						/**
						 * The `distance` factor callback.
						 * @param {ColorToken} a The color ro compare against.
						 * @returns
						 */
						// @ts-ignore
						let u = (a) => differenceHyab()(a, against);

						z = w(
							u(token(against)),

							// @ts-ignore
							x,
							y
						);
						break;
					case 'hue':
						z = w(
							mc(`${colorspace}.h`),
							// @ts-ignore
							x,
							y
						);
						break;
					case 'lightness':
						y = !y ? limits[colorspace][mcchn('l', colorspace, false)][1] : y;
						z = w(
							mc(mcchn('l', colorspace)),
							// @ts-ignore
							x,
							y
						);
						break;
					case 'luminance':
						z = w(
							luminance,
							// @ts-ignore
							x,
							y
						);
						break;
				}
			} else {
				x = ranges[0];

				y = or(ranges[1], undefined);
				switch (k?.toLowerCase()) {
					case 'chroma':
						y = !ranges[1] ? limits[colorspace][c][1] : y;

						z = w(
							mc(mcchn('c', colorspace)),

							// @ts-ignore
							x,
							y
						);

						break;
					case 'contrast':
						let q = (a) => contrast(against, a);

						z = w(
							q(against),
							// @ts-ignore
							x,
							y
						);
						break;
					case 'distance':
						// @ts-ignore
						let u = (b) => differenceHyab()(against, b);

						z = w(
							u(token(against)),

							// @ts-ignore
							x,
							y
						);
						break;
					case 'hue':
						z = w(
							mc(`${colorspace}.h`),
							// @ts-ignore
							x,
							y
						);
						break;
					case 'lightness':
						y = !y ? limits[colorspace][c.split('.')[1]][1] : y;
						z = w(
							mc(mcchn('l', colorspace)),
							// @ts-ignore
							x,
							y
						);
						break;
					case 'luminance':
						z = w(
							luminance,
							// @ts-ignore
							x,
							y
						);
						break;
				}
			}

			return z;
		};

	return wtf(factor, p);
}

export { filterBy };

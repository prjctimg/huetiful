// @ts-nocheck
/**
 * @typedef { import('./types.js').Collection} ColorToken
 */

import { token } from './token.js';
import {
	and,
	eq,
	not,
	exprParser,
	inRange,
	isArray,
	neq,
	or,
	take,
	give
} from './fp/index.js';
import { colorsNamed } from 'culori';

/**
 *
 * Returns the color token's alpha channel value.
 * 
 *  If the the `amount` parameter is passed in, it sets the color token's alpha channel with the `amount` specified 
 * and returns the color as a hex string.
 * 
 * * Also supports math expressions as a `string` for the `amount` parameter. 
 * For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value. 
 * In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `*  -  /  +`.
 * 
 * @param {ColorToken} color The color with the opacity/alpha channel to retrieve or set.
 * @param {number|string} amount The value to apply to the opacity channel. The value is between `[0,1]`
 * @returns {number|string}
 * @example
 *
 * // Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
 */
function alpha(color, amount = undefined) {
	var a;

	if (eq(typeof color, 'string')) {
		a = and(
			not(colorsNamed[color?.toLowerCase()]),
			and(
				or(
					eq(color?.length, 9),
					and(!color?.startsWith('#'), eq(color?.length, 8))
				),
				parseInt(color?.slice(color?.length - 2), 16)
			)
		);
	} else if (isArray(color)) {
		a = and(
			or(
				eq(color?.length, 5),
				and(neq(typeof color[0], 'string'), eq(color?.length, 4))
			),

			color[take(color?.length, 1)]
		);
	} else if (eq(typeof color, 'object')) {
		a = color?.alpha;
	}

	a = or(and(eq(a, false), 1), a);

	return or(
		and(eq(amount, undefined), a),
		(() => {
			amount = or(
				and(neq(typeof amount, 'number'), exprParser(a, amount)),
				or(and(inRange(amount, 0, 1), amount), give(amount, 100))
			);

			and(
				isArray(color),
				(() => {
					// Get the alpha index

					color[
						or(
							and(
								or(
									eq(color.length, 5),
									and(neq(color[0], 'string'), eq(color.length, 4))
								),
								take(color.length, 1)
							),
							3
						)
					] = amount;
				})()
			);

			if (eq(typeof color, 'object')) {
				color['alpha'] = amount;
			} else {
				var o = token(color, { kind: 'obj' });
				o['alpha'] = amount;
				color = o;
			}
			return color;
		})()
	);
}

export { alpha };

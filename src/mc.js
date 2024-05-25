/**
 * @typedef {import('./types.js').Collection} ColorToken
 */
import { exprParser, isArray, gmchn, eq, and, or } from './fp/index.js';
import { token } from './token.js';

/**
 * Sets the value of the specified channel on the passed in color.
 * 
 * If the `amount` parameter is `undefined` it gets the value of the specified channel.
 * @param {string} modeChannel The mode and channel to be retrieved. For example `'rgb.b'` will return the value of the blue channel in the RGB color space of that color.
 
 * @example
 *
 * import { mc } from 'huetiful-js'

console.log(mc('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 * 
*/

function mc(modeChannel = '') {
	/**
   
   * @param {ColorToken} color Any recognizable color token.
  * @param {string|number} [value=undefined] The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"`
 
   * @returns  {number|ColorToken}
 
   */
	return (color, value = undefined) => {
		var [m, c] = modeChannel.split('.'),
			// @ts-ignore
			u = token(color, { targetMode: m, kind: 'obj' }),
			p;

		or(
			and(
				eq(typeof color, 'object'),
				(p = or(
					and(
						isArray(color),
						or(and(eq(typeof color[0], 'string'), color.slice(1)), color)[
							gmchn(m).indexOf(c)
						]
					),
					color[c]
				))
			),
			(p = u[c])
		);

		if (value) {
			or(
				or(
					and(eq(typeof value, 'number'), (u[c] = value)),
					exprParser(u[c], value)
				),
				Error(
					`${typeof value}} ${value} is an unsupported value to set on a color token`
				)
			);

			// @ts-ignore
			return u;
		}
		return p;
	};
}

export { mc };

/**
 * @typedef { import('../types.js').HueFamily}HueFamily
 * @typedef { import('../types.js').Collection} ColorToken
 */
import hue from '../palettes/hue.js';
import {
	customConcat,
	lt,
	max,
	entries,
	gte,
	keys,
	values,
	and,
	or,
	eq,
	neq,
	inRange,
	min
} from '../fp/index.js';
import { mc } from '../mc/mc.js';
import { achromatic } from '../achromatic/achromatic.js';

/**
 * Gets the hue family which a color belongs to with the overtone included (if it has one.).
 * 
 * For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.
 * @param {ColorToken} color The color to query its shade or hue family.
 * @returns {HueFamily}
 * @example
 *
 * import { family } from 'huetiful-js'


console.log(family("#310000"))
// 'red'
 */
function family(color) {
	if (neq(achromatic(color), true)) {
		var [y, z] = [mc(`lch.h`)(color), keys(hue)];
		console.log(y);
		// @ts-ignore
		return z.find((o) => {
			var p = customConcat(hue[o]);
			return inRange(y, min(p), max(p));
		});
	}

	// @ts-ignore
	return 'gray';
}

export { family };

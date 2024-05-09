/**
 * @typedef { import('./types.js').Collection} ColorToken
 * @typedef { import('./types.js').Collection} Collection
 * @typedef {import('./types.js').FactObject} FactObject
 * @typedef {import('./types.js').ColorObject} ColorObject
 * @typedef {import('./types.js').ColorTuple} ColorTuple
 * @typedef {import('./types.js').TokenOptions} TokenOptions
 * @typedef {import('./types.js').Colorspaces} Colorspaces
 *
 */
import {
	colorsNamed,
	useMode,
	modeJch,
	modeHsv,
	modeLch65,
	modeLrgb,
	modeLab65,
	modeOklch,
	formatHex,
	formatHex8,
	modeLch,
	modeXyz65,
	modeLab,
	// @ts-ignore
	toGamut
} from 'culori/fn';

import { eq, gmchn, isArray, keys, neq, or } from './fp/index.js';

/**
 * Parses any recognizable color to the specified `kind` of `ColorToken` type.
 *
 * The `kind` option supports the following types as options:
 *
 * * `'array'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.
 *
 * * `'number'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.
 *
 * The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'number'`:
 *  - `'hexadecimal'`
 *  - `'binary'`
 *  - `'octal'`
 *  - `'decimal'` exponential notation
 *
 * * `'hex'` - Parses the color token to its hexadecimal string equivalent.
 *
 * If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.
 *
 * * `'object'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.
 *
 * @param {ColorToken} color The color token to parse or convert.
 * @param {TokenOptions} options
 * @returns {ColorToken}
 */
function token(color, options = undefined) {
	var defs = {
			hsv: modeHsv,
			rgb: modeLrgb,
			lab: modeLab,
			lch65: modeLch65,
			lab65: modeLab65,
			oklch: modeOklch,
			lch: modeLch,
			xyz: modeXyz65,
			jch: modeJch
		},
		{ srcMode, targetMode, omitMode, kind, numType } = options || {},
		cnv = (m, i = undefined) => useMode(defs[m])(or(i, color));
	kind = or(kind, 'hex');
	omitMode = or(omitMode, false);
	numType = or(numType, undefined);
	srcMode = srcMode
		? srcMode
		: isArray(color)
			? neq(typeof color[0], 'number') && color[0]
			: color?.mode || 'rgb';
	targetMode = or(targetMode, srcMode);

	function num2c() {
		// Ported from chroma-js with slight modifications
		//
		// @ts-ignore
		targetMode = targetMode?.toLowerCase();
		if (typeof color === 'number' && color >= 0 && color <= 0xffffff) {
			const [r, g, b] = [color >> 16, (color >> 8) & 0xff, color & 0xff];

			const u = {
				r: r / 255,
				g: g / 255,
				b: b / 255,
				mode: 'rgb'
			};

			// @ts-ignore
			return (targetMode && cnv(targetMode)) || formatHex(u);
		} else {
			throw Error('unknown num color: ' + color);
		}
	}

	function c2hx() {
		// if its of type string and not a CSS named color then its probably hex so we don't convert it
		var c;
		switch (typeof color) {
			case 'boolean':
				c = (color === true && '#ffffff') || '#000000';

				break;
			case 'number':
				c = num2c();

				break;
			// @ts-ignore
			case 'object' && isArray(color):
				// @ts-ignore
				c = ((color?.length === 5 && formatHex8) || formatHex)(arr2obj());

				break;
			case 'string':
				c =
					// if its a hex string we return it as is
					(!keys(colorsNamed).some((el) => el === color.toLowerCase()) &&
						color) ||
					formatHex8(color);
				break;
			default:
				// @ts-ignore
				c = ((color?.alpha < 1 && formatHex8) || formatHex)(arr2obj());
		}

		return c;
	}

	/**
 *@public
 *  Converts the temperature value (in Kelvins) to a color as a hexadecimal string else a color object in the mode `colorspace`.
 * @param {number} kelvin The number of Kelvins. From 0 to 30,000 .
 * @param {Colorspaces} targetMode Optional parameter to return a color object in the mode `colorspace` hexadecimal string. Default is `'rgb'`
 * @returns {ColorObject|string} The color as a hexadecimal  or plain color object.
 * @example
 *
 * import { temp2color } from 'huetiful-js'

console.log(temp2color(2542))
// #ffa44a
 */

	function tmp2c(kelvin = 1000, targetMode) {
		//ported from chroma-js
		const { log } = Math;
		const temp = kelvin / 100;

		var r, g, b;
		if (temp < 66) {
			r = 255;
			g =
				temp < 6
					? 0
					: -155.25485562709179 -
						0.44596950469579133 * (g = temp - 2) +
						104.49216199393888 * log(g);
			b =
				temp < 20
					? 0
					: -254.76935184120902 +
						0.8274096064007395 * (b = temp - 10) +
						115.67994401066147 * log(b);
		} else {
			r =
				351.97690566805693 +
				0.114206453784165 * (r = temp - 55) -
				40.25366309332127 * log(r);
			g =
				325.4494125711974 +
				0.07943456536662342 * (g = temp - 50) -
				28.0852963507957 * log(g);
			b = 255;
		}
		const s = {
			r: r / 255,
			g: g / 255,
			b: b / 255,
			mode: 'rgb'
		};

		return (
			// @ts-ignore
			((targetMode && cnv(targetMode)) || formatHex)(s)
		);
	}

	function c2num() {
		const _ = cnv('rgb');

		/**
		 * @type {number|string}
		 */
		// @ts-ignore
		var n = ((255 * _['r']) << 16) + ((255 * _['g']) << 8) + 255 * _['b'];
		switch (numType?.toLowerCase()) {
			case 'binary':
				n = n.toString(2);
				break;

			case 'hex':
				n = n.toString(16);
			case 'octal':
				n = n.toString(8);
			case 'exponential':
				// @ts-ignore
				n = n.toExponential(6);
		}
		return n;
	}
	function tmp2c() {
		//ported from chroma-js
		const { log } = Math;
		const temp = color / 100;

		var r, g, b;
		if (temp < 66) {
			r = 255;
			g =
				temp < 6
					? 0
					: -155.25485562709179 -
						0.44596950469579133 * (g = temp - 2) +
						104.49216199393888 * log(g);
			b =
				temp < 20
					? 0
					: -254.76935184120902 +
						0.8274096064007395 * (b = temp - 10) +
						115.67994401066147 * log(b);
		} else {
			r =
				351.97690566805693 +
				0.114206453784165 * (r = temp - 55) -
				40.25366309332127 * log(r);
			g =
				325.4494125711974 +
				0.07943456536662342 * (g = temp - 50) -
				28.0852963507957 * log(g);
			b = 255;
		}
		const s = {
			r: r / 255,
			g: g / 255,
			b: b / 255,
			mode: 'rgb'
		};

		return (
			// @ts-ignore
			((targetMode && cnv) || formatHex)(s)
		);
	}

	function c2arr() {
		var o;

		if (isArray(color)) {
			o = arr2obj();
		} else if (typeof color === 'number') {
			o = num2c();
		} else if (typeof color === ('string' || 'object')) {
			// @ts-ignore
			o = formatHex8(color);
		}
		o = cnv(targetMode, o);
		var arr = keys(o)
			.filter((ch) => ch !== 'mode')
			.map((ch) => o[ch]);

		// dont add mode string if true
		omitMode ? arr : arr.unshift(targetMode);

		return arr;
	}

	function arr2obj() {
		// get  the needed vars

		/**
		 *
		 * @returns
		 */
		var cb = () => {
			var [x, y] = [
				gmchn(srcMode || targetMode).split(''),
				eq(typeof color[0], 'string') ? color.slice(1) : color
			];

			return {
				[x[0]]: y[0],
				[x[1]]: y[1],
				[x[2]]: y[2],
				mode: srcMode,
				alpha: y[3] || 1
			};
		};

		var q;

		//  Normalize the color back to the rgb gamut supported by culori
		if (
			isArray(color) &&
			eq(srcMode, 'rgb' || 'lrgb') &&
			color.some((ch) => 1 < Math.abs(ch))
		) {
			q = ((typeof color[0] == 'string' && color.slice(1)) || color).map(
				(ch) => ch / 255
			);
		}

		// @ts-ignore

		return q;
	}
	/**
	 * @param {ColorToken} color The color to parse to the specified `'kind'`.
	 * @returns {ColorToken}
	 */

	var p;
	switch (kind) {
		case 'array':
			//
			p = c2arr();
			break;
		case 'hex':
			p = c2hx();
			break;
		case 'number':
			p = c2num();
			break;

		case 'object':
			// @ts-ignore
			p = cnv(targetMode);
			break;
		case 'temp':
			tmp2c();

			/**
 *@public
 *  Converts the temperature value (in Kelvins) to a color as a hexadecimal string else a color object in the mode `colorspace`.
 * The number of Kelvins. From 0 to 30,000 .
 * 
 * import { temp2color } from 'huetiful-js'

console.log(temp2color(2542))
// #ffa44a
 */

			break;
		default:
			p = c2hx();
			break;
	}
	return p;
}

export { token };

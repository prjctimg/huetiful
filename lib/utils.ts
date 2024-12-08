import {
	colorsNamed,
	formatHex,
	formatHex8,
	interpolate,
	modeHsv,
	modeLab,
	modeLab65,
	modeLch,
	modeLch65,
	modeLrgb,
	modeRec2020,
	modeXyz50,
	modeXyz65,
	useMode,
	wcagLuminance,
} from "culori/fn";
import "culori/css";
import {
	adjustHue,
	and,
	customConcat,
	eq,
	exprParser,
	floorCeil,
	getSrcMode,
	give,
	gmchn,
	gt,
	gte,
	inRange,
	isArray,
	keys,
	lte,
	max,
	min,
	neq,
	not,
	or,
	rand,
	take,
} from "./internal.ts";
import { hue } from "./constants.ts";
import type {
	BiasedHues,
	ColorFamily,
	ColorToken,
	ColorTuple,
	ComplimentaryOptions,
	LightnessOptions,
	TokenOptions,
} from "./types.d.ts";

/**
 *
 * Returns the color token's alpha channel value.
 *
 *  If the the `amount` parameter is passed in, it sets the color token's alpha channel with the `amount` specified
 * and returns the color as a hex string.
 *
 * :::tip
 * 
 * * Also supports math expressions as a `string` for the `amount` parameter.
 * For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value.
 * In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `*  -  /  +`.
 * 
 * :::
 *
 * If the `alpha` channel is `undefined`, it defaults to `1`.
 *
 * @param  color The color with the opacity/alpha channel to retrieve or set.
 * @param amount The value to apply to the opacity channel. The value is between `[0,1]`

 * @example
  import { alpha } from 'huetiful-js'
 
 // Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
 */
function alpha<Amount>(
	color: ColorToken = "cyan",
	amount: Amount | undefined = undefined,
): Amount extends undefined ? number : ColorToken {
	// @ts-ignore:
	let alphaChannel: number;

	if (isArray(color))
		alphaChannel = eq(
			(color as ColorTuple).filter((channel) =>
				eq(typeof channel, "number")
			)
				.length,
			4,
		)
			? color[(color as ColorTuple)?.length - 1]
			: 1;
	else if (eq(typeof color, "string"))
		alphaChannel = (
			gte((color as ColorTuple)?.length, 8) &&
			// @ts-ignore:
			not(colorsNamed?.color?.toLowerCase())
		)
			? Number.parseInt(
				(color as string)?.slice((color as string)?.length - 2),
				16,
			)
			: 1;
	else if (eq(typeof color, "object"))
		// @ts-ignore:
		alphaChannel = color?.alpha;


	if (!amount)
		// @ts-ignore:
		return alphaChannel ? alphaChannel : 1;

	amount = (
		// @ts-ignore:
		((typeof amount !== "number") && exprParser(alphaChannel, amount)) ||
		// @ts-ignore:
		((inRange(amount, 0, 1) && amount) || give(amount, 100))
	);

	if (isArray(color))
		// Get the alpha index

		color[
			(
				(
					eq((color as ColorTuple).length, 5) ||
					(
						neq(color[0], "string") &&
						eq((color as ColorTuple)?.length, 4)
					)
				) &&
				take((color as ColorTuple).length, 1)
			) || 3
		] = amount;


	if (eq(typeof color, "object"))
		// @ts-ignore:
		color.alpha = amount;
	else {
		const colorObject = token(color, { kind: "obj" });
		// @ts-ignore:
		colorObject.alpha = amount;
		color = colorObject as ColorToken;
	}
	// @ts-ignore:
	return color;
}

/**
 * Sets the value of the specified channel on the passed in color.
 *
 * If the `amount` parameter is `undefined` it gets the value of the specified channel.
 * @param  modeChannel The mode and channel to be retrieved. For example `'rgb.b'` will return the value of the blue channel in the RGB color space of that color.

 * @example

 * import { mc } from 'huetiful-js'

console.log(mc('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 *
*/

function mc(modeChannel = "lch.h") {
	/**

   * @param  color Any recognizable color token.
  * @param The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"`

   * @returns  {number|ColorToken}

   */
	return <Value extends unknown>(
		color?: ColorToken,
		value?: Value,
	): Value extends number ? ColorToken : number => {


		const [mode, channel] = modeChannel.split(".");

		// @ts-ignore:
		let colorObject = token(color, { targetMode: mode, kind: "obj" });
		// @ts-ignore:
		const currentChannel: number = colorObject[channel];


		if (value)
			if (eq(typeof value, "number"))
				// @ts-ignore:
				colorObject[channel] = value;
			else if (eq(typeof value, "string"))
				// @ts-ignore:
				colorObject = exprParser(colorObject[channel], value);
			else
				throw Error(
					`${typeof value} ${value} is not a valid value for a color token`,
				);



		// @ts-ignore:
		return value && colorObject || currentChannel;


	};
}

/**
 * Checks if a color token is achromatic (without hue or simply grayscale).
 *
 * @param  color The color token to test if it is achromatic or not.
 * @example

import { achromatic } from "huetiful-js";
S
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

// We can expand this example by interpolating between black and white and then getting some samples to iterate through.

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
function achromatic(color: ColorToken = "cyan"): boolean {
	// @ts-ignore:
	color = token(color, { kind: "obj", targetMode: "lch" });

	// If a color has no lightness then it has no hue
	// so its technically not achromatic since white and black are not grayscale
	// @ts-ignore:
	const isFalsy = (x: unknown) =>
		((typeof x === "undefined" || x === 0) || Number.isNaN(x as number));

	return (
		( // @ts-ignore:
			(isFalsy(color.l) || color.l >= 100) &&
			// @ts-ignore:
			(!(isFalsy(color.c)) || isFalsy(color.c))
		) &&
		false
	) ||
		// @ts-ignore:
		(isFalsy(color.c) && true || false)

}

/**
 * Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.
 * @param  color The color to darken.
 * @param  amount The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.1`.
 * @example
 *
 *  import { lightness } from "huetiful-js";
 *
 // darkening a color
console.log(lightness('blue', 0.3, true));

// '#464646'

// brightening a color, we can omit the final param
// because it's false by default.
console.log(brighten('blue', 0.3));
//#464646


 */
function lightness(
	color?: ColorToken,
	options: LightnessOptions = {
		amount: 0.1,
		darken: false,
	},
): ColorToken {
	const { amount, darken } = options;

	const f = () => {
		const colorObject = token(color, { kind: "obj", targetMode: "lab" });
		if (typeof amount === "number")
			// @ts-ignore:
			colorObject.l = (darken ? max : min)([
				100,
				// @ts-ignore:
				colorObject.l + 100 * (darken ? -amount : amount),
			]);

		// @ts-ignore:
		return token(colorObject);
	};
	// @ts-ignore:
	return f();
}

/**
 * Parses any recognizable color to the specified `kind` of `ColorToken` type.
 *
 * The `kind` option supports the following types as options:
 *
 * * `'arr'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.
 *
 * * `'num'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.
 *
 * The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'number'`:
 *  - `'hex'` - Hexadecimal number
 *  - `'bin'` - Binary number
 *  - `'oct'` - Octal number
 *  - `'expo'` - Decimal exponential notation
 *
 * * `'str'` - Parses the color token to its hexadecimal string equivalent.
 *
 * * `'obj'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.t
 *
 * :::tip
 *
 *  If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.

 *
 * :::
 * @param  color The color token to parse or convert.
 * @param  options Options to customize the parsing and output behaviour.
 * @returns
 */
function token(
	color: ColorToken = "cyan",
	options?: TokenOptions,
): ColorToken {
	// the mode definitions
	const modeDefinitions = {
		lrgb: modeLrgb,
		lab: modeLab,
		lch65: modeLch65,
		lch: modeLch,
		xyz: modeXyz50,
		xyz65: modeXyz65,
		lab65: modeLab65,
		rgb: modeRec2020,
		hsv: modeHsv,
	};
	let {
		srcMode,
		targetMode,
		omitMode,
		kind,
		numType,
		omitAlpha,
		normalizeRgb,
	} = options || {}


	// Always handle defaults internally because if some property is not specified it will be null
	normalizeRgb = normalizeRgb || false
	numType = numType || undefined
	omitAlpha = omitAlpha || false
	kind = kind || 'str'
	omitMode = omitMode || false
	srcMode = srcMode && srcMode || getSrcMode(color as ColorToken);

	/**
	 * An array of channel keys from the source colorspace. If undefined it defaults to 'rgb'
	 */
	let srcChannels = gmchn(srcMode),
		/**
		 * an array of channel values
		 */
		srcChannelValues: number[];
	/**
	 * the alpha channel captured if it exists in the color token

	 */
	// @ts-ignore:
	const alphaValue = alpha(color);
	let result: { [x: string]: number | string } = {};
	result.mode = srcMode
	// Get the channels from passed in color token
	// if the color token is a string or number we just convert it to an object


	if (isArray(color))
		// @ts-ignore:
		srcChannelValues = (color as ColorTuple)
			.filter((a) => eq(typeof a, "number"));

	// @ts-ignore: check if it does not have a length as well
	if (eq(typeof color, "object") && !color?.length)
		// @ts-ignore:
		srcChannelValues = srcChannels.map((a) => color[a]);


	if (eq(typeof color, "string"))
		// @ts-ignore:
		result = (typeof color === "number"
			&& num2c())
			|| parseToken(c2str(), "rgb");


	// @ts-ignore:
	if (srcChannelValues)
		for (const channel of srcChannels)
			result[channel] = srcChannelValues[srcChannels.indexOf(channel)];


	if (((srcMode === "rgb" && normalizeRgb)))
		// @ts-ignore:
		if (srcChannels.some((c) => Math.abs(result[c]) > 1))

			for (const k of srcChannels) (result[k] as number) /= 255;

	if (targetMode) result = parseToken(result, targetMode);

	function parseToken(col: unknown, mode?: unknown) {
		// @ts-ignore:
		return useMode(modeDefinitions[mode])(or(col, result));
	}
	/**
	 * converts any color token to an array or object equivalent
	 */
	function c2col(col: 'obj' | 'arr') {


		const res = targetMode
			&& parseToken(result, targetMode)
			|| result;


		if (targetMode)

			// 🖕🏿
			srcChannels = gmchn(targetMode);



		if (eq(col, "obj")) {

			omitMode
				// @ts-ignore:
				? delete res.mode
				// @ts-ignore:
				: (res.mode = (targetMode && targetMode) || srcMode);

			// @ts-ignore:
			omitAlpha ? delete res.alpha : (res.alpha = alphaValue);
			return res;
		}

		if (eq(col, "arr")) srcChannelValues = [];
		for (const k of srcChannels)
			// @ts-ignore:
			srcChannelValues[srcChannels.indexOf(k)] = res[k];


		// @ts-ignore:
		omitAlpha ? srcChannelValues : srcChannelValues.push(alphaValue);
		omitMode
			? srcChannelValues
			// @ts-ignore:
			: srcChannelValues.unshift(targetMode ? targetMode : srcMode);
		return srcChannelValues;
	}

	/**
	 * converts a color token to its numerical equivalent
	 */
	function c2num() {
		const rgbObject: object = parseToken(c2str(), "rgb");

		// @ts-ignore:
		const result = ((255 * rgbObject.r) << 16) +
			// @ts-ignore:
			((255 * rgbObject.g) << 8) +
			// @ts-ignore:
			255 * rgbObject.b;

		return (
			(
				numType &&
				result.toString(
					{
						bin: 2,
						hex: 16,
						expo: 6,
						oct: 8,
					}[numType?.toLowerCase() as string],
				)
			) ||
			result
		);
	}

	/**
	 * converts any color token to hexadecimal
	 */
	function c2str() {
		// @ts-ignore:
		return {
			boolean: or(and(eq(color, true), "#ffffff"), "#000000"),
			number: num2c(),
			// @ts-ignore:
			object: (omitAlpha ? formatHex : formatHex8)(c2col("obj")),
			// @ts-ignore:
			string: or(colorsNamed?.color, formatHex(color)),
		}[typeof color];
	}

	/**
	 * converts a number to an RGB color object
	 */
	function num2c() {
		// Ported from chroma-js with slight modifications

		return (
			(eq(typeof color, "number"), gte(color as number, 0)) &&
			lte(color as number, 0xffffff)
		)
			? {
				r: ((color as number) >> 16) / 255,

				g: (((color as number) >> 8) & 0xff) / 255,

				b: (color as number & 0xff) / 255,
				mode: "rgb",
			}
			: Error(`unknown num color:   ${color}`);
	}

	return {
		obj: c2col("obj"),
		arr: c2col("arr"),
		str: c2str(),
		num: c2num(),
	}[kind as string];
}



/**
 * Gets the luminance of the passed in color token.
 *
 * If the `amount` parameter is passed in, it will adjust the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance) by the specified `amount`.
 * @param  color The color to retrieve or adjust luminance.
 * @param amount The amount of luminance to set. The value range is normalised between [0,1]
 * @example
 *
 * import { luminance } from 'huetiful-js'

// Getting the luminance

console.log(luminance('#a1bd2f'))
// 0.4417749513730954

console.log(colors('all', '400').map((c) => luminance(c)));

// [
   0.3595097699638928,  0.3635745068550118,
   0.3596908494424909,  0.3662525955988395,
  0.36634113914916244, 0.32958967582076004,
  0.41393242740130043,  0.5789820793721787,
   0.6356386777636567,  0.6463720036841869,
   0.5525691083297639,  0.4961850321908156,
   0.5140644334784611,  0.4401325598899415,
  0.36299191043315415,  0.3358285501372504,
  0.34737270839643575, 0.37670102542883394,
   0.3464512307705231, 0.34012939384198054
]

// setting the luminance

let myColor = luminance('#a1bd2f', 0.5)

console.log(luminance(myColor))
// 0.4999999136285792
 */
function luminance<Amount>(
	color?: ColorToken,
	amount: number | undefined = undefined,
): Amount extends number ? ColorToken : number {
	color = token(color);
	// @ts-ignore:
	let result: unknown;
	if (!amount)
		// @ts-ignore:
		return wcagLuminance(color);

	const w = "#ffffff",
		b = "#000000";

	const EPS = 1e-7;
	let MAX_ITER = 20;

	if (eq(typeof amount, "number")) {
		const currentLuminance = wcagLuminance(color as string);

		//Must add the overrides object to change parameters like easings, fixups, and the mode to perform the computations in.
		// use a bilinear interpolation
		// @ts-ignore:
		const f = (u, v) => {
			const [mid, low] = [
				interpolate([u, v])(0.5),
				// @ts-ignore:
				wcagLuminance(color),
			];

			// @ts-ignore:
			if (Math.abs(amount - low > EPS) || !MAX_ITER--)
				// close enough
				return mid;


			if (gt(low, amount))
				return f(u, mid);

			return f(mid, v);
		};

		if (gt(currentLuminance, amount))
			result = f(b, color);
		else
			result = f(color, w);

	}
	// @ts-ignore:
	return token(result);
}

/**
 * Gets the hue family which a color belongs to with the overtone included (if it has one.).
 *
 * For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.
 * @param  color The color to query its shade or hue family.
 * @example
 *
 * import { family } from 'huetiful-js'


console.log(family("#310000"))
// 'red'
 */
function family(color?: ColorToken): BiasedHues & ColorFamily {
	if (neq(achromatic(color), true)) {
		const [hueAngle, hueFamilies] = [
			mc("lch.h")(color),
			keys(hue),
		];

		// @ts-ignore:
		return hueFamilies.find((o) => {
			// @ts-ignore:
			const hueRanges = customConcat(hue[o]);
			return inRange(hueAngle, min(hueRanges), max(hueRanges));
		});
	}

	// @ts-ignore:
	return "gray";
}

/**
 * Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'` using the `'lch'` colorspace.
 *
 * @param  color The color to check the temperature.
 * True if the color is cool else false.
 * @example
 *
 * import { temp } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(temp(sample[2]));
// 'cool'

console.log(map(sample, temp));

// [ 'cool',  'warm', 'cool']



 */
function temp(color: ColorToken = "cyan"): "cool" | "warm" {
	return (
		(
			keys(hue).some((hueFamily) =>
				inRange(
					floorCeil(mc("lch.h")(color)),
					// @ts-ignore:
					hue[hueFamily].cool[0],
					// @ts-ignore:
					hue[hueFamily].cool[1],
				)
			) &&
			"cool"
		) ||
		"warm"
	);
}

/**
 * Returns the name of the hue family which is biasing the passed in color using the `'lch'` colorspace.
 *
 * * If an achromatic color is passed in it returns the string `'gray'`
 * * If the color has no bias it returns `false`.
 * @param  color The color to query its overtone.

 * @example
 *
 * import { overtone } from "huetiful-js";
 *
console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
 */
function overtone(
	color?: ColorToken,
): ColorFamily | false {
	const hueFamily = family(color);

	// We check if the color can be found in the defined ranges
	// @ts-ignore:
	return (
		(achromatic(color) && "gray")
		// @ts-ignore:
		|| ((/-/.test(hueFamily) && hueFamily.split("-")[1]) || false)
	);
}

/**
 * Returns the complimentary color of the passed in color token. A complimentary color is 180 degrees away on the hue channel.
 * @param  baseColor The color to retrieve its complimentary equivalent.
 * @param options Optional overrides to customize behaviour.
 * @example
 *
 * import { complimentary } from "huetiful-js";
 *
 *
console.log(complimentary("pink", true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(complimentary("purple"))
// #005700
 */
function complimentary(baseColor?: ColorToken, options: ComplimentaryOptions = {
	randomOffset: true,
	extremums: [0, 1],
}): ColorToken {
	const { randomOffset, extremums } = options;
	const MIN_EXTREMUM = 0.965995,
		MAX_EXTREMUM = 1;
	const complimentaryHueAngle = adjustHue(
		mc("lch.h")(baseColor) +
		(randomOffset
			? 180 *
			rand(
				// @ts-ignore:
				(extremums[0] || MIN_EXTREMUM),
				// @ts-ignore:
				(extremums[1] || MAX_EXTREMUM),
			)
			: 180),
	);

	// @ts-ignore:
	return token(mc("lch.h")(baseColor, complimentaryHueAngle));
}

export {
	achromatic,
	alpha,
	complimentary,
	family,
	lightness,
	luminance,
	mc,
	overtone,
	temp,
	token,
};

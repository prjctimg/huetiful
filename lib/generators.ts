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
	fixupHueLonger,
	differenceHyab,
	easingSmoothstep,
	averageNumber,
	random
	// @ts-ignore
} from 'culori/fn';
import {
	or,
	mcchn,
	pltrconfg,
	gt,
	gte,
	lte,
	lt,
	min,
	max,
	values,
	factorIterator,
	entries,
	and,
	eq,
	adjustHue,
	rand,
	inRange,
	isValidArgs,
	not,
	keys
} from './internal.js';
import { mc, token } from './utils.js';
import {
	ColorToken,
	TokenOptions,
	PairedSchemeOptions,
	Collection,
	InterpolatorOptions,
	DiscoverOptions,
	HueshiftOptions,
	EarthtoneOptions,
	SchemeOptions
} from './types.js';
/**
 * Creates a palette of hue shifted colors from the passed in color.
 * 
 * Hue shifting means that:
 * 
 * * As a color becomes lighter, its hue shifts up (increases).
 * * As a color becomes darker its hue shifts down (decreases).
 * 
 * The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extreme respectively.
 * 
 *  The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or `(num * 2) + 1`.
 * 
 * @param baseColor The color to use as the base of the palette.
 * @param {HueshiftOptions} options The optional overrides object.
 
 * @example
 * import { hueshift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
  '#ffffe1', '#ffdca5',
  '#ca9a70', '#935c40',
  '#5c2418', '#3e0000',
  '#310000', '#34000f',
  '#38001e', '#3b002c',
  '#3b0c3a'
]
 */
function hueshift(baseColor, options: HueshiftOptions): Collection {
	let { num, hueStep, minLightness, maxLightness, easingFn } = options || {};

	baseColor = or(baseColor, '#3fca2b');
	easingFn = or(easingFn, easingSmoothstep);
	num = or(num, 6) + 1;
	hueStep = or(hueStep, 5);
	baseColor = token(baseColor, {
		kind: 'obj',
		targetMode: 'lch'
	});
	let z = [baseColor];

	// // if value is beyond max normalize all the values ensuring that the end is higher than start
	// // and that if minval was less than max range we will get that channel's equivalent value on the [0,100] scale.
	maxLightness = lte(maxLightness, 95) ? maxLightness : 90;
	minLightness = lte(minLightness, maxLightness) ? minLightness : 5;

	/**
	 * @internal
	 * Normalizes any value in the range [0,1] to the ranges supported by the colorspace
	 */
	function f(i, e1, e2) {
		return Math.abs(
			((i - 0) / (e1 - 0)) * (e2 - baseColor['l']) + baseColor['l']
		);
	}
	// Maximum number of iterations possible.
	//Each iteration add a darker shade to the start of the array and a lighter tint to the end.
	// @ts-ignore
	for (let i = 1, j = i / num; i < num; i++) {
		//adjustHue checks hue values are clamped.
		// Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].
		const [y, x] = [
			{
				l: f(i, num, minLightness),
				c: baseColor['c'],
				// @ts-ignore
				h: adjustHue(baseColor['h'] - hueStep * easingFn(j)),
				mode: 'lch'
			},
			{
				l: f(i, num, maxLightness),
				c: baseColor['c'],
				// @ts-ignore
				h: adjustHue(baseColor['h'] + hueStep) * easingFn(j),
				mode: 'lch'
			}
		];

		z.push(x);
		z.unshift(y);
	}

	//return z;
	// //@ts-ignore
	return Array.from(new Set(z)).map((c) => token(c));
}

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
function pastel(
	baseColor: ColorToken,
	options: TokenOptions | undefined = undefined
): ColorToken {
	/**
	 * The colors from which the randomized values are obtained from were extracted from this article:
	 *
	 * @see www.wikipedia.com Wikipedia
	 * The elements in each array are chroma, lightness of the color in HSV and then the color in numerical representation. Got the values from sample pastel colors on the Wikipedia article
	 */
	let w = [
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

	let q = random('hsv', {
		s: [t['mns'], t['mxs']],
		v: [t['mnv'], t['mxv']],
		h: token(baseColor, { targetMode: 'hsv', kind: 'obj' })['h']
	});

	// check if it is displayable

	// @ts-ignore
	return token(q, options);
}

/**
 * Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
 * The colors are then spline interpolated via white or black.
 * 
 * A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.
 * @param {ColorToken} baseColor The color to return a paired color scheme from.
 * @param {PairedSchemeOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns {Array<string|ColorToken>|string|ColorToken}
 * @example
 *
 * import { pair } from 'huetiful-js'

console.log(pair("green",{hueStep:6,num:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
function pair<Color extends ColorToken, Options extends PairedSchemeOptions>(
	baseColor: Color,
	options?: Options
): Collection {
	let { num, via, hueStep, colorspace } = or(options, {} as Options);
	via = or(via, 'light');
	hueStep = or(hueStep, 5);
	colorspace = or(colorspace, 'lch65');
	//  @ts-ignore
	baseColor = token(baseColor, { kind: 'obj', targetMode: colorspace });

	// get the hue of the passed in color and add it to the step which will result in the final color to pair with
	const destinationColor = mc(`${colorspace}.h`)(
		baseColor,
		Math.abs(baseColor['h'] + (lt(hueStep, 0) ? -hueStep : hueStep))
	);

	// Set the tones to color objects with hardcoded hue values and lightness channels clamped at extremes.
	// This is because pure black returns a falsy channel (have'nt found out which yet but it f*cks up the results smh).
	// Question: Black is  the absence of hue or ligtness or both ? Why ?
	const tone = {
		dark: { l: 0, c: 0, h: 0, mode: colorspace },
		light: { l: 100, c: 0, h: 0, mode: colorspace }
	}[via];

	// Since the interpolation returns half duplicate values we double the sample value
	// Guard the num param against negative values and floats

	// Return a slice of the array from the start to the half length of the array

	return interpolator([baseColor, tone], {
		colorspace: 'lch',
		num: num * 2,
		token: options?.token
		// @ts-ignore
	}).slice(0, num);
}

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
 * @returns {Array<ColorToken>}
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
function interpolator(
	baseColors: Collection = [],
	options: InterpolatorOptions = undefined
): Array<ColorToken> | ColorToken {
	let { hueFixup, stops, easingFn, kind, closed, colorspace, num } =
		options || {};
	// Set the internal defaults
	easingFn = or(easingFn, pltrconfg['ef']);
	kind = or(kind, 'basis');
	num = or(num, 1);
	// @ts-ignore
	hueFixup = hueFixup === 'shorter' ? fixupHueShorter : fixupHueLonger;
	let method = {
		basis: or(
			and(closed, interpolatorSplineBasisClosed),
			interpolatorSplineBasis
		),
		natural: or(
			and(closed, interpolatorSplineNaturalClosed),
			interpolatorSplineNatural
		),
		monotone: or(
			and(closed, interpolatorSplineMonotoneClosed),
			interpolatorSplineMonotone
		)
	}[kind];

	baseColors = values(baseColors);
	let len = stops?.length,
		o;
	if (gt(len, 0)) {
		// @ts-ignore
		o = baseColors?.slice(0, len - 1).map((c, i) => [c, stops[i]]);
		// @ts-ignore
		baseColors = o.concat(baseColors.slice(len));
	}

	// @ts-ignore
	let func = interpolate([...baseColors, easingFn], colorspace, {
		// @ts-ignore
		h: {
			fixup: hueFixup,
			use: or(method, pltrconfg['hi'])
		},
		[mcchn('l', colorspace, false)]: {
			use: or(method, pltrconfg['li'])
		},
		[mcchn('c', colorspace, false)]: {
			use: or(method, pltrconfg['ci'])
		}
	});

	// make sure samples is an absolute integer
	// @ts-ignore
	num = or(and(gte(num, 1), Math.abs(num)), 1);

	return or(
		and(
			gt(num, 1),
			//  @ts-ignore
			samples(num).map((s) => token(func(s), options?.token))
		),
		// @ts-ignore
		token(func(0.5), options?.token)
	);
}

/**
 * Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes. 
 * 
 * The function returns different values based on the `kind` parameter passed in:
 * 
 * * An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
 * * Else it returns an object of all the palette types as keys and their values as an array of colors. 
 * 
 * If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.
 * @param {Collection} colors The collection of colors to create palettes from. Preferably use 6 or more colors for better results.
* @param {DiscoverOptions} options
 * @returns {Collection} 
 * @example
 *
 * import { discover } from 'huetiful-js'

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
  "#3e0000",
  "#310000",
]

console.log(discover(sample, { kind:'tetradic' }))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
 */
function discover(
	colors: Collection = [],
	options: DiscoverOptions
): Collection {
	if (isValidArgs(colors, 4)) {
		//  Initialize and sanitize parameters
		const colorTokenValues = values(colors),
			colorTokenKeys = keys(colors);
		let { kind, maxDistance, minDistance } = options || {};

		maxDistance = or(maxDistance, 0.0014);
		minDistance = or(minDistance, 0);

		const palettes = {},
			colorDistance = (a, b) => differenceHyab()(a, b),
			customInRange = (c, d) =>
				inRange(colorDistance(c, d), minDistance, maxDistance),
			availableColors = (arg, obj = {}) =>
				obj[arg]?.filter((c) =>
					colorTokenValues.some((d) => not(customInRange(c, d)))
				);
		// Create the classic palettes per valid color token  in the collection

		for (const key of colorTokenKeys) {
			palettes[key] = scheme(colors[key], { kind: kind });
		}

		// For each color token,
		//remove the colors that are available
		// in the source color token collection

		let currentPalette = [];
		for (const key of colorTokenKeys) {
			if (eq(typeof kind, 'string')) {
				palettes[key] = availableColors(key, palettes);
				if (gt(currentPalette.length, 1)) {
					palettes[key] = palettes[key].filter((a, b) =>
						not(customInRange(a, currentPalette[b]))
					);
				}

				currentPalette = palettes[key];
			} else {
				// if the color token value is an object, iterate through the available palette keys
				for (const paletteType of keys(palettes[key])) {
					palettes[key][paletteType] = availableColors(
						paletteType,
						palettes[key]
					);
				}
			}
		}

		// Get the values of any collection

		// @ts-ignore
		return palettes;
	}
}

/**
 * Creates a color scale between an earth tone and any color token using spline interpolation.
 * @param {ColorToken} baseColor The color to interpolate an earth tone with.
 * @param {import("../types.js").EarthtoneOptions} options Optional overrides for customising interpolation and easing functions.
 * @returns {ColorToken | Array<ColorToken>}
 * @example
 *
 * import { earthtone } from 'huetiful-js'


console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]

 */
function earthtone(
	baseColor: ColorToken,
	options: EarthtoneOptions
): ColorToken | Array<ColorToken> {
	let { num, earthtones, colorspace, kind, closed } = options || {};
	baseColor = token(baseColor);

	earthtones = or(earthtones, 'dark');
	const earthtoneSamples = {
		'light-gray': '#e5e5e5',
		silver: '#f5f5f5',
		sand: '#c2b2a4',
		tupe: '#a79e8a',
		mahogany: '#958c7c',
		'brick-red': '#7d7065',
		clay: '#6a5c52',
		cocoa: '#584a3e',
		'dark-brown': '#473b31',
		dark: '#352a21'
	};

	const currentEarthtone = earthtoneSamples[earthtones.toLowerCase()];

	// Get the channels to be lerped for each color
	// The t values will be similar. For each color at the point tx,ty allocate the values to each respective channel

	return interpolator([currentEarthtone, baseColor], {
		colorspace: colorspace,
		num: num,
		closed: closed,
		kind: kind,
		token: options?.token
	});
}

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
function scheme(
	baseColor: ColorToken = { l: 8, c: 40, h: 87, mode: 'lch' },
	options: SchemeOptions = {}
): Collection {
	let { colorspace, kind, easingFn } = options || {};
	// @ts-ignore
	kind = or(kind, 'analogous');
	colorspace = or(colorspace, 'lch');
	// @ts-ignore
	baseColor = token(baseColor, { targetMode: colorspace, kind: 'obj' });

	// // extremums
	const [lowMin, lowMax, highMin, highMax] = [0.05, 0.495, 0.5, 0.995],
		generateSteps = (stops, step) => {
			const res = [];

			for (let [k, v] of entries(samples(stops))) {
				v = adjustHue(
					(baseColor['h'] + step) * (v * or(easingFn, easingSmoothstep)(v))
				);

				res[k] =
					rand(v * lowMax, v * lowMin) + rand(v * highMax, v * highMin) / 2;
			}
			return res;
		},
		PALETTE_TYPES = {
			analogous: generateSteps(3, 12),
			triadic: generateSteps(3, 120),
			tetradic: generateSteps(4, 90),
			complimentary: generateSteps(2, 180)
		},
		callback = (kind) => {
			// // For each step return a  random value between lowMin && lowMax multipied by highMin && highMax and 0.9 of the step

			// // The map for steps to obtain the targeted palettes

			const [lightnessChan, chromaChan] = ['l', 'c'].map((a) =>
					mcchn(a, colorspace, false)
				),
				palettes = [];

			for (const [idx, step] of entries(PALETTE_TYPES[kind])) {
				palettes[idx] = token(
					{
						[lightnessChan]: baseColor[lightnessChan],
						[chromaChan]: baseColor[chromaChan],
						h: adjustHue(baseColor['h'] + step),
						mode: colorspace
					},
					options?.token
				);
			}
			palettes.shift();
			return palettes;
		};

	return factorIterator(kind, callback, keys(PALETTE_TYPES));
}

export { pair, discover, hueshift, pastel, earthtone, scheme, interpolator };

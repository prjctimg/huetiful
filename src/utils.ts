/* eslint-disable no-ternary */
import hueTempMap from './color-maps/samples/hueTemperature.js';
import {
  adjustHue,
  customConcat,
  exprParser,
  floorCeil,
  inRange,
  lt,
  mlchn,
  max,
  rand
} from './helpers.js';

import { tailwindColors } from './colors.js';

import { color2hex, ucsConverter } from './converters.js';
import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  filterGrayscale,
  interpolate,
  wcagLuminance,
  modeRgb,
  useMode,
  modeLch,
  converter,
  wcagContrast,
  nearest,
  differenceHyab,
  formatHex,
  easingSmootherstep
} from 'culori/fn';
import 'culori/css';
import {
  ColorToken,
  HueColorSpaces,
  Factor,
  Order,
  callback,
  HueFamily,
  DeficiencyType,
  UniformColorSpaces
} from './types.js';

import { mcchn, sortedArr, or } from './helpers.js';
import _rnges from './color-maps/samples/modeRanges.js';

/**
 *
  Gets the hue family which a a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 * @param color The color to query its shade or hue family.
 * @returns The name of the hue family for example red or green.
 * @example
 * 
 * import { getHueFamily } from 'huetiful-js'


console.log(getHueFamily("#310000"))
// red
 */
function getHueFamily(color: ColorToken): HueFamily {
  var [nearestKey, nearestDiff] = ['', Infinity];
  for (let [idx, value] of Object.entries(hueTempMap)) {
    var [hueVals, currentHue, difference] = [
      customConcat(value),
      getChannel(`lch.h`)(color),
      Math.abs(max(hueVals) - currentHue)
    ];
    if (lt(difference, nearestDiff)) {
      nearestKey = idx;
      nearestDiff = difference;
    }
  }

  return (nearestKey as HueFamily) || null;
}

function lightnessPredicate(colorspace) {
  return getChannel(`${mlchn(colorspace)}`);
}

function temperaturePredicate(factor: number, temp: 'warm' | 'cool'): boolean {
  return Object.keys(hueTempMap).some((val) =>
    inRange(
      floorCeil(factor),
      hueTempMap[val][temp][0],
      hueTempMap[val][temp][1]
    )
  );
}

/**
 * 
 *  Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 * @example
 * 
 * import { isCool } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]



 */
function isCool(color: ColorToken): boolean {
  // First we need to get the hue value which we'll pass to the predicate

  return temperaturePredicate(getChannel('lch.h')(color), 'cool');
}

/**
 * 
 *  Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 * @example import { isWarm } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];



console.log(isWarm(sample[2]));
//true

console.log(map(sample, isWarm));


// [ false, true,  false]

 */
function isWarm(color: ColorToken): boolean {
  return temperaturePredicate(getChannel('lch.h')(color), 'cool');
}

//// Global predicates used by utils such as getNearestHue
function contrastPredicate(color) {
  return (against) => getContrast(color, against);
}

function huePredicate(colorSpace: string) {
  return (color: ColorToken) => getChannel(`${or(colorSpace, 'jch')}.h`)(color);
}
function chromaPredicate(colorspace) {
  return (color: ColorToken) => getChannel(mcchn(colorspace))(color);
}

// The baseFunc for getting specifified factor extremums
function baseFunc(
  factor: Factor,
  collection: ColorToken[] | object,
  cb: callback,
  order?: Order,
  colorObj?: boolean
) {
  const result: Array<{ factor: number; name: ColorToken }> | number =
    sortedArr(
      factor,
      cb,
      order as Order,
      true
    )(collection).filter((el) => el[factor] !== undefined);

  return (colorObj && result[0]) || result[0][factor];
}

/**
 * 
 *  Gets the smallest contrast value from the passed in colors compared against a sample color.
 * @param collection The array or object of colors to query the color with the smallest contrast value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false.
 * @param mode THe mode colorspace to retrieve the contrast value from.
 * @returns The smallest contrast value in the colors passed in or a custom object.
 * @example 
 * 
 * import { getNearestContrast } from 'huetiful-js'
 * 
console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
 */
function getNearestContrast(
  collection: ColorToken[] | object,
  against: ColorToken,
  colorObj?: boolean
) {
  const factor: Factor = 'contrast';
  return baseFunc(
    factor,
    collection,
    contrastPredicate(against),
    'asc',
    colorObj
  );
}

/**
 *
 *  Gets the largest contrast value from the passed in colors compared against a sample color.
 * @param collection The array or object of colors to query the color with the largest contrast value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (contrast) and name of the color as keys. Default is false.
 * @param mode THe mode colorspace to retrieve the contrast value from.
 * @returns The largest contrast value in the colors passed in or a custom object.
 * @example 
 * 
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }

 */

function getFarthestContrast(
  collection: ColorToken[] | object,
  against: ColorToken,
  colorObj?: boolean
): number | { factor: number; name: ColorToken } {
  const factor: Factor = 'contrast';
  return baseFunc(
    factor,
    collection,
    contrastPredicate(against),
    'desc',
    colorObj
  );
}

/**
 *
 *  Gets the smallest chroma/saturation value from the passed in colors.
 * @param collection The array or object of colors to query the color with the smallest chroma/saturation value.
 * @param colorspace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false.
 * @returns The smallest chroma/saturation value in the colors passed in or a custom object.
 * @example
 * 
 * import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
 */
function getNearestChroma(
  collection: ColorToken[] | object,
  colorspace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: ColorToken } {
  const factor: Factor = 'saturation';
  return baseFunc(
    factor,
    collection,
    chromaPredicate(colorspace),
    'asc',
    colorObj
  );
}

/**
 *
 *  Gets the largest saturation value from the passed in colors.
 * @param colors The array or object of colors to query the color with the largest saturation value.
 * @param colorspace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false.
 * @returns The largest saturation value in the colors passed in or a custom object.
 * @example 
 * 
 * import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
 */
function getFarthestChroma(
  collection: ColorToken[] | object,
  colorspace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: ColorToken } {
  const factor: Factor = 'chroma';
  return baseFunc(
    factor,
    collection,
    chromaPredicate(colorspace),
    'desc',
    colorObj
  );
}

/**
 *
 *  Gets the smallest hue value from the passed in colors.
 * @param colors The array or object of colors to query the color with the smallest hue value.
 * @param colorspace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The smallest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
 */
function getNearestHue(
  collection: ColorToken[] | object,
  colorspace?: HueColorSpaces | string,
  colorObj = false
): number | { factor: number; color: ColorToken } {
  const factor: Factor = 'hue';
  return baseFunc(
    factor,
    collection,
    huePredicate(colorspace),
    'asc',
    colorObj
  );
}

/**
 *
 *  Gets the largest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the largest hue value.
 * @param colorspace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The largest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
 */
function getFarthestHue(
  collection: ColorToken[] | object,
  colorspace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: ColorToken } {
  const factor: Factor = 'hue';
  return baseFunc(
    factor,
    collection,
    huePredicate(colorspace),
    'desc',
    colorObj
  );
}

/**
 * 
 *  Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.
 * @param color The color to retrieve its complimentary hue.
 * @param colorObj Optional boolean whether to return an object with the result color hue family or just the result color. Default is false.
 * @returns An object with the hue family and complimentary color as keys.
 * @example
 *import { getComplimentaryHue } from "huetiful-js";
 *
 * 
console.log(getComplimentaryHue("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
 */
function getComplimentaryHue(
  color: ColorToken,
  colorspace?: HueColorSpaces,
  colorObj = false
): { hue: string; color: ColorToken } | ColorToken {
  const modeChannel = `${or(colorspace, 'lch')}.h`;

  const complementaryHue: number = adjustHue(
    getChannel(modeChannel)(color) + 180 * rand(0.965, 1)
  );

  const result: ColorToken | { hue: string; color: ColorToken } =
    (complementaryHue && {
      hue: getHueFamily(complementaryHue),
      color: color2hex(setChannel(modeChannel)(color, complementaryHue))
    }) || { hue: 'gray', color: color };

  return (colorObj && result) || result['color'];
}

/**
 * 
 *  Sets the value for the specified channel in a color.
 * @param  color Any recognizable color token.
 * @param  mc The mode and channel to work with. For example 'rgb.b'.
 * @param  value The value to set on the queried channel. Also supports expressions as strings e.g set('lch.c)("#fc23a1","*0.5")
 * @returns color The mutated color.
 * 
 * @example
 * 
 * import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
 */

function setChannel(mc: string) {
  return (color: ColorToken, value: number | string): ColorToken => {
    const [mode, channel] = mc.split('.');
    // @ts-ignore
    const src: ColorToken = converter(mode)(color2hex(color));

    if (channel) {
      if (typeof value === 'number') {
        src[channel] = value;
      } else if (typeof value === 'string') {
        exprParser(src, channel, value);
      } else {
        throw new Error(`unsupported value for setChannel`);
      }

      return src;
    } else {
      throw new Error(`unknown channel ${channel} in mode ${mode}`);
    }
  };
}

/**
 * 
 *  Gets the  value specifified channel on the color.
 * @param mc The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.
 * @param color The color being queried.
 * @returns value The value of the queried channel.
 * @example
 * 
 * import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 * */
function getChannel(mc: string) {
  return (color: ColorToken): number => {
    const [mode, channel] = mc.split('.');
    // @ts-ignore
    const src = converter(mode)(color2hex(color));

    if (channel) {
      return src[channel];
    } else {
      throw Error(`unknown channel ${channel} in mode ${mode}`);
    }
  };
}

/** @alias
 * Gets the luminance value of that color as defined by WCAG.
 * @param color The color to query.
 * @returns value The color's luminance value.
 * @example
 * 
 * import { getLuminance,colors } from 'huetiful-js'

console.log(getLuminance('#a1bd2f'))
// 0.4417749513730954 

console.log(colors('all', '400').map(getLuminance));

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
 */
function getLuminance(color: ColorToken): number {
  return wcagLuminance(color2hex(color));
}

const { abs } = Math;
const toRgb = useMode(modeRgb);
/**
 * 
 *  Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).
 * @param color The color to set luminance
 * @param lum The amount of luminance to set. The value range is normalised between [0,1]
 * @returns The mutated color with the modified properties.
 * @example
 * 
 * import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
 */
function setLuminance(color: ColorToken, lum: number): ColorToken {
  const white = '#ffffff',
    black = '#000000';

  const EPS = 1e-7;
  let MAX_ITER = 20;

  if (lum !== undefined && typeof lum == 'number') {
    (lum == 0 && lum) || black || (lum == 1 && !lum) || white;

    // compute new color using...
    // @ts-ignore
    const cur_lum = wcagLuminance(color);

    color = toRgb(color2hex(color));

    const test = (low: ColorToken, high: ColorToken) => {
      //Must add the overrides object to change parameters like easings, fixups, and the mode to perform the computations in.
      // @ts-ignore
      const mid = interpolate([low, high])(0.5);
      const lm = getLuminance(color);
      // @ts-ignore
      if (abs(lum - lm > EPS) || !MAX_ITER--) {
        // close enough
        return mid;
      }

      if (lm > lum) {
        return test(low, mid);
      } else {
        return test(mid, high);
      }
    };

    let rgb: ColorToken;
    if (cur_lum > lum) {
      rgb = test(black, color);
    } else {
      rgb = test(color, white);
    }
    color = rgb;
  }

  return formatHex(color as string);
}

/**
 * 
 *  Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted
 * @param color The color with the targeted opacity/alpha channel.
 * @param value The value to apply to the opacity channel. The value is between [0,1]
 * @returns color The resulting color. Returns an 8 character hex code.
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

function alpha(color: ColorToken, value?: number | string): number {
  // We never perfom an operation on an undefined color. Defaults to pure black
  color = color || 'black';

  const channel = 'alpha';
  const lch = useMode(modeLch);
  var src: ColorToken = lch(color2hex(color));
  if (typeof value === 'undefined' || null) {
    return src[channel];
  } else if (typeof value === 'number') {
    if (inRange(value, 0, 1)) {
      src[channel] = value;
    } else {
      src[channel] = value / 100;
    }
  } else if (typeof value === 'string') {
    exprParser(src, channel, value);
  }
  // @ts-ignore
  return color2hex(src);
}

/**
 *
 *  Gets the contrast between the passed in colors.
 * @param color
 * @param against
 * @returns The relative luminance of the lightest color.
 * @example
 *
 * import { getContrast } from 'huetiful-js'
 *
 * console.log(getContrast("black", "white"));
 * // 21
 */
function getContrast(color: ColorToken, against: ColorToken): number {
  return wcagContrast(color2hex(color), color2hex(against));
}

/**
 * 
 *  Returns the hue which is biasing the passed in color
 * @param color The color to query its overtone.
 * @returns The name of the overtone hue. If an achromatic color is passed in it return the string gray otherwise if the color has no bias it returns false.
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
function overtone(color: ColorToken): string | boolean {
  var hue = getHueFamily(color);

  // We check if the color can be found in the defined ranges
  return (
    (isAchromatic(color) && 'gray') ||
    (/-/.test(hue) && hue.split('-')[1]) ||
    false
  );
}

/**
 * 
 * Gets the smallest lightness value from the passed in colors.
 * @param collection The array or object of colors to query the color with the smallest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @param mode THe mode colorspace to retrieve the lightness value from.
 * @returns The smallest lightness value in the colors passed in or a custom object.
 * @example
 * 
 * import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, 'lch',true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }

 */
function getNearestLightness(
  collection: ColorToken[] | object,
  colorspace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: ColorToken } {
  // @ts-ignore
  const factor: Factor = 'lightness';
  return baseFunc(
    factor,
    collection,
    lightnessPredicate(colorspace),
    'asc',
    colorObj
  );
}

/**
 * 
 *  Gets the largest lightness value from the passed in colors.
 * @param collection The array or object of colors to query the color with the largest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @param colorspace THe mode colorspace to retrieve the lightness value from.
 * @returns The largest lightness value in the colors passed in or a custom object.
 * @example 
 * 
 * import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, 'lch',true))

// { lightness: 80.94668903360088, name: '#f3bac1' }

 */
function getFarthestLightness(
  collection: ColorToken[] | object,
  colorspace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: ColorToken } {
  // @ts-ignore
  const factor: Factor = 'lightness';
  return baseFunc(
    factor,
    collection,
    lightnessPredicate(colorspace),
    'desc',
    colorObj
  );
}

/**
 * 
 *  Darkens the color by reducing the lightness channel. .
 * @param   color The color to darken.
 * @param value The amount to darken with. The value is expected to be in the range `[0,100]`
 * @param colorspace The mode colorspace to darken the color in. Only uniform colorspaces are supported 
 * @returns color The darkened color as a hex string
 * @example
 * 
 *  import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646

 */
function darken(
  color: ColorToken,
  value: number | string,
  colorspace?: UniformColorSpaces
): string {
  const chn = mlchn(colorspace)[1];
  colorspace = or(colorspace, 'lch') as UniformColorSpaces;
  const src = ucsConverter(colorspace)(color2hex(color));
  // @ts-ignore
  var [l, end] = [src[chn], _rnges[colorspace][chn][0]];

  if (typeof value === 'number' && inRange(value, 0, 100)) {
    // darken by value of the current channel as a percentage

    // @ts-ignore
    src[chn] = l * ((value / 100) * (end * 0.1));
  } else {
    Error(`Darken accepts a number in the range [0,100] but got ${value}`);
  }

  return color2hex(src);
}

/**
 *
 * @param color The color to brighten.
 * @param value The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns
 */
// function brighten(
//   color: ColorToken,
//   value: number | string,
//   colorspace
// ): ColorToken {
//   const src = toLab(color2hex(color));
//   const ch = mlchn(colorspace).split('.')[1];
//   let result = src;
//   if (typeof value == 'number') {
//     result[ch] -= 18 * easingSmootherstep(Math.abs(value) / 100);
//   } else if (typeof value == 'string') {
//     //@ts-ignore
//     result = expressionParser(src, ch, value);
//   }

//   return color2hex(result);
// }

/**
 * 
 *  Checks if a color is achromatic(without hue or simply grayscale).
 * @param color The color to test if it is achromatic or not.
 * @returns boolean Returns true if the color is achromatic else false
 * @example 
 * 
 * import { isAchromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"


isAchromatic('pink')
// false

let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];

console.log(map(sample, isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// Returns true


console.log(map(sample, isAchromatic));


// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = map(samples(12), (c) => formatHex8(f(c)));
console.log(map(grays, isAchromatic));

//
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]

 */
function isAchromatic(color: ColorToken, mode?: HueColorSpaces): boolean {
  // If a color has no lightness then it has no hue so its technically achromatic
  const props = {
    lightness: getChannel(`${mlchn(mode as string)}`)(color),
    chroma: getChannel(`${mcchn(mode as string)}`)(color)
  };

  // Check if the saturation channel is zero or falsy for color spaces with saturation/chroma channel
  // @ts-ignore
  return props['chroma'] && props['lightness'] !== (false || NaN || undefined)
    ? false
    : true;
}

// This module is focused on creating color blind safe palettes that adhere to the minimum contrast requirements

// How can I achieve this ?
// 1. First I pass the color(s) to a color vision deficiency simulation function
// 2. Check if the color has the minimum required contrast as compared to a dark/light mode surface which can optionally be overriden
// 3. Check the min luminance contrast ratio between the color and background.
// 4. Find out which channels do I need to tweak in order to fix up the colors.
// 5. Maybe provide an optional adaptive boolean which returns dark/light mode variant colors of the color blind safe palettes.

// Add reference to articles
// Read more about the minimum accepted values for palette accessibility

/**
 * 
 *  Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.
 * @param deficiencyType The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value.
 * @param color The color to return its deficiency simulated variant.
 * @param severity The intensity of the filter. The exepected value is between [0,1]. For example 0.5
 * @returns The color as its simulated variant as a hexadecimal string.
 * @example
 * 
 * import { colorDeficiency, color2hex } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'. 
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = colorDeficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = colorDeficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
 */
function colorDeficiency(deficiencyType?: DeficiencyType) {
  const baseColorDeficiency = (
    def: 'red' | 'blue' | 'green' | 'monochromacy',
    col: ColorToken,
    sev: number
  ) => {
    let result: ColorToken;
    col = color2hex(col);
    switch (def) {
      case 'blue': // @ts-ignore
        result = filterDeficiencyTrit(sev)(col);
        break;
      case 'red': // @ts-ignore
        result = filterDeficiencyProt(sev)(col);
        break;
      case 'green': // @ts-ignore
        result = filterDeficiencyDeuter(sev)(col);
        break;
      case 'monochromacy':
        result = filterGrayscale(sev, 'lch')(col);
        break;
    }

    return color2hex(result);
  };

  return (color: ColorToken, severity = 1) => {
    // Store the keys of deficiency types
    const deficiencies: string[] = ['red', 'blue', 'green', 'monochromacy'];
    // Cast 'red' as the default parameter
    deficiencyType = or(deficiencyType, 'red') as DeficiencyType;

    if (
      typeof deficiencyType === 'string' &&
      deficiencies.some((el) => el === deficiencyType)
    ) {
      return baseColorDeficiency(deficiencyType, color, severity);
    } else {
      throw Error(
        `Unknown color vision deficiency ${deficiencyType}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`
      );
    }
  };
}

/**
 *
 * @param collection The collection of colors to search for nearest colors
 * @param color The color to use for distance comparison
 * @param num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the differenceHyab metric.
 * @returns An array of colors.
 * @example
 *
 * let cols = colors('all', '500')
 * 
console.log(getNearestColor(cols, 'blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
function getNearestColor(
  collection: ColorToken[] | 'tailwind',
  color: ColorToken,
  num = 1
): ColorToken | ColorToken[] {
  const cb = (collection, color) => {
    //
    return nearest(
      collection as ColorToken[],
      differenceHyab(),
      (color) => color as string
    )(color as string, num);
  };
  let result: ColorToken;

  if (collection === 'tailwind') {
    result = cb(tailwindColors('all'), color);
  } else {
    result = cb(collection, color);
  }

  return result;
}

export {
  darken,
  getNearestColor,
  colorDeficiency,
  isAchromatic,
  alpha,
  getFarthestLightness,
  getNearestLightness,
  overtone,
  getFarthestChroma,
  getNearestChroma,
  setChannel,
  setLuminance,
  getChannel,
  getLuminance,
  getContrast,
  getFarthestContrast,
  getNearestContrast,
  isCool,
  isWarm,
  getHueFamily,
  getComplimentaryHue,
  getFarthestHue,
  getNearestHue
};

/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').FactObject} FactObject
 * @typedef { import('../types/types.js').HueColorSpaces} HueColorSpaces
 * @typedef {import('../types/types.js').InterpolatorOptions} InterpolatorOptions
 * @typedef {import('../types/types.js').UniformColorSpaces} UniformColorSpaces
 * @typedef {import('../types/types.js').TailwindColorFamilies} TailwindColorFamilies
 */

/**
 * @license
 * utils.js - Functions for querying and setting color properties.
Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

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
  rand,
  mcchn,
  or,
  color2hex,
  keys,
  entries,
  min
} from './index.js';

import {
  interpolate,
  wcagLuminance,
  modeRgb,
  useMode,
  modeLch,
  converter,
  wcagContrast,
  formatHex,
  easingSmootherstep as _ess,
  modeLab65,
  formatHex8
} from 'culori/fn';
import 'culori/css';

/**
 * @public
 *
 * Gets the hue family which a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 * @param {ColorToken} color The color to query its shade or hue family.
 * @returns {TailwindColorFamilies} The name of the hue family for example `red` or `blue-green`.
 * @example
 *
 * import { getHueFamily } from 'huetiful-js'


console.log(getHueFamily("#310000"))
// red
 */

function getHueFamily(color) {
  var [nearestKey, nearestDiff] = ['', Infinity];
  for (let [idx, value] of entries(hueTempMap)) {
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

  // @ts-ignore
  return nearestKey;
}

/**
 * @public
 *
 * Returns the complementary hue of the passed in color. The function is internally guarded against achromatic colors.
 * @param {ColorToken} color The color to retrieve its complimentary hue.
 * @param {boolean} colorObj Optional boolean whether to return an object with the result color hue family or just the result color. Default is `false`.
 * @returns {FactObject} An object with the hue family and complimentary color as keys.
 * @example
 *import { getComplimentaryHue } from "huetiful-js";
 *
 *
console.log(getComplimentaryHue("pink",'lch', true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
 */

function getComplimentaryHue(color, colorspace, colorObj = false) {
  const modeChannel = `${or(colorspace, 'lch')}.h`;

  const complementaryHue = adjustHue(
    getChannel(modeChannel)(color) + 180 * rand(0.965, 1)
  );

  const result = (complementaryHue && {
    hue: getHueFamily(complementaryHue),
    // @ts-ignore
    color: color2hex(setChannel(modeChannel)(color, complementaryHue))
  }) || { hue: 'gray', color: color };
  // @ts-ignore
  return (colorObj && result) || result['color'];
}

/**
 * @public
 *
 *  Sets the value for the specified channel in a color.
 * @param {string} mc The mode and channel to work with. For example 'rgb.b'.
 * @example
 *
 * import { setChannel } from 'huetiful-js'

let myColor = setChannel('lch.h')('green',10)

console.log(getChannel('lch.h')(myColor))
// 10
 */

function setChannel(mc) {
  /**
   * @public
   * @param {number|string} value The value to set on the queried channel. Also supports expressions as strings e.g set('lch.c)("#fc23a1","*0.5")
   * @param {ColorToken} color Any recognizable color token.
   * @returns {ColorToken} The mutated color. Preserves the `ColorToken` type of the passed in color.

   */
  return (color, value) => {
    const [mode, channel] = mc.split('.');

    // @ts-ignore
    const src = converter(mode)(color2hex(color));

    if (channel) {
      if (typeof value === 'number') {
        // @ts-ignore
        src[channel] = value;
      } else if (typeof value === 'string') {
        // @ts-ignore
        exprParser(src, channel, value);
      } else {
        throw new Error(`unsupported value for setChannel`);
      }

      // @ts-ignore
      return src;
    } else {
      throw new Error(`unknown channel ${channel} in mode ${mode}`);
    }
  };
}

/**
 * @public
 *
 *  Gets the  value specifified channel on the color.
 * @param {string} mc The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.
 * @example
 *
 * import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 * */

function getChannel(mc) {
  /**
   * @public
   *
   * @param {ColorToken} color The color being queried.
   * @returns {number} The value of the queried channel.
   */
  return (color) => {
    const [mode, channel] = (mc || color[0] || color['mode']).split('.');
    // @ts-ignore
    // @ts-ignore
    var res, src;
    if (Array.isArray(color) || typeof color === 'object') {
      if (mode === (color[0] || color['mode'])) {
        if (Array.isArray(color)) {
          res = color[mode.indexOf(channel)];
        } else {
          res = color[channel];
        }
      }
    } else {
      // @ts-ignore
      res = converter(mode)(color2hex(color))[channel];
    }
    return res;
  };
}
/**
 * @public
 * Gets the luminance value of that color as defined by WCAG.
 * @param {ColorToken} color The color to query.
 * @returns {number} The color's luminance value.
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

function getLuminance(color) {
  return wcagLuminance(color2hex(color));
}

/**
 * @public
 *
 *  Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).
 * @param {ColorToken} color The color to set luminance
 * @param lum The amount of luminance to set. The value range is normalised between [0,1]
 * @returns { ColorToken} The mutated color with the modified properties. Preserves the `ColorToken` type of the passed in color.
 * @example
 *
 * import { setLuminance, getLuminance } from 'huetiful-js'

let myColor = setLuminance('#a1bd2f', 0.5)

console.log(getLuminance(myColor))
// 0.4999999136285792
 */

function setLuminance(color, lum) {
  const white = '#ffffff',
    black = '#000000';
  const toRgb = useMode(modeRgb);
  const EPS = 1e-7;
  let MAX_ITER = 20;

  if (lum !== undefined && typeof lum == 'number') {
    (lum == 0 && lum) || black || (lum == 1 && !lum) || white;

    // compute new color using...
    // @ts-ignore
    color = toRgb(color2hex(color));
    // @ts-ignore
    const cur_lum = wcagLuminance(color);

    const test = (low, high) => {
      //Must add the overrides object to change parameters like easings, fixups, and the mode to perform the computations in.

      const mid = interpolate([low, high])(0.5);
      const lm = getLuminance(color);

      // @ts-ignore
      if (Math.abs(lum - lm > EPS) || !MAX_ITER--) {
        // close enough
        return mid;
      }

      if (lm > lum) {
        return test(low, mid);
      } else {
        return test(mid, high);
      }
    };

    let rgb;
    if (cur_lum > lum) {
      rgb = test(black, color);
    } else {
      rgb = test(color, white);
    }
    color = rgb;
  }
  // @ts-ignore
  return formatHex(color);
}
/**
 * @public
 *
 * Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted
 * @param {ColorToken} color The color with the targeted opacity/alpha channel.
 * @param {number | string} value The value to apply to the opacity channel. The value is between [0,1]
 * @returns {number|ColorToken} Preserves the `ColorToken` type of the pased in color.
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

function alpha(color = '#000', value) {
  // We never perform an operation on an undefined color. Defaults to pure black
  const channel = 'alpha';
  const lch = useMode(modeLch);
  var src = lch(color2hex(color));
  if (typeof value === 'undefined' || null) {
    // @ts-ignore
    return src[channel];
  } else if (typeof value === 'number') {
    if (inRange(value, 0, 1)) {
      // @ts-ignore
      src[channel] = value;
    } else {
      // @ts-ignore
      src[channel] = value / 100;
    }
  } else if (typeof value === 'string') {
    // @ts-ignore
    exprParser(src, channel, value);
  }

  // @ts-ignore
  return color2hex(src);
}

/**
 * @public
 *
 *  Gets the contrast between the passed in colors.
 * @param {ColorToken} color
 * @param against
 * @returns {number} The relative luminance of the lightest color.
 * @example
 *
 * import { getContrast } from 'huetiful-js'
 *
 * console.log(getContrast("black", "white"));
 * // 21
 */

function getContrast(color, against) {
  return wcagContrast(color2hex(color), color2hex(against));
}

/**
 * @public
 *
 * Returns the hue which is biasing the passed in color
 * @param {ColorToken} color The color to query its overtone.
 * @returns {string} The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.
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

function overtone(color) {
  var hue = getHueFamily(color);

  // We check if the color can be found in the defined ranges
  // @ts-ignore
  return (
    (isAchromatic(color) && 'gray') ||
    // @ts-ignore
    (/-/.test(hue) && hue.split('-')[1]) ||
    false
  );
}

function temperaturePredicate(fctr, temp) {
  return keys(hueTempMap).some((val) =>
    inRange(floorCeil(fctr), hueTempMap[val][temp][0], hueTempMap[val][temp][1])
  );
}
/**
 * @public
 *
 *  Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param {ColorToken} color The color to check the temperature.
 * @returns {boolean} True if the color is cool else false.
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

function isCool(color) {
  // First we need to get the hue value which we'll pass to the predicate

  return temperaturePredicate(getChannel('lch.h')(color), 'cool');
}

/**
 * @public
 * 
 * Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.
 * @param {ColorToken} color The color to check the temperature.
 * @returns {boolean} True if the color is warm else false.
 * @example 
 * import { isWarm } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];



console.log(isWarm(sample[2]));
//true

console.log(sample.map(isWarm));


// [ false, true,  false]

 */

function isWarm(color) {
  return temperaturePredicate(getChannel('lch.h')(color), 'cool');
}

/**
 * @public
 *
 * Darkens the color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.
 * @param {ColorToken} color The color to darken.
 * @param {number} amount The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`.
 * @returns {ColorToken} The darkened color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 *  import { darken } from "huetiful-js";
console.log(darken('blue', 0.3, 'lch'));
//#464646

 */

function darken(color = '#fff', amount = 0.3) {
  var src = useMode(modeLab65)(color2hex(color));
  if (typeof amount === 'number') {
    // darken by value of the current channel as a percentage

    var l = 'l';

    // @ts-ignore
    src[l] = max([0, src[l] - amount]);

    // @ts-ignore
  }

  // @ts-ignore
  return formatHex8(src);
}

/**
 * @public
 *
 * The inverse of `darken`. Brightens the passed in color by increasing the lightness channel by `amount` of the channel. For example `0.3` means increase the lightness by `0.3` of the channel's current value.
 * @param {ColorToken} color The color to brighten.
 * @param {number} amount The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is `0.5`.
 * @returns {ColorToken} The brightened color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 *  import { brighten } from "huetiful-js";
 * 
console.log(brighten('blue', 0.3, 'lch'));
//#464646

 */

function brighten(color, amount = 0.4) {
  var src = useMode(modeLab65)(color2hex(color));
  if (typeof amount === 'number') {
    // darken by value of the current channel as a percentage

    var l = 'l';

    // @ts-ignore
    src[l] = min([100, (src[l] += amount)]);
  }
  // @ts-ignore
  return formatHex8(src);
}

/**
 * @public
 *
 * Checks if a color is achromatic (without hue or simply grayscale).
 * @param {ColorToken} color The color to test if it is achromatic or not.
 * @param {HueColorSpaces} [colorspace='lch'] The colorspace to use when checking if the `color` is grayscale or not.
 * @returns {boolean} True if the color is achromatic else false.
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

console.log(sample.map(isAchromatic));

// [false, false, false,false]

isAchromatic('gray')
// Returns true



// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(isAchromatic));

//
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]

 */

function isAchromatic(color, colorspace) {
  // If a color has no lightness then it has no hue so its technically not achromatic since white and black are not grayscale
  var props = {
    lightness: getChannel(`${mlchn(colorspace)}`)(color),
    chroma: getChannel(`${mcchn(colorspace)}`)(color)
  };

  // Check if the saturation channel is zero or falsy for color spaces with saturation/chroma channel

  return props['chroma'] &&
    props['lightness'] !==
      (false || NaN || undefined || void 0 || 0 || Infinity || -Infinity)
    ? false
    : true;
}

export {
  brighten,
  darken,
  isAchromatic,
  alpha,
  overtone,
  setChannel,
  setLuminance,
  getChannel,
  getLuminance,
  getContrast,
  isCool,
  isWarm,
  getHueFamily,
  getComplimentaryHue
};

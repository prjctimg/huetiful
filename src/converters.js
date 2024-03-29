/**
 * @typedef {import('../types/types.d').Colorspaces} Colorspaces
 *
 *
 *
 */

/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').HueColorSpaces} HueColorSpaces
 * @typedef {import('../types/types.js').FactObject} FactObject
 * @typedef {import('../types/types.js').InterpolatorOptions} InterpolatorOptions
 * @typedef {import('../types/types.js').SchemeType} SchemeType
 * @typedef {import('../types/types.js').UniformColorSpaces} UniformColorSpaces
 */

import {
  useMode,
  modeRgb,
  converter,
  modeDlch,
  modeJch,
  modeLch,
  modeLch65,
  modeLchuv,
  modeOklch,
  formatHex,
  formatHex8,
  colorsNamed
} from 'culori/fn';

import { gmchn, keys } from './helpers.js';

/**
 * Converter function with mode definitions for uniform color spaces. The function is curried to return a converter in the passed colospace.
 * @param {UniformColorSpaces} colorspace The mode converter to return.
 * @returns The converter function in the mode colorspace.
 */
function ucsConverter(colorspace = 'lch') {
  const ucsDefinitions = {
    jch: modeJch,
    lch: modeLch,
    dlch: modeDlch,
    lchuv: modeLchuv,
    oklch: modeOklch,
    lch65: modeLch65
  };

  return useMode(ucsDefinitions[colorspace.toLowerCase()]);
}

/**
 *
  Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), any `number` from 0 to 166,777,215 and arrays in the form of `[string,number,number,number,numer?]` the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.
 * @param {ColorToken} color The color to convert to hexadecimal. Works on color objects and CSS named colors.
 * @returns {string} A hexadecimal representation of the passed in color.
 * @example
 * import { color2hex } from "huetiful-js";
 *
console.log(color2hex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(color2hex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
 */

function color2hex(color) {
  // if its of type string and not a CSS named color then its probably hex so we don't convert it
  var c;
  switch (typeof color) {
    case 'boolean':
      c = (color === true && '#ffffff') || '#000000';

      break;
    case 'number':
      // @ts-ignore
      c = num2color(color);

      break;
    // @ts-ignore
    case 'object' && color.length:
      // @ts-ignore
      c = ((color.length === 5 && formatHex8) || formatHex)(
        // @ts-ignore
        tuple2object(color)
      );

      break;
    case 'string':
      c =
        // @ts-ignore
        (!keys(colorsNamed).some((el) => el === color.toLowerCase()) &&
          color) ||
        // @ts-ignore
        formatHex8(color);
      break;
    default:
      c = ((color['alpha'] < 1 && formatHex8) || formatHex)(
        // @ts-ignore
        tuple2object(color2tuple(color))
      );
  }

  return c;
}

/**
 *
 *  Returns the color equivalent of any `number` between 0 and 16,777,215 as a hexadecimal string or color object if the `colorspace` is specified.
 * @param num The number to convert.
 * @returns color A color object or hex string.
 * @example
 *
 * import { num2color } from 'huetiful-js'

console.log(num2color(900))
// #000384
 */

function num2color(num, colorspace) {
  // Ported from chroma-js with slight modifications
  colorspace = (colorspace && colorspace.toLowerCase()) || colorspace;
  if (typeof num === 'number' && num >= 0 && num <= 0xffffff) {
    const r = num >> 16;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;

    const _rgb = {
      r: r / 255,
      g: g / 255,
      b: b / 255,
      mode: 'lrgb'
    };

    // @ts-ignore
    return (colorspace && useMode(colorspace)(_rgb)) || formatHex(_rgb);
  } else {
    throw Error('unknown num color: ' + num);
  }
}

/**
 *
 *  Returns the numerical equivalent of a color.
 * @param color The color to convert to its numerical equivalent.
 * @returns value The numerical value of the color from 0 to 16,777,215.
 * @example
 *
 * import { color2num } from 'huetiful-js'

console.log(color2num("b2c3f1"))
// 11715569
 */

function color2num(color) {
  const rgb = useMode(modeRgb)(color2hex(color));
  // @ts-ignore
  return ((255 * rgb['r']) << 16) + ((255 * rgb['g']) << 8) + 255 * rgb['b'];
}

/**
 *
 *  Converts the temperature value (in Kelvins) to a color as a hexadecimal string else a color object in the mode `colorspace`.
 * @param {number} kelvin The number of Kelvins. From 0 to 30,000 .
 * @param {Colorspaces} colorspace Optional parameter to return a color object in the mode `colorspace` hexadecimal string. Default is `'rgb'`
 * @returns color The color as a hexadecimal  or plain color object.
 * @example
 *
 * import { temp2color } from 'huetiful-js'

console.log(temp2color(2542))
// #ffa44a
 */

function temp2color(kelvin = 1000, colorspace) {
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
  const result = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    mode: 'rgb'
  };

  return (
    // @ts-ignore
    (colorspace && useMode(colorspace.toLowerCase())(result)) ||
    // @ts-ignore
    formatHex(result)
  );
}

/**
 *
 *  Returns an array of channel values in the mode color space. It does not mutate the values of the passed in color token.
 * @param color Expects the color to be in hexadecimal represantation or as a plain color object. Use a converter suitable for the color token type you're expecting to convert it to hexadecimal format e.g `num2color` if you want tonevrt the number to supported color token.
 * @param colorspace The mode color space to return channel values for. You can omit this parameter if you pass in a color object with the `mode` property.
 * @param omitMode optional boolean to exclude the mode from the final tuple. Default is `false`.
 * @returns An array of channel values with the colorspace as first element and the alpha channel as the fifth element in the array if its explicitly defined in the passed in color.
 * @example
 *
 * import { color2tuple } from 'huetiful-js'
 * 
let rgbColor = {
  r: 0.4,
  g: 0.3,
  b: 0.7,
  mode: "rgb",
};

console.log(color2tuple(rgbColor));

// [ 'rgb', 0.4, 0.3, 0.7 ]

 */

function color2tuple(color, colorspace = 'rgb', omitMode = false) {
  colorspace = colorspace || color['mode'];
  var o;

  if (Array.isArray(color)) {
    o = tuple2object(color, colorspace);
  } else if (typeof color === 'number') {
    o = num2color(color, colorspace);
  } else {
    // @ts-ignore
    o = converter(colorspace)(color);
  }

  var arr = keys(o)
    .filter((ch) => ch !== 'mode')
    .map((key) => o[key]);

  // dont add mode string if true
  omitMode ? arr : arr.unshift(colorspace);

  return arr;
}

/**
 *
 * @param {*} arr An array with the channels values and optional `colorspace` to specify the mode where such values
 * @param {*} targetMode
 * @returns
 */
function tuple2object(arr = [], targetMode) {
  if (arr) {
    // get  the needed vars
    var [m, tm, cb] = [
      arr[0],
      targetMode,
      (x, y, m) => ({
        [x[0]]: y[0],
        [x[1]]: y[1],
        [x[2]]: y[2],
        mode: m,
        alpha: y[3] || 1
      })
    ];

    if ((m || tm) === ('rgb' || 'lrgb') && arr.some((ch) => 1 < Math.abs(ch))) {
      arr = ((typeof arr[0] == 'string' && arr.slice(1)) || arr).map(
        (ch) => ch / 255
      );
    }

    if (m && tm) {
      // @ts-ignore
      return converter(tm)(cb(gmchn(m).split(''), arr.slice(1), tm));
    } else if ((!m && tm) || (m && !tm)) {
      return cb(
        (m || tm).split(''),
        typeof arr[0] !== 'string' ? arr : arr.slice(1),
        m || tm
      );
    }
  }
}
export {
  tuple2object,
  num2color,
  color2num,
  temp2color,
  color2tuple,
  ucsConverter,
  color2hex
};

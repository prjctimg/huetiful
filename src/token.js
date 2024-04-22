/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef {import('../types/types.js').FactObject} FactObject
 * @typedef {import('../types/types.js').ColorObject} ColorObject
 * @typedef {import('../types/types.js').ColorTuple} ColorTuple
 
 * @typedef {import('../types/types.js').Colorspaces} Colorspaces
 *
 */
import {
  colorsNamed,
  useMode,
  modeJch,
  modeJab,
  modeLch65,
  modeLrgb,
  modeLab65,
  modeOklch,
  formatHex,
  formatHex8
} from 'culori/fn';

import { gmchn, keys } from './fp/index.js';

/**
 * Returns a converter function that parses any recognizable color to the specified `kind` of `ColorToken` type.
 *
 * It supports the following types as options:
 *
 * * `'array'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.
 *
 * * `'number'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215` in hexadecimal, binary, octal or decimal exponential notations if specified in the `numberType` parameter in the ``options` object.
 *
 * * `'hex'` - Parses the color token to its hexadecimal string equivalent. If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.
 *
 * * `'object'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.
 *
 * @param {'number'|'array'|'object'|'hex'} kind
 * @param options Optional overrides to customize `kind` specific parameters.
 * @returns {(color:ColorToken)=>ColorToken} The color token in the specified `kind`.
 */
function token(
  kind,
  options = {
    /**
     * @type {boolean}
     * If the `kind` is set to `'array'` it will remove the mode string from color tuple. Default is `false`.
     */
    omitMode: false,
    /**
     * @type {'literal'|'hex'|'octal'|'binary'|'decimal'}
     * The type of number to return. Only valid if kind is set to `'number'`. Default is `'literal'`
     */
    numberType: 'literal',

    /**
     * @type {Colorspaces}
     *  The mode in which the channel values are valid in. It is used for color arrays if they have the `colorspace` string ommitted. Default is `'rgb'`.
     */
    sourceMode: 'rgb',

    /**
     * @type {Colorspaces}
     * The colorspace in which to return the color object or array in. Default is `'lch'`.
     */
    targetMode: 'lch'
  }
) {
  var defs = {
    rgb: modeLrgb,

    lch65: modeLch65,
    lab65: modeLab65,

    oklch: modeOklch
  };

  var { sourceMode, targetMode, omitMode } = options;

  /**
   *  Returns the color equivalent of any `number` between 0 and 16,777,215 as a hexadecimal string or color object if the `colorspace` is specified.
   * @param {number} num The number to convert.
   * @param {Colorspaces} colorspace The optional colorspace to return the resulting color in. The color token is returned as a plain color object.
   * @returns color A color object or hex string.
   */

  function num2c(num, colorspace) {
    // Ported from chroma-js with slight modifications
    // @ts-ignore
    colorspace = (colorspace && colorspace.toLowerCase()) || colorspace;
    if (typeof num === 'number' && num >= 0 && num <= 0xffffff) {
      const r = num >> 16;
      const g = (num >> 8) & 0xff;
      const b = num & 0xff;

      const u = {
        r: r / 255,
        g: g / 255,
        b: b / 255,
        mode: 'lrgb'
      };

      // @ts-ignore
      return (colorspace && useMode(defs[colorspace])(u)) || formatHex(u);
    } else {
      throw Error('unknown num color: ' + num);
    }
  }
  /**
   * Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), any `number` from 0 to 166,777,215 and arrays in the form of `[string,number,number,number,number?]` the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.
   * @param {ColorToken} color The color to convert to hexadecimal. Works on color objects and CSS named colors.
   * @returns {string} A hexadecimal representation of the passed in color.
   */

  function c2hx(color) {
    // if its of type string and not a CSS named color then its probably hex so we don't convert it
    var c;
    switch (typeof color) {
      case 'boolean':
        c = (color === true && '#ffffff') || '#000000';

        break;
      case 'number':
        // @ts-ignore
        c = num2c(color);

        break;
      // @ts-ignore
      case 'object' && color?.length:
        // @ts-ignore
        c = ((color.length === 5 && formatHex8) || formatHex)(
          // @ts-ignore
          arr2obj(color)
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
        // @ts-ignore
        c = ((color?.alpha < 1 && formatHex8) || formatHex)(
          // @ts-ignore
          arr2obj(c2arr(color, targetMode))
        );
    }
    // @ts-ignore
    return c;
  }

  /**
   * Returns the numerical equivalent of a color.
   * @param {ColorToken} color The color to convert to its numerical equivalent.
   * @returns {number} value The numerical value of the color from 0 to 16,777,215.
   */

  function c2num(color) {
    const _ = useMode(defs['rgb'])(c2hx(color));
    // @ts-ignore
    return ((255 * _['r']) << 16) + ((255 * _['g']) << 8) + 255 * _['b'];
  }

  /**
   *  Returns an array of channel values in the mode color space. It does not mutate the values of the passed in color token.
   * @param {string|ColorObject} color Expects the color to be in hexadecimal represantation or as a plain color object. Use a converter suitable for the color token type you're expecting to convert it to hexadecimal format e.g `num2color` if you want to convert the number to a supported  color token.
   * @param {Colorspaces} [colorspace='lch'] The mode color space to return channel values for. You can omit this parameter if you pass in a color object with the `mode` property.
   * @param {boolean} [omitMode=false] optional boolean to exclude the mode from the final tuple. Default is `false`.
   * @returns An array of channel values with the colorspace as first element and the alpha channel as the fifth element in the array if its explicitly defined in the passed in color.
   */

  function c2arr(color, colorspace, omitMode) {
    // @ts-ignore
    colorspace = colorspace || color?.mode || 'lch';
    var o;

    if (Array.isArray(color)) {
      o = arr2obj(color);
    } else if (typeof color === 'number') {
      o = num2c(color, colorspace);
    } else if (typeof color === 'string' || typeof color === 'object') {
      // @ts-ignore
      o = useMode(defs[colorspace])(color);
    }

    var arr = keys(o)
      .filter((ch) => ch !== 'mode')
      .map((ch) => o[ch]);

    // dont add mode string if true
    omitMode ? arr : arr.unshift(colorspace);

    return arr;
  }
  /**
   *
   * @param {ColorTuple} arr An array with the channels values and optional `colorspace` to specify the mode where such values are valid.
   * @returns {ColorObject} The color object.
   */

  function arr2obj(arr = []) {
    if (arr) {
      // get  the needed vars
      var [m, tm, cb] = [
        typeof arr[0] !== 'number' ? arr[0] : sourceMode,
        targetMode,
        (x, y, m) => ({
          [x[0]]: y[0],
          [x[1]]: y[1],
          [x[2]]: y[2],
          mode: m,
          alpha: y[3] || 1
        })
      ];

      // @ts-ignore
      if (
        (m || tm) === ('rgb' || 'lrgb') &&
        // @ts-ignore
        arr.some((ch) => 1 < Math.abs(ch))
      ) {
        arr = ((typeof arr[0] == 'string' && arr.slice(1)) || arr).map(
          // @ts-ignore
          (ch) => ch / 255
        );
      }

      if (m && tm) {
        // @ts-ignore
        return useMode(defs[tm])(cb(gmchn(m).split(''), arr.slice(1), tm));
      } else if ((!m && tm) || (m && !tm)) {
        return cb(
          (m || tm).split(''),
          typeof arr[0] !== 'string' ? arr : arr.slice(1),
          m || tm
        );
      }
    }
  }

  /**
   * @param {ColorToken} color The color to parse to the specified `'kind'`.
   * @returns {ColorToken}
   */
  return (color) => {
    var p;
    switch (kind) {
      case 'array':
        // @ts-ignore
        p = c2arr(color, targetMode, omitMode);
        break;
      case 'hex':
        p = c2hx(color);
        break;
      case 'number':
        p = c2num(color);
        break;
      case 'object':
        // @ts-ignore
        p = arr2obj(c2arr(color));
        break;

      default:
        p = c2hx(color);
        break;
    }

    return p;
  };
}

export { token };

import type {
  Colorspaces,
  ColorToken,
  ColorTuple,
  UniformColorSpaces
} from './types';

/**
 * Converter function with mode definitions for uniform color spaces. The function is curried to return a converter in the passed colospace.
 * @param colorspace The mode converter to return.
 * @returns The converter function in the mode colorspace.
 */
declare function ucsConverter(
  colorspace: UniformColorSpaces
): import('culori/src/converter').ConvertFn<any>;

/**
 * Returns the passed in color as a plain object in the specified Ok colorspace.
 * @param colorspace The Ok colorspace to use.
 * @param color The color to convert. Expects colors to be in the formats supported by Culori because it is not guarded by `color2hex` which extends supported color formats.
 * @see https://culorijs.org/color-spaces/
 */
declare function toOk(
  colorspace?: UniformColorSpaces
): (color: string) => object;

/**
 * Returns the passed in color as a plain object in the specified CIE colorspace.
 * @param colorspace The CIE colorspace to use.
 * @param color The color to convert. Expects colors to be in the formats supported by Culori because it is not guarded by `color2hex` which extends supported color formats.
 * @see https://culorijs.org/color-spaces/
 */
declare function toCIE(
  colorspace?: 'lab' | 'lch' | 'lch65' | 'lab65' | 'xyz50' | 'xyz65'
): (color: string) => object;

/**
 * Returns the passed in color as a plain object in the specified DIN99 colorspace.
 * @param colorspace The DIN99 colorspace variant (either cartesian/dlab or polar/dlch) to use.
 * @param color The color to convert. Expects colors to be in the formats supported by Culori because it is not guarded by `color2hex` which extends supported color formats.
 * @see https://culorijs.org/color-spaces/
 */
declare function toDIN99(
  colorspace?: 'dlch' | 'dlab'
): (color: string) => object;

/**
 * Returns the passed in color as a plain object in the Jch colorspace.
 * @param color The color to convert. Expects colors to be in the formats supported by Culori because it is not guarded by `color2hex` which extends supported color formats.
 * @see https://culorijs.org/color-spaces/ For expected ranges and channels.
 */
declare function toJch(color: string): object;

/**
 * Returns the passed in color as a plain object in the Jab colorspace.
 * @param color The color to convert. Expects colors to be in the formats supported by Culori because it is not guarded by `color2hex` which extends supported color formats.
 * @see https://culorijs.org/color-spaces/ For expected ranges and channels.
 */
declare function toJab(color: string): object;

/**
 *
  Converts a wide range of color tokens which are color objects, and CSS named colors  (for example 'red'), any `number` from 0 to 166,777,215 and arrays in the form of `[string,number,number,number,numer?]` the first element in the array being the mode color space and the fourth optional number element as the opacity value to hexadecimal.
 * @param color The color to convert to hexadecimal. Works on color objects and CSS named colors.
 * @returns A hexadecimal representation of the passed in color.
 * @example
 * import { color2hex } from "huetiful-js";
 *
console.log(color2hex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(color2hex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
 */
declare function color2hex(color: ColorToken): string;
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
declare function num2color(
  num: number,
  colorspace?: Colorspaces
): string | object;
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
declare function color2num(color: ColorToken): number;
/**
 *
 *  Converts the temperature value (in Kelvins) to a color as a hexadecimal string else a color object in the mode `colorspace`.
 * @param kelvin The number of Kelvins. From 0 to 30,000 .
 * @param colorspace Optional parameter to return a color object in the mode `colorspace` hexadecimal string. Default is `'rgb'`
 * @returns color The color as a hexadecimal  or plain color object.
 * @example
 *
 * import { temp2color } from 'huetiful-js'

console.log(temp2color(2542))
// #ffa44a
 */
declare function temp2color(
  kelvin: number,
  colorspace?: Colorspaces
): string | object;
/**
 *
 *  Returns an array of channel values in the mode color space. It does not mutate the values of the passed in color token.
 * @param color Expects the color to be in hexadecimal represantation or as a plain color object. Use a converter suitable for the color token type you're expecting to convert it to hexadecimal format e.g `num2color` if you want tonevrt the number to supported color token.
 * @param colorspace The mode color space to return channel values for. You can omit this parameter if you pass in a color object with the `mode` property.
 * @param omitMode optional boolean to exclude the mode from the final tuple. Default is `false`.
 * @returns An array of channel values with the colorspace as first element and the alpha channel as the fifth element in the array if its explicitly defined in the passed in color.
 * @example
 *
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
declare function color2tuple(
  color: string | object,
  colorspace?: Colorspaces,
  omitMode?: boolean
): Array<number> | [string, number, number, number, number?];

export {
  num2color,
  color2num,
  temp2color,
  color2tuple,
  ucsConverter,
  color2hex,
  toCIE,
  toDIN99,
  toOk,
  toJab,
  toJch
};

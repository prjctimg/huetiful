export type ColorToken = import('./types.js').Collection;
export type Collection = import('./types.js').Collection;
export type FactObject = import('./types.js').FactObject;
export type ColorObject = import('./types.js').ColorObject;
export type ColorTuple = import('./types.js').ColorTuple;
export type TokenOptions = import('./types.js').TokenOptions;
export type Colorspaces = import('./types.js').Colorspaces;
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
export function token(color: ColorToken, options?: TokenOptions): ColorToken;

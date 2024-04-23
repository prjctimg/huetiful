export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type FactObject = import('../types/types.js').FactObject;
export type ColorObject = import('../types/types.js').ColorObject;
export type ColorTuple = import('../types/types.js').ColorTuple;
export type Colorspaces = import('../types/types.js').Colorspaces;
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
export function token(kind: 'number' | 'array' | 'object' | 'hex', options?: {
    /**
     * @type {boolean}
     * If the `kind` is set to `'array'` it will remove the mode string from color tuple. Default is `false`.
     */
    omitMode: boolean;
    /**
     * @type {'literal'|'hex'|'octal'|'binary'|'decimal'}
     * The type of number to return. Only valid if kind is set to `'number'`. Default is `'literal'`
     */
    numberType: 'literal' | 'hex' | 'octal' | 'binary' | 'decimal';
    /**
     * @type {Colorspaces}
     *  The mode in which the channel values are valid in. It is used for color arrays if they have the `colorspace` string ommitted. Default is `'rgb'`.
     */
    sourceMode: Colorspaces;
    /**
     * @type {Colorspaces}
     * The colorspace in which to return the color object or array in. Default is `'lch'`.
     */
    targetMode: Colorspaces;
}): (color: ColorToken) => ColorToken;

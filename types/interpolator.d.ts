export type ColorToken = import('./types.js').Collection;
export type Collection = import('./types.js').Collection;
export type InterpolatorOptions = import('./types.js').InterpolatorOptions;
/**
 * Interpolates the passed in colors and returns a collection of colors from the interpolation.
 *
 * Some things to keep in mind when creating color scales using this function:
 *
 * * To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object.
 * * If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
 * * If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.
 *
 * @param {Collection} baseColors The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray.
 * @param {InterpolatorOptions} options Optional overrides.
 * @returns {Array<string|ColorToken> | string|ColorToken}
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
export function interpolator(baseColors?: Collection, options?: InterpolatorOptions): Array<string | ColorToken> | string | ColorToken;

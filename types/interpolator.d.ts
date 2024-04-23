export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type InterpolatorOptions = import('../types/types.js').InterpolatorOptions;
/**
 *  Returns a spline interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.
 * @param {Collection} colors The collection of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result or making all the colors in the resulting interpolation gray.
 * @param {InterpolatorOptions} options Optional overrides.
 * @returns A collection of colors resulting from the interpolation.
 *
 * @example
 *
 * import { interpolator } from 'huetiful-js';

console.log(interpolator(['pink', 'blue'], 'lch', 8));

// [
  '#ffc0cb', '#ff9ebe',
  '#f97bbb', '#ed57bf',
  '#d830c9', '#b800d9',
  '#8700eb', '#0000ff'
]
 *
 */
export function interpolator(colors?: Collection, options?: InterpolatorOptions): any;

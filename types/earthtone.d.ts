export type Collection = import('../types/types.js').Collection;
export type ColorToken = import('../types/types.js').ColorToken;
/**
 *  Creates a color scale between an earthtone and any color token using spline interpolators on the channels.
 * @param {ColorToken} color The color to interpolate an earth tone with.
 * @param options Optional overrides for customising interpolation and easing functions.
 * @returns {ColorToken | Array<ColorToken>} Collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the passed in color.
 * @example
 *
 * import { earthtone } from 'huetiful-js'


console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]

 */
export function earthtone(color: ColorToken, options?: {
    colorspace: string;
    method: string;
    closed: boolean;
}): ColorToken | Array<ColorToken>;

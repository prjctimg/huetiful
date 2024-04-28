export type Collection = import('./types.js').Collection;
export type ColorToken = import('./types.js').Collection;
/**
 * Creates a color scale between an earth tone and any color token using spline interpolation.
 * @param {ColorToken} baseColor The color to interpolate an earth tone with.
 * @param {import('./wrappers.js').EarthtoneOptions} options Optional overrides for customising interpolation and easing functions.
 * @returns {string | Array<string>}
 * @example
 *
 * import { earthtone } from 'huetiful-js'


console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]

 */
export function earthtone(baseColor: ColorToken, options: import('./wrappers.js').EarthtoneOptions): string | Array<string>;

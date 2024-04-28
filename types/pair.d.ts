export type ColorToken = import('./types.js').Collection;
export type Collection = import('./types.js').Collection;
export type PairedSchemeOptions = import('./types.js').PairedSchemeOptions;
/**
 * Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
 * The colors are then spline interpolated via white or black.
 *
 * A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.
 * @param {ColorToken} baseColor The color to return a paired color scheme from.
 * @param {PairedSchemeOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns {Array<string|ColorToken>|string|ColorToken}
 * @example
 *
 * import { pair } from 'huetiful-js'

console.log(pair("green",{hueStep:6,num:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
export function pair(baseColor: ColorToken, options: PairedSchemeOptions): Array<string | ColorToken> | string | ColorToken;

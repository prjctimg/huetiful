export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type PairedSchemeOptions = import('../types/types.js').PairedSchemeOptions;
/**
 *@public Creates a palette that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.
 * @param {ColorToken} color The color to return a paired color scheme from.
 * @param {PairedSchemeOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns An array containing the paired scheme.Preserves the `ColorToken` type of the passed in color.
 * @example
 *
 * import { pair } from 'huetiful-js'

console.log(pair("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
export function pair(color: ColorToken, options: PairedSchemeOptions): string | number | boolean | import("../types/types.js").ColorObject | import("../types/types.js").ColorToken[];

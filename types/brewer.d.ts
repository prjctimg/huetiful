export type ColorToken = import('./types.js').Collection;
export type Collection = import('./types.js').Collection;
export type QualitativeScheme = import('./types.js').QualitativeScheme;
export type SequentialScheme = import('./types.js').SequentialScheme;
export type DivergingScheme = import('./types.js').DivergingScheme;
/**
 *  A wrapper function for ColorBrewer's map of diverging color schemes.
 * @param {DivergingScheme} scheme The name of the scheme.
 * @returns {Collection} The collection of colors from the specified `scheme`.
 * @example
 *
 * import { diverging } from 'huetiful-js'



console.log(diverging("Spectral"))
//[
  '#7fc97f', '#beaed4',
  '#fdc086', '#ffff99',
  '#386cb0', '#f0027f',
  '#bf5b17', '#666666'
]
 */
export function diverging(scheme: DivergingScheme): Collection;
/**
 *  A wrapper function for ColorBrewer's map of qualitative color schemes.
 * @param {QualitativeScheme} scheme The name of the scheme
 * @returns {Collection} The collection of colors from the specified `scheme`.
 * @example
 *
 * import { qualitative } from 'huetiful-js'


console.log(qualitative("Accent"))
// [
  '#7fc97f', '#beaed4',
  '#fdc086', '#ffff99',
  '#386cb0', '#f0027f',
  '#bf5b17', '#666666'
]

 */
export function qualitative(scheme: QualitativeScheme): Collection;
/**
 *  A wrapper function for ColorBrewer's map of sequential color schemes.
 * @param {SequentialScheme} scheme The name of the scheme.
 * @returns {Collection|ColorToken}  A collection of colors in the specified colorspace. The default is hex if `colorspace` is `undefined.`
 * @example
 *
 * import { sequential } from 'huetiful-js


console.log(sequential("OrRd"))

// [
  '#fff7ec', '#fee8c8',
  '#fdd49e', '#fdbb84',
  '#fc8d59', '#ef6548',
  '#d7301f', '#b30000',
  '#7f0000'
]



 */
export function sequential(scheme: SequentialScheme): Collection | ColorToken;

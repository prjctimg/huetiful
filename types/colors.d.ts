import type {
  SequentialScheme,
  DivergingScheme,
  QualitativeScheme,
  TailwindColorFamilies,
  ScaleValues,
  ColorDistanceOptions,
  ColorToken
} from './types';
/**
 * Returns the nearest color(s) in a collection against
 * @param collection The collection of colors to search for nearest colors
 * @param against The color to use for distance comparison.
 * @param num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
 * @returns An cllection of colors.
 * @example
 *
 * let cols = colors('all', '500')
 *
console.log(getNearestColor(cols, 'blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
declare function getNearestColor(
  collection: ColorToken[] | 'tailwind',
  against: ColorToken,
  num?: number
): ColorToken | Array<ColorToken> | Map<any, ColorToken>;

/**
 *
 *  A wrapper function for ColorBrewer's map of sequential color schemes.
 * @param scheme The name of the scheme
 * @returns An array of colors in hex represantation.
 * @example
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
declare function sequential(scheme: SequentialScheme): ColorToken[];
/**
 *
 *  A wrapper function for ColorBrewer's map of diverging color schemes.
 * @param scheme The name of the scheme.
 * @returns An array of colors in hex represantation.
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
declare function diverging(scheme: DivergingScheme): ColorToken[];
/**
 *
 *  A wrapper function for ColorBrewer's map of qualitative color schemes.
 * @param scheme The name of the scheme
 * @returns An array of colors in hex represantation.
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
declare function qualitative(scheme: QualitativeScheme): ColorToken[];

/**
 *
 *  Returns TailwindCSS color value(s) of the specified `shade` from the default palette. If invoked with no parameters, it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,
 * @param  val The tone value of the shade. Values are in incrementals of 100. Both numeric (100) and its string equivalent ('100') are valid.
 * @returns color A hex string value or array of hex strings.
 * @example
 *
 * import { tailwindColors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = tailwindColors("red");
console.log(red());
// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]


console.log(red(100));
// '#fee2e2'

console.log(red('900'));
// '#7f1d1d'


 *
 */
declare function tailwindColors(
  shade: TailwindColorFamilies | 'all',
  value?: ScaleValues
): string | Array<string>;
export { getNearestColor, diverging, qualitative, sequential, tailwindColors };

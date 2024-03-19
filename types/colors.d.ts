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
 * Returns the color as a simulation of the passed in `defeciencyType` of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.
 * @param deficiencyType The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is `'red'` when the defeciency parameter is undefined or any falsy value.
 * @param color The color to return its simulated variant.
 * @param severity The intensity of the filter. The exepected value is between [0,1]. For example 0.5
 * @returns The color as its simulated variant. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 * import { colorDeficiency, color2hex } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = colorDeficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = colorDeficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
 */
declare function colorDeficiency(
  deficiencyType?: DeficiencyType
): (color: ColorToken, severity?: number) => string;

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
export {
  colorDeficiency,
  getNearestColor,
  diverging,
  qualitative,
  sequential,
  tailwindColors
};

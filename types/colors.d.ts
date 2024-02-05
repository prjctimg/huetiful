import type { SequentialScheme, DivergingScheme, QualitativeScheme, TailwindColorFamilies, ScaleValues, ColorDistanceOptions, ColorToken, HueColorSpaces, InterpolatorOptions, ColorOptions, HueFamily, HueShiftOptions, PairedSchemeOptions } from './types';
import { interpolatorConfig } from './helpers';
declare class ColorArray {
    constructor(colors: ColorToken[]);
    /**
     *
     *  Returns a spline based interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result.
     * @param colorspace The colorspace to perform the interpolation in. Prefer uniform color spaces for better results such as Lch or Jch.
     * @param kind The type of the spline interpolation method. Default is basis.
     * @param closed Optional parameter to return the `closed` variant of the `kind` of interpolation method which can be useful for cyclical color scales. Default is false
     * @param options Optional channel specific overrides.
     * @returns A hexadecimal representation of the resultant color.
     */
    interpolateSpline(colorspace?: HueColorSpaces, samples?: number, kind?: 'natural' | 'monotone' | 'basis', closed?: boolean, options?: InterpolatorOptions): ColorToken[];
    /**
   *
   *  Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
   * @param schemeType (Optional) The palette type you want to return.
   * @returns An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
   * @example
   *
   * import { discoverPalettes } from 'huetiful-js'
  
  let sample = [
    "#ffff00",
    "#00ffdc",
    "#00ff78",
    "#00c000",
    "#007e00",
    "#164100",
    "#720000",
    "#600000",
    "#4e0000",
    "#3e0000",
    "#310000",
  ]
  
  console.log(load(sample).discoverPalettes(sample, "tetradic").output())
  // [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
   */
    discoverPalettes(schemeType?: 'analogous' | 'triadic' | 'tetradic' | 'complementary'): ColorToken[] | object;
    /**
   *
   *  Gets the largest hue value from the passed in colors.
   * @param colorSpace The mode color space to perform the computation in.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
   * @returns The largest hue value in the colors passed in or a custom object.
   * @example
   *
   * import { getFarthestHue } from 'huetiful-js'
  let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']
  
  console.log(load(output).getFarthestHue('lch'))
  // 273.54920266436477
   */
    getFarthestHue(colorSpace?: HueColorSpaces, colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    /**
   *
   *  Gets the smallest hue value from the passed in colors.
   * @param colors The array of colors to query the color with the smallest hue value.
   * @param colorSpace The mode color space to perform the computation in.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
   * @returns The smallest hue value in the colors passed in or a custom object.
   * @example
   *
   * import { getNearestHue } from 'huetiful-js'
  
  let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']
  
  console.log(load(sample).getNearestHue('lch'))
  // 12.462831644544274
   */
    getNearestHue(colorSpace?: HueColorSpaces, colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    /**
   *
   *  Gets the smallest lightness value from the passed in colors.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
   * @returns The smallest lightness value in the colors passed in or a custom object.
   * @example
   *
   * import { minLightness } from 'huetiful-js'
  
  let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]
  
  console.log(load(sample).getNearestLightness('lch', true))
  
  // { lightness: 72.61647882089876, name: '#a1bd2f' }
  
   */
    getNearestLightness(colorspace?: HueColorSpaces, colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    /**
   *
   *  Gets the largest lightness value from the passed in colors.
   * @param colors The array of colors to query the color with the largest lightness value.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
   * @returns The largest lightness value in the colors passed in or a custom object.
   * @example
   *
   * import { maxLightness } from 'huetiful-js'
  
  let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]
  
  console.log(load(sample).getFarthestLightness('lch', true))
  
  // { lightness: 80.94668903360088, name: '#f3bac1' }
  
   */
    getFarthestLightness(colorspace?: HueColorSpaces, colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    /**
   *
   *  Returns an array of colors in the specified saturation range. The range is normalised to [0,1].
   * @param  startSaturation The minimum end of the saturation range.
   * @param  endSaturation The maximum end of the saturation range.
   * @param mode The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do.
   * @returns Array of filtered colors.
   * @example
   * import { filterByContrast } from 'huetiful-js'
  
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  console.log(filterByContrast(sample, 'green', '>=3'))
  // [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
   */
    filterBySaturation(startSaturation?: number, endSaturation?: number, mode?: HueColorSpaces): ColorArray;
    /**
   *
   *  Returns an array of colors in the specified lightness range. The range is between 0 and 100.
   * @param  startLightness The minimum end of the lightness range.
   * @param  endLightness The maximum end of the lightness range.
   * @returns Array of filtered colors.
   * @example
   *
   * import { filterByLightness } from 'huetiful-js'
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  filterByLightness(sample, 20, 80)
  
  // [ '#00c000', '#007e00', '#164100', '#720000' ]
   */
    filterByLightness(startLightness?: number, endLightness?: number): ColorArray;
    /**
   *
   *  Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.
   * @param  startDistance The minimum end of the distance range.
   * @param  endDistance The maximum end of the distance range.
   * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
   * @param mode The color space to calculate the distance in .
   * @returns Array of filtered colors.
   * @example
   * import { filterByDistance } from 'huetiful-js'
  
  let sample = [
    "#ffff00",
    "#00ffdc",
    "#00ff78",
    "#00c000",
    "#007e00",
    "#164100",
    "#720000",
    "#600000",
  ]
  
  console.log(filterByDistance(sample, "yellow", 0.1))
  // [ '#ffff00' ]
   */
    filterByDistance(against: ColorToken, startDistance?: number, endDistance?: number): ColorArray;
    /**
     *
   *
   *  Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
   * @param  startContrast The minimum end of the contrast range.
   * @param  endContrast The maximum end of the contrast range.
   * @returns Array of filtered colors.
   *
   * @example
   *
   * import { filterByContrast } from 'huetiful-js'
  
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  console.log(filterByContrast(sample, 'green', '>=3'))
  // [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
   */
    filterByContrast(against: ColorToken, startContrast?: number, endContrast?: number): ColorArray;
    /**
   *
   *  Returns colors in the specified hue ranges between 0 to 360.
   * @param  startHue The minimum end of the hue range.
   * @param  endHue The maximum end of the hue range.
   * @returns  Array of the filtered colors.
   * @example
   * let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  filterByHue(sample, 20, 80)
  
  // [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
   */
    filterByHue(startHue?: number, endHue?: number): ColorArray;
    /**
   *
   *  Returns an array of colors in the specified luminance range. The range is normalised to [0,1].
   * @param  startLuminance The minimum end of the luminance range.
   * @param  endLuminance The maximum end of the luminance range.
   * @returns Array of filtered colors.
   * @example
   *
   * import { filterByLuminance } from 'huetiful-js'
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  filterByLuminance(sample, 0.4, 0.9)
  
  // [ '#00ffdc', '#00ff78' ]
   */
    filterByLuminance(startLuminance?: number, endLuminance?: number): ColorArray;
    /**
   *
   *  Sorts colors according to their lightness.
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns An array of the sorted color values.
   * @example
   * import { sortByLightness } from "huetiful-js";
  
  let sample = [
    "#00ffdc",
    "#00ff78",
    "#00c000",
    "#007e00",
    "#164100",
    "#ffff00",
    "#310000",
    "#3e0000",
    "#4e0000",
    "#600000",
    "#720000",
  ]
  
  sortByLightness(sample)
  
  // [
    '#310000', '#3e0000',
    '#4e0000', '#600000',
    '#720000', '#164100',
    '#007e00', '#00c000',
    '#00ff78', '#00ffdc',
    '#ffff00'
  ]
  
  
  sortByLightness(sample,'desc')
  
  // [
    '#ffff00', '#00ffdc',
    '#00ff78', '#00c000',
    '#007e00', '#164100',
    '#720000', '#600000',
    '#4e0000', '#3e0000',
    '#310000'
  ]
  
   */
    sortByLightness(order?: 'asc' | 'desc'): ColorArray;
    /**
   *
   *  Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist
   * @param against The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array.
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
   * @param mode The color space to calculate the distance in . The default is the cylindrical variant of the CIELUV colorspace ('lchuv')
   * @returns An array of the sorted color values.
   * @example
   * import { sortByDistance } from 'huetiful-js'
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(
    sortByDistance(sample, 'yellow', 'asc', {
      mode: 'lch',
    })
  )
  
  // [ 'brown', 'red', 'green', 'purple' ]
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(
    sortByDistance(sample, 'yellow', 'asc', {
      mode: 'lch',
    })
  )
  
  // [ 'green', 'brown', 'red', 'purple' ]
   */
    sortByDistance(against: ColorToken, order?: 'asc' | 'desc', options?: ColorDistanceOptions): ColorArray;
    /**
   *
   *  Sorts colors according to the relative brightness as defined by WCAG definition.
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns An array of the sorted color values.
   * @example
   * import { sortByLuminance } from "huetiful-js";
  let sample = [
    "#00ffdc",
    "#00ff78",
    "#00c000",
    "#007e00",
    "#164100",
    "#ffff00",
    "#310000",
    "#3e0000",
    "#4e0000",
    "#600000",
    "#720000",
  ];
  
  
  
  let sorted = sortByLuminance(sample)
  console.log(sorted)
  // [
    '#310000', '#3e0000',
    '#4e0000', '#600000',
    '#720000', '#164100',
    '#007e00', '#00c000',
    '#00ff78', '#00ffdc',
    '#ffff00'
  ]
  
  let sortedDescending = sortByLuminance(sample, "desc");
  console.log(sortedDescending)
  // [
    '#ffff00', '#00ffdc',
    '#00ff78', '#00c000',
    '#007e00', '#164100',
    '#720000', '#600000',
    '#4e0000', '#3e0000',
    '#310000'
  ]
  
   
   */
    sortByLuminance(order?: 'asc' | 'desc'): ColorArray;
    /**
   *
   *  Sorts colors according to their saturation.
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @param mode The mode color space to compute the saturation value in. The default is jch .
   * @returns An array of the sorted color values.
   * @example
   * import { sortBySaturation } from "huetiful-js";
  let sample = [
    "#00ffdc",
    "#00ff78",
    "#00c000",
    "#007e00",
    "#164100",
    "#ffff00",
    "#310000",
    "#3e0000",
    "#4e0000",
    "#600000",
    "#720000",
  ];
  
  let sorted = sortBySaturation(sample);
  console.log(sorted);
  
  // [
    '#310000', '#3e0000',
    '#164100', '#4e0000',
    '#600000', '#720000',
    '#00ffdc', '#007e00',
    '#00ff78', '#00c000',
    '#ffff00'
  ]
  
  let sortedDescending = sortBySaturation(sample,'desc');
  console.log(sortedDescending)
  // [
    '#ffff00', '#00c000',
    '#00ff78', '#007e00',
    '#00ffdc', '#720000',
    '#600000', '#4e0000',
    '#164100', '#3e0000',
    '#310000'
  ]
  
   */
    sortBySaturation(order: 'asc' | 'desc', mode?: HueColorSpaces): ColorArray;
    /**
   *
   *  Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns An array of the sorted color values.
   * @example
   *
   * import { sortByContrast } from 'huetiful-js'
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(sortByContrast(sample, 'yellow'))
  // [ 'red', 'green', 'brown', 'purple' ]
  
  console.log(sortByContrast(sample, 'yellow', 'desc'))
  // [ 'purple', 'brown', 'green', 'red' ]
   
   */
    sortByContrast(against: ColorToken, order?: 'asc' | 'desc'): ColorArray;
    /**
   *
   *  Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported
   * @param order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @param colorspace The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.
  * @returns  An array of the sorted color values.
   * @example
   * let sample = [
    "#00ffdc",
    "#00ff78",
    "#00c000",
    "#007e00",
    "#164100",
    "#ffff00",
    "#310000",
    "#3e0000",
    "#4e0000",
    "#600000",
    "#720000",
  ];
  
  
  let sorted = sortByHue(sample);
  console.log(sorted)
  // [
    '#310000', '#3e0000',
    '#4e0000', '#600000',
    '#720000', '#ffff00',
    '#164100', '#00c000',
    '#007e00', '#00ff78',
    '#00ffdc'
  ]
  
  let sortedDescending = sortByHue(sample,'desc');
  console.log(sortedDescending)
  // [
    '#00ffdc', '#00ff78',
    '#007e00', '#00c000',
    '#164100', '#ffff00',
    '#720000', '#600000',
    '#4e0000', '#3e0000',
    '#310000'
  ]
  
   */
    sortByHue(order: 'asc' | 'desc', colorspace: HueColorSpaces): ColorArray;
    /**
     * @method
     * @returns Returns the result value from the chain.
     */
    output(): ColorToken;
}
/**
 * @class
 *  A class that takes an array of colors and exposes all the utilities that handle collections of colors as methods. The methods can be chained as long as `this` being returned can be iterated on. Works like Array object.
 * @param colors An array of colors to chain the array methods on. Every element in the array will be parsed as a color token.
 */
declare function load(colors: ColorToken[]): ColorArray;
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
 *  A wrapper function for the default Tailwind palette. If called with both parameters it return the hex code at the specified shade and value. Else, if called with the shade parameter as "all" it will return all colors from the shades in the palette map at the specified value (if value is undefined it will default to "500"). When called with the shade parameter only it will return all the colors from 100 to 900 of the specified shade.
 * @param shade Any shade in the default TailwindCSS palette e.g amber,blue.
 * @param value Any value from 100 to 900 in increments of 100 e.g "200".
 * @returns color Returns a hex code string or array of hex codes depending on how the function is called.
 * @example
 *
 * import { colors } from "huetiful-js";

let all300 = colors("all", 300);

console.log(all300)
//[
  '#cbd5e1', '#d1d5db', '#d4d4d8',
  '#d4d4d4', '#d6d3d1', '#fca5a5',
  '#fdba74', '#fcd34d', '#fde047',
  '#bef264', '#86efac', '#6ee7b7',
  '#5eead4', '#7dd3fc', '#93c5fd',
  '#c4b5fd', '#d8b4fe', '#f0abfc',
  '#f9a8d4', '#fda4af'
]

let red = colors("red");
console.log(red);

// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]

let red100 = colors("red", 100);

console.log(red100)
// #fee2e2
 */
declare function colors(shade: TailwindColorFamilies | 'all', value?: ScaleValues): ColorToken | ColorToken[];
/**
 *
 *  Wrapper function that returns TailwindCSS color value(s) of the specified shade. If invoked with no parameters it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,
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
declare function tailwindColors(shade: TailwindColorFamilies): (val?: ScaleValues) => string | string[];
declare class Color {
    constructor(c: ColorToken, options?: ColorOptions);
    alpha(amount?: number | string): Color | number;
    getChannel(channel: string): number;
    setChannel(modeChannel: string, value: number | string): Color;
    via(origin: ColorToken, t?: number, options?: typeof interpolatorConfig): string;
    color2hex(): Color;
    pastel(): Color;
    pairedScheme(options?: PairedSchemeOptions): ColorArray;
    hueShift(options?: HueShiftOptions): ColorArray;
    getComplimentaryHue(mode?: HueColorSpaces, colorObj?: boolean): {
        hue: HueFamily;
        color: ColorToken;
    } | ColorToken;
    contrast(against: 'lightMode' | 'darkMode' | Color): number;
    luminance(amount?: number): number;
    output(): any;
    saturation(amount?: string | number): any;
    isAchromatic(): boolean;
    isWarm(): boolean;
    isCool(): boolean;
    /**
   *
   *  Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.
   * @param deficiencyType The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value.
   * @see For a deep dive on  color vision deficiency go to
   * @param color The color to return its deficiency simulated variant.
   * @param severity The intensity of the filter. The exepected value is between [0,1]. For example 0.5
   * @returns The color as its simulated variant as a hexadecimal string.
   * @example
   *
   * import { colorDeficiency, toHex } from 'huetiful-js'
  
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
    deficiency(deficiencyType?: 'red' | 'blue' | 'green' | 'monochromacy', severity?: number): ColorToken;
    getFarthestHue(colors: ColorToken[], colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    getNearestHue(colors: ColorToken[], colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    getNearestChroma(colors: ColorToken[], colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    getNearestLightness(colors: ColorToken[], colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    getFarthestChroma(colors: ColorToken[], colorObj?: boolean): number | {
        factor: number;
        color: ColorToken;
    };
    getFarthestLightness(colors: ColorToken[], colorObj?: boolean): number | {
        factor: number;
        color: ColorToken; /**
         * @method
         * @returns Returns the result value from the chain.
         */
    };
    ovetone(): string | boolean;
    getHueFamily(): HueFamily;
    scheme(scheme: 'analogous' | 'triadic' | 'tetradic' | 'complementary', easingFunc?: (t: number) => number): ColorToken[] | ColorArray;
}
/**
 * Wrapper function over the Color class that returns a new Color method chain.
 * @param color The color token to bind.
 * @returns A new Color class with all the utilities that take a single color as the first parameter bound to its prototype.
 */
declare function color(color: ColorToken): Color;
export { diverging, qualitative, sequential, colors, tailwindColors, ColorArray, load, Color, color };

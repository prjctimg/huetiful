import type {
  ColorToken,
  HueColorSpaces,
  InterpolatorOptions,
  ColorOptions,
  HueFamily,
  HueShiftOptions,
  PairedSchemeOptions,
  EarthtoneOptions
} from './types';

/**
 * @experimental
 * @internal
 * Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument).
 * @example
 * import { ColorArray } from 'huetiful-js'
 *
let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
 */
declare class ColorArray {
  /**
   *
   * @param colors The collection of colors to bind.
   */
  constructor(colors: ArrayLike<ColorToken> | object | Map<any, ColorToken>);
  /**
     *
     *  Returns a spline interpolator function with customizable interpolation methods (by selecting the `kind` of ), with support for generating color scales for cyclic data (by setting the `closed` parameter to `true`) and optional channel specific overrides.
     * @param colorspace The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.
     * @param kind The type of the spline interpolation method. Default is basis.
     * @param closed Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false
     * @param options Optional channel specific overrides.
     * @returns The discovered palettes.Respects the `ColorToken` type of the first color in the array of colors to interpolate
     *
     * @example
     *
     * import { load } from 'huetiful-js';
  
  console.log(load(['pink', 'blue']).interpolateSpline('lch', 8));
  
  // [
    '#ffc0cb', '#ff9ebe',
    '#f97bbb', '#ed57bf',
    '#d830c9', '#b800d9',
    '#8700eb', '#0000ff'
  ]
     *
     */
  interpolateSpline(
    colorspace?: HueColorSpaces,
    samples?: number,
    kind?: 'natural' | 'monotone' | 'basis',
    closed?: boolean,
    options?: Pick<InterpolatorOptions, 'hueFixup' | 'easingFn'>
  ): Array<ColorToken> | Map<any, ColorToken> | object;
  /**
   *
   * Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
   * @param schemeType (Optional) The palette type you want to return.
   * @returns A `Set` of colors if the `schemeType` parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
   * @example
   *
   * import { load } from 'huetiful-js'
  
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
  discoverPalettes(
    schemeType?: 'analogous' | 'triadic' | 'tetradic' | 'complementary'
  ): Array<ColorToken> | Map<any, ColorToken> | object;
  /**
   *
   * Returns the largest hue angle from the bound collection.
   * @param colorspace The mode color space to perform the computation in.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
   * @returns The largest hue value in the colors passed in or a custom object.
   * @example
   *
   * import { load } from 'huetiful-js'
  let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']
  
  console.log(load(sample).getFarthestHue('lch'))
  // 273.54920266436477
   */
  getFarthestHue(
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };
  /**
   *
   *  Returns the smallest `hue` angle from the bound `collection`.
   * @param colorspace The mode color space to perform the computation in.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
   * @returns The smallest hue value in the colors passed in or a custom object.
   * @example
   *
   * import { load } from 'huetiful-js'
  
  let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']
  
  console.log(load(sample).getNearestHue('lch'))
  // 12.462831644544274
   */
  getNearestHue(
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };
  /**
   *
   *  Returns the smallest `lightness` value from the bound collection.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
   * @returns The smallest `lightness` value in the colors passed in or a custom object.
   * @example
   *
   * import { getNeareastLightness } from 'huetiful-js'
  
  let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]
  
  console.log(load(sample).getNearestLightness('lch', true))
  
  // { lightness: 72.61647882089876, name: '#a1bd2f' }
  
   */
  getNearestLightness(
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };
  /**
 * Gets the smallest `luminance` difference between the colors in the bound collection `against` a comparison color.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`luminance`) and name of the color as keys. Default is `false`.
 * @returns The smallest `luminance` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 * import { load } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
 
      console.log(load(sample).getNearestLuminanceFrom(against));
 
// 0.00831940271523677
 
 */
  getNearestLuminanceFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };

  /**
 * Gets the largest `luminance` difference between the colors in the bound collection `against` a comparison color.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @returns The largest lightness difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 * import { getFarthestLuminanceFrom } from 'huetiful-js'
 * var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 10, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = { l: 5, c: 5, h: 5, mode: 'lch' };
 
console.log(getFarthestLuminanceFrom(sample, against));
// 0.10644205738623673
 
 
 */
  getFarthestLuminanceFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };

  /**
   *
   *  Returns the largest `lightness` value from the bound collection.
   * @param colorObj Optional boolean that makes the function return a custom object with `factor` (lightness) and `name` of the color as keys. Default is false.
   * @returns The largest `lightness` value in the colors passed in or a custom object.
   * @example
   *
   * import { load } from 'huetiful-js'
  
  let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]
  
  console.log(load(sample).getFarthestLightness('lch', true))
  
  // { lightness: 80.94668903360088, name: '#f3bac1' }
  
   */
  getFarthestLightness(
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };
  /**
   *
   * Returns a `collection` of colors in the specified `saturation/chroma` range from the bound collection.
   *
   * The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
   * This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.
   *
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
   *
   * @param  start The minimum end of the `saturation/chroma` range.
   * @param  end The maximum end of the `saturation/chroma` range.
   * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
   * @param colorspace The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do.
   * @returns Collection of filtered colors.
   * @example
   * import { load } from 'huetiful-js'
   *
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
    '#720000'
  ];
  
  console.log(load(sample).filterByChroma(0.1));
  
  // [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]
  
   */
  filterByChroma(
    start?: string | number,
    end?: number,
    colorspace?: Omit<HueColorSpaces, 'hwb'>
  ): ColorArray;
  /**
   *
   *  Returns a `collection` of colors in the specified `lightness` range.
   *
 
 * The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
   * This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.
   *
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
   *
   * @param  start The minimum end of the `lightness` range.
   * @param  end The maximum end of the `lightness` range.
   * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
   * @returns Collection of filtered colors.
   * @example
   *
   * import { load } from 'huetiful-js'
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
  
  load(sample).filterByLightness(20, 80)
  
  // [ '#00c000', '#007e00', '#164100', '#720000' ]
   */
  filterByLightness(start?: number, end?: number): ColorArray;
  /**
   *
   *  Returns colors with the specified distance range from the bound `collection`. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.
   *
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
   * @param  start  The minimum end of the distance range.
   * @param  end The maximum end of the distance range.
   * @returns Collection of filtered colors.
   * @example
   * import { load } from 'huetiful-js'
  
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
  
  console.log(load(sample)filterByDistance("yellow", 0.1))
  // [ '#ffff00' ]
   */
  filterByDistance(
    against: ColorToken,
    start?: string | number,
    end?: number
  ): ColorArray;
  /**
   *
   *
   *  Returns collection of colors within the specified contrast range. The contrast is tested against a comparison (`'against'`) color and the specified contrast ranges.
   *
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
   * @param  start The minimum end of the contrast range. Default is `1`.
   * @param  end The maximum end of the contrast range. The default is `21`.
   * @returns Collection of filtered colors.
   *
   * @example
   *
   * import { load } from 'huetiful-js'
  
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
  
  console.log(load(sample).filterByContrast('green', '>=3'))
  // [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
   */
  filterByContrast(
    against: ColorToken,
    start?: number | string,
    end?: number
  ): ColorArray;
  /**
   *
   *  Returns colors in the specified hue ranges between 0 to 360.
   * Supports expression strings for the `start` and `end` parameters e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
   * @param  start The minimum end of the `hue` range.
   * @param  end The maximum end of the `hue` range.
   * @returns  A collecion of the filtered colors.
   * @example
   *
   * import { load } from 'huetiful-js'
   *
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
  
  load(sample).filterByHue(20, 80)
  
  // [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
   */
  filterByHue(start?: number | string, end?: string | number): ColorArray;
  /**
   *
   *  Returns a `collection` of colors in the specified luminance range. The range is normalised to [0,1].
   * Supports expression strings for the `start` and `end` parameters e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
   * @param  start The minimum end of the luminance range.
   * @param  end The maximum end of the luminance range.
   * @returns Collection of filtered colors.
   * @example
   *
   * import { load } from 'huetiful-js'
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
  
  load(sample).filterByLuminance(0.4, 0.9)
  
  // [ '#00ffdc', '#00ff78' ]
   */
  filterByLuminance(start?: number | string, end?: number | string): ColorArray;
  /**
   *
   * Sorts colors in the bound collection according to their lightness.
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
   * @example
   * import { load } from "huetiful-js";
  
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
  
  
  
  load(sample).sortByLightness('desc')
  
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
  * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
   * @example
   * import { load } from 'huetiful-js'
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(
    load(sample)sortByDistance('yellow', 'asc')
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
  sortByDistance(against: ColorToken, order?: 'asc' | 'desc'): ColorArray;
  /**
   *
   *  Sorts colors in the bound collection according to the relative brightness as defined by WCAG.
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
   * @example
   *
   * import { load } from "huetiful-js";
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
  
  
  let sortedDescending = load(sample).sortByLuminance("desc");
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
   *  Sorts colors in the bound collection according to their saturation. Achromatic colors are not supported as they lack a truthy `chroma` or saturation channel.
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @param colorspace The mode color space to compute the saturation value in. The default is jch .
  * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
   * @example
   * import { load } from "huetiful-js";
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
  
  let sorted = load(sample).sortByChroma();
  console.log(sorted);
  
  // [
    '#310000', '#3e0000',
    '#164100', '#4e0000',
    '#600000', '#720000',
    '#00ffdc', '#007e00',
    '#00ff78', '#00c000',
    '#ffff00'
  ]
  
  let sortedDescending = sortByChroma(sample,'desc');
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
  sortByChroma(order: 'asc' | 'desc', colorspace?: HueColorSpaces): ColorArray;
  /**
   *
   * Sorts colors in the bound collection according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
   * @example
   *
   * import { load } from 'huetiful-js'
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(load(sample).sortByContrast('yellow'))
  // [ 'red', 'green', 'brown', 'purple' ]
  
  console.log(load(sample).sortByContrast('yellow', 'desc'))
  // [ 'purple', 'brown', 'green', 'red' ]
   
   */
  sortByContrast(against: ColorToken, order?: 'asc' | 'desc'): ColorArray;
  /**
   *
   *  Sorts colors in the bound collection according to hue values. It works with any color space with a hue channel. Note that hue values between `hsl` and `lch` do not align. Achromatic colors are not supported.
   * @param order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @param colorspace The colorspace to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.
  * @returns  A collection of the sorted color values.
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
  
  
 
  let sortedDescending = load(sample)sortByHue('desc');
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
  sortByHue(order?: 'asc' | 'desc', colorspace?: HueColorSpaces): ColorArray;

  /**
 * Returns the nearest color(s) in the bound collection against
  * @param against The color to use for distance comparison.
 * @param num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
 * @returns An array of colors.
 * @example
 *
 * import { load } from 'huetiful-js';
 *
 * let cols = tailwindColors('all', '500')
 *
console.log(load(cols).getNearestColor('blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
  getNearestColor(
    against: ColorToken,
    num?: number
  ): ColorToken | Array<ColorToken> | Map<any, ColorToken>;

  /**
 * Gets the largest chroma/saturation difference between the colors in the bound collection `against` a comparison color.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false.
 * @returns The largest chroma/saturation difference in the colors passed in or a custom object.
 *
 * @example
 *
 * import { load } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'
 
        console.log(load(sample).getFarthestChromaFrom(against,mode))
 
        // 35
 
 
 */
  getFarthestChromaFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };

  /**
 * Gets the smallest chroma/saturation difference between the colors in the bound collection `against` a comparison color.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false.
 * @returns The smallest chroma/saturation difference in the colors passed in or a custom object.
 *
 * @example
 *
 *
 * import { load } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'
 
        console.log(load(sample).getNearestChromaFrom(against,mode))
 
        // 5
 
 
 */
  getNearestChromaFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };

  /**
 * Gets the largest hue angle difference between the colors in the bound collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false.
 * @returns The largest hue angle difference in the colors passed in or a custom object.
 *
 * @example
 *
 * import { load } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'
 
        console.log(load(sample).getFarthestHueFrom(against,mode))
 
        // 35
 */
  getFarthestHueFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };

  /**
 * Gets the smallest `hue` angle difference between the colors in the bound collection `against` a comparison color.
  * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false.
 * @returns The smallest hue angle difference in the colors passed in or a custom object.
 *
 * @example
 * import { load } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'
 
        console.log(load(sample).getNearestHueFrom(against,mode))
 
        // 5
 
 
 */
  getNearestHueFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };

  /**
 * Gets the largest lightness difference between the colors the bound collection `against` a comparison color.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false.
 * @returns The largest lightness difference in the colors passed in or a custom object.
 *
 * @example
 *
 * import { color } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'
 
        console.log(load(sample)getFarthestLightnessFrom(against,mode))
 
        // 35
 
 
 */
  getFarthestLightnessFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };

  /**
 * Gets the smallest lightness difference between the colors in the bound collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false.
 * @returns The smallest lightness difference in the colors passed in or a custom object.
 *
 * @example
 * import { color } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'
 
        console.log(load(sample).getNearestLightnessFrom(against,mode))
 
        // 5
 
 */
  getNearestLightnessFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ):
    | number
    | {
        factor: number;
        color: ColorToken;
      };

  /**
 * Returns the average `chroma` from the bound `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum.
 * @param colorspace The colorspace to fetch the `chroma` channel value from.
 * @returns The average `chroma` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.
 * @example
 *
* import { color } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]
 
        console.log(color(sample).getMeanChroma())
 
        // 30
 
 */
  getMeanChroma(colorspace?: HueColorSpaces): number | undefined;

  /**
 * Returns the average `lightness` from the passed in `collection` of colors.
 * @param colorspace The colorspace to fetch the `lightness` channel value from.
 * @returns The average `lightness` in the passed in `collection`.
 * @example
 *
 * import { color } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]
 
        console.log(color(sample).getMeanLightness())
 
        // 20
 */
  getMeanLightness(colorspace?: HueColorSpaces): number;

  /**
 * Returns the average `hue` from the bound `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum if `excludeGreys` is `true`. This can help make your color scales make more 'visual sense since the `hue` channel depends on the `chroma` channel to look colorful. This will also alter the final average hue angle returned.
 * @param colorspace The colorspace to fetch the `hue` channel value from.
 * @param excludeGreys Optional boolean to filter out achromatic colors from the passed in `collection`.
 * @returns The average `hue` angle in the passed in `collection`.
 * @example
 *
 * import { load } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 10, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 6, mode: 'lch' }
        ]
 
        console.log(load(sample).getMeanHue())
 
        // 12
 */
  getMeanHue(colorspace?: HueColorSpaces, excludeGreys?: boolean): number;

  /**
 * Returns the average relative `luminance` from the bound `collection` of colors.
 * @returns The average relative `luminance` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.
 * @example
 *
 * import { color } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]
 
        console.log(load(sample).getMeanLuminance())
 
        // 0.05158704622405754
 */
  getMeanLuminance(): number;

  /**
 * Returns the average `distance` from the passed in `collection` of colors using the `differenceHyab` metric. In the future, an option to specify the metric to use when querying the `distance` factor.
 * @param against The color to compare the distance from. Used by the metric function for each color in the `collection`. Default is `black`.
 * @returns The average `distance` in the passed in `collection` .
 * @example
 * import { load } from 'huetiful-js'
 *
 
var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 30, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = 'blue';
 
console.log(load(against).getMeanDistance(sample));
 
 
// 142.7183074639663
 */
  getMeanDistance(against?: ColorToken): number;

  /**
 * Returns the average `contrast` from the bound `collection` of colors.
 * @param against The color to compare the `contrast` against. Used by the `getContrast` function for each color in the `collection`. Default is `black`
 * @returns The average `distance` in the passed in `collection` .
 * @example
 *
 * import { load } from 'huetiful-js'
 *
 *
var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 30, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = 'blue';
 
console.log(load(sample).getMeanContrast(against));
 
// 1.5960886749927419
 
 */
  getMeanContrast(against?: ColorToken): number;

  /**
   * @returns Returns the result value from the chain.
   */
  output(): ColorToken;
}
/**
 * A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword
 * @param colors A collection of colors to chain the array methods on. Every element in the array will be parsed as a color token.
 */
declare function load(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>
): ColorArray;
/**
 * @internal
 * Creates a lazy chain wrapper over a single color token that has all the functions that take a `ColorToken` as their first argument.
 *
 * @example
 * import { Color } from 'huetiful-js'
 *
 * let wrapper = new Color('pink');

console.log(wrapper.color2hex());
// #ffc0cb
 */

declare class Color {
  constructor(c: ColorToken, options?: ColorOptions);

  /**
 *
 * Sets/Gets the opacity or `alpha` channel of a color. If the `value` parameter is omitted it gets the bound color's `alpha` value.
 * @param value The value to apply to the opacity channel. The value is normalized to the range [0,1]
 * @returns color The resulting color. Preserves the bound `ColorToken` type.
 * @example
 *
 * import { color } from 'huetiful-js';
 *
 * // Getting the alpha
console.log(color('#a1bd2f0d').alpha())
// 0.050980392156862744
 
// Setting the alpha
let myColor = color('b2c3f1')alpha(0.5)
 
console.log(myColor)
 
// #b2c3f180
 */
  alpha(amount?: number | string): Color | number;

  /**
 *
 *  Returns the specified channel value on the bound color token.
 * @param mc The mode and channel to be retrieved. For example `rgb.b` will return the value of the blue channel's value in the RGB color space of that color.
 * @returns value The value of the queried channel.
 * @example
 *
 * import { color } from 'huetiful-js'
 
console.log(color('#a1bd2f').getChannel('rgb.g'))
// 0.7411764705882353
 *
*/
  getChannel(modeChannel: string): number;

  /**
 *
 * Sets the specified channel value on the bound color token.
 * @param  mc The mode and channel to work with. For example `'rgb.b'`.
 * @param  value The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"`
 * @returns  The mutated color. Preserves the bound in `ColorToken` type.
 *
 * @example
 *
 * import { color } from 'huetiful-js'
 
let myColor = color('green').setChannel('lch.h',10)
 
console.log(myColor.getChannel('lch.h'))
// 10
 */
  setChannel(modeChannel: string, value: number | string): Color;
  /**
   * Interpolates the bound color via the `origin` at the point `t`. Call `output()` to get the results.
   * @param origin The color to interpolate via.
   * @param t The point in the interpolation to return. Expected value is in the range [0,1]
   * @param options Overrides object to customize the easing and the interpolation methods /fixups.
   * @returns The result of the interpolation. Preserves the bound `ColorToken` type.
   */
  via(origin: ColorToken, t?: number, options?: InterpolatorOptions): string;
  /**
   * Returns the bound `ColorToken` as a hexadecimal string.
   */
  color2hex(): string;
  /**
   * Returns a randomized pastel variant of the bound color token. Preserves the bound `ColorToken` type.
   *
   * @example
   *
   * import { color } from 'huetiful-js';
   *
   * console.log(color("green").pastel())
   *
   * // #036103ff
   *
   */
  pastel(): Color;
  /**
   * Returns a palette that contains a base color that is incremented by a `hueStep` to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `n` degrees behind the base color. Call `output()` to get the final result.
   * @param options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
   * @returns An array containing the paired scheme.
   * @example
   *
   * import { color } from 'huetiful-js'
  
  console.log(color("green").pairedScheme({hueStep:6,samples:4,tone:'dark'}))
  // [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
   */
  pairedScheme(options?: PairedSchemeOptions): ColorArray;
  /**
   * Returns a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single color. `maxLightness` and `minLightness` values determine how light or dark our colour will be at either extreme. Call `output()` to get the result.
   * @param options The optional overrides object to customize the `HueShiftOptions` like easing function.
   *@returns An array of colors. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the passed in `ColorToken` type.
   * @example
   * import { color } from "huetiful-js";
  
  let hueShiftedPalette = color("#3e0000").hueShift({ iterations:1 });
  
  console.log(hueShiftedPalette);
  
  // [
    '#ffffe1', '#ffdca5',
    '#ca9a70', '#935c40',
    '#5c2418', '#3e0000',
    '#310000', '#34000f',
    '#38001e', '#3b002c',
    '#3b0c3a'
  ]
   */
  hueShift(options?: HueShiftOptions): ColorArray;
  /**
   *
   * Returns the complementary hue of the bound color. The function may behave unexpectedly when you pass in an achromatic color.
   * @param colorObj Optional boolean whether to return a custom object with the color `name` and `hueFamily` as keys or just the result color. Default is `false`.
   * @returns A custom object if `colorObj` is `true` else the complimentary color. Preserves the bound `Colortoken` type.
   * @example
   *import { color } from "huetiful-js";
   *
   
  console.log(color("pink").getComplimentaryHue(true))
  // { hue: 'blue-green', color: '#97dfd7ff' }
  
   */
  getComplimentaryHue(colorObj?: boolean):
    | {
        hue: HueFamily | 'gray';
        color: ColorToken;
      }
    | Color;
  /**
   * Returns a spline interpolation between an `earthtone` and the bound color. Call `output()` to get the results.
   * @param options Optional overrides for customizing interpolation and easing functions.
   * @returns The collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the bound color.
   *
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   * let base = 'purple'
   *
   * console.log(color(base).earthtone({iterations:8}))
   *
   ColorArray {
  colors: [
    '#352a21', '#3e2825',
    '#4c2624', '#5f2028',
    '#741033', '#860040',
    '#940049', '#99004b'
  ]
}
 
console.log(color(base).earthtone({ iterations:8 }).output())
   * // call output() to only get results array
 
// [
    '#352a21', '#3e2825',
    '#4c2624', '#5f2028',
    '#741033', '#860040',
    '#940049', '#99004b'
  ]
   */
  earthtone(options?: EarthtoneOptions): ColorArray | Color;

  /**
   * Gets the contrast value between the bound and  comparison ( or `against`) color.
   * @param against The color to use for comparison.
   * @returns The contrast value between the two colors.
   *
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   * console.log(color('pink').contrast('yellow'))
   * // 1.4322318222624262
   */
  contrast(against: ColorToken | 'black' | 'white'): number;

  /**
   * Sets/Gets the `luminance` value of the bound color.
   * @param amount The `luminance` value to set on the bound color.
   * @returns The `luminance` value if the method is called with no arguments else it returns a color with its `luminance `value mutated.
   *
   * @example
   * import { color } from 'huetiful-js'
   *
let myColor = 'green';
console.log(color(myColor).luminance());
// 0.1543834296814607
 
console.log(color(myColor)._luminance);
// 0.1543834296814607
 
console.log(color(myColor).luminance(0.5));
 
 
// It returns
 Color {
   alpha: 1,
   _color: '#008000',
   _luminance: 0.5,
   lightness: 46.27770902748027,
   colorspace: 'lch',
   _saturation: undefined,
   lightMode: '#f3f4f6',
   darkMode: '#1f2937'
 }
   */
  luminance(amount?: number | string): number | Color;

  /**
   * Returns the final value from the chain.
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   * let myOutput = color(['rgb',200,34,65]).output()
   *
   * console.log(myOutput)
   * // ['rgb',200,34,65]
   *
   */
  output(): any;

  /**
   * Sets/Gets the saturation value of the bound color.
   * @param amount The amount of `saturation` to set on the bound color token. See also the supported string expressions in the docs.
   * @see https://huetiful-js.com/basics/string-expressions
   * @returns The `saturation` value if the method is called with no arguments else it returns a color with its `saturation` value mutated.
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   *
   * let myColor = ['hsl',200,0.09,0.5]
   *
   * console.log(color(myColor).saturation())
   * // 0.3
   *
   * console.log(color(myColor).saturation("*0.3"))
   *
   * // ['hsl',200,0.09,0.5]
   *
   */
  saturation(amount?: string | number): any;

  /**
 *@experimental
 * Returns `true` if the bound color has hue or is grayscale else `false`.
 * @returns True if the color is achromatic else false.
 * @example
 *
 * import { color } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"
 
var test = c => color(c).isAchromatic()
 
 
test('pink')
// false
 
let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];
 
console.log(sample.map(test));
 
// [false, false, false,false]
 
test('gray')
 
// true
 
 
 
// we create an interpolation using black and white
let f = interpolate(["black", "white"]);
 
//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(test));
 
//
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]
 
 */
  isAchromatic(): boolean;
  /**
 *
 * @experimental
 * Returns `true` if color the bound color can be roughly classified as a warm color else `false`.
 * @example
 * import { color } from 'huetiful-js'
 
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];
 
 
 
console.log(color(sample[2]).isWarm());
//true
 
 
 */
  isWarm(): boolean;

  /**
 *
* Returns `true` if color the bound color can be roughly classified as a cool color else `false`.
 * @example
 *
 * import { color } from 'huetiful-js'
 
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];
 
 
console.log(color(sample[2]).isCool());
// false
 
 
 
 
 */
  isCool(): boolean;
  /**
   *
   *  Returns the bound color as a simulation of the specified type of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.
   * @param deficiencyType The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' can't perceive `'blue'` light properly. Default is `'red'` when the defeciency parameter is `undefined`.
   * @param severity The intensity of the filter in the range [0,1].
   * @returns The color as its simulated variant. Preserves the bound `ColorToken` type.
   * @example
   *
   * import { color } from 'huetiful-js'
  
  // Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
  // We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
  let tritanomaly = color(['rgb', 230, 100, 50, 0.5]).colorDeficiency('blue', 0.1)
  console.log(tritanomaly)
  // #dd663680
  
  // Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
  let protanopia = color({ h: 20, w: 50, b: 30, mode: 'hwb' }).colorDeficiency('red')
  console.log(protanopia)
  // #9f9f9f
   */
  deficiency(
    deficiencyType?: 'red' | 'blue' | 'green' | 'monochromacy',
    severity?: number
  ): ColorToken;

  /**
 *
 * Returns the hue which is biasing the passed in color.
 * @returns The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.
 * @example
 *
console.log(color("fefefe").overtone())
// 'gray'
 
console.log(color("cyan").overtone())
// 'green'
 
console.log(color("blue").overtone())
// false
 */
  overtone(): string | boolean;

  /**
 *
 * Returns the hue family of the bound color with the overtone included (if it has one). For achromatic colors it returns `"gray"`.
 * @returns The name of the hue family for example `red` or `blue-green`.
 * @example
 *
 * import { color } from 'huetiful-js'
 
 
console.log(color("#310000").getHueFamily())
// red
 */
  getHueFamily(): string;

  /**
 *
 * Returns a randomised classic color scheme from the bound color.
 * @param  schemeType  Any classic color scheme either `"analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary"`.
@param easingFunc The easing function to apply to the palette. It's applied on the `hue` channel.
 * @returns The collection of colors. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the type of the bound `ColorToken` as elements of the collection.
 * @example
 *
 import { color  } from 'huetiful-js'
 
console.log(color("#a1bd2f").scheme("triadic"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */
  scheme(
    schemeType: 'analogous' | 'triadic' | 'tetradic' | 'complementary',
    easingFunc?: (t: number) => number
  ): ColorArray;
}
/**
 * Wrapper function over the Color class that returns a new Color method chain.
 * @param color The color token to bind.
 * @returns A new Color class with all the utilities that take a single color as the first parameter bound to its prototype.
 *
 * @example
 *
 *
 */
declare function color(color: ColorToken): Color;

export { ColorArray, load, Color, color };

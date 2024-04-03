/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').HueColorSpaces} HueColorSpaces
 * @typedef {import('../types/types.js').FactObject} FactObject
 * @typedef {import('../types/types.js').InterpolatorOptions} InterpolatorOptions
 * @typedef {import('../types/types.js').SchemeType} SchemeType
 * @typedef {import('../types/types.js').Order} Order
 * @typedef {import('../types/types.js').ColorOptions} ColorOptions
 * @typedef {import('../types/types.js').PairedSchemeOptions} PairedSchemeOptions
 * @typedef {import('../types/types.js').HueShiftOptions} HueShiftOptions
 * @typedef {import('../types/types.js').EarthtoneOptions} EarthtoneOptions
 * @typedef {import('../types/types.js').UniformColorSpaces} UniformColorSpaces
 * @typedef {import('../types/types.js').DeficiencyType} DeficiencyType
 */

import * as filterBy from './filterBy.js';
import * as sortBy from './sortBy.js';
import {
  discoverPalettes as _dp,
  getFarthestHue as _mxh,
  getNearestHue as _mnh,
  getNearestLightness as _mxl,
  getFarthestLightness as _mnl,
  alpha as _opac,
  isAchromatic as _ia,
  isCool as _icl,
  isWarm as _iwm,
  getFarthestChroma as _gfc,
  getFarthestHue as _gfh,
  getFarthestLightness as _gfl,
  getNearestHue as _gnh,
  getNearestChroma as _gnc,
  getNearestLightness as _gnl,
  overtone as _ot,
  color2hex as _hx,
  getChannel as _gchn,
  getContrast as _gctrst,
  getLuminance as _glmnce,
  setChannel as _schn,
  setLuminance as _slm,
  or,
  mcchn,
  scheme as _schm,
  pastel as _pstl,
  hueShift as _hshft,
  getHueFamily as _ghf,
  pairedScheme as _ps,
  earthtone as _rthtn,
  getComplimentaryHue as _gch,
  colorDeficiency as _cds,
  interpolator as _pltr,
  interpolateSpline as _pltrspln,
  getFarthestChromaFrom as _gfcf,
  getNearestChromaFrom as _gncf,
  getFarthestHueFrom as _gfhf,
  getNearestHueFrom as _gnhf,
  getFarthestLuminanceFrom as _gflmncef,
  getNearestLuminanceFrom as _gnlmncef,
  getNearestLightnessFrom as _gnlf,
  getFarthestLightnessFrom as _gflf,
  getMeanHue as _gmh,
  getMeanContrast as _gmctrst,
  getMeanDistance as _gmd,
  getMeanChroma as _gmc,
  getMeanLightness as _gml,
  getNearestColor as _gnrstc,
  gt,
  // @ts-ignore
  lt,
  getMeanLuminance as _gmnlmnce,
  brighten as _brghtn,
  darken as drkn
} from './index.js';
import { tailwindColors } from './colors.js';

/**
 * @public
 * @this {ColorArray}
 Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument).
 * @example
 * import { ColorArray } from 'huetiful-js'
 *
let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
 */
class ColorArray {
  /**
   * @public
   * @param {Collection} colors The collection of colors to bind.
   */
  constructor(colors) {
    this['colors'] = colors;
    return this;
  }

  /**
   * @public
   
 * Returns the nearest color(s) in the bound collection against
 * @param {ColorToken} color  The color to use for distance comparison.
 * @param {number} num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
 * @returns {Collection} An array of colors.
 * @example
 *
 * import { load } from 'huetiful-js';
 *
 * let cols = tailwindColors('all', '500')
 *
console.log(load(cols).getNearestColor('blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
  getNearestColor(color, num = 1) {
    if (gt(num, 1)) {
      return _gnrstc(this['colors'], color, num);
    } else {
      this['colors'] = _gnrstc(this['colors'], color, num);
      return this;
    }
  }

  /**
   * @public
 * Gets the largest chroma/saturation difference between the colors in the bound collection `against` a comparison color.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} [colorspace='lch'] The mode colorspace to retrieve the channel being queried.
 * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false.
 * @returns {number|ColorArray|FactObject} The largest chroma/saturation difference in the colors passed in or a custom object.
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

  getFarthestChromaFrom(against, colorspace, colorObj) {
    return _gfcf(this['colors'], against, colorspace, colorObj);
  }

  /**
   * @public
 * Gets the smallest chroma/saturation difference between the colors in the bound collection `against` a comparison color.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} [colorspace='lch'] The mode colorspace to retrieve the channel being queried.
 * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is false.
 * @returns {number|ColorArray|FactObject} The smallest chroma/saturation difference in the colors passed in or a custom object.
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

  getNearestChromaFrom(against, colorspace, colorObj) {
    return _gncf(this['colors'], against, colorspace, colorObj);
  }

  /**
   * @public
 * Gets the largest lightness difference between the colors the bound collection `against` a comparison color.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} [colorspace='lch'] The mode colorspace to retrieve the channel being queried.
 * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false.
 * @returns {number|ColorArray|FactObject}  The largest lightness difference in the colors passed in or a custom object.
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
 
        console.log(load(sample)getFarthestLightnessFrom(against,mode))
 
        // 35
 
 
 */

  getFarthestLightnessFrom(against, colorspace, colorObj) {
    return _gflf(this['colors'], against, colorspace, colorObj);
  }

  /**
   * @public
 * Gets the smallest lightness difference between the colors in the bound collection `against` a comparison color.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} [colorspace='lch'] The mode colorspace to retrieve the channel being queried.
 * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is false.
 * @returns {number|ColorArray|FactObject} The smallest lightness difference in the colors passed in or a custom object.
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

  getNearestLightnessFrom(against, colorspace, colorObj) {
    return _gnlf(this['colors'], against, colorspace, colorObj);
  }

  /**
   * @public
 * Gets the smallest `hue` angle difference between the colors in the bound collection `against` a comparison color.
  * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} [colorspace='lch'] The mode colorspace to retrieve the channel being queried.
 * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false.
 * @returns {number|ColorArray|FactObject} The smallest hue angle difference in the colors passed in or a custom object.
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

  getNearestHueFrom(against, colorspace, colorObj) {
    return _gnhf(this['colors'], against, colorspace, colorObj);
  }

  /**
   * @public
 * Gets the largest hue angle difference between the colors in the bound collection `against` a comparison color.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {HueColorSpaces} [colorspace='lch'] The mode colorspace to retrieve the channel being queried.
 * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is false.
 * @returns {number|ColorArray|FactObject} The largest hue angle difference in the colors passed in or a custom object.
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

  getFarthestHueFrom(against, colorspace, colorObj) {
    return _gfhf(this['colors'], against, colorspace, colorObj);
  }

  /**
   * @public
 * Gets the smallest `luminance` difference between the colors in the bound collection `against` a comparison color.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (`luminance`) and name of the color as keys. Default is `false`.
 * @returns {number|ColorArray|FactObject} The smallest `luminance` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
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

  getNearestLuminanceFrom(against, colorObj) {
    // @ts-ignore
    return _gnlmncef(this['colors'], against, colorObj);
  }

  /**
   * @public
 * Gets the largest `luminance` difference between the colors in the bound collection `against` a comparison color.
 * @param {ColorToken} against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @returns {number|ColorArray|FactObject} The largest lightness difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
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

  getFarthestLuminanceFrom(against, colorObj) {
    // @ts-ignore
    return _gflmncef(this['colors'], against, colorObj);
  }

  /**
   * @public
 * Returns the average `chroma` from the bound `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum.
 * @param {HueColorSpaces} [colorspace='lch'] The colorspace to fetch the `chroma` channel value from.
 * @returns {number} The average `chroma` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.
 * @example
 *
* import { load } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]
 
        console.log(color(sample).getMeanChroma())
 
        // 30
 
 */

  getMeanChroma(colorspace) {
    return _gmc(this['colors'], colorspace);
  }

  /**
   * @public
 * Returns the average `contrast` from the bound `collection` of colors.
 * @param {ColorToken} against The color to compare the `contrast` against. Used by the `getContrast` function for each color in the `collection`. Default is `black`
 * @returns {number} The average `distance` in the passed in `collection` .
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

  getMeanContrast(against) {
    return _gmctrst(this['colors'], against);
  }
  /**
   * @public
 * Returns the average `lightness` from the passed in `collection` of colors.
 * @param {HueColorSpaces} [colorspace='lch']  The colorspace to fetch the `lightness` channel value from.
 * @returns {number} The average `lightness` in the passed in `collection`.
 * @example
 *
 * import { load } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]
 
        console.log(load(sample).getMeanLightness())
 
        // 20
 */

  getMeanLightness(colorspace = 'lch') {
    return _gml(this['colors'], colorspace);
  }

  /**
   * @public
 * Returns the average `hue` from the bound `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum if `excludeGreys` is `true`. This can help make your color scales make more 'visual sense since the `hue` channel depends on the `chroma` channel to look colorful. This will also alter the final average hue angle returned.
 * @param {HueColorSpaces} [colorspace='lch'] The colorspace to fetch the `hue` channel value from.
 * @param {boolean} excludeGreys Optional boolean to filter out achromatic colors from the passed in `collection`.
 * @returns {number} The average `hue` angle in the passed in `collection`.
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

  // @ts-ignore
  getMeanHue(colorspace, excludeGreys) {
    return _gmh(this['colors'], colorspace, excludeGreys);
  }

  /**
   * @public
 * Returns the average relative `luminance` from the bound `collection` of colors.
 * @returns {number} The average relative `luminance` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.
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

  getMeanLuminance() {
    return _gmnlmnce(this['colors']);
  }

  /**
   * @public
 * Returns the average `distance` from the passed in `collection` of colors using the `differenceHyab` metric. In the future, an option to specify the metric to use when querying the `distance` factor.
 * @param {ColorToken} against The color to compare the distance from. Used by the metric function for each color in the `collection`. Default is `black`.
 * @returns {number} The average `distance` in the passed in `collection` .
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

  getMeanDistance(against) {
    return _gmd(this['colors'], against);
  }
  /**
   * @public
     
     *  Returns a spline interpolator function with customizable interpolation methods (by selecting the `kind` of ), with support for generating color scales for cyclic data (by setting the `closed` parameter to `true`) and optional channel specific overrides.
     * @param {HueColorSpaces} [colorspace='lch'] The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.
     * @param {'natural' | 'monotone' | 'basis'} kind The type of the spline interpolation method. Default is basis.
     * @param {boolean} closed Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false
     * @param {Pick<InterpolatorOptions, 'hueFixup' | 'easingFn' | 'domain'>} options Optional channel specific overrides.
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

  // @ts-ignore
  interpolateSpline(colorspace, samples, kind, closed, options) {
    this['colors'] = _pltrspln(
      // @ts-ignore
      this['colors'],
      colorspace,
      samples,
      kind,
      closed,
      options
    );

    return this;
  }

  /**
   * @public
   *
   * Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
   * @param {SchemeType} schemeType (Optional) The palette type you want to return.
   * @returns {ColorArray} A collection of colors if the `schemeType` parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
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

  discoverPalettes(schemeType) {
    this['colors'] = _dp(this['colors'], schemeType);
    return this;
  }
  /**
   * @public
   *
   * Returns the largest hue angle from the bound collection.
   * @param {HueColorSpaces} [colorspace='lch'] The mode color space to perform the computation in.
   * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
   * @returns The largest hue value in the colors passed in or a custom object.
   * @example
   *
   * import { load } from 'huetiful-js'
  let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']
  
  console.log(load(sample).getFarthestHue('lch'))
  // 273.54920266436477
   */

  getFarthestHue(colorspace, colorObj = false) {
    // @ts-ignore
    return _mxh(this['colors'], colorspace, colorObj);
  }

  /**
   * @public
   *
   *  Returns the smallest `hue` angle from the bound `collection`.
   * @param {HueColorSpaces} [colorspace='lch'] The mode color space to perform the computation in.
   * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
   * @returns {number|FactObject} The smallest hue value in the colors passed in or a custom object.
   * @example
   *
   * import { load } from 'huetiful-js'
  
  let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']
  
  console.log(load(sample).getNearestHue('lch'))
  // 12.462831644544274
   */

  getNearestHue(colorspace, colorObj = false) {
    // @ts-ignore
    return _mnh(this['colors'], colorspace, colorObj);
  }

  /**
   * @public
   *
   *  Returns the smallest `lightness` value from the bound collection.
   * @param {HueColorSpaces} [colorspace='lch'] The mode color space to perform the computation in.
   * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
   * @returns {number|FactObject} The smallest `lightness` value in the colors passed in or a custom object.
   * @example
   *
   * import { getNeareastLightness } from 'huetiful-js'
  
  let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]
  
  console.log(load(sample).getNearestLightness('lch', true))
  
  // { lightness: 72.61647882089876, name: '#a1bd2f' }
  
   */

  getNearestLightness(colorspace, colorObj = false) {
    // @ts-ignore
    return _mnl(this['colors'], colorspace, colorObj);
  }

  /**
   * @public
   *
   *  Returns the largest `lightness` value from the bound collection.
   * @param {HueColorSpaces} [colorspace='lch'] The mode color space to perform the computation in.
   * @param {boolean} [colorObj=false] Optional boolean that makes the function return a custom object with `factor` (lightness) and `name` of the color as keys. Default is false.
   * @returns The largest `lightness` value in the colors passed in or a custom object.
   * @example
   *
   * import { load } from 'huetiful-js'
  
  let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]
  
  console.log(load(sample).getFarthestLightness('lch', true))
  
  // { lightness: 80.94668903360088, name: '#f3bac1' }
  
   */

  getFarthestLightness(colorspace, colorObj = false) {
    // @ts-ignore
    return _mxl(this['colors'], colorspace, colorObj);
  }
  /**
   * @public
   *
   * Returns a `collection` of colors in the specified `saturation/chroma` range from the bound collection.
   *
   * The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
   * This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.
   *
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`
   *
   * @param {number|string} start The minimum end of the `saturation/chroma` range.
   * @param {number|string} end The maximum end of the `saturation/chroma` range.
   * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
   * @param {HueColorSpaces} [colorspace='lch'] The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do.
   * @returns {Collection} Collection of filtered colors.
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

  filterByChroma(start, end, colorspace) {
    this['colors'] = filterBy.filterByChroma(
      this['colors'],
      // @ts-ignore
      start,
      end,
      colorspace
    );
    return this;
  }
  /**
   * @public
   *
   *  Returns a `collection` of colors in the specified `lightness` range.
   *
 
 * The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
   * This means a value in the range `[0,1]` will return, for example if you pass `start` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. But if the value of either `start` or `end` is above 1 AND the `colorspace` in use has an `end` range higher than 1 then the value is treated as if in the unnormalized range else the value is treated as if in the range `[0,100]` and will return the normalized value.
   *
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`
   *
   * @param {number | string} start The minimum end of the `lightness` range.
   * @param {number | string} end The maximum end of the `lightness` range.
   * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
   * @returns {Collection} Collection of filtered colors.
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

  filterByLightness(start, end) {
    this['colors'] = filterBy.filterByLightness(this['colors'], start, end);
    return this;
  }

  /**
   * @public
   *
   *  Returns colors with the specified distance range from the bound `collection`. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.
   *
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`
   * @param {ColorToken} against The color to compare against.
   * @param {number | string} start  The minimum end of the distance range.
   * @param {number | string} end The maximum end of the distance range.
   * @returns {Collection} Collection of filtered colors.
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

  filterByDistance(against, start = 0.05, end = Infinity) {
    this['colors'] = filterBy.filterByDistance(
      this['colors'],
      against,
      start,
      end
    );
    return this;
  }

  /**
   * @public
   *
   *
   *  Returns collection of colors within the specified contrast range. The contrast is tested against a comparison (`'against'`) color and the specified contrast ranges.
   * 
   * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`
   * @param {ColorToken} against The color to compare against.
   * @param {number | string} start The minimum end of the contrast range. Default is `1`.
   * @param {number | string} end The maximum end of the contrast range. The default is `21`.
   * @returns {Collection} Collection of filtered colors.
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

  filterByContrast(against, start, end) {
    this['colors'] = filterBy.filterByContrast(
      this['colors'],
      // @ts-ignore
      against,
      start,
      end
    );

    return this;
  }

  /**
   * @public
   *
   *  Returns colors in the specified hue ranges between 0 to 360.
   * Supports expression strings for the `start` and `end` parameters e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`
   * @param {number|string} start The minimum end of the `hue` range.
   * @param {number|string} end The maximum end of the `hue` range.
   * @returns {Collection} A collecion of the filtered colors.
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

  filterByHue(start = 0, end = 360) {
    this['colors'] = filterBy.filterByHue(this['colors'], start, end);
    return this;
  }

  /**
   * @public
   *
   *  Returns a `collection` of colors in the specified luminance range. The range is normalised to [0,1].
   * Supports expression strings for the `start` and `end` parameters e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | > | !`
   * @param {number | string} start The minimum end of the luminance range.
   * @param {number | string} end The maximum end of the luminance range.
   * @returns {Collection} Collection of filtered colors.
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

  filterByLuminance(start = 0.05, end = 1) {
    this['colors'] = filterBy.filterByLuminance(this['colors'], start, end);
    return this;
  }

  /**
   * @public
   *
   * Sorts colors in the bound collection according to their lightness.
   * @param {Order} [order='asc']  The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @returns {Collection} The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
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

  sortByLightness(order) {
    this['colors'] = sortBy.sortByLightness(this['colors'], order);
    return this;
  }
  /**
   * @public
   *
   *  Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist
   * @param {ColorToken} against The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array.
   * @param {Order} [order='asc']  The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @returns {Collection} The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
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

  sortByDistance(against, order) {
    this['colors'] = sortBy.sortByDistance(this['colors'], against, order);

    return this;
  }

  /**
   * @public
   *
   *  Sorts colors in the bound collection according to the relative brightness as defined by WCAG.
   * @param {Order} [order='asc']  The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @returns {Collection} The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
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

  sortByLuminance(order) {
    this['colors'] = sortBy.sortByLuminance(this['colors'], order);
    return this;
  }

  /**
   * @public
   *
   *  Sorts colors in the bound collection according to their saturation. Achromatic colors are not supported as they lack a truthy `chroma` or saturation channel.
   * @param {Order} [order='asc']  The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @param {HueColorSpaces} [colorspace='lch'] The mode color space to compute the saturation value in. The default is jch .
  * @returns {Collection} The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
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

  sortByChroma(order, colorspace) {
    this['colors'] = sortBy.sortByChroma(this['colors'], order, colorspace);
    return this;
  }

  /**
   * @public
   *
   * Sorts colors in the bound collection according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)
   * @param {ColorToken} against The color to compare against.
   * @param {Order} [order='asc']  The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns {Collection} The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays.
   * @example
   *
   * import { load } from 'huetiful-js'
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(load(sample).sortByContrast('yellow'))
  // [ 'red', 'green', 'brown', 'purple' ]
  
  console.log(load(sample).sortByContrast('yellow', 'desc'))
  // [ 'purple', 'brown', 'green', 'red' ]
   
   */

  sortByContrast(against, order) {
    this['colors'] = sortBy.sortByContrast(this['colors'], against, order);
    return this;
  }

  /**
   * @public
   *
   *  Sorts colors in the bound collection according to hue angles. It works with any color space with a hue channel. Note that hue values between `hsl` and `lch` do not align. Achromatic colors are not supported.
   * @param {Order} [order='asc']  The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @param {HueColorSpaces} [colorspace='lch'] The colorspace to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.
  * @returns {Collection} A collection of the sorted color values.
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

  sortByHue(order = 'asc', colorspace) {
    this['colors'] = sortBy.sortByHue(this['colors'], order, colorspace);
    return this;
  }

  /**
   * @public
   * @returns Returns the result value from the chain.
   */
  output() {
    return this['colors'];
  }
}

/**
 * @public
 * A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword
 * @param {Collection} colors A collection of colors to chain the array methods on. Every element in the array will be parsed as a color token.
 * @returns {ColorArray} A new instance of the `ColorArray` class with the passed in collection bound to it.
 */
function load(colors) {
  return new ColorArray(colors);
}

/**
 * @public
 * @internal
 @this {ColorArray}
 * Creates a lazy chain wrapper over a single color token that has all the functions that take a `ColorToken` as their first argument.
 *
 * @example
 * import { Color } from 'huetiful-js'
 *
 * let wrapper = new Color('pink');

console.log(wrapper.color2hex());
// #ffc0cb
 */

class Color {
  /**
   * @public
   *
   * @param {ColorToken} [c= '#000'] The color to bind.
   * @param {ColorOptions} [options= {}] Optional overrides and properties for the bound color.
   */
  constructor(c, options) {
    let {
      alpha,
      colorspace,
      luminance,
      saturation,
      lightMode,
      darkMode,
      lightness
    } = or(options, {});

    // Set the alpha of the color if its not explicitly passed in.
    // @ts-ignore
    this['alpha'] = or(alpha, _opac(c));

    // if the color is undefined we cast pure black
    this['_color'] = c;

    // set the color's luminance if its not explicitly passed in
    // @ts-ignore
    this['_luminance'] = or(luminance, _glmnce(c));

    // set the color's lightness if its not explicitly passed in the default lightness is in Lch but will be refactored soon
    // @ts-ignore
    this['lightness'] = or(lightness, _gchn('lch.l')(c));

    // set the default color space as jch if a color space is not specified. TODO: get the mode from object and array
    this['colorspace'] = or(colorspace, 'lch');

    // set the default saturation to that of the passed in color if the value is not explicitly set
    this['_saturation'] = or(
      saturation,
      // @ts-ignore
      _gchn(`${this['colorspace']}.${mcchn(this['colorspace'])}`)(c)
    );

    // light mode default is gray-100
    this['lightMode'] = or(lightMode, tailwindColors('gray', '100'));

    // dark mode default is gray-800
    this['darkMode'] = or(darkMode, tailwindColors('gray', '800'));
  }

  /**
   * @public
 *
 * Sets/Gets the opacity or `alpha` channel of a color. If the `value` parameter is omitted it gets the bound color's `alpha` value.
 * @param {number|string} [amount=undefined] The value to apply to the opacity channel. The value is normalized to the range [0,1]
 * @returns {number|Color} The resulting color or value of the alpha channel. Preserves the bound `ColorToken` type.
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

  alpha(amount) {
    if (amount) {
      // @ts-ignore
      this['_color'] = _opac(this['_color'], amount);
      return this;
    } else {
      // @ts-ignore
      return _opac(this['_color']);
    }
  }

  /**
   * @public
 *
 *  Returns the specified channel value on the bound color token.
 * @param {string} mc The mode and channel to be retrieved. For example `rgb.b` will return the value of the blue channel's value in the RGB color space of that color.
 * @returns {number} The value of the queried channel.
 * @example
 *
 * import { color } from 'huetiful-js'
 
console.log(color('#a1bd2f').getChannel('rgb.g'))
// 0.7411764705882353
 *
*/

  getChannel(mc) {
    // @ts-ignore
    return _gchn(`${this['colorspace']}.${mc.toLowerCase()}`)(this['_color']);
  }

  /**
   * @public
 *
 * Sets the specified channel value on the bound color token.
 * @param {string} mc The mode and channel to work with. For example `'rgb.b'`.
 * @param {number|string} value The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"`
 * @returns {Color} The mutated color. Preserves the bound in `ColorToken` type.
 *
 * @example
 *
 * import { color } from 'huetiful-js'
 
let myColor = color('green').setChannel('lch.h',10)
 
console.log(myColor.getChannel('lch.h'))
// 10
 */

  setChannel(mc, value) {
    // @ts-ignore
    this['_color'] = _schn(mc)(this['_color'], value);
    return this;
  }

  /**
   * @public
   * Interpolates the bound color via the `origin` at the point `t`. Call `output()` to get the results.
   * @param {ColorToken} origin The color to interpolate via.
   * @param {number} t The point in the interpolation to return. Expected value is in the range [0,1]
   * @param {InterpolatorOptions} options Overrides object to customize the easing and the interpolation methods /fixups.
   * @returns {Color} The result of the interpolation. Preserves the bound `ColorToken` type.
   */

  via(origin, t, options) {
    // @ts-ignore

    this['_color'] = _pltr(
      [origin, this['_color']],
      this['colorspace'],
      options
    )(t);
    return this;
  }

  /**
   * @public
   * 
   * The inverse of `darken`. Brightens the bound color by increasing the lightness channel.
   * @param {number} amount The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is  `0.5`.
   * @returns {Color} The brightened color. Preserves the `ColorToken` type of the pased in color.
   * @example  import { color } from "huetiful-js";
  
  console.log(color('blue').brighten(0.3, 'lch'));
  //#464646
   */
  brighten(amount) {
    // @ts-ignore
    this['_color'] = _brghtn(this['_color'], amount);
    return this;
  }

  /**
   * @public
 *
 * Darkens the bound color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.
 * @param {number} amount The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`.
 * @returns {Color} The darkened color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 *  import { color } from "huetiful-js";
console.log(color('blue'+-).darken(0.3, 'lch'));
//#464646

 */

  darken(amount) {
    this['_color'] = drkn(this['_color'], amount);
    return this;
  }

  /**
   * @public
   * Returns the bound `ColorToken` as a hexadecimal string.
   * @returns {string}
   */
  color2hex() {
    // @ts-ignore
    this['_color'] = _hx(this['_color']);
    return this['_color'];
  }

  /**
   * @public
   * Returns a randomized pastel variant of the bound color token. Preserves the bound `ColorToken` type.
   *
   * @example
   *
   * import { color } from 'huetiful-js';
   *
   * console.log(color("green").pastel())
   *
   * // #036103ff
   * @returns {Color}
   */

  pastel() {
    // @ts-ignore
    this['_color'] = _pstl(this['_color']);
    return this;
  }

  /**
   * @public
   * Returns a palette that contains a base color that is incremented by a `hueStep` to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `n` degrees behind the base color. Call `output()` to get the final result.
   * @param {PairedSchemeOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
   * @returns {Color|ColorArray} An array containing the paired scheme.
   * @example
   *
   * import { color } from 'huetiful-js'
  
  console.log(color("green").pairedScheme({hueStep:6,samples:4,tone:'dark'}))
  // [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
   */

  pairedScheme(options) {
    if (gt(options['iterations'], 1)) {
      return new ColorArray(_ps(this['_color'], options));
    } else {
      // @ts-ignore
      this['_color'] = _ps(this['_color'], options);
      return this;
    }
  }

  /**
   * @public
   * Returns a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single color. `maxLightness` and `minLightness` values determine how light or dark our colour will be at either extreme. Call `output()` to get the result.
   * @param {HueShiftOptions} options The optional overrides object to customize the `HueShiftOptions` like easing function.
   *@returns {ColorArray|Color} An array of colors. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the passed in `ColorToken` type.
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

  hueShift(options) {
    if (gt(options['iterations'], 1)) {
      this['colors'] = _hshft(this['_color'], this['colorspace'], options);

      return new ColorArray(this['colors']);
    } else {
      // @ts-ignore
      this['_color'] = _hshft(this['_color'], options);
      return this;
    }
  }

  /**
   * @public
   *
   * Returns the complementary hue of the bound color. The function returns `'gray'` when you pass in an achromatic color.
   * @param {UniformColorSpaces} colorspace The colorspace to fetch the complimentary color from. Only supports uniform colorspaces.
   * @param {boolean} [colorObj=false] Optional boolean whether to return a custom object with the color `name` and `hueFamily` as keys or just the result color. Default is `false`.
   * @returns {FactObject|Color} A custom object if `colorObj` is `true` else the complimentary color. Preserves the bound `Colortoken` type.
   * @example
   *import { color } from "huetiful-js";
   *
   
  console.log(color("pink").getComplimentaryHue(true))
  // { hue: 'blue-green', color: '#97dfd7ff' }
  
   */

  getComplimentaryHue(colorspace, colorObj) {
    // @ts-ignore
    this['_color'] = _gch(this['_color'], colorspace, colorObj);
    if (colorObj) {
      // @ts-ignore
      return _gch(this['_color'], colorspace, colorObj);
    }

    return this;
  }

  /**
   * @public
   * Returns a spline interpolation between an `earthtone` and the bound color. Call `output()` to get the results.
   * @param {EarthtoneOptions} options Optional overrides for customizing interpolation and easing functions.
   * @returns {Color|ColorArray} The collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the bound color.
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

  earthtone(options) {
    this['colors'] = _rthtn(
      this['_color'],
      this['colorspace'],
      or(options, {})
    );

    if (gt(options['iterations'], 1)) {
      return new ColorArray(this['colors']);
    } else {
      // @ts-ignore
      this['_color'] = this['colors'];

      return this;
    }
  }

  /**
   * @public
   * Gets the contrast value between the bound and  comparison ( or `against`) color.
   * @param {ColorToken} [against='#000'] The color to use for comparison.
   * @returns {number} The contrast value between the two colors.
   *
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   * console.log(color('pink').contrast('yellow'))
   * // 1.4322318222624262
   */

  contrast(against) {
    let result;
    switch (against) {
      case 'lightMode':
        // @ts-ignore
        result = _gctrst(this['_color'], this['background']['lightMode']);

        break;
      case 'darkMode':
        // @ts-ignore
        result = _gctrst(this['_color'], this['background']['darkMode']);
        break;
      default:
        // @ts-ignore
        result = _gctrst(this['_color'], against);
        break;
    }
    return result;
  }

  /**
   * @public
   * Sets/Gets the `luminance` value of the bound color.
   * @param {number|string} amount The `luminance` value to set on the bound color.
   * @returns {number|Color} The `luminance` value if the method is called with no arguments else it returns a color with its `luminance `value mutated.
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
 
 

// Color {
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

  luminance(amount) {
    if (amount) {
      // @ts-ignore
      this['_color'] = _slm(this['_color'], this['_color']);
      this['_luminance'] = _glmnce(this['_color']);
      return this;
    }
    // @ts-ignore
    return _glmnce(this['_color']);
  }

  /**
   * @public
   * Returns the final value from the chain.
   * @returns {ColorToken}
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

  output() {
    // @ts-ignore
    return this['_color'];
  }

  /**
   * @public
   * Sets/Gets the saturation value of the bound color.
   * @param {string|number} amount The amount of `saturation` to set on the bound color token. See also the supported string expressions in the docs.
   * @see https://huetiful-js.com/basics/string-expressions
   * @returns {number|Color} The `saturation` value if the method is called with no arguments else it returns a color with its `saturation` value mutated.
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

  saturation(amount) {
    if (amount) {
      // @ts-ignore
      this['_color'] = _schn(
        `${this['colorspace']}.${mcchn(this['colorspace'])}`
        // @ts-ignore
      )(this['_color'], amount);

      return this;
    } else {
      this['_saturation'] = _gchn(
        `${this['colorspace']}.${mcchn(this['colorspace'])}`
        // @ts-ignore
      )(this['_color']);
      return this['_saturation'];
    }
  }

  /**
   * @public
 *@experimental
 * Returns `true` if the bound color has hue or is grayscale else `false`.
 * @param {HueColorSpaces} [colorspace='lch'] The colorspace to use when checking if the `color` is grayscale or not.

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

  // @ts-ignore
  isAchromatic(colorspace) {
    // @ts-ignore
    return _ia(this['_color']);
  }

  /**
   * @public
 *
 * @experimental
 * Returns `true` if color the bound color can be roughly classified as a warm color else `false`.
 * @returns {boolean}
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

  isWarm() {
    // @ts-ignore
    return _iwm(this['_color']);
  }
  /**
   * @public
 *
* Returns `true` if color the bound color can be roughly classified as a cool color else `false`.
* @returns {boolean}
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

  isCool() {
    // @ts-ignore
    return _icl(this['_color']);
  }

  /**
   * @public
   *
   * Returns the bound color as a simulation of the specified type of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.
   * @param {DeficiencyType} deficiencyType The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' can't perceive `'blue'` light properly. Default is `'red'` when the defeciency parameter is `undefined`.
   * @param {number} severity The intensity of the filter in the range [0,1].
   * @returns {Color} The color as its simulated variant. Preserves the bound `ColorToken` type.
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

  deficiency(deficiencyType, severity = 1) {
    this['_color'] = _cds(deficiencyType)(this['_color'], severity);
    return this;
  }

  /**
   * @public
 *
 * Returns the hue which is biasing the passed in color.
 * @returns {string} The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.
 * @example
 *
console.log(color("fefefe").overtone())
// 'gray'
 
console.log(color("cyan").overtone())
// 'green'
 
console.log(color("blue").overtone())
// false
 */

  ovetone() {
    // @ts-ignore
    return _ot(this['_color']);
  }

  /**
   * @public
 *
 * Returns the hue family of the bound color with the overtone included (if it has one). For achromatic colors it returns `"gray"`.
 * @returns {string} The name of the hue family for example `red` or `blue-green`.
 * @example
 *
 * import { color } from 'huetiful-js'
 
 
console.log(color("#310000").getHueFamily())
// red
 */

  getHueFamily() {
    // @ts-ignore
    return _ghf(this['_color']);
  }

  /**
   * @public
 *
 * Returns a randomised classic color scheme from the bound color.
 * @param {"analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary"} schemeType  Any classic color scheme.
@param {(t:number)=>number} [easingFunc=undefined] The easing function to apply to the palette. It's applied on the `hue` channel.
 * @returns {ColorArray} The collection of colors. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the type of the bound `ColorToken` as elements of the collection.
 * @example
 *
 import { color  } from 'huetiful-js'
 
console.log(color("#a1bd2f").scheme("triadic"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */

  scheme(schemeType, easingFunc) {
    // @ts-ignore
    return load(_schm(schemeType)(this['_color'], easingFunc));
  }
}

/**
 * @public
 * Wrapper function over the Color class that returns a new Color method chain.
 * @param {ColorToken} color The color token to bind.
 * @returns {Color} A `new Color` class with all the utilities that take a single color as the first parameter bound to its prototype.
 *
 * @example
 * import { color } from 'huetiful-js'
 * 
 * let wrapper = color('cyan').getHueFamily()
  // 'blue-green'
 
 */

function color(color) {
  return new Color(color);
}

export { load, color, Color, ColorArray };

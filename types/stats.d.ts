import { ColorToken, HueColorSpaces } from './types';

/**
 * Returns the largest chroma/saturation difference between the colors in a collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`.
 * @returns The largest chroma/saturation difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 * import { getFarthestChromaFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getFarthestChromaFrom(sample,against,mode))

        // 35


 */

declare function getFarthestChromaFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Returns the smallest chroma/saturation difference between the colors in a collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`.
 * @returns The smallest chroma/saturation difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 *
 * import { getNearestChromaFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getNearestChromaFrom(sample,against,mode))

        // 5


 */

declare function getNearestChromaFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Gets the largest hue angle difference between the colors in a collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`.
 * @returns The largest hue angle difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 * import { getFarthestHueFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getFarthestHueFrom(sample,against,mode))

        // 35
 */

declare function getFarthestHueFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Returns the smallest hue angle difference between the colors in a collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`.
 * @returns The smallest hue angle difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 * import { getNearestHueFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getNearestHueFrom(sample,against,mode))

        // 5


 */

declare function getNearestHueFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Returns the largest lightness difference between the colors in a collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @returns The largest lightness difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 *
 * import { getFarthestLightnessFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getFarthestLightnessFrom(sample,against,mode))

        // 35


 */

declare function getFarthestLightnessFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Returns the smallest `lightness` difference between the colors in a collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorspace The mode colorspace to retrieve the channel being queried.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @returns The smallest` lightness` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 * import { getNearestLightnessFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },
        mode='lch'

        console.log(getNearestLightnessFrom(sample,against,mode))

        // 5

 */

declare function getNearestLightnessFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * REturns the smallest `luminance` difference between the colors in a collection `against` a comparison color.
 * @param collection The collection of colors to query.
 * @param against The color to compare against. This color is used as a subtrahend against each color in the collection.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`luminance`) and name of the color as keys. Default is `false`.
 * @returns The smallest `luminance` difference in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 *
 * @example
 * import { getNearestLuminanceFrom } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 10, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ],
        against = { l: 5, c: 5, h: 5, mode: 'lch' },

      console.log(getNearestLuminanceFrom(sample, against));

// 0.00831940271523677

 */

declare function getNearestLuminanceFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Returns the largest `luminance` difference between the colors in a collection `against` a comparison color.
 * @param collection The collection of colors to query.
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

declare function getFarthestLuminanceFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Returns the average `chroma` from the passed in `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum.
 * @param collection The collection of color tokens to query.
 * @param colorspace The colorspace to fetch the `chroma` channel value from.
 * @returns The average `chroma` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.
 * @example
 *
* import { getMeanChroma } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]

        console.log(getMeanChroma(sample))

        // 30

 */

declare function getMeanChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: HueColorSpaces
): number | undefined;
/**
 * Returns the average `lightness` from the passed in `collection` of colors.
 * @param collection The collection of color tokens to query.
 * @param colorspace The colorspace to fetch the `lightness` channel value from.
 * @returns The average `lightness` in the passed in `collection`.
 * @example
 *
 * import { getMeanLightness } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]

        console.log(getMeanLightness(sample))

        // 20
 */

declare function getMeanLightness(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: HueColorSpaces
): number;
/**
 * Returns the average `hue` from the passed in `collection` of colors. Achromatic colors (or colors with a falsy `chroma` channel) will be excluded from the sum if `excludeGreys` is `true`. This can help make your color scales make more 'visual sense since the `hue` channel depends on the `chroma` channel to look colorful. This will also alter the final average hue angle returned.
 * @param collection The collection of color tokens to query.
 * @param colorspace The colorspace to fetch the `hue` channel value from.
 * @param excludeGreys Optional boolean to filter out achromatic colors from the passed in `collection`.
 * @returns The average `hue` angle in the passed in `collection`.
 * @example
 *
* import { getMeanHue } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 10, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 6, mode: 'lch' }
        ]

        console.log(getMeanHue(sample))

        // 12
 */

declare function getMeanHue(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: HueColorSpaces,
  excludeGreys?: boolean
): number;
/**
 * Returns the average relative `luminance` from the passed in `collection` of colors.
 * @param collection The collection of color tokens to query.
 * @returns The average relative `luminance` in the passed in `collection` or undefined if no color in the `collection` has a valid `chroma` channel.
 * @example
 *
 * import { getMeanLuminance } from 'huetiful-js'
 *
 * var sample =  [
          { l: 40, c: 20, h: 40, mode: 'lch' },
          { l: 20, c: 30, h: 20, mode: 'lch' },
          { l: 10, c: 40, h: 10, mode: 'lch' }
        ]

        console.log(getMeanLuminance(sample))

        // 0.05158704622405754
 */

declare function getMeanLuminance(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>
): number;
/**
 * Returns the average `distance` from the passed in `collection` of colors using the `differenceHyab` metric. In the future, an option to specify the metric to use when querying the `distance` factor.
 * @param collection The collection of color tokens to query.
 * @param against The color to compare the distance from. Used by the metric function for each color in the `collection`. Default is `black`.
 * @returns The average `distance` in the passed in `collection` .
 * @example
 * import { getMeanDistance } from 'huetiful-js'
 *

var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 30, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = 'blue';

console.log(getMeanDistance(sample, against));


// 142.7183074639663
 */

declare function getMeanDistance(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against?: ColorToken
): number;
/**
 * Returns the average `contrast` from the passed in `collection` of colors.
 * @param collection The collection of color tokens to query.
 * @param against The color to compare the `contrast` against. Used by the `getContrast` function for each color in the `collection`. Default is `black`
 * @returns The average `distance` in the passed in `collection` .
 * @example
 *
 * import { getMeanContrast } from 'huetiful-js'
 *
 *
var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 30, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = 'blue';

console.log(getMeanContrast(sample, against));

// 1.5960886749927419

 */

declare function getMeanContrast(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against?: ColorToken
): number;

/**
 * @experimental
 * Returns the smallest contrast value from the passed in colors compared against a sample color.
 * @param collection The collection of colors to query the color with the smallest contrast value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is `false`.
 * @returns The smallest contrast value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getNearestContrast } from 'huetiful-js'
 *
console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 2.4061390502133424

console.log(getNearestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 2.4061390502133424, name: '#a1bd2f' }
 */
declare function getNearestContrast(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
/**
 *
 * Returns the largest contrast value from the passed in colors compared against a sample color.
 * @param collection The collection of colors to query the color with the largest contrast value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`contrast`) and name of the color as keys. Default is `false`.
 * @returns The largest contrast value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
import { getFarthestContrast } from 'huetiful-js'

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green"));
// 3.08355493246362

console.log(getFarthestContrast(["b2c3f1", "#a1bd2f", "#f3bac1"], "green", true));
// { contrast: 3.08355493246362, name: '#f3bac1' }

 */
declare function getFarthestContrast(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
/**
 *
 * Returns the smallest `chroma` / `saturation` value from the passed in colors.
 * @param collection The collection of colors to query the color with the smallest chroma/saturation value.
 * @param colorspace The mode `colorspace` to retrieve saturation/chroma values.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`.
 * @returns The smallest chroma/saturation value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getNearestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestChroma(sample, 'lch'))
// 22.45669293295522
 */
declare function getNearestChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Gets the largest saturation value from the passed in colors.
 * @param colors The collection of colors to query the color with the largest saturation value.
 * @param colorspace The mode `colorspace` to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`saturation`) and name of the color as keys. Default is `false`.
 * @returns The largest saturation value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma(sample, 'lch'))
// 67.22120855010492
 */
declare function getFarthestChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Returns the smallest hue angle from the passed in colors.
 * @param colors The collection of colors to query the color with the smallest hue value.
 * @param colorspace The mode `colorspace` to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`.
 * @returns The smallest hue value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
 */
declare function getNearestHue(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: HueColorSpaces | string,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
/**
 *
 * Returns the largest hue angle from the passed in colors.
 * @param colors The array of colors to query the color with the largest hue value.
 * @param colorspace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`hue`) and name of the color as keys. Default is `false`.
 * @returns The largest hue value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
 */
declare function getFarthestHue(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 * Gets the smallest lightness value from the passed in colors.
 * @param collection The collection of colors to query the color with the smallest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @param mode THe mode colorspace to retrieve the lightness value from.
 * @returns The smallest lightness value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getNearestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getNearestLightness(sample, 'lch',true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }

 */
declare function getNearestLightness(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
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
 *  Gets the largest lightness value from the passed in colors.
 * @param collection The collection of colors to query the color with the largest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (`lightness`) and name of the color as keys. Default is `false`.
 * @param colorspace THe mode colorspace to retrieve the lightness value from.
 * @returns The largest lightness value in the colors passed in or a custom object with the `factor` and the color's `name` as keys.
 * @example
 *
 * import { getFarthestLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(getFarthestLightness(sample, 'lch',true))

// { lightness: 80.94668903360088, name: '#f3bac1' }

 */
declare function getFarthestLightness(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: HueColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };

export {
  getFarthestChroma,
  getNearestChroma,
  getFarthestContrast,
  getNearestContrast,
  getFarthestLightness,
  getNearestLightness,
  getFarthestHue,
  getNearestHue,
  getFarthestChromaFrom,
  getFarthestHueFrom,
  getFarthestLightnessFrom,
  getNearestChromaFrom,
  getNearestHueFrom,
  getNearestLightnessFrom,
  getFarthestLuminanceFrom,
  getNearestLuminanceFrom,
  getMeanChroma,
  getMeanContrast,
  getMeanDistance,
  getMeanHue,
  getMeanLightness,
  getMeanLuminance
};

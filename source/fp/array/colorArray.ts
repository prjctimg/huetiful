// This utility has all the array methods on its prototype
import type {
  ColorDistanceOptions,
  ColorSpaces,
  Color,
  HueColorSpaces,
  InterpolatorOptions,
} from "../../types";
import {
  discoverPalettes as nativeDiscoverPalettes,
  interpolateSpline as nativeInterpolator,
} from "../../palettes";
import * as filterBy from "../../filterBy";
import * as sortBy from "../../sortBy";
import {
  getNearestChroma as nativeMinChroma,
  getFarthestChroma as nativeMaxChroma,
  getFarthestHue as nativeMaxHue,
  getNearestHue as nativeMinHue,
  getNearestLightness as nativeMaxLightness,
  getFarthestLightness as nativeMinLightness,
} from "../../getters_and_setters";

class ColorArray extends Array {
  // private _colors: ColorToken[];
  constructor(colors: Color[]) {
    super();
    this["colors"] = colors;
    return this;
  }

  interpolateSpline(
    mode?: HueColorSpaces,
    samples?: number,
    kind?: "natural" | "monotone" | "basis",
    closed?: boolean,
    options?: InterpolatorOptions
  ): Color[] {
    this["colors"] = nativeInterpolator(
      this["colors"],
      mode,
      samples,
      kind,
      closed,
      options
    );
    // @ts-ignore
    return this;
  }

  /**
 * @function
 * @description Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
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

console.log(discoverPalettes(sample, "tetradic"))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
 */
  discoverPalettes(
    schemeType?: "analogous" | "triadic" | "tetradic" | "complementary"
  ): Color[] | object {
    this["colors"] = nativeDiscoverPalettes(this["colors"], schemeType);
    return this;
  }

  /**
 *@function
 * @description Gets the largest hue value from the passed in colors.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The largest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { maxHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(maxHue(sample, 'lch'))
// 273.54920266436477
 */
  getFarthestHue(
    colorSpace?: HueColorSpaces,
    colorObj = false
  ): number | { factor: number; color: Color } {
    return nativeMaxHue(this["colors"], colorSpace, colorObj);
  }

  /**
 *@function
 * @description Gets the smallest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest hue value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The smallest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { minHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(minHue(sample, 'lch'))
// 12.462831644544274
 */
  getNearestHue(
    colorSpace?: HueColorSpaces,
    colorObj = false
  ): number | { factor: number; color: Color } {
    return nativeMinHue(this["colors"], colorSpace, colorObj);
  }

  /**
 *@function
 * @description Gets the smallest lightness value from the passed in colors.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @returns The smallest lightness value in the colors passed in or a custom object.
 * @example
 * 
 * import { minLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(minLightness(sample, true))

// { lightness: 72.61647882089876, name: '#a1bd2f' }

 */
  getNearestLightness(
    mode?: HueColorSpaces,
    colorObj = false
  ): number | { factor: number; color: Color } {
    return nativeMinLightness(this["colors"], mode, colorObj);
  }

  /**
 *@function
 * @description Gets the largest lightness value from the passed in colors.
 * @param colors The array of colors to query the color with the largest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @returns The largest lightness value in the colors passed in or a custom object.
 * @example 
 * 
 * import { maxLightness } from 'huetiful-js'

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]

console.log(maxLightness(sample, true))

// { lightness: 80.94668903360088, name: '#f3bac1' }

 */
  getFarthestLightness(
    mode?: HueColorSpaces,
    colorObj = false
  ): number | { factor: number; color: Color } {
    return nativeMaxLightness(this["colors"], mode, colorObj);
  }

  /**
 * @function
 * @description Returns an array of colors in the specified saturation range. The range is normalised to [0,1].
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

  filterBySaturation(
    startSaturation = 0.05,
    endSaturation = 1,
    mode?: HueColorSpaces
  ): ColorArray {
    // @ts-ignore

    this["colors"] = filterBy.filterBySaturation(
      this["colors"],
      startSaturation,
      endSaturation,
      mode
    );
    return this;
  }

  /**
 * @function
 * @description Returns an array of colors in the specified lightness range. The range is between 0 and 100.
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
  filterByLightness(startLightness = 5, endLightness = 100): ColorArray {
    this["colors"] = filterBy.filterByLightness(
      this["colors"],
      startLightness,
      endLightness
    );
    return this;
  }
  /**
 * @function
 * @description Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.
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

  filterByDistance(
    against: Color,
    startDistance = 0.05,
    endDistance?: number,
    mode?: ColorSpaces,
    weights?: [number, number, number, number]
  ): ColorArray {
    this["colors"] = filterBy.filterByDistance(
      this["colors"],
      against,
      startDistance,
      endDistance,
      mode,
      weights
    );
    return this;
  }

  /**
   * 
 * @function
 * @description Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
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

  filterByContrast(
    against: Color,
    startContrast = 0.05,
    endContrast?: number
  ): ColorArray {
    this["colors"] = filterBy.filterByContrast(
      this["colors"],
      against,
      startContrast,
      endContrast
    );

    return this;
  }
  /**
 * @function
 * @description Returns colors in the specified hue ranges between 0 to 360.
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

  filterByHue(startHue = 0, endHue = 360): ColorArray {
    this["colors"] = filterBy.filterByHue(this["colors"], startHue, endHue);
    return this;
  }
  /**
 *  @function
 * @description Returns an array of colors in the specified luminance range. The range is normalised to [0,1].
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

  filterByLuminance(startLuminance = 0.05, endLuminance = 1): ColorArray {
    this["colors"] = filterBy.filterByLuminance(
      this["colors"],
      startLuminance,
      endLuminance
    );
    return this;
  }

  /**
 * @function
 * @description Sorts colors according to their lightness.
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

  sortByLightness(order?: "asc" | "desc"): ColorArray {
    // @ts-ignore

    this["colors"] = sortBy.sortByLightness(this["colors"], order);
    return this;
  }
  /**
 * @function
 * @description Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist
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

  sortByDistance(
    against: Color,
    order?: "asc" | "desc",
    options?: ColorDistanceOptions
  ): ColorArray {
    this["colors"] = sortBy.sortByDistance(
      this["colors"],
      against,
      order,
      options
    );

    return this;
  }

  /**
 * @function
 * @description Sorts colors according to the relative brightness as defined by WCAG definition.
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

  sortByLuminance(order?: "asc" | "desc"): ColorArray {
    this["colors"] = sortBy.sortByLuminance(this["colors"], order);
    return this;
  }
  /**
 * @function
 * @description Sorts colors according to their saturation.
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

  sortBySaturation(order: "asc" | "desc", mode?: HueColorSpaces): ColorArray {
    this["colors"] = sortBy.sortBySaturation(this["colors"], order, mode);
    return this;
  }

  /**
 * @function
 * @description Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)
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

  sortByContrast(against: Color, order?: "asc" | "desc"): ColorArray {
    this["colors"] = sortBy.sortByContrast(this["colors"], against, order);
    return this;
  }
  /**
 * @function
 * @description Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported
 * @param order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
* @param mode The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. 
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

  // Todo: Add the mode param so that users can select mode to work with. The default is lch
  sortByHue(order: "asc" | "desc", mode = "jch"): ColorArray {
    this["colors"] = sortBy.sortByHue(this["colors"], order, mode);
    return this;
  }

  /**
   * @method
   * @returns Returns the result value from the chain.
   */
  output(): Color {
    return this["colors"];
  }
}

/**
 * @class
 * @description A class that takes an array of colors and exposes all the utilities that handle collections of colors as methods. The methods can be chained as long as `this` being returned can be iterated on. Works like Array object.
 * @param colors An array of colors to chain the array methods on. Every element in the array will be parsed as a color token.
 */
var load = (colors: Color[]): ColorArray => {
  return new ColorArray(colors);
};

export { load, ColorArray };

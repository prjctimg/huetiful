// This utility has all the array methods on its prototype
import type { ColorSpaces, ColorToken, HueColorSpaces } from "../../types";
import { checkArg } from "../index";
import * as filterBy from "../../filterBy";

/**
 * @class
 * @description A class that takes an array of colors and exposes all the utilities that handle collections of colors as methods. The methods can be chained as long as `this` being returned can be iterated on. Works like Array object
 */
class ColorArray {
  /**
   *@param colors An array of colors to chain the array methods on. Every element in the array will be passed as a color token
   */
  constructor(colors: ColorToken[]) {
    this["colors"] = this;
    return this;
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
  ) {
    this["colors"] = this;
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
    this["colors"] = this;
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
    against: ColorToken,
    startDistance = 0.05,
    endDistance?: number,
    mode?: ColorSpaces,
    weights?: [number, number, number, number]
  ): ColorArray {
    this["colors"] = this;
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
 * @function
 * @description Returns an array of colors in the specified temperature range between 0 and 30,000 Kelvins.
 * @param  startTemp The minimum end of the temperature range.
 * @param  endTemp The maximum end of the temperature range.
 * @returns  Array of the filtered colors.
 * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
 * @example
 * 
 * import { filterByTemp } from "huetiful-js";
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


filterByTemp(sample, 1000, 20000);

// [
'#00c000', '#007e00',
'#164100', '#ffff00',
'#310000', '#3e0000',
'#4e0000', '#600000',
'#720000'
]
 */

  filterByTemp(startTemp = 1000, endTemp = 6000): ColorArray {
    this["colors"] = this;
    this["colors"] = filterBy.filterByTemp(this["colors"], startTemp, endTemp);
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
    against: ColorToken,
    startContrast = 0.05,
    endContrast?: number
  ): ColorArray {
    this["colors"] = this;
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
    this["colors"] = this;
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
    this["colors"] = this;
    this["colors"] = filterBy.filterByLuminance(
      this["colors"],
      startLuminance,
      endLuminance
    );
    return this;
  }
}

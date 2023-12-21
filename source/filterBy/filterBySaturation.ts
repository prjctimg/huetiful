import { getChannel } from "../getters_and_setters/get.ts";
import { filteredArr } from "../fp/array/filteredArr.ts";
import type { Color, Factor, HueColorSpaces } from "../types";
import { checkArg, matchChromaChannel, normalize } from "../fp/index.ts";
import modeRanges from "../color-maps/samples/modeRanges.ts";

/**
 *  @function
 * @description Returns an array of colors in the specified saturation range. The range is normalised to [0,1].
 * @param  colors The array of colors to filter.
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

const filterBySaturation = (
  colors: Color[],
  startSaturation = 0.05,
  endSaturation = 1,
  mode?: HueColorSpaces
): Color[] => {
  const factor: Factor = "saturation";

  if (matchChromaChannel(mode)) {
    mode = checkArg(mode, "jch");
    const modeChannel = `${mode}.${matchChromaChannel(mode)}`;
    const cb = getChannel(`${mode}.${modeChannel}`);

    // @ts-ignore
    const reDigits: number = /([0-9])/g.exec(startSaturation)["0"];
    let result = [];

    result = result.concat(
      ...filteredArr(factor, cb)(
        colors,
        normalize(reDigits, modeChannel),
        normalize(endSaturation, modeChannel)
      )
    );

    return result;
  } else {
    throw Error(
      `The passed in color space ${mode} has no chroma or saturation channel. Try 'jch'`
    );
  }
};

export { filterBySaturation };

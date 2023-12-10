// @ts-nocheck
import { getChannel } from '../getters_and_setters/get.ts';
import { filteredArr } from '../fp/array/filteredArr.ts';
import type { Color, Factor } from '../paramTypes';

/**
 *  @function
 * @description Returns an array of colors in the specified saturation range. The range is normalised to [0,1].
 * @param  colors The array of colors to filter.
 * @param  startSaturation The minimum end of the saturation range.
 * @param  endSaturation The maximum end of the saturation range.
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
  endSaturation = 1
): Color[] => {
  const factor: Factor = 'saturation';
  const cb = getChannel('lch.c');

  //  Normalize saturation ranges later
  return filteredArr(factor, cb)(
    colors,
    100 * startSaturation,
    100 * endSaturation
  );
};

export { filterBySaturation };

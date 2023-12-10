// @ts-nocheck
import { filteredArr } from '../fp/array/filteredArr.ts';
import { wcagContrast } from 'culori/fn';

import type { Color, Factor } from '../paramTypes';
import { toHex } from '../converters/toHex.ts';

/**
 *  @function
 * Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * @param  colors The array of colors to filter.
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

const filterByContrast = (
  colors: Color[],
  against: Color,
  startContrast = 0.05,
  endContrast?: number
): Color[] => {
  // Formatting color tokens to parseable type
  // Create an object that has the contrast and name of color as properties.
  const factor: Factor = 'contrast';
  const cb = (against: Color) => (color: Color) =>
    wcagContrast(...[color, against].map(toHex));

  return filteredArr(factor, cb(against))(colors, startContrast, endContrast);
};

export { filterByContrast };

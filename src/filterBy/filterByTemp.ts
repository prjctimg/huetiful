import { getTemp } from '../core-utils/getTemp.ts';
import { Color, factor } from '../paramTypes.ts';
import { filteredArr } from '../fp/array.ts';

/**
 * @function
 * @description Returns an array of colors in the specified temperature range between 0 and 30,000 Kelvins.
 * @param colors The array of colors to filter.
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

const filterByTemp = (
  colors: Color[],
  startTemp = 1000,
  endTemp = 6000
): Color[] => {
  // This variable stores the array that matches the filtering criteria defined by the start and end hues
  const factor: factor = 'temp';
  const cb = getTemp;

  return filteredArr(factor, cb)(colors, startTemp, endTemp);
};

export { filterByTemp };

//TODO Could also specify warm|cool to quickly return the filtered array. This param overrides startTemp and endTemp.

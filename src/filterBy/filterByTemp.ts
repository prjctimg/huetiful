import { filter, inRange, map, fromPairs } from "lodash-es";
import { getTemp } from "../core-utils/rgb2temperature.ts";
import { formatHex, converter } from "culori";
import { filterBy } from "../paramTypes.js";

/**
 * @function
 * Returns an array of colors in the specified temperature range between 0 and 30,000 Kelvins.
 * @param colors The array of colors to filter.
 * @param {Number} startTemp The minimum end of the temperature range.
 * @param {Number} endTemp The maximum end of the temperature range.
 * @returns {Array} Array of the filtered colors.
 * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
 */

//TODO Could also specify warm|cool to quickly return the filtered array. This param overrides startTemp and endTemp.

const filterByTemp: filterBy = (colors, startTemp = 1000, endTemp = 6000) => {
  // This variable stores the array that matches the filtering criteria defined by the start and end hues
  const factor = "temp";
  const cb = getTemp;

  return filteredArr(factor)(
    colorObjArr(factor, cb)(colors),
    startTemp,
    endTemp
  );
};

export { filterByTemp };

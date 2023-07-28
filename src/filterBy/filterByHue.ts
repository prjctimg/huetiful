import { filteredArr, colorObjArr } from "../core-utils/helpers.ts";

import { getChannel } from "../core-utils/get.ts";
import type { baseColor, filterBy } from "../paramTypes.ts";

//filterByHue takes an array of colors and
/**
 * @function
 * Returns colors in the specified hue ranges between 0 to 360 and color space.
 * @param colors The array of colors to filter.
 * @param  startHue The minimum end of the hue range.
 * @param  endHue The maximum end of the hue range.
 * @param   mode The color space to work in. Default is LCH because it is perceptually uniform.
 * @returns  Array of the filtered colors.
 */

const filterByHue: filterBy = (
  colors,
  startHue = 0,
  endHue = 360
): baseColor[] => {
  const factor = "hue";
  const cb = getChannel("lch.h");
  console.log(colorObjArr(factor, cb)(colors));
  return filteredArr(factor)(colorObjArr(factor, cb)(colors), startHue, endHue);
};

export { filterByHue };

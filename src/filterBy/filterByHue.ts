import { filteredArr, colorObjArr } from "../core-utils/helpers.ts";

import { getChannel } from "../core-utils/get.ts";
import type { Color, factor } from "../paramTypes.ts";

//filterByHue takes an array of colors and
/**
 * @function
 * Returns colors in the specified hue ranges between 0 to 360.
 * @param colors The array of colors to filter.
 * @param  startHue The minimum end of the hue range.
 * @param  endHue The maximum end of the hue range.
 * @returns  Array of the filtered colors.
 */

const filterByHue = (colors: Color[], startHue = 0, endHue = 360): Color[] => {
  const factor: factor = "hue";
  const cb = getChannel("lch.h");
  console.log(colorObjArr(factor, cb)(colors));
  return filteredArr(factor, cb)(colors, startHue, endHue);
};

export { filterByHue };

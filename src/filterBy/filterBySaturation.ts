// Filters colors according to a defined saturation range
import { multiply } from "lodash-es";
import { getChannel } from "../core-utils/get.ts";
import type { Color, filterBy } from "../paramTypes";
import { colorObjArr, filteredArr } from "../core-utils/helpers.ts";

/**
 *  @function
 * @description Returns an array of colors in the specified saturation range. The range is normalised to [0,1].
 * @param  colors The array of colors to filter.
 * @param  startSaturation The minimum end of the saturation range.
 * @param  endSaturation The maximum end of the saturation range.
 * @returns Array of filtered colors.
 */

const filterBySaturation: filterBy = (
  colors,
  startSaturation = 0.05,
  endSaturation = 1
): Color[] => {
  const factor = "saturation";
  const cb = getChannel("lch.c");

  //  Normalize saturation ranges later
  return filteredArr(factor, cb)(
    colors,
    multiply(100, startSaturation),
    multiply(100, endSaturation)
  );
};

export { filterBySaturation };

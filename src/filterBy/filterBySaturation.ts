// Filters colors according to a defined saturation range
import { map, filter, inRange, multiply } from "lodash-es";
import { getChannel } from "../core-utils/get.ts";
import type { baseColor, filterBy } from "../paramTypes";
import { colorObjArr, filteredArr } from "../core-utils/helpers.ts";
import { converter } from "culori";

const filterBySaturation: filterBy = (
  colors,
  startSaturation = 0.05,
  endSaturation = 1
) => {
  const factor = "saturation";
  const cb = getChannel("lch.c");

  //  Normalize saturation ranges later
  // Formatting color tokens to parseable type
  // Create an object that has the luminance and name of color as properties.
  return filteredArr(factor)(
    colorObjArr(factor, cb)(colors),
    multiply(100, startSaturation),
    multiply(100, endSaturation)
  );
};

export { filterBySaturation };

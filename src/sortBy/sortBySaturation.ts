import type { sortBy } from "../paramTypes.ts";
import { getChannel } from "../core-utils/get.ts";
import { sortedArr } from "../core-utils/helpers.ts";

const sortBySaturation: sortBy = (colors, order) => {
  const factor = "saturation";
  const cb = getChannel("lch.c");
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colors);
};

export { sortBySaturation };

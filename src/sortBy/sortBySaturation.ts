import type { sortBy } from "../paramTypes.js";
import { getChannel } from "../core-utils/get.js";

const sortBySaturation: sortBy = (colors, order) => {
  const factor = "saturation";
  const cb = getChannel;
  //Sorting the color array of object by the 'temp' property in the specified order.

  return sortedArr(factor, cb, order)(colorObjArr, colors);
};

export { sortBySaturation };

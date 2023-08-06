import {
  add,
  clamp,
  concat,
  find,
  gt,
  inRange,
  lt,
  lte,
  map,
  min,
  max,
  stubFalse,
  stubTrue,
  forEach,
  filter,
} from "lodash-es";

import { getChannel } from "../core-utils/get.ts";
import hueTempMap from "../color-maps/hueTemperature.ts";
import type { baseColor } from "../paramTypes.ts";

/**
 * @function
 * @description Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 */
const isCool = (color: baseColor): boolean => {
  // First we need to get the hue value which we'll pass to the predicate
  const factor = getChannel("lch.h")(color);

  console.log(`The factor is ${factor}`);

  return find(hueTempMap, (val, key) =>
    inRange(factor, val["cool"]["0"], val["cool"]["1"])
  )
    ? stubTrue()
    : stubFalse();

  // For ech key in hueTempMap concat the
};

export { isCool };

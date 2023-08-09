import {
  find,
  inRange,
  split,
  startsWith,
  stubFalse,
  stubTrue,
  toString,
} from "lodash-es";

import { getChannel } from "../core-utils/get.ts";
import hueTempMap from "../color-maps/hueTemperature.ts";
import type { Color } from "../paramTypes.ts";

const isInteger = (num: number) => /^-?[0-9]+$/.test(toString(num));

const floorCeil = (num: number): number => {
  const { ceil, floor } = Math;
  if (isInteger(num)) {
    return num;
  } else {
    let strArr = split(toString(num), ".");
    let float = strArr[1];

    //If the decimal value is .4  and below it will be rounded down else it will be rounded up.
    return /^[0-4]$/.test(float.charAt(0)) ? floor(num) : ceil(num);
  }
};

/**
 * @function
 * @description Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 */
const isCool = (color: Color): boolean => {
  // First we need to get the hue value which we'll pass to the predicate
  let factor = getChannel("lch.h")(color);

  return find(hueTempMap, (val, key) =>
    inRange(floorCeil(factor), val["cool"][0], val["cool"][1])
  )
    ? stubTrue()
    : stubFalse();
};

/**
 * @function
 * @description Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 */
const isWarm = (color: Color) => {
  const factor = getChannel("lch.h")(color);

  return find(hueTempMap, (val, key) =>
    inRange(floorCeil(factor), val["warm"][0], val["warm"][1])
  )
    ? stubTrue()
    : stubFalse();
};
export { isCool, isWarm };

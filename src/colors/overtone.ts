//@ts-nocheck
import { getChannel } from "../core-utils/get.ts";
import hueTempMap from "../color-maps/hueTemperature.ts";
import { find, matchesProperty, inRange, words, split } from "lodash-es";
import type { Color } from "../paramTypes.ts";

/**
 * @function
 * @description Returns the hue which is biasing the passed in color
 * @param color The color to query its overtone.
 * @returns The name of the overtone hue.
 */
const overtone = (color: Color): boolean => {
  const factor = getChannel("lch.h")(color);
  let hues: string[];
  // We check if the color can be found in the deined ranges
  find(hueTempMap, (val, key) =>
    (inRange(factor, val["warm"][0], val["warm"][1]) ||
      inRange(factor, val["cool"][0], val["cool"][1])) &&
    words(key, "-")
      ? (hues = split(key, "-"))
      : false,
  );

  return hues[1];
};

export { overtone };

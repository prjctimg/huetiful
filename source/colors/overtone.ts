//@ts-nocheck
import { getChannel } from "../getters_and_setters/get.ts";
import hueTempMap from "../color-maps/samples/hueTemperature.ts";
import { isAchromatic } from "./achromatic.ts";
import { customFindKey } from "../fp/object/customFindKey.ts";
import type { Color } from "../types";

/**
 * @function
 * @description Returns the hue which is biasing the passed in color
 * @param color The color to query its overtone.
 * @returns The name of the overtone hue. If an achromatic color is passed in it return the string gray otherwise if the color has no bias it returns false.
 * @example
 * 
 * import { overtone } from "huetiful-js";
 * 
console.log(overtone("fefefe"))
// 'gray'

console.log(overtone("cyan"))
// 'green'

console.log(overtone("blue"))
// false
 */
const overtone = (color: Color): string | boolean => {
  const factor = getChannel("lch.h")(color);
  let hue = customFindKey(hueTempMap, factor);

  // We check if the color can be found in the defined ranges

  if (isAchromatic(color)) {
    return "gray";
  } else if (/-/.test(hue)) {
    hue = hue.split("-");
    return hue[1];
  } else {
    return false;
  }
};

export { overtone };

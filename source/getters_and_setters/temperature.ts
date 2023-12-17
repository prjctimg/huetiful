import { getChannel } from "../getters_and_setters/get";
import hueTempMap from "../color-maps/samples/hueTemperature";
import { floorCeil } from "../fp/number/floorCeil";
import { inRange } from "../fp/number/inRange";
import type { Color } from "../types";

const predicate = (factor: number, temp: "warm" | "cool"): boolean => {
  const hueKeys = Object.keys(hueTempMap);
  if (
    hueKeys.some((val) =>
      inRange(
        floorCeil(factor),
        hueTempMap[val][temp][0],
        hueTempMap[val][temp][1]
      )
    )
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * @function
 * @description Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 * @example
 * 
 * import { isCool } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]



 */
const isCool = (color: Color): boolean => {
  // First we need to get the hue value which we'll pass to the predicate
  const factor = getChannel("lch.h")(color);

  return predicate(factor, "cool");
};

/**
 * @function
 * @description Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 * @example import { isWarm } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];



console.log(isWarm(sample[2]));
//true

console.log(map(sample, isWarm));


// [ false, true,  false]

 */
const isWarm = (color: Color): boolean => {
  const factor = getChannel("lch.h")(color);

  return predicate(factor, "cool");
};

export { isCool, isWarm };

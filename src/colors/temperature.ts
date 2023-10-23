//@ts-nocheck

import {
  concat,
  some,
  inRange,
  max,
  min,
  split,
  startsWith,
  stubFalse,
  stubTrue,
  toString,
  values,
} from "lodash-es"

import { getChannel } from "../core-utils/get.ts"
import hueTempMap from "../color-maps/hueTemperature.ts"
import type { Color } from "../paramTypes.ts"
import { getTemp } from "../core-utils/getTemp.ts"
import { floorCeil } from "../core-utils/helpers.ts"
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


console.log(isCool(sample[7]));
// false

console.log(map(sample, isCool));

// [ true,  false, truee]



 */
const isCool = (color: Color): boolean => {
  // First we need to get the hue value which we'll pass to the predicate
  let factor = getChannel("lch.h")(color)

  if (
    some(hueTempMap, (val, key) =>
      inRange(floorCeil(factor), val["cool"][0], val["cool"][1])
    )
  ) {
    return true
  } else {
    return false
  }
}

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



console.log(isWarm(sample[7]));
//true

console.log(map(sample, isWarm));


// [ false, true,  false]

 */
const isWarm = (color: Color): boolean => {
  const factor = getChannel("lch.h")(color)

  if (
    some(hueTempMap, (val, key) =>
      inRange(floorCeil(factor), val["warm"][0], val["warm"][1])
    )
  ) {
    return true
  } else {
    return false
  }
}

/**
 * @function
 * @description Checks the approximate maximum temperature that a color can have without losing its original hue. Does not take into account overtones (for now)
 * @param color The color to check its maximum temperature.
 * @returns The maximum temperature in Kelvins.
 */
const maxTemp = (color: Color): number => {
  // Get the hue value of the color
  const factor = getChannel("lch.h")(color)

  // Then  we check to see in what hue family it is and check the highest hue value for that family
  let hueRange = find(hueTempMap, (hue, key) =>
    inRange(factor, min(concat(...values(hue))), max(concat(...values(hue))))
  )
  let maxHue: number = max(concat(...values(hueRange)))

  let result = getTemp({
    l: 100,
    c: 100,
    h: maxHue,
  })

  return result
}

/**
 * @function
 * @description Checks the approximate minimum temperature that a color can have without losing its original hue. Does not take into account overtones (for now)
 * @param color The color to check its minimum temperature.
 * @returns The minimum temperature in Kelvins.
 */
const minTemp = (color: Color): number => {
  // Get the hue value of the color
  const factor = getChannel("lch.h")(color)

  // Then  we check to see in what hue family it is and check the highest hue value for that family
  let hueRange = find(hueTempMap, (hue, key) =>
    inRange(factor, min(concat(...values(hue))), max(concat(...values(hue))))
  )
  let minHue: number = min(concat(...values(hueRange)))

  let result = getTemp({
    l: 100,
    c: 100,
    h: minHue,
  })

  return result
}
export { isCool, isWarm, maxTemp, minTemp }

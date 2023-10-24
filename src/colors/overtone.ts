//@ts-nocheck
import { getChannel } from "../core-utils/get.ts"
import hueTempMap from "../color-maps/hueTemperature.ts"
import {
  find,
  matchesProperty,
  inRange,
  words,
  split,
  includes,
  values,
  min,
  max,
} from "lodash-es"
import type { Color } from "../paramTypes.ts"
import { isAchromatic } from "./achromatic.ts"

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
  const factor = getChannel("lch.h")(color)
  let hues: string[]
  // We check if the color can be found in the defined ranges
  find(hueTempMap, (hue, key) => {
    // Capture the min and max values and see if the passed in color is within that range
    let minVal = min(...values(hue))
    let maxVal = max(...values(hue))
    if (isAchromatic(color)) {
      return (hues = "gray")
    } else if (inRange(factor, minVal, maxVal) && includes(key, "-")) {
      return (hues = split(key, "-"))
    } else {
      return (hues = false)
    }
  })

  if (typeof hues == "string") {
    return hues
  } else {
    return hues[1] || false
  }
}

export { overtone }

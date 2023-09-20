// @ts-nocheck

import { Color, factor } from "../paramTypes"
import { getChannel } from "../core-utils/get.ts"
import {
  defaultTo,
  fromPairs,
  get,
  isUndefined,
  map,
  gt,
  sortBy,
  subtract,
  last,
  first,
  remove,
  split,
  lt,
} from "lodash-es"
import { colorObjArr, filteredArr, sortedArr } from "../core-utils/helpers"

//  The factor being investigated.

const factor: factor = "lightness"
let lightness = "lab.l"

// The subtrahend is each color in the collection
//This means that the color object with the smallest lightness value is the  nearest lightness.
// First check which value is greater and then act accordingly. Refactor hue.ts so that it returns negative
const lightnessDiff = (color: Color) => (subtrahend: Color) => {
  return lt(getChannel(lightness)(color), getChannel(lightness)(subtrahend))
    ? subtract(getChannel(lightness)(subtrahend), getChannel(lightness)(color))
    : subtract(getChannel(lightness)(color), getChannel(lightness)(subtrahend))
}

/**
 *
 * @function
 * @description Returns the smallest lightness difference between the passed in color and each element in the colors collection. Alightnesstic colors are excluded from the final result array. Use isAlightnesstic with Array.map to remove grays from your color collection.
 * @param color The color to use its lightness value as the minuend.
 * @param colors The collection of colors to compare against.
 * @returns The lightness value from the color with the smallest lightness distance. If the colors are alightnesstic, it returns undefined.
 */
const getNearestLightness = (color: Color, colors: Color[]): number => {
  const cb = lightnessDiff(color)
  let sortedObjArr = remove(
    sortedArr(factor, cb, "asc", true)(colors),
    (el) => el[factor] !== undefined
  )
  return get(first(sortedObjArr), factor)
}

/**
 *
 * @function
 * @description Returns the largest lightness difference between the passed in color and each element in the colors collection. Alightnesstic colors are excluded from the final result array. Use isAlightnesstic with Array.map to remove grays from your color collection.
 * @param color The color to use its lightness value as the minuend.
 * @param colors The collection of colors to compare against.
 * @returns The lightness value from the color with the largest lightness distance. If the colors are alightnesstic, it returns undefined.
 */

const getFarthestLightness = (color: Color, colors: Color[]): number => {
  const cb = lightnessDiff(color)
  let sortedObjArr = remove(
    sortedArr(factor, cb, "asc", true)(colors),
    (el) => el[factor] !== undefined
  )
  return get(last(sortedObjArr), factor)
}

/**
 *@function
 * @description Gets the smallest lightness value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @returns The smallest lightness value in the colors passed in or a custom object.
 */
const minLightness = (
  colors: Color[],
  colorObj = false
): number | { factor: number; color: Color } => {
  const cb = getChannel(lightness)
  const result: Array<{ factor: number; name: Color }> = remove(
    sortedArr(factor, cb, "asc", true)(colors),
    (el) => el[factor] !== undefined
  )
  let value

  if (gt(result.length, 0)) {
    if (colorObj) {
      value = first(result)
    } else {
      value = get(first(result), factor)
    }
  }

  return value
}

/**
 *@function
 * @description Gets the largest lightness value from the passed in colors.
 * @param colors The array of colors to query the color with the largest lightness value.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
 * @returns The largest lightness value in the colors passed in or a custom object.
 */
const maxLightness = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  const cb = getChannel(lightness)
  const result: Array<{ factor: number; name: Color }> = remove(
    sortedArr(factor, cb, "asc", true)(colors),
    (el) => el[factor] !== undefined
  )

  let value

  if (gt(result.length, 0)) {
    if (colorObj) {
      value = last(result)
    } else {
      value = get(last(result), factor)
    }
  }

  return value
}

export { getFarthestLightness, getNearestLightness, maxLightness, minLightness }

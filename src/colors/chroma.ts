// @ts-nocheck
// This module contains minChroma,maxChroma,getFarthestChroma,getNearestChroma

import { Color, HueColorSpaces, factor } from "../paramTypes"
import { getChannel } from "../core-utils/get.ts"
import { matchChromaChannel } from "../core-utils/helpers"
import { remove } from "lodash-es"
import { colorObjArr, filteredArr, sortedArr } from "../core-utils/helpers"

//  The factor being investigated.

const factor: factor = "saturation"

// I must test if the passed in mode has a chroma/saturation channel. Should I use RegExp  ?

// The callback to invoke per color in the passed in collection.
// The subtrahend is each color in the collection
//This means that the color object with the smallest chroma value is the  nearest chroma.
// First check which value is greater and then act accordingly. Refactor hue.ts so that it returns negative
const chromaDiff =
  (color: Color, colorSpace: HueColorSpaces | string) =>
  (subtrahend: Color) => {
    let cs = matchChromaChannel(colorSpace)

    if (getChannel(cs)(color) < getChannel(cs)(subtrahend)) {
      return getChannel(cs)(subtrahend) - getChannel(cs)(color)
    } else {
      return getChannel(cs)(color) - getChannel(cs)(subtrahend)
    }
  }

// If the predicate returns undefined or false on the chroma channel then it means that it is an achromatic color.
// Callback func for the minHue and maxHue utils. The funny thing is that most of the code is similar with minor changes here and there
const predicate = (colorSpace: HueColorSpaces) => (color: Color) =>
  getChannel(matchChromaChannel(colorSpace))(color) || undefined

/**
 *
 * @function
 * @description Returns the smallest chroma/saturation difference between the passed in color and each element in the colors collection. Achromatic colors are excluded from the final result array. Use isAchromatic with Array.map to remove grays from your color collection.
 * @param color The color to use its chroma/saturation value as the minuend.
 * @param colors The collection of colors to compare against.
 * @param colorSpace The mode color space to perform the computation in.
 * @returns The chroma/saturation value from the color with the smallest chroma distance. If the colors are achromatic, it returns undefined.
 * @example
 * 
 * import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma('lime', sample, 'lch'))
// 90.87480913244802
 */
const getNearestChroma = (
  color: Color,
  colors: Color[],
  colorSpace?: HueColorSpaces
): number => {
  const cb = chromaDiff(color, colorSpace || "lch")
  let sortedObjArr = remove(
    sortedArr(factor, cb, "asc", true)(colors),
    (el) => el[factor] !== undefined
  )
  return sortedObjArr[0][factor]
}

/**
 *
 * @function
 * @description Returns the largest chroma/saturation difference between the passed in color and each element in the colors collection. Achromatic colors are excluded from the final result array. Use isAchromatic with Array.map to remove grays from your color collection.
 * @param color The color to use its chroma/saturation value as the minuend.
 * @param colors The collection of colors to compare against.
 * @param colorSpace The mode color space to perform the computation in.
 * @returns The chroma/saturation value from the color with the largest saturation distance. If the colors are achromatic, it returns undefined.
 * @example 
 * 
 * import { getFarthestChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestChroma('lime', sample, 'lch'))
// 90.87480913244802
 */

const getFarthestChroma = (
  color: Color,
  colors: Color[],
  colorSpace?: HueColorSpaces
): number => {
  const cb = chromaDiff(color, colorSpace || "lch")
  let sortedObjArr = remove(
    sortedArr(factor, cb, "desc", true)(colors),
    (el) => el[factor] !== undefined
  )
  return sortedObjArr[0][factor]
}

/**
 *@function
 * @description Gets the smallest chroma/saturation value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest chroma/saturation value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false.
 * @returns The smallest chroma/saturation value in the colors passed in or a custom object.
 * @example
 * 
 * import { minChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(minChroma(sample, 'lch'))
// 22.45669293295522
 */
const minChroma = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  const result: Array<{ factor: number; name: Color }> = remove(
    sortedArr(factor, predicate(colorSpace || "lch"), "asc", true)(colors),
    (el) => el[factor] !== undefined
  )
  let value: number | { factor: number; name: Color }

  if (result.length > 0) {
    if (colorObj) {
      value = result[0]
    } else {
      value = result[0][factor]
    }
  }

  return value
}

/**
 *@function
 * @description Gets the largest saturation value from the passed in colors.
 * @param colors The array of colors to query the color with the largest saturation value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (saturation) and name of the color as keys. Default is false.
 * @returns The largest saturation value in the colors passed in or a custom object.
 * @example 
 * 
 * import { maxChroma } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(maxChroma(sample, 'lch'))
// 67.22120855010492
 */
const maxChroma = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  const result: Array<{ factor: number; name: Color }> = remove(
    sortedArr(factor, predicate(colorSpace || "lch"), "desc", true)(colors),
    (el) => el[factor] !== undefined
  )

  let value: { factor: number; name: Color } | number

  if (result.length > 0) {
    if (colorObj) {
      value = result[0]
    } else {
      value = result[0][factor]
    }
  }

  return value
}

export { getFarthestChroma, getNearestChroma, maxChroma, minChroma }

// @ts-nocheck

import {  filteredArr } from "../fp/array.ts"
import { differenceEuclidean } from "culori"
import { Color, factor, ColorSpaces } from "../paramTypes.ts"

/**
 *  @function
 * Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.
 * @param  colors The array of colors to filter.
 * @param  startDistance The minimum end of the distance range.
 * @param  endDistance The maximum end of the distance range.
 * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
 * @param mode The color space to calculate the distance in .
 * @returns Array of filtered colors.
 * @example
 * import { filterByDistance } from 'huetiful-js'

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
]

console.log(filterByDistance(sample, "yellow", 0.1))
// [ '#ffff00' ]
 */

const filterByDistance = (
  colors: Color[],
  against: Color,
  startDistance = 0.05,
  endDistance?: number,
  mode?: ColorSpaces,
  weights?: [number, number, number, number]
): Color[] => {
  // Formatting color tokens to parseable type
  // How do I get the distance

  // Create an object that has the distance and name of color as properties.
  const factor: factor = "distance"
  const cb = (against: Color, mode: ColorSpaces) => (color: Color) =>
    differenceEuclidean(mode || "lch", weights || [1, 1, 1, 0])(against, color)

  return filteredArr(factor, cb(against, mode))(
    colors,
    startDistance,
    endDistance
  )
}

export { filterByDistance }

// Make modes lower case and string keys
// Debug 'Cannot destructure mode'

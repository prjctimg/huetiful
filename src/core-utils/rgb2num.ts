//@ts-nocheck

import { converter } from "culori"
import type { Color } from "../paramTypes.ts"
import { mapValues } from "lodash-es"

/**
 * @function
 * @description Returns the numerical equivalent of a color.
 * @param color The color to convert to its numerical equivalent.
 * @returns value The numerical value of the color from 0 to 16,777,215.
 * @example
 * 
 * import { rgb2num } from 'huetiful-js'

console.log(rgb2num("b2c3f1"))
// 11715569
 */

const rgb2num = (color: Color): number => {
  let rgb = converter("rgb")(color)
  rgb = mapValues(rgb, (channel) => 255 * channel)
  return (rgb["r"] << 16) + (rgb["g"] << 8) + rgb["b"]
}

export { rgb2num }

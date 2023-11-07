//@ts-nocheck
import { defaultTo, isNumber, isString, multiply, toNumber } from "lodash-es"
import { converter, formatHex } from "culori"
import type { HueColorSpaces, Color } from "../paramTypes.ts"
import { expressionParser } from "./helpers.ts"
// ported froma chroma-js brighten

/**
 * @function
 * @description Darkens the color by reducing the lightness channel. .
 * @param   color The color to darken.
 * @param value The amount to darken with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @returns color The darkened color.
 * @example
 * 
 * import { alpha } from 'huetiful-js'

// Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
 */
const darken = (color: Color, value: number | string): Color => {
  defaultTo(value, 1)

  const Kn = 18
  const channel = "l"
  // Addv acheck here like the one in set.js
  const src = converter("lab")(color)

  if (typeof value === "number") {
    src["l"] -= Kn * value
  } else if (typeof value === "string") {
    expressionParser(src, channel, value)
  }

  return formatHex(src)
}

/**
 *
 * @param color The color to brighten.
 * @param value The amount to brighten with. Also supports expressions as strings e.g darken("#fc23a1","*0.5")
 * @param mode The color space to compute the color in. Any color space with a lightness channel will do (including HWB)
 * @returns
 */
const brighten = (color: Color, value: number | string): Color => {
  const { abs } = Math
  let result: Color
  if (isNumber(value)) {
    result = darken(color, -value)
  } else if (isString(value)) {
    let amt = abs(toNumber(value.slice(1)))
    result = darken(color, -amt)
  }
  return result
}

export { brighten, darken }

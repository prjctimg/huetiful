// @ts-nocheck
import type { Color } from "../paramTypes"
import { formatHex8, formatHex } from "culori"

/**
 *@function
 @description Converts color objects and CSS named colors to hexadecimal.
 * @param color The color to convert to hexadecimal. Works on color objects and CSS named colors.
 * @returns A hexadecimal representation of the passed in color.
 * @example
 * import { hex } from "huetiful-js";
 * 
console.log(hex({ l: 50, c: 31, h: 100, alpha: 0.5, mode: "lch" }))
// #7b794180

console.log(hex({ l: 50, c: 31, h: 100, mode: "lch" }))
// #7b7941
 */
const hex = (color: Color): Color => {
  if (typeof color === "object" && color["alpha"]) {
    return formatHex8(color)
  } else {
    return formatHex(color)
  }
}

export { hex }

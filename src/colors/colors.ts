import { map, values, has, toLower } from "lodash-es"
import shades from "../color-maps/defaultTailwindPalette.ts"
import type { HueMap, ScaleValues, Color } from "../paramTypes.ts"

/**
 * @function
 * @description A wrapper function for the default Tailwind palette. If called with both parameters it return the hex code at the specified shade and value. Else, if called with the shade parameter as "all" it will return all colors from the shades in the palette map at the specified value (if value is undefined it will default to "500"). When called with the shade parameter only it will return all the colors from 100 to 900 of the specified shade.
 * @param shade Any shade in the default TailwindCSS palette e.g amber,blue.
 * @param val Any value from 100 to 900 in increments of 100 e.g "200".
 * @returns color Returns a hex code string or array of hex codes depending on how the function is called.
 * @example
 * 
 * import { colors } from "huetiful-js";

let all300 = colors("all", 300);

console.log(all300)
//[
  '#cbd5e1', '#d1d5db', '#d4d4d8',
  '#d4d4d4', '#d6d3d1', '#fca5a5',
  '#fdba74', '#fcd34d', '#fde047',
  '#bef264', '#86efac', '#6ee7b7',
  '#5eead4', '#7dd3fc', '#93c5fd',
  '#c4b5fd', '#d8b4fe', '#f0abfc',
  '#f9a8d4', '#fda4af'
]

let red = colors("red");
console.log(red);

// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]

let red100 = colors("red", 100);

console.log(red100)
// #fee2e2
 */
const colors = (shade: keyof HueMap, val: ScaleValues): Color | Color[] => {
  const defaultHue = "all"

  shade = toLower(shade)
  // First do an AND check on hue and val params. If true return the hue at the specified value.
  // If only the hue is defined return the whole array of hex codes for that color.

  // If only the value is defined return that color value for every hue.

  if (shade === defaultHue) {
    return map(shades, (color) => color[val || "500"])
  } else if (has(shades, shade) && val) {
    return shades[shade][val]
  } else if (shade && typeof val == "undefined") {
    return values(shades[shade])
  } else if (typeof shade && typeof val == "undefined") {
    throw Error(`Both shade and value cannot be undefined`)
  }
}

export { colors }

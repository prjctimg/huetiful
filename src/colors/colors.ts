import {
  get,
  map,
  values,
  isUndefined,
  forEach,
  isEqual,
  has,
  toLower,
} from "lodash-es"
import shades from "../color-maps/defaultTailwindPalette.ts"
import type { HueMap, ScaleValues, Color } from "../paramTypes.ts"

/**
 * @function
 * @description A wrapper function for the default Tailwind palette. If called with both parameters it return the hex code at the specified shade and value. Else, if called with the shade parameter as "all" it will return all colors from the shades in the palette map at the specified value (if value is undefined it will default to "500"). When called with the shade parameter only it will return all the colors from 100 to 900 of the specified shade.
 * @param shade Any shade in the default TailwindCSS palette e.g amber,blue.
 * @param val Any value from 100 to 900 in increments of 100 e.g "200".
 * @returns color Returns a hex code string or array of hex codes depending on how the function is called.
 */
const colors = (shade: keyof HueMap, val: ScaleValues): Color | Color[] => {
  const defaultHue = "all"
  const black = "#000000"
  shade = toLower(shade)
  // First do an AND check on hue and val params. If true return the hue at the specified value.
  // If only the hue is defined return the whole array of hex codes for that color.

  // If only the value is defined return that color value for every hue.

  if (isEqual(shade, defaultHue)) {
    return map(shades, (color) => get(color, [val || "500"]))
  } else if (has(shades, shade) && val) {
    return get(shades[shade], val)
  } else if (shade && isUndefined(val)) {
    return values(shades[shade])
  } else if (isUndefined(shade) && isUndefined(val)) {
    return black
  }
}

export { colors }

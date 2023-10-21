import { nearest, differenceEuclidean, converter, formatHex8 } from "culori"
import { Color } from "../paramTypes"
import {
  filter,
  forOwn,
  isEqual,
  keys,
  map,
  set,
  some,
  toLower,
} from "lodash-es"
import { base } from "./base.ts"

const isColorEqual = (c1: Color, c2: Color): boolean => {
  return (
    isEqual(c1["h"], c2["h"]) &&
    isEqual(c1["l"], c2["l"]) &&
    isEqual(c1["c"], c2["c"])
  )
}

/**
 * @function
 * @description Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
 * @param colors The array of colors to create palettes from. Preferably use 5 or more colors for better results.
 * @param scheme (Optional) The palette type you want to return.
 * @returns An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
 */
const discoverPalettes = (
  colors: Color[],
  scheme: "analogous" | "triadic" | "tetradic" | "complementary"
): Color[] | object => {
  colors = map(colors, (c) => converter("lch")(c))
  const palettes = {}
  const schemes = ["analogous", "triadic", "tetradic", "complementary"]
  let targetPalettes = {}
  for (const color of colors) {
    forOwn(schemes, (s) => set(targetPalettes, s, base(s)(color, false)))

    for (const paletteType of keys(targetPalettes)) {
      const palette = []
      let variance = 0

      for (const targetColor of targetPalettes[paletteType]) {
        // filter out colors already in the palette
        const availableColors = filter(
          colors,
          (color1) => !some(palette, (color2) => isColorEqual(color1, color2))
        )

        const match = nearest(
          availableColors,
          differenceEuclidean("lch")
        )(targetColor)[0]

        variance += differenceEuclidean("lch")(targetColor, match)

        palette.push(match)
      }

      if (!palettes[paletteType] || variance < palettes[paletteType].variance) {
        palettes[paletteType] = map(palette, formatHex8)
      }
    }
  }

  if (typeof scheme == "string") {
    return palettes[toLower(scheme)]
  } else if (typeof scheme == "undefined") {
    return palettes
  } else {
    throw Error(`${scheme} is not a valid palette scheme.`)
  }
}

export { discoverPalettes }

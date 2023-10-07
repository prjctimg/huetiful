import { nearest, differenceEuclidean, converter } from "culori"
import { Color, palette } from "../paramTypes"
import { filter, forEach, isEqual, keys, map, set, some } from "lodash-es"
import { base } from "./base.ts"

const isColorEqual = (c1: Color, c2: Color): boolean => {
  return (
    isEqual(c1["h"], c2["h"]) &&
    isEqual(c1["l"], c2["l"]) &&
    isEqual(c1["c"], c2["c"])
  )
}

const discoverPalettes = (colors: Color[], scheme: palette) => {
  colors = map(colors, converter("lch"))
  const palettes = {}
  const schemes = [
    "analogous",
    "triadic",
    "tetradic",
    "complementary",
    "splitComplementary",
    "customAnalogous",
  ]

  for (const color of colors) {
    // initially this was an object but now its an array
    let targetPalettes = {}
    targetPalettes = forEach(schemes, (s) =>
      set(targetPalettes, s, base(s)(color, false))
    )

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
        palettes[paletteType] = {
          colors: palette,
          variance,
        }
      }
    }
  }

  return palettes
}

export { discoverPalettes }

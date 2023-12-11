// @ts-nocheck
import { nearest, differenceEuclidean, useMode, modeLch } from "culori/fn";
import { Color } from "../types";
import { base } from "./base.ts";
import { toHex } from "../converters/toHex.ts";

const { keys } = Object;
const isColorEqual = (c1: Color, c2: Color): boolean => {
  return c1["h"] === c2["h"] && c1["l"] === c2["l"] && c1["c"] === c2["c"];
};

/**
 * @function
 * @description Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
 * @param colors The array of colors to create palettes from. Preferably use 5 or more colors for better results.
 * @param scheme (Optional) The palette type you want to return.
 * @returns An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
 * @example
 * 
 * import { discoverPalettes } from 'huetiful-js'

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
  "#3e0000",
  "#310000",
]

console.log(discoverPalettes(sample, "tetradic"))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
 */
const discoverPalettes = (
  colors: Color[],
  scheme: "analogous" | "triadic" | "tetradic" | "complementary"
): Color[] | object => {
  const toLch = useMode(modeLch);
  colors = colors.map((color) => toLch("lch")(toHex(color)));
  const palettes = {};
  const schemes = ["analogous", "triadic", "tetradic", "complementary"];
  const targetPalettes = {};
  for (const color of colors) {
    schemes.forEach((s) => (targetPalettes[s] = base(s)(color, false)));

    for (const paletteType of keys(targetPalettes)) {
      const palette = [];
      let variance = 0;

      for (const targetColor of targetPalettes[paletteType]) {
        // filter out colors already in the palette
        const availableColors = colors.filter(
          (color1) => !palette.some((color2) => isColorEqual(color1, color2))
        );

        const match = nearest(
          availableColors,
          differenceEuclidean("lch")
        )(targetColor)[0];

        variance += differenceEuclidean("lch")(targetColor, match);

        palette.push(match);
      }

      if (!palettes[paletteType] || variance < palettes[paletteType].variance) {
        palettes[paletteType] = palette.map(formatHex8);
      }
    }
  }

  if (typeof scheme === "string") {
    return palettes[scheme.toLowerCase()];
  } else if (typeof scheme === "undefined") {
    return palettes;
  } else {
    throw Error(
      `${scheme} is not a valid scheme. The schemes are triadic | tetradic | analogous | complementary`
    );
  }
};

export { discoverPalettes };

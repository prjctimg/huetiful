import { base } from "./base.ts";
import type { Color } from "../paramTypes.ts";
import { filter, forEach, fromPairs, map, some } from "lodash-es";

const discoverPalette = (colors: Color[]) => {
  const palettes = {};

  let targetPalettes = forEach(colors, (color) =>
    fromPairs([
      ["analogous", base("analogous")(color)],
      ["tetradic", base("tetradic")(color)],
      ["triadic", base("triadic")(color)],
      ["splitComplementary", base("splitComplementary")(color)],
      ["complementary", base("complementary")(color)],
    ]),
  );
  let paletteType = map(targetPalettes, (val, key) => {
    let palette = [];

    let variance = 0;
    filter(targetPalettes[key], (c1) => !some(palette, (c2) => (c1, c2)));
  });
};

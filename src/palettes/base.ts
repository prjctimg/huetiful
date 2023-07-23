import { fromPairs, map, clamp, add } from "lodash-es";
import { converter } from "culori";
import { format } from "../core-utils/format.ts";
import type { baseColor, palette } from "../paramTypes.ts";

const base = (scheme: palette) => (color: baseColor) => {
  // Converting the color to Lab
  color = converter("lch")(color);

  // The map for steps to obtain the targeted palettes
  const targetHueSteps = {
    analogous: [0, 180, 360],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210],
  };

  const colors = map(targetHueSteps[scheme], (step) =>
    fromPairs([
      ["l", color["l"]],
      ["c", color["c"]],
      ["h", clamp(add(color["h"], step), 0, 360)],
    ])
  );

  return colors;
};

export { base };

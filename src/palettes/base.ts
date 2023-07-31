import {
  fromPairs,
  map,
  clamp,
  add,
  random,
  multiply,
  forEach,
} from "lodash-es";
import { converter } from "culori";
import { format } from "../core-utils/format.ts";
import type { baseColor, palette } from "../paramTypes.ts";

/**
 *
 * @param scheme
 * @returns
 */
const base = (scheme: palette) => (color: baseColor) => {
  // Converting the color to lch
  color = converter("lch")(color);
  const lowMin = 0.05,
    lowMax = 0.495,
    highMin = 0.5,
    highMax = 0.995;
  const targetHueSteps = {
    analogous: [0, 180, 360],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210],
  };
  // For each step return a  random value between lowMin && lowMax multipied by highMin && highMax and 0.9 of the step
  targetHueSteps = forEach(targetHueSteps, (scheme) =>
    map(
      (scheme) => (step) =>
        multiply(
          random(multiply(step, lowMin), multiply(step, lowMax), true),
          random(multiply(step, highMin), multiply(step, highMax), true)
        )
    )
  );

  // The map for steps to obtain the targeted palettes

  const colors = map(targetHueSteps[scheme], (step) =>
    fromPairs([
      ["l", color["l"]],
      ["c", color["c"]],
      ["h", clamp(add(color["h"], step), 0, 360)],
      ["mode", "lch"],
    ])
  );

  return colors;
};

export { base };

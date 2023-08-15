//@ts-nocheck
import {
  fromPairs,
  map,
  clamp,
  add,
  random,
  multiply,
  forEach,
  subtract,
  mean,
  range,
  divide,
} from "lodash-es";
import { converter, formatHex8 } from "culori";

import type { Color, palette } from "../paramTypes.ts";
import { adjustHue } from "../core-utils/helpers.ts";

/**
 * @function
 * @description Generates a randomised classic color scheme from a single base color.
 * @param  scheme {"analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary"} Any classic color scheme either
 * @param hex Optional boolen to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.
 * @returns An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.
 */

const base =
  (scheme: palette) =>
  (color: Color, hex = false): Color[] => {
    // Converting the color to lch
    color = converter("lch")(color);
    const lowMin = 0.05,
      lowMax = 0.495,
      highMin = 0.5,
      highMax = 0.995;
    let targetHueSteps = {
      analogous: map(range(3), (val) =>
        adjustHue(add(color["h"], multiply(divide(val, 12), 360)))
      ),
      triadic: map(range(3), (val) =>
        adjustHue(add(color["h"], multiply(divide(val, 3), 360)))
      ),
      tetradic: map(range(4), (val) =>
        adjustHue(add(color["h"], multiply(divide(val, 4), 360)))
      ),
      complementary: map(range(2), (val) =>
        adjustHue(add(color["h"], multiply(divide(val, 2), 360)))
      ),
      customAnalogous: map(range(4), (val) =>
        adjustHue(add(color["h"], multiply(divide(val, 4), color["h"])))
      ),
    };
    // For each step return a  random value between lowMin && lowMax multipied by highMin && highMax and 0.9 of the step
    targetHueSteps = forEach(targetHueSteps, (scheme) =>
      map(scheme, (step) =>
        mean([
          random(multiply(step, lowMax), multiply(step, lowMin), true),
          random(multiply(step, highMax), multiply(step, highMin), true),
        ])
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

    return hex ? map(colors, formatHex8) : colors;
  };

export { base };

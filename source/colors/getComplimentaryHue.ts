// @ts-nocheck
import hueTempMap from "../color-maps/samples/hueTemperature.js";
import { getChannel } from "../getters_and_setters/get.js";
import { min, max } from "../fp/array/min_max.js";
import { customConcat } from "../fp/object/customConcat.js";
import { inRange } from "../fp/number/inRange.js";
import { adjustHue } from "../fp/number/adjustHue.js";
import { setChannel } from "../getters_and_setters/set.js";
import type { ColorToken } from "../types.js";
import { toHex } from "../converters/toHex.js";

const { keys } = Object;
const hueKeys = keys(hueTempMap);

/**
 * @function
 * @description Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.
 * @param color The color to retrieve its complimentary hue.
 * @param colorObj Optional boolean whether to return an object with the result color hue family or just the result color. Default is false.
 * @returns An object with the hue family and complimentary color as keys.
 * @example
 *import { getComplimentaryHue } from "huetiful-js";
 *
 * 
console.log(getComplimentaryHue("pink", true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
 */
const getComplimentaryHue = (
  color: ColorToken,
  colorObj = false
): { hue: string; color: ColorToken } | ColorToken => {
  const modeChannel = "lch.h";
  // A complementary hue is 180 deg from the hue value of the passed in color

  const complementaryHue: number = adjustHue(
    getChannel(modeChannel)(color) + 180
  );

  // Find the hue family which the color belongs to

  // eslint-disable-next-line prefer-const

  const hueFamily = hueKeys
    .map((hue) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      const hueVals = customConcat(hueTempMap[hue]);
      const minVal = min(...hueVals);
      const maxVal = max(...hueVals);
      const bool = customConcat(hueTempMap[hue]).some(() =>
        inRange(complementaryHue, minVal, maxVal)
      );

      if (bool) {
        return hue;
      }
    })
    .filter((val) => typeof val === "string")
    .toString();

  let result: ColorToken | { hue: string; color: ColorToken };
  if (complementaryHue) {
    result = {
      hue: hueFamily,
      color: toHex(setChannel(modeChannel)(color, complementaryHue)),
    };
  } else {
    result = { hue: "gray", color: color };
  }

  return (colorObj && result) || result["color"];
};

export { getComplimentaryHue };

/* eslint-disable @typescript-eslint/ban-ts-comment */
// Returns the hue range where a color is found. If the hue Channel is falsy we return gray ?
// @ts-nocheck
import hueTempMap from "../color-maps/samples/hueTemperature.ts";
import { useMode, modeLch } from "culori/fn";
import { inRange } from "../fp/number/inRange.ts";
import { min, max } from "../fp/array/min_max.ts";
import { customConcat } from "../fp/object/customConcat.ts";
import { toHex } from "../converters/toHex.ts";
import type { ColorToken, Hue } from "../types";

/**
 *@function
 @description Gets the hue family which a a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 * @param color The color to query its shade or hue family.
 * @returns The name of the hue family for example red or green.
 * @example
 * 
 * import { getHue } from 'huetiful-js'


console.log(getHue("#310000"))
// red
 */
const getHue = (color: ColorToken): Hue => {
  // First convert the color to LCH
  const lch = useMode(modeLch);
  color = lch(toHex(color));

  //Capure the hue value
  const factor: number | undefined = color["h"];

  //  First check if hue is falsy. If true return the string "gray"
  // The predicate-func

  // We then pick the truthy key by returning an object which returns true for the inRange predicate

  const hueKeys = Object.keys(hueTempMap);
  const hueFamily = hueKeys
    .map((hue) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      const hueVals = customConcat(hueTempMap[hue]);
      const minVal = min(...hueVals);
      const maxVal = max(...hueVals);
      const bool = customConcat(hueTempMap[hue]).some(() =>
        inRange(factor, minVal, maxVal)
      );

      if (bool) {
        return hue;
      }
    })
    .filter((val) => typeof val === "string")
    .toString();

  return hueFamily;
};

export { getHue };

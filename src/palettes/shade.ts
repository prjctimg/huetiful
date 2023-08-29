// Returns the hue range where a color is found. If the hue Channel is falsy we return gray ?
import type { Color, factor } from "../paramTypes.ts";
import hueTempMap from "../color-maps/hueTemperature.ts";
import { converter, lch } from "culori";
import {
  max,
  concat,
  min,
  inRange,
  toString,
  pickBy,
  keys,
  defaultTo,
} from "lodash-es";
import { floorCeil } from "../core-utils/helpers.ts";

/**
 *@function
 @description Gets the hue family which a acolor belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 * @param color The color to query its shade or hue family.
 * @returns The name of the hue family for example red or green.
 */
const shade = (color: Color): string => {
  // First convert the color to LCH

  color = converter("lch")(color);

  // Helpers to fetch the highest/lowest hue value per hue range
  let getMin = (hue) => {
    return min(concat(hueTempMap[hue]["cool"], hueTempMap[hue]["warm"]));
  };
  let getMax = (hue) => {
    return max(concat(hueTempMap[hue]["cool"], hueTempMap[hue]["warm"]));
  };

  //Capure the hue value
  let factor: number | undefined = color["h"];

  //  First check if hue is falsy. If true return the string "gray"
  // The predicate-func
  let cb = (factor: number | false, hue: string) =>
    factor === undefined || NaN || false || null
      ? "gray"
      : inRange(floorCeil(factor), getMin(hue), getMax(hue));

  // We then pick the truthy key by returning an object which returns true for the inRange predicate
  let results = toString(
    keys(pickBy(hueTempMap, (val, hue) => cb(factor, hue)))
  );
  return results;
};

export { shade };

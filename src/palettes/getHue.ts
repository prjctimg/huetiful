// Returns the hue range where a color is found. If the hue Channel is falsy we return gray ?
// @ts-nocheck
import type { Color, factor, hue } from "../paramTypes.js"
import hueTempMap from "../color-maps/hueTemperature.js"
import { converter } from "culori"
import {
  max,
  concat,
  min,
  inRange,
  toString,
  pickBy,
  keys,
  defaultTo,
} from "lodash-es"
import { floorCeil } from "../core-utils/helpers.js"

/**
 *@function
 @description Gets the hue family which a a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 * @param color The color to query its shade or hue family.
 * @returns The name of the hue family for example red or green.
 */
const getHue = (color: Color): hue => {
  // First convert the color to LCH

  color = converter("lch")(color)

  // Helpers to fetch the highest/lowest hue value per hue range
  let getMin = (hue: string): number => {
      return min(concat(hueTempMap[hue]["cool"], hueTempMap[hue]["warm"]))
    },
    getMax = (hue: string): number => {
      return max(concat(hueTempMap[hue]["cool"], hueTempMap[hue]["warm"]))
    }

  //Capure the hue value
  let factor: number | undefined = color["h"]

  //  First check if hue is falsy. If true return the string "gray"
  // The predicate-func
  let cb = (factor: number | false, hue: string) =>
    factor === undefined || NaN || false || null
      ? "gray"
      : inRange(floorCeil(factor), getMin(hue), getMax(hue))

  // We then pick the truthy key by returning an object which returns true for the inRange predicate
  let results = toString(
    keys(pickBy(hueTempMap, (val, hue) => cb(factor, hue)))
  )
  return results
}

export { getHue }

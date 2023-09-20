// @ts-nocheck
import hueTempMap from "../color-maps/hueTemperature"
import { add, inRange, concat, min, max, findKey } from "lodash-es"
import { getChannel } from "../core-utils/get"
import { floorCeil } from "../core-utils/helpers"
import type { Color, HueColorSpaces } from "../paramTypes"
import { isAchromatic } from "../colors/achromatic"
import { setChannel } from "../core-utils/set"
import { formatHex8 } from "culori"

/**
 * @function
 * @description Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.
 * @param color The color to retrieve its complimentary hue.
 * @returns An object with the hue family and complimentary color as keys.
 */
const getComplimentaryHue = (color: Color): { hue: string; color: Color } => {
  let modeChannel = "lch.h"
  // A complementary hue is 180 deg from the hue value of the passed in color
  let complementaryHue = !isAchromatic(color)
    ? add(getChannel(modeChannel)(color), 180)
    : false

  // Find the hue family which the color belongs to
  let hueFamily: string = findKey(hueTempMap, (val, key) => {
    // Get the min and max hue value for each hue family
    let minHue = min(concat(val["warm"], val["cool"])),
      maxHue = max(concat(val["warm"], val["cool"]))

    return complementaryHue
      ? inRange(floorCeil(complementaryHue), minHue, maxHue)
      : false
  })

  return {
    hue: hueFamily,
    color: formatHex8(setChannel(modeChannel)(color, complementaryHue)),
  }
}

export { getComplimentaryHue }

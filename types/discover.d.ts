export type Collection = import('../types/types.js').Collection;
export type SchemeType = import('../types/types.js').SchemeType;
/**
 * Takes a collection of colors and finds the nearest matches using the `differenceHyab()` difference metric for a set of predefined palettes. The function does not work on achromatic colors, you may use `isAchromatic` to filter grays from your collection in the mode `colorspace` before passing it to the function.
 * @param {Collection} colors The collection of colors to create palettes from. Preferably use 6 or more colors for better results.
 * @param {SchemeType} kind (Optional) The palette type you want to return.
 * @returns {Collection} An array of colors if the `schemeType` parameter is specified else it returns a `Map` object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
 * @example
 *
 * import { discover } from 'huetiful-js'

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

console.log(discover(sample, "tetradic"))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
 */
export function discover(colors: Collection, kind: SchemeType, colorspace?: string): Collection;

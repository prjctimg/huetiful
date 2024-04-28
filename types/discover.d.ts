export type Collection = import('./types.js').Collection;
export type SchemeType = import('./types.js').SchemeType;
export type DiscoverOptions = import('./types.js').DiscoverOptions;
/**
 * Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes.
 *
 * The function returns different values based on the `kind` parameter passed in:
 *
 * * An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
 * * Else it returns an object of all the palette types as keys and their values as an array of colors.
 *
 * If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.
 * @param {Collection} colors The collection of colors to create palettes from. Preferably use 6 or more colors for better results.
* @param {DiscoverOptions} options
 * @returns {Collection}
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
export function discover(colors?: Collection, options?: DiscoverOptions): Collection;

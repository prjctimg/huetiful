export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type Colorspaces = import('../types/types.js').Colorspaces;
export type Stats = import('../types/types.js').Stats;
/**
 * Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param {ColorToken} color The color to check the temperature.
 * @returns {'cool' | 'warm'} True if the color is cool else false.
 * @example
 *
 * import { isCool } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]



 */
export function temp(color: ColorToken): 'cool' | 'warm';

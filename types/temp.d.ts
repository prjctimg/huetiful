export type ColorToken = import('./types.js').Collection;
export type Collection = import('./types.js').Collection;
export type Colorspaces = import('./types.js').Colorspaces;
export type Stats = import('./types.js').Stats;
/**
 * Returns a rough estimation of a color's temperature as either `'cool'` or `'warm'`.
 *
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

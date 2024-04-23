export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type TailwindColorFamilies = import('../types/types.js').TailwindColorFamilies;
export type ScaleValues = import('../types/types.js').ScaleValues;
/**
 *
 *  Returns TailwindCSS color value(s) of the specified `shade` from the default palette. If called with no parameters, it returns an array of colors from `050` to `900`. If called with parameter will return the specified shade value.
 * @param {TailwindColorFamilies |`all`} shade The hue family to return.
 * @param  {ScaleValues} value The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid.
 * @returns {Array<string>|string} A hex string value or array of hex strings.
 * @example
 *
 * import { tailwindColors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = tailwindColors("red");
console.log(red());
// [
  '#fef2f2', '#fee2e2',
  '#fecaca', '#fca5a5',
  '#f87171', '#ef4444',
  '#dc2626', '#b91c1c',
  '#991b1b', '#7f1d1d'
]


console.log(red(100));
// '#fee2e2'

console.log(red('900'));
// '#7f1d1d'


 *
 */
export function colors(shade: TailwindColorFamilies | `all`, value: ScaleValues): Array<string> | string;

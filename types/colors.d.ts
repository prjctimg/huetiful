export type ColorToken = import('./types.js').Collection;
export type TailwindColorFamilies = import('./types.js').TailwindColorFamilies;
export type ScaleValues = import('./types.js').ScaleValues;
/**
 *
 *  Returns TailwindCSS color value(s) from the default palette.
 *
 * The function behaves as follows:
 *
 * * If called with both `shade` and `value` parameters, it returns that color as a hex string. For example `'blue'` and `'500'` would return the equivalent of `blue-500`.
 * * If called with no parameters or just the `'all'` parameter as the `shade`, it returns an array of colors from `'050'` to `'900'` for every `shade`.
 * * If the `shade ` is `'all'` and the `value` is specified, it returns an array of colors at the specified `value` for each `shade`.
 * @param {TailwindColorFamilies |`all`} shade The hue family to return.
 * @param  {ScaleValues} value The tone value of the shade. Values are in incrementals of `100`. For example numeric (`100`) and its string equivalent (`'100'`) are valid.
 * @returns {Array<string>|string}
 * @example
 *
 * import { colors } from "huetiful-js";

// We pass in red as the target hue.
// It returns a function that can be called with an optional value parameter
let red = colors("red");
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

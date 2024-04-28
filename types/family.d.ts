export type HueFamily = import('./types.js').HueFamily;
export type ColorToken = import('./types.js').Collection;
/**
 * Gets the hue family which a color belongs to with the overtone included (if it has one.).
 *
 * For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.
 * @param {ColorToken} color The color to query its shade or hue family.
 * @returns {HueFamily}
 * @example
 *
 * import { family } from 'huetiful-js'


console.log(family("#310000"))
// 'red'
 */
export function family(color: ColorToken): HueFamily;

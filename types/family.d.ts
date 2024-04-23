export type TailwindColorFamilies = import('../types/types.js').TailwindColorFamilies;
export type ColorToken = import('../types/types.js').ColorToken;
/**
 * Gets the hue family which a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 * @param {ColorToken} color The color to query its shade or hue family.
 * @returns {TailwindColorFamilies} The name of the hue family for example `red` or `blue-green`.
 * @example
 *
 * import { family } from 'huetiful-js'


console.log(family("#310000"))
// 'red'
 */
export function family(color: ColorToken): TailwindColorFamilies;

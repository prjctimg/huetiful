export type ColorToken = import('./types.js').Collection;
export type DeficiencyType = import('./types.js').DeficiencyType;
export type DeficiencyOptions = import('./types.js').DeficiencyOptions;
/**
 * Simulates how a color may be perceived by people with color vision deficiency.
 *
 * To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:
 *
 * * 'tritanopia' - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
 * * 'deuteranopia' - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
 * * 'protanopia' - An inability to distinguish the color 'red'. The `kind` is `'red'`.
 *
 * @param {ColorToken} color The color to return its simulated variant
 * @param {DeficiencyOptions} options
 * @example
 *
 * import { deficiency, token('hex') } from 'huetiful-js'

// Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
// We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
let tritanomaly = deficiency('blue')
console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
// #dd663680

// Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
let protanopia = deficiency('red')
console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
// #9f9f9f
 */
export function deficiency(color: ColorToken, options?: DeficiencyOptions): any;

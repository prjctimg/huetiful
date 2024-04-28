export type ColorToken = import('./types.js').Collection;
/**
 * Sets the value of the specified channel on the passed in color.
 *
 * If the `amount` parameter is `undefined` it gets the value of the specified channel.
 * @param {string} modeChannel The mode and channel to be retrieved. For example `'rgb.b'` will return the value of the blue channel in the RGB color space of that color.
 
 * @example
 *
 * import { mc } from 'huetiful-js'

console.log(mc('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 *
*/
export function mc(modeChannel: string): (color: ColorToken, value?: string | number) => number | ColorToken;

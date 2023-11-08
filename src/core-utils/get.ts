//@ts-nocheck

import { converter } from "culori"
import type { Color } from "../paramTypes.ts"

/**
 * @function
 * @description Gets the  value specifified channel on the color.
 * @param mc The mode and channel to be retrieved. For example "rgb.b" will return the value of the blue channel in the RGB color space of that color.
 * @param color The color being queried.
 * @returns value The value of the queried channel.
 * @example
 * 
 * import { getChannel } from 'huetiful-js'

console.log(getChannel('rgb.g')('#a1bd2f'))
// 0.7411764705882353
 * */
const getChannel =
  (mc: string) =>
  (color: Color): number => {
    const [mode, channel] = mc.split('.')
    const src = converter(mode)(color)

    if (channel) {
      return src[channel]
    } else {
      throw Error(`unknown channel ${channel} in mode ${mode}`)
    }
    
  }

export { getChannel }

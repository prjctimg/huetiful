import type { ColorTuple, Color, ColorSpaces } from '../types';
import { toHex } from './toHex';
import 'culori/all';
import { converter } from 'culori/fn';
import { checkArg } from '../fp/misc';
import { getModeChannel } from '../fp/misc';
/**
 * @function
 * @description Returns an array of channel values in the mode color space.
 * @param color Any recognizable color token.
 * @param mode The mode color space to return channel values for
 * @returns An array of channel values with the colorspace as first element and the alpha channel if its explicitly defined in the passed in color.
 * @example 
 * 
 * 
let rgbColor = {
  r: 0.4,
  g: 0.3,
  b: 0.7,
  mode: "rgb",
};
console.log(toColorTuple(rgbColor,'rgb'));

// [ 'rgb', 0.4, 0.3, 0.7 ]

 */



function toColorTuple(color: Color, mode: ColorSpaces) {

  // @ts-ignore
  const colorObject: Color = converter(mode)(color);

  if (toHex(color)) {


    // @ts-ignore

    const arr: ColorTuple = Object.keys(colorObject).filter((ch) =>
      ch !== 'mode'
    ).map(key => colorObject[key]
    )
    arr.unshift(mode)
    return arr
  } else {
    throw Error(`${color} is not a valid color token. Try something like 'purple' or ['lch',85,60,143.5]`)

    // throw Error(`mode is not a valid color space`)
  }



}
export { toColorTuple };
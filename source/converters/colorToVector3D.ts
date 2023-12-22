import type { ChannelArray, Color, ColorSpaces } from '../types';
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
 * @returns An array of channel values with the colorspace as first element and the alpha channel if its explicitly defined in the passed in color
 */
function colorToVector3D(color: Color, mode?: ColorSpaces) {
  mode = checkArg(mode, 'rgb');
  color = toHex(color);

  // @ts-ignore
  const colorObject: Color = converter(mode)(color);
  // @ts-ignore
  const result: ChannelArray = Object.keys(colorObject).map((key) => {
    // @ts-ignore
    colorObject[getModeChannel(mode, key)];
  });

  // Add the colorspace string to the start of the array
  result.unshift(mode)
  return result;
}

export { colorToVector3D };

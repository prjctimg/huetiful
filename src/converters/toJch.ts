import { cfs, cam, IViewingConditions } from 'ciecam02-ts';
import { toHex as nativeToHex } from '../converters/toHex';
import { checkArg } from '../fp/misc';
import { hexToCam } from './ciecam';
import { xyz, Vector3D, illuminant } from 'ciebase-ts';
import { baseCieCam } from './ciecam';

import type { Color } from '../paramTypes';

/**
 * @function
 * @description Converts any color to Jch. The color is converted to CAM then XYZ under the hood.
 * @param color Any recognizable color token
 * @param viewingConditions Optional parameters for specifying the viewing conditions.
 * @returns An array of the Jch channel values
 */
const toJch = (color: Color, viewingConditions?: IViewingConditions) => {
  let {
    whitePoint,
    adaptingLuminance,
    backgroundLuminance,
    surroundType,
    discounting
  } = viewingConditions || {};

  color = checkArg(color, '#000000');
  whitePoint = checkArg(whitePoint, illuminant['D65']);
  adaptingLuminance = checkArg(adaptingLuminance, 40);
  backgroundLuminance = checkArg(backgroundLuminance, 20);
  surroundType = checkArg(surroundType, 'average');
  discounting = checkArg(discounting, false);

  const result: Vector3D = cam(
    {
      whitePoint,
      adaptingLuminance,
      surroundType,
      backgroundLuminance,
      discounting
    },
    cfs('Jch')
  ).toXyz(hexToCam(nativeToHex(color)));

  return result;
};

const jch2rgb = (jch: Vector3D) =>
  xyz(baseCieCam.fromXyz({ J: jch[0], C: jch[1], h: jch[2] })).toRgb(jch);

export { toJch };

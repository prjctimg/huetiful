import { rgb } from 'ciebase-ts';
import { toHex as nativeToHex } from '../converters/toHex';
import { baseCieCam, xyzToSrgb } from './adaptive';

export const hexToCam = (hex) => {
  return baseCieCam.fromXyz(bas.fromRgb(rgb.fromHex(nativeToHex(hex))));
};
const camToHex = (CAM) => {
  return rgb.toHex(xyzToSrgb.toRgb(xyzToSrgb.toRgb(baseCieCam.toXyz(CAM))));
};

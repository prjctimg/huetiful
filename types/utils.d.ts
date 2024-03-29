import 'culori/css';
import {
  ColorToken,
  HueColorSpaces,
  HueFamily,
  UniformColorSpaces
} from './types';

declare function getHueFamily(color: ColorToken): string;
declare function isCool(color: ColorToken): boolean;
declare function isWarm(color: ColorToken): boolean;
declare function getComplimentaryHue(
  color: ColorToken,
  colorObj?: boolean
):
  | {
      hue: string;
      color: ColorToken;
    }
  | ColorToken;
declare function setChannel(
  mc: string
): (color: ColorToken, value: number | string) => ColorToken;
declare function getChannel(mc: string): (color: ColorToken) => number;
declare function getLuminance(color: ColorToken): number;
declare function setLuminance(color: ColorToken, lum: number): ColorToken;
declare function alpha(color: ColorToken, value?: number | string): number;
declare function getContrast(color: ColorToken, against: ColorToken): number;
declare function overtone(color: ColorToken): string | boolean;

declare function darken(
  color: ColorToken,
  amount: number | string,
  colorspace?: UniformColorSpaces
): string;
declare function brighten(
  color: ColorToken,
  amount?: number,
  colorspace?: UniformColorSpaces
): string | object;
declare function isAchromatic(
  color: ColorToken,
  colorspace?: HueColorSpaces
): boolean;

export {
  brighten,
  darken,
  isAchromatic,
  alpha,
  overtone,
  setChannel,
  setLuminance,
  getChannel,
  getLuminance,
  getContrast,
  isCool,
  isWarm,
  getHueFamily,
  getComplimentaryHue
};

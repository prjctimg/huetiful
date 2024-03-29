import type {
  ColorObject,
  Colorspaces,
  ColorToken,
  ColorTuple,
  UniformColorSpaces
} from './types';

declare function ucsConverter(
  colorspace: UniformColorSpaces
): (color: ColorToken) => ColorObject;

declare function color2hex(color: ColorToken): string;
declare function num2color(
  num: number,
  colorspace?: Colorspaces
): string | object;
declare function color2num(color: ColorToken): number;
declare function temp2color(
  kelvin: number,
  colorspace?: Colorspaces
): string | object;
declare function color2tuple(
  color: string | object,
  colorspace?: Colorspaces,
  omitMode?: boolean
): Array<number> | [string, number, number, number, number?];

declare function tuple2object(
  arr: ColorTuple,
  targetMode?: Colorspaces
): ColorObject;

export {
  num2color,
  color2num,
  temp2color,
  color2tuple,
  ucsConverter,
  color2hex
};

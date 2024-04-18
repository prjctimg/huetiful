import { ColorToken, Factor, HueColorSpaces } from './types';

export type Stats = {
  [factor in Factor]: {
    extremums: [number, number];
    colors: [ColorToken, ColorToken];
    mean: number;
  };
} & {
  colorspace: HueColorSpaces;
  against: ColorToken | null;
};

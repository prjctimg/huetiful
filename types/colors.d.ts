import type {
  SequentialScheme,
  DivergingScheme,
  QualitativeScheme,
  TailwindColorFamilies,
  ScaleValues,
  ColorDistanceOptions,
  ColorToken
} from './types';
declare function getNearestColor(
  collection: ColorToken[] | 'tailwind',
  against: ColorToken,
  num?: number
): ColorToken | Array<ColorToken> | Map<any, ColorToken>;

declare function sequential(scheme: SequentialScheme): ColorToken[];
declare function diverging(scheme: DivergingScheme): ColorToken[];
declare function qualitative(scheme: QualitativeScheme): ColorToken[];

declare function tailwindColors(
  shade: TailwindColorFamilies | 'all',
  value?: ScaleValues
): string | Array<string>;
export { getNearestColor, diverging, qualitative, sequential, tailwindColors };

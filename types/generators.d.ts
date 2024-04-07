import type {
  ColorToken,
  EarthtoneOptions,
  HueColorSpaces,
  HueShiftOptions,
  InterpolatorOptions,
  PairedSchemeOptions,
  UniformColorSpaces,
  DistributionOptions,
  Collection,
  SchemeType
} from './types';
declare function scheme(
  schemeType: SchemeType | string
): (
  color: ColorToken,
  easingFunc?: (t: number) => number
) => ArrayLike<ColorToken>;
declare function discoverPalettes(
  colors: Collection,
  schemeType?: SchemeType,
  colorspace?: UniformColorSpaces
): Collection;
declare function earthtone(
  color: ColorToken,
  colorspace?: HueColorSpaces,
  options?: EarthtoneOptions
): ArrayLike<ColorToken>;
declare function hueShift(
  color: ColorToken,
  colorspace?: UniformColorSpaces,
  options?: HueShiftOptions
): ArrayLike<ColorToken>;

declare function interpolateSpline(
  colors: Collection,
  colorspace?: HueColorSpaces,
  iterations?: number,
  kind?: 'natural' | 'monotone' | 'basis',
  closed?: boolean,
  options?: Pick<InterpolatorOptions, 'hueFixup' | 'easingFn' | 'domain'>
): Array<string>;
/**
 * @internal
 */
declare function pltr(
  colors: ArrayLike<ColorToken>,
  colorspace?: HueColorSpaces,
  options?: object
): (t: number) => ColorToken;

declare function pairedScheme(
  color: ColorToken,
  options?: PairedSchemeOptions
): ArrayLike<ColorToken> | ColorToken;
declare function pastel(color: ColorToken): ColorToken;

declare function distribute(
  collection: Collection,
  options?: DistributionOptions
): Collection;

//declare function reverseSpectrum(collection, colorspace: HueColorSpaces): any;

export {
  distribute,
  discoverPalettes,
  hueShift,
  pairedScheme,
  pastel,
  scheme,
  interpolateSpline,
  pltr as interpolator,
  earthtone
};

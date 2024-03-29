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

/**
 * Distributes the hue angle of a color in the collection with the specified extremum (i.e the color with the smallest/largest hue angle in the collection) to all colors in the collection.
 * @param collection
 * @param threshold
 * @param options
 */
declare function distributeHue(
  collection: Collection | Map<any, ColorToken>,
  threshold: number,
  options?: DistributionOptions
): Array<ColorToken> | Map<any, ColorToken>;

declare function distributeLuminance(
  collection: Collection | Map<any, ColorToken>,
  threshold: number,
  options?: Omit<
    DistributionOptions,
    'hueFixup' | 'excludeAchromatic' | 'colorspace'
  >
): Array<ColorToken> | Map<any, ColorToken>;

declare function distributeLightness(
  collection: Collection | Map<any, ColorToken>,
  threshold: number,
  options?: Omit<DistributionOptions, 'hueFixup' | 'excludeAchrpmatic'>
): Array<ColorToken> | Map<any, ColorToken>;

declare function distributeChroma(
  collection: Collection | Map<any, ColorToken>,
  threshold: number,
  options?: DistributionOptions
): Array<ColorToken> | Map<any, ColorToken>;

declare function reverseSpectrum(collection, colorspace: HueColorSpaces): any;
7;

export {
  distributeChroma,
  distributeHue,
  distributeLightness,
  distributeLuminance,
  discoverPalettes,
  hueShift,
  pairedScheme,
  pastel,
  scheme,
  interpolateSpline,
  pltr as interpolator,
  earthtone
};

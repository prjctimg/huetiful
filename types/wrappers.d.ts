import type {
  ColorToken,
  HueColorSpaces,
  InterpolatorOptions,
  ColorOptions,
  HueFamily,
  HueShiftOptions,
  PairedSchemeOptions,
  EarthtoneOptions,
  Collection
} from './types';

declare class ColorArray {
  constructor(colors: Collection);
  interpolateSpline(
    colorspace?: HueColorSpaces,
    samples?: number,
    kind?: 'natural' | 'monotone' | 'basis',
    closed?: boolean,
    options?: Pick<InterpolatorOptions, 'hueFixup' | 'easingFn'>
  ): Array<ColorToken> | Map<any, ColorToken> | object;
  discoverPalettes(
    schemeType?: 'analogous' | 'triadic' | 'tetradic' | 'complementary'
  ): Array<ColorToken> | Map<any, ColorToken> | object;
  getFarthestHue(colorspace?: HueColorSpaces, colorObj?: boolean): FactObject;
  getNearestHue(colorspace?: HueColorSpaces, colorObj?: boolean): FactObject;
  getNearestLightness(
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;
  getNearestLuminanceFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;

  getFarthestLuminanceFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;

  getFarthestLightness(
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;
  filterByChroma(
    start?: string | number,
    end?: number,
    colorspace?: Omit<HueColorSpaces, 'hwb'>
  ): ColorArray;
  filterByLightness(start?: number, end?: number): ColorArray;
  filterByDistance(
    against: ColorToken,
    start?: string | number,
    end?: number
  ): ColorArray;
  filterByContrast(
    against: ColorToken,
    start?: number | string,
    end?: number
  ): ColorArray;
  filterByHue(start?: number | string, end?: string | number): ColorArray;
  filterByLuminance(start?: number | string, end?: number | string): ColorArray;
  sortByLightness(order?: 'asc' | 'desc'): ColorArray;
  sortByDistance(against: ColorToken, order?: 'asc' | 'desc'): ColorArray;
  sortByLuminance(order?: 'asc' | 'desc'): ColorArray;
  sortByChroma(order: 'asc' | 'desc', colorspace?: HueColorSpaces): ColorArray;
  sortByContrast(against: ColorToken, order?: 'asc' | 'desc'): ColorArray;
  sortByHue(order?: 'asc' | 'desc', colorspace?: HueColorSpaces): ColorArray;

  getNearestColor(
    against: ColorToken,
    num?: number
  ): ColorToken | Array<ColorToken> | Map<any, ColorToken>;

  getFarthestChromaFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;

  getNearestChromaFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;

  getFarthestHueFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;

  getNearestHueFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;

  getFarthestLightnessFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;

  getNearestLightnessFrom(
    against: ColorToken,
    colorspace?: HueColorSpaces,
    colorObj?: boolean
  ): FactObject;

  getMeanChroma(colorspace?: HueColorSpaces): number | undefined;

  getMeanLightness(colorspace?: HueColorSpaces): number;

  getMeanHue(colorspace?: HueColorSpaces, excludeGreys?: boolean): number;

  getMeanLuminance(): number;

  getMeanDistance(against?: ColorToken): number;

  getMeanContrast(against?: ColorToken): number;

  output(): ColorToken;
}

declare function load(collection: Collection): ColorArray;
declare class Color {
  constructor(c: ColorToken, options?: ColorOptions);

  alpha(amount?: number | string): Color | number;

  getChannel(modeChannel: string): number;

  setChannel(modeChannel: string, value: number | string): Color;
  via(origin: ColorToken, t?: number, options?: InterpolatorOptions): string;

  color2hex(): string;
  pastel(): Color;
  pairedScheme(options?: PairedSchemeOptions): ColorArray;
  hueShift(options?: HueShiftOptions): ColorArray;
  getComplimentaryHue(colorObj?: boolean):
    | {
        hue: HueFamily | 'gray';
        color: ColorToken;
      }
    | Color;
  earthtone(options?: EarthtoneOptions): ColorArray | Color;

  contrast(against: ColorToken | 'black' | 'white'): number;

  luminance(amount?: number | string): number | Color;

  output(): any;

  saturation(amount?: string | number): any;

  isAchromatic(): boolean;
  isWarm(): boolean;

  isCool(): boolean;
  deficiency(
    deficiencyType?: 'red' | 'blue' | 'green' | 'monochromacy',
    severity?: number
  ): ColorToken;

  overtone(): string | boolean;

  getHueFamily(): string;

  scheme(
    schemeType: 'analogous' | 'triadic' | 'tetradic' | 'complementary',
    easingFunc?: (t: number) => number
  ): ColorArray;
}
declare function color(color: ColorToken): Color;

export { ColorArray, load, Color, color };

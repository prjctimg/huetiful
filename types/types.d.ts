// Color token types
export type ColorTuple =
  | [string, number, number, number, number?]
  | Array<number>;

export type Order = 'asc' | 'desc';
export type FactObject =
  | number
  | {
      factor: number;
      color: ColorToken;
    };

export type SchemeType = 'analogous' | 'triadic' | 'tetradic' | 'complementary';

export type Collection<T = any> = T extends any[]
  ?
      | Array<ColorTuple>
      | Array<string>
      | Array<number>
      | Array<{ [key: string]: T }>
      | Array<boolean>
  : T extends object
    ? { [key: string]: T }
    : typeof T;

export type ColorOptions = {
  alpha?: number;
  lightness?: number;
  temperature?: number;
  colorspace?: Colorspaces;
  luminance?: number;
  saturation?: number;

  lightMode?: ColorToken;
  darkMode?: ColorToken;

  contrast?: number;
  mode?: Colorspaces;
};
export type ColorDistanceOptions = {
  weights?: [number, number, number, number];
  mode?: Colorspaces;
};

/**
 * @type
 * @description This object returns the lightMode and darkMode optimized version of a color with support to add color vision deficiency simulation to the final color result.
 */
export type AdaptivePaletteOptions = {
  backgroundColor?: { light?: ColorToken; dark?: ColorToken };
  colorBlind?: boolean;
};

export type InterpolatorOptions = {
  /**
   * The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.
   */
  colorspace?: Colorspaces;

  /**
   * The easing function to use.
   * @param  t Any value between 0 and 1
   * @returns A number.
   */
  easingFn?: (t: number) => number;

  /**
   * The type of hue fixup to apply to the hue channels during interpolation.
   */
  hueFixup?: 'longer' | 'shorter';

  /**
   * The amount of samples to return in the result collection.
   */
  num?: number;

  /**
   * The type of the spline interpolation method. Default is basis.
   */
  kind?: 'basis' | 'monotone' | 'natural';
  /**
     Optional parameter to return the `'closed'` variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is `false`
     */
  closed?: boolean;
};

/**
 * @type
 * @description The override parameters for palette functions.
 */
type Options = {
  /**
   *  domain The color stops in the range [0,1] passed in as an array. The color scale returned is from the start (which is element at index 0) up to the optional end which defaults to 1.
   */
  domain?: [number, number?];
};

export type PairedSchemeOptions = InterpolatorOptions & {
  /**
   * The color to pass through during interpolation.
   */
  via?: Tone;

  /**
   * The amount of hue angles to increment each iteration with.
   */
  hueStep?: number;
};
export type EarthtoneOptions = InterpolatorOptions & {
  /**
   * *  earthtone The earthtone to interpolate with.
   */
  earthtones?:
    | 'light-gray'
    | 'silver'
    | 'sand'
    | 'tupe'
    | 'mahogany'
    | 'brick-red'
    | 'clay'
    | 'cocoa'
    | 'dark-brown'
    | 'dark';
};
/**
 * Override options for factor distributed palettes.
 */
export type DistributionOptions = {
  /**
   * The colorspace to distribute the specified factor in. Defaults to `lch` when the passed in mode has no `'chroma' | 'hue' | 'lightness'` channel
   */
  colorspace?: Colorspaces;
  /**
   * The extreme end for the `factor`  we wish to distribute. If `mean` is picked, it will map the `average` value of that factor in the passed in collection.
   */
  extremum?: 'min' | 'max' | 'mean';

  /**
   * Exclude grayscale colors from the distribution operation. Default is `false`
   */
  excludeAchromatic?: boolean;

  /**
   * Exclude the color with the specified `extremum` from the distribution operation. Default is `false`
   */
  excludeSelf?: boolean;
};

export type Stats =
  | {
      [factor in Factor]: {
        extremums?: [number, number];
        colors?: [ColorToken, ColorToken];
        against?: ColorToken | null;
        mean?: number;
      };
    }
  | ({
      extremums?: [number, number];
      colors?: [ColorToken, ColorToken];
      against?: ColorToken | null;
      mean?: number;
    } & {
      colorspace?: Colorspaces;
      displayable?: number;
    });

/**
 * Options for specifying sorting conditions.
 */
export type SortByOptions = {
  /**
   
   * The factor to use for sorting the colors.
   */
  factor?: Factor;
  /**
      * The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`).

     */
  order?: 'asc' | 'desc';
  /**
   * The color to compare the `factor` with.
   * All the `factor`s are calculated between this color and the ones in the colors array.
   * Only works for the `'distance'` and `'contrast'` factor.
   */
  against?: ColorToken;
  /**
   * The colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.
   */
  colorspace?: Colorspaces;
};

export type StatsOptions = {
  /**
   * The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor.
   */
  against?: ColorToken;
  /**
   * The colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.
   */
  colorspace?: Colorspaces;

  /**
   * Choose whether to use the `against` color token for factors that support it as an overload (that is, all factors except `distance` and `contrast)
   */
  relativeMean?: boolean;
  factor?: Factor | Array<Factor>;
};

export type SchemeOptions = Pick<
  InterpolatorOptions,
  'num' | 'colorspace' | 'easingFn'
> & {
  kind?: SchemeType;
};

export type HueShiftOptions = Pick<
  InterpolatorOptions,
  'colorspace' | 'easingFn' | 'num'
> & {
  /**
   * *  minLightness  Minimum lightness value (range 0-100).
   */
  minLightness?: number;
  /**
   *  maxLightness  Maximum lightness value (range 0-100).
   */
  maxLightness?: number;
};

export type Tone = 'light' | 'dark';

/**
 * The type of color vision defeciency.
 */
export type DeficiencyType = 'red' | 'blue' | 'green' | 'monochromacy';

/**
 * Basic color families and their overtoned variants,
 */
export type HueFamily =
  | 'red-purple'
  | 'red'
  | 'yellow-red'
  | 'yellow'
  | 'green-yellow'
  | 'green'
  | 'blue-green'
  | 'blue'
  | 'purple-blue'
  | 'purple';

/**
 * The `diverging` color scheme in the ColorBrewer colormap.
 */
export type DivergingScheme =
  | 'Spectral'
  | 'RdYlGn'
  | 'RdBu'
  | 'PiYG'
  | 'PRGn'
  | 'RdYlBu'
  | 'BrBG'
  | 'RdGy'
  | 'PuOr';

/**
 * The `qualitative` color scheme in the ColorBrewer colormap.
 */
export type QualitativeScheme =
  | 'Set2'
  | 'Accent'
  | 'Set1'
  | 'Set3'
  | 'Dark2'
  | 'Paired'
  | 'Pastel2'
  | 'Pastel1';

/**
 * The `sequential` color scheme in the ColorBrewer colormap.
 */
export type SequentialScheme =
  | 'OrRd'
  | 'PuBu'
  | 'BuPu'
  | 'Oranges'
  | 'BuGn'
  | 'YlOrBr'
  | 'YlGn'
  | 'Reds'
  | 'RdPu'
  | 'Greens'
  | 'YlGnBu'
  | 'Purples'
  | 'GnBu'
  | 'Greys'
  | 'YlOrRd'
  | 'PuRd'
  | 'Blues'
  | 'PuBuGn'
  | 'Viridis';

/**
 * Any recognizable color token.
 */
export type ColorToken = number | ColorObject | ColorTuple | boolean | string;

export type ColorObject = {
  [channel: string]: number | undefined;

  alpha?: number;
  // @ts-ignore
  mode: Colorspaces;
};

/**
 * The color property being queried.
 */
export type Factor =
  | 'luminance'
  | 'chroma'
  | 'contrast'
  | 'distance'
  | 'lightness'
  | 'hue';

type callback = unknown;

/**
 * The `colorspace` or `mode` to use.
 */
export type Colorspaces =
  | 'lab'
  | 'lab65'
  | 'lrgb'
  | 'oklab'
  | 'rgb'
  | 'lch'
  | 'jch'
  | 'lch'
  | 'lch65'
  | 'oklch'
  | 'hsv'
  | 'hwb';

/**
 * The value of the Tailwind color.
 */
export type ScaleValues =
  | '050'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

/**
 * Color families in the default TailwindCSS palette.
 */
export type TailwindColorFamilies =
  | 'indigo'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'sky'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

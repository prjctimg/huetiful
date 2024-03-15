/*
 * @preserve 
 * @license
 * types.d.ts - Type declarations for huetiful-js.
 * Contains colors from TailwindCSS released under the MIT permissive licence.
Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// Color token types
export type ColorTuple = [Colorspaces, number, number, number, number?];

export type ColorOptions = {
  alpha?: number;
  lightness?: number;
  temperature?: number;
  colorspace?: HueColorSpaces;
  luminance?: number;
  saturation?: number;

  lightMode?: ColorToken;
  darkMode?: ColorToken;

  contrast?: number;
  colorSpace?: HueColorSpaces;
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

export type InterpolatorOptions = Pick<
  Options,
  | 'easingFn'
  | 'hueInterpolator'
  | 'chromaInterpolator'
  | 'hueFixup'
  | 'lightnessInterpolator'
  | 'domain'
>;

/**
 * @type
 * @description The override parameters for palette functions.
 */
type Options = {
  /**
   * The easing function to use.
   * @param t Any value between 0 and 1
   * @returns A number.
   */
  easingFn?: (t: number) => number;

  /**
   *@param The interpolation method to use on the hue channel.
   */
  hueInterpolator?: Interpolator;

  /**
   *@param The interpolation method to use on the chroma channel.
   */
  chromaInterpolator?: Interpolator;

  /**
   *@param The type of hue fixup to apply to the hue channels during interpolation.
   */
  hueFixup?: (arr: number[]) => number[];

  /**
   *@param The interpolation method to use on the lightness channel.
   */
  lightnessInterpolator?: Interpolator;
  /**
   *@param The color to pass through during interpolation.
   */
  via?: Tone;

  /**
   *@param The amount of hue angles to increment each iteration with.
   */
  hueStep?: number;

  /**
   * * @param earthtone The earthtone to interpolate with.
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

  /**
   *@param The amount of samples to return in the result collection.
   */
  iterations?: number;

  /**
   * * @param minLightness  Minimum lightness value (range 0-100).
   */
  minLightness?: number;
  /**
   * @param maxLightness  Maximum lightness value (range 0-100).
   */
  maxLightness?: number;

  /**
   * @param domain The color stops in the range [0,1] passed in as an array. The color scale returned is from the start (which is element at index 0) up to the optional end which defaults to 1.
   */
  domain?: [number, number?];
};

export type PairedSchemeOptions = Omit<
  Options,
  'earthtones' | 'maxLightness' | 'minLightness'
>;
export type EarthtoneOptions = Omit<
  Options,
  'hueStep' | 'via' | 'maxLightness' | 'minLightness'
>;

export type HueShiftOptions = Omit<Options, 'via' | 'earthtones' | ''> &
  InterpolatorOptions;
export type Interpolator = (arr: number[]) => (t: number) => number;
export type Tone = 'light' | 'dark';
export type DeficiencyType = 'red' | 'blue' | 'green' | 'monochromacy';
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
export type QualitativeScheme =
  | 'Set2'
  | 'Accent'
  | 'Set1'
  | 'Set3'
  | 'Dark2'
  | 'Paired'
  | 'Pastel2'
  | 'Pastel1';

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
 * @type
 * @description Any recognizable color token.
 */
export type ColorToken = number | string | ColorObject | ColorTuple;

export type ColorObject = {
  [channel: string]: number | undefined;

  alpha?: number;
  // @ts-ignore
  colorspace: Colorspaces;
};

/**
 * @param
 * An array of baseColor tokens (in short, just an array of valid colors)
 */

/**
 * @type
 * The property being queried. Used in utilities that perform operations on collections.
 */
export type Factor =
  | 'luminance'
  | 'temp'
  | 'saturation'
  | 'contrast'
  | 'distance'
  | 'lightness'
  | 'hue'
  | string;

type callback = unknown;

export type UniformColorSpaces =
  | 'lch'
  | 'jch'
  | 'dlch'
  | 'lch'
  | 'lch65'
  | 'lchuv'
  | 'oklch'
  | string;
export type Colorspaces =
  | 'a98'
  | 'cubehelix'
  | 'dlab'
  | 'jab'
  | 'lab'
  | 'lab65'
  | 'lrgb'
  | 'luv'
  | 'oklab'
  | 'rgb'
  | HueColorSpaces;

export type HueColorSpaces =
  | UniformColorSpaces
  | 'hsl'
  | 'hsv'
  | 'hsi'
  | 'hwb'
  | 'okhsl'
  | 'okhsv';

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

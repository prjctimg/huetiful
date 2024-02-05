/* eslint-disable prefer-const */
/** 
 * @license
 * generators.ts -  Palette utilities for generating color scales for huetiful-js.
 * Contains colors from TailwindCSS released under the MIT permissive licence.
 * Contains parts of chroma.js released under the Apache-2.0 license.
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import {
  useMode,
  modeLch,
  easingSmoothstep,
  samples as nativeSamples,
  modeJch,
  averageNumber,
  differenceEuclidean,
  interpolate,
  interpolatorSplineBasis,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone,
  interpolatorSplineMonotoneClosed,
  interpolatorSplineNatural,
  interpolatorSplineNaturalClosed,
  modeHsv,
  nearest,
  Color,
  differenceHyab
} from 'culori/fn';

import type {
  ColorToken,
  // EarthtoneOptions,
  HueColorSpaces,
  HueShiftOptions,
  InterpolatorOptions,
  PairedSchemeOptions,
  UniformColorSpaces
} from './types';
import {
  adjustHue,
  random,
  checkArg,
  matchChromaChannel,
  matchLightnessChannel,
  max,
  min
} from './helpers';

import { color2hex, ucsConverter } from './converters';
import { setChannel } from './utils';

/**
 * 
 *  Generates a randomised classic color scheme from a single scheme color.
 * @param  schemeType  Any classic color scheme either "analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary".
 * @returns An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.
 * @example
 * 
 import { scheme } from 'huetiful-js'

console.log(scheme("triadic")("#a1bd2f", true))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */

function scheme(
  schemeType: 'analogous' | 'triadic' | 'tetradic' | 'complementary' | string
) {
  /**
   * @param color The color to use as the starting point.
   * @param easingFunc Optional parameter to pass in a custom easing function. The default is smoothstep
   */
  return (
    color: ColorToken,
    easingFunc?: (t: number) => number
  ): ColorToken[] => {
    const cb = (iterations: number, distance: number, color: ColorToken) =>
      nativeSamples(iterations).map((val) =>
        adjustHue((color['h'] + distance) * (val * easingSmoothstep(val)))
      );
    schemeType = schemeType.toLowerCase();
    easingFunc = checkArg(easingFunc, easingSmoothstep) as typeof easingFunc;

    // @ts-ignore
    color = useMode(modeJch)(color);
    const lowMin = 0.05,
      lowMax = 0.495,
      highMin = 0.5,
      highMax = 0.995;
    const targetHueSteps = {
      analogous: cb(3, 12, color),
      triadic: cb(3, 120, color),
      tetradic: cb(4, 90, color),
      complementary: cb(2, 180, color)
    };
    // For each step return a  random value between lowMin && lowMax multipied by highMin && highMax and 0.9 of the step
    for (const scheme of Object.keys(targetHueSteps)) {
      targetHueSteps[scheme].map(
        (step: number) =>
          random(step * lowMax, step * lowMin) +
          random(step * highMax, step * highMin) / 2
      );
    }
    // The map for steps to obtain the targeted palettes
    const colors = targetHueSteps[schemeType].map((step: number) => ({
      l: color['l'],
      c: color['c'],
      h: step * easingFunc(1 / targetHueSteps[schemeType].length),
      mode: 'lch'
    }));

    return colors.map(color2hex);
  };
}

/**
 * 
 *  Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
 * @param colors The array of colors to create palettes from. Preferably use 5 or more colors for better results.
 * @param schemeType (Optional) The palette type you want to return.
 * @returns An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
 * @example
 * 
 * import { discoverPalettes } from 'huetiful-js'

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
  "#3e0000",
  "#310000",
]

console.log(discoverPalettes(sample, "tetradic"))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
 */
function discoverPalettes(
  colors: ColorToken[],
  schemeType?: 'analogous' | 'triadic' | 'tetradic' | 'complementary',
  colorspace?: UniformColorSpaces
): ColorToken[] | object {
  const [lightness, chroma] = [
    matchLightnessChannel(colorspace).split('.')[1],
    matchChromaChannel(colorspace).split('.')[1]
  ];

  const isColorEqual = (c1: ColorToken, c2: ColorToken): boolean => {
    return (
      c1['h'] === c2['h'] &&
      c1[lightness] === c2[lightness] &&
      c1[chroma] === c2[chroma]
    );
  };

  const toLch = useMode(modeLch);
  colors = colors.map((color) => toLch(color2hex(color)));
  const palettes = {};
  const schemeKeys = ['analogous', 'triadic', 'tetradic', 'complementary'];
  const targetPalettes = {};
  for (const color of colors) {
    schemeKeys.forEach((s) => (targetPalettes[s] = scheme(s)(color)));

    for (const paletteType of Object.keys(targetPalettes)) {
      const palette = [];
      let variance = 0;

      for (const targetColor of targetPalettes[paletteType]) {
        // filter out colors already in the palette
        const availableColors = colors.filter(
          (color1) => !palette.some((color2) => isColorEqual(color1, color2))
        );

        const match = nearest(
          availableColors,
          differenceEuclidean('lch')
        )(targetColor)[0];

        // @ts-ignore
        variance += differenceHyab()(targetColor, match);

        palette.push(match);
      }

      if (!palettes[paletteType] || variance < palettes[paletteType].variance) {
        palettes[paletteType] = palette.map(color2hex);
      }
    }
  }
  var result: object | ColorToken[];
  if (typeof schemeType === 'string') {
    result = palettes[schemeType.toLowerCase()];
  } else if (typeof schemeType === 'undefined') {
    result = palettes;
  } else {
    throw Error(
      `${schemeType} is not a valid scheme. The schemes are triadic | tetradic | analogous | complementary`
    );
  }

  return result;
}

/**
 * 
 *  Creates a scale of a spline interpolation between an earthtone and a color.
 * @param color The color to interpolate an earth tone with.
  * @param options Optional overrides for customising interpolation and easing functions.
 * @returns The array of colors resulting from the earthtone interpolation as hex codes.
 * @example
 * 
 * import { earthtone } from 'huetiful-js'


console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]

 */

// function earthtone(
//   color: ColorToken,
//   colorspace?: HueColorSpaces,
//   options?: EarthtoneOptions
// ): ColorToken[] {
//   let { samples, earthtones } = options || {};

//   samples = checkArg(samples, 1) as number;
//   colorspace = checkArg(colorspace, 'lch') as HueColorSpaces;
//   earthtones = checkArg(earthtones, 'dark') as typeof earthtones;
//   const tones = {
//     'light-gray': '#e5e5e5',
//     silver: '#f5f5f5',
//     sand: '#c2b2a4',
//     tupe: '#a79e8a',
//     mahogany: '#958c7c',
//     'brick-red': '#7d7065',
//     clay: '#6a5c52',
//     cocoa: '#584a3e',
//     'dark-brown': '#473b31',
//     dark: '#352a21'
//   };

//   const scheme: ColorToken = tones[earthtones.toLowerCase()];

//   const f = interpolator([scheme, color2hex(color)], colorspace);

//   return ((samples === 1 && color2hex(f(0.5))) ||
//     nativeSamples(samples).map((t) => color2hex(f(t)))) as ColorToken[];
// }

/**
 * 
 *  Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single scheme color. Min and max lightness value determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the scheme of the hueshift. Colors are internally converted to LCH.
 * @param options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 *@returns An array of colors in hex. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or (iterations*2)+1
 * @example
 * import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000");

console.log(hueShiftedPalette);

// [
  '#ffffe1', '#ffdca5',
  '#ca9a70', '#935c40',
  '#5c2418', '#3e0000',
  '#310000', '#34000f',
  '#38001e', '#3b002c',
  '#3b0c3a'
]
 */

function hueShift(
  color: ColorToken,
  colorspace?: UniformColorSpaces,
  options?: HueShiftOptions
): ColorToken[] {
  const lightnessMapper =
    (n: number) =>
    (start1: number, end1: number) =>
    (start2: number, end2: number) =>
      ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  colorspace = checkArg(colorspace, 'lch') as UniformColorSpaces;
  color = ucsConverter(colorspace.toLowerCase())(color as string);

  let {
    samples: iterations,
    hueStep,
    minLightness,
    maxLightness,
    easingFunc
  } = options || {};
  const [l, c] = [
    matchLightnessChannel(colorspace).split('.')[1],
    matchChromaChannel(colorspace).split('.')[1]
  ];
  // Pass default values in case the options object is overridden
  easingFunc = checkArg(easingFunc, easingSmoothstep) as typeof easingFunc;
  iterations = (checkArg(iterations, 6) as number) + 1;
  hueStep = checkArg(hueStep, 5) as number;
  (minLightness = checkArg(minLightness, 10) as number),
    (maxLightness = checkArg(maxLightness, 90) as number);
  // Pass in default values if any of the opts is undefined
  const palette: ColorToken[] = [color];
  // Maximum number of iterations possible.
  //Each iteration add a darker shade to the start of the array and a lighter tint to the end.
  for (let i = 1; i < iterations; i++) {
    //adjustHue checks hue values are clamped.

    // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].

    const [colorShiftDown, colorShiftUp] = [
      {
        [l]: lightnessMapper(i)(0.1, iterations)(color[l], minLightness),
        [c]: color[c],
        h: adjustHue(color['h'] - hueStep * (i * easingFunc(i))),
        mode: colorspace
      },
      {
        [l]: lightnessMapper(i)(0.15, iterations)(color[l], maxLightness),
        [c]: color[c],
        h: adjustHue(color['h'] + hueStep * (i * easingFunc(i))),
        mode: colorspace
      }
    ];
    palette.push(colorShiftUp);
    palette.unshift(colorShiftDown);
  }
  return Array.from(new Set(palette)).map(color2hex);
}
/**
 *
 *  Returns a spline interpolator function with customizable interpolation methods (passed in as 'kind') and optional channel specific overrides.
 * @param colors The array of colors to interpolate. If a color has a falsy channel for example black has an undefined hue channel some interpolation methods may return NaN affecting the final result.
 * @param colorspace The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.
 * @param kind The type of the spline interpolation method. Default is basis.
 * @param closed Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false
 * @param options Optional channel specific overrides.
 * @returns A hexadecimal representation of the resultant color.
 *
 * @example
 *
 */
function interpolateSpline(
  colors: ColorToken[],
  colorspace?: HueColorSpaces,
  samples?: number,
  kind?: 'natural' | 'monotone' | 'basis',
  closed = false,
  options?: InterpolatorOptions
): ColorToken[] {
  let {
    chromaInterpolator,
    hueFixup,
    hueInterpolator,
    lightnessInterpolator,
    easingFunc
  } = checkArg(options, {}) as InterpolatorOptions;
  // Set the internal defaults
  easingFunc = checkArg(easingFunc, easingSmoothstep) as typeof easingFunc;
  kind = checkArg(kind, 'basis') as typeof kind;

  let func;
  switch (kind) {
    case 'basis':
      func =
        (closed && interpolatorSplineBasisClosed) || interpolatorSplineBasis;
      break;
    case 'monotone':
      func =
        (closed && interpolatorSplineMonotoneClosed) ||
        interpolatorSplineMonotone;
      break;
    case 'natural':
      func =
        (closed && interpolatorSplineNaturalClosed) ||
        interpolatorSplineNatural;
      break;
  }
  // @ts-ignore
  let f = interpolate([...colors, easingFunc], colorspace, {
    h: {
      //@ts-ignore
      fixup: hueFixup,
      use: checkArg(hueInterpolator, func)
    },
    [matchChromaChannel(colorspace as string)]: {
      use: checkArg(chromaInterpolator, func)
    },
    [matchLightnessChannel(colorspace as string)]: {
      use: checkArg(lightnessInterpolator, func)
    }
  });

  // make sure samples is an absolute integer
  samples =
    (typeof samples === 'number' && samples >= 1 && samples) ||
    Math.ceil(Math.abs(samples));

  let result: string[];
  if (samples > 1) {
    result = nativeSamples(samples).map((s) => color2hex(f(s)));
  } else {
    //@ts-ignore
    result = result.push(color2hex(f(0.5)));
  }
  return result;
}

/**
 * @internal
 */
function interpolator(
  colors: ColorToken[],
  colorspace?: HueColorSpaces,
  options?: object
) {
  colorspace = checkArg(colorspace, 'lch') as typeof colorspace;
  let {
    chromaInterpolator,
    hueFixup,
    hueInterpolator,
    lightnessInterpolator,
    easingFunc
  } = checkArg(options, {}) as InterpolatorOptions;
  var [l, c] = [
    matchLightnessChannel(colorspace).split('.')[1],
    matchChromaChannel(colorspace).split('.')[1]
  ];

  return interpolate(
    [
      ...(colors as Array<Color>),
      checkArg(easingFunc, interpolator['easingFunc']) as typeof easingFunc
    ],
    // @ts-ignore
    colorspace,
    {
      //@ts-ignore
      h: {
        fixup: hueFixup,

        // @ts-ignore
        use: checkArg(hueInterpolator, interpolator['hueInterpolator'])
      },
      [c]: {
        use: checkArg(chromaInterpolator, interpolator['chromaInterpolator'])
      },
      [l]: {
        use: checkArg(
          lightnessInterpolator,
          interpolator['lightnessInterpolator']
        )
      }
    }
  );
}

/**
 *  Creates a scheme that consists of a scheme color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.
 * @param color The color to return a paired color scheme from.
 * @param options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
 * @returns An array containing the paired scheme.
 * @example 
 * 
 * import { pairedScheme } from 'huetiful-js'

console.log(pairedScheme("green",{hueStep:6,samples:4,tone:'dark'}))
// [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
 */
function pairedScheme(
  color: ColorToken,
  options?: PairedSchemeOptions
): ColorToken[] | ColorToken {
  // eslint-disable-next-line prefer-const
  let { samples, via, hueStep, easingFunc } = options || {};

  samples = checkArg(samples, 1) as number;
  easingFunc = checkArg(easingFunc, easingSmoothstep) as typeof easingFunc;
  via = checkArg(via, 'light') as typeof via;
  hueStep = checkArg(hueStep, 5) as number;

  const toLch = useMode(modeLch);
  color = toLch(color2hex(color));

  // get the hue of the passed in color and add it to the step which will result in the final color to pair with
  const derivedHue = setChannel('lch.h')(color, color['h'] + hueStep);

  // Set the tones to color objects with hardcoded hue values and lightness channels clamped at extremes
  const tones = {
    dark: { l: 0, c: 0, h: 0, mode: 'lch65' },
    light: { l: 100, c: 0, h: 0, mode: 'lch65' }
  };

  const scale = interpolate(
    [color as unknown as string, tones[via as string], derivedHue, easingFunc],
    'lch',
    checkArg(options, interpolator)
  );

  if (samples <= 1) {
    return color2hex(scale(0.5));
  } else {
    // Declare the num of iterations in samples() which will be used as the t value
    // Since the interpolation returns half duplicate values we double the sample value
    // Guard the num param against negative values and floats
    const smp = nativeSamples(samples * 2);

    //The array to capture the different iterations
    const results: ColorToken[] = smp.map((t) =>
      color2hex(scale(easingFunc(t)))
    );
    // Return a slice of the array from the start to the half length of the array
    return results.slice(0, results.length / 2);
  }
}

/**
 * 
 *  Returns a random pastel variant of the passed in color.
 * @param color The color to return a pastel variant of.
 * @returns A random pastel color.
 * @example
 * 
 * 
import { pastel } from 'huetiful-js'

console.log(pastel("green"))
// #036103ff
 */
function pastel(color: ColorToken): ColorToken {
  const samplePastelObj = [
    {
      color: '#fea3aa',
      saturation: 0.35826771653543305,
      value: 0.996078431372549
    },
    {
      color: '#f8b88b',
      saturation: 0.43951612903225806,
      value: 0.9725490196078431
    },
    { color: '#faf884', saturation: 0.472, value: 0.9803921568627451 },
    {
      color: '#f2a2e8',
      saturation: 0.3305785123966942,
      value: 0.9490196078431372
    },
    {
      color: '#b2cefe',
      saturation: 0.2992125984251969,
      value: 0.996078431372549
    },
    {
      color: '#baed91',
      saturation: 0.3881856540084388,
      value: 0.9294117647058824
    }
  ];

  const [sampleSaturation, sampleValues] = [
    samplePastelObj.map((el) => el['saturation']),
    samplePastelObj.map((el) => el['value'])
  ];

  const pastelSample = {
    averageSaturation: averageNumber(sampleValues),
    averageValue: averageNumber(sampleSaturation),
    minSampleSaturation: min(sampleSaturation),
    maxSampleSaturation: max(sampleSaturation),
    minSampleValue: min(sampleValues),
    maxSampleValue: max(sampleValues)
  };

  color = useMode(modeHsv)(color2hex(color));
  // For now we're simply returning an hsv object with the s and v channel set to the averages
  return color2hex({
    h: color['h'],
    s: pastelSample['averageSaturation'],
    v: random(pastelSample['minSampleValue'], pastelSample['maxSampleValue']),
    mode: 'hsv'
  });
}

export {
  discoverPalettes,
  hueShift,
  pairedScheme,
  pastel,
  scheme,
  interpolateSpline,
  interpolator
  // earthtone
};

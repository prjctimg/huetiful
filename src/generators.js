import {
  useMode,
  modeLch,
  easingSmoothstep,
  samples as _smp,
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
  differenceHyab
} from 'culori/fn';

import {
  adjustHue,
  rand,
  or,
  mcchn,
  mlchn,
  max,
  min,
  interpolatorConfig as pltrconfg,
  gt,
  gte
} from './helpers.js';

import { color2hex, ucsConverter } from './converters.js';
import { setChannel } from './utils.js';

function scheme(schemeType) {
  return (color, easingFunc) => {
    const cb = (iterations, distance, color) =>
      _smp(iterations).map((val) =>
        adjustHue((color['h'] + distance) * (val * easingSmoothstep(val)))
      );
    schemeType = schemeType.toLowerCase();
    easingFunc = or(easingFunc, easingSmoothstep);

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
        (step) =>
          rand(step * lowMax, step * lowMin) +
          rand(step * highMax, step * highMin) / 2
      );
    }
    // The map for steps to obtain the targeted palettes
    const colors = targetHueSteps[schemeType].map((step) => ({
      l: color['l'],
      c: color['c'],
      h: step * easingFunc(1 / targetHueSteps[schemeType].length),
      mode: 'lch'
    }));

    return colors.map(color2hex);
  };
}

function discoverPalettes(colors = [], schemeType, colorspace = 'lch') {
  const [lightness, chroma] = [
    mlchn(colorspace).split('.')[1],
    mcchn(colorspace).split('.')[1]
  ];

  const isColorEqual = (c1, c2) => {
    return (
      c1['h'] === c2['h'] &&
      c1[lightness] === c2[lightness] &&
      c1[chroma] === c2[chroma]
    );
  };

  const toLch = useMode(modeLch);
  colors = Object.keys(colors).map((color) => toLch(color2hex(colors[color])));
  const palettes = {};
  const schemeKeys = ['analogous', 'triadic', 'tetradic', 'complementary'];
  const targetPalettes = {};
  for (const color in colors) {
    var current = colors[color];
    schemeKeys.forEach((s) => (targetPalettes[s] = scheme(s)(current)));

    for (const paletteType of Object.keys(targetPalettes)) {
      const palette = [];
      let eps = 0;

      for (const targetColor of targetPalettes[paletteType]) {
        // filter out colors already in the palette

        const _colors = colors.filter(
          (c1) => !palette.some((c2) => isColorEqual(c1, c2))
        );

        const match = nearest(
          _colors,
          differenceEuclidean('lch')
        )(targetColor)[0];

        eps += differenceHyab()(targetColor, match);

        palette.push(match);
      }

      if (!palettes[paletteType] || eps < palettes[paletteType].variance) {
        palettes[paletteType] = palette.map(color2hex);
      }
    }
  }
  var result;
  if (
    typeof schemeType === 'string' &&
    schemeKeys.some((key) => key === schemeType)
  ) {
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

function earthtone(color, colorspace = 'lch', options = {}) {
  let { iterations, earthtones } = options;
  color = color2hex(color);
  iterations = or(iterations, 1);

  earthtones = or(earthtones, 'dark');
  const tones = {
    'light-gray': '#e5e5e5',
    silver: '#f5f5f5',
    sand: '#c2b2a4',
    tupe: '#a79e8a',
    mahogany: '#958c7c',
    'brick-red': '#7d7065',
    clay: '#6a5c52',
    cocoa: '#584a3e',
    'dark-brown': '#473b31',
    dark: '#352a21'
  };

  const scheme = tones[earthtones.toLowerCase()];

  const f = pltr([scheme, color], colorspace);

  return (
    (iterations === 1 && color2hex(f(0.5))) ||
    _smp(iterations).map((t) => color2hex(f(t)))
  );
}

function hueShift(color, colorspace = 'lch', options = {}) {
  const lmap = (n) => (start1, end1) => (start2, end2) =>
    ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;

  color = ucsConverter(colorspace.toLowerCase())(color);

  let { iterations, hueStep, minLightness, maxLightness, easingFunc } = options;
  const [l, c] = [
    mlchn(colorspace).split('.')[1],
    mcchn(colorspace).split('.')[1]
  ];
  // Pass default values in case the options object is overridden
  easingFunc = or(easingFunc, easingSmoothstep);
  iterations = or(iterations, 6) + 1;
  hueStep = or(hueStep, 5);
  (minLightness = or(minLightness, 10)), (maxLightness = or(maxLightness, 90));
  // Pass in default values if any of the opts is undefined
  const palette = [color];
  // Maximum number of iterations possible.
  //Each iteration add a darker shade to the start of the array and a lighter tint to the end.
  for (let i = 1; i < iterations; i++) {
    //adjustHue checks hue values are clamped.

    // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].

    const [colorShiftDown, colorShiftUp] = [
      {
        [l]: lmap(i)(0.1, iterations)(color[l], minLightness),
        [c]: color[c],
        h: adjustHue(color['h'] - hueStep * (i * easingFunc(i))),
        mode: colorspace
      },
      {
        [l]: lmap(i)(0.15, iterations)(color[l], maxLightness),
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
function interpolateSpline(
  colors = [],
  colorspace = 'lch',
  iterations,
  kind = 'basis',
  closed = false,
  options = {}
) {
  var { hueFixup, easingFn } = options;
  // Set the internal defaults
  easingFn = or(easingFn, pltrconfg['ef']);

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
  }

  colors = Object.values(colors);

  let f = interpolate([...colors, easingFn], colorspace, {
    h: {
      fixup: hueFixup,
      use: or(func, pltrconfg['hi'])
    },
    [mcchn(colorspace)[1]]: {
      use: or(func, pltrconfg['ci'])
    },
    [mlchn(colorspace)[1]]: {
      use: or(func, pltrconfg['li'])
    }
  });

  // make sure samples is an absolute integer
  iterations = gte(iterations, 1) ? iterations : 1;

  let res;
  if (gt(iterations, 1)) {
    res = _smp(iterations).map((s) => color2hex(f(s)));
  } else {
    res = res.push(color2hex(f(0.5)));
  }
  return res;
}

function pltr(colors = [], colorspace = 'lch', options = {}) {
  colorspace = or(colorspace, 'lch');
  let { easingFn } = options;
  var [l, c] = [
    mlchn(colorspace).split('.')[1],
    mcchn(colorspace).split('.')[1]
  ];

  return interpolate(
    [or(easingFn, pltrconfg['ef']), ...colors],

    colorspace,
    {
      h: {
        fixup: pltrconfg['hf'],

        use: pltrconfg['hi']
      },
      [c]: {
        use: pltrconfg['ci']
      },
      [l]: {
        use: pltrconfg['li']
      }
    }
  );
}

function pairedScheme(color, options) {
  // eslint-disable-next-line prefer-const
  let {
    iterations: samples,
    via,
    hueStep,
    easingFn: easingFunc
  } = options || {};

  samples = or(samples, 1);
  easingFunc = or(easingFunc, easingSmoothstep);
  via = or(via, 'light');
  hueStep = or(hueStep, 5);

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
    [color, tones[via], derivedHue, easingFunc],
    'lch',
    or(options, pltr)
  );

  if (samples <= 1) {
    return color2hex(scale(0.5));
  } else {
    // Declare the num of iterations in samples() which will be used as the t value
    // Since the interpolation returns half duplicate values we double the sample value
    // Guard the num param against negative values and floats
    const smp = _smp(samples * 2);

    //The array to capture the different iterations
    const results = smp.map((t) => color2hex(scale(easingFunc(t))));
    // Return a slice of the array from the start to the half length of the array
    return results.slice(0, results.length / 2);
  }
}

function pastel(color) {
  const smpObj = [
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

  const [smpSat, smpVal] = [
    smpObj.map((el) => el['saturation']),
    smpObj.map((el) => el['value'])
  ];

  const smp_pstl = {
    avSat: averageNumber(smpVal),
    avVal: averageNumber(smpSat),
    mn_smp_sat: min(smpSat),
    mx_smp_sat: max(smpSat),
    mn_smp_val: min(smpVal),
    mx_smp_val: max(smpVal)
  };

  color = useMode(modeHsv)(color2hex(color));
  // For now we're simply returning an hsv object with the s and v channel set to the averages
  return color2hex({
    h: color['h'],
    s: smp_pstl['avSat'],
    v: rand(smp_pstl['mn_smp_val'], smp_pstl['mx_smp_val']),
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
  pltr as interpolator,
  earthtone
};

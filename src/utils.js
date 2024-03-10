import hueTempMap from './color-maps/samples/hueTemperature.js';
import {
  adjustHue,
  customConcat,
  exprParser,
  floorCeil,
  inRange,
  lt,
  mlchn,
  max,
  rand,
  chnDiff,
  gmchn
} from './helpers.js';

import { tailwindColors } from './colors.js';

import { color2hex, ucsConverter } from './converters.js';
import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  filterGrayscale,
  interpolate,
  wcagLuminance,
  modeRgb,
  useMode,
  modeLch,
  converter,
  wcagContrast,
  nearest,
  differenceHyab,
  formatHex,
  easingSmootherstep as _ess,
  averageNumber,
  averageAngle
} from 'culori/fn';
import 'culori/css';

import { mcchn, sortedColl, or } from './helpers.js';

function getHueFamily(color) {
  var [nearestKey, nearestDiff] = ['', Infinity];
  for (let [idx, value] of Object.entries(hueTempMap)) {
    var [hueVals, currentHue, difference] = [
      customConcat(value),
      getChannel(`lch.h`)(color),
      Math.abs(max(hueVals) - currentHue)
    ];
    if (lt(difference, nearestDiff)) {
      nearestKey = idx;
      nearestDiff = difference;
    }
  }

  return nearestKey || null;
}

function lightnessPredicate(cspace) {
  return getChannel(`${mlchn(cspace)}`);
}

function temperaturePredicate(fctr, temp) {
  return Object.keys(hueTempMap).some((val) =>
    inRange(floorCeil(fctr), hueTempMap[val][temp][0], hueTempMap[val][temp][1])
  );
}

function isCool(color) {
  // First we need to get the hue value which we'll pass to the predicate

  return temperaturePredicate(getChannel('lch.h')(color), 'cool');
}

function isWarm(color) {
  return temperaturePredicate(getChannel('lch.h')(color), 'cool');
}
function contrastPredicate(color) {
  return (against) => getContrast(color, against);
}

function huePredicate(cspace) {
  return (c) => getChannel(`${or(cspace, 'jch')}.h`)(c);
}
function chromaPredicate(colorspace) {
  return (color) => getChannel(mcchn(colorspace))(color);
}

// The baseFunc for getting specifified factor extremums
function baseFunc(fctr, collection, cb, order, colorObj) {
  const result = sortedColl(
    fctr,
    cb,
    order,
    true
  )(collection).filter((el) => el[fctr] !== undefined);

  return (colorObj && result[0]) || result[0][fctr];
}

function getNearestContrast(collection, against, colorObj) {
  return baseFunc(
    'contrast',
    collection,
    contrastPredicate(against),
    'asc',
    colorObj
  );
}

function getFarthestContrast(collection, against, colorObj) {
  return baseFunc(
    'contrast',
    collection,
    contrastPredicate(against),
    'desc',
    colorObj
  );
}

function getNearestChroma(collection, colorspace, colorObj = false) {
  return baseFunc(
    'saturation',
    collection,
    chromaPredicate(colorspace),
    'asc',
    colorObj
  );
}

function getFarthestChroma(collection, colorspace, colorObj = false) {
  return baseFunc(
    'saturation',
    collection,
    chromaPredicate(colorspace),
    'desc',
    colorObj
  );
}
function getNearestHue(collection, colorspace, colorObj = false) {
  return baseFunc('hue', collection, huePredicate(colorspace), 'asc', colorObj);
}
function getFarthestHue(collection, colorspace, colorObj = false) {
  return baseFunc(
    'hue',
    collection,
    huePredicate(colorspace),
    'desc',
    colorObj
  );
}
function getComplimentaryHue(color, colorspace, colorObj = false) {
  const modeChannel = `${or(colorspace, 'lch')}.h`;

  const complementaryHue = adjustHue(
    getChannel(modeChannel)(color) + 180 * rand(0.965, 1)
  );

  const result = (complementaryHue && {
    hue: getHueFamily(complementaryHue),
    color: color2hex(setChannel(modeChannel)(color, complementaryHue))
  }) || { hue: 'gray', color: color };

  return (colorObj && result) || result['color'];
}

function setChannel(mc) {
  return (color, value) => {
    const [mode, channel] = mc.split('.');

    const src = converter(mode)(color2hex(color));

    if (channel) {
      if (typeof value === 'number') {
        src[channel] = value;
      } else if (typeof value === 'string') {
        exprParser(src, channel, value);
      } else {
        throw new Error(`unsupported value for setChannel`);
      }

      return src;
    } else {
      throw new Error(`unknown channel ${channel} in mode ${mode}`);
    }
  };
}

function getChannel(mc) {
  return (color) => {
    const [mode, channel] = (mc || color[0] || color['mode']).split('.');
    var res, src;
    if (Array.isArray(color) || typeof color === 'object') {
      if (mode === (color[0] || color['mode'])) {
        if (Array.isArray(color)) {
          res = color[mode.indexOf(channel)];
        } else {
          res = color[channel];
        }
      } else {
        res = converter(mode)(color2hex(color))[channel];
      }

      // if (Array.isArray(color)) {
      //   res=
      // }
    } else if (typeof color === 'number' || typeof color === 'string') {
      res = converter(mode)(color2hex(color))[channel];
    } else {
      throw Error(`unknown channel ${channel} in mode ${mode}`);
    }
    return res;
  };
}

function getLuminance(color) {
  return wcagLuminance(color2hex(color));
}

function setLuminance(color, lum) {
  const white = '#ffffff',
    black = '#000000';
  const toRgb = useMode(modeRgb);
  const EPS = 1e-7;
  let MAX_ITER = 20;

  if (lum !== undefined && typeof lum == 'number') {
    (lum == 0 && lum) || black || (lum == 1 && !lum) || white;

    // compute new color using...

    const cur_lum = wcagLuminance(color);

    color = toRgb(color2hex(color));

    const test = (low, high) => {
      //Must add the overrides object to change parameters like easings, fixups, and the mode to perform the computations in.

      const mid = interpolate([low, high])(0.5);
      const lm = getLuminance(color);

      if (Math.abs(lum - lm > EPS) || !MAX_ITER--) {
        // close enough
        return mid;
      }

      if (lm > lum) {
        return test(low, mid);
      } else {
        return test(mid, high);
      }
    };

    let rgb;
    if (cur_lum > lum) {
      rgb = test(black, color);
    } else {
      rgb = test(color, white);
    }
    color = rgb;
  }

  return formatHex(color);
}

function alpha(color = '#000', value) {
  // We never perfom an operation on an undefined color. Defaults to pure black
  const channel = 'alpha';
  const lch = useMode(modeLch);
  var src = lch(color2hex(color));
  if (typeof value === 'undefined' || null) {
    return src[channel];
  } else if (typeof value === 'number') {
    if (inRange(value, 0, 1)) {
      src[channel] = value;
    } else {
      src[channel] = value / 100;
    }
  } else if (typeof value === 'string') {
    exprParser(src, channel, value);
  }

  return color2hex(src);
}

function getContrast(color, against) {
  return wcagContrast(color2hex(color), color2hex(against));
}

function overtone(color) {
  var hue = getHueFamily(color);

  // We check if the color can be found in the defined ranges
  return (
    (isAchromatic(color) && 'gray') ||
    (/-/.test(hue) && hue.split('-')[1]) ||
    false
  );
}
function getNearestLightness(collection, colorspace, colorObj = false) {
  const fctr = 'lightness';
  return baseFunc(
    fctr,
    collection,
    lightnessPredicate(colorspace),
    'asc',
    colorObj
  );
}

function getFarthestLightness(collection, colorspace, colorObj = false) {
  const fctr = 'lightness';
  return baseFunc(
    fctr,
    collection,
    lightnessPredicate(colorspace),
    'desc',
    colorObj
  );
}

function darken(color = '#fff', amount, colorspace) {
  const chn = mlchn(colorspace)[1];
  colorspace = or(colorspace, 'lch');
  const src = ucsConverter(colorspace)(color2hex(color));

  var l = src[chn];

  if (typeof amount === 'number' && inRange(amount, 0, 1)) {
    // darken by value of the current channel as a percentage

    src[chn] = l * (end - start * _ess(amount));
  } else {
    Error(`Darken accepts a number in the range [0,1] but got ${amount}`);
  }

  return color2hex(src);
}
function brighten(color, amount = 1, colorspace) {
  return darken(color, +amount, colorspace);
}

function isAchromatic(color, colorspace) {
  // If a color has no lightness then it has no hue so its technically not achromatic since white and black are not grayscale
  var props = {
    lightness: getChannel(`${mlchn(colorspace)}`)(color),
    chroma: getChannel(`${mcchn(colorspace)}`)(color)
  };

  // Check if the saturation channel is zero or falsy for color spaces with saturation/chroma channel

  return props['chroma'] &&
    props['lightness'] !==
      (false || NaN || undefined || void 0 || 0 || Infinity || -Infinity)
    ? false
    : true;
}

// This module is focused on creating color blind safe palettes that adhere to the minimum contrast requirements

// How can I achieve this ?
// 1. First I pass the color(s) to a color vision deficiency simulation function
// 2. Check if the color has the minimum required contrast as compared to a dark/light mode surface which can optionally be overriden
// 3. Check the min luminance contrast ratio between the color and background.
// 4. Find out which channels do I need to tweak in order to fix up the colors.
// 5. Maybe provide an optional adaptive boolean which returns dark/light mode variant colors of the color blind safe palettes.

// Add reference to articles
// Read more about the minimum accepted values for palette accessibility

function colorDeficiency(deficiencyType) {
  const baseColorDeficiency = (def, col, sev) => {
    let result;
    col = color2hex(col);
    switch (def) {
      case 'blue':
        result = filterDeficiencyTrit(sev)(col);
        break;
      case 'red':
        result = filterDeficiencyProt(sev)(col);
        break;
      case 'green':
        result = filterDeficiencyDeuter(sev)(col);
        break;
      case 'monochromacy':
        result = filterGrayscale(sev, 'lch')(col);
        break;
    }

    return color2hex(result);
  };

  return (color, severity = 1) => {
    // Store the keys of deficiency types
    const deficiencies = ['red', 'blue', 'green', 'monochromacy'];
    // Cast 'red' as the default parameter
    deficiencyType = or(deficiencyType, 'red');

    if (
      typeof deficiencyType === 'string' &&
      deficiencies.some((el) => el === deficiencyType)
    ) {
      return baseColorDeficiency(deficiencyType, color, severity);
    } else {
      throw Error(
        `Unknown color vision deficiency ${deficiencyType}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`
      );
    }
  };
}
function getNearestColor(collection, color, num = 1) {
  const cb = (collection, color) => {
    return nearest(
      Object.values(collection),
      differenceHyab(),
      (color) => color
    )(color, num);
  };
  let result;

  if (collection === 'tailwind') {
    result = cb(tailwindColors('all'), color);
  } else {
    result = cb(collection, color);
  }

  return result;
}

// the baseFunc could be channelDiff

function getFarthestChromaFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'saturation',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}

function getFarthestHueFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'hue',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}

function getFarthestLightnessFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'lightness',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'desc',
    colorObj
  );
}

function getNearestChromaFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'saturation',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}

function getNearestHueFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'hue',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}

function getNearestLightnessFrom(
  collection = [],
  against = '#fff',
  colorspace = 'lch',
  colorObj = false
) {
  return baseFunc(
    'lightness',
    collection,
    chnDiff(against, mcchn(colorspace)),
    'asc',
    colorObj
  );
}

function getMeanChroma(collection = [], colorspace = 'lch') {
  var cb = getChannel(mcchn(colorspace));
  return averageNumber(Object.values(collection).map(cb));
}

function getMeanHue(collection, colorspace = 'lch') {
  var cb = (cb = getChannel(`${colorspace}.h`));
  return averageAngle(Object.values(collection).map(cb));
}

function getMeanDistance(collection, against = '#fff') {
  var cb = (x) => (y) => differenceHyab()(x, y);
  return averageNumber(Object.values(collection).map(cb(against)));
}

function getMeanContrast(collection, against = '#fff') {
  var cb = (x) => (y) => wcagContrast(x, y);

  return averageNumber(Object.values(collection).map(cb(against)));
}

export {
  brighten,
  darken,
  getNearestColor,
  colorDeficiency,
  isAchromatic,
  alpha,
  getFarthestLightness,
  getNearestLightness,
  overtone,
  getFarthestChroma,
  getNearestChroma,
  setChannel,
  setLuminance,
  getChannel,
  getLuminance,
  getContrast,
  getFarthestContrast,
  getNearestContrast,
  isCool,
  isWarm,
  getHueFamily,
  getComplimentaryHue,
  getFarthestHue,
  getNearestHue,
  getFarthestChromaFrom,
  getFarthestHueFrom,
  getFarthestLightnessFrom,
  getNearestChromaFrom,
  getNearestHueFrom,
  getNearestLightnessFrom,
  getMeanChroma,
  getMeanHue,
  getMeanDistance,
  getMeanContrast
};

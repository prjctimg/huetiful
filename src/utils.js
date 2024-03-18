/**
 * @license
 * utils.js - Functions for querying and setting color properties.
Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

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
  mcchn,
  or,
  color2hex,
  ucsConverter
} from './index.js';

import {
  interpolate,
  wcagLuminance,
  modeRgb,
  useMode,
  modeLch,
  converter,
  wcagContrast,
  formatHex,
  easingSmootherstep as _ess
} from 'culori/fn';
import 'culori/css';

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

export {
  brighten,
  darken,
  isAchromatic,
  alpha,
  overtone,
  setChannel,
  setLuminance,
  getChannel,
  getLuminance,
  getContrast,
  isCool,
  isWarm,
  getHueFamily,
  getComplimentaryHue
};

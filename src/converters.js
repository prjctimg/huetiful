'use strict';

import {
  useMode,
  modeRgb,
  modeHsv,
  modeLab,
  modeLab65,
  modeHwb,
  modeHsl,
  modeCubehelix,
  modeDlab,
  modeOkhsl,
  modeOkhsv,
  modeHsi,
  modeLrgb,
  modeXyz50,
  modeXyz65,
  modeOklab,
  converter,
  modeDlch,
  modeJch,
  modeLch,
  modeLch65,
  modeLchuv,
  modeOklch,
  formatHex,
  formatHex8,
  colorsNamed,
  modeLuv,
  modeRec2020,
  modeProphoto,
  modeP3,
  modeA98,
  modeYiq,
  modeJab
} from 'culori/fn';

import { gmchn } from './helpers.js';

function toOk(colorspace = 'oklch') {
  var cspaces = new Map([
    ['oklab', modeOklab],
    ['oklch', modeOklch],
    ['okhsl', modeOkhsl],
    ['okhsv', modeOkhsv]
  ]);
  return (color) => useMode(cspaces[colorspace])(color);
}

function toCubehelix(color = '#000') {
  return useMode(modeCubehelix)(color);
}

function toRGB(colorspace = 'rgb') {
  var cspaces = new Map([
    ['lrgb', modeLrgb],
    ['hwb', modeHwb],
    ['hsl', modeHsl],
    ['hsi', modeHsi],
    ['hsv', modeHsv],
    ['rgb', modeRgb],
    ['rec2020', modeRec2020],
    ['prophoto', modeProphoto],
    ['p3', modeP3],
    ['a98', modeA98],
    ['xyb', modeXyb],
    ['yiq', modeYiq]
  ]);

  return useMode(cspaces[colorspace])(color);
}

function toJab(color) {
  return useMode(modeJab)(color);
}

function toJch(color) {
  return useMode(modeJch)(color);
}

function toCIE(colorspace = 'lch') {
  var cspaces = new Map([
    ['xyz65', modeXyz65],
    ['xyz50', modeXyz50],
    ['lab', modeLab],
    ['lab65', modeLab65],
    ['luv', modeLuv],
    ['lchuv', modeLchuv],
    ['lch', modeLch],
    ['lch65', modeLch65]
  ]);
  return (color) => useMode(cspaces[colorspace.toLowerCase()])(color);
}

function toDIN99(colorspace = 'dlch') {
  var cspaces = new Map([
    ['dlab', modeDlab],
    ['lch', modeDlch]
  ]);
  return (color) => useMode(cspaces[colorspace.toLowerCase()])(color);
}

function ucsConverter(colorspace = 'lch') {
  const ucsDefinitions = {
    jch: modeJch,
    lch: modeLch,
    dlch: modeDlch,
    lchuv: modeLchuv,
    oklch: modeOklch,
    lch65: modeLch65
  };

  return useMode(ucsDefinitions[colorspace.toLowerCase()]);
}

function color2hex(color) {
  // if its of type string and not a CSS named color then its probably hex so we don't convert it
  var c;
  switch (typeof color) {
    case 'boolean':
      c = (color === true && '#ffffff') || '#000000';

      break;
    case 'number':
      c = num2color(color);

      break;
    case 'object' && color.length:
      c = ((color.length === 5 && formatHex8) || formatHex)(
        tuple2object(color)
      );

      break;
    case 'string':
      c =
        (!Object.keys(colorsNamed).some((el) => el === color.toLowerCase()) &&
          color) ||
        formatHex8(color);
      break;
    default:
      c = ((color['alpha'] < 1 && formatHex8) || formatHex)(
        tuple2object(color2tuple(color))
      );
  }

  return c;
}

// Ported from chroma-js with slight modifications
function num2color(num, colorspace) {
  colorspace = (colorspace && colorspace.toLowerCase()) || colorspace;
  if (typeof num === 'number' && num >= 0 && num <= 0xffffff) {
    const r = num >> 16;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;

    const _rgb = {
      r: r / 255,
      g: g / 255,
      b: b / 255,
      mode: 'lrgb'
    };

    return (colorspace && useMode(colorspace)(_rgb)) || formatHex(_rgb);
  } else {
    throw Error('unknown num color: ' + num);
  }
}

function color2num(color) {
  const rgb = useMode(modeRgb)(color2hex(color));
  return ((255 * rgb['r']) << 16) + ((255 * rgb['g']) << 8) + 255 * rgb['b'];
}

//ported from chroma-js

function temp2color(kelvin = 1000, colorspace = '') {
  const { log } = Math;
  const temp = kelvin / 100;

  var r, g, b;
  if (temp < 66) {
    r = 255;
    g =
      temp < 6
        ? 0
        : -155.25485562709179 -
          0.44596950469579133 * (g = temp - 2) +
          104.49216199393888 * log(g);
    b =
      temp < 20
        ? 0
        : -254.76935184120902 +
          0.8274096064007395 * (b = temp - 10) +
          115.67994401066147 * log(b);
  } else {
    r =
      351.97690566805693 +
      0.114206453784165 * (r = temp - 55) -
      40.25366309332127 * log(r);
    g =
      325.4494125711974 +
      0.07943456536662342 * (g = temp - 50) -
      28.0852963507957 * log(g);
    b = 255;
  }
  const result = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    mode: 'rgb'
  };

  return (
    (colorspace && useMode(colorspace.toLowerCase())(result)) ||
    formatHex(result)
  );
}

function color2tuple(color, colorspace = 'rgb', omitMode = false) {
  colorspace = colorspace || color['mode'];
  var o;

  if (Array.isArray(color)) {
    o = tuple2object(color, colorspace);
  } else if (typeof color === 'number') {
    o = num2color(color, colorspace);
  } else {
    o = converter(colorspace)(color);
  }

  var arr = Object.keys(o)
    .filter((ch) => ch !== 'mode')
    .map((key) => o[key]);

  // dont add mode string if true
  omitMode ? arr : arr.unshift(colorspace);

  return arr;
}

function tuple2object(arr = [], targetMode) {
  if (arr) {
    // get  the needed vars
    var [m, tm, cb] = [
      arr[0],
      targetMode,
      (x, y, m) => ({
        [x[0]]: y[0],
        [x[1]]: y[1],
        [x[2]]: y[2],
        mode: m,
        alpha: y[3] || 1
      })
    ];

    if ((m || tm) === ('rgb' || 'lrgb') && arr.some((ch) => 1 < Math.abs(ch))) {
      arr = ((typeof arr[0] == 'string' && arr.slice(1)) || arr).map(
        (ch) => ch / 255
      );
    }

    if (m && tm) {
      return converter(tm)(cb(gmchn(m).split(''), arr.slice(1), tm));
    } else if ((!m && tm) || (m && !tm)) {
      return cb(
        (m || tm).split(''),
        typeof arr[0] !== 'string' ? arr : arr.slice(1),
        m || tm
      );
    }
  }
}
export {
  tuple2object,
  num2color,
  color2num,
  temp2color,
  color2tuple,
  ucsConverter,
  color2hex,
  toCIE,
  toCubehelix,
  toDIN99,
  toRGB,
  toOk,
  toJab,
  toJch
};

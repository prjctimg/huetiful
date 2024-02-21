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
  modeLuv
} from 'culori/fn';

import { or, getModeChannel } from './helpers.js';

function toOk(colorspace = 'oklch') {
  var cspaces = new Map([
    ['lab', modeOklab],
    ['lch', modeOklch],
    ['hsl', modeOkhsl],
    ['hsv', modeOkhsv]
  ]);
  return (color) => useMode(cspaces[colorspace])(color);
}

function toCubehelix(color = '#000') {
  return useMode(modeCubehelix)(color);
}

function toSRGB(colorspace = 'rgb') {
  var cspaces = new Map([
    ['lrgb', modeLrgb],
    ['hwb', modeHwb],
    ['hsl', modeHsl],
    ['hsi', modeHsi],
    ['hsv', modeHsv],
    ['rgb', modeRgb]
  ]);

  return useMode(cspaces[colorspace])(color);
}

function toITP(color) {
  return useMode('itp')(color);
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
  // the result to return at the end of the function
  var output;
  // if its of type string and not a CSS named color then its probably hex so we don't convert it
  if (typeof color === 'string') {
    if (!Object.keys(colorsNamed).some((el) => el === color.toLowerCase())) {
      return color;
    }
    return formatHex(color);
  } else if (typeof color === 'boolean') {
    return (color !== true && '#ffffff') || '#000000';
  } else if (typeof color === 'number') {
    output = num2color(color);
  } else {
    // Get the mode variable
    const mode = Array.isArray(color) ? color[0] : color['mode'];
    const alpha =
      Array.isArray(color) && color.length === 5
        ? color[color.length - 1]
        : color['alpha'];

    var channelKeys = getModeChannel(mode).split('');
    var colorTupleToObj = (colorTuple) => {
      var channels = colorTuple.slice(0, 3);

      if (
        ['rgb', 'lrgb'].indexOf(mode) !== -1 &&
        channels.some((ch) => 1 < Math.abs(ch))
      ) {
        channels = channels.map((ch) => ch / 255);
      }

      let output = {
        [channelKeys[0]]: channels[0],
        [channelKeys[1]]: channels[1],
        [channelKeys[2]]: channels[2],
        mode: mode,
        alpha: alpha
      };

      return output;
    };
    if (mode) {
      // coerce color tuple to object
      if (Array.isArray(color)) {
        output = colorTupleToObj(color.slice(1));
      } else {
        output = colorTupleToObj(color2tuple(color, mode).slice(1));
      }
    }
  }

  return (output['alpha'] < 1 && formatHex8(output)) || formatHex(output);
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

function color2tuple(color, colorspace) {
  colorspace = color['mode'] || or(colorspace, 'rgb');

  const colorObject = converter(colorspace)(color);

  var arr = Object.keys(colorObject)
    .filter((ch) => ch !== 'mode')
    .map((key) => colorObject[key]);
  arr.unshift(colorspace);

  return arr;
}

export {
  num2color,
  color2num,
  temp2color,
  color2tuple,
  ucsConverter,
  color2hex,
  toCIE,
  toCubehelix,
  toDIN99,
  toSRGB,
  toOk,
  toITP
};

// node_modules/culori/src/rgb/parseNumber.js
var parseNumber = (color, len) => {
  if (typeof color !== "number")
    return;
  if (len === 3) {
    return {
      mode: "rgb",
      r: (color >> 8 & 15 | color >> 4 & 240) / 255,
      g: (color >> 4 & 15 | color & 240) / 255,
      b: (color & 15 | color << 4 & 240) / 255
    };
  }
  if (len === 4) {
    return {
      mode: "rgb",
      r: (color >> 12 & 15 | color >> 8 & 240) / 255,
      g: (color >> 8 & 15 | color >> 4 & 240) / 255,
      b: (color >> 4 & 15 | color & 240) / 255,
      alpha: (color & 15 | color << 4 & 240) / 255
    };
  }
  if (len === 6) {
    return {
      mode: "rgb",
      r: (color >> 16 & 255) / 255,
      g: (color >> 8 & 255) / 255,
      b: (color & 255) / 255
    };
  }
  if (len === 8) {
    return {
      mode: "rgb",
      r: (color >> 24 & 255) / 255,
      g: (color >> 16 & 255) / 255,
      b: (color >> 8 & 255) / 255,
      alpha: (color & 255) / 255
    };
  }
};
var parseNumber_default = parseNumber;

// node_modules/culori/src/colors/named.js
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
var named_default = named;

// node_modules/culori/src/rgb/parseNamed.js
var parseNamed = (color) => {
  return parseNumber_default(named_default[color.toLowerCase()], 6);
};
var parseNamed_default = parseNamed;

// node_modules/culori/src/rgb/parseHex.js
var hex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;
var parseHex = (color) => {
  let match;
  return (match = color.match(hex)) ? parseNumber_default(parseInt(match[1], 16), match[1].length) : undefined;
};
var parseHex_default = parseHex;

// node_modules/culori/src/util/regex.js
var num = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";
var num_none = `(?:${num}|none)`;
var per = `${num}%`;
var per_none = `(?:${num}%|none)`;
var num_per = `(?:${num}%|${num})`;
var num_per_none = `(?:${num}%|${num}|none)`;
var hue = `(?:${num}(deg|grad|rad|turn)|${num})`;
var hue_none = `(?:${num}(deg|grad|rad|turn)|${num}|none)`;
var c = `\\s*,\\s*`;
var rx_num_per_none = new RegExp("^" + num_per_none + "$");

// node_modules/culori/src/rgb/parseRgbLegacy.js
var rgb_num_old = new RegExp(`^rgba?\\(\\s*${num}${c}${num}${c}${num}\\s*(?:,\\s*${num_per}\\s*)?\\)\$`);
var rgb_per_old = new RegExp(`^rgba?\\(\\s*${per}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)\$`);
var parseRgbLegacy = (color) => {
  let res = { mode: "rgb" };
  let match;
  if (match = color.match(rgb_num_old)) {
    if (match[1] !== undefined) {
      res.r = match[1] / 255;
    }
    if (match[2] !== undefined) {
      res.g = match[2] / 255;
    }
    if (match[3] !== undefined) {
      res.b = match[3] / 255;
    }
  } else if (match = color.match(rgb_per_old)) {
    if (match[1] !== undefined) {
      res.r = match[1] / 100;
    }
    if (match[2] !== undefined) {
      res.g = match[2] / 100;
    }
    if (match[3] !== undefined) {
      res.b = match[3] / 100;
    }
  } else {
    return;
  }
  if (match[4] !== undefined) {
    res.alpha = Math.max(0, Math.min(1, match[4] / 100));
  } else if (match[5] !== undefined) {
    res.alpha = Math.max(0, Math.min(1, +match[5]));
  }
  return res;
};
var parseRgbLegacy_default = parseRgbLegacy;

// node_modules/culori/src/_prepare.js
var prepare = (color, mode) => color === undefined ? undefined : typeof color !== "object" ? parse_default(color) : color.mode !== undefined ? color : mode ? { ...color, mode } : undefined;
var _prepare_default = prepare;

// node_modules/culori/src/converter.js
var converter = (target_mode = "rgb") => (color) => (color = _prepare_default(color, target_mode)) !== undefined ? color.mode === target_mode ? color : converters[color.mode][target_mode] ? converters[color.mode][target_mode](color) : target_mode === "rgb" ? converters[color.mode].rgb(color) : converters.rgb[target_mode](converters[color.mode].rgb(color)) : undefined;
var converter_default = converter;

// node_modules/culori/src/modes.js
var converters = {};
var modes = {};
var parsers = [];
var colorProfiles = {};
var identity = (v) => v;
var useMode = (definition) => {
  converters[definition.mode] = {
    ...converters[definition.mode],
    ...definition.toMode
  };
  Object.keys(definition.fromMode || {}).forEach((k) => {
    if (!converters[k]) {
      converters[k] = {};
    }
    converters[k][definition.mode] = definition.fromMode[k];
  });
  if (!definition.ranges) {
    definition.ranges = {};
  }
  if (!definition.difference) {
    definition.difference = {};
  }
  definition.channels.forEach((channel) => {
    if (definition.ranges[channel] === undefined) {
      definition.ranges[channel] = [0, 1];
    }
    if (!definition.interpolate[channel]) {
      throw new Error(`Missing interpolator for: ${channel}`);
    }
    if (typeof definition.interpolate[channel] === "function") {
      definition.interpolate[channel] = {
        use: definition.interpolate[channel]
      };
    }
    if (!definition.interpolate[channel].fixup) {
      definition.interpolate[channel].fixup = identity;
    }
  });
  modes[definition.mode] = definition;
  (definition.parse || []).forEach((parser) => {
    useParser(parser, definition.mode);
  });
  return converter_default(definition.mode);
};
var getMode = (mode) => modes[mode];
var useParser = (parser, mode) => {
  if (typeof parser === "string") {
    if (!mode) {
      throw new Error(`'mode' required when 'parser' is a string`);
    }
    colorProfiles[parser] = mode;
  } else if (typeof parser === "function") {
    if (parsers.indexOf(parser) < 0) {
      parsers.push(parser);
    }
  }
};

// node_modules/culori/src/parse.js
var IdentStartCodePoint = /[^\x00-\x7F]|[a-zA-Z_]/;
var IdentCodePoint = /[^\x00-\x7F]|[-\w]/;
var Tok = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
var _i = 0;
function is_num(chars) {
  let ch = chars[_i];
  let ch1 = chars[_i + 1];
  if (ch === "-" || ch === "+") {
    return /\d/.test(ch1) || ch1 === "." && /\d/.test(chars[_i + 2]);
  }
  if (ch === ".") {
    return /\d/.test(ch1);
  }
  return /\d/.test(ch);
}
function is_ident(chars) {
  if (_i >= chars.length) {
    return false;
  }
  let ch = chars[_i];
  if (IdentStartCodePoint.test(ch)) {
    return true;
  }
  if (ch === "-") {
    if (chars.length - _i < 2) {
      return false;
    }
    let ch1 = chars[_i + 1];
    if (ch1 === "-" || IdentStartCodePoint.test(ch1)) {
      return true;
    }
    return false;
  }
  return false;
}
var huenits = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function num2(chars) {
  let value = "";
  if (chars[_i] === "-" || chars[_i] === "+") {
    value += chars[_i++];
  }
  value += digits(chars);
  if (chars[_i] === "." && /\d/.test(chars[_i + 1])) {
    value += chars[_i++] + digits(chars);
  }
  if (chars[_i] === "e" || chars[_i] === "E") {
    if ((chars[_i + 1] === "-" || chars[_i + 1] === "+") && /\d/.test(chars[_i + 2])) {
      value += chars[_i++] + chars[_i++] + digits(chars);
    } else if (/\d/.test(chars[_i + 1])) {
      value += chars[_i++] + digits(chars);
    }
  }
  if (is_ident(chars)) {
    let id = ident(chars);
    if (id === "deg" || id === "rad" || id === "turn" || id === "grad") {
      return { type: Tok.Hue, value: value * huenits[id] };
    }
    return;
  }
  if (chars[_i] === "%") {
    _i++;
    return { type: Tok.Percentage, value: +value };
  }
  return { type: Tok.Number, value: +value };
}
function digits(chars) {
  let v = "";
  while (/\d/.test(chars[_i])) {
    v += chars[_i++];
  }
  return v;
}
function ident(chars) {
  let v = "";
  while (_i < chars.length && IdentCodePoint.test(chars[_i])) {
    v += chars[_i++];
  }
  return v;
}
function identlike(chars) {
  let v = ident(chars);
  if (chars[_i] === "(") {
    _i++;
    return { type: Tok.Function, value: v };
  }
  if (v === "none") {
    return { type: Tok.None, value: undefined };
  }
  return { type: Tok.Ident, value: v };
}
function tokenize(str = "") {
  let chars = str.trim();
  let tokens = [];
  let ch;
  _i = 0;
  while (_i < chars.length) {
    ch = chars[_i++];
    if (ch === "\n" || ch === "\t" || ch === " ") {
      while (_i < chars.length && (chars[_i] === "\n" || chars[_i] === "\t" || chars[_i] === " ")) {
        _i++;
      }
      continue;
    }
    if (ch === ",") {
      return;
    }
    if (ch === ")") {
      tokens.push({ type: Tok.ParenClose });
      continue;
    }
    if (ch === "+") {
      _i--;
      if (is_num(chars)) {
        tokens.push(num2(chars));
        continue;
      }
      return;
    }
    if (ch === "-") {
      _i--;
      if (is_num(chars)) {
        tokens.push(num2(chars));
        continue;
      }
      if (is_ident(chars)) {
        tokens.push({ type: Tok.Ident, value: ident(chars) });
        continue;
      }
      return;
    }
    if (ch === ".") {
      _i--;
      if (is_num(chars)) {
        tokens.push(num2(chars));
        continue;
      }
      return;
    }
    if (ch === "/") {
      while (_i < chars.length && (chars[_i] === "\n" || chars[_i] === "\t" || chars[_i] === " ")) {
        _i++;
      }
      let alpha;
      if (is_num(chars)) {
        alpha = num2(chars);
        if (alpha.type !== Tok.Hue) {
          tokens.push({ type: Tok.Alpha, value: alpha });
          continue;
        }
      }
      if (is_ident(chars)) {
        if (ident(chars) === "none") {
          tokens.push({
            type: Tok.Alpha,
            value: { type: Tok.None, value: undefined }
          });
          continue;
        }
      }
      return;
    }
    if (/\d/.test(ch)) {
      _i--;
      tokens.push(num2(chars));
      continue;
    }
    if (IdentStartCodePoint.test(ch)) {
      _i--;
      tokens.push(identlike(chars));
      continue;
    }
    return;
  }
  return tokens;
}
function parseColorSyntax(tokens) {
  tokens._i = 0;
  let token = tokens[tokens._i++];
  if (!token || token.type !== Tok.Function || token.value !== "color") {
    return;
  }
  token = tokens[tokens._i++];
  if (token.type !== Tok.Ident) {
    return;
  }
  const mode = colorProfiles[token.value];
  if (!mode) {
    return;
  }
  const res = { mode };
  const coords = consumeCoords(tokens, false);
  if (!coords) {
    return;
  }
  const channels = getMode(mode).channels;
  for (let ii = 0, c2, ch;ii < channels.length; ii++) {
    c2 = coords[ii];
    ch = channels[ii];
    if (c2.type !== Tok.None) {
      res[ch] = c2.type === Tok.Number ? c2.value : c2.value / 100;
      if (ch === "alpha") {
        res[ch] = Math.max(0, Math.min(1, res[ch]));
      }
    }
  }
  return res;
}
function consumeCoords(tokens, includeHue) {
  const coords = [];
  let token;
  while (tokens._i < tokens.length) {
    token = tokens[tokens._i++];
    if (token.type === Tok.None || token.type === Tok.Number || token.type === Tok.Alpha || token.type === Tok.Percentage || includeHue && token.type === Tok.Hue) {
      coords.push(token);
      continue;
    }
    if (token.type === Tok.ParenClose) {
      if (tokens._i < tokens.length) {
        return;
      }
      continue;
    }
    return;
  }
  if (coords.length < 3 || coords.length > 4) {
    return;
  }
  if (coords.length === 4) {
    if (coords[3].type !== Tok.Alpha) {
      return;
    }
    coords[3] = coords[3].value;
  }
  if (coords.length === 3) {
    coords.push({ type: Tok.None, value: undefined });
  }
  return coords.every((c2) => c2.type !== Tok.Alpha) ? coords : undefined;
}
function parseModernSyntax(tokens, includeHue) {
  tokens._i = 0;
  let token = tokens[tokens._i++];
  if (!token || token.type !== Tok.Function) {
    return;
  }
  let coords = consumeCoords(tokens, includeHue);
  if (!coords) {
    return;
  }
  coords.unshift(token.value);
  return coords;
}
var parse = (color) => {
  if (typeof color !== "string") {
    return;
  }
  const tokens = tokenize(color);
  const parsed = tokens ? parseModernSyntax(tokens, true) : undefined;
  let result = undefined;
  let i = 0;
  let len = parsers.length;
  while (i < len) {
    if ((result = parsers[i++](color, parsed)) !== undefined) {
      return result;
    }
  }
  return tokens ? parseColorSyntax(tokens) : undefined;
};
var parse_default = parse;

// node_modules/culori/src/rgb/parseRgb.js
function parseRgb(color, parsed) {
  if (!parsed || parsed[0] !== "rgb" && parsed[0] !== "rgba") {
    return;
  }
  const res = { mode: "rgb" };
  const [, r, g, b, alpha] = parsed;
  if (r.type === Tok.Hue || g.type === Tok.Hue || b.type === Tok.Hue) {
    return;
  }
  if (r.type !== Tok.None) {
    res.r = r.type === Tok.Number ? r.value / 255 : r.value / 100;
  }
  if (g.type !== Tok.None) {
    res.g = g.type === Tok.Number ? g.value / 255 : g.value / 100;
  }
  if (b.type !== Tok.None) {
    res.b = b.type === Tok.Number ? b.value / 255 : b.value / 100;
  }
  if (alpha.type !== Tok.None) {
    res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
  }
  return res;
}
var parseRgb_default = parseRgb;

// node_modules/culori/src/rgb/parseTransparent.js
var parseTransparent = (c2) => c2 === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : undefined;
var parseTransparent_default = parseTransparent;

// node_modules/culori/src/interpolate/lerp.js
var lerp = (a, b, t) => a + t * (b - a);

// node_modules/culori/src/interpolate/piecewise.js
var get_classes = (arr) => {
  let classes = [];
  for (let i = 0;i < arr.length - 1; i++) {
    let a = arr[i];
    let b = arr[i + 1];
    if (a === undefined && b === undefined) {
      classes.push(undefined);
    } else if (a !== undefined && b !== undefined) {
      classes.push([a, b]);
    } else {
      classes.push(a !== undefined ? [a, a] : [b, b]);
    }
  }
  return classes;
};
var interpolatorPiecewise = (interpolator) => (arr) => {
  let classes = get_classes(arr);
  return (t) => {
    let cls = t * classes.length;
    let idx = t >= 1 ? classes.length - 1 : Math.max(Math.floor(cls), 0);
    let pair = classes[idx];
    return pair === undefined ? undefined : interpolator(pair[0], pair[1], cls - idx);
  };
};

// node_modules/culori/src/interpolate/linear.js
var interpolatorLinear = interpolatorPiecewise(lerp);

// node_modules/culori/src/fixup/alpha.js
var fixupAlpha = (arr) => {
  let some_defined = false;
  let res = arr.map((v) => {
    if (v !== undefined) {
      some_defined = true;
      return v;
    }
    return 1;
  });
  return some_defined ? res : arr;
};

// node_modules/culori/src/rgb/definition.js
var definition = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    parseRgb_default,
    parseHex_default,
    parseRgbLegacy_default,
    parseNamed_default,
    parseTransparent_default,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: interpolatorLinear,
    g: interpolatorLinear,
    b: interpolatorLinear,
    alpha: { use: interpolatorLinear, fixup: fixupAlpha }
  },
  gamut: true,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
};
var definition_default = definition;

// node_modules/culori/src/a98/convertA98ToXyz65.js
var linearize = (v = 0) => Math.pow(Math.abs(v), 563 / 256) * Math.sign(v);
var convertA98ToXyz65 = (a98) => {
  let r = linearize(a98.r);
  let g = linearize(a98.g);
  let b = linearize(a98.b);
  let res = {
    mode: "xyz65",
    x: 0.5766690429101305 * r + 0.1855582379065463 * g + 0.1882286462349947 * b,
    y: 0.297344975250536 * r + 0.6273635662554661 * g + 0.0752914584939979 * b,
    z: 0.0270313613864123 * r + 0.0706888525358272 * g + 0.9913375368376386 * b
  };
  if (a98.alpha !== undefined) {
    res.alpha = a98.alpha;
  }
  return res;
};
var convertA98ToXyz65_default = convertA98ToXyz65;

// node_modules/culori/src/a98/convertXyz65ToA98.js
var gamma = (v) => Math.pow(Math.abs(v), 256 / 563) * Math.sign(v);
var convertXyz65ToA98 = ({ x, y, z, alpha }) => {
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let res = {
    mode: "a98",
    r: gamma(x * 2.0415879038107465 - y * 0.5650069742788597 - 0.3447313507783297 * z),
    g: gamma(x * -0.9692436362808798 + y * 1.8759675015077206 + 0.0415550574071756 * z),
    b: gamma(x * 0.0134442806320312 - y * 0.1183623922310184 + 1.0151749943912058 * z)
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz65ToA98_default = convertXyz65ToA98;

// node_modules/culori/src/lrgb/convertRgbToLrgb.js
var fn = (c2 = 0) => {
  const abs = Math.abs(c2);
  if (abs <= 0.04045) {
    return c2 / 12.92;
  }
  return (Math.sign(c2) || 1) * Math.pow((abs + 0.055) / 1.055, 2.4);
};
var convertRgbToLrgb = ({ r, g, b, alpha }) => {
  let res = {
    mode: "lrgb",
    r: fn(r),
    g: fn(g),
    b: fn(b)
  };
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
};
var convertRgbToLrgb_default = convertRgbToLrgb;

// node_modules/culori/src/xyz65/convertRgbToXyz65.js
var convertRgbToXyz65 = (rgb) => {
  let { r, g, b, alpha } = convertRgbToLrgb_default(rgb);
  let res = {
    mode: "xyz65",
    x: 0.4123907992659593 * r + 0.357584339383878 * g + 0.1804807884018343 * b,
    y: 0.2126390058715102 * r + 0.715168678767756 * g + 0.0721923153607337 * b,
    z: 0.0193308187155918 * r + 0.119194779794626 * g + 0.9505321522496607 * b
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertRgbToXyz65_default = convertRgbToXyz65;

// node_modules/culori/src/lrgb/convertLrgbToRgb.js
var fn2 = (c2 = 0) => {
  const abs = Math.abs(c2);
  if (abs > 0.0031308) {
    return (Math.sign(c2) || 1) * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
  }
  return c2 * 12.92;
};
var convertLrgbToRgb = ({ r, g, b, alpha }, mode = "rgb") => {
  let res = {
    mode,
    r: fn2(r),
    g: fn2(g),
    b: fn2(b)
  };
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
};
var convertLrgbToRgb_default = convertLrgbToRgb;

// node_modules/culori/src/xyz65/convertXyz65ToRgb.js
var convertXyz65ToRgb = ({ x, y, z, alpha }) => {
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let res = convertLrgbToRgb_default({
    r: x * 3.2409699419045226 - y * 1.537383177570094 - 0.4986107602930034 * z,
    g: x * -0.9692436362808796 + y * 1.8759675015077204 + 0.0415550574071756 * z,
    b: x * 0.0556300796969936 - y * 0.2039769588889765 + 1.0569715142428784 * z
  });
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz65ToRgb_default = convertXyz65ToRgb;

// node_modules/culori/src/a98/definition.js
var definition2 = {
  ...definition_default,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (color) => convertXyz65ToA98_default(convertRgbToXyz65_default(color)),
    xyz65: convertXyz65ToA98_default
  },
  toMode: {
    rgb: (color) => convertXyz65ToRgb_default(convertA98ToXyz65_default(color)),
    xyz65: convertA98ToXyz65_default
  }
};
var definition_default2 = definition2;

// node_modules/culori/src/util/normalizeHue.js
var normalizeHue = (hue2) => (hue2 = hue2 % 360) < 0 ? hue2 + 360 : hue2;
var normalizeHue_default = normalizeHue;

// node_modules/culori/src/fixup/hue.js
var hue2 = (hues, fn3) => {
  return hues.map((hue3, idx, arr) => {
    if (hue3 === undefined) {
      return hue3;
    }
    let normalized = normalizeHue_default(hue3);
    if (idx === 0 || hues[idx - 1] === undefined) {
      return normalized;
    }
    return fn3(normalized - normalizeHue_default(arr[idx - 1]));
  }).reduce((acc, curr) => {
    if (!acc.length || curr === undefined || acc[acc.length - 1] === undefined) {
      acc.push(curr);
      return acc;
    }
    acc.push(curr + acc[acc.length - 1]);
    return acc;
  }, []);
};
var fixupHueShorter = (arr) => hue2(arr, (d) => Math.abs(d) <= 180 ? d : d - 360 * Math.sign(d));
var fixupHueLonger = (arr) => hue2(arr, (d) => Math.abs(d) >= 180 || d === 0 ? d : d - 360 * Math.sign(d));

// node_modules/culori/src/difference.js
var differenceHueSaturation = (std, smp) => {
  if (std.h === undefined || smp.h === undefined || !std.s || !smp.s) {
    return 0;
  }
  let std_h = normalizeHue_default(std.h);
  let smp_h = normalizeHue_default(smp.h);
  let dH = Math.sin((smp_h - std_h + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(std.s * smp.s) * dH;
};
var differenceHueNaive = (std, smp) => {
  if (std.h === undefined || smp.h === undefined) {
    return 0;
  }
  let std_h = normalizeHue_default(std.h);
  let smp_h = normalizeHue_default(smp.h);
  if (Math.abs(smp_h - std_h) > 180) {
    return std_h - (smp_h - 360 * Math.sign(smp_h - std_h));
  }
  return smp_h - std_h;
};
var differenceHueChroma = (std, smp) => {
  if (std.h === undefined || smp.h === undefined || !std.c || !smp.c) {
    return 0;
  }
  let std_h = normalizeHue_default(std.h);
  let smp_h = normalizeHue_default(smp.h);
  let dH = Math.sin((smp_h - std_h + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(std.c * smp.c) * dH;
};
var differenceEuclidean = (mode = "rgb", weights = [1, 1, 1, 0]) => {
  let def = getMode(mode);
  let channels = def.channels;
  let diffs = def.difference;
  let conv = converter_default(mode);
  return (std, smp) => {
    let ConvStd = conv(std);
    let ConvSmp = conv(smp);
    return Math.sqrt(channels.reduce((sum, k, idx) => {
      let delta = diffs[k] ? diffs[k](ConvStd, ConvSmp) : ConvStd[k] - ConvSmp[k];
      return sum + (weights[idx] || 0) * Math.pow(isNaN(delta) ? 0 : delta, 2);
    }, 0));
  };
};
var differenceHyab = () => {
  let lab = converter_default("lab65");
  return (std, smp) => {
    let LabStd = lab(std);
    let LabSmp = lab(smp);
    let dL = LabStd.l - LabSmp.l;
    let dA = LabStd.a - LabSmp.a;
    let dB = LabStd.b - LabSmp.b;
    return Math.abs(dL) + Math.sqrt(dA * dA + dB * dB);
  };
};

// node_modules/culori/src/average.js
var averageAngle = (val) => {
  let sum = val.reduce((sum2, val2) => {
    if (val2 !== undefined) {
      let rad = val2 * Math.PI / 180;
      sum2.sin += Math.sin(rad);
      sum2.cos += Math.cos(rad);
    }
    return sum2;
  }, { sin: 0, cos: 0 });
  let angle = Math.atan2(sum.sin, sum.cos) * 180 / Math.PI;
  return angle < 0 ? 360 + angle : angle;
};
var averageNumber = (val) => {
  let a = val.filter((v) => v !== undefined);
  return a.length ? a.reduce((sum, v) => sum + v, 0) / a.length : undefined;
};

// node_modules/culori/src/lch/convertLabToLch.js
var convertLabToLch = ({ l, a, b, alpha }, mode = "lch") => {
  if (a === undefined)
    a = 0;
  if (b === undefined)
    b = 0;
  let c2 = Math.sqrt(a * a + b * b);
  let res = { mode, l, c: c2 };
  if (c2)
    res.h = normalizeHue_default(Math.atan2(b, a) * 180 / Math.PI);
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
};
var convertLabToLch_default = convertLabToLch;

// node_modules/culori/src/lch/convertLchToLab.js
var convertLchToLab = ({ l, c: c2, h, alpha }, mode = "lab") => {
  if (h === undefined)
    h = 0;
  let res = {
    mode,
    l,
    a: c2 ? c2 * Math.cos(h / 180 * Math.PI) : 0,
    b: c2 ? c2 * Math.sin(h / 180 * Math.PI) : 0
  };
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
};
var convertLchToLab_default = convertLchToLab;

// node_modules/culori/src/xyz65/constants.js
var k = Math.pow(29, 3) / Math.pow(3, 3);
var e = Math.pow(6, 3) / Math.pow(29, 3);

// node_modules/culori/src/constants.js
var D50 = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
};
var D65 = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
var k2 = Math.pow(29, 3) / Math.pow(3, 3);
var e2 = Math.pow(6, 3) / Math.pow(29, 3);

// node_modules/culori/src/lab65/convertLab65ToXyz65.js
var fn3 = (v) => Math.pow(v, 3) > e ? Math.pow(v, 3) : (116 * v - 16) / k;
var convertLab65ToXyz65 = ({ l, a, b, alpha }) => {
  if (l === undefined)
    l = 0;
  if (a === undefined)
    a = 0;
  if (b === undefined)
    b = 0;
  let fy = (l + 16) / 116;
  let fx = a / 500 + fy;
  let fz = fy - b / 200;
  let res = {
    mode: "xyz65",
    x: fn3(fx) * D65.X,
    y: fn3(fy) * D65.Y,
    z: fn3(fz) * D65.Z
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertLab65ToXyz65_default = convertLab65ToXyz65;

// node_modules/culori/src/lab65/convertLab65ToRgb.js
var convertLab65ToRgb = (lab) => convertXyz65ToRgb_default(convertLab65ToXyz65_default(lab));
var convertLab65ToRgb_default = convertLab65ToRgb;

// node_modules/culori/src/lab65/convertXyz65ToLab65.js
var f = (value) => value > e ? Math.cbrt(value) : (k * value + 16) / 116;
var convertXyz65ToLab65 = ({ x, y, z, alpha }) => {
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let f0 = f(x / D65.X);
  let f1 = f(y / D65.Y);
  let f2 = f(z / D65.Z);
  let res = {
    mode: "lab65",
    l: 116 * f1 - 16,
    a: 500 * (f0 - f1),
    b: 200 * (f1 - f2)
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz65ToLab65_default = convertXyz65ToLab65;

// node_modules/culori/src/lab65/convertRgbToLab65.js
var convertRgbToLab65 = (rgb) => {
  let res = convertXyz65ToLab65_default(convertRgbToXyz65_default(rgb));
  if (rgb.r === rgb.b && rgb.b === rgb.g) {
    res.a = res.b = 0;
  }
  return res;
};
var convertRgbToLab65_default = convertRgbToLab65;

// node_modules/culori/src/hsl/convertHslToRgb.js
function convertHslToRgb({ h, s, l, alpha }) {
  h = normalizeHue_default(h !== undefined ? h : 0);
  if (s === undefined)
    s = 0;
  if (l === undefined)
    l = 0;
  let m1 = l + s * (l < 0.5 ? l : 1 - l);
  let m2 = m1 - (m1 - l) * 2 * Math.abs(h / 60 % 2 - 1);
  let res;
  switch (Math.floor(h / 60)) {
    case 0:
      res = { r: m1, g: m2, b: 2 * l - m1 };
      break;
    case 1:
      res = { r: m2, g: m1, b: 2 * l - m1 };
      break;
    case 2:
      res = { r: 2 * l - m1, g: m1, b: m2 };
      break;
    case 3:
      res = { r: 2 * l - m1, g: m2, b: m1 };
      break;
    case 4:
      res = { r: m2, g: 2 * l - m1, b: m1 };
      break;
    case 5:
      res = { r: m1, g: 2 * l - m1, b: m2 };
      break;
    default:
      res = { r: 2 * l - m1, g: 2 * l - m1, b: 2 * l - m1 };
  }
  res.mode = "rgb";
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
}

// node_modules/culori/src/hsl/convertRgbToHsl.js
function convertRgbToHsl({ r, g, b, alpha }) {
  if (r === undefined)
    r = 0;
  if (g === undefined)
    g = 0;
  if (b === undefined)
    b = 0;
  let M = Math.max(r, g, b), m = Math.min(r, g, b);
  let res = {
    mode: "hsl",
    s: M === m ? 0 : (M - m) / (1 - Math.abs(M + m - 1)),
    l: 0.5 * (M + m)
  };
  if (M - m !== 0)
    res.h = (M === r ? (g - b) / (M - m) + (g < b) * 6 : M === g ? (b - r) / (M - m) + 2 : (r - g) / (M - m) + 4) * 60;
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
}

// node_modules/culori/src/util/hue.js
var hueToDeg = (val, unit) => {
  switch (unit) {
    case "deg":
      return +val;
    case "rad":
      return val / Math.PI * 180;
    case "grad":
      return val / 10 * 9;
    case "turn":
      return val * 360;
  }
};
var hue_default = hueToDeg;

// node_modules/culori/src/hsl/parseHslLegacy.js
var hsl_old = new RegExp(`^hsla?\\(\\s*${hue}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)\$`);
var parseHslLegacy = (color) => {
  let match = color.match(hsl_old);
  if (!match)
    return;
  let res = { mode: "hsl" };
  if (match[3] !== undefined) {
    res.h = +match[3];
  } else if (match[1] !== undefined && match[2] !== undefined) {
    res.h = hue_default(match[1], match[2]);
  }
  if (match[4] !== undefined) {
    res.s = Math.min(Math.max(0, match[4] / 100), 1);
  }
  if (match[5] !== undefined) {
    res.l = Math.min(Math.max(0, match[5] / 100), 1);
  }
  if (match[6] !== undefined) {
    res.alpha = Math.max(0, Math.min(1, match[6] / 100));
  } else if (match[7] !== undefined) {
    res.alpha = Math.max(0, Math.min(1, +match[7]));
  }
  return res;
};
var parseHslLegacy_default = parseHslLegacy;

// node_modules/culori/src/hsl/parseHsl.js
function parseHsl(color, parsed) {
  if (!parsed || parsed[0] !== "hsl" && parsed[0] !== "hsla") {
    return;
  }
  const res = { mode: "hsl" };
  const [, h, s, l, alpha] = parsed;
  if (h.type !== Tok.None) {
    if (h.type === Tok.Percentage) {
      return;
    }
    res.h = h.value;
  }
  if (s.type !== Tok.None) {
    if (s.type === Tok.Hue) {
      return;
    }
    res.s = s.value / 100;
  }
  if (l.type !== Tok.None) {
    if (l.type === Tok.Hue) {
      return;
    }
    res.l = l.value / 100;
  }
  if (alpha.type !== Tok.None) {
    res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
  }
  return res;
}
var parseHsl_default = parseHsl;

// node_modules/culori/src/hsl/definition.js
var definition3 = {
  mode: "hsl",
  toMode: {
    rgb: convertHslToRgb
  },
  fromMode: {
    rgb: convertRgbToHsl
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [parseHsl_default, parseHslLegacy_default],
  serialize: (c2) => `hsl(${c2.h !== undefined ? c2.h : "none"} ${c2.s !== undefined ? c2.s * 100 + "%" : "none"} ${c2.l !== undefined ? c2.l * 100 + "%" : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
  interpolate: {
    h: { use: interpolatorLinear, fixup: fixupHueShorter },
    s: interpolatorLinear,
    l: interpolatorLinear,
    alpha: { use: interpolatorLinear, fixup: fixupAlpha }
  },
  difference: {
    h: differenceHueSaturation
  },
  average: {
    h: averageAngle
  }
};
var definition_default3 = definition3;

// node_modules/culori/src/hsv/convertHsvToRgb.js
function convertHsvToRgb({ h, s, v, alpha }) {
  h = normalizeHue_default(h !== undefined ? h : 0);
  if (s === undefined)
    s = 0;
  if (v === undefined)
    v = 0;
  let f2 = Math.abs(h / 60 % 2 - 1);
  let res;
  switch (Math.floor(h / 60)) {
    case 0:
      res = { r: v, g: v * (1 - s * f2), b: v * (1 - s) };
      break;
    case 1:
      res = { r: v * (1 - s * f2), g: v, b: v * (1 - s) };
      break;
    case 2:
      res = { r: v * (1 - s), g: v, b: v * (1 - s * f2) };
      break;
    case 3:
      res = { r: v * (1 - s), g: v * (1 - s * f2), b: v };
      break;
    case 4:
      res = { r: v * (1 - s * f2), g: v * (1 - s), b: v };
      break;
    case 5:
      res = { r: v, g: v * (1 - s), b: v * (1 - s * f2) };
      break;
    default:
      res = { r: v * (1 - s), g: v * (1 - s), b: v * (1 - s) };
  }
  res.mode = "rgb";
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
}

// node_modules/culori/src/hsv/convertRgbToHsv.js
function convertRgbToHsv({ r, g, b, alpha }) {
  if (r === undefined)
    r = 0;
  if (g === undefined)
    g = 0;
  if (b === undefined)
    b = 0;
  let M = Math.max(r, g, b), m = Math.min(r, g, b);
  let res = {
    mode: "hsv",
    s: M === 0 ? 0 : 1 - m / M,
    v: M
  };
  if (M - m !== 0)
    res.h = (M === r ? (g - b) / (M - m) + (g < b) * 6 : M === g ? (b - r) / (M - m) + 2 : (r - g) / (M - m) + 4) * 60;
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
}

// node_modules/culori/src/hsv/definition.js
var definition4 = {
  mode: "hsv",
  toMode: {
    rgb: convertHsvToRgb
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: convertRgbToHsv
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: interpolatorLinear, fixup: fixupHueShorter },
    s: interpolatorLinear,
    v: interpolatorLinear,
    alpha: { use: interpolatorLinear, fixup: fixupAlpha }
  },
  difference: {
    h: differenceHueSaturation
  },
  average: {
    h: averageAngle
  }
};
var definition_default4 = definition4;
// node_modules/culori/src/hwb/convertHwbToRgb.js
function convertHwbToRgb({ h, w, b, alpha }) {
  if (w === undefined)
    w = 0;
  if (b === undefined)
    b = 0;
  if (w + b > 1) {
    let s = w + b;
    w /= s;
    b /= s;
  }
  return convertHsvToRgb({
    h,
    s: b === 1 ? 1 : 1 - w / (1 - b),
    v: 1 - b,
    alpha
  });
}

// node_modules/culori/src/hwb/convertRgbToHwb.js
function convertRgbToHwb(rgba) {
  let hsv = convertRgbToHsv(rgba);
  if (hsv === undefined)
    return;
  let s = hsv.s !== undefined ? hsv.s : 0;
  let v = hsv.v !== undefined ? hsv.v : 0;
  let res = {
    mode: "hwb",
    w: (1 - s) * v,
    b: 1 - v
  };
  if (hsv.h !== undefined)
    res.h = hsv.h;
  if (hsv.alpha !== undefined)
    res.alpha = hsv.alpha;
  return res;
}

// node_modules/culori/src/hwb/parseHwb.js
function ParseHwb(color, parsed) {
  if (!parsed || parsed[0] !== "hwb") {
    return;
  }
  const res = { mode: "hwb" };
  const [, h, w, b, alpha] = parsed;
  if (h.type !== Tok.None) {
    if (h.type === Tok.Percentage) {
      return;
    }
    res.h = h.value;
  }
  if (w.type !== Tok.None) {
    if (w.type === Tok.Hue) {
      return;
    }
    res.w = w.value / 100;
  }
  if (b.type !== Tok.None) {
    if (b.type === Tok.Hue) {
      return;
    }
    res.b = b.value / 100;
  }
  if (alpha.type !== Tok.None) {
    res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
  }
  return res;
}
var parseHwb_default = ParseHwb;

// node_modules/culori/src/hwb/definition.js
var definition5 = {
  mode: "hwb",
  toMode: {
    rgb: convertHwbToRgb
  },
  fromMode: {
    rgb: convertRgbToHwb
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [parseHwb_default],
  serialize: (c2) => `hwb(${c2.h !== undefined ? c2.h : "none"} ${c2.w !== undefined ? c2.w * 100 + "%" : "none"} ${c2.b !== undefined ? c2.b * 100 + "%" : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
  interpolate: {
    h: { use: interpolatorLinear, fixup: fixupHueShorter },
    w: interpolatorLinear,
    b: interpolatorLinear,
    alpha: { use: interpolatorLinear, fixup: fixupAlpha }
  },
  difference: {
    h: differenceHueNaive
  },
  average: {
    h: averageAngle
  }
};
var definition_default5 = definition5;

// node_modules/culori/src/xyz50/constants.js
var k3 = Math.pow(29, 3) / Math.pow(3, 3);
var e3 = Math.pow(6, 3) / Math.pow(29, 3);

// node_modules/culori/src/lab/convertLabToXyz50.js
var fn4 = (v) => Math.pow(v, 3) > e3 ? Math.pow(v, 3) : (116 * v - 16) / k3;
var convertLabToXyz50 = ({ l, a, b, alpha }) => {
  if (l === undefined)
    l = 0;
  if (a === undefined)
    a = 0;
  if (b === undefined)
    b = 0;
  let fy = (l + 16) / 116;
  let fx = a / 500 + fy;
  let fz = fy - b / 200;
  let res = {
    mode: "xyz50",
    x: fn4(fx) * D50.X,
    y: fn4(fy) * D50.Y,
    z: fn4(fz) * D50.Z
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertLabToXyz50_default = convertLabToXyz50;

// node_modules/culori/src/xyz50/convertXyz50ToRgb.js
var convertXyz50ToRgb = ({ x, y, z, alpha }) => {
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let res = convertLrgbToRgb_default({
    r: x * 3.1341359569958707 - y * 1.6173863321612538 - 0.4906619460083532 * z,
    g: x * -0.978795502912089 + y * 1.916254567259524 + 0.03344273116131949 * z,
    b: x * 0.07195537988411677 - y * 0.2289768264158322 + 1.405386058324125 * z
  });
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz50ToRgb_default = convertXyz50ToRgb;

// node_modules/culori/src/lab/convertLabToRgb.js
var convertLabToRgb = (lab) => convertXyz50ToRgb_default(convertLabToXyz50_default(lab));
var convertLabToRgb_default = convertLabToRgb;

// node_modules/culori/src/xyz50/convertRgbToXyz50.js
var convertRgbToXyz50 = (rgb) => {
  let { r, g, b, alpha } = convertRgbToLrgb_default(rgb);
  let res = {
    mode: "xyz50",
    x: 0.436065742824811 * r + 0.3851514688337912 * g + 0.14307845442264197 * b,
    y: 0.22249319175623702 * r + 0.7168870538238823 * g + 0.06061979053616537 * b,
    z: 0.013923904500943465 * r + 0.09708128566574634 * g + 0.7140993584005155 * b
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertRgbToXyz50_default = convertRgbToXyz50;

// node_modules/culori/src/lab/convertXyz50ToLab.js
var f2 = (value) => value > e3 ? Math.cbrt(value) : (k3 * value + 16) / 116;
var convertXyz50ToLab = ({ x, y, z, alpha }) => {
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let f0 = f2(x / D50.X);
  let f1 = f2(y / D50.Y);
  let f22 = f2(z / D50.Z);
  let res = {
    mode: "lab",
    l: 116 * f1 - 16,
    a: 500 * (f0 - f1),
    b: 200 * (f1 - f22)
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz50ToLab_default = convertXyz50ToLab;

// node_modules/culori/src/lab/convertRgbToLab.js
var convertRgbToLab = (rgb) => {
  let res = convertXyz50ToLab_default(convertRgbToXyz50_default(rgb));
  if (rgb.r === rgb.b && rgb.b === rgb.g) {
    res.a = res.b = 0;
  }
  return res;
};
var convertRgbToLab_default = convertRgbToLab;

// node_modules/culori/src/lab/parseLab.js
function parseLab(color, parsed) {
  if (!parsed || parsed[0] !== "lab") {
    return;
  }
  const res = { mode: "lab" };
  const [, l, a, b, alpha] = parsed;
  if (l.type === Tok.Hue || a.type === Tok.Hue || b.type === Tok.Hue) {
    return;
  }
  if (l.type !== Tok.None) {
    res.l = Math.min(Math.max(0, l.value), 100);
  }
  if (a.type !== Tok.None) {
    res.a = a.type === Tok.Number ? a.value : a.value * 125 / 100;
  }
  if (b.type !== Tok.None) {
    res.b = b.type === Tok.Number ? b.value : b.value * 125 / 100;
  }
  if (alpha.type !== Tok.None) {
    res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
  }
  return res;
}
var parseLab_default = parseLab;

// node_modules/culori/src/lab/definition.js
var definition6 = {
  mode: "lab",
  toMode: {
    xyz50: convertLabToXyz50_default,
    rgb: convertLabToRgb_default
  },
  fromMode: {
    xyz50: convertXyz50ToLab_default,
    rgb: convertRgbToLab_default
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-100, 100],
    b: [-100, 100]
  },
  parse: [parseLab_default],
  serialize: (c2) => `lab(${c2.l !== undefined ? c2.l : "none"} ${c2.a !== undefined ? c2.a : "none"} ${c2.b !== undefined ? c2.b : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
  interpolate: {
    l: interpolatorLinear,
    a: interpolatorLinear,
    b: interpolatorLinear,
    alpha: { use: interpolatorLinear, fixup: fixupAlpha }
  }
};
var definition_default6 = definition6;
// node_modules/culori/src/lab65/definition.js
var definition7 = {
  ...definition_default6,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: convertLab65ToXyz65_default,
    rgb: convertLab65ToRgb_default
  },
  fromMode: {
    xyz65: convertXyz65ToLab65_default,
    rgb: convertRgbToLab65_default
  },
  ranges: {
    l: [0, 100],
    a: [-86.182, 98.234],
    b: [-107.86, 94.477]
  }
};
var definition_default7 = definition7;
// node_modules/culori/src/lch/parseLch.js
function parseLch(color, parsed) {
  if (!parsed || parsed[0] !== "lch") {
    return;
  }
  const res = { mode: "lch" };
  const [, l, c2, h, alpha] = parsed;
  if (l.type !== Tok.None) {
    if (l.type === Tok.Hue) {
      return;
    }
    res.l = Math.min(Math.max(0, l.value), 100);
  }
  if (c2.type !== Tok.None) {
    res.c = Math.max(0, c2.type === Tok.Number ? c2.value : c2.value * 150 / 100);
  }
  if (h.type !== Tok.None) {
    if (h.type === Tok.Percentage) {
      return;
    }
    res.h = h.value;
  }
  if (alpha.type !== Tok.None) {
    res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
  }
  return res;
}
var parseLch_default = parseLch;

// node_modules/culori/src/lch/definition.js
var definition8 = {
  mode: "lch",
  toMode: {
    lab: convertLchToLab_default,
    rgb: (c2) => convertLabToRgb_default(convertLchToLab_default(c2))
  },
  fromMode: {
    rgb: (c2) => convertLabToLch_default(convertRgbToLab_default(c2)),
    lab: convertLabToLch_default
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [parseLch_default],
  serialize: (c2) => `lch(${c2.l !== undefined ? c2.l : "none"} ${c2.c !== undefined ? c2.c : "none"} ${c2.h !== undefined ? c2.h : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
  interpolate: {
    h: { use: interpolatorLinear, fixup: fixupHueShorter },
    c: interpolatorLinear,
    l: interpolatorLinear,
    alpha: { use: interpolatorLinear, fixup: fixupAlpha }
  },
  difference: {
    h: differenceHueChroma
  },
  average: {
    h: averageAngle
  }
};
var definition_default8 = definition8;
// node_modules/culori/src/lch65/definition.js
var definition9 = {
  ...definition_default8,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (c2) => convertLchToLab_default(c2, "lab65"),
    rgb: (c2) => convertLab65ToRgb_default(convertLchToLab_default(c2, "lab65"))
  },
  fromMode: {
    rgb: (c2) => convertLabToLch_default(convertRgbToLab65_default(c2), "lch65"),
    lab65: (c2) => convertLabToLch_default(c2, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 133.807],
    h: [0, 360]
  }
};
var definition_default9 = definition9;
// node_modules/culori/src/lrgb/definition.js
var definition10 = {
  ...definition_default,
  mode: "lrgb",
  toMode: {
    rgb: convertLrgbToRgb_default
  },
  fromMode: {
    rgb: convertRgbToLrgb_default
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
};
var definition_default10 = definition10;
// node_modules/culori/src/oklab/convertLrgbToOklab.js
var convertLrgbToOklab = ({ r, g, b, alpha }) => {
  if (r === undefined)
    r = 0;
  if (g === undefined)
    g = 0;
  if (b === undefined)
    b = 0;
  let L = Math.cbrt(0.41222147079999993 * r + 0.5363325363 * g + 0.0514459929 * b);
  let M = Math.cbrt(0.2119034981999999 * r + 0.6806995450999999 * g + 0.1073969566 * b);
  let S = Math.cbrt(0.08830246189999998 * r + 0.2817188376 * g + 0.6299787005000002 * b);
  let res = {
    mode: "oklab",
    l: 0.2104542553 * L + 0.793617785 * M - 0.0040720468 * S,
    a: 1.9779984951 * L - 2.428592205 * M + 0.4505937099 * S,
    b: 0.0259040371 * L + 0.7827717662 * M - 0.808675766 * S
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertLrgbToOklab_default = convertLrgbToOklab;

// node_modules/culori/src/oklab/convertRgbToOklab.js
var convertRgbToOklab = (rgb) => {
  let res = convertLrgbToOklab_default(convertRgbToLrgb_default(rgb));
  if (rgb.r === rgb.b && rgb.b === rgb.g) {
    res.a = res.b = 0;
  }
  return res;
};
var convertRgbToOklab_default = convertRgbToOklab;

// node_modules/culori/src/oklab/convertOklabToLrgb.js
var convertOklabToLrgb = ({ l, a, b, alpha }) => {
  if (l === undefined)
    l = 0;
  if (a === undefined)
    a = 0;
  if (b === undefined)
    b = 0;
  let L = Math.pow(l * 0.9999999984505198 + 0.39633779217376786 * a + 0.2158037580607588 * b, 3);
  let M = Math.pow(l * 1.0000000088817609 - 0.10556134232365635 * a - 0.06385417477170591 * b, 3);
  let S = Math.pow(l * 1.0000000546724108 - 0.08948418209496575 * a - 1.2914855378640917 * b, 3);
  let res = {
    mode: "lrgb",
    r: 4.076741661347994 * L - 3.307711590408193 * M + 0.230969928729428 * S,
    g: -1.2684380040921763 * L + 2.6097574006633715 * M - 0.3413193963102197 * S,
    b: -0.004196086541837188 * L - 0.7034186144594493 * M + 1.7076147009309444 * S
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertOklabToLrgb_default = convertOklabToLrgb;

// node_modules/culori/src/oklab/convertOklabToRgb.js
var convertOklabToRgb = (c2) => convertLrgbToRgb_default(convertOklabToLrgb_default(c2));
var convertOklabToRgb_default = convertOklabToRgb;

// node_modules/culori/src/oklab/parseOklab.js
function parseOklab(color, parsed) {
  if (!parsed || parsed[0] !== "oklab") {
    return;
  }
  const res = { mode: "oklab" };
  const [, l, a, b, alpha] = parsed;
  if (l.type === Tok.Hue || a.type === Tok.Hue || b.type === Tok.Hue) {
    return;
  }
  if (l.type !== Tok.None) {
    res.l = Math.min(Math.max(0, l.type === Tok.Number ? l.value : l.value / 100), 1);
  }
  if (a.type !== Tok.None) {
    res.a = a.type === Tok.Number ? a.value : a.value * 0.4 / 100;
  }
  if (b.type !== Tok.None) {
    res.b = b.type === Tok.Number ? b.value : b.value * 0.4 / 100;
  }
  if (alpha.type !== Tok.None) {
    res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
  }
  return res;
}
var parseOklab_default = parseOklab;

// node_modules/culori/src/oklab/definition.js
var definition11 = {
  ...definition_default6,
  mode: "oklab",
  toMode: {
    lrgb: convertOklabToLrgb_default,
    rgb: convertOklabToRgb_default
  },
  fromMode: {
    lrgb: convertLrgbToOklab_default,
    rgb: convertRgbToOklab_default
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [parseOklab_default],
  serialize: (c2) => `oklab(${c2.l !== undefined ? c2.l : "none"} ${c2.a !== undefined ? c2.a : "none"} ${c2.b !== undefined ? c2.b : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`
};
var definition_default11 = definition11;

// node_modules/culori/src/oklch/parseOklch.js
function parseOklch(color, parsed) {
  if (!parsed || parsed[0] !== "oklch") {
    return;
  }
  const res = { mode: "oklch" };
  const [, l, c2, h, alpha] = parsed;
  if (l.type !== Tok.None) {
    if (l.type === Tok.Hue) {
      return;
    }
    res.l = Math.min(Math.max(0, l.type === Tok.Number ? l.value : l.value / 100), 1);
  }
  if (c2.type !== Tok.None) {
    res.c = Math.max(0, c2.type === Tok.Number ? c2.value : c2.value * 0.4 / 100);
  }
  if (h.type !== Tok.None) {
    if (h.type === Tok.Percentage) {
      return;
    }
    res.h = h.value;
  }
  if (alpha.type !== Tok.None) {
    res.alpha = Math.min(1, Math.max(0, alpha.type === Tok.Number ? alpha.value : alpha.value / 100));
  }
  return res;
}
var parseOklch_default = parseOklch;

// node_modules/culori/src/oklch/definition.js
var definition12 = {
  ...definition_default8,
  mode: "oklch",
  toMode: {
    oklab: (c2) => convertLchToLab_default(c2, "oklab"),
    rgb: (c2) => convertOklabToRgb_default(convertLchToLab_default(c2, "oklab"))
  },
  fromMode: {
    rgb: (c2) => convertLabToLch_default(convertRgbToOklab_default(c2), "oklch"),
    oklab: (c2) => convertLabToLch_default(c2, "oklch")
  },
  parse: [parseOklch_default],
  serialize: (c2) => `oklch(${c2.l !== undefined ? c2.l : "none"} ${c2.c !== undefined ? c2.c : "none"} ${c2.h !== undefined ? c2.h : "none"}${c2.alpha < 1 ? ` / ${c2.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
};
var definition_default12 = definition12;

// node_modules/culori/src/p3/convertP3ToXyz65.js
var convertP3ToXyz65 = (rgb) => {
  let { r, g, b, alpha } = convertRgbToLrgb_default(rgb);
  let res = {
    mode: "xyz65",
    x: 0.486570948648216 * r + 0.265667693169093 * g + 0.1982172852343625 * b,
    y: 0.2289745640697487 * r + 0.6917385218365062 * g + 0.079286914093745 * b,
    z: 0 * r + 0.0451133818589026 * g + 1.043944368900976 * b
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertP3ToXyz65_default = convertP3ToXyz65;

// node_modules/culori/src/p3/convertXyz65ToP3.js
var convertXyz65ToP3 = ({ x, y, z, alpha }) => {
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let res = convertLrgbToRgb_default({
    r: x * 2.4934969119414263 - y * 0.9313836179191242 - 0.402710784450717 * z,
    g: x * -0.8294889695615749 + y * 1.7626640603183465 + 0.0236246858419436 * z,
    b: x * 0.0358458302437845 - y * 0.0761723892680418 + 0.9568845240076871 * z
  }, "p3");
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz65ToP3_default = convertXyz65ToP3;

// node_modules/culori/src/p3/definition.js
var definition13 = {
  ...definition_default,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (color) => convertXyz65ToP3_default(convertRgbToXyz65_default(color)),
    xyz65: convertXyz65ToP3_default
  },
  toMode: {
    rgb: (color) => convertXyz65ToRgb_default(convertP3ToXyz65_default(color)),
    xyz65: convertP3ToXyz65_default
  }
};
var definition_default13 = definition13;

// node_modules/culori/src/prophoto/convertXyz50ToProphoto.js
var gamma2 = (v) => {
  let abs = Math.abs(v);
  if (abs >= 1 / 512) {
    return Math.sign(v) * Math.pow(abs, 1 / 1.8);
  }
  return 16 * v;
};
var convertXyz50ToProphoto = ({ x, y, z, alpha }) => {
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let res = {
    mode: "prophoto",
    r: gamma2(x * 1.3457868816471585 - y * 0.2555720873797946 - 0.0511018649755453 * z),
    g: gamma2(x * -0.5446307051249019 + y * 1.5082477428451466 + 0.0205274474364214 * z),
    b: gamma2(x * 0 + y * 0 + 1.2119675456389452 * z)
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz50ToProphoto_default = convertXyz50ToProphoto;

// node_modules/culori/src/prophoto/convertProphotoToXyz50.js
var linearize2 = (v = 0) => {
  let abs = Math.abs(v);
  if (abs >= 16 / 512) {
    return Math.sign(v) * Math.pow(abs, 1.8);
  }
  return v / 16;
};
var convertProphotoToXyz50 = (prophoto) => {
  let r = linearize2(prophoto.r);
  let g = linearize2(prophoto.g);
  let b = linearize2(prophoto.b);
  let res = {
    mode: "xyz50",
    x: 0.7977666449006423 * r + 0.1351812974005331 * g + 0.0313477341283922 * b,
    y: 0.2880748288194013 * r + 0.7118352342418731 * g + 0.0000899369387256 * b,
    z: 0 * r + 0 * g + 0.8251046025104602 * b
  };
  if (prophoto.alpha !== undefined) {
    res.alpha = prophoto.alpha;
  }
  return res;
};
var convertProphotoToXyz50_default = convertProphotoToXyz50;

// node_modules/culori/src/prophoto/definition.js
var definition14 = {
  ...definition_default,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: convertXyz50ToProphoto_default,
    rgb: (color) => convertXyz50ToProphoto_default(convertRgbToXyz50_default(color))
  },
  toMode: {
    xyz50: convertProphotoToXyz50_default,
    rgb: (color) => convertXyz50ToRgb_default(convertProphotoToXyz50_default(color))
  }
};
var definition_default14 = definition14;

// node_modules/culori/src/rec2020/convertXyz65ToRec2020.js
var α = 1.09929682680944;
var β = 0.018053968510807;
var gamma3 = (v) => {
  const abs = Math.abs(v);
  if (abs > β) {
    return (Math.sign(v) || 1) * (α * Math.pow(abs, 0.45) - (α - 1));
  }
  return 4.5 * v;
};
var convertXyz65ToRec2020 = ({ x, y, z, alpha }) => {
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let res = {
    mode: "rec2020",
    r: gamma3(x * 1.7166511879712683 - y * 0.3556707837763925 - 0.2533662813736599 * z),
    g: gamma3(x * -0.6666843518324893 + y * 1.6164812366349395 + 0.0157685458139111 * z),
    b: gamma3(x * 0.0176398574453108 - y * 0.0427706132578085 + 0.9421031212354739 * z)
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz65ToRec2020_default = convertXyz65ToRec2020;

// node_modules/culori/src/rec2020/convertRec2020ToXyz65.js
var α2 = 1.09929682680944;
var β2 = 0.018053968510807;
var linearize3 = (v = 0) => {
  let abs = Math.abs(v);
  if (abs < β2 * 4.5) {
    return v / 4.5;
  }
  return (Math.sign(v) || 1) * Math.pow((abs + α2 - 1) / α2, 1 / 0.45);
};
var convertRec2020ToXyz65 = (rec2020) => {
  let r = linearize3(rec2020.r);
  let g = linearize3(rec2020.g);
  let b = linearize3(rec2020.b);
  let res = {
    mode: "xyz65",
    x: 0.6369580483012911 * r + 0.1446169035862083 * g + 0.1688809751641721 * b,
    y: 0.262700212011267 * r + 0.6779980715188708 * g + 0.059301716469862 * b,
    z: 0 * r + 0.0280726930490874 * g + 1.0609850577107909 * b
  };
  if (rec2020.alpha !== undefined) {
    res.alpha = rec2020.alpha;
  }
  return res;
};
var convertRec2020ToXyz65_default = convertRec2020ToXyz65;

// node_modules/culori/src/rec2020/definition.js
var definition15 = {
  ...definition_default,
  mode: "rec2020",
  fromMode: {
    xyz65: convertXyz65ToRec2020_default,
    rgb: (color) => convertXyz65ToRec2020_default(convertRgbToXyz65_default(color))
  },
  toMode: {
    xyz65: convertRec2020ToXyz65_default,
    rgb: (color) => convertXyz65ToRgb_default(convertRec2020ToXyz65_default(color))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
};
var definition_default15 = definition15;
// node_modules/culori/src/xyz50/definition.js
var definition16 = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: convertXyz50ToRgb_default,
    lab: convertXyz50ToLab_default
  },
  fromMode: {
    rgb: convertRgbToXyz50_default,
    lab: convertLabToXyz50_default
  },
  channels: ["x", "y", "z", "alpha"],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: interpolatorLinear,
    y: interpolatorLinear,
    z: interpolatorLinear,
    alpha: { use: interpolatorLinear, fixup: fixupAlpha }
  }
};
var definition_default16 = definition16;
// node_modules/culori/src/xyz65/convertXyz65ToXyz50.js
var convertXyz65ToXyz50 = (xyz65) => {
  let { x, y, z, alpha } = xyz65;
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let res = {
    mode: "xyz50",
    x: 1.0479298208405488 * x + 0.0229467933410191 * y - 0.0501922295431356 * z,
    y: 0.0296278156881593 * x + 0.990434484573249 * y - 0.0170738250293851 * z,
    z: -0.0092430581525912 * x + 0.0150551448965779 * y + 0.7518742899580008 * z
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz65ToXyz50_default = convertXyz65ToXyz50;

// node_modules/culori/src/xyz65/convertXyz50ToXyz65.js
var convertXyz50ToXyz65 = (xyz50) => {
  let { x, y, z, alpha } = xyz50;
  if (x === undefined)
    x = 0;
  if (y === undefined)
    y = 0;
  if (z === undefined)
    z = 0;
  let res = {
    mode: "xyz65",
    x: 0.9554734527042182 * x - 0.0230985368742614 * y + 0.0632593086610217 * z,
    y: -0.0283697069632081 * x + 1.0099954580058226 * y + 0.021041398966943 * z,
    z: 0.0123140016883199 * x - 0.0205076964334779 * y + 1.3303659366080753 * z
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertXyz50ToXyz65_default = convertXyz50ToXyz65;

// node_modules/culori/src/xyz65/definition.js
var definition17 = {
  mode: "xyz65",
  toMode: {
    rgb: convertXyz65ToRgb_default,
    xyz50: convertXyz65ToXyz50_default
  },
  fromMode: {
    rgb: convertRgbToXyz65_default,
    xyz50: convertXyz50ToXyz65_default
  },
  ranges: {
    x: [0, 0.95],
    y: [0, 1],
    z: [0, 1.088]
  },
  channels: ["x", "y", "z", "alpha"],
  parse: ["xyz", "xyz-d65"],
  serialize: "xyz-d65",
  interpolate: {
    x: interpolatorLinear,
    y: interpolatorLinear,
    z: interpolatorLinear,
    alpha: { use: interpolatorLinear, fixup: fixupAlpha }
  }
};
var definition_default17 = definition17;
// node_modules/culori/src/round.js
var r = (value, precision) => Math.round(value * (precision = Math.pow(10, precision))) / precision;
var round = (precision = 4) => (value) => typeof value === "number" ? r(value, precision) : value;
var round_default = round;

// node_modules/culori/src/formatter.js
var twoDecimals = round_default(2);
var clamp = (value) => Math.max(0, Math.min(1, value || 0));
var fixup = (value) => Math.round(clamp(value) * 255);
var rgb = converter_default("rgb");
var hsl = converter_default("hsl");
var serializeHex = (color) => {
  if (color === undefined) {
    return;
  }
  let r2 = fixup(color.r);
  let g = fixup(color.g);
  let b = fixup(color.b);
  return "#" + (1 << 24 | r2 << 16 | g << 8 | b).toString(16).slice(1);
};
var serializeHex8 = (color) => {
  if (color === undefined) {
    return;
  }
  let a = fixup(color.alpha !== undefined ? color.alpha : 1);
  return serializeHex(color) + (1 << 8 | a).toString(16).slice(1);
};
var formatHex = (c2) => serializeHex(rgb(c2));
var formatHex8 = (c2) => serializeHex8(rgb(c2));
// node_modules/culori/src/random.js
var rand = ([min, max]) => min + Math.random() * (max - min);
var to_intervals = (constraints) => Object.keys(constraints).reduce((o, k4) => {
  let v = constraints[k4];
  o[k4] = Array.isArray(v) ? v : [v, v];
  return o;
}, {});
var random = (mode = "rgb", constraints = {}) => {
  let def = getMode(mode);
  let limits = to_intervals(constraints);
  return def.channels.reduce((res, ch) => {
    if (limits.alpha || ch !== "alpha") {
      res[ch] = rand(limits[ch] || def.ranges[ch]);
    }
    return res;
  }, { mode });
};
var random_default = random;
// node_modules/culori/src/map.js
var mapper = (fn5, mode = "rgb", preserve_mode = false) => {
  let channels = mode ? getMode(mode).channels : null;
  let conv = mode ? converter_default(mode) : _prepare_default;
  return (color) => {
    let conv_color = conv(color);
    if (!conv_color) {
      return;
    }
    let res = (channels || getMode(conv_color.mode).channels).reduce((res2, ch) => {
      let v = fn5(conv_color[ch], ch, conv_color, mode);
      if (v !== undefined && !isNaN(v)) {
        res2[ch] = v;
      }
      return res2;
    }, { mode: conv_color.mode });
    if (!preserve_mode) {
      return res;
    }
    let prep = _prepare_default(color);
    if (prep && prep.mode !== res.mode) {
      return converter_default(prep.mode)(res);
    }
    return res;
  };
};
var mapAlphaMultiply = (v, ch, c2) => {
  if (ch !== "alpha") {
    return (v || 0) * (c2.alpha !== undefined ? c2.alpha : 1);
  }
  return v;
};
var mapAlphaDivide = (v, ch, c2) => {
  if (ch !== "alpha" && c2.alpha !== 0) {
    return (v || 0) / (c2.alpha !== undefined ? c2.alpha : 1);
  }
  return v;
};
// node_modules/culori/src/util/normalizePositions.js
var normalizePositions = (arr) => {
  if (arr[0] === undefined) {
    arr[0] = 0;
  }
  if (arr[arr.length - 1] === undefined) {
    arr[arr.length - 1] = 1;
  }
  let i = 1;
  let j;
  let from_idx;
  let from_pos;
  let inc;
  while (i < arr.length) {
    if (arr[i] === undefined) {
      from_idx = i;
      from_pos = arr[i - 1];
      j = i;
      while (arr[j] === undefined)
        j++;
      inc = (arr[j] - from_pos) / (j - i + 1);
      while (i < j) {
        arr[i] = from_pos + (i + 1 - from_idx) * inc;
        i++;
      }
    } else if (arr[i] < arr[i - 1]) {
      arr[i] = arr[i - 1];
    }
    i++;
  }
  return arr;
};
var normalizePositions_default = normalizePositions;

// node_modules/culori/src/easing/midpoint.js
var midpoint = (H = 0.5) => (t) => H <= 0 ? 1 : H >= 1 ? 0 : Math.pow(t, Math.log(0.5) / Math.log(H));
var midpoint_default = midpoint;

// node_modules/culori/src/interpolate/interpolate.js
var isfn = (o) => typeof o === "function";
var isobj = (o) => o && typeof o === "object";
var isnum = (o) => typeof o === "number";
var interpolate_fn = (colors, mode = "rgb", overrides, premap) => {
  let def = getMode(mode);
  let conv = converter_default(mode);
  let conv_colors = [];
  let positions = [];
  let fns = {};
  colors.forEach((val) => {
    if (Array.isArray(val)) {
      conv_colors.push(conv(val[0]));
      positions.push(val[1]);
    } else if (isnum(val) || isfn(val)) {
      fns[positions.length] = val;
    } else {
      conv_colors.push(conv(val));
      positions.push(undefined);
    }
  });
  normalizePositions_default(positions);
  let fixed = def.channels.reduce((res, ch) => {
    let ffn;
    if (isobj(overrides) && isobj(overrides[ch]) && overrides[ch].fixup) {
      ffn = overrides[ch].fixup;
    } else if (isobj(def.interpolate[ch]) && def.interpolate[ch].fixup) {
      ffn = def.interpolate[ch].fixup;
    } else {
      ffn = (v) => v;
    }
    res[ch] = ffn(conv_colors.map((color) => color[ch]));
    return res;
  }, {});
  if (premap) {
    let ccolors = conv_colors.map((color, idx) => {
      return def.channels.reduce((c2, ch) => {
        c2[ch] = fixed[ch][idx];
        return c2;
      }, { mode });
    });
    fixed = def.channels.reduce((res, ch) => {
      res[ch] = ccolors.map((c2) => {
        let v = premap(c2[ch], ch, c2, mode);
        return isNaN(v) ? undefined : v;
      });
      return res;
    }, {});
  }
  let interpolators = def.channels.reduce((res, ch) => {
    let ifn;
    if (isfn(overrides)) {
      ifn = overrides;
    } else if (isobj(overrides) && isfn(overrides[ch])) {
      ifn = overrides[ch];
    } else if (isobj(overrides) && isobj(overrides[ch]) && overrides[ch].use) {
      ifn = overrides[ch].use;
    } else if (isfn(def.interpolate[ch])) {
      ifn = def.interpolate[ch];
    } else if (isobj(def.interpolate[ch])) {
      ifn = def.interpolate[ch].use;
    }
    res[ch] = ifn(fixed[ch]);
    return res;
  }, {});
  let n = conv_colors.length - 1;
  return (t) => {
    t = Math.min(Math.max(0, t), 1);
    if (t <= positions[0]) {
      return conv_colors[0];
    }
    if (t > positions[n]) {
      return conv_colors[n];
    }
    let idx = 0;
    while (positions[idx] < t)
      idx++;
    let start = positions[idx - 1];
    let delta = positions[idx] - start;
    let P = (t - start) / delta;
    let fn5 = fns[idx] || fns[0];
    if (fn5 !== undefined) {
      if (isnum(fn5)) {
        fn5 = midpoint_default((fn5 - start) / delta);
      }
      P = fn5(P);
    }
    let t0 = (idx - 1 + P) / n;
    return def.channels.reduce((res, channel) => {
      let val = interpolators[channel](t0);
      if (val !== undefined) {
        res[channel] = val;
      }
      return res;
    }, { mode });
  };
};
var interpolate = (colors, mode = "rgb", overrides) => interpolate_fn(colors, mode, overrides);
var interpolateWith = (premap, postmap) => (colors, mode = "rgb", overrides) => {
  let post = postmap ? mapper(postmap, mode) : undefined;
  let it = interpolate_fn(colors, mode, overrides, premap);
  return post ? (t) => post(it(t)) : it;
};
var interpolateWithPremultipliedAlpha = interpolateWith(mapAlphaMultiply, mapAlphaDivide);
// node_modules/culori/src/interpolate/splineBasis.js
var mod = (v, l) => (v + l) % l;
var bspline = (Vim2, Vim1, Vi, Vip1, t) => {
  let t2 = t * t;
  let t3 = t2 * t;
  return ((1 - 3 * t + 3 * t2 - t3) * Vim2 + (4 - 6 * t2 + 3 * t3) * Vim1 + (1 + 3 * t + 3 * t2 - 3 * t3) * Vi + t3 * Vip1) / 6;
};
var interpolatorSplineBasis = (arr) => (t) => {
  let classes = arr.length - 1;
  let i = t >= 1 ? classes - 1 : Math.max(0, Math.floor(t * classes));
  return bspline(i > 0 ? arr[i - 1] : 2 * arr[i] - arr[i + 1], arr[i], arr[i + 1], i < classes - 1 ? arr[i + 2] : 2 * arr[i + 1] - arr[i], (t - i / classes) * classes);
};
var interpolatorSplineBasisClosed = (arr) => (t) => {
  const classes = arr.length - 1;
  const i = Math.floor(t * classes);
  return bspline(arr[mod(i - 1, arr.length)], arr[mod(i, arr.length)], arr[mod(i + 1, arr.length)], arr[mod(i + 2, arr.length)], (t - i / classes) * classes);
};
// node_modules/culori/src/interpolate/splineNatural.js
var solve = (v) => {
  let i;
  let n = v.length - 1;
  let c2 = new Array(n);
  let _v = new Array(n);
  let sol = new Array(n);
  c2[1] = 1 / 4;
  _v[1] = (6 * v[1] - v[0]) / 4;
  for (i = 2;i < n; ++i) {
    c2[i] = 1 / (4 - c2[i - 1]);
    _v[i] = (6 * v[i] - (i == n - 1 ? v[n] : 0) - _v[i - 1]) * c2[i];
  }
  sol[0] = v[0];
  sol[n] = v[n];
  if (n - 1 > 0) {
    sol[n - 1] = _v[n - 1];
  }
  for (i = n - 2;i > 0; --i) {
    sol[i] = _v[i] - c2[i] * sol[i + 1];
  }
  return sol;
};
var interpolatorSplineNatural = (arr) => interpolatorSplineBasis(solve(arr));
var interpolatorSplineNaturalClosed = (arr) => interpolatorSplineBasisClosed(solve(arr));
// node_modules/culori/src/interpolate/splineMonotone.js
var sgn = Math.sign;
var min = Math.min;
var abs = Math.abs;
var mono = (arr) => {
  let n = arr.length - 1;
  let s = [];
  let p = [];
  let yp = [];
  for (let i = 0;i < n; i++) {
    s.push((arr[i + 1] - arr[i]) * n);
    p.push(i > 0 ? 0.5 * (arr[i + 1] - arr[i - 1]) * n : undefined);
    yp.push(i > 0 ? (sgn(s[i - 1]) + sgn(s[i])) * min(abs(s[i - 1]), abs(s[i]), 0.5 * abs(p[i])) : undefined);
  }
  return [s, p, yp];
};
var interpolator = (arr, yp, s) => {
  let n = arr.length - 1;
  let n2 = n * n;
  return (t) => {
    let i;
    if (t >= 1) {
      i = n - 1;
    } else {
      i = Math.max(0, Math.floor(t * n));
    }
    let t1 = t - i / n;
    let t2 = t1 * t1;
    let t3 = t2 * t1;
    return (yp[i] + yp[i + 1] - 2 * s[i]) * n2 * t3 + (3 * s[i] - 2 * yp[i] - yp[i + 1]) * n * t2 + yp[i] * t1 + arr[i];
  };
};
var interpolatorSplineMonotone = (arr) => {
  if (arr.length < 3) {
    return interpolatorLinear(arr);
  }
  let n = arr.length - 1;
  let [s, , yp] = mono(arr);
  yp[0] = s[0];
  yp[n] = s[n - 1];
  return interpolator(arr, yp, s);
};
var interpolatorSplineMonotoneClosed = (arr) => {
  let n = arr.length - 1;
  let [s, p, yp] = mono(arr);
  p[0] = 0.5 * (arr[1] - arr[n]) * n;
  p[n] = 0.5 * (arr[0] - arr[n - 1]) * n;
  let s_m1 = (arr[0] - arr[n]) * n;
  let s_n = s_m1;
  yp[0] = (sgn(s_m1) + sgn(s[0])) * min(abs(s_m1), abs(s[0]), 0.5 * abs(p[0]));
  yp[n] = (sgn(s[n - 1]) + sgn(s_n)) * min(abs(s[n - 1]), abs(s_n), 0.5 * abs(p[n]));
  return interpolator(arr, yp, s);
};
// node_modules/culori/src/easing/gamma.js
var gamma4 = (γ = 1) => γ === 1 ? (t) => t : (t) => Math.pow(t, γ);
var gamma_default = gamma4;

// node_modules/culori/src/samples.js
var samples = (n = 2, γ = 1) => {
  let ease = gamma_default(γ);
  if (n < 2) {
    return n < 1 ? [] : [ease(0.5)];
  }
  let res = [];
  for (let i = 0;i < n; i++) {
    res.push(ease(i / (n - 1)));
  }
  return res;
};
var samples_default = samples;
// node_modules/culori/src/nearest.js
var nearest = (colors, metric = differenceEuclidean(), accessor = (d) => d) => {
  let arr = colors.map((c2, idx) => ({ color: accessor(c2), i: idx }));
  return (color, n = 1, τ = Infinity) => {
    if (isFinite(n)) {
      n = Math.max(1, Math.min(n, arr.length - 1));
    }
    arr.forEach((c2) => {
      c2.d = metric(color, c2.color);
    });
    return arr.sort((a, b) => a.d - b.d).slice(0, n).filter((c2) => c2.d < τ).map((c2) => colors[c2.i]);
  };
};
var nearest_default = nearest;
// node_modules/culori/src/filter.js
var clamp2 = (v) => Math.max(Math.min(v, 1), 0);
var matrixGrayscale = (amount) => {
  let a = 1 - clamp2(amount);
  return [
    0.2126 + 0.7874 * a,
    0.7152 - 0.7152 * a,
    0.0722 - 0.0722 * a,
    0,
    0.2126 - 0.2126 * a,
    0.7152 + 0.2848 * a,
    0.0722 - 0.0722 * a,
    0,
    0.2126 - 0.2126 * a,
    0.7152 - 0.7152 * a,
    0.0722 + 0.9278 * a,
    0,
    0,
    0,
    0,
    1
  ];
};
var matrix = (values, mode, preserve_mode = false) => {
  let conv = converter_default(mode);
  let channels = getMode(mode).channels;
  return (color) => {
    let c2 = conv(color);
    if (!c2) {
      return;
    }
    let res = { mode };
    let ch;
    let count = channels.length;
    for (let i = 0;i < values.length; i++) {
      ch = channels[Math.floor(i / count)];
      if (c2[ch] === undefined) {
        continue;
      }
      res[ch] = (res[ch] || 0) + values[i] * (c2[channels[i % count]] || 0);
    }
    if (!preserve_mode) {
      return res;
    }
    let prep = _prepare_default(color);
    return prep && res.mode !== prep.mode ? converter_default(prep.mode)(res) : res;
  };
};
var filterGrayscale = (amt = 1, mode = "rgb") => matrix(matrixGrayscale(amt), mode, true);
// node_modules/culori/src/deficiency.js
var rgb2 = converter_default("rgb");
var PROT = [
  [1, 0, -0, 0, 1, 0, -0, -0, 1],
  [
    0.856167,
    0.182038,
    -0.038205,
    0.029342,
    0.955115,
    0.015544,
    -0.00288,
    -0.001563,
    1.004443
  ],
  [
    0.734766,
    0.334872,
    -0.069637,
    0.05184,
    0.919198,
    0.028963,
    -0.004928,
    -0.004209,
    1.009137
  ],
  [
    0.630323,
    0.465641,
    -0.095964,
    0.069181,
    0.890046,
    0.040773,
    -0.006308,
    -0.007724,
    1.014032
  ],
  [
    0.539009,
    0.579343,
    -0.118352,
    0.082546,
    0.866121,
    0.051332,
    -0.007136,
    -0.011959,
    1.019095
  ],
  [
    0.458064,
    0.679578,
    -0.137642,
    0.092785,
    0.846313,
    0.060902,
    -0.007494,
    -0.016807,
    1.024301
  ],
  [
    0.38545,
    0.769005,
    -0.154455,
    0.100526,
    0.829802,
    0.069673,
    -0.007442,
    -0.02219,
    1.029632
  ],
  [
    0.319627,
    0.849633,
    -0.169261,
    0.106241,
    0.815969,
    0.07779,
    -0.007025,
    -0.028051,
    1.035076
  ],
  [
    0.259411,
    0.923008,
    -0.18242,
    0.110296,
    0.80434,
    0.085364,
    -0.006276,
    -0.034346,
    1.040622
  ],
  [
    0.203876,
    0.990338,
    -0.194214,
    0.112975,
    0.794542,
    0.092483,
    -0.005222,
    -0.041043,
    1.046265
  ],
  [
    0.152286,
    1.052583,
    -0.204868,
    0.114503,
    0.786281,
    0.099216,
    -0.003882,
    -0.048116,
    1.051998
  ]
];
var DEUTER = [
  [1, 0, -0, 0, 1, 0, -0, -0, 1],
  [
    0.866435,
    0.177704,
    -0.044139,
    0.049567,
    0.939063,
    0.01137,
    -0.003453,
    0.007233,
    0.99622
  ],
  [
    0.760729,
    0.319078,
    -0.079807,
    0.090568,
    0.889315,
    0.020117,
    -0.006027,
    0.013325,
    0.992702
  ],
  [
    0.675425,
    0.43385,
    -0.109275,
    0.125303,
    0.847755,
    0.026942,
    -0.00795,
    0.018572,
    0.989378
  ],
  [
    0.605511,
    0.52856,
    -0.134071,
    0.155318,
    0.812366,
    0.032316,
    -0.009376,
    0.023176,
    0.9862
  ],
  [
    0.547494,
    0.607765,
    -0.155259,
    0.181692,
    0.781742,
    0.036566,
    -0.01041,
    0.027275,
    0.983136
  ],
  [
    0.498864,
    0.674741,
    -0.173604,
    0.205199,
    0.754872,
    0.039929,
    -0.011131,
    0.030969,
    0.980162
  ],
  [
    0.457771,
    0.731899,
    -0.18967,
    0.226409,
    0.731012,
    0.042579,
    -0.011595,
    0.034333,
    0.977261
  ],
  [
    0.422823,
    0.781057,
    -0.203881,
    0.245752,
    0.709602,
    0.044646,
    -0.011843,
    0.037423,
    0.974421
  ],
  [
    0.392952,
    0.82361,
    -0.216562,
    0.263559,
    0.69021,
    0.046232,
    -0.01191,
    0.040281,
    0.97163
  ],
  [
    0.367322,
    0.860646,
    -0.227968,
    0.280085,
    0.672501,
    0.047413,
    -0.01182,
    0.04294,
    0.968881
  ]
];
var TRIT = [
  [1, 0, -0, 0, 1, 0, -0, -0, 1],
  [
    0.92667,
    0.092514,
    -0.019184,
    0.021191,
    0.964503,
    0.014306,
    0.008437,
    0.054813,
    0.93675
  ],
  [
    0.89572,
    0.13333,
    -0.02905,
    0.029997,
    0.9454,
    0.024603,
    0.013027,
    0.104707,
    0.882266
  ],
  [
    0.905871,
    0.127791,
    -0.033662,
    0.026856,
    0.941251,
    0.031893,
    0.01341,
    0.148296,
    0.838294
  ],
  [
    0.948035,
    0.08949,
    -0.037526,
    0.014364,
    0.946792,
    0.038844,
    0.010853,
    0.193991,
    0.795156
  ],
  [
    1.017277,
    0.027029,
    -0.044306,
    -0.006113,
    0.958479,
    0.047634,
    0.006379,
    0.248708,
    0.744913
  ],
  [
    1.104996,
    -0.046633,
    -0.058363,
    -0.032137,
    0.971635,
    0.060503,
    0.001336,
    0.317922,
    0.680742
  ],
  [
    1.193214,
    -0.109812,
    -0.083402,
    -0.058496,
    0.97941,
    0.079086,
    -0.002346,
    0.403492,
    0.598854
  ],
  [
    1.257728,
    -0.139648,
    -0.118081,
    -0.078003,
    0.975409,
    0.102594,
    -0.003316,
    0.501214,
    0.502102
  ],
  [
    1.278864,
    -0.125333,
    -0.153531,
    -0.084748,
    0.957674,
    0.127074,
    -0.000989,
    0.601151,
    0.399838
  ],
  [
    1.255528,
    -0.076749,
    -0.178779,
    -0.078411,
    0.930809,
    0.147602,
    0.004733,
    0.691367,
    0.3039
  ]
];
var deficiency = (lut, t) => {
  let tt = Math.max(0, Math.min(1, t));
  let i = Math.round(tt / 0.1);
  let w = Math.round(tt % 0.1);
  let arr = lut[i];
  if (w > 0 && i < lut.length - 1) {
    let arr_2 = lut[i + 1];
    arr = arr.map((v, idx) => lerp(arr[idx], arr_2[idx], w));
  }
  return (color) => {
    let c2 = _prepare_default(color);
    if (c2 === undefined) {
      return;
    }
    let { r: r2, g, b } = rgb2(c2);
    let ret = {
      mode: "rgb",
      r: arr[0] * r2 + arr[1] * g + arr[2] * b,
      g: arr[3] * r2 + arr[4] * g + arr[5] * b,
      b: arr[6] * r2 + arr[7] * g + arr[8] * b
    };
    if (c2.alpha !== undefined) {
      ret.alpha = c2.alpha;
    }
    return converter_default(c2.mode)(ret);
  };
};
var filterDeficiencyProt = (severity = 1) => deficiency(PROT, severity);
var filterDeficiencyDeuter = (severity = 1) => deficiency(DEUTER, severity);
var filterDeficiencyTrit = (severity = 1) => deficiency(TRIT, severity);
// node_modules/culori/src/easing/smoothstep.js
var easingSmoothstep = (t) => t * t * (3 - 2 * t);
// node_modules/culori/src/wcag.js
function luminance(color) {
  let c2 = converter_default("lrgb")(color);
  return 0.2126 * c2.r + 0.7152 * c2.g + 0.0722 * c2.b;
}
function contrast(a, b) {
  let L1 = luminance(a);
  let L2 = luminance(b);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}
// node_modules/culori/src/bootstrap/css.js
var a98 = useMode(definition_default2);
var hsl2 = useMode(definition_default3);
var hsv = useMode(definition_default4);
var hwb = useMode(definition_default5);
var lab = useMode(definition_default6);
var lab65 = useMode(definition_default7);
var lch = useMode(definition_default8);
var lch65 = useMode(definition_default9);
var lrgb = useMode(definition_default10);
var oklab = useMode(definition_default11);
var oklch = useMode(definition_default12);
var p3 = useMode(definition_default13);
var prophoto = useMode(definition_default14);
var rec2020 = useMode(definition_default15);
var rgb3 = useMode(definition_default);
var xyz50 = useMode(definition_default16);
var xyz65 = useMode(definition_default17);

// lib/accessibility.ts
function contrast2(a = "white", b = "black") {
  return contrast(token(a), token(b));
}
function deficiency2(color = "cyan", options = {
  kind: "red",
  severity: 0.5
}) {
  let { kind, severity } = options || {};
  const func = (c2, t = 1) => ({
    blue: filterDeficiencyTrit(t)(c2),
    red: filterDeficiencyProt(t)(c2),
    green: filterDeficiencyDeuter(t)(c2),
    monochromacy: filterGrayscale(t, "lch")(c2)
  })[kind], defs = ["red", "blue", "green", "mono"];
  kind = or(kind, "red");
  severity = or(severity, 0.5);
  return defs.some((el) => eq(el, kind?.toLowerCase())) ? formatHex8(func(token(color), severity)) : Error(`Unknown color vision deficiency ${kind}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`);
}

// lib/internal.ts
var { keys, entries, values } = Object;
var operators = {
  "!=": neq,
  "==": eq,
  ">=": gte,
  "<=": lte,
  ">": gt,
  "<": lt,
  "===": eq,
  "!==": neq,
  "!": not,
  "/": give,
  "*": mult,
  "+": add,
  "-": take
};
function or(arg, def) {
  return arg || def;
}
function and(a, b) {
  return a && b;
}
var dstnce = (a) => (b) => differenceHyab()(a, b);
function iterator(t, z, y = ["hue", "chroma", "lightness", "distance", "contrast", "luminance"]) {
  const p = {};
  if (isArray(t) && t?.length >= 1)
    for (const k4 of values(t))
      p[k4] = z(k4);
  if (eq(t, undefined))
    for (const k4 of y)
      p[k4] = z(k4);
  return p;
}
var [ci, ef, hf, hi, li] = [
  interpolatorSplineNatural,
  easingSmoothstep,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  interpolatorLinear
];
function gmchn(m = "", i) {
  const out = m.replace(/\d|ok/g, "");
  return or(and(i, out.charAt(i)), out.split(""));
}
function mult(x, y) {
  return x * y;
}
function give(x, y) {
  return x / y;
}
function add(x, y) {
  return x + y;
}
function take(x, y) {
  return x - y;
}
function exprParser(a, b) {
  return and(eq(typeof b, "string"), operators[reOp(b)](a, reNum(b)));
}
function mcchn(c2, m = "lch", f3 = true) {
  let x, e4;
  if (eq(c2, "l")) {
    x = /(j|l)/i;
    e4 = `The color space ${m} has no lightness channel.`;
  } else {
    x = /(s|c)/i;
    e4 = `The color space ${m} has no chroma/saturation channel.`;
  }
  const d = x.exec(m)["0"];
  return x.test(m) ? or(and(f3, `${m}.${d}`), d) : Error(e4);
}
function colorObj(a, b) {
  return (c2) => ({ [a]: b(c2), color: c2 });
}
function adjustHue(val) {
  let out = 0;
  if (val < 0)
    out += Math.ceil(-val / 360) * 360;
  return out % 360;
}
function chnDiff(x, s) {
  return (y) => {
    const cb = (c2) => mc(s)(c2);
    return lt(cb(x), cb(y)) && take(cb(y), cb(x)) || take(cb(x), cb(y));
  };
}
function gt(x, y) {
  return x > y;
}
function lt(x, y) {
  return x < y;
}
function gte(x, y) {
  return x >= y;
}
function lte(x, y) {
  return x <= y;
}
function eq(x, y) {
  return x === y;
}
function neq(x, y) {
  return not(eq(x, y));
}
function not(x) {
  return !x;
}
function inRange(n, s, e4) {
  return and(gte(n, Math.min(s, e4)), lt(n, Math.max(s, e4)));
}
function isInt(n) {
  return /^-?[0-9]+$/.test(n.toString());
}
function rand2(mn, mx) {
  return Math.random() * Math.abs(mx - mn + mn);
}
function floorCeil(n) {
  return and(not(isInt(n)), or(and(eq(/^[0-4]$/.test(n.toString().split(".")[1].charAt(0)), true), Math.floor(n)), Math.ceil(n)));
}
function customSort(o = "asc", x = "factor") {
  return (a, b) => or(and(eq(o, or("asc", "min")), a[x] - b[x]), and(eq(o, or("desc", "max")), b[x] - a[x]));
}
function colorObjColl(a, b) {
  return (z) => map(z, colorObj(a, b));
}
function isArray(x) {
  return Array.isArray(x);
}
function isMap(x) {
  return x instanceof Map;
}
function isSet(x) {
  return x instanceof Set;
}
function map(u, cb) {
  let p = or(or(and(isMap(u), new Map), and(isSet(u), new Set)), false);
  if (p) {
    for (const [a, b] of entries(u)) {
      p.set(a, cb(b));
    }
    return p;
  }
  p = isArray(u) ? new Array(u.length) : {};
  for (const [a, b] of entries(u)) {
    p[a] = cb(b);
  }
  return p;
}
function min2(arr) {
  return extremum("min", arr);
}
function extremum(e4, arr = []) {
  return arr.reduce((a, b) => Math[e4](a, b), eq(e4, "max") ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY);
}
function max(arr) {
  return extremum("max", arr);
}
function reNum(s) {
  const re = /[0-9]*\.?[0-9]+/;
  return and(re.test(s), Number(re.exec(s)["0"]));
}
function reOp(s = "") {
  const re = /^[\*+\-/<>]|={1,2}|!={0,2}/;
  return and(re.test(s), String(re.exec(s)?.[0]));
}
function sortedColl(fact, cb, o = "asc") {
  return (c2) => {
    const data = values(colorObjColl(fact, cb)(c2)).sort(customSort(o, fact));
    if (isArray(c2))
      return data;
    const out = new Map;
    for (const [z, v] of entries(data))
      out.set(z, v);
    return out;
  };
}
function filteredColl(fact, cb) {
  return (c2, s, e4) => {
    let data = values(colorObjColl(fact, cb)(c2));
    if (and(eq(typeof s, "number"), eq(typeof e4, "number")))
      data = data.filter((j) => inRange(j[fact], s, e4));
    const startOp = reOp(s);
    const endOp = reOp(e4);
    const start = Number.parseFloat(reNum(s).toString());
    const end = Number.parseFloat(reNum(e4).toString());
    if (and(startOp, endOp))
      data = data.filter((l) => and(operators[startOp](l[fact], start), operators[endOp](l[fact], end)));
    else
      data = data.filter((l) => end ? and(operators[or(startOp, endOp)](l[fact], start), inRange(l[fact], end)) : operators[or(startOp, endOp)](l[fact], start));
    return data.map((l) => l.color);
  };
}
function getSrcMode(c2) {
  return isArray(c2) && typeof c2[0] != "number" ? c2[0] : typeof c2 === "object" ? c2?.mode : "rgb";
}
var ctrst = (a) => (b) => contrast2(b, a);

// lib/constants.ts
var hue3 = [
  ["red-purple", [343, 359], [321, 342]],
  ["red", [21, 40], [0, 20]],
  ["yellow-red", [41, 54], [55, 70]],
  ["yellow", [71, 90], [91, 109]],
  ["green-yellow", [110, 124], [125, 140]],
  ["green", [141, 160], [161, 180]],
  ["blue-green", [181, 200], [201, 220]],
  ["blue", [221, 235], [236, 250]],
  ["purple-blue", [271, 290], [251, 270]],
  ["purple", [316, 320], [291, 315]]
];
var limits = {
  cubehelix: {
    s: [0, 4.614],
    l: [0, 1]
  },
  lab: {
    l: [0, 100]
  },
  dlch: { l: [0, 100], c: [0, 51.484] },
  jab: {
    j: [0, 0.222]
  },
  jch: {
    j: [0, 0.221],
    c: [0, 0.19]
  },
  lch: { l: [0, 100], c: [0, 150] },
  lch65: { l: [0, 100], c: [0, 133.807] },
  lchuv: { l: [0, 100], c: [0, 176.956] },
  luv: { l: [0, 100] },
  oklab: { l: [0, 1] },
  oklch: { l: [0, 1], c: [0, 0.4] }
};

// lib/utils.ts
function alpha(color = "cyan", amount = undefined) {
  let alphaChannel;
  if (isArray(color)) {
    alphaChannel = color.filter((channel) => eq(typeof channel, "number")).length === 4 && color[color?.length - 1] || 1;
  } else if (eq(typeof color, "string")) {
    alphaChannel = gte(color?.length, 8) && not(named_default?.color?.toLowerCase()) ? Number.parseInt(color?.slice(color?.length - 2), 16) : 1;
  } else if (typeof color === "object" && !color?.length) {
    alphaChannel = color?.alpha;
  }
  if (!amount) {
    return alphaChannel && alphaChannel || 1;
  }
  amount = typeof amount !== "number" && exprParser(alphaChannel, amount) || (inRange(amount, 0, 1) && amount || give(amount, 100));
  if (isArray(color)) {
    color[(color.length === 5 || color[0] !== "string" && color?.length === 4) && color.length - 1 || 3] = amount;
  }
  if (eq(typeof color, "object") && !color?.length) {
    color.alpha = amount;
  } else {
    const colorObject = token(color, { kind: "obj" });
    colorObject.alpha = amount;
    color = colorObject;
  }
  return color;
}
function mc(modeChannel = "lch.h") {
  return (color, value) => {
    const [mode, channel] = modeChannel.split(".");
    let colorObject = token(color, { targetMode: mode, kind: "obj" });
    const currentChannel = colorObject[channel];
    if (value) {
      if (eq(typeof value, "number")) {
        colorObject[channel] = value;
      } else if (eq(typeof value, "string")) {
        colorObject = exprParser(colorObject[channel], value);
      } else {
        throw Error(`${typeof value} ${value} is not a valid value for a color token`);
      }
    }
    return value && colorObject || currentChannel;
  };
}
function achromatic(color = "cyan") {
  color = token(color, { kind: "obj", targetMode: "lch" });
  const isFalsy = (x) => typeof x === "undefined" || x === 0 || Number.isNaN(x);
  return (isFalsy(color.l) || color.l >= 100) && (!isFalsy(color.c) || isFalsy(color.c)) && false || (isFalsy(color.c) && true || false);
}
function lightness(color, options = {
  amount: 0.1,
  darken: false
}) {
  const { amount, darken } = options;
  const f3 = () => {
    const colorObject = token(color, { kind: "obj", targetMode: "lab" });
    if (typeof amount === "number") {
      colorObject.l = (darken ? max : min2)([
        100,
        colorObject.l + 100 * (darken ? -amount : amount)
      ]);
    }
    return token(colorObject);
  };
  return f3();
}
function token(color = "cyan", options) {
  const modeDefinitions = {
    lrgb: definition_default10,
    lab: definition_default6,
    lch65: definition_default9,
    lch: definition_default8,
    xyz: definition_default16,
    xyz65: definition_default17,
    lab65: definition_default7,
    rgb: definition_default15,
    hsv: definition_default4
  };
  let {
    srcMode,
    targetMode,
    omitMode,
    kind,
    numType,
    omitAlpha,
    normalizeRgb
  } = options || {};
  normalizeRgb = normalizeRgb || false;
  numType = numType || undefined;
  omitAlpha = omitAlpha || false;
  kind = kind || "str";
  omitMode = omitMode || false;
  srcMode = srcMode && srcMode || getSrcMode(color);
  let srcChannels = gmchn(srcMode), srcChannelValues;
  const alphaValue = alpha(color);
  let result = {};
  result.mode = srcMode;
  if (isArray(color)) {
    srcChannelValues = color.filter((a) => eq(typeof a, "number"));
  }
  if (eq(typeof color, "object") && !color?.length) {
    srcChannelValues = srcChannels.map((a) => color[a]);
  }
  if (eq(typeof color, "string")) {
    result = typeof color === "number" && num2c() || parseToken(c2str(), "rgb");
  }
  if (srcChannelValues) {
    for (const channel of srcChannels) {
      result[channel] = srcChannelValues[srcChannels.indexOf(channel)];
    }
  }
  if (srcMode === "rgb" && normalizeRgb) {
    if (srcChannels.some((c2) => Math.abs(result[c2]) > 1)) {
      for (const k4 of srcChannels)
        result[k4] /= 255;
    }
  }
  if (targetMode)
    result = parseToken(result, targetMode);
  function parseToken(col, mode) {
    return useMode(modeDefinitions[mode])(or(col, result));
  }
  function c2col(col) {
    const res = targetMode && parseToken(result, targetMode) || result;
    if (targetMode) {
      srcChannels = gmchn(targetMode);
    }
    if (eq(col, "obj")) {
      omitMode ? delete res.mode : res.mode = targetMode && targetMode || srcMode;
      omitAlpha ? delete res.alpha : res.alpha = alphaValue;
      return res;
    }
    if (eq(col, "arr"))
      srcChannelValues = [];
    for (const k4 of srcChannels) {
      srcChannelValues[srcChannels.indexOf(k4)] = res[k4];
    }
    omitAlpha || srcChannelValues.push(alphaValue);
    omitMode || srcChannelValues.unshift(targetMode ? targetMode : srcMode);
    return srcChannelValues;
  }
  function c2num() {
    const rgbObject = parseToken(c2str(), "rgb");
    const result2 = (255 * rgbObject.r << 16) + (255 * rgbObject.g << 8) + 255 * rgbObject.b;
    return numType && result2.toString({
      bin: 2,
      hex: 16,
      expo: 6,
      oct: 8
    }[numType?.toLowerCase()]) || result2;
  }
  function c2str() {
    return {
      boolean: or(and(eq(color, true), "#ffffff"), "#000000"),
      number: num2c(),
      object: (omitAlpha ? formatHex : formatHex8)(c2col("obj")),
      string: or(named_default?.color, formatHex(color))
    }[typeof color];
  }
  function num2c() {
    return (eq(typeof color, "number"), gte(color, 0)) && lte(color, 16777215) ? {
      r: (color >> 16) / 255,
      g: (color >> 8 & 255) / 255,
      b: color / 255,
      mode: "rgb"
    } : Error(`unknown num color:   ${color}`);
  }
  return {
    obj: c2col("obj"),
    arr: c2col("arr"),
    str: c2str(),
    num: c2num()
  }[kind];
}
function luminance2(color, amount = undefined) {
  color = token(color);
  let result;
  if (!amount) {
    return luminance(color);
  }
  const w = "#ffffff", b = "#000000";
  const EPS = 0.0000001;
  let MAX_ITER = 20;
  if (eq(typeof amount, "number")) {
    const currentLuminance = luminance(color);
    const f3 = (u, v) => {
      const [mid, low] = [
        interpolate([u, v])(0.5),
        luminance(color)
      ];
      if (Math.abs(amount - low > EPS) || !MAX_ITER--) {
        return mid;
      }
      if (gt(low, amount)) {
        return f3(u, mid);
      }
      return f3(mid, v);
    };
    if (gt(currentLuminance, amount)) {
      result = f3(b, color);
    } else {
      result = f3(color, w);
    }
  }
  return token(result);
}
function family(color, bias = false) {
  const res = !achromatic(color) && hue3.find((arr) => {
    const hueRanges = arr.slice(1).flat(1);
    return inRange(mc("lch.h")(color), min2(hueRanges), max(hueRanges));
  })[0] || "gray";
  return bias && {
    hue: res,
    bias: /-/.test(res) && res.split("-")[1] || false
  } || res;
}
function temp(color = "cyan") {
  return hue3.some((arr) => inRange(floorCeil(mc("lch.h")(color)), arr[2][0], arr[2][1])) && "cool" || "warm";
}
// lib/palettes.ts
var tailwind = {
  indigo: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  }
};
function hasScheme(s = "", obj = {}) {
  const o = keys(obj), cb = (x) => obj[o.find((v) => v.toLowerCase() === x.toLowerCase())];
  let res = {};
  if (isArray(s))
    for (const x of s)
      res[x.toLowerCase()] = cb(x);
  else
    res = cb(s);
  return res || Error(`${s} is an invalid scheme option.`);
}
function sequential(scheme) {
  const so = {
    OrRd: [
      "#fff7ec",
      "#fee8c8",
      "#fdd49e",
      "#fdbb84",
      "#fc8d59",
      "#ef6548",
      "#d7301f",
      "#b30000",
      "#7f0000"
    ],
    PuBu: [
      "#fff7fb",
      "#ece7f2",
      "#d0d1e6",
      "#a6bddb",
      "#74a9cf",
      "#3690c0",
      "#0570b0",
      "#045a8d",
      "#023858"
    ],
    BuPu: [
      "#f7fcfd",
      "#e0ecf4",
      "#bfd3e6",
      "#9ebcda",
      "#8c96c6",
      "#8c6bb1",
      "#88419d",
      "#810f7c",
      "#4d004b"
    ],
    Oranges: [
      "#fff5eb",
      "#fee6ce",
      "#fdd0a2",
      "#fdae6b",
      "#fd8d3c",
      "#f16913",
      "#d94801",
      "#a63603",
      "#7f2704"
    ],
    BuGn: [
      "#f7fcfd",
      "#e5f5f9",
      "#ccece6",
      "#99d8c9",
      "#66c2a4",
      "#41ae76",
      "#238b45",
      "#006d2c",
      "#00441b"
    ],
    YlOrBr: [
      "#ffffe5",
      "#fff7bc",
      "#fee391",
      "#fec44f",
      "#fe9929",
      "#ec7014",
      "#cc4c02",
      "#993404",
      "#662506"
    ],
    YlGn: [
      "#ffffe5",
      "#f7fcb9",
      "#d9f0a3",
      "#addd8e",
      "#78c679",
      "#41ab5d",
      "#238443",
      "#006837",
      "#004529"
    ],
    Reds: [
      "#fff5f0",
      "#fee0d2",
      "#fcbba1",
      "#fc9272",
      "#fb6a4a",
      "#ef3b2c",
      "#cb181d",
      "#a50f15",
      "#67000d"
    ],
    RdPu: [
      "#fff7f3",
      "#fde0dd",
      "#fcc5c0",
      "#fa9fb5",
      "#f768a1",
      "#dd3497",
      "#ae017e",
      "#7a0177",
      "#49006a"
    ],
    Greens: [
      "#f7fcf5",
      "#e5f5e0",
      "#c7e9c0",
      "#a1d99b",
      "#74c476",
      "#41ab5d",
      "#238b45",
      "#006d2c",
      "#00441b"
    ],
    YlGnBu: [
      "#ffffd9",
      "#edf8b1",
      "#c7e9b4",
      "#7fcdbb",
      "#41b6c4",
      "#1d91c0",
      "#225ea8",
      "#253494",
      "#081d58"
    ],
    Purples: [
      "#fcfbfd",
      "#efedf5",
      "#dadaeb",
      "#bcbddc",
      "#9e9ac8",
      "#807dba",
      "#6a51a3",
      "#54278f",
      "#3f007d"
    ],
    GnBu: [
      "#f7fcf0",
      "#e0f3db",
      "#ccebc5",
      "#a8ddb5",
      "#7bccc4",
      "#4eb3d3",
      "#2b8cbe",
      "#0868ac",
      "#084081"
    ],
    Greys: [
      "#ffffff",
      "#f0f0f0",
      "#d9d9d9",
      "#bdbdbd",
      "#969696",
      "#737373",
      "#525252",
      "#252525",
      "#000000"
    ],
    YlOrRd: [
      "#ffffcc",
      "#ffeda0",
      "#fed976",
      "#feb24c",
      "#fd8d3c",
      "#fc4e2a",
      "#e31a1c",
      "#bd0026",
      "#800026"
    ],
    PuRd: [
      "#f7f4f9",
      "#e7e1ef",
      "#d4b9da",
      "#c994c7",
      "#df65b0",
      "#e7298a",
      "#ce1256",
      "#980043",
      "#67001f"
    ],
    Blues: [
      "#f7fbff",
      "#deebf7",
      "#c6dbef",
      "#9ecae1",
      "#6baed6",
      "#4292c6",
      "#2171b5",
      "#08519c",
      "#08306b"
    ],
    PuBuGn: [
      "#fff7fb",
      "#ece2f0",
      "#d0d1e6",
      "#a6bddb",
      "#67a9cf",
      "#3690c0",
      "#02818a",
      "#016c59",
      "#014636"
    ],
    Viridis: [
      "#440154",
      "#482777",
      "#3f4a8a",
      "#31678e",
      "#26838f",
      "#1f9d8a",
      "#6cce5a",
      "#b6de2b",
      "#fee825"
    ]
  };
  return hasScheme(scheme, so);
}
function diverging(scheme) {
  const so = {
    Spectral: [
      "#9e0142",
      "#d53e4f",
      "#f46d43",
      "#fdae61",
      "#fee08b",
      "#ffffbf",
      "#e6f598",
      "#abdda4",
      "#66c2a5",
      "#3288bd",
      "#5e4fa2"
    ],
    RdYlGn: [
      "#a50026",
      "#d73027",
      "#f46d43",
      "#fdae61",
      "#fee08b",
      "#ffffbf",
      "#d9ef8b",
      "#a6d96a",
      "#66bd63",
      "#1a9850",
      "#006837"
    ],
    RdBu: [
      "#67001f",
      "#b2182b",
      "#d6604d",
      "#f4a582",
      "#fddbc7",
      "#f7f7f7",
      "#d1e5f0",
      "#92c5de",
      "#4393c3",
      "#2166ac",
      "#053061"
    ],
    PiYG: [
      "#8e0152",
      "#c51b7d",
      "#de77ae",
      "#f1b6da",
      "#fde0ef",
      "#f7f7f7",
      "#e6f5d0",
      "#b8e186",
      "#7fbc41",
      "#4d9221",
      "#276419"
    ],
    PRGn: [
      "#40004b",
      "#762a83",
      "#9970ab",
      "#c2a5cf",
      "#e7d4e8",
      "#f7f7f7",
      "#d9f0d3",
      "#a6dba0",
      "#5aae61",
      "#1b7837",
      "#00441b"
    ],
    RdYlBu: [
      "#a50026",
      "#d73027",
      "#f46d43",
      "#fdae61",
      "#fee090",
      "#ffffbf",
      "#e0f3f8",
      "#abd9e9",
      "#74add1",
      "#4575b4",
      "#313695"
    ],
    BrBG: [
      "#543005",
      "#8c510a",
      "#bf812d",
      "#dfc27d",
      "#f6e8c3",
      "#f5f5f5",
      "#c7eae5",
      "#80cdc1",
      "#35978f",
      "#01665e",
      "#003c30"
    ],
    RdGy: [
      "#67001f",
      "#b2182b",
      "#d6604d",
      "#f4a582",
      "#fddbc7",
      "#ffffff",
      "#e0e0e0",
      "#bababa",
      "#878787",
      "#4d4d4d",
      "#1a1a1a"
    ],
    PuOr: [
      "#7f3b08",
      "#b35806",
      "#e08214",
      "#fdb863",
      "#fee0b6",
      "#f7f7f7",
      "#d8daeb",
      "#b2abd2",
      "#8073ac",
      "#542788",
      "#2d004b"
    ]
  };
  return hasScheme(scheme, so);
}
function qualitative(scheme) {
  const so = {
    Set2: [
      "#66c2a5",
      "#fc8d62",
      "#8da0cb",
      "#e78ac3",
      "#a6d854",
      "#ffd92f",
      "#e5c494",
      "#b3b3b3"
    ],
    Accent: [
      "#7fc97f",
      "#beaed4",
      "#fdc086",
      "#ffff99",
      "#386cb0",
      "#f0027f",
      "#bf5b17",
      "#666666"
    ],
    Set1: [
      "#e41a1c",
      "#377eb8",
      "#4daf4a",
      "#984ea3",
      "#ff7f00",
      "#ffff33",
      "#a65628",
      "#f781bf",
      "#999999"
    ],
    Set3: [
      "#8dd3c7",
      "#ffffb3",
      "#bebada",
      "#fb8072",
      "#80b1d3",
      "#fdb462",
      "#b3de69",
      "#fccde5",
      "#d9d9d9",
      "#bc80bd",
      "#ccebc5",
      "#ffed6f"
    ],
    Dark2: [
      "#1b9e77",
      "#d95f02",
      "#7570b3",
      "#e7298a",
      "#66a61e",
      "#e6ab02",
      "#a6761d",
      "#666666"
    ],
    Paired: [
      "#a6cee3",
      "#1f78b4",
      "#b2df8a",
      "#33a02c",
      "#fb9a99",
      "#e31a1c",
      "#fdbf6f",
      "#ff7f00",
      "#cab2d6",
      "#6a3d9a",
      "#ffff99",
      "#b15928"
    ],
    Pastel2: [
      "#b3e2cd",
      "#fdcdac",
      "#cbd5e8",
      "#f4cae4",
      "#e6f5c9",
      "#fff2ae",
      "#f1e2cc",
      "#cccccc"
    ],
    Pastel1: [
      "#fbb4ae",
      "#b3cde3",
      "#ccebc5",
      "#decbe4",
      "#fed9a6",
      "#ffffcc",
      "#e5d8bd",
      "#fddaec",
      "#f2f2f2"
    ]
  };
  return hasScheme(scheme, so);
}
function nearest2(collection, options) {
  const { against, num: num3 } = options, f3 = (a, b) => {
    const o = nearest_default(values(a), differenceHyab(), (c2) => c2)(b, num3);
    return or(and(eq(num3, 1), o[0]), o);
  };
  return or(and(eq(collection, "tailwind"), f3(colors("all"), against)), f3(collection, against));
}
function colors(shade, value) {
  const w = tailwind;
  value = value?.toString();
  const [d, k4] = ["all", keys(w)];
  const [p, q] = [
    (h) => k4.includes(h),
    (i) => [
      "50",
      "050",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900"
    ].includes(i?.toString())
  ];
  shade = shade?.toLowerCase();
  let o;
  if (eq(shade, d))
    if (q(value))
      o = k4.map((y) => w[y][value]);
    else
      o = k4.map((y) => values(w[y])).flat(2);
  else if (p(shade))
    if (q(value))
      o = w[shade][value];
    else
      o = values(w[shade]);
  else if (or(!shade, and(!shade, !value)))
    o = k4.map((h) => w[h]);
  return o;
}
// lib/collection.ts
function stats(collection = [], options = {
  factor: undefined,
  relative: false,
  colorspace: "lch",
  against: "cyan"
}) {
  const { factor, relative, against, colorspace } = options;
  const hexColors = map(collection, token);
  const getStatsObject = (fact) => {
    const sortedTokens = (a, b) => sortedColl(a, b, "asc")(hexColors);
    return (relative === true && {
      chroma: sortedTokens(fact, chnDiff(against, mcchn("c", colorspace))),
      luminance: (() => {
        const cb1 = (a) => (b) => Math.abs(luminance2(a) - luminance2(b));
        return sortedTokens(fact, cb1(against));
      })(),
      lightness: sortedTokens(fact, chnDiff(against, mcchn("l", colorspace))),
      hue: sortedTokens(fact, chnDiff(against, `${colorspace}.h`)),
      contrast: sortedTokens(fact, ctrst(against))
    } || {
      chroma: sortedTokens(fact, mc(mcchn("c", colorspace))),
      luminance: sortedTokens(fact, luminance2),
      lightness: sortedTokens(fact, mc(mcchn("l", colorspace))),
      hue: sortedTokens(fact, mc(`${colorspace}.h`))
    })[fact];
  };
  const len = values(collection).length, factorStats = (fact) => {
    const callback = (b) => (c2) => c2(map(collection, b));
    return {
      chroma: callback(mc(mcchn("c", colorspace)))(averageNumber),
      distance: callback(dstnce(against))(averageNumber),
      hue: callback(mc(`${colorspace}.h`))(averageAngle),
      lightness: callback(mc(mcchn("l", colorspace)))(averageNumber),
      contrast: callback(ctrst(against))(averageNumber),
      luminance: callback(luminance2)(averageNumber)
    }[fact];
  };
  const commonStats = (fact) => {
    const [x, y] = [
      getStatsObject(fact)[0],
      getStatsObject(fact)[len - 1]
    ];
    return {
      against: (relative || (fact === "contrast" || "distance")) && against || null,
      colors: [x.color, y.color],
      mean: factorStats(fact),
      extremums: [x[fact], y[fact]],
      families: [family(x.color), family(y.color)]
    };
  };
  const statsObject = iterator(factor, commonStats);
  statsObject.achromatic = values(collection).filter(achromatic).length / len;
  statsObject.colorspace = colorspace;
  return statsObject;
}
function sortBy(collection = [], options) {
  let { against, colorspace, factor, order, relative } = options || {};
  factor = factor || undefined;
  against = against || "cyan";
  colorspace = colorspace || "lch";
  relative = relative || false;
  order = order || "asc";
  const [lightnessChannel, chromaChannel] = [
    "l",
    "c"
  ].map((w) => mcchn(w, colorspace, false));
  for (const c2 in entries(collection))
    collection[c2[0]] = token(c2[1], { kind: "obj", targetMode: "lch" });
  const callback = (fact) => {
    const lmnce = (b) => Math.abs(luminance2(against) - luminance2(b)), sort = (a) => sortedColl(fact, a, order);
    const u = (ch) => mc(`${colorspace}.${ch}`);
    return (relative && {
      chroma: sort(chnDiff(against, u(chromaChannel))),
      hue: sort(chnDiff(against, u("h"))),
      luminance: sort(lmnce),
      lightness: sort(chnDiff(against, u(lightnessChannel)))
    } || {
      chroma: sort(u(chromaChannel)),
      hue: sort(u("h")),
      luminance: sort(luminance2),
      distance: sort(dstnce(against)),
      contrast: sort(ctrst(against)),
      lightness: sort(u(lightnessChannel))
    })[fact](collection);
  };
  return iterator(factor, callback);
}
function filterBy(collection = [], options = {
  against: "cyan",
  colorspace: "lch",
  factor: undefined,
  ranges: undefined
}) {
  let { against, colorspace, factor, ranges } = options || {};
  against = against || "cyan";
  colorspace = colorspace || "lch";
  factor = factor || undefined;
  const filter = (cb) => (fact) => filteredColl(fact, cb)(collection, start, end), chromaChannel = mcchn("c", colorspace, false), lightnessChannel = mcchn("l", colorspace, false), def_ranges = {
    hue: [0, 359],
    contrast: [0, 21],
    chroma: [...limits[colorspace][chromaChannel]],
    lightness: [
      ...limits[colorspace][lightnessChannel]
    ],
    distance: [0, Number.POSITIVE_INFINITY],
    luminance: [0, 1]
  };
  let start, end;
  const callback = (fact) => {
    start = ranges[fact][0] || def_ranges[fact][0];
    end = ranges[fact][1] || def_ranges[fact][1];
    return {
      chroma: filter(mc(mcchn("c", colorspace, true))),
      lightness: filter(mc(mcchn("l", colorspace, true))),
      hue: filter(mc(`${colorspace}.h`)),
      distance: filter(dstnce(token(against))),
      contrast: filter(ctrst(against)),
      luminance: filter(luminance2)
    }[fact](fact);
  };
  return iterator(factor, callback);
}
// lib/generators.ts
function hueshift(baseColor, options = {}) {
  let { num: num3, hueStep, minLightness, maxLightness, easingFn, tokenOptions } = or(options, {});
  easingFn = or(easingFn, ef);
  num3 = or(num3, 6) + 1;
  hueStep = or(hueStep, 5);
  baseColor = token(baseColor, {
    kind: "obj",
    targetMode: "lch"
  });
  const z = [baseColor];
  maxLightness = lte(maxLightness, 95) ? maxLightness : 90;
  minLightness = lte(minLightness, maxLightness) ? minLightness : 5;
  const f3 = (i, e1, e22) => Math.abs((i - 0) / (e1 - 0) * (e22 - baseColor?.l) + baseColor?.l);
  for (let i = 1, j = i / num3;i < num3; i++) {
    const [y, x] = [
      {
        l: f3(i, num3, minLightness),
        c: baseColor?.c,
        h: adjustHue(baseColor.h - hueStep * easingFn(j)),
        mode: "lch"
      },
      {
        l: f3(i, num3, maxLightness),
        c: baseColor?.c,
        h: adjustHue(baseColor.h + hueStep) * easingFn(j),
        mode: "lch"
      }
    ];
    z.push(x);
    z.unshift(y);
  }
  return Array.from(new Set(z)).map((c2) => token(c2, tokenOptions));
}
function pastel(baseColor) {
  const w = [
    [0.3582677165354331, 0.996078431372549, 16538982.504333857],
    [0.4395161290322581, 0.9725490196078431, 15694401.836627495],
    [0.472, 0.9803921568627451, 15986490.838712374],
    [0.3305785123966942, 0.9490196078431372, 14834893.772825705],
    [0.2992125984251969, 0.996078431372549, 7446012.731034764],
    [0.38818565400843885, 0.9294117647058824, 8247112.202928809]
  ], [u, v] = [w.map((o) => o[0]), w.map((o) => o[1])];
  const t = {
    ms: averageNumber(u),
    ml: averageNumber(v),
    mns: min2(u),
    mxs: max(u),
    mnv: min2(v),
    mxv: max(v)
  };
  const q = random_default("hsv", {
    s: [t.mns, t.mxs],
    v: [t.mnv, t.mxv],
    h: token(baseColor, { targetMode: "hsv", kind: "obj" }).h
  });
  return q;
}
function pair(baseColor, options) {
  let { num: num3, via, hueStep, colorspace } = options;
  via = or(via, "light");
  hueStep = or(hueStep, 5);
  colorspace = or(colorspace, "lch65");
  const destinationColor = mc(`${colorspace}.h`)(baseColor, Math.abs(mc(`${colorspace}.h`)(baseColor) + (lt(hueStep, 0) ? -hueStep : hueStep)));
  const tone = {
    dark: { l: 0, c: 0, h: 0, mode: colorspace },
    light: { l: 100, c: 0, h: 0, mode: colorspace }
  }[via];
  return interpolator2([baseColor, tone, destinationColor], {
    colorspace: "lch",
    num: num3 * 2,
    tokenOptions: options?.tokenOptions
  }).slice(0, num3);
}
function interpolator2(baseColors = [], options = {}) {
  let { hueFixup, stops, easingFn, kind, closed, colorspace, num: num3 } = options || {};
  easingFn = or(easingFn, ef);
  kind = or(kind, "basis");
  num3 = or(num3, 1);
  hueFixup = hueFixup === "shorter" ? fixupHueShorter : fixupHueLonger;
  const method = {
    basis: or(and(closed, interpolatorSplineBasisClosed), interpolatorSplineBasis),
    natural: or(and(closed, interpolatorSplineNaturalClosed), interpolatorSplineNatural),
    monotone: or(and(closed, interpolatorSplineMonotoneClosed), interpolatorSplineMonotone)
  }[kind];
  const len = stops?.length;
  const data = gt(len, 0) ? values(baseColors)?.slice(0, len - 1).map((c2, i) => [c2, stops[i]]).concat(values(baseColors).slice(len)) : values(baseColors);
  const func = interpolate([...data, easingFn], colorspace, {
    h: {
      fixup: hueFixup,
      use: or(method, hi)
    },
    [mcchn("l", colorspace, false)]: {
      use: or(method, li)
    },
    [mcchn("c", colorspace, false)]: {
      use: or(method, ci)
    }
  });
  num3 = or(and(gte(num3, 1), Math.abs(num3)), 1);
  return or(and(gt(num3, 1), samples_default(num3).map((s) => token(func(s), options?.tokenOptions))), token(func(0.5), options?.tokenOptions));
}
function discover(colors2 = [], options = {
  maxDistance: 0.0014,
  minDistance: 0,
  kind: undefined
}) {
  const colorTokenValues = values(colors2), colorTokenKeys = keys(colors2);
  const { kind, maxDistance, minDistance } = options || {};
  const palettes = {}, customInRange = (c2, d) => inRange(dstnce(c2)(d), minDistance, maxDistance), availableColors = (arg, obj = {}) => obj[arg]?.filter((c2) => colorTokenValues.some((d) => not(customInRange(c2, d))));
  for (const key of colorTokenKeys)
    palettes[key] = scheme(colors2[key], { kind });
  let currentPalette = [];
  for (const key of colorTokenKeys) {
    if (eq(typeof kind, "string")) {
      palettes[key] = availableColors(key, palettes);
      if (gt(currentPalette.length, 1))
        palettes[key] = palettes[key].filter((a, b) => not(customInRange(a, currentPalette[b])));
      currentPalette = palettes[key];
    } else {
      for (const paletteType of keys(palettes[key]))
        palettes[key][paletteType] = availableColors(paletteType, palettes[key]);
    }
  }
  return palettes;
}
function earthtone(baseColor, options = {}) {
  let { num: num3, earthtones, colorspace, kind, closed } = options;
  earthtones = or(earthtones, "dark");
  const earthtoneSamples = {
    "light-gray": "#e5e5e5",
    silver: "#f5f5f5",
    sand: "#c2b2a4",
    tupe: "#a79e8a",
    mahogany: "#958c7c",
    "brick-red": "#7d7065",
    clay: "#6a5c52",
    cocoa: "#584a3e",
    "dark-brown": "#473b31",
    dark: "#352a21"
  };
  const currentEarthtone = earthtoneSamples[earthtones.toLowerCase()];
  return interpolator2([currentEarthtone, baseColor], {
    colorspace,
    num: num3,
    closed,
    kind,
    tokenOptions: options?.tokenOptions
  });
}
function scheme(baseColor, options = {
  colorspace: "lch",
  kind: ["analogous"],
  easingFn: ef
}) {
  const { colorspace, kind, easingFn } = options || {};
  baseColor = token(baseColor, { targetMode: colorspace, kind: "obj" });
  const [lowMin, lowMax, highMin, highMax] = [0.05, 0.495, 0.5, 0.995], generateSteps = (stops, step) => {
    const res = [];
    for (let [k4, v] of entries(samples_default(stops))) {
      v = adjustHue((baseColor.h + step) * (v * or(easingFn, easingSmoothstep)(v)));
      res[k4] = rand2(v * lowMax, v * lowMin) + rand2(v * highMax, v * highMin) / 2;
    }
    return res;
  }, PALETTE_TYPES = {
    analogous: generateSteps(3, 12),
    triadic: generateSteps(3, 120),
    tetradic: generateSteps(4, 90),
    complimentary: generateSteps(2, 180)
  }, callback = (kind2) => {
    const [lightnessChan, chromaChan] = ["l", "c"].map((a) => mcchn(a, colorspace, false)), palettes = [];
    for (const [idx, step] of entries(PALETTE_TYPES[kind2])) {
      palettes[idx] = token({
        [lightnessChan]: baseColor[lightnessChan],
        [chromaChan]: baseColor[chromaChan],
        h: adjustHue(baseColor.h + step),
        mode: colorspace
      }, options?.token);
    }
    palettes.shift();
    return palettes;
  };
  return iterator(kind, callback, keys(PALETTE_TYPES));
}
// lib/wrappers.ts
class ColorArray {
  colors;
  implicitReturn;
  constructor(colors2, implicitReturn) {
    this.colors = colors2;
    this.implicitReturn = or(implicitReturn, false);
    return;
  }
  #setThis(callback, options) {
    this.colors = callback(this.colors, options);
    return this.implicitReturn ? this.output() : this;
  }
  nearest(options) {
    return this.#setThis(nearest2, options);
  }
  interpolator(options) {
    return this.#setThis(interpolator2, options);
  }
  discover(options) {
    return this.#setThis(discover, options);
  }
  filterBy(options) {
    return this.#setThis(filterBy, options);
  }
  sortBy(options) {
    return this.#setThis(sortBy, options);
  }
  stats(options) {
    return this.#setThis(stats, options);
  }
  output() {
    return this.colors;
  }
}

class Color {
  constructor(c2 = "cyan", options) {
    const {
      alpha: alpha2,
      colorspace,
      luminance: luminance3,
      saturation,
      lightMode,
      darkMode,
      lightness: lightness2,
      implicitReturn
    } = or(options, {});
    this.alpha = or(alpha2, alpha(c2));
    this._color = c2;
    this._luminance = or(luminance3, luminance2(c2));
    this._lightness = or(lightness2, mc("lch.l")(c2));
    this.colorspace = or(colorspace, "lch");
    this._saturation = or(saturation, mc(mcchn("c", this.colorspace))(c2));
    this.lightMode = or(lightMode, colors("gray", "100"));
    this.darkMode = or(darkMode, colors("gray", "800"));
    this.implicitReturn = or(implicitReturn, false);
  }
  #setThis(callback, options) {
    this.color = options ? callback(this._color, options) : callback(this._color);
    return this.implicitReturn ? this.output() : this;
  }
  alpha(amount) {
    return this.#setThis(alpha, amount);
  }
  mc(modeChannel, value) {
    const cb = (p) => mc(modeChannel)(p, value);
    return this.#setThis(cb);
  }
  via(origin) {
    const cb = (a) => interpolator2([origin, a], {
      num: 1,
      colorspace: this.colorspace
    });
    return this.#setThis(cb);
  }
  lightness(amount, darken = undefined) {
    const params = [amount, darken];
    return this.#setThis(lightness, ...params);
  }
  token(options) {
    return this.#setThis(token, options);
  }
  pastel() {
    return this.#setThis(pastel);
  }
  pair(options) {
    return this.#setThis(pair, options);
  }
  hueshift(options) {
    return this.#setThis(hueshift, options);
  }
  family() {
    return this.#setThis(family);
  }
  earthtone(options) {
    return this.#setThis(earthtone, options);
  }
  contrast(against) {
    return this.#setThis(contrast2, /light|dark/gi.test(against) ? {
      light: this?.background?.lightMode,
      dark: this?.background?.darkMode
    }[against?.toLowerCase()] : against);
  }
  luminance(amount) {
    return this.#setThis(luminance2, amount);
  }
  saturation(amount) {
    const c2 = mcchn("c", this.colorspace), cb = (a) => mc(c2)(a, amount);
    return this.#setThis(cb, amount);
  }
  achromatic() {
    return this.#setThis(achromatic);
  }
  temp() {
    return this.#setThis(temp);
  }
  deficiency(options) {
    return this.#setThis(deficiency2, options);
  }
  scheme(options) {
    return this.#setThis(scheme, options);
  }
  output() {
    return this._color;
  }
}
export {
  token,
  temp,
  stats,
  sortBy,
  sequential,
  scheme,
  qualitative,
  pastel,
  pair,
  nearest2 as nearest,
  mc,
  luminance2 as luminance,
  limits,
  lightness,
  interpolator2 as interpolator,
  hueshift,
  hue3 as hue,
  filterBy,
  family,
  earthtone,
  diverging,
  discover,
  deficiency2 as deficiency,
  contrast2 as contrast,
  colors,
  alpha,
  achromatic,
  ColorArray,
  Color
};

import tailwindHues from './color-maps/swatches/tailwind.js';

import * as filterBy from './filterBy.js';
import * as sortBy from './sortBy.js';
import {
  discoverPalettes as _dp,
  getFarthestHue as _mxh,
  getNearestHue as _mnh,
  getNearestLightness as _mxl,
  getFarthestLightness as _mnl,
  alpha as _opac,
  isAchromatic as _ia,
  isCool as _icl,
  isWarm as _iwm,
  getFarthestChroma as _gfc,
  getFarthestHue as _gfh,
  getFarthestLightness as _gfl,
  getNearestHue as _gnh,
  getNearestChroma as _gnc,
  getNearestLightness as _gnl,
  overtone as _ot,
  color2hex as _hex,
  getChannel as _gchn,
  getContrast as _gctrst,
  getLuminance as _glmnce,
  setChannel as _schn,
  setLuminance as _slm,
  or,
  mcchn,
  scheme as _schm,
  pastel as _pstl,
  hueShift as _hshft,
  getHueFamily as _ghf,
  pairedScheme as _ps,
  earthtone as _rthtn,
  getComplimentaryHue as _gch,
  colorDeficiency as _cds,
  interpolator as _pltr,
  interpolateSpline as _pltrspln,
  getFarthestChromaFrom as _gfcf,
  getNearestChromaFrom as _gncf,
  getFarthestHueFrom as _gfhf,
  getNearestHueFrom as _gnhf,
  getFarthestLuminanceFrom as _gflmncef,
  getNearestLuminanceFrom as _gnlmncef,
  getNearestLightnessFrom as _gnlf,
  getFarthestLightnessFrom as _gflf,
  getMeanLuminance as _gmlmnce,
  getMeanHue as _gmh,
  getMeanContrast as _gmctrst,
  getMeanDistance as _gmd,
  getMeanChroma as _gmc,
  getMeanLightness as _gml,
  getFarthestContrast as _gfctrst,
  getNearestContrast as _gnctrst
} from './index.js';

import { nearest, differenceHyab } from 'culori/fn';

class ColorArray {
  constructor(colors) {
    this['colors'] = colors;
    return this;
  }

  getFarthestChromaFrom(against, colorspace, colorObj) {
    return _gfcf(this['colors'], against, colorspace, colorObj);
  }
  getNearestChromaFrom(against, colorspace, colorObj) {
    return _gncf(this['colors'], against, colorspace, colorObj);
  }
  getFarthestLightnessFrom(against, colorspace, colorObj) {
    return _gflf(this['colors'], against, colorspace, colorObj);
  }
  getNearestLightnessFrom(against, colorspace, colorObj) {
    return _gnlf(this['colors'], against, colorspace, colorObj);
  }
  getNearestHueFrom(against, colorspace, colorObj) {
    return _gnhf(this['colors'], against, colorspace, colorObj);
  }
  getFarthestHueFrom(against, colorspace, colorObj) {
    return _gfhf(this['colors'], against, colorspace, colorObj);
  }
  getNearestLuminanceFrom(against, colorObj) {
    return _gnlmncef(this['colors'], against, colorObj);
  }
  getFarthestLuminanceFrom(against, colorObj) {
    return _gflmncef(this['colors'], against, colorObj);
  }
  getMeanChroma(colorspace) {
    return _gmc(this['colors'], colorspace);
  }
  getMeanContrast(against) {
    return _gmctrst(this['colors'], against);
  }
  getMeanLightness() {
    return _gml(this['colors']);
  }
  getMeanHue(colorspace) {
    return _gmh(this['colors'], colorspace);
  }
  getMeanLuminance() {}
  getMeanDistance(against) {
    return _gmd(this['colors'], against);
  }

  interpolateSpline(colorspace, samples, kind, closed, options) {
    this['colors'] = _pltrspln(
      this['colors'],
      colorspace,
      samples,
      kind,
      closed,
      options
    );

    return this;
  }

  discoverPalettes(schemeType) {
    this['colors'] = _dp(this['colors'], schemeType);
    return this;
  }

  getFarthestHue(colorSpace, colorObj = false) {
    return _mxh(this['colors'], colorSpace, colorObj);
  }

  getNearestHue(colorSpace, colorObj = false) {
    return _mnh(this['colors'], colorSpace, colorObj);
  }

  getNearestLightness(colorspace, colorObj = false) {
    return _mnl(this['colors'], colorspace, colorObj);
  }

  getFarthestLightness(colorspace, colorObj = false) {
    return _mxl(this['colors'], colorspace, colorObj);
  }

  filterBySaturation(startSaturation, endSaturation, colorspace) {
    this['colors'] = filterBy.filterBySaturation(
      this['colors'],
      startSaturation,
      endSaturation,
      colorspace
    );
    return this;
  }

  filterByLightness(startLightness, endLightness) {
    this['colors'] = filterBy.filterByLightness(
      this['colors'],
      startLightness,
      endLightness
    );
    return this;
  }
  filterByDistance(against, startDistance = 0.05, endDistance) {
    this['colors'] = filterBy.filterByDistance(
      this['colors'],
      against,
      startDistance,
      endDistance
    );
    return this;
  }

  filterByContrast(against, startContrast, endContrast) {
    this['colors'] = filterBy.filterByContrast(
      this['colors'],
      against,
      startContrast,
      endContrast
    );

    return this;
  }
  filterByHue(startHue = 0, endHue = 360) {
    this['colors'] = filterBy.filterByHue(this['colors'], startHue, endHue);
    return this;
  }

  filterByLuminance(startLuminance = 0.05, endLuminance = 1) {
    this['colors'] = filterBy.filterByLuminance(
      this['colors'],
      startLuminance,
      endLuminance
    );
    return this;
  }

  sortByLightness(order) {
    this['colors'] = sortBy.sortByLightness(this['colors'], order);
    return this;
  }

  sortByDistance(against, order) {
    this['colors'] = sortBy.sortByDistance(this['colors'], against, order);

    return this;
  }

  sortByLuminance(order) {
    this['colors'] = sortBy.sortByLuminance(this['colors'], order);
    return this;
  }
  sortBySaturation(order, mode) {
    this['colors'] = sortBy.sortBySaturation(this['colors'], order, mode);
    return this;
  }

  sortByContrast(against, order) {
    this['colors'] = sortBy.sortByContrast(this['colors'], against, order);
    return this;
  }
  sortByHue(order, colorspace) {
    this['colors'] = sortBy.sortByHue(this['colors'], order, colorspace);
    return this;
  }

  output() {
    return this['colors'];
  }
}

function load(colors) {
  return new ColorArray(colors);
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

//Check if the scheme object has the passed in scheme
function hasScheme(scheme, schemesObject) {
  const cb = (str) => str.toLowerCase();
  const { keys } = Object;
  // Map all schemes keys to lower case
  const schemeOptions = keys(schemesObject).map(cb);

  scheme = cb(scheme);
  // Check if passed in scheme is available
  if (schemeOptions.indexOf(scheme) > -1) {
    return schemesObject[scheme];
  } else {
    // Else throw error:Invalid scheme
    throw Error(`${scheme} is an invalid scheme option.`);
  }
}

function sequential(scheme) {
  const schemes = {
    OrRd: [
      '#fff7ec',
      '#fee8c8',
      '#fdd49e',
      '#fdbb84',
      '#fc8d59',
      '#ef6548',
      '#d7301f',
      '#b30000',
      '#7f0000'
    ],
    PuBu: [
      '#fff7fb',
      '#ece7f2',
      '#d0d1e6',
      '#a6bddb',
      '#74a9cf',
      '#3690c0',
      '#0570b0',
      '#045a8d',
      '#023858'
    ],
    BuPu: [
      '#f7fcfd',
      '#e0ecf4',
      '#bfd3e6',
      '#9ebcda',
      '#8c96c6',
      '#8c6bb1',
      '#88419d',
      '#810f7c',
      '#4d004b'
    ],
    Oranges: [
      '#fff5eb',
      '#fee6ce',
      '#fdd0a2',
      '#fdae6b',
      '#fd8d3c',
      '#f16913',
      '#d94801',
      '#a63603',
      '#7f2704'
    ],
    BuGn: [
      '#f7fcfd',
      '#e5f5f9',
      '#ccece6',
      '#99d8c9',
      '#66c2a4',
      '#41ae76',
      '#238b45',
      '#006d2c',
      '#00441b'
    ],
    YlOrBr: [
      '#ffffe5',
      '#fff7bc',
      '#fee391',
      '#fec44f',
      '#fe9929',
      '#ec7014',
      '#cc4c02',
      '#993404',
      '#662506'
    ],
    YlGn: [
      '#ffffe5',
      '#f7fcb9',
      '#d9f0a3',
      '#addd8e',
      '#78c679',
      '#41ab5d',
      '#238443',
      '#006837',
      '#004529'
    ],
    Reds: [
      '#fff5f0',
      '#fee0d2',
      '#fcbba1',
      '#fc9272',
      '#fb6a4a',
      '#ef3b2c',
      '#cb181d',
      '#a50f15',
      '#67000d'
    ],
    RdPu: [
      '#fff7f3',
      '#fde0dd',
      '#fcc5c0',
      '#fa9fb5',
      '#f768a1',
      '#dd3497',
      '#ae017e',
      '#7a0177',
      '#49006a'
    ],
    Greens: [
      '#f7fcf5',
      '#e5f5e0',
      '#c7e9c0',
      '#a1d99b',
      '#74c476',
      '#41ab5d',
      '#238b45',
      '#006d2c',
      '#00441b'
    ],
    YlGnBu: [
      '#ffffd9',
      '#edf8b1',
      '#c7e9b4',
      '#7fcdbb',
      '#41b6c4',
      '#1d91c0',
      '#225ea8',
      '#253494',
      '#081d58'
    ],
    Purples: [
      '#fcfbfd',
      '#efedf5',
      '#dadaeb',
      '#bcbddc',
      '#9e9ac8',
      '#807dba',
      '#6a51a3',
      '#54278f',
      '#3f007d'
    ],
    GnBu: [
      '#f7fcf0',
      '#e0f3db',
      '#ccebc5',
      '#a8ddb5',
      '#7bccc4',
      '#4eb3d3',
      '#2b8cbe',
      '#0868ac',
      '#084081'
    ],
    Greys: [
      '#ffffff',
      '#f0f0f0',
      '#d9d9d9',
      '#bdbdbd',
      '#969696',
      '#737373',
      '#525252',
      '#252525',
      '#000000'
    ],
    YlOrRd: [
      '#ffffcc',
      '#ffeda0',
      '#fed976',
      '#feb24c',
      '#fd8d3c',
      '#fc4e2a',
      '#e31a1c',
      '#bd0026',
      '#800026'
    ],
    PuRd: [
      '#f7f4f9',
      '#e7e1ef',
      '#d4b9da',
      '#c994c7',
      '#df65b0',
      '#e7298a',
      '#ce1256',
      '#980043',
      '#67001f'
    ],
    Blues: [
      '#f7fbff',
      '#deebf7',
      '#c6dbef',
      '#9ecae1',
      '#6baed6',
      '#4292c6',
      '#2171b5',
      '#08519c',
      '#08306b'
    ],
    PuBuGn: [
      '#fff7fb',
      '#ece2f0',
      '#d0d1e6',
      '#a6bddb',
      '#67a9cf',
      '#3690c0',
      '#02818a',
      '#016c59',
      '#014636'
    ],
    Viridis: [
      '#440154',
      '#482777',
      '#3f4a8a',
      '#31678e',
      '#26838f',
      '#1f9d8a',
      '#6cce5a',
      '#b6de2b',
      '#fee825'
    ]
  };

  return hasScheme(scheme, schemes);
}

function diverging(scheme) {
  const schemes = {
    Spectral: [
      '#9e0142',
      '#d53e4f',
      '#f46d43',
      '#fdae61',
      '#fee08b',
      '#ffffbf',
      '#e6f598',
      '#abdda4',
      '#66c2a5',
      '#3288bd',
      '#5e4fa2'
    ],
    RdYlGn: [
      '#a50026',
      '#d73027',
      '#f46d43',
      '#fdae61',
      '#fee08b',
      '#ffffbf',
      '#d9ef8b',
      '#a6d96a',
      '#66bd63',
      '#1a9850',
      '#006837'
    ],
    RdBu: [
      '#67001f',
      '#b2182b',
      '#d6604d',
      '#f4a582',
      '#fddbc7',
      '#f7f7f7',
      '#d1e5f0',
      '#92c5de',
      '#4393c3',
      '#2166ac',
      '#053061'
    ],
    PiYG: [
      '#8e0152',
      '#c51b7d',
      '#de77ae',
      '#f1b6da',
      '#fde0ef',
      '#f7f7f7',
      '#e6f5d0',
      '#b8e186',
      '#7fbc41',
      '#4d9221',
      '#276419'
    ],
    PRGn: [
      '#40004b',
      '#762a83',
      '#9970ab',
      '#c2a5cf',
      '#e7d4e8',
      '#f7f7f7',
      '#d9f0d3',
      '#a6dba0',
      '#5aae61',
      '#1b7837',
      '#00441b'
    ],
    RdYlBu: [
      '#a50026',
      '#d73027',
      '#f46d43',
      '#fdae61',
      '#fee090',
      '#ffffbf',
      '#e0f3f8',
      '#abd9e9',
      '#74add1',
      '#4575b4',
      '#313695'
    ],
    BrBG: [
      '#543005',
      '#8c510a',
      '#bf812d',
      '#dfc27d',
      '#f6e8c3',
      '#f5f5f5',
      '#c7eae5',
      '#80cdc1',
      '#35978f',
      '#01665e',
      '#003c30'
    ],
    RdGy: [
      '#67001f',
      '#b2182b',
      '#d6604d',
      '#f4a582',
      '#fddbc7',
      '#ffffff',
      '#e0e0e0',
      '#bababa',
      '#878787',
      '#4d4d4d',
      '#1a1a1a'
    ],
    PuOr: [
      '#7f3b08',
      '#b35806',
      '#e08214',
      '#fdb863',
      '#fee0b6',
      '#f7f7f7',
      '#d8daeb',
      '#b2abd2',
      '#8073ac',
      '#542788',
      '#2d004b'
    ]
  };

  return hasScheme(scheme, schemes);
}

function qualitative(scheme) {
  const schemes = {
    Set2: [
      '#66c2a5',
      '#fc8d62',
      '#8da0cb',
      '#e78ac3',
      '#a6d854',
      '#ffd92f',
      '#e5c494',
      '#b3b3b3'
    ],
    Accent: [
      '#7fc97f',
      '#beaed4',
      '#fdc086',
      '#ffff99',
      '#386cb0',
      '#f0027f',
      '#bf5b17',
      '#666666'
    ],
    Set1: [
      '#e41a1c',
      '#377eb8',
      '#4daf4a',
      '#984ea3',
      '#ff7f00',
      '#ffff33',
      '#a65628',
      '#f781bf',
      '#999999'
    ],
    Set3: [
      '#8dd3c7',
      '#ffffb3',
      '#bebada',
      '#fb8072',
      '#80b1d3',
      '#fdb462',
      '#b3de69',
      '#fccde5',
      '#d9d9d9',
      '#bc80bd',
      '#ccebc5',
      '#ffed6f'
    ],
    Dark2: [
      '#1b9e77',
      '#d95f02',
      '#7570b3',
      '#e7298a',
      '#66a61e',
      '#e6ab02',
      '#a6761d',
      '#666666'
    ],
    Paired: [
      '#a6cee3',
      '#1f78b4',
      '#b2df8a',
      '#33a02c',
      '#fb9a99',
      '#e31a1c',
      '#fdbf6f',
      '#ff7f00',
      '#cab2d6',
      '#6a3d9a',
      '#ffff99',
      '#b15928'
    ],
    Pastel2: [
      '#b3e2cd',
      '#fdcdac',
      '#cbd5e8',
      '#f4cae4',
      '#e6f5c9',
      '#fff2ae',
      '#f1e2cc',
      '#cccccc'
    ],
    Pastel1: [
      '#fbb4ae',
      '#b3cde3',
      '#ccebc5',
      '#decbe4',
      '#fed9a6',
      '#ffffcc',
      '#e5d8bd',
      '#fddaec',
      '#f2f2f2'
    ]
  };
  return hasScheme(scheme, schemes);
}

function tailwindColors(shade, value) {
  var [defaultHue, hueKeys] = ['all', Object.keys(tailwindHues)];

  var [hasHue, hasVal] = [
    (h) => hueKeys.includes(h),
    (val) =>
      [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900'
      ].includes(val.toString())
  ];

  shade = shade.toLowerCase();

  if (shade === defaultHue) {
    if (hasVal(value)) {
      return hueKeys.map((hue) => tailwindHues[hue][value]);
    } else {
      return hueKeys.map((key) => Object.values(tailwindHues[key])).flat(2);
    }
  } else if (hasHue(shade)) {
    if (hasVal(value)) {
      return tailwindHues[shade][value];
    } else {
      return Object.values(tailwindHues[shade]);
    }
  } else if (!shade || (!shade && !value)) {
    return hueKeys.map((h) => tailwindHues[H]);
  }
}

class Color {
  constructor(c = '#000', options = {}) {
    let {
      alpha,
      colorspace,
      luminance,
      saturation,
      lightMode,
      darkMode,
      lightness
    } = options;

    // Set the alpha of the color if its not explicitly passed in.

    this['alpha'] = or(alpha, _opac(c));

    // if the color is undefined we cast pure black

    this['_color'] = c;

    // set the color's luminance if its not explicitly passed in
    this['_luminance'] = or(luminance, _glmnce(c));

    // set the color's lightness if its not explicitly passed in the default lightness is in Lch but will be refactored soon
    this['lightness'] = or(lightness, _gchn('lch.l')(c));

    // set the default color space as jch if a color space is not specified. TODO: get the mode from object and array
    this['colorspace'] = or(colorspace, 'lch');

    // set the default saturation to that of the passed in color if the value is not explicitly set
    this['_saturation'] = or(
      saturation,
      _gchn(`${this['colorspace']}.${mcchn(this['colorspace'])}`)(c)
    );

    // light mode default is gray-100
    this['lightMode'] = or(lightMode, tailwindColors('gray', '100'));

    // dark mode default is gray-800
    this['darkMode'] = or(darkMode, tailwindColors('gray', '800'));
  }

  alpha(amount) {
    if (amount) {
      this['_color'] = _opac(this['_color'], amount);
      return this;
    } else {
      return _opac(this['_color']);
    }
  }
  getChannel(channel) {
    return _gchn(`${this['colorspace']}.${channel.toLowerCase()}`)(
      this['_color']
    );
  }
  setChannel(modeChannel, value) {
    this['_color'] = _schn(modeChannel)(this['_color'], value);
    return this;
  }

  via(origin, t, options) {
    const result = _pltr([origin, this['_color']], this['colorspace'], options);

    return _hex(result(t));
  }

  // brighten(amount, colorspace) {
  //   this['_color'] = _Brighten(this['_color'], amount, colorspace);
  //   return this;
  // }
  // darken(amount) {
  //   this['_color'] = _Darken(this['_color'], amount);
  //   return this;
  // }

  color2hex() {
    this['_color'] = _hex(this['_color']);
    return this['_color'];
  }

  pastel() {
    this['_color'] = _pstl(this['_color']);
    return this;
  }

  pairedScheme(options) {
    this['colors'] = _ps(this['_color'], options);

    return new ColorArray(this['colors']);
  }

  hueShift(options) {
    this['colors'] = _hshft(this['_color'], options);

    return new ColorArray(this['colors']);
  }

  getComplimentaryHue(mode, colorObj) {
    this['_color'] = _gch(this['_color'], mode, colorObj);
    return this['_color'];
  }

  earthtone(options) {
    this['colors'] = _rthtn(
      this['_color'],
      this['colorspace'],
      or(options, {})
    );

    return new ColorArray(this['colors']);
  }
  contrast(against) {
    let result;
    switch (against) {
      case 'lightMode':
        result = _gctrst(this['_color'], this['background']['lightMode']);

        break;
      case 'darkMode':
        result = _gctrst(this['_color'], this['background']['darkMode']);
        break;
      default:
        result = _gctrst(this['_color'], against);
        break;
    }
    return result;
  }
  luminance(amount) {
    if (amount) {
      this['_color'] = _slm(this['_color'], this['_color']);
      this['_luminance'] = _glmnce(this['_color']);
      return this;
    }
    return _glmnce(this['_color']);
  }

  output() {
    return this['_color'];
  }

  saturation(amount) {
    if (amount) {
      this['_color'] = _schn(
        `${this['colorspace']}.${mcchn(this['colorspace'])}`
      )(this['_color'], amount);

      return this;
    } else {
      this['_saturation'] = _gchn(
        `${this['colorspace']}.${mcchn(this['colorspace'])}`
      )(this['_color']);
      return this['_saturation'];
    }
  }
  isAchromatic() {
    return _ia(this['_color']);
  }
  isWarm() {
    return _iwm(this['_color']);
  }
  isCool() {
    return _icl(this['_color']);
  }

  deficiency(deficiencyType, severity = 1) {
    this['_color'] = _cds(deficiencyType)(this['_color'], severity);
    return this;
  }

  getFarthestHue(colors, colorObj) {
    return _gfh(colors, this['colorspace'], colorObj);
  }
  getNearestHue(colors, colorObj) {
    return _gnh(colors, this['colorspace'], colorObj);
  }
  getNearestChroma(colors, colorObj) {
    return _gnc(colors, this['colorspace'], colorObj);
  }
  getNearestLightness(colors, colorObj) {
    return _gnl(colors, this['colorspace'], colorObj);
  }
  getFarthestChroma(colors, colorObj) {
    return _gfc(colors, this['colorspace'], colorObj);
  }
  getFarthestLightness(colors, colorObj) {
    return _gfl(colors, this['colorspace'], colorObj);
  }
  ovetone() {
    return _ot(this['_color']);
  }
  getHueFamily() {
    return _ghf(this['_color']);
  }
  scheme(scheme, easingFunc) {
    return load(_schm(scheme)(this['_color'], easingFunc));
  }
}

function color(color) {
  return new Color(color);
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

export {
  getNearestColor,
  diverging,
  qualitative,
  sequential,
  tailwindColors,
  load,
  color
};

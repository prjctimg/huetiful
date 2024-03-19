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
  getMeanHue as _gmh,
  getMeanContrast as _gmctrst,
  getMeanDistance as _gmd,
  getMeanChroma as _gmc,
  getMeanLightness as _gml
} from './index.js';
import { tailwindColors } from './colors.js';

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

export { load, color, Color, ColorArray };

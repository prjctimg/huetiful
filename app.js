import { fixupHueLonger, fixupHueShorter } from 'culori';
import { colorObjColl, max, min, or, setChannel, getChannel } from './src';

function baseDistribute(c = [], t = 0.5, options = {}) {
  // Destructure the opts to check before distributing the factor

  var { extremum, excludeSelf, excludeAchromatic, hueFixup, colorspace } =
    options;

  // v is expected to be a color object so that we can access the color's hue property during the mapping
  var mx_cb = (v) =>
      setChannel(`${colorspace}.h`)(v, v['h'] + v['h'] * (mn / mx)),
    mn_cb = (v) =>
      setChannel(`${colorspace}.h`)(v, v['h'] + v['h'] * ((mn / v['h']) * 1));

  c = colorObjColl('hue', getChannel(`${colorspace}.h`))(c);
  var [mn, mx] = [min(c.map((v) => v['hue'])), max(c.map((v) => c['hue']))];

  let eps = (mn / mx) * 1;
  let eps_alt = mx * t;

  // Set the extremum to distribute to default to max if its not min
  extremum = extremum === 'min' ? min : max;

  // Exclude the colorToken with the specified factor extremum being distributed
  excludeSelf = or(excludeSelf, false);

  // Exclude achromatic colors from the manipulations. The colors are returned in the resultant collection
  excludeAchromatic = or(excludeAchromatic, false);

  // The fixup to use when tweaking the hue channels
  hueFixup = hueFixup === 'longer' ? fixupHueLonger : fixupHueShorter;
  colorspace = or(colorspace, 'lch');

  if (extremum === max) {
    return c.map(mx_cb);
  } else {
    return c.map(mn_cb);
  }
}

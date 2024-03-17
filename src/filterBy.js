import { differenceHyab } from 'culori/fn';
import { color2hex } from './converters.js';
import { getLuminance, getContrast, getChannel } from './utils.js';
import { mcchn, mlchn, filteredColl, norm, reOp, reNum } from './helpers.js';
import modeRanges from './color-maps/samples/modeRanges.js';

function baseFilterBy(
  factor,
  cb,
  collection,
  start = 0,
  end = 1,
  colorspace = 'lch'
) {
  const normFacts = {
    saturation: mcchn,
    lightness: mlchn
  };

  colorspace = colorspace.toLowerCase();

  var [sym1, startVal, endVal, sym2] = [
    reOp(start),
    reNum(start),
    reNum(end),
    reOp(end)
  ];

  // if (normFacts[factor]) {
  //   startVal = norm(startVal, normFacts[factor](colorspace));
  //   end = norm(endVal, normFacts[factor](colorspace));
  // }

  if (typeof start === 'string' && sym1) {
    startVal = sym1.concat(startVal.toString());
  }

  if (typeof end === 'string' && sym2) {
    endVal = sym2.concat(endVal.toString());
  }

  return filteredColl(factor, cb)(collection, startVal, endVal);
}

function filterByChroma(
  collection,
  start = 0.05,
  end = 100,
  colorspace = 'lch'
) {
  const modeChannel = mcchn(colorspace);

  const factor = 'saturation';
  // eslint-disable-next-line no-ternary
  end = !end ? modeRanges[colorspace][modeChannel.split('.')[1]][1] : end;

  return baseFilterBy(
    factor,
    getChannel(modeChannel),
    collection,
    start,
    end,
    colorspace
  );
}

function filterByLuminance(collection, start = 0.05, end = 1) {
  return baseFilterBy('luminance', getLuminance, collection, start, end);
}

function filterByLightness(collection, start = 0.05, end, colorspace = 'lch') {
  const fct = 'lightness';

  const modeChannel = mcchn(colorspace);

  // eslint-disable-next-line no-ternary
  end = !end ? modeRanges[colorspace][modeChannel.split('.')[1]][1] : end;

  return baseFilterBy(
    fct,
    getChannel(mlchn(colorspace)),
    collection,
    start,
    end,
    colorspace
  );
}
function filterByHue(collection, start = 0, end = 360, colorspace = 'lch') {
  return baseFilterBy(
    'hue',
    getChannel(`${colorspace}.h`),
    collection,
    start,
    end
  );
}

function filterByDistance(collection, against, start = 0.05, end = Infinity) {
  const cb = (against) => (color) => differenceHyab()(against, color);

  return baseFilterBy(
    'distance',
    cb(color2hex(against)),
    collection,
    start,
    end
  );
}

function filterByContrast(
  collection = [],
  against = '#fff',
  start = 1,
  end = 21
) {
  const cb = (against) => (color) => getContrast(color, against);
  return baseFilterBy('contrast', cb(against), collection, start, end);
}

export {
  filterByContrast,
  filterByDistance,
  filterByLuminance,
  filterByChroma,
  filterByHue,
  filterByLightness,
  baseFilterBy
};

import { differenceHyab } from 'culori/fn';
import { color2hex } from './converters';
import { getLuminance, getContrast, getChannel } from './utils';
import { mcchn, mlchn, filteredArr, norm, reOp, reNum, or } from './helpers';
import modeRanges from './color-maps/samples/modeRanges';

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

  var [sym, startVal] = [reOp(start), reNum(start)];

  if (normFacts[factor]) {
    startVal = norm(startVal, normFacts[factor](colorspace));
    end = norm(end, normFacts[factor](colorspace));
  }

  if (typeof start === 'string' && sym) {
    startVal = sym.concat(startVal.toString());
  }

  return filteredArr(factor, cb)(collection, startVal, end);
}

function filterBySaturation(
  collection,
  startSaturation = 0.05,
  endSaturation,
  colorspace = 'lch'
) {
  const modeChannel = mcchn(colorspace);

  const factor = 'saturation';
  // eslint-disable-next-line no-ternary
  endSaturation = !endSaturation
    ? modeRanges[colorspace][modeChannel.split('.')[1]][1]
    : endSaturation;

  return baseFilterBy(
    factor,
    getChannel(modeChannel),
    collection,
    startSaturation,
    endSaturation,
    colorspace
  );
}

function filterByLuminance(
  collection,
  startLuminance = 0.05,
  endLuminance = 1
) {
  return baseFilterBy(
    'luminance',
    getLuminance,
    collection,
    startLuminance,
    endLuminance
  );
}

function filterByLightness(
  collection,
  startLightness = 0.05,
  endLightness,
  colorspace = 'lch'
) {
  const fct = 'lightness';

  const modeChannel = mcchn(colorspace);

  // eslint-disable-next-line no-ternary
  endLightness = !endLightness
    ? modeRanges[colorspace][modeChannel.split('.')[1]][1]
    : endLightness;

  return baseFilterBy(
    fct,
    getChannel(mlchn(colorspace)),
    collection,
    startLightness,
    endLightness,
    colorspace
  );
}
function filterByHue(collection, startHue = 0, endHue = 360, colorspace) {
  return baseFilterBy(
    'hue',
    getChannel(`${colorspace}.h`),
    collection,
    startHue,
    endHue
  );
}

function filterByDistance(
  collection,
  against,
  startDistance = 0.05,
  endDistance
) {
  const cb = (against) => (color) => differenceHyab()(against, color);

  return baseFilterBy(
    'distance',
    cb(color2hex(against)),
    collection,
    startDistance,
    endDistance
  );
}

function filterByContrast(
  collection,
  against,
  startContrast = 1,
  endContrast = 21
) {
  const cb = (against) => (color) => getContrast(color, against);
  return baseFilterBy(
    'contrast',
    cb(against),
    collection,
    startContrast,
    endContrast
  );
}

export {
  filterByContrast,
  filterByDistance,
  filterByLuminance,
  filterBySaturation,
  filterByHue,
  filterByLightness,
  baseFilterBy
};

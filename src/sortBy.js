import { or, sortedColl, mlchn, mcchn } from './helpers.js';
import { wcagContrast, differenceHyab } from 'culori/fn';
import { getLuminance, getChannel } from './utils.js';

function baseSortBy(factor, cb, order, collection) {
  return sortedColl(factor, cb, order)(collection);
}

function sortBySaturation(collection, order, colorspace = 'lch') {
  return baseSortBy(
    'saturation',
    getChannel(mcchn(colorspace)),
    order,
    collection
  );
}

function sortByLuminance(collection, order) {
  return baseSortBy('luminance', getLuminance, order, collection);
}

function sortByLightness(collection, order, colorspace = 'lch') {
  return baseSortBy(
    'lightness',
    getChannel(mlchn(colorspace)),
    order,
    collection
  );
}
function sortByHue(collection, order, colorspace = 'lch') {
  return baseSortBy('hue', getChannel(`${colorspace}.h`), order, collection);
}

function sortByContrast(collection, against, order) {
  var cb = (against) => (color) => wcagContrast(color, against);
  return baseSortBy('contrast', cb(against), order, collection);
}

function sortByDistance(collection, against, order) {
  var cb = (against) => (color) => {
    return differenceHyab()(against, color);
  };

  return baseSortBy('distance', cb(against), order, collection);
}

export {
  sortByContrast,
  sortByDistance,
  sortByLightness,
  sortBySaturation,
  sortByHue,
  sortByLuminance
};

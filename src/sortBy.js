import { or, sortedArr, mlchn, mcchn } from './helpers';
import { wcagContrast, differenceHyab } from 'culori/fn';
import { getLuminance, getChannel } from './utils';

function baseSortBy(factor = 'factor', cb, order = 'lch', collection = []) {
  return sortedArr(factor, cb, order)(collection);
}

function sortBySaturation(collection, order, mode) {
  return baseSortBy('saturation', getChannel(mcchn(mode)), order, collection);
}

function sortByLuminance(collection, order) {
  return baseSortBy('luminance', getLuminance, order, collection);
}

function sortByLightness(collection, order, colorspace) {
  return baseSortBy(
    'lightness',
    getChannel(mlchn(colorspace)),
    order,
    collection
  );
}
function sortByHue(collection, order, colorspace) {
  const reHue = /h/i.test(colorspace);
  return (
    reHue &&
    baseSortBy(
      'hue',
      getChannel(`${or(colorspace, 'lch')}.h`),
      order,
      collection
    )
  );
}

function sortByContrast(collection, against, order) {
  // @ts-ignore
  const cb = (against) => (color) => wcagContrast(color, against);
  return baseSortBy('contrast', cb(against), order, collection);
}

function sortByDistance(collection, against, order) {
  const cb = (against) => (color) => {
    // @ts-ignore
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

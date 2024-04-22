/**
 *
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').Colorspaces} Colorspaces
 * @typedef {import('../types/types.js').ScaleValues} ScaleValues
 */

import { values } from './fp';
import { nearest as nrst, differenceHyab } from 'culori/fn';
import { colors } from './colors.js';

/**
 * @public
 * Returns the nearest color(s) in a collection as compared `against` the passed in color.
 * @param {Collection} collection The collection of colors to search for nearest colors.
 * @param {ColorToken} against The color to use for distance comparison.
 * @param {number} num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
 * @returns {Collection} A collection of colors.
 * @example
 *
 * let cols = colors('all', '500')
 *
console.log(nearest(cols, 'blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
function nearest(collection, against, num = 1) {
  const f = (a, b) => {
    return nrst(values(a), differenceHyab(), (color) => color)(b, num);
  };
  let o;

  if (collection === 'tailwind') {
    // @ts-ignore
    o = f(colors('all'), against);
  } else {
    o = f(collection, against);
  }

  return o;
}

export { nearest };

/**
 * @typedef { import('../types/types.js').Collection} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').Colorspaces} Colorspaces
 * @typedef {import('../types/types.js').Factor} Factor
 * @typedef {import('../types/types.js').Order} Order
 * @typedef {import('../types/types.js').SortByOptions} SortByOptions
 */

import { sortedColl, mlchn, mcchn } from './index.js';
import { luminance } from './luminance.js';
import { mc } from './mc.js';
import { contrast } from './contrast.js';
import { differenceHyab } from 'culori/fn';

/**
 * Sorts colors according to the specified `factor`. The supported options are:
 *
 * * `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
 * The contrast is tested `against` a comparison color  which can be specified in the `options` object.
 * * `'lightness'` - Sorts colors according to their lightness.
 * * `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
 * * `'distance'` - Sorts colors according to their distance.
 * The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
 * * `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 * 
 * The return type is determined by the type of `collection`:
 * 
 * * Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
 * * `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.
 * @param {Collection} collection The `collection` of colors to sort.
 * @param {SortByOptions} options
 * @returns {Collection}  

 * @example

import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortBy('distance','desc',{ against:'yellow'})(sample)
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
function sortBy(
  collection,
  options = {
    factor: 'hue',
    order: 'asc',
    against: 'cyan',
    colorspace: 'lch'
  }
) {
  var { against, colorspace, factor, order } = options || {},
    cb;
  switch (factor.toLowerCase()) {
    case 'chroma':
      cb = sortedColl('chroma', mc(mcchn(colorspace)), order);
      break;
    case 'hue':
      cb = sortedColl('hue', mc(`${colorspace}.h`), order);
      break;
    case 'luminance':
      cb = sortedColl('luminance', luminance, order);
      break;
    case 'distance':
      var cb1 = (a) => (c) => {
        return differenceHyab()(a, c);
      };

      cb = sortedColl('distance', cb1(against), order);
      break;
    case 'contrast':
      let cb2 = (a) => (c) => contrast(c, a);
      cb = sortedColl('contrast', cb2(against), order);
      break;
    case 'lightness':
      cb = sortedColl('lightness', mc(mlchn(colorspace)), order);
      break;
  }

  return cb(collection);
}

export { sortBy };

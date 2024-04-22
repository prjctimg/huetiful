/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').Colorspaces} Colorspaces
 * @typedef {import('../types/types.js').Factor} Factor
 * @typedef {import('../types/types.js').Order} Order
 */

import { sortedColl, mlchn, mcchn } from './index.js';
import { luminance } from './luminance.js';
import { get } from './get.js';
import { contrast } from './contrast.js';
import { differenceHyab } from 'culori/fn';

/**
 * @public
 * Sorts colors according to the specified `factor`. The supported options are:
 *
 * * `'contrast'` - Sorts colors according to their contrast value as defined by WCAG. The contrast is tested `against` a comparison color  which can be specified in the `options` object.
 * * `'lightness'` - Sorts colors according to their lightness.
 * * `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
 * * `'distance'` - Sorts colors according to their distance. The distance factor is determined by the colorspace used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the collection.
 * * `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 *
 * @param {Factor} factor The factor to use for sorting the colors.
 * @param {'asc'|'desc'} [order='asc'] The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`).
 * @param options
 
 
 * @example
 *import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortBy('distance','desc',{ against:'yellow'})(sample)
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
function sortBy(
  factor,
  order,
  options = {
    /**
     * @type {ColorToken}  The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor.
     */
    against: '#fff',
    /**
     * @type {Colorspaces} The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.
     */
    colorspace: 'lch'
  }
) {
  var { against, colorspace } = options,
    cb;
  switch (factor) {
    case 'chroma':
      cb = sortedColl('chroma', get(mcchn(colorspace)), order);
      break;
    case 'hue':
      cb = sortedColl('hue', get(`${colorspace}.h`), order);
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
      cb = sortedColl('lightness', get(mlchn(colorspace)), order);
      break;
  }

  /**
   * @param {Collection} collection The `collection` of colors to sort.
   * @returns {Collection} The collection of sorted colors. If a plain `object` or `Map` is used as a collection it is worked with and returned as is. Plain objects are returned as `Map` objects because they remember insertion order. `ArrayLike` objects are returned as plain arrays. 

   */
  return (collection) => {
    return cb(collection);
  };
}

export { sortBy };

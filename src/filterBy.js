/**
 * @typedef { import('../types/types.js').Collection} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef {import('../types/types.js').Factor} Factor
 * @typedef {import('../types/types.js').Colorspaces} Colorspaces
 */

import { differenceHyab } from 'culori/fn';

// @ts-ignore
import { mcchn, mlchn, filteredColl } from './fp/index.js';
import { token } from './token.js';
import { mc } from './mc.js';
import { contrast } from './contrast.js';
import { luminance } from './luminance.js';
import ranges from './maps/ranges.js';

/**
 * Filters a collection of colors using the specified `factor` as the criterion. The supported options are:
 * * `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * * `'lightness'` - Returns colors in the specified lightness range.
 * * `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 
 * * `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
 * * `luminance` - Returns colors in the specified luminance range.
 * * `'hue'` - Returns colors in the specified hue ranges between 0 to 360.
 * 
 * 
 * For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range. 
 * This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. 
 * But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 * 
 * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
 *
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * 
 * 
 * @param {Factor} factor The factor to use as a filtering criterion.
 * @param {number|string}  start The minimum end of the `factor` range.
 * @param {number|string} end The maximum end of the `factor` range.
 *
 * @example
 * 
 * import { filterBy } from 'huetiful-js'

let sample = [
  '#00ffdc',
  '#00ff78',
  '#00c000',
  '#007e00',
  '#164100',
  '#ffff00',
  '#310000',
  '#3e0000',
  '#4e0000',
  '#600000',
  '#720000',
]

// Filtering colors by their relative contrast against 'green'. 
// The collection will include colors with a relative contrast equal to 3 or greater.

console.log(filterBy('contrast','>=3')(sample,{ against:'green' }))
// [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
 */
function filterBy(
  factor,
  start,
  end,
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
    z;

  function w(a, b, s, e) {
    return (y) => filteredColl(a, b)(y, s, e);
  }
  switch (factor.toLowerCase()) {
    case 'chroma':
      end = !end ? ranges[colorspace][mcchn(colorspace).split('.')[1]][1] : end;

      z = w(
        factor,
        mc(mcchn(colorspace)),

        // @ts-ignore
        start,
        end
      );

      break;
    case 'contrast':
      let q = (a) => (b) => contrast(b, a);

      z = w(
        'contrast',
        q(against),
        // @ts-ignore
        start,
        end
      );
      break;
    case 'distance':
      let u = (a) => (b) => differenceHyab()(a, b);

      z = w(
        'distance',
        u(token('hex')(against)),

        // @ts-ignore
        start,
        end
      );
      break;
    case 'hue':
      z = w(
        factor,
        mc(`${colorspace}.h`),
        // @ts-ignore
        start,
        end
      );
      break;
    case 'lightness':
      end = !end ? ranges[colorspace][mcchn(colorspace).split('.')[1]][1] : end;
      z = w(
        factor,
        mc(mlchn(colorspace)),
        // @ts-ignore
        start,
        end
      );
      break;
    case 'luminance':
      z = w(
        factor,
        luminance,
        // @ts-ignore
        start,
        end
      );
      break;
    default:
      break;
  }

  /**
   * @param {Collection}  collection The collection of colors to filter.
   * @param options
   * @returns {Collection}  A collection of the filtered colors.
   */
  return (collection) => {
    return z(collection);
  };
}

export { filterBy };

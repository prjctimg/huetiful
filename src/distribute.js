// @ts-nocheck
import { fixupHueLonger, fixupHueShorter } from 'culori/fn';
import { or } from './index.js';

// @ts-ignore
/**
 * Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.
 *@param {import('./filterBy.js').Factor} [factor='hue'] The property you want to distribute to the colors in the collection for example `hue | luminance`
 * @param {import('./types.js').DistributionOptions} [options={}] Optional overrides to change the default configursation

  @returns {(collection:import('./token.js').Collection,options?:import('./types.js').DistributionOptions)=>import('./token.js').Collection}
 */
function distribute(factor, options) {
  // Destructure the opts to check before distributing the factor
  var { extremum, excludeSelf, excludeAchromatic, hueFixup, colorspace } =
      options || {},
    get_cb,
    set_cb;

  // Set the extremum to distribute to default to max if its not min
  extremum = or(extremum, 'max');

  // Exclude the colorToken with the specified factor extremum being distributed
  excludeSelf = or(excludeSelf, false);

  // Exclude achromatic colors from the manipulations. The colors are returned in the resultant collection
  excludeAchromatic = or(excludeAchromatic, false);

  // The fixup to use when tweaking the hue channels
  // @ts-ignore
  hueFixup =
    factor === 'hue'
      ? hueFixup === 'longer'
        ? fixupHueLonger
        : fixupHueShorter
      : null;
  colorspace = or(colorspace, 'lch');

  // v is expected to be a color object so that we can access the color's hue property during the mapping
  // set the callbacks depending on the type of factor
  switch (factor) {
    case 'chroma':
      break;
    case 'hue':
      break;
    case 'luminance':
      break;
    case 'lightness':
      break;
  }

  /**
   *
   * @param {import('./token.js').Collection} collection The colors to manipulate.
   * @returns {import('./token.js').Collection} The collection with each color's `factor` adjusted.
   */
  return (collection = []) => {};
}
distribute('contrast')([], { hueFixup: 'shorter' });

export { distribute };

/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 */

import { averageNumber, random } from 'culori/fn';
import { max, min } from './fp/index.js';
import { token } from './token.js';

/**
 * Returns a random pastel variant of the passed in color token.
 * @param {ColorToken} color The color to return a pastel variant of.
 * @returns {ColorToken} A random pastel color.
 * @example
 *
import { pastel } from 'huetiful-js'

console.log(pastel("green"))

// #036103ff
 */
function pastel(color) {
  /**
   * The elements in each array are chroma, lightness of the color in jch and then the color in numerical representation. Got the values from sample pastel colors on the Wikipedia article
   */
  var w = [
    [0.10829314393978265, 0.8078352167176388, 16538982.504333857],
    [0.09512770648495351, 0.8314064898859859, 15694401.836627495],
    [0.13863266081095518, 0.9572252949770125, 15986490.838712374],
    [0.12957514187691385, 0.8125323873891118, 14834893.772825705],
    [0.0739432339604301, 0.847251407980675, 7446012.731034764],
    [0.1307471294468386, 0.8894219853862624, 8247112.202928809]
  ];
  const [u, v] = [w.map((o) => o[0]), w.map((o) => o[1])];

  const t = {
    ms: averageNumber(v),
    ml: averageNumber(u),
    mns: min(u),
    mxs: max(u),
    mnl: min(v),
    mxl: max(v)
  };
  // @ts-ignore
  color = token('object', { targetMode: 'jch' })(color);

  var q = random('lch65', {
    h: color['h'],
    c: [t['mns'], t['mxs']],
    l: [t['mnl'], t['mxl']]
  });

  // @ts-ignore
  return q;
}

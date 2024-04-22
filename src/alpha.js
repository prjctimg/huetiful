/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 */

import { token } from './token.js';
import { exprParser, inRange } from './fp';

/**
 *
 * Returns the color token's alpha channel value if the the `amount` parameter is not passed in else it sets the color token's alpha channel with the `amount` specified.
 * 
 * * Also supports expressions for the `amount` parameter. For example `*0.5` which means the value multiply the current alpha by `0.5` and set the product as the new alpha value. In short `currentAlpha * 0.5 = newAlpha`. The supported symbols are `* , - , / , +`
 * 
 * @param {ColorToken} color The color with the targeted opacity/alpha channel.
 * @param {number | string} amount The value to apply to the opacity channel. The value is between [0,1]
 * @returns {number|ColorToken} Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 * // Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
 */
function alpha(color = '#000', amount) {
  // We never perform an operation on an undefined color. Defaults to pure black
  const c = 'alpha';

  // @ts-ignore
  var o = token('object', { targetMode: 'lch' })(color);
  if (typeof amount === 'undefined' || null) {
    // @ts-ignore
    return o[c];
  } else if (typeof amount === 'number') {
    if (inRange(amount, 0, 1)) {
      // @ts-ignore
      o[c] = amount;
    } else {
      // @ts-ignore
      o[c] = amount / 100;
    }
  } else if (typeof amount === 'string') {
    // @ts-ignore
    exprParser(o, c, amount);
  }

  // @ts-ignore
  return token('hex')(o);
}

export { alpha };

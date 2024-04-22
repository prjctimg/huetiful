/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 */

import { token } from './token.js';
import { interpolate, wcagLuminance } from 'culori/fn';

/**
 * Gets the luminance of the passed in color token if the `amount` parameter is not passed in else it will set the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance) by the specified `amount`.
 * @param { ColorToken } color The color to retrieve or adjust luminance.
 * @param { number } [amount=undefined] The amount of luminance to set. The value range is normalised between [0,1]
 * @returns { ColorToken  | number} The mutated color with the modified properties. Preserves the `ColorToken` type of the passed in color.
 * @example
 *
 * import { luminance } from 'huetiful-js'


console.log(luminance('#a1bd2f'))
// 0.4417749513730954

console.log(colors('all', '400').map((c) => luminance(c)));

// [
   0.3595097699638928,  0.3635745068550118,
   0.3596908494424909,  0.3662525955988395,
  0.36634113914916244, 0.32958967582076004,
  0.41393242740130043,  0.5789820793721787,
   0.6356386777636567,  0.6463720036841869,
   0.5525691083297639,  0.4961850321908156,
   0.5140644334784611,  0.4401325598899415,
  0.36299191043315415,  0.3358285501372504,
  0.34737270839643575, 0.37670102542883394,
   0.3464512307705231, 0.34012939384198054
]


let myColor = luminance('#a1bd2f', 0.5)

console.log(luminance(myColor))
// 0.4999999136285792
 */
function luminance(color, amount) {
  if (!amount) {
    // @ts-ignore
    return wcagLuminance(token('hex')(color));
  } else {
    const w = '#ffffff',
      b = '#000000';

    const EPS = 1e-7;
    let MAX_ITER = 20;

    if (typeof amount == 'number') {
      // compute new color using...
      // @ts-ignore
      color = token('object', { targetMode: 'rgb' })(color);
      // @ts-ignore
      const cl = wcagLuminance(color);

      //Must add the overrides object to change parameters like easings, fixups, and the mode to perform the computations in.
      // use a bilinear interpolation

      const f = (u, v) => {
        const [md, l] = [
          interpolate([u, v])(0.5),
          // @ts-ignore
          wcagLuminance(color)
        ];

        // @ts-ignore
        if (Math.abs(amount - l > EPS) || !MAX_ITER--) {
          // close enough
          return md;
        }

        if (l > amount) {
          return f(u, md);
        } else {
          return f(md, v);
        }
      };

      var o;
      if (cl > amount) {
        o = f(b, color);
      } else {
        o = f(color, w);
      }
    }
    // @ts-ignore
    return token('hex')(o);
  }
}

export { luminance };

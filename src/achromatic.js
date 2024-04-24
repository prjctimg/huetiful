// @ts-nocheck
/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 */

import { mlchn, mcchn, eq } from './fp/index.js';
import { get } from './get.js';
import { token } from './token.js';

/**
 * Checks if a color token is achromatic (without hue or simply grayscale).
 * 
 * A color token is considered achromatic or gray if:
 * 
 * * It has a falsy chroma/saturation channel when its channel values are computed in a hue based colorspace because the hue channel depends on the chroma channel for the final color to be non-gray (or colorful).
 * * It has a falsy hue channel (usually happens if you use a custom interpolation method other than interpolatorLinear and one of the hue channels in the interpolation has a falsy channel) which makes the hue `NaN`.
 * * All its `[r,g,b]` channels have equal values since grays are a result of interpolating black (`['rgb',0,0,0]`) and white (`['rgb',1,1,1]`). Therefore black and white return `false` because they're not grays.
 * @param {ColorToken} color The color token to test if it is achromatic or not.
 * @returns {boolean} True if the color token is achromatic else false.
 * @example
 *
 * import { achromatic } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"


achromatic('pink')
// false

let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];

console.log(sample.map(achromatic));

// [false, false, false,false]

achromatic('gray')
// Returns true



// we create an interpolation using black and white
let f = interpolate(["black", "white"]);

//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(achromatic));

//
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]

 */
function achromatic(color) {
  // If a color has no lightness then it has no hue so its technically not achromatic since white and black are not grayscale
  var o = {
    l: get(`${mlchn('jch')}`)(color),
    c: get(`${mcchn('jch')}`)(color),
    p: token('array', { targetMode: 'rgb', omitMode: true })(color)
  };
  var { l, c, p } = o;

  q = eq(p[0], p[1]) && eq(p[0], p[2]) && eq(p[2], p[1]);
  // Check if the saturation channel is zero or falsy for color spaces with saturation/chroma channel

  return c &&
    l !== (false || NaN || undefined || void 0 || 0 || Infinity || -Infinity) &&
    !q
    ? false
    : true;
}

export { achromatic };

/**
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').SchemeType} SchemeType
 */

import { nearest, differenceHyab } from 'culori/fn';
import { mcchn, mlchn, keys, values, gmchn } from './fp/index.js';
import { scheme } from './scheme.js';
import { token } from './token.js';

/**
 * Takes a collection of colors and finds the nearest matches using the `differenceHyab()` difference metric for a set of predefined palettes. 
 * 
 * The function returns different values based on the `kind` parameter passed in:
 * 
 * * An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
 * * Else it returns an object of all the palette types as keys and their values as an array of colors. 
 * 
 * If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.
 * @param {Collection} colors The collection of colors to create palettes from. Preferably use 6 or more colors for better results.
 * @param {SchemeType} kind (Optional) The palette type you want to return.
 * @returns {Collection} 
 * @example
 *
 * import { discover } from 'huetiful-js'

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
  "#3e0000",
  "#310000",
]

console.log(discover(sample, "tetradic"))
// [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
 */
function discover(colors = [], kind, colorspace = 'jch') {
  // I have this weird urge to just put stuff in arrays...elegant
  var [q, k, t, u, v, f] = [
    {},
    ['analogous', 'triadic', 'tetradic', 'complementary'],
    {},
    gmchn(mlchn(colorspace), 1),
    gmchn(mcchn(colorspace), 1),
    (a, b) => differenceHyab()(a, b) === 0
  ];

  colors = values(colors).map((z) =>
    token('object', {
      // @ts-ignore
      targetMode: colorspace
    })(z)
  );

  for (var x in colors) {
    var p = colors[x];
    // @ts-ignore
    k.forEach((s) => (t[s] = scheme(s)(p)));

    for (var d of keys(t)) {
      var [h, r] = [[], 0];

      for (var g of t[d]) {
        // filter out colors already in the palette
        // @ts-ignore
        var l = colors.filter((a) => !h.some((b) => f(a, b)));

        var m = nearest(l, differenceHyab())(g)[0];

        r += differenceHyab()(g, m);

        // @ts-ignore
        h.push(m);
      }

      if (!q[d] || r < q[d].variance) {
        q[d] = h.map(token('hex'));
      }
    }
  }
  var o;
  if (k.some((a) => a === kind.toLowerCase())) {
    o = q[kind.toLowerCase()];
  } else if (typeof kind === 'undefined') {
    o = q;
  } else {
    throw Error(
      `${kind} is not a valid scheme. The schemes are triadic | tetradic | analogous | complementary`
    );
  }

  return o;
}

export { discover };

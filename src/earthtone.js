/**
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 */

// @ts-ignore
// @ts-ignore
import { samples, blerp } from 'culori/fn';
import { token } from './token.js';
import { or } from './fp';
import { interpolator } from './interpolator.js';

/**
 *  Creates a color scale between an earthtone and any color token using spline interpolators on the channels.
 * @param {ColorToken} color The color to interpolate an earth tone with.
 * @param options Optional overrides for customising interpolation and easing functions.
 * @returns {ColorToken | Array<ColorToken>} Collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the passed in color.
 * @example
 *
 * import { earthtone } from 'huetiful-js'


console.log(earthtone("pink",'lch',{earthtones:'clay',samples:5 }))
// [ '#6a5c52ff', '#8d746aff', '#b38d86ff', '#d9a6a6ff', '#ffc0cbff' ]

 */
function earthtone(
  color,
  options = {
    colorspace: 'jch',
    method: '',
    closed: false
  }
) {
  let { iterations, earthtones, colorspace, method, closed } = options;
  color = token('hex')(color);
  iterations = or(iterations, 1);

  earthtones = or(earthtones, 'dark');
  const v = {
    'light-gray': '#e5e5e5',
    silver: '#f5f5f5',
    sand: '#c2b2a4',
    tupe: '#a79e8a',
    mahogany: '#958c7c',
    'brick-red': '#7d7065',
    clay: '#6a5c52',
    cocoa: '#584a3e',
    'dark-brown': '#473b31',
    dark: '#352a21'
  };

  const u = v[earthtones.toLowerCase()];

  // Get the channels to be lerped for each color
  // The t values will be similar. For each color at the point tx,ty allocate the values to each respective channel

  const f = interpolator([u, color], {
    // @ts-ignore
    colorspace: colorspace,
    closed: closed,
    // @ts-ignore
    kind: method
  });

  return (
    // @ts-ignore
    (iterations === 1 && token('hex')(f(0.5))) ||
    // @ts-ignore
    samples(iterations).map((t) => token('hex')(f(t)))
  );
}

export { earthtone };

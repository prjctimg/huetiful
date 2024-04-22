// Using trilerp and bilerp

// pairedScheme
// Paired scheme works with 3 colors; the baseColor, the derivedColor {calculated from the hueStep incrementation} and the tone white | black.
// The interpolation uses the baseColor as start and the tone as the middle value while the derivedColor is put at the other extremum
// During the interpolation
// we focus on the hue AND CHROMA CHANNELS

import { converter } from 'culori';
import { token } from './src/token.js';

const smp = [
  {
    color: '#fea3aa',
    saturation: 0.35826771653543305,
    value: 0.996078431372549
  },
  {
    color: '#f8b88b',
    saturation: 0.43951612903225806,
    value: 0.9725490196078431
  },
  { color: '#faf884', saturation: 0.472, value: 0.9803921568627451 },
  {
    color: '#f2a2e8',
    saturation: 0.3305785123966942,
    value: 0.9490196078431372
  },
  {
    color: '#b2cefe',
    saturation: 0.2992125984251969,
    value: 0.996078431372549
  },
  {
    color: '#baed91',
    saturation: 0.3881856540084388,
    value: 0.9294117647058824
  }
];

let u = smp.map((e) => {
  let r = converter('jch')(e.color);
  return [r?.c, r?.j, token('number')(e.color)];
});
console.log(u);

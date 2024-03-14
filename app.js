import {
  getMeanContrast,
  getMeanDistance,
  getMeanLuminance,
  getNearestLuminanceFrom,
  getFarthestLuminanceFrom
} from './src/utils.js';

var sample = [
    { l: 40, c: 20, h: 40, mode: 'lch' },
    { l: 20, c: 10, h: 20, mode: 'lch' },
    { l: 10, c: 40, h: 10, mode: 'lch' }
  ],
  against = { l: 5, c: 5, h: 5, mode: 'lch' };

console.log(getFarthestLuminanceFrom(sample, against));

console.log(getNearestLuminanceFrom(sample, against));

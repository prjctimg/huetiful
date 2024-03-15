import { color } from './src/index.js';
import {
  getMeanContrast,
  getMeanDistance,
  getMeanLuminance,
  getNearestLuminanceFrom,
  getFarthestLuminanceFrom
} from './src/utils.js';

let myColor = 'green';
console.log(color(myColor).luminance());
// 0.1543834296814607

console.log(color(myColor).luminance(0.5));

// Color {
//   alpha: 1,
//   _color: '#008000',
//   _luminance: 0.5,
//   lightness: 46.27770902748027,
//   colorspace: 'lch',
//   _saturation: undefined,
//   lightMode: '#f3f4f6',
//   darkMode: '#1f2937'
// }

let hueShiftedPalette = color('#3e0000').hueShift({ iterations: 1 });
console.log(hueshiftedPalette);

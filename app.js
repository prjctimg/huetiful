//
import {
  inRange,
  colors,
  filterBySaturation,
  getLuminance,
  hueShift,
  colorObj,
  getChannel,
  channelDifference,
  filterByLuminance,
  normalize,
  isAchromatic,
  getHueFamily,
  customConcat,
  min,
  max,
  lt
} from './lib/huetiful.esm.mjs';
import { darken, getNearestChroma } from './lib/utils.esm.mjs';

// // import Rune from 'rune.js';

// var cols = hueShift(colors('amber', '100'), 'dlch');

// // console.log(cols)

// // console.log(colors('all', '400').map(getLuminance));

let sample = [
  '#00ffdc',
  '#00ff78',
  '#00c000',
  '#007e00',
  '#164100',
  '#ffff00',
  '#310000',
  '#3e0000',
  '#4e0000',
  '#600000',
  '#720000'
];

//console.log(filterByLuminance(['blue', 'yellow', 'red', 'pink', 'green'], 0.3));

// //console.log(filterByLuminance(sample, 0.4));
// console.log(sample.map(getChannel('lch.c')));
//  [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]
//console.log(getHueFamily('blue'));
// console.log(
//   min(
//     customConcat({
//       warm: [343, 359],
//       cool: [321, 342]
//     })
//   )
// );

//console.log(getNearestChroma(['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'));
// console.log(darken('purple', '*0.5'));

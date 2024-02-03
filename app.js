//
import {
  colors,
  filterBySaturation,
  getLuminance,
  hueShift,
  colorObj,
  getChannel,
  channelDifference,
  filterByLuminance,
  normalize
} from './lib/huetiful.esm.mjs';

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

console.log(filterByLuminance(['blue', 'yellow', 'red', 'pink', 'green'], 0.3));

//console.log(filterByLuminance(sample, 0.4));
console.log(sample.map(getChannel('lch.c')));
//  [ '#00ff78', '#00c000', '#007e00', '#ffff00' ]

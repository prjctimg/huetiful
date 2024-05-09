// Using trilerp and bilerp

// pairedScheme
// Paired scheme works with 3 colors; the baseColor, the derivedColor {calculated from the hueStep incrementation} and the tone white | black.
// The interpolation uses the baseColor as start and the tone as the middle value while the derivedColor is put at the other extremum
// During the interpolation
// we focus on the hue AND CHROMA CHANNELS

import { inGamut } from 'culori';
// @ts-ignore
import { token } from './src/token.js';
import {
	colors,
	mc,
	pastel,
	stats,
	filterBy,
	luminance,
	sortBy,
	hueshift,
	achromatic
} from './src/index.js';

// const smp = [
//   {
//     color: '#fea3aa',
//     saturation: 0.35826771653543305,
//     value: 0.996078431372549
//   },
//   {
//     color: '#f8b88b',
//     saturation: 0.43951612903225806,
//     value: 0.9725490196078431
//   },
//   { color: '#faf884', saturation: 0.472, value: 0.9803921568627451 },
//   {
//     color: '#f2a2e8',
//     saturation: 0.3305785123966942,
//     value: 0.9490196078431372
//   },
//   {
//     color: '#b2cefe',
//     saturation: 0.2992125984251969,
//     value: 0.996078431372549
//   },
//   {
//     color: '#baed91',
//     saturation: 0.3881856540084388,
//     value: 0.9294117647058824
//   }
// ];

// let u = smp.map((e) => {
//   let r = converter('hsv')(e.color);
//   return [r?.s, r?.v, token(e.color, { kind: 'number' })];
// });
//console.log(u);

let a = mc('lch.h')('#4da2b3');

//console.log(a);

//console.log(pastel('green', { kind: 'hex' }));

let ui = colors('all', '500');

//console.log(ui);

// console.log(
//   stats(ui, {
//     factor: ['chroma', 'contrast'],
//     relative: true
//   })
// );

// let rf = filterBy(ui, {
// 	factor: ['hue', 'contrast'],
// 	ranges: {
// 		hue: [50, 300],
// 		contrast: [4, 12]
// 	},
// 	against: 'yellow'
// });

// console.log(rf);

let palette = colors('all', '500');
let base = colors('orange', '700');

let filteredPalette = filterBy(palette, {
	factor: 'contrast',
	against: 'yellow',
	ranges: ['>4', '>=10']
});

filteredPalette = filterBy(palette, {
	against: 'yellow',
	factor: ['hue', 'luminance', 'contrast'],
	ranges: { hue: [200, 300], luminance: [0.4, 0.6], contrast: ['<2'] }
});

// console.log(
// 	hueshift('yellow', {
// 		maxLightness: 0.6,
// 		minLightness: 0.1
// 	})
// );

//console.log(token(['lch', 50, 23, 78]));

console.log(['blue', 'gray', 'black'].map((e) => achromatic(e)));

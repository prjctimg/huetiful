#!/usr/bin/env ts-node

import { formatHex8 } from 'culori';
import {
	deficiency,
	family,
	achromatic,
	token,
	sortBy,
	complimentary,
	pair,
	mc,
	colors,
	filterBy
} from './lib/index.ts';
import { log } from 'node:console';
//log(achromatic('cyan'));
// log(token('cyan', { kind: 'obj' }));

// log(
// 	filterBy(colors('all', '500'), {
// 		ranges: { lightness: [20, 50] },
// 		factor: 'lightness'
// 	})
// );

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

log(
	filterBy(sample, {
		factor: ['contrast'],
		ranges: {
			contrast: [8, 10]
		},
		colorspace: 'lch'
	})
);


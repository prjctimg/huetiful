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
} from './src/index.ts';
import { log } from 'node:console';
//log(achromatic('cyan'));
// log(token('cyan', { kind: 'obj' }));

// log(
// 	filterBy(colors('all', '500'), {
// 		ranges: { lightness: [20, 50] },
// 		factor: 'lightness'
// 	})
// );

// log(complimentary('cyan'));
// //log(mc('lch.h')('cyan', 10));
const val = mc('lch.h')('blue', 10);
log(val)
import * as mods from '../src/index.js';

/**
 *
 * @param {*} _module The module with the global exports to test.
 * @param {*} _data The specs containing parameters, expected values
 * @param {*} _matcher
 */
function _iterator(_module = {}, _data = {}, _matcher = undefined) {
	for (const [func, args] of Object.entries(_data)) {
		it(args['description'], function () {
			expect(_module[func](...args['params'])).toEqual(args['expect']);
		});
	}
}

// Globals

const all300 = [
		'#cbd5e1',
		'#d1d5db',
		'#d4d4d8',
		'#d4d4d4',
		'#d6d3d1',
		'#fca5a5',
		'#fdba74',
		'#fcd34d',
		'#fde047',
		'#bef264',
		'#86efac',
		'#6ee7b7',
		'#5eead4',
		'#7dd3fc',
		'#93c5fd',
		'#c4b5fd',
		'#d8b4fe',
		'#f0abfc',
		'#f9a8d4',
		'#fda4af'
	],
	hueshiftPalette = [
		'#000080ff',
		'#0a0086ff',
		'#19008dff',
		'#230093ff',
		'#2c0099ff',
		'#3500a0ff',
		'#3e00a6ff',
		'#b70029ff',
		'#d6003dff',
		'#f60053ff',
		'#ff1b6aff',
		'#ff4b82ff',
		'#ff6d9cff'
	],
	filterBysample = [
		'#94a3b8',
		'#9ca3af',
		'#a1a1aa',
		'#a3a3a3',
		'#a8a29e',
		'#f87171',
		'#fb923c',
		'#fbbf24',
		'#facc15',
		'#a3e635',
		'#4ade80',
		'#34d399',
		'#2dd4bf',
		'#38bdf8',
		'#60a5fa',
		'#a78bfa',
		'#c084fc',
		'#e879f9',
		'#f472b6',
		'#fb7185'
	],
	sample = [
		'#ffff00',
		'#00ffdc',
		'#00ff78',
		'#00c000',
		'#007e00',
		'#164100',
		'#720000',
		'#600000',
		'#4e0000',
		'#3e0000',
		'#310000'
	],
	cols = mods.colors('all', '500');

// This object is for simple utils with no edge cases
let specs = {
	family: {
		params: ['cyan'],
		description: `Gets the color"s hue family`,
		expect: 'blue-green'
	},
	temp: {
		params: ['pink'],
		description: `Returns the rough color temperature either cool or warm.`,
		expect: 'cool'
	},
	achromatic: {
		params: ['yellow'],
		description: `Checks if a color is achromatic or not`,
		expect: false
	},

	overtone: {
		params: ['cyan'],
		description: `Gets the overtone of the passed in color`,
		expect: 'green'
	},
	contrast: {
		params: ['black', 'white'],
		description: `Gets the contrast of the passed in color`,
		expect: 21
	},
	luminance: {
		params: ['#ffc300', 0.7],
		description: `Sets the luminance of the passed in color`,
		expect: '#ffe180ff'
	},
	lightness: {
		params: ['blue', 0.3, false],
		description: 'Lightens/darkens the passed in color',
		expect: '#9d63ffff'
	},
	discover: {
		params: [sample, { kind: 'tetradic' }],
		description:
			'Takes an array of colors and finds the best matches for a set of predefined palettes.',
		expect: jasmine.anything()
	},
	earthtone: {
		params: ['pink', { earthtones: 'clay', num: 5, closed: true }],
		description:
			'Creates a scale of a spline interpolation between an earthtone and a color.',
		expect: ['#6a5c52ff', '#8f7570ff', '#b48e8fff', '#daa7adff', '#ffc0cbff']
	},
	hueshift: {
		params: ['#3e00a6'],
		description: 'Generates a palette of hue shifted colors',
		expect: jasmine.anything()
	},
	interpolator: {
		params: [
			['b2c3f1', '#a1bd2f', '#f3bac1'],
			{ colorspace: 'lch', num: 8, kind: 'natural' }
		],
		description:
			'Returns a spline interpolator function with customizable interpolation methods',
		expect: [
			'#b2c3f1ff',
			'#ffaab6ff',
			'#bfdd62ff',
			'#00f7fbff',
			'#56e1ffff',
			'#fabcffff',
			'#ffb2e7ff',
			'#f3bac1ff'
		]
	},
	alpha: {
		params: ['#f3da3c51'],
		description: 'Returns the alpha of the passed in color',
		expect: 81
	},
	deficiency: {
		params: [['rgb', 230, 100, 50, 0.5], { kind: 'blue', severity: 0.5 }],
		expect: '#ea614080'
	},
	nearest: {
		params: [cols, { against: 'cyan', num: 1 }],
		description: `Returns the nearest color`,
		expect: '#14b8a6'
	},
	scheme: {
		params: ['purple', { kind: 'tetradic' }],
		description: `Returns a classic palette`,
		expect: jasmine.anything()
	},
	pair: {
		params: ['green', { hueStep: 6, num: 4, tone: 'dark' }],
		description:
			'Creates a scheme that consists of a scheme color that is incremented by a hueStep to get the final hue to pair with',
		expect: ['#008000', '#348e2a', '#79b36f', '#cfe4cb']
	},
	pastel: {
		params: ['green'],
		description: 'Creates a pastel variant of a color',
		expect: jasmine.anything()
	},
	colors: {
		params: ['all', '300'],
		description: 'Returns the swatches of color families at 300',
		expect: all300
	}
};

_iterator(mods, specs);

//////////                   Not in the map because these funcs are curried

describe(`Test suite for utils`, function () {
	it(`Sets/Gets the specified channel of the passed in color`, function () {
		expect(mods.mc('lch.h')(mods.mc('lch.h')('blue', 10))).toBe(10);
	});
});

// // TEST FOR TOKEN
// describe('Test suite for the token utility', function () {
// 	it(`Returns an array of channels without the mode param`, function () {
// 		expect(
// 			mods.token('purple', { kind: 'array', omitMode: true, targetMode: 'hsv' })
// 		).toEqual();
// 	});

// 	it(`Returns a number for the passed in color token in binary`, function () {
// 		expect(
// 			mods.token('purple', { kind: 'number', numType: 'binary' })
// 		).toEqual();
// 	});

// 	it(`Returns a color as a plain object`, function () {
// 		expect(
// 			mods.token('purple', { kind: 'object', targetMode: 'lab' })
// 		).toEqual();
// 	});

// 	it(`Returns a color in hex`, function () {
// 		expect(mods.token('purple')).toEqual();
// 	});
// });

// // TEST FOR FILTERBY

// describe(`Test suite for filterBy`, function () {
// 	it(`Returns a collection of colors filtered using different factors`, function () {
// 		expect(
// 			mods.filterBy(filterBysample, {
// 				factor: ['chroma', 'contrast'],
// 				against: 'black',
// 				ranges: {
// 					chroma: ['>30'],
// 					contrast: [14]
// 				}
// 			})
// 		).toEqual();
// 	});

// 	it(`Returns an array of filtered colors`, function () {
// 		expect(
// 			mods.filterBy(filterBysample, {
// 				factor: 'distance',
// 				against: 'yellow',
// 				ranges: ['>=20']
// 			})
// 		);
// 	});
// });

// // TEST FOR SORTBY

// describe(`Test suite for sortBy`, function () {
// 	it(`Returns an object of colors sorted by different factors`, function () {
// 		expect(
// 			mods.sortBy(filterBysample, {
// 				factor: ['chroma', 'hue', 'contrast'],
// 				against: 'yellow',
// 				order: 'desc'
// 			})
// 		);
// 	});

// 	it(`Returns an array of colors sorted by hue`, function () {
// 		expect(
// 			mods.sortBy(filterBysample, {
// 				factor: 'hue',
// 				order: 'asc',
// 				relative: true
// 			})
// 		);
// 	});
// });

// // TEST FOR STATS

// describe(`Test suite for the stats function`, function () {
// 	it(`Returns an object of stats about the specified factors`, function () {
// 		expect(
// 			mods.stats(filterBysample, {
// 				factor: ['chroma', 'distance'],
// 				against: 'yellow'
// 			})
// 		);
// 	});
// });

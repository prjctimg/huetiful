// @ts-nocheck
import * as mods from '../src/index.js';

function _iterator(_module = {}, _data = {}) {
	for (const [func, args] of Object.entries(_data)) {
		it(args['description'], function () {
			expect(_module[func](...args['params'])).toEqual(args['expect']);
		});
	}
}

// Globals

var all300 = [
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
		'#3f0101',
		'#2b1800',
		'#002620',
		'#2f1500',
		'#321300',
		'#3f0007',
		'#3e0000',
		'#561a17',
		'#743356',
		'#915077',
		'#268fad',
		'#cb8ebe',
		'#fcaca7'
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
	];

// This object is for simple utils with no edge cases
var specs = {
	family: {
		params: ['cyan'],
		description: `Gets the color"s hue family`,
		expect: 'blue-green'
	},
	temp: {
		params: ['pink'],
		description: `Gets the color"s hue family`,
		expect: 'warm'
	},
	achromatic: {
		params: ['yellow', 'black', 'gray', 'white'],
		description: `Checks if a color is achromatic or not`,
		expect: [false, false, true, false]
	},

	complimentary: {
		params: ['purple'],
		description: `Gets the complimentary hue of the passed in color`,
		expect: '#005700'
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
		expect: '#ffe180'
	},
	lightness: {
		params: ['b2c3f1', 0.4, false],
		description: 'Brightens the passed in color',
		expect: '#b3c4f2ff'
	},
	discover: {
		params: [all300, { kind: 'tetradic' }],
		description:
			'Takes an array of colors and finds the best matches for a set of predefined palettes.',
		expect: []
	},
	earthtone: {
		params: ['pink', { earthtones: 'clay', num: 5, closed: true }],
		description:
			'Creates a scale of a spline interpolation between an earthtone and a color.',
		expect: ['#6a5c52', '#816a63', '#b38d86', '#e6b0ac', '#ffc1be']
	},
	hueshift: {
		params: ['#3e0000'],
		description: 'Generates a palette of hue shifted colors',
		expect: hueshiftPalette
	},
	interpolator: {
		params: [
			['b2c3f1', '#a1bd2f', '#f3bac1'],
			{ colorspace: 'lch', num: 8, kind: 'natural' }
		],
		description:
			'Returns a spline interpolator function with customizable interpolation methods',
		expect: [
			'#b2c3f1',
			'#2dd0f5',
			'#00d5ae',
			'#6aca4c',
			'#c5b722',
			'#fba859',
			'#010101',
			'#f3bac1'
		]
	},
	alpha: {
		params: ['#f3da3c51'],
		description: 'Returns the alpha of the passed in color',
		expect: true
	},
	deficiency: {
		params: [
			'purple',
			{
				kind: 'red',
				severity: 0.1
			}
		],
		expect: true
	},
	nearest: {
		params: [all300, { against: 'cyan', num: 1 }],
		description: `Returns the nearest color`,
		expect: true
	},
	scheme: {
		params: ['purple', { kind: 'tetradic' }],
		description: `Returns a classic palette`,
		expect: true
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

// TEST FOR TOKEN
describe('Test suite for the token utility', function () {
	it(`Returns an array of channels without the mode param`, function () {
		expect(
			mods.token('purple', { kind: 'array', omitMode: true, targetMode: 'hsv' })
		).toEqual();
	});

	it(`Returns a number for the passed in color token in binary`, function () {
		expect(
			mods.token('purple', { kind: 'number', numType: 'binary' })
		).toEqual();
	});

	it(`Returns a color as a plain object`, function () {
		expect(
			mods.token('purple', { kind: 'object', targetMode: 'lab' })
		).toEqual();
	});

	it(`Returns a color in hex`, function () {
		expect(mods.token('purple')).toEqual();
	});
});

// TEST FOR FILTERBY

describe(`Test suite for filterBy`, function () {
	it(`Returns a collection of colors filtered using different factors`, function () {
		expect(
			mods.filterBy(filterBysample, {
				factor: ['chroma', 'contrast'],
				against: 'black',
				ranges: {
					chroma: ['>30'],
					contrast: [14]
				}
			})
		).toEqual();
	});

	it(`Returns an array of filtered colors`, function () {
		expect(
			mods.filterBy(filterBysample, {
				factor: 'distance',
				against: 'yellow',
				ranges: ['>=20']
			})
		);
	});
});

// TEST FOR SORTBY

describe(`Test suite for sortBy`, function () {
	it(`Returns an object of colors sorted by different factors`, function () {
		expect(
			mods.sortBy(filterBysample, {
				factor: ['chroma', 'hue', 'contrast'],
				against: 'yellow',
				order: 'desc'
			})
		);
	});

	it(`Returns an array of colors sorted by hue`, function () {
		expect(
			mods.sortBy(filterBysample, {
				factor: 'hue',
				order: 'asc',
				relative: true
			})
		);
	});
});

// TEST FOR STATS

describe(`Test suite for the stats function`, function () {
	it(`Returns an object of stats about the specified factors`, function () {
		expect(
			mods.stats(filterBysample, {
				factor: ['chroma', 'distance'],
				against: 'yellow'
			})
		);
	});
});

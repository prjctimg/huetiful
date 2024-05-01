// @ts-nocheck
import _iterator from './helpers/iterator.js';
import * as mods from '../src/index.js';

// This test suite deals with unary utils
var specs = {
  family: {
    params: ['cyan'],
    description: `Gets the color"s hue family`,
    expect: 'blue-green'
  },
  warm: {
    params: ['pink'],
    description: `Gets the color"s hue family`,
    expect: true
  },
  achromatic: {
    params: ['gray'],
    description: `Checks if a color is achromatic or not`,
    expect: true
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
  brighten: {
    params: ['b2c3f1', 0.4, 'lch'],
    description: 'Brightens the passed in color',
    expect: '#b3c4f2ff'
  },
  darken: {
    params: ['b2c3f1', 0.4, 'lch'],
    description: 'Darkens the passed in color',
    expect: '#b1c2f0ff'
  },
  discover: {
    params: [
      [
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
      { kind: 'tetradic' }
    ],
    description:
      'Takes an array of colors and finds the best matches for a set of predefined palettes.',
    expect: ['#310000', '#3e0000', '#4e0000', '#164100']
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
    expect: [
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
    ]
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
  filterBy: {
    params: [
      [
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
      { factor: 'distance', against: 'yellow', start: '<70.05' }
    ],
    description: 'Filters color by distance',
    expect: ['#fbbf24', '#facc15', '#a3e635']
  },
  sortBy: {
    params: [
      ['blue', 'pink', 'yellow', 'green'],
      { against: 'black', order: 'asc' }
    ],
    description: 'Sorts colors by distance value in `asc` order',
    expect: ['blue', 'green', 'pink', 'yellow']
  },
  token: {
    params: [
      {
        r: 0.4,
        g: 0.3,
        b: 0.7,
        mode: 'rgb'
      },
      { kind: 'array', omitMode: true }
    ],
    description:
      'Converts a color object to an array containing channel values without the colorspace ',
    expect: [0.4, 0.3, 0.7]
  },
  colors: {
    params: ['all', '300'],
    description: 'Returns the swatches of color families at 300',
    expect: [
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
    ]
  }
};

_iterator(mods, specs);

describe(`Test suite for utils`, function () {
  // Not in the map because these funcs are curried
  it(`Sets/Gets the specified channel of the passed in color`, function () {
    expect(mods.mc('lch.h')('#310000', 10)).toBe(10);
  });
});

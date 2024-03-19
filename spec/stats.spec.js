import _iterator from './helpers/iterator.js';
import * as stats from '../src/stats.js';

var statsSpec = {
  getMeanLuminance: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 30, h: 20, mode: 'lch' },
        { l: 10, c: 40, h: 30, mode: 'lch' }
      ]
    ],
    description: `Gets the mean luminance from the collection of colors.`,
    expect: 0.051170743179012795
  },
  getMeanContrast: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 30, h: 20, mode: 'lch' },
        { l: 10, c: 40, h: 30, mode: 'lch' }
      ],
      'blue'
    ],
    description: `Gets the mean contrast from the collection of colors against the specified color`,
    expect: 1.6087955158902005
  },
  getMeanDistance: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 30, h: 20, mode: 'lch' },
        { l: 10, c: 40, h: 30, mode: 'lch' }
      ],
      'blue'
    ],
    description: `Gets the mean distance from the collection of colors using the differenceHyab metric`,
    expect: 147.44699388822093
  },
  getMeanHue: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 30, h: 20, mode: 'lch' },
        { l: 10, c: 40, h: 30, mode: 'lch' }
      ],
      'lch'
    ],
    description: `Gets the mean hue angle from the collection of colors in the specified colorspace`,
    expect: 29.999999999999996
  },
  getMeanLightness: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 30, h: 20, mode: 'lch' },
        { l: 30, c: 40, h: 10, mode: 'lch' }
      ],
      'lch'
    ],
    description: `Gets the mean lightness value from the collection of colors in the specified colorspace`,
    expect: 30
  },
  getMeanChroma: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 30, h: 20, mode: 'lch' },
        { l: 10, c: 40, h: 10, mode: 'lch' }
      ],
      'lch'
    ],
    description: `Gets the mean chroma value from the collection of colors in the specified colorspace`,
    expect: 30
  },

  getNearestHueFrom: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 10, h: 20, mode: 'lch' },
        { l: 10, c: 40, h: 10, mode: 'lch' }
      ],
      { l: 5, c: 5, h: 5, mode: 'lch' },
      'lch'
    ],
    description: `Gets the smallest hue distance between the colors in a collection against the specified color`,
    expect: 5
  },
  getNearestChromaFrom: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 10, h: 20, mode: 'lch' },
        { l: 10, c: 40, h: 10, mode: 'lch' }
      ],
      { l: 5, c: 5, h: 5, mode: 'lch' },
      'lch'
    ],
    description: `Gets the smallest chroma distance between the colors in a collection against the specified color`,
    expect: 5
  },
  getNearestLightnessFrom: {
    params: [
      [
        { l: 40, c: 20, h: 40, mode: 'lch' },
        { l: 20, c: 10, h: 20, mode: 'lch' },
        { l: 10, c: 40, h: 10, mode: 'lch' }
      ],
      { l: 5, c: 5, h: 5, mode: 'lch' },
      'lch'
    ],
    description: `Gets the smallest lightness distance between the colors in a collection against the specified color`,
    expect: 5
  },
  getFarthestHueFrom: {
    params: [
      [
        { l: 20, c: 20, h: 20, mode: 'lch' },
        { l: 10, c: 10, h: 10, mode: 'lch' },
        { l: 40, c: 40, h: 40, mode: 'lch' }
      ],
      { l: 10, c: 5, h: 80, mode: 'lch' },
      'lch'
    ],
    description: `Gets the largest hue angle distance between the colors in a collection against the specified color`,
    expect: 35
  },
  getFarthestChromaFrom: {
    params: [
      [
        { l: 20, c: 20, h: 20, mode: 'lch' },
        { l: 10, c: 10, h: 10, mode: 'lch' },
        { l: 40, c: 40, h: 40, mode: 'lch' }
      ],
      { l: 5, c: 5, h: 5, mode: 'lch' },
      'lch'
    ],
    description: `Gets the largest chroma distance between the colors in a collection against the specified color`,
    expect: 35
  },
  getFarthestLightnessFrom: {
    params: [
      [
        { l: 20, c: 20, h: 20, mode: 'lch' },
        { l: 10, c: 10, h: 10, mode: 'lch' },
        { l: 40, c: 40, h: 40, mode: 'lch' }
      ],
      { l: 5, c: 5, h: 5, mode: 'lch' },
      'lch'
    ],
    description: `Gets the largest lightness distance between the colors in a collection against the specified color`,
    expect: 35
  },
  getNearestChroma: {
    params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
    description: `Gets the nearest chroma in a collection `,
    expect: 22.45669293295522
  },
  getFarthestChroma: {
    params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
    description: `Gets the farthest chroma in a collection `,
    expect: 67.22120855010492
  },
  getNearestHue: {
    params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
    description: `Gets the nearest hue angle in a collection`,
    expect: 12.462831644544274
  },
  getFarthestHue: {
    params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
    description: `Gets the nearest hue angle in a collection`,
    expect: 273.54920266436477
  },
  getNearestContrast: {
    params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'green'],
    description: `Gets the nearest/farthest contrast in a collection `,
    expect: 2.4061390502133424
  },
  getFarthestContrast: {
    params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'green'],
    description: `Gets the nearest/farthest contrast in a collection `,
    expect: 3.08355493246362
  },
  getNearestLightness: {
    params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
    description: `Gets the nearest/farthest lightness in a collection `,
    expect: 72.61647882089876
  },
  getFarthestLightness: {
    params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
    description: `Gets the nearest/farthest lightness in a collection `,
    expect: 80.94668903360088
  }
};

describe(`Test suite for the stats module`, () => {
  _iterator(stats, statsSpec);
});

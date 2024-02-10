import * as utils from '../lib/utils.esm.mjs';
import iterator from './helpers/iterator.js';

/** 
 * @module
 * @license
 * utils.ts - Test suite for huetiful-js utils module. 
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
describe(`Test suite for utils`, () => {
  var [col, sample] = ['#310000', ['b2c3f1', '#a1bd2f', '#f3bac1']];
  var data = {
    getHueFamily: {
      params: ['cyan'],
      description: `Gets the color's hue family`,
      expect: 'blue-green'
    },
    isCool: {
      params: ['pink'],
      description: `Gets the color's hue family`,
      expect: true
    },
    getNearestContrast: {
      params: [sample, 'green'],
      description: `Gets the nearest/farthest contrast in a collection `,
      expect: 2.4061390502133424
    },
    getFarthestContrast: {
      params: [sample, 'green'],
      description: `Gets the nearest/farthest contrast in a collection `,
      expect: 3.08355493246362
    },
    getNearestLightness: {
      params: [sample, 'lch'],
      description: `Gets the nearest/farthest lightness in a collection `,
      expect: 72.61647882089876
    },
    getFarthestLightness: {
      params: [sample, 'lch'],
      description: `Gets the nearest/farthest lightness in a collection `,
      expect: 80.94668903360088
    },
    isAchromatic: {
      params: ['gray'],
      description: `Checks if a color is achromatic or not`,
      expect: true
    },
    getNearestChroma: {
      params: [sample, 'lch'],
      description: `Gets the nearest chroma in a collection `,
      expect: 22.45669293295522
    },
    getFarthestChroma: {
      params: [sample, 'lch'],
      description: `Gets the farthest chroma in a collection `,
      expect: 67.22120855010492
    },
    getNearestHue: {
      params: [sample, 'lch'],
      description: `Gets the nearest hue angle in a collection`,
      expect: 12.462831644544274
    },
    getFarthestHue: {
      params: [sample, 'lch'],
      description: `Gets the nearest hue angle in a collection`,
      expect: 273.54920266436477
    },
    getComplimentaryHue: {
      params: ['purple'],
      description: `Gets the complimentary hue of the passed in color`,
      expect: '#005700'
    },

    overtone: {
      params: ['cyan'],
      description: `Gets the overtone of the passed in color`,
      expect: 'green'
    },
    getContrast: {
      params: ['black', 'white'],
      description: `Gets the contrast of the passed in color`,
      expect: 21
    },
    getLuminance: {
      params: ['#ffc300'],
      description: `Gets the luminance of the passed in color`,
      expect: 0.6029021347719574
    },
    setLuminance: {
      params: ['#ffc300', 0.7],
      description: `Sets the luminance of the passed in color`,
      expect: '#ffe180'
    }
  };
  iterator(utils, data);
  // it(`Brightens/darkens the passed in color`, () => {
  //   expect(utils.darken(col, 0.5)).toBe(67.22120855010492);
  //   expect(utils.brighten(sample, '*0.3')).toBe(22.45669293295522);
  // });

  // Not in the map because these funcs are curried
  it(`Sets/Gets the specified channel of the passed in color`, () => {
    expect(utils.getChannel('lch.h')(utils.setChannel('lch.h')(col, 10))).toBe(
      10.695425416490899
    );
  });
});

//

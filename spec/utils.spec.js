import * as utils from '../src/utils.js';
import _iterator from './helpers/iterator.js';

import 'jasmine';

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

var utilsSpec = {
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
  isAchromatic: {
    params: ['gray'],
    description: `Checks if a color is achromatic or not`,
    expect: true
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
  }
};

describe(`Test suite for utils`, () => {
  _iterator(utils, utilsSpec);
  // it(`Brightens/darkens the passed in color`, () => {
  //   expect(utils.darken(col, 0.5)).toBe(67.22120855010492);
  //   expect(utils.brighten([, '#a1bd2f', '#f3bac1'], '*0.3')).toBe(22.45669293295522);
  // });

  // Not in the map because these funcs are curried
  it(`Sets/Gets the specified channel of the passed in color`, () => {
    expect(
      utils.getChannel('lch.h')(utils.setChannel('lch.h')('#310000', 10))
    ).toBe(10);
  });
});

export default utilsSpec;

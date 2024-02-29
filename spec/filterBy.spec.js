import * as filterBy from '../src/filterBy.js';
import _iterator from './helpers/iterator.js';

/** 
 * @license
 * filterBy.ts - Test suite for huetiful-js color filtering module. 
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

describe(`The filterBy module test suite `, () => {
  // For utils that take a colorspace param the default is 'lch'
  const colors = [
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
    '#720000',
    '#ffff00',
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#720000',
    '#600000'
  ];
  var data = {
    filterByContrast: {
      params: [colors, 0.05, 1, 'lch'],
      description: 'Filters color by relative contrast',
      expect: jasmine.anything()
    },
    filterByHue: {
      params: [colors, 10, 360, 'lch'],
      description: 'Filters color by hue',
      expect: jasmine.anything()
    },
    filterByLuminance: {
      params: [colors, 0.05, 0.8],
      description: 'Filters color by luminance',
      expect: jasmine.anything()
    },
    filterByLightness: {
      params: [colors, 5, 100, 'lch'],
      description: 'Filters color by lightness',
      expect: jasmine.anything()
    },
    filterByDistance: {
      params: [colors, 'yellow', '>1.05'],
      description: 'Filters color by distance',
      expect: jasmine.anything()
    },
    filterBySaturation: {
      params: [colors, 25, 100, 'lch'],
      description: 'Filters color by saturation',
      expect: jasmine.anything()
    }
  };

  _iterator(filterBy, data);
});

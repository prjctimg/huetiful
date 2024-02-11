import * as sortBy from '../lib/sortBy.esm.mjs';
import _iterator from './helpers/iterator.js';

/** 
 * @license
 * sortBy.ts - Test suite for huetiful-js color sorting module. 
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

describe(`The sortBy module test suite `, function () {
  let colors = ['blue', 'pink', 'yellow', 'green'];
  var data = {
    sortBySaturation: {
      params: [colors, 'asc', 'lch'],
      description: 'Sorts colors by saturation value in `asc` order',
      expect: jasmine.arrayContaining(colors)
    },
    sortByLightness: {
      params: [colors, 'asc', 'lch'],
      description: 'Sorts colors by lightness value in `asc` order',
      expect: jasmine.arrayContaining(colors)
    },
    sortByLuminance: {
      params: [colors, 'asc'],
      description: 'Sorts colors by luminance value in `asc` order',
      expect: jasmine.arrayContaining(colors)
    },
    sortByDistance: {
      params: [colors, 'brown', 'asc'],
      description: 'Sorts colors by distance value in `asc` order',
      expect: jasmine.arrayContaining(colors)
    },
    sortByContrast: {
      params: [colors, 'black', 'asc'],
      description: 'Sorts colors by distance value in `asc` order',
      expect: jasmine.arrayContaining(colors)
    },
    sortByHue: {
      params: [colors, 'asc', 'lch'],
      description: 'Sorts colors by hue angle in `asc` order',
      expect: jasmine.arrayContaining(colors)
    }
  };

  _iterator(sortBy, data);
});

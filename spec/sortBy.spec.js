import * as sortBy from '../src/sortBy.js';
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
  var sortBySpec = {
    sortByChroma: {
      params: [['blue', 'pink', 'yellow', 'green'], 'asc', 'lch'],
      description: 'Sorts colors by saturation value in `asc` order',
      expect: ['pink', 'green', 'yellow', 'blue']
    },
    sortByLightness: {
      params: [['blue', 'pink', 'yellow', 'green'], 'asc', 'lch'],
      description: 'Sorts colors by lightness value in `asc` order',
      expect: ['blue', 'green', 'pink', 'yellow']
    },
    sortByLuminance: {
      params: [['blue', 'pink', 'yellow', 'green'], 'asc'],
      description: 'Sorts colors by luminance value in `asc` order',
      expect: ['blue', 'green', 'pink', 'yellow']
    },
    sortByDistance: {
      params: [['blue', 'pink', 'yellow', 'green'], 'brown', 'asc'],
      description: 'Sorts colors by distance value in `asc` order',
      expect: ['pink', 'green', 'blue', 'yellow']
    },
    sortByContrast: {
      params: [['blue', 'pink', 'yellow', 'green'], 'black', 'asc'],
      description: 'Sorts colors by distance value in `asc` order',
      expect: ['blue', 'green', 'pink', 'yellow']
    },
    sortByHue: {
      params: [['blue', 'pink', 'yellow', 'green'], 'asc', 'lch'],
      description: 'Sorts colors by hue angle in `asc` order',
      expect: ['pink', 'yellow', 'green', 'blue']
    }
  };

  _iterator(sortBy, sortBySpec);
});

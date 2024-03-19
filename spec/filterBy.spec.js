import * as filterBy from '../src/filterBy.js';
import _iterator from './helpers/iterator.js';
import 'jasmine';
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

  var filterBySpec = {
    filterByContrast: {
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
        'green',
        3.05,
        12
      ],
      description: 'Filters color by relative contrast',
      expect: ['#fbbf24', '#facc15', '#a3e635']
    },
    filterByHue: {
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
        60,
        220,
        'lch'
      ],
      description: 'Filters color by hue',
      expect: ['#fbbf24', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf']
    },
    filterByLuminance: {
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
        '>0.5',
        '<0.9'
      ],
      description: 'Filters color by luminance',
      expect: ['#fbbf24', '#facc15', '#a3e635', '#4ade80', '#2dd4bf']
    },
    filterByLightness: {
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
        45,
        69,
        'lch'
      ],
      description: 'Filters color by lightness',
      expect: [
        '#94a3b8',
        '#9ca3af',
        '#a1a1aa',
        '#a3a3a3',
        '#a8a29e',
        '#f87171',
        '#60a5fa',
        '#a78bfa',
        '#c084fc',
        '#e879f9',
        '#f472b6',
        '#fb7185'
      ]
    },
    filterByDistance: {
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
        'yellow',
        '<   70.05'
      ],
      description: 'Filters color by distance',
      expect: ['#fbbf24', '#facc15', '#a3e635']
    },
    filterByChroma: {
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
        70
      ],
      description: 'Filters color by saturation',
      expect: ['#fb923c', '#fbbf24', '#facc15', '#a3e635', '#e879f9']
    }
  };

  _iterator(filterBy, filterBySpec);
});

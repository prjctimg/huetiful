import * as colors from '../src/colors.js';
import _iterator from './helpers/iterator.js';
/** 
 * @license
 * colors.ts - Test suite for huetiful-js colors module. 
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

describe(`This test suite is for the colors module`, () => {
  var _data = {
    tailwindColors: {
      params: ['red'],
      description: 'Returns the swatches of red from 50 to 900',
      expect: [
        '#fef2f2',
        '#fee2e2',
        '#fecaca',
        '#fca5a5',
        '#f87171',
        '#ef4444',
        '#dc2626',
        '#b91c1c',
        '#991b1b',
        '#7f1d1d'
      ]
    },
    tailwindColors: {
      params: ['red', '900'],
      description: 'Returns the swatch of red at 900',
      expect: '#7f1d1d'
    },
    tailwindColors: {
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

  _iterator(colors, _data);

  it(`Returns the output of the bound array`, () => {
    expect(
      new colors.ColorArray([
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
      ]).output()
    ).toEqual([
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
    ]);
  });
  it(`Returns the bound color token`, () => {
    expect(new colors.Color('pink').output()).toEqual('pink');
  });
});

//

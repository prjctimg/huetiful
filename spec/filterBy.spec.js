import * as filterBy from '../lib/filterBy.esm.mjs';

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
  var data = {
    filterBySaturation: {
      start: 0.05,
      end: 1
    },
    filterByLightness: {
      start: 5,
      end: 100
    },
    filterByLuminance: {
      start: 0.05,
      end: 1
    },
    filterByHue: {
      start: 100,
      end: 360
    },
    filterByDistance: {
      against: 'blue',
      start: '>1.05'
    },
    filterByContrast: {
      against: 'green',
      start: '>=3'
    }
  };

  // Exclude funcs that take special params
  const funcs = Object.keys(data).filter(
    (func) => !'filterByContrast' || !'filterByDistance'
  );
  let colors = [
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
    '#720000'
  ].concat(
    '#ffff00',
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#720000',
    '#600000'
  );
  for (let idx = 0; idx < funcs.length; idx++) {
    var [current, start, end] = [
      funcs[idx],
      data[current]['start'],
      data[current]['end']
    ];
    it(`It filters colors by ${current}`, () => {
      expect(filterBy[current](colors, start, end)).toEqual(jasmine.anything());
    });
  }

  it(`Filters color by distance`, () => {
    expect(
      filterBy.filterByDistance(
        colors,
        data['filterByDistance']['against'],
        data['filterByDistance']['start']
      )
    ).toEqual(jasmine.anything());
  });

  it(`Filters color by contrast`, function () {
    expect(
      filterBy.filterByContrast(
        colors,
        data['filterByContrast']['against'],
        data['filterByContrast']['start']
      )
    ).toEqual(jasmine.anything());
  });
});

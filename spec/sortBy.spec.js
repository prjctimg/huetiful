import * as sortBy from '../lib/sortBy.esm.mjs';

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
  const funcs = ['sortBySaturation', 'sortByLightness', 'sortByLuminance'];
  let colors = ['blue', 'pink', 'yellow', 'green'];
  for (let idx = 0; idx < funcs.length; idx++) {
    it(`It sorts colors by ${funcs[idx]}`, function () {
      expect(sortBy[funcs[idx]](colors, 'asc')).toEqual(
        jasmine.arrayContaining(colors)
      );
    });
  }
  it(`Sorts color by contrast`, function () {
    expect(sortBy.sortByContrast(colors, 'black', 'asc')).toEqual(
      jasmine.arrayContaining(colors)
    );
  });
  it(`Sorts color by distance`, function () {
    expect(sortBy.sortByContrast(colors, 'black', 'asc')).toEqual(
      jasmine.arrayContaining(colors)
    );
  });
});

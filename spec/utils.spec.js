import * as utils from '../lib/utils.esm.mjs';

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

  it(`Gets the color's hue family`, () => {
    expect(utils.getHueFamily('cyan')).toBe('blue-green');
  });

  it(`Checks if a color is warm`, () => {
    expect(utils.isWarm('pink')).toEqual(true);
  });

  it(`Checks if a color is cool`, () => {
    expect(utils.isCool('pink')).toEqual(true);
  });

  it(`Gets the nearest/farthest contrast in a collection against the passed in color`, () => {
    expect(utils.getNearestContrast(sample, 'green')).toEqual(
      2.4061390502133424
    );
    expect(utils.getFarthestContrast(sample, 'green')).toBe(3.08355493246362);
  });

  it(`Gets the nearest/farthest lightness in a collection against the passed in color`, () => {
    expect(utils.getNearestLightness(sample, 'lch')).toBe(67.22120855010492);
    expect(utils.getFarthestLightness(sample, 'lch')).toBe(22.45669293295522);
  });

  it(`Checks if a color is achromatic or not`, () => {
    expect(utils.isAchromatic('gray')).toBe(true);
    expect(utils.isAchromatic('pink')).toBe(false);
  });

  // it(`Brightens/darkens the passed in color`, () => {
  //   expect(utils.darken(col, 0.5)).toBe(67.22120855010492);
  //   expect(utils.brighten(sample, '*0.3')).toBe(22.45669293295522);
  // });

  it(`Gets the nearest/farthest chroma in a collection against the passed in color`, () => {
    expect(utils.getNearestChroma(sample, 'lch')).toBe(67.22120855010492);
    expect(utils.getFarthestChroma(sample, 'lch')).toBe(22.45669293295522);
  });
  it(`Gets the nearest/farthest hue angle in a collection against the passed in color`, function () {
    expect(utils.getNearestHue(sample, 'lch')).toBe(12.462831644544274);
    expect(utils.getFarthestHue(sample, 'lch')).toBe(273.54920266436477);
  });

  it(`Gets the complimentary hue of the passed in color`, () => {
    expect(utils.getComplimentaryHue('purple')).toBe('#005700');
  });

  it(`Sets/Gets the specified channel of the passed in color`, () => {
    expect(utils.getChannel('lch.h')(utils.setChannel('lch.h')(col, 10))).toBe(
      10.695425416490899
    );
  });

  it(`Gets/Sets the luminance of the passed in color`, () => {
    expect(utils.getLuminance(utils.setLuminance('#a1bd2f', 0.5))).toBe(
      0.6788681447272358
    );
  });

  it(`Gets the overtone of the passed in color`, () => {
    expect(utils.overtone('cyan')).toBe('green');
    expect(utils.overtone('blue')).toBe(false);
  });

  it(`Gets the contrast of the passed in color`, () => {
    expect(utils.getContrast('black', 'white')).toBe(21);
  });
});

//

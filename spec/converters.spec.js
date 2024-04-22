// import * as converters from '../src/converters.js';
// import _iterator from './helpers/iterator.js';
/** 
 * @license
 * converters.js - Test suite for huetiful-js converters module. 
Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// describe(`This test suite checks the converter functions. `, () => {
//   var convertersSpec = {
//     color2hex: {
//       params: [{ l: 50, c: 31, h: 100, alpha: 0.5, mode: 'lch' }],
//       description: 'Converts any color to hexadecimal',
//       expect: '#7b794180'
//     },
//     tuple2object: {
//       params: [['lch', 50, 31, 100, 0.5]],
//       description: 'Converts a color tuple to an object with channels as keys',
//       expect: { l: 50, c: 31, h: 100, alpha: 0.5, mode: 'lch' }
//     },
//     num2color: {
//       params: [900],
//       description:
//         'Converts any number between 0 and 16,777,215 to an RGB color',
//       expect: '#001cbe'
//     },
//     color2num: {
//       params: ['#b2c3f1'],
//       description:
//         'Converts any recognizable color token to a number between 0 and 16,777,215',
//       expect: 11715569
//     },
//     temp2color: {
//       params: [2542],
//       description:
//         'Converts a number between 0 to 30,000 (Kelvins) to a hexadecimal string',
//       expect: '#ffa44a'
//     },
//     color2tuple: {
//       params: [
//         {
//           r: 0.4,
//           g: 0.3,
//           b: 0.7
//         },
//         'rgb'
//       ],
//       description:
//         'Converts a color object to an array containing channel values and the colorspace ',
//       expect: ['rgb', 0.4, 0.3, 0.7]
//     }
//   };
//   _iterator(converters, convertersSpec);
// });

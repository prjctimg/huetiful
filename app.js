import { color2hex, pastel } from './src/index.js';

// var x = {
//   sortBySpec: {
//     sortBySaturation: {
//       params: [['blue', 'pink', 'yellow', 'green'], 'asc', 'lch'],
//       description: 'Sorts colors by saturation value in `asc` order',
//       expect: ['pink', 'green', 'yellow', 'blue']
//     },
//     sortByLightness: {
//       params: [['blue', 'pink', 'yellow', 'green'], 'asc', 'lch'],
//       description: 'Sorts colors by lightness value in `asc` order',
//       expect: ['blue', 'green', 'pink', 'yellow']
//     },
//     sortByLuminance: {
//       params: [['blue', 'pink', 'yellow', 'green'], 'asc'],
//       description: 'Sorts colors by luminance value in `asc` order',
//       expect: ['blue', 'green', 'pink', 'yellow']
//     },
//     sortByDistance: {
//       params: [['blue', 'pink', 'yellow', 'green'], 'brown', 'asc'],
//       description: 'Sorts colors by distance value in `asc` order',
//       expect: ['pink', 'green', 'blue', 'yellow']
//     },
//     sortByContrast: {
//       params: [['blue', 'pink', 'yellow', 'green'], 'black', 'asc'],
//       description: 'Sorts colors by distance value in `asc` order',
//       expect: ['blue', 'green', 'pink', 'yellow']
//     },
//     sortByHue: {
//       params: [['blue', 'pink', 'yellow', 'green'], 'asc', 'lch'],
//       description: 'Sorts colors by hue angle in `asc` order',
//       expect: ['pink', 'yellow', 'green', 'blue']
//     }
//   },
//   utilsSpec: {
//     getMeanLuminance: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 30, h: 20, mode: 'lch' },
//           { l: 10, c: 40, h: 30, mode: 'lch' }
//         ]
//       ],
//       description: `Gets the mean luminance from the collection of colors.`,
//       expect: 0.051170743179012795
//     },
//     getMeanContrast: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 30, h: 20, mode: 'lch' },
//           { l: 10, c: 40, h: 30, mode: 'lch' }
//         ],
//         'blue'
//       ],
//       description: `Gets the mean contrast from the collection of colors against the specified color`,
//       expect: 1.6087955158902005
//     },
//     getMeanDistance: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 30, h: 20, mode: 'lch' },
//           { l: 10, c: 40, h: 30, mode: 'lch' }
//         ],
//         'blue'
//       ],
//       description: `Gets the mean distance from the collection of colors using the differenceHyab metric`,
//       expect: 147.44699388822093
//     },
//     getMeanHue: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 30, h: 20, mode: 'lch' },
//           { l: 10, c: 40, h: 30, mode: 'lch' }
//         ],
//         'lch'
//       ],
//       description: `Gets the mean hue angle from the collection of colors in the specified colorspace`,
//       expect: 29.999999999999996
//     },
//     getMeanLightness: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 30, h: 20, mode: 'lch' },
//           { l: 30, c: 40, h: 10, mode: 'lch' }
//         ],
//         'lch'
//       ],
//       description: `Gets the mean lightness value from the collection of colors in the specified colorspace`,
//       expect: 30
//     },
//     getMeanChroma: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 30, h: 20, mode: 'lch' },
//           { l: 10, c: 40, h: 10, mode: 'lch' }
//         ],
//         'lch'
//       ],
//       description: `Gets the mean chroma value from the collection of colors in the specified colorspace`,
//       expect: 30
//     },

//     getNearestHueFrom: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 10, h: 20, mode: 'lch' },
//           { l: 10, c: 40, h: 10, mode: 'lch' }
//         ],
//         { l: 5, c: 5, h: 5, mode: 'lch' },
//         'lch'
//       ],
//       description: `Gets the smallest hue distance between the colors in a collection against the specified color`,
//       expect: 5
//     },
//     getNearestChromaFrom: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 10, h: 20, mode: 'lch' },
//           { l: 10, c: 40, h: 10, mode: 'lch' }
//         ],
//         { l: 5, c: 5, h: 5, mode: 'lch' },
//         'lch'
//       ],
//       description: `Gets the smallest chroma distance between the colors in a collection against the specified color`,
//       expect: 5
//     },
//     getNearestLightnessFrom: {
//       params: [
//         [
//           { l: 40, c: 20, h: 40, mode: 'lch' },
//           { l: 20, c: 10, h: 20, mode: 'lch' },
//           { l: 10, c: 40, h: 10, mode: 'lch' }
//         ],
//         { l: 5, c: 5, h: 5, mode: 'lch' },
//         'lch'
//       ],
//       description: `Gets the smallest lightness distance between the colors in a collection against the specified color`,
//       expect: 5
//     },
//     getFarthestHueFrom: {
//       params: [
//         [
//           { l: 20, c: 20, h: 20, mode: 'lch' },
//           { l: 10, c: 10, h: 10, mode: 'lch' },
//           { l: 40, c: 40, h: 40, mode: 'lch' }
//         ],
//         { l: 10, c: 5, h: 80, mode: 'lch' },
//         'lch'
//       ],
//       description: `Gets the largest hue angle distance between the colors in a collection against the specified color`,
//       expect: 35
//     },
//     getFarthestChromaFrom: {
//       params: [
//         [
//           { l: 20, c: 20, h: 20, mode: 'lch' },
//           { l: 10, c: 10, h: 10, mode: 'lch' },
//           { l: 40, c: 40, h: 40, mode: 'lch' }
//         ],
//         { l: 5, c: 5, h: 5, mode: 'lch' },
//         'lch'
//       ],
//       description: `Gets the largest chroma distance between the colors in a collection against the specified color`,
//       expect: 35
//     },
//     getFarthestLightnessFrom: {
//       params: [
//         [
//           { l: 20, c: 20, h: 20, mode: 'lch' },
//           { l: 10, c: 10, h: 10, mode: 'lch' },
//           { l: 40, c: 40, h: 40, mode: 'lch' }
//         ],
//         { l: 5, c: 5, h: 5, mode: 'lch' },
//         'lch'
//       ],
//       description: `Gets the largest lightness distance between the colors in a collection against the specified color`,
//       expect: 35
//     },
//     getHueFamily: {
//       params: ['cyan'],
//       description: `Gets the color's hue family`,
//       expect: 'blue-green'
//     },
//     isCool: {
//       params: ['pink'],
//       description: `Gets the color's hue family`,
//       expect: true
//     },
//     getNearestContrast: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'green'],
//       description: `Gets the nearest/farthest contrast in a collection `,
//       expect: 2.4061390502133424
//     },
//     getFarthestContrast: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'green'],
//       description: `Gets the nearest/farthest contrast in a collection `,
//       expect: 3.08355493246362
//     },
//     getNearestLightness: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
//       description: `Gets the nearest/farthest lightness in a collection `,
//       expect: 72.61647882089876
//     },
//     getFarthestLightness: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
//       description: `Gets the nearest/farthest lightness in a collection `,
//       expect: 80.94668903360088
//     },
//     isAchromatic: {
//       params: ['gray'],
//       description: `Checks if a color is achromatic or not`,
//       expect: true
//     },
//     getNearestChroma: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
//       description: `Gets the nearest chroma in a collection `,
//       expect: 22.45669293295522
//     },
//     getFarthestChroma: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
//       description: `Gets the farthest chroma in a collection `,
//       expect: 67.22120855010492
//     },
//     getNearestHue: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
//       description: `Gets the nearest hue angle in a collection`,
//       expect: 12.462831644544274
//     },
//     getFarthestHue: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch'],
//       description: `Gets the nearest hue angle in a collection`,
//       expect: 273.54920266436477
//     },
//     getComplimentaryHue: {
//       params: ['purple'],
//       description: `Gets the complimentary hue of the passed in color`,
//       expect: '#005700'
//     },

//     overtone: {
//       params: ['cyan'],
//       description: `Gets the overtone of the passed in color`,
//       expect: 'green'
//     },
//     getContrast: {
//       params: ['black', 'white'],
//       description: `Gets the contrast of the passed in color`,
//       expect: 21
//     },
//     getLuminance: {
//       params: ['#ffc300'],
//       description: `Gets the luminance of the passed in color`,
//       expect: 0.6029021347719574
//     },
//     setLuminance: {
//       params: ['#ffc300', 0.7],
//       description: `Sets the luminance of the passed in color`,
//       expect: '#ffe180'
//     }
//   },
//   convertersSpec: {
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
//   },
//   colorsSpec: {
//     tailwindColors: {
//       params: ['red'],
//       description: 'Returns the swatches of red from 50 to 900',
//       expect: [
//         '#fef2f2',
//         '#fee2e2',
//         '#fecaca',
//         '#fca5a5',
//         '#f87171',
//         '#ef4444',
//         '#dc2626',
//         '#b91c1c',
//         '#991b1b',
//         '#7f1d1d'
//       ]
//     },
//     tailwindColors: {
//       params: ['red', '900'],
//       description: 'Returns the swatch of red at 900',
//       expect: '#7f1d1d'
//     },
//     tailwindColors: {
//       params: ['all', '300'],
//       description: 'Returns the swatches of color families at 300',
//       expect: [
//         '#cbd5e1',
//         '#d1d5db',
//         '#d4d4d8',
//         '#d4d4d4',
//         '#d6d3d1',
//         '#fca5a5',
//         '#fdba74',
//         '#fcd34d',
//         '#fde047',
//         '#bef264',
//         '#86efac',
//         '#6ee7b7',
//         '#5eead4',
//         '#7dd3fc',
//         '#93c5fd',
//         '#c4b5fd',
//         '#d8b4fe',
//         '#f0abfc',
//         '#f9a8d4',
//         '#fda4af'
//       ]
//     }
//   },
//   filterBySpec: {
//     filterByContrast: {
//       params: [
//         [
//           '#94a3b8',
//           '#9ca3af',
//           '#a1a1aa',
//           '#a3a3a3',
//           '#a8a29e',
//           '#f87171',
//           '#fb923c',
//           '#fbbf24',
//           '#facc15',
//           '#a3e635',
//           '#4ade80',
//           '#34d399',
//           '#2dd4bf',
//           '#38bdf8',
//           '#60a5fa',
//           '#a78bfa',
//           '#c084fc',
//           '#e879f9',
//           '#f472b6',
//           '#fb7185'
//         ],
//         'green',
//         3.05,
//         12
//       ],
//       description: 'Filters color by relative contrast',
//       expect: ['#fbbf24', '#facc15', '#a3e635']
//     },
//     filterByHue: {
//       params: [
//         [
//           '#94a3b8',
//           '#9ca3af',
//           '#a1a1aa',
//           '#a3a3a3',
//           '#a8a29e',
//           '#f87171',
//           '#fb923c',
//           '#fbbf24',
//           '#facc15',
//           '#a3e635',
//           '#4ade80',
//           '#34d399',
//           '#2dd4bf',
//           '#38bdf8',
//           '#60a5fa',
//           '#a78bfa',
//           '#c084fc',
//           '#e879f9',
//           '#f472b6',
//           '#fb7185'
//         ],
//         60,
//         220,
//         'lch'
//       ],
//       description: 'Filters color by hue',
//       expect: ['#fbbf24', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf']
//     },
//     filterByLuminance: {
//       params: [
//         [
//           '#94a3b8',
//           '#9ca3af',
//           '#a1a1aa',
//           '#a3a3a3',
//           '#a8a29e',
//           '#f87171',
//           '#fb923c',
//           '#fbbf24',
//           '#facc15',
//           '#a3e635',
//           '#4ade80',
//           '#34d399',
//           '#2dd4bf',
//           '#38bdf8',
//           '#60a5fa',
//           '#a78bfa',
//           '#c084fc',
//           '#e879f9',
//           '#f472b6',
//           '#fb7185'
//         ],
//         '>0.5',
//         '<0.9'
//       ],
//       description: 'Filters color by luminance',
//       expect: ['#fbbf24', '#facc15', '#a3e635', '#4ade80', '#2dd4bf']
//     },
//     filterByLightness: {
//       params: [
//         [
//           '#94a3b8',
//           '#9ca3af',
//           '#a1a1aa',
//           '#a3a3a3',
//           '#a8a29e',
//           '#f87171',
//           '#fb923c',
//           '#fbbf24',
//           '#facc15',
//           '#a3e635',
//           '#4ade80',
//           '#34d399',
//           '#2dd4bf',
//           '#38bdf8',
//           '#60a5fa',
//           '#a78bfa',
//           '#c084fc',
//           '#e879f9',
//           '#f472b6',
//           '#fb7185'
//         ],
//         45,
//         69,
//         'lch'
//       ],
//       description: 'Filters color by lightness',
//       expect: [
//         '#94a3b8',
//         '#9ca3af',
//         '#a1a1aa',
//         '#a3a3a3',
//         '#a8a29e',
//         '#f87171',
//         '#60a5fa',
//         '#a78bfa',
//         '#c084fc',
//         '#e879f9',
//         '#f472b6',
//         '#fb7185'
//       ]
//     },
//     filterByDistance: {
//       params: [
//         [
//           '#94a3b8',
//           '#9ca3af',
//           '#a1a1aa',
//           '#a3a3a3',
//           '#a8a29e',
//           '#f87171',
//           '#fb923c',
//           '#fbbf24',
//           '#facc15',
//           '#a3e635',
//           '#4ade80',
//           '#34d399',
//           '#2dd4bf',
//           '#38bdf8',
//           '#60a5fa',
//           '#a78bfa',
//           '#c084fc',
//           '#e879f9',
//           '#f472b6',
//           '#fb7185'
//         ],
//         'yellow',
//         '>70.05'
//       ],
//       description: 'Filters color by distance',
//       expect: ['#fbbf24', '#facc15', '#a3e635']
//     },
//     filterByChroma: {
//       params: [
//         [
//           '#94a3b8',
//           '#9ca3af',
//           '#a1a1aa',
//           '#a3a3a3',
//           '#a8a29e',
//           '#f87171',
//           '#fb923c',
//           '#fbbf24',
//           '#facc15',
//           '#a3e635',
//           '#4ade80',
//           '#34d399',
//           '#2dd4bf',
//           '#38bdf8',
//           '#60a5fa',
//           '#a78bfa',
//           '#c084fc',
//           '#e879f9',
//           '#f472b6',
//           '#fb7185'
//         ],
//         70
//       ],
//       description: 'Filters color by saturation',
//       expect: ['#fb923c', '#fbbf24', '#facc15', '#a3e635', '#e879f9']
//     }
//   },
//   generatorsSpec: {
//     discoverPalettes: {
//       params: [
//         [
//           '#ffff00',
//           '#00ffdc',
//           '#00ff78',
//           '#00c000',
//           '#007e00',
//           '#164100',
//           '#720000',
//           '#600000',
//           '#4e0000',
//           '#3e0000',
//           '#310000'
//         ],
//         'tetradic'
//       ],
//       description:
//         'Takes an array of colors and finds the best matches for a set of predefined palettes.',
//       expect: ['#310000', '#3e0000', '#4e0000', '#164100']
//     },
//     earthtone: {
//       params: ['pink', 'lch', { earthtones: 'clay', iterations: 5 }],
//       description:
//         'Creates a scale of a spline interpolation between an earthtone and a color.',
//       expect: ['#6a5c52', '#816a63', '#b38d86', '#e6b0ac', '#ffc1be']
//     },
//     hueShift: {
//       params: ['#3e0000'],
//       description: 'Generates a palette of hue shifted colors',
//       expect: [
//         '#3f0101',
//         '#2b1800',
//         '#002620',
//         '#2f1500',
//         '#321300',
//         '#3f0007',
//         '#3e0000',
//         '#561a17',
//         '#743356',
//         '#915077',
//         '#268fad',
//         '#cb8ebe',
//         '#fcaca7'
//       ]
//     },
//     interpolateSpline: {
//       params: [['b2c3f1', '#a1bd2f', '#f3bac1'], 'lch', 8, 'natural'],
//       description:
//         'Returns a spline interpolator function with customizable interpolation methods',
//       expect: [
//         '#b2c3f1',
//         '#2dd0f5',
//         '#00d5ae',
//         '#6aca4c',
//         '#c5b722',
//         '#fba859',
//         '#010101',
//         '#f3bac1'
//       ]
//     },
//     pairedScheme: {
//       params: ['green', { hueStep: 6, iterations: 4, tone: 'dark' }],
//       description:
//         'Creates a scheme that consists of a scheme color that is incremented by a hueStep to get the final hue to pair with',
//       expect: ['#008000', '#348e2a', '#79b36f', '#cfe4cb']
//     },
//     pastel: {
//       params: ['green'],
//       description: 'Creates a pastel variant of a color',
//       expect: ''
//     }
//   }
// };

console.log(color2hex(pastel('green')));

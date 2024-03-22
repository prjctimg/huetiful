import * as huetiful from '../src/index.js';
import { log } from 'console';

// (1. Parsing color tokens to different types
var [colArrWithAlpha, colorObj, namedColor, colorNum, colorHex, sample] = [
  ['rgb', 100, 30, 80, 0.2],
  { l: 20, c: 40, h: 80, mode: 'lch' },
  'pink',
  6000,
  '#fc3ba1',
  [
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
  ]
];

log(huetiful.color2hex(colorObj));
log(huetiful.num2color(colorNum));
log(huetiful.color2hex(colArrWithAlpha));
log(huetiful.color2tuple(colorHex, 'oklch'));

// (2. Fetching swatches from bundled color maps
let swatches = huetiful.tailwindColors('all', '400');
log(swatches);
// (3. Getting and setting properties

// Setting luminance
let setLum = huetiful.setLuminance(colArrWithAlpha, 0.5);

// Check the color's initial luminance
log(huetiful.getLuminance(colArrWithAlpha));

log(huetiful.getLuminance(setLum));

// (4. Sorting and filtering collections of color

// sort colors by hue angle in descending order
console.log(huetiful.sortByHue(sample, 'desc'));

// Filter out colors that have chroma channel below 0.1
console.log(huetiful.filterByChroma(sample, 0.1));

// (5. Getting the stats of color attributes in a collection

let [meanHue, meanDistance] = [
  huetiful.getMeanHue(sample, 'lch'),
  huetiful.getMeanDistance(sample, 'blue')
];

// log the mean hue angle from the collection
log(meanHue);

// log the mean distance between colors in the collection
log(meanDistance);

// (6. Method chaining

// Chaining collection methods
let chain1 = huetiful
  .load(sample)
  .filterByHue(30, 80)
  .sortByHue('desc')
  .output();

// Chaining color methods we first convert it to a pastel color and then return the color visision deficiency simulation of the color for someone who has trouble seeing red.
let chain2 = huetiful.color(colorHex).pastel().deficiency('red', 0.4);

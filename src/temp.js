/**
 * @typedef { import('../types/types.js').ColorToken} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection
 * @typedef { import('../types/types.js').Colorspaces} Colorspaces
 * @typedef {import('../types/types.js').Stats} Stats
 
 */

import hue from './maps/hue.js';
import { floorCeil, inRange, keys } from './fp';
import { get } from './get.js';

/**
 * Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param {ColorToken} color The color to check the temperature.
 * @returns {'cool' | 'warm'} True if the color is cool else false.
 * @example
 *
 * import { isCool } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(isCool(sample[2]));
// false

console.log(map(sample, isCool));

// [ true,  false, true]



 */
function temp(color) {
  function temperaturePredicate(q, y) {
    return keys(hue).some((k) =>
      inRange(floorCeil(q), hue[k][y][0], hue[k][y][1])
    );
  }

  // First we need to get the hue value which we'll pass to the predicate
  return temperaturePredicate(get('lch.h')(color), 'cool') ? 'cool' : 'warm';
}

export { temp };

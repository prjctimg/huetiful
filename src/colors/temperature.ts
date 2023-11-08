//@ts-nocheck

import { getChannel } from '../core-utils/get.ts';
import hueTempMap from '../color-maps/samples/hueTemperature.js';
import type { Color } from '../paramTypes.ts';
import { getTemp } from '../core-utils/getTemp.ts';
import { floorCeil, inRange } from '../fp/number.ts';
import { min, max } from '../fp/array.ts';
import { customConcat, find } from '../fp/object.ts';
/**
 * @function
 * @description Checks if a color can be roughly classified as a cool color. Returns true if color is a cool color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 * @example
 * 
 * import { isCool } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];


console.log(isCool(sample[7]));
// false

console.log(map(sample, isCool));

// [ true,  false, truee]



 */
const isCool = (color: Color): boolean => {
  // First we need to get the hue value which we'll pass to the predicate
  let factor = getChannel('lch.h')(color);

  if (
    find(hueTempMap, (val, key) =>
      inRange(floorCeil(factor), val['cool'][0], val['cool'][1])
    )
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * @function
 * @description Checks if a color can be roughly classified as a warm color. Returns true if color is a warm color else false.
 * @param color The color to check the temperature.
 * @returns True or false.
 * @example import { isWarm } from 'huetiful-js'

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];



console.log(isWarm(sample[7]));
//true

console.log(map(sample, isWarm));


// [ false, true,  false]

 */
const isWarm = (color: Color): boolean => {
  const factor = getChannel('lch.h')(color);

  if (
    find(hueTempMap, (val, key) =>
      inRange(floorCeil(factor), val['warm'][0], val['warm'][1])
    )
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * @function
 * @description Checks the approximate maximum temperature that a color can have without losing its original hue. Does not take into account overtones (for now)
 * @param color The color to check its maximum temperature.
 * @returns The maximum temperature in Kelvins.
 * @example
 * 
 * import { maxTemp } from "huetiful-js"; 
 * 
 * console.log(maxTemp("#a1bd2f"))
// 7926

console.log(maxTemp("b2c3f1"))
// 9570
 */
const maxTemp = (color: Color): number => {
  // Get the hue value of the color
  const factor = getChannel('lch.h')(color);

  // Then  we check to see in what hue family it is and check the highest hue value for that family
  let hueRange = find(hueTempMap, (hue, key) =>
    inRange(factor, min(customConcat(hue)), max(customConcat(hue)))
  );

  let maxHue: number = max(customConcat(hueRange));

  let result = getTemp({
    l: getChannel('lch.l')(color),
    c: getChannel('lch.c')(color),
    h: maxHue,
    mode: 'lch'
  });

  return result;
};

/**
 * @function
 * @description Checks the approximate minimum temperature that a color can have without losing its original hue. Does not take into account overtones (for now)
 * @param color The color to check its minimum temperature.
 * @returns The minimum temperature in Kelvins.
 * @example
 * 
 * import { minTemp } from 'huetiful-js'
 * 
 * console.log(minTemp("#a1bd2f"))
// 2528

console.log(minTemp("b2c3f1"))
// 20107
 * 
 */
const minTemp = (color: Color): number => {
  // Get the hue value of the color
  const factor = getChannel('lch.h')(color);

  // Then  we check to see in what hue family it is and check the highest hue value for that family
  let hueRange = find(hueTempMap, (hue, key) =>
    inRange(factor, min(customConcat(hue)), max(customConcat(hue)))
  );

  let minHue: number = min(customConcat(hueRange));

  let result = getTemp({
    l: getChannel('lch.l')(color),
    c: getChannel('lch.c')(color),
    h: minHue,
    mode: 'lch'
  });

  return result;
};
export { isCool, isWarm, maxTemp, minTemp };

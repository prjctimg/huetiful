/* eslint-disable @typescript-eslint/ban-ts-comment */
// Returns the hue range where a color is found. If the hue Channel is falsy we return gray ?
// @ts-nocheck
import type { Color, hue } from '../paramTypes.js';
import hueTempMap from '../color-maps/samples/hueTemperature.js';
import { converter } from 'culori';
import { floorCeil, inRange } from '../fp/number.ts';
import { min, max } from '../fp/array.ts';
import { customConcat } from '../fp/object.ts';
/**
 *@function
 @description Gets the hue family which a a color belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".
 * @param color The color to query its shade or hue family.
 * @returns The name of the hue family for example red or green.
 * @example
 * 
 * import { getHue } from 'huetiful-js'


console.log(getHue("#310000"))
// red
 */
const getHue = (color: Color): hue => {
  // First convert the color to LCH

  color = converter('lch')(color);

  // Helpers to fetch the highest/lowest hue value per hue range
  const getMin = (hue: string): number => {
      return min(customConcat(hueTempMap[hue]));
    },
    getMax = (hue: string): number => {
      return max(customConcat(hueTempMap[hue]));
    };

  //Capure the hue value
  const factor: number | undefined = color['h'];

  //  First check if hue is falsy. If true return the string "gray"
  // The predicate-func
  const cb = (factor: number | false, hue: string) =>
    factor === undefined || NaN || false
      ? 'gray'
      : inRange(floorCeil(factor), getMin(hue), getMax(hue));

  // We then pick the truthy key by returning an object which returns true for the inRange predicate

  let result: string;

  for (const hue in hueTempMap) {
    if (cb(factor, hue)) {
      result = hue;
    }
  }

  return result;
};

export { getHue };

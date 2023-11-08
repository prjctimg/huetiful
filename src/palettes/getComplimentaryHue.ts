// @ts-nocheck
import hueTempMap from '../color-maps/samples/hueTemperature';
import { getChannel } from '../core-utils/get';
import { min, max } from '../fp/array.ts';
import { customConcat, find } from '../fp/object.ts';
import { adjustHue, floorCeil, inRange } from '../fp/number.ts';
import type { Color } from '../paramTypes';
import { isAchromatic } from '../colors/achromatic';
import { setChannel } from '../core-utils/set';
import { formatHex8 } from 'culori';

/**
 * @function
 * @description Gets the complementary hue of the passed in color. The function is internally guarded against achromatic colors.
 * @param color The color to retrieve its complimentary hue.
 * @param colorObj Optional boolean whether to return an object with the result color hue family or just the result color. Default is false.
 * @returns An object with the hue family and complimentary color as keys.
 * @example
 *import { getComplimentaryHue } from "huetiful-js";
 *
 * 
console.log(getComplimentaryHue("pink", true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))
// #005700ff
 */
const getComplimentaryHue = (
  color: Color,
  colorObj = false
): { hue: string; color: Color } | Color => {
  let modeChannel = 'lch.h';
  // A complementary hue is 180 deg from the hue value of the passed in color

  let complementaryHue: number | false;

  if (!isAchromatic(color)) {
    complementaryHue = adjustHue(getChannel(modeChannel)(color) + 180);
  } else {
    complementaryHue = false;
  }
  let result;
  // Find the hue family which the color belongs to
  let hueFamily: string = find(hueTempMap, (val) => {
    // Get the min and max hue value for each hue family
    let minHue = min(customConcat(val)),
      maxHue = max(customConcat(val));

    if (complementaryHue) {
      return inRange(floorCeil(complementaryHue), minHue, maxHue);
    } else {
      return complementaryHue;
    }
  });

  if (complementaryHue) {
    result = {
      hue: hueFamily,
      color: formatHex8(setChannel(modeChannel)(color, complementaryHue))
    };
  } else {
    result = { hue: 'gray', color: color };
  }

  return (colorObj && result) || result['color'];
};

export { getComplimentaryHue };

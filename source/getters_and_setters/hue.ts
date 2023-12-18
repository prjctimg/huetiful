//This module contains getNearestHue,getFarthestHue,getNearestHue and getFarthestHue which are collection based utils that return the color with the queried factor.

import { getChannel, setChannel } from "../getters_and_setters";
import hueTempMap from "../color-maps/samples/hueTemperature.js";
import {
  adjustHue,
  sortedArr,
  min,
  max,
  customConcat,
  inRange,
  random,
  checkArg,
} from "../fp";
import type { Color, HueFamily, HueColorSpaces, Factor } from "../types.js";
import { toHex } from "../converters/toHex.js";

const baseFunc2 = (factor: number) => {
  return Object.keys(hueTempMap)
    .map((hue) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      const hueVals = customConcat(hueTempMap[hue]);
      // @ts-ignore
      const minVal = min(hueVals);
      // @ts-ignore
      const maxVal = max(hueVals);
      const bool = customConcat(hueTempMap[hue]).some(() =>
        inRange(factor, minVal, maxVal)
      );

      if (bool) {
        return hue;
      }
    })
    .filter((val) => typeof val === "string")[0];
};

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
  mode?: HueColorSpaces,
  colorObj = false
): { hue: string; color: Color } | Color => {
  const modeChannel = `${mode}.h`;
  // A complementary hue is 180 deg from the hue value of the passed in color

  const complementaryHue: number = adjustHue(
    getChannel(modeChannel)(color) + 180 * random(0.965, 1)
  );

  // eslint-disable-next-line prefer-const

  let result: Color | { hue: string; color: Color };
  if (complementaryHue) {
    result = {
      hue: baseFunc2(complementaryHue),
      color: toHex(setChannel(modeChannel)(color, complementaryHue)),
    };
  } else {
    result = { hue: "gray", color: color };
  }

  return (colorObj && result) || result["color"];
};

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
const getHueFamily = (color: Color, mode?: HueColorSpaces): HueFamily => {
  //Capture the hue value
  const factor: number | undefined = getChannel(`${mode}.h`)(color);

  return baseFunc2(factor) as HueFamily;
};

const baseFunc = (colors, colorSpace, colorObj, order) => {
  const factor: Factor = "hue";
  const result: Array<{ factor: number; name: Color }> = sortedArr(
    factor,
    predicate(colorSpace as string),
    order,
    true
  )(colors).filter((el) => el[factor] !== undefined);

  let value;

  if (result.length > 0) {
    if (colorObj) {
      value = result[0];
    } else {
      value = result[0][factor];
    }
  }

  return value;
};
const mode = (colorSpace: string): string => `${checkArg(colorSpace, "jch")}.h`;
// The hue value of our color which we are using for comparison

// The callback to invoke per color in the passed in collection.
// Return the absolute value since hue is a cyclic value which can either be  in clockwise/anti-clockwise.
//This means that the color object with the smallest hue value is the  nearest color/hue.

// Callback func for the getNearestHue and getFarthestHue utils. The funny thing is that most of the code is similar with minor changes here and there
const predicate = (colorSpace: string) => (color: Color) => {
  return getChannel(mode(colorSpace))(color) || undefined;
};

/**
 *@function
 * @description Gets the smallest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the smallest hue value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The smallest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { getNearestHue } from 'huetiful-js'

let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getNearestHue(sample, 'lch'))
// 12.462831644544274
 */
const getNearestHue = (
  colors: Color[],
  colorSpace?: HueColorSpaces | string,
  colorObj = false
): number | { factor: number; color: Color } => {
  return baseFunc(colors, colorSpace, colorObj, "asc");
};

/**
 *@function
 * @description Gets the largest hue value from the passed in colors.
 * @param colors The array of colors to query the color with the largest hue value.
 * @param colorSpace The mode color space to perform the computation in.
 * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
 * @returns The largest hue value in the colors passed in or a custom object.
 * @example
 * 
 * import { getFarthestHue } from 'huetiful-js'
let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']

console.log(getFarthestHue(sample, 'lch'))
// 273.54920266436477
 */
const getFarthestHue = (
  colors: Color[],
  colorSpace?: HueColorSpaces,
  colorObj = false
): number | { factor: number; color: Color } => {
  return baseFunc(colors, colorSpace, colorObj, "desc");
};

export { getFarthestHue, getNearestHue, getHueFamily, getComplimentaryHue };

/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature and chroma-js
 **/

//  @ts-nocheck
import { useMode, modeLrgb } from "culori/fn";
import { temp2Color } from "./temp2Color.ts";
import type { ColorToken } from "../types.js";
import { toHex } from "./toHex.ts";

/**
 * @description Returns the temperature value in Kelvins of the passed in color.
 * @param color The color to query its temperature value
 * @returns The color's temperature in Kelvins.
 * @example
 * 
 * import { getTemp } from 'huetiful-js'

console.log(getTemp('#a1bd2f'))
// 2542
 */

const getTemp = (color: ColorToken): number => {
  const { round } = Math;
  //Store the color in an object with the RGB channels normalized to [0,1]
  // Add a color obj for rgb using culori
  const toRgb = useMode(modeLrgb);
  const src = toRgb(toHex(color));
  // Allocate the red and blue channels to variables
  const r: number = src["r"],
    b: number = src["b"];
  let minTemp = 1000;
  let maxTemp = 40000;
  const eps = 0.4;
  let temp: number;
  while (maxTemp - minTemp > eps) {
    temp = (maxTemp + minTemp) * 0.5;
    const rgb = temp2Color(temp, false);
    if (rgb["b"] / rgb["r"] >= b / r) {
      maxTemp = temp;
    } else {
      minTemp = temp;
    }
  }
  return round(temp);
};

export { getTemp };

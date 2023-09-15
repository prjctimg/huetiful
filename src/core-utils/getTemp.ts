/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature and chroma-js
 **/

//  @ts-nocheck
import { converter, lrgb } from "culori";
import {
  gt,
  gte,
  divide,
  map,
  set,
  multiply,
  round,
  add,
  subtract,
} from "lodash-es";
import { temp2Color } from "./temp2Color.ts";
import type { Color } from "../paramTypes";

/**
 * @description Returns the temperature value in Kelvins of the passed in color.
 * @param color The color to query its temperature value
 * @returns The color's temperature in Kelvins.
 */

const getTemp = (color: Color): number => {
  const { round } = Math;
  //Store the color in an object with the RGB channels normalized to [0,1]
  // Add a color obj for rgb using culori
  const rgb = converter("rgb")(color);
  // Allocate the red and blue channels to variables
  const r = rgb["r"],
    b = rgb["b"];
  let minTemp = 1000;
  let maxTemp = 40000;
  const eps = 0.4;
  let temp;
  while (maxTemp - minTemp > eps) {
    temp = (maxTemp + minTemp) * 0.5;
    const rgb = setTemp(temp, false);
    if (rgb["b"] / rgb["r"] >= b / r) {
      maxTemp = temp;
    } else {
      minTemp = temp;
    }
  }
  return round(temp);
};

export { getTemp };

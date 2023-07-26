/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature and chroma-js
 **/

//  @ts-nocheck
import { lrgb } from "culori";
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
import { setTemp } from "./temperature2rgb.ts";
import type { baseColor } from "../paramTypes.ts";

/**
 * Returns the temperature value in Kelvins of the passed in color token.
 * @param color {baseColor}
 * @returns {number}
 */

const rgb2temperature = (color: baseColor) => {
  //Store the color in an object with the RGB channels normalized to [0,1]
  const rgb = lrgb(color);
  const rgbLimit = 255;
  const r = rgb["r"],
    g = rgb["g"],
    b = rgb["b"];
  map(rgb, (val, key) => set(rgb, key, multiply(val, rgbLimit)));

  let minTemp = 1000;
  let maxTemp = 40000;
  const eps = 0.4;
  let temp;
  while (gt(subtract(maxTemp, minTemp), eps)) {
    temp = multiply(add(maxTemp, minTemp), 0.5);
    const rgb = setTemp(temp);
    if (gt(b, 0)) {
      if (gte(divide(rgb["b"], rgb["r"]), divide(b, r))) {
        maxTemp = temp;
      } else {
        minTemp = temp;
      }
    } else if (rgb["g"] >= g) {
      maxTemp = temp;
    }
  }

  return round(temp);
};

export { rgb2temperature as getTemp };

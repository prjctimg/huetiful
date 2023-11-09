// @ts-nocheck

//ported from chroma-js

import type { Color } from '../paramTypes';
import { formatHex } from 'culori';

/**
 * @function
 * @description Converts the temperature value (in Kelvins) to an RGB color.
 * @param kelvin The number of Kelvins. From 0 to 30,000 .
 * @param hex Optional boolean parameter to either return an RGB color object or hexadecimal string. Default is true.
 * @returns color The color as a hexadecimal  or RGB color object.
 * @example
 * 
 * import { temp2Color } from 'huetiful-js'

console.log(temp2Color(2542))
// #ffa44a
 */
const temp2Color = (kelvin: number, hex = false): Color => {
  //Hue change starts at approx 655 Kelvins ???
  const eps = 655;
  const { log } = Math;
  // Checking if the passed in value is within a problematic range that returns negative values on the blue channel.
  //inRange(kelvin, 400, 650) ? (kelvin = eps) : kelvin;
  //
  const temp = kelvin / 100;

  let r: number, g: number, b: number;
  if (temp < 66) {
    r = 255;
    g =
      temp < 6
        ? 0
        : -155.25485562709179 -
        0.44596950469579133 * (g = temp - 2) +
        104.49216199393888 * log(g);
    b =
      temp < 20
        ? 0
        : -254.76935184120902 +
        0.8274096064007395 * (b = temp - 10) +
        115.67994401066147 * log(b);
  } else {
    r =
      351.97690566805693 +
      0.114206453784165 * (r = temp - 55) -
      40.25366309332127 * log(r);
    g =
      325.4494125711974 +
      0.07943456536662342 * (g = temp - 50) -
      28.0852963507957 * log(g);
    b = 255;
  }
  let result = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    mode: 'rgb'
  };

  if (hex) {
    return formatHex(result);
  } else {
    return result;
  }
};

export { temp2Color };

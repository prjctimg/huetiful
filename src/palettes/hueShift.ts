//@ts-nocheck

import { converter, formatHex } from "culori";
import {
  range,
  defaultTo,
  divide,
  map,
  multiply,
  subtract,
  add,
  lt,
} from "lodash-es";
import type { Color } from "../paramTypes.js";

const { ceil } = Math;
const adjustHue = (value = 0) =>
  lt(value, 0)
    ? (value += multiply(ceil(divide(-value, 360)), 360))
    : value % 360;

const lightnessMapper =
  (n: number) =>
  (start1: number, end1: number) =>
  (start2: number, end2: number) =>
    multiply(
      divide(subtract(n, start1), subtract(end1, start1)),
      add(subtract(end2, start2), start2)
    );

const opts = {};

/**
 *@description Generates a palette of hue shifted colors (as a colour becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.
 * @param color The color to use as the base of the hueshift. Colors are internally converted to LCH.
 * @param minLightness  Minimum lightness value (range 0-100).
 * @param maxLightness  Maximum lightness value (range 0-100).
 * @param num The number of iterations to do on the color. It equals the amount of elements in the result array.
 * @param hueStep  Controls how much the hue will shift at each iteration.
 * @param hex Optional boolen to return lch color objects or hex codes in the result array. Default is false  which returns LCH color objects.
 * @returns An array of colors.
 */

// Can we also lightnessMapper palette types to create hue shifted variants per each color in the palette ?
const hueShift = (color: Color, opts = {}, hex = false): Color[] => {
  color = converter("lch")(color);
  let { minLightness, maxLightness, hueStep, num } = opts;

  // Pass in default values if any of the opts is undefined
  minLightness = defaultTo(minLightness, 10);
  maxLightness = defaultTo(maxLightness, 90);
  hueStep = defaultTo(hueStep, 12);
  num = defaultTo(num, 6);

  let palette = [color];

  //Each iteration add a darker shade to the start of the array and a lighter tint to the end.
  range(1, num).map((val) => {
    //adjustHue checks hue values are clamped.
    let hueDark = adjustHue(subtract(color["h"], multiply(hueStep, val)));
    let hueLight = adjustHue(add(color["h"], multiply(hueStep, val)));

    // Here we use lightnessMapper to calculate our lightness values which takes a number that exists in range [0,1].
    const lightnessDark = lightnessMapper(val)(0, 4)(color["l"], minLightness);

    const lightnessLight = lightnessMapper(val)(0, 4)(color["l"], maxLightness);

    palette.push({
      l: lightnessDark,
      c: color["c"],
      h: hueDark,
      mode: "lch",
    });

    palette.unshift({
      l: lightnessLight,
      c: color["c"],
      h: hueLight,
      mode: "lch",
    });
  });

  return hex ? map(palette, formatHex) : palette;
};

export { hueShift };

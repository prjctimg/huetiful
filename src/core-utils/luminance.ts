//@ts-nocheck
import { converter, interpolate, wcagLuminance } from "culori";
import {
  lt,
  gt,
  eq,
  defaultTo,
  lte,
  divide,
  add,
  multiply,
  sum,
  isNumber,
} from "lodash-es";
import type { Color } from "../paramTypes.ts";

/**
 * Gets the luminance value of that color as defined by WCAG.
 * @param color The color to query.
 * @returns value The color's luminance value.
 */
const getLuminance = (color: Color) => wcagLuminance(color);

const { pow, abs } = Math;

/**
 * Sets the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance).
 * @param color
 * @param lum
 */
const luminance = (color, lum) => {
  const white = "#ffffff",
    black = "#000000";

  const EPS = 1e-7;
  let MAX_ITER = 20;

  if (lum !== undefined && isNumber(lum)) {
    // return pure black/white
    (eq(lum, 0) && defaultTo(lum, black)) ||
      (eq(lum, 1) && defaultTo(!lum, white));

    // compute new color using...

    let cur_lum = wcagLuminance(color);
    const mode = "rgb";
    color = converter(mode)(color);

    const test = (low, high) => {
      //Must add the overrides object to change parameters like easings, fixups, and the mode to perform the computations in.
      const mid = interpolate([low, high])(0.5);
      const lm = wcagLuminance(mid);
      if (lt(abs(lum - lm), EPS) || !MAX_ITER--) {
        // close enough
        return mid;
      }
      return gt(lm, lum) ? test(low, mid) : test(mid, high);
    };
    const rgb = gt(cur_lum, lum) ? test(black, color) : test(color, white);
    color = rgb;
    return color;
  }
  //   spreading the array values (r,g,b)

  return rgb2luminance(color);
};

const rgb2luminance = (color: Color): number => {
  color = converter("rgb")(color);

  // relative luminance
  // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
  return sum([
    multiply(0.2126, luminance_x(color["r"])),
    multiply(0.7152, luminance_x(color["g"])),
    multiply(0.0722, luminance_x(color["b"])),
  ]);
};

const luminance_x = (x: number) => {
  x /= 255;
  return lte(x, 0.03928)
    ? divide(x, 12.92)
    : pow(divide(add(x, 0.055), 1.055), 2.4);
};

export { luminance as setLuminance };
export { getLuminance };

//@ts-nocheck
import { useMode, modeLch } from "culori/fn";
import { inRange } from "../fp/number/inRange.js";
import { expressionParser } from "../fp/string/expressionParser.js";
import { toHex } from "../converters/toHex.js";
import type { Color } from "../types.js";

/**
 * @function
 * @description Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted
 * @param color The color with the targeted opacity/alpha channel.
 * @param value The value to apply to the opacity channel. The value is between [0,1]
 * @returns color The resulting color. Returns an 8 character hex code.
 * @example
 * 
 * // Getting the alpha
console.log(alpha('#a1bd2f0d'))
// 0.050980392156862744

// Setting the alpha

let myColor = alpha('b2c3f1', 0.5)

console.log(myColor)

// #b2c3f180
 */

const alpha = (color: Color, value?: number | string): Color | number => {
  // We never perfom an operation on an undefined color. Defaults to pure black
  color = color || "black";

  const channel = "alpha";
  const lch = useMode(modeLch);
  const src: Color = lch(toHex(color));
  if (typeof value === "undefined" || null) {
    return src[channel];
  } else if (typeof value === "number") {
    if (inRange(value, 0, 1)) {
      src[channel] = value;
    } else {
      src[channel] = value / 100;
    }
  } else if (typeof value === "string") {
    expressionParser(src, channel, value);
  }
  return formatHex8(src);
};

export { alpha };

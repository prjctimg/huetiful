//@ts-nocheck
import { converter, formatHex8 } from "culori";
import {
  defaultTo,
  divide,
  inRange,
  isNumber,
  isString,
  isUndefined,
  set,
} from "lodash-es";
import type { Color } from "../paramTypes.ts";
import { expressionParser } from "./helpers.ts";

/**
 * @function
 * @description Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted
 * @param color The color with the targeted opacity/alpha channel.
 * @param value The value to apply to the opacity channel. The value is between [0,1]
 * @returns color The resulting color. Returns an 8 character hex code.
 */

const alpha = (color: Color, value?: number | string): Color | number => {
  // We never perfom an operation on an undefined color. Defaults to pure black
  defaultTo(color, "#000000");
  const src = converter("rgb")(color);
  let channel = "alpha";

  if (isUndefined(value)) {
    return src[channel];
  } else if (isNumber(value)) {
    inRange(value, 0, 1.0)
      ? (src[channel] = value)
      : (src[channel] = divide(100, value));
  } else if (isString(value)) {
    set(src, channel, defaultTo(src[channel], 1));
    expressionParser(src, channel, value);
  }
  return formatHex8(src);
};

export { alpha };

//@ts-nocheck
import { converter, formatHex8 } from "culori";
import { defaultTo, divide, inRange, isNumber, isUndefined } from "lodash-es";
import type { Color } from "../paramTypes.ts";

/**
 * @function
 * @description Sets the opacity of a color. Also gets the alpha value of the color if the value param is omitted
 * @param color The color with the targeted opacity/alpha channel.
 * @param value The value to apply to the opacity channel. The value is between [0,1]
 * @returns color The resulting color. Returns an 8 character hex code.
 */

const alpha = (color: Color, value?: number): Color | number => {
  // We never perfom an operation on an undefined color. Defaults to pure black
  defaultTo(color, "#000000");
  if (isUndefined(value)) {
    return formatHex8(color);
  } else if (isNumber(value)) {
    inRange(value, 0, 1.0) ? alpha : divide(alpha, 100);
    const src = converter("rgb")(color);

    src["alpha"] = value;

    return formatHex8(src);
  }
};

export { alpha };

import { converter, formatHex8 } from "culori";
import { defaultTo, divide, inRange, isNumber, isUndefined } from "lodash-es";
import type { baseColor } from "../paramTypes.ts";

//@ts-check

/**
 * Sets/gets the opacity of a color.
 *
 * @param color The color with the targeted opacity channel. Takes any valid color token.
 * @param value The value to apply to the opacity channel. The value is between [0,1]
 * @returns color The resulting color. Returns an 8 character hex code.
 */

const alpha = (color: baseColor, value?: number): baseColor | number => {
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

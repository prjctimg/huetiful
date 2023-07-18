import { converter, formatHex8 } from "culori";
import { defaultTo, divide, inRange, isNumber, isUndefined } from "lodash-es";

//@ts-check

/**
 * Sets/gets the opacity of a color. The value is between [0,1]
 *
 * @param color The color with the targeted opacity channel. Takes any valid color token.
 * @param value The value to apply to the opacity channel.
 * @returns {string} color The resulting color. Returns an 8 character hex code.
 */

const alpha = (color, value) => {
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

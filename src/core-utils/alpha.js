import { converter } from "culori";
import { isNumber } from "lodash-es";

//@ts-check

/**
 * Sets/gets the opacity of a color.
 *
 * @param color
 * @param value
 * @returns
 */

const alpha = (color, value) => {
  const src = converter("rgb")(color);

  if (alpha !== undefined && isNumber(alpha)) {
    src["alpha"] = alpha;
  }
  return src;
};

export { alpha };

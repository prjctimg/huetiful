import { defaultTo, multiply } from "lodash-es";
import { converter, formatHex } from "culori";
// ported froma chroma-js brighten

/**
 * Darkens the color by reducing the lightness channel. Internally the color space is Lab by default but any channel with a lightness channel or the HWB COLOR SPACE.
 * @param color
 * @param amount
 * @returns
 */
const darken = (color, amount) => {
  defaultTo(amount, 1);
  const mode = "lab";
  const Kn = 18;
  const lab = converter(mode)(color);
  lab["l"] -= multiply(Kn, amount);
  return formatHex(converter(mode)(lab));
};

const brighten = function (color, amount = 1) {
  return darken(color, -amount);
};

export { brighten, darken };

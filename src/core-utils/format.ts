import { has, isString, map, isObject, keys, isInteger } from "lodash-es";
import { converter } from "culori";
import { colors } from "../colors/colors.ts";
import type { baseColor } from "../paramTypes.ts";
import defaultPalette from "../color-maps/defaultTailwindPalette.ts";

import { num2rgb } from "./num2rgb.ts";

/**
 * @function
 * Parses different color tokens such as arrays,objects,integers , hex codes and TYailwind shades which are unsupported natively in CSS.
 * @param  color The color to query its format.
 * @returns color An 8 character hex code if you pass in an  integer or tailwind color like "slate" .Arrays are coerced to objects and color objects are returned as is.
 */
const format = (color: baseColor): string => {
  const black = "#000000";

  //First check if the color token is colorid using the Chroma constructor.
  // If not identifiable then check it against the keys of tailwind hues. If true return that hue at 500
  // If its an object then check if it has the mode param. If it doesnt stringify the keys of the object

  if (isInteger(color)) {
    return num2rgb(color);
  } else if (isString(color) && has(defaultPalette, color)) {
    return colors(color, "500");
  } else if (isObject(color) && (color.mode || keys(color).toString())) {
    return converter(mode)(color);
  } else {
    return black;
  }
};

export { format };

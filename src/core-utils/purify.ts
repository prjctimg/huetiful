import { has, isString, map, isObject, keys, isInteger } from "lodash-es";
import { converter } from "culori";
import colors from "../colors/colors.ts";
import type { baseColor } from "../paramTypes.ts";
import tailwindColors from "../color-maps/tailwindColors.ts";

import { num2rgb } from "./num2rgb.ts";

/**
 * @function
 * Converts all elements in array to hex values. Checks if the value is a color object with the mode key.
 * @param  arr
 * @returns
 */
const purify = (arr: baseColor[], mode: "rgb" | "hex"): string[] => {
  const result = map(arr, (val) => {
    //First check if the color token is valid using the Chroma constructor. :

    if (isInteger(val)) {
      return num2rgb(val);
    } else if (isString(val) && has(tailwindColors, val)) {
      return colors(val, "500");
    } else if (isObject(val) && (val.mode || keys(val).toString())) {
      return converter(mode)(val);
    } else {
      return "#000000";
    }

    // If not identifiable then check it against the keys of tailwind hues. If true return that hue at 500

    // If its an object then check if it has the mode param. If it doesnt stringify the keys of the object
  });

  return result;
};

export { purify };

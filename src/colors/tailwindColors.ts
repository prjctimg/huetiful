//@ts-nocheck

import { map, has, isUndefined, identity, get, isEqual } from "lodash-es";
import tailwindHues from "../color-maps/defaultTailwindPalette.ts";
import type { HueMap, ScaleValues } from "../paramTypes.ts";

/**
 * @function
 * @description Wrapper function that returns TailwindCSS color value(s) of the specified shade. If invoked with no parameters it returns an array of colors from 100 to 900. If invoked with parameter will return the specified shade vale,
 * @param  val The tone value of the shade. Values are in incrementals of 100. Both numeric (100) and its string equivalent ('100') are valid.
 * @returns color A hex string value or array of hex strings.
 *
 */
// Make it case insensetive.
const tailwindColors =
  (shade: keyof HueMap) =>
  (val?: keyof ScaleValues): string | string[] => {
    // This is a curried func that takes in the shade and returns a function that takes in a value from 100 thru 900

    const black = "#000000";

    // We check if the shade is a valid Tailwind shade if not we return pure black.
    const targetHue = has(tailwindHues, shade)
      ? get(tailwindHues, shade)
      : black;

    // If targetHue is black we simply return it
    if (isEqual(targetHue, black)) {
      return targetHue;
    } else if (isUndefined(val)) {
      return map(targetHue, (val) => identity(val));
    } else if (has(targetHue, val)) {
      return get(targetHue, val);
    } else {
      throw Error(
        `${val} is not a valid scale value. Values are in increments of 100 up to 900 e.g "200"`
      );
    }
  };

export { tailwindColors };

import { get, map, values, isUndefined, forEach, isEqual } from "lodash-es";
import tailwindColors from "../color-maps/defaultTailwindPalette.js";

export default function colors(hue, val) {
  // Store the TailwindCSS color map
  let defaultHue = "all";

  // First do an AND check on hue and val params. If true return the hue at the specified value.
  // If only the hue is defined return the whole array of hex codes for that color.
  // If only the value is defined return that color value for every hue.
  //Else throw a ReferenceError
  return isEqual(hue, defaultHue)
    ? map(tailwindColors, (hueType) => get(hueType, [val || "500"]))
    : hue && val
    ? get(tailwindColors[hue], val)
    : hue && isUndefined(val)
    ? values(tailwindColors[hue])
    : isUndefined(hue) && isUndefined(val)
    ? forEach(tailwindColors)
    : ReferenceError(
        `${val} is not a recognized token. Tokens for accessing a single color value are in increments of 100. Example purple(300)`
      );
}

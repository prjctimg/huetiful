import { get, map, values, isUndefined, forEach, isEqual } from "lodash-es";
import tailwindColors from "../color-maps/defaultTailwindPalette.js";

const colors = (hue, val) => {
  const defaultHue = "all";
  const black = "#000000";

  // First do an AND check on hue and val params. If true return the hue at the specified value.
  // If only the hue is defined return the whole array of hex codes for that color.

  // If only the value is defined return that color value for every hue.

  if (isEqual(hue, defaultHue)) {
    return map(tailwindColors, (hueType) => get(hueType, [val || "500"]));
  } else if (hue && val) {
    return get(tailwindColors[hue], val);
  } else if (hue && isUndefined(val)) {
    return values(tailwindColors[hue]);
  } else if (isUndefined(hue) && isUndefined(val)) {
    return black;
  }
};

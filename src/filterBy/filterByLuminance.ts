import { map, fromPairs, inRange, filter } from "lodash-es";
import { format } from "../core-utils/format.ts";
import { formatHex, converter, wcagLuminance } from "culori";

/**
 *  @function
 * Returns an array of colors in the specified luminance range
 * @param  colors The array of colors to filter.
 * @param  startLuminance The minimum end of the luminance range.
 * @param  endLuminance The maximum end of the luminance range.
 * @returns Array of filtered colors.
 */

const filterByLuminance = (
  colors = [],
  startLuminance = 0.05,
  endLuminance = 1
) => {
  colors = map(colors, (el) => converter("lrgb")(el));
  // Formatting color tokens to parseable type
  // Create an object that has the luminance and name of color as properties.
  var colorObjArr = map(colors, (color) =>
    fromPairs([
      ["luminance", wcagLuminance(color)],
      ["name", formatHex(color)],
    ])
  );

  return map(
    filter(colorObjArr, (color) =>
      inRange(color["luminance"], startLuminance, endLuminance)
    ),
    (color) => color["name"]
  );
};

export { filterByLuminance };

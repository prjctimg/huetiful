import { map, inRange, fromPairs, filter } from "lodash-es";

import { getChannel } from "../core-utils/get.ts";
import { converter, formatHex } from "culori";

//filterByHue takes an array of colors and
/**
 * @function
 * Returns colors in the specified hue ranges between 0 to 360 and color space.
 * @param {Array} colors The array of colors to filter.
 * @param {Number} startHue The minimum end of the hue range.
 * @param {Number} endHue The maximum end of the hue range.
 * @param {String}  mode The color space to work in. Default is LCH because it is perceptually uniform.
 * @returns {Array} Array of the filtered colors.
 */

const filterByHue = (colors = [], startHue = 200, endHue = 300) => {
  colors = map(colors, (el) => converter("lch")(el));

  // Color space and channel to query from.
  /* var colorArr = purify(colors); */
  var colorObjArr = map(colorArr, (el) =>
    fromPairs([
      ["hue", getChannel(el)("lch")],
      ["name", formatHex(el)],
    ])
  );

  // This variable stores the array that matches the filtering criteria defined by the start and end hues
  return map(
    filter(colorObjArr, (el) => inRange(el["hue"], startHue, endHue)),
    (el) => el["name"]
  );
};

export { filterByHue };

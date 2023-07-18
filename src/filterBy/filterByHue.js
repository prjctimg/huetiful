import _ from "lodash";
import purify from "../core-utils/purify.js";
import { getChannel } from "../core-utils/get.js";

//filterByHue takes an array of colors and
/**
 * @function filterByHue
 * Returns colors in the specified hue ranges between 0 to 360 and color space.
 * @param {Array} colors The array of colors to filter.
 * @param {Number} startHue The minimum end of the hue range.
 * @param {Number} endHue The maximum end of the hue range.
 * @param {String}  mode The color space to work in. Default is LCH because it is perceptually uniform.
 * @returns {Array} Array of the filtered colors.
 */

const filterByHue = (
  colors = [],
  startHue = 200,
  endHue = 300,
  mode = "lch"
) => {
  var getColor = _.nth;

  // Color space and channel to query from.
  var colorArr = purify(colors);
  var colorObjArr = _.map(colorArr, (val, key) =>
    _.fromPairs([
      ["hue", getChannel(val)(mode)],
      ["name", getColor(colors, key)],
    ])
  );

  // This variable stores the array that matches the filtering criteria defined by the start and end hues
  var filteredArr = _.filter(colorObjArr, (val) =>
    _.inRange(val.hue, startHue, endHue)
  );

  return _.map(filteredArr, (val) => val.name);
};

export { filterByHue };

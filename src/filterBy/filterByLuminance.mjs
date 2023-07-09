import _ from "lodash";
import purify from "../../core-utils/purify.mjs";
import { getLuminance } from "../../core-utils/helpers.mjs";

/**
 *  @function filterByLuminance
 * Returns an array of colors in the specified luminance range
 * @param {Array} colors The array of colors to filter.
 * @param {Number} startLuminance The minimum end of the luminance range.
 * @param {Number} endLuminance The maximum end of the luminance range.
 * @returns Array of filtered colors.
 * @see Uses chroma.luminance() https://vis4.net/chroma-js/#color-luminance
 */


export default (colors = [], startLuminance = 0.05, endLuminance = 1) => {
    var getColor = _.nth;
    var colorArr = purify(colors);
    var colorObjArr = _.map(colorArr, (val, key) => _.fromPairs([['luminance', getLuminance(val)], ['name', getColor(colors, key)]]));

    // This variable stores the array that matches the filtering criteria defined by the start and end hues
    var filteredArr = _.filter(colorObjArr, (val) => _.inRange(val.luminance, startLuminance, endLuminance)

    );

    return _.map(filteredArr, val => val.name);






};

import _ from "lodash";
import purify from "../../core-utils/purify.mjs";
import { getTemp } from "../../core-utils/helpers.mjs";

/**
 * @function filterByTemp
 * Returns an array of colors in the specified temperature range between 0 and 30,000 Kelvins.
 * @param colors The array of colors to filter.
 * @param {Number} startTemp The minimum end of the temperature range.
 * @param {Number} endTemp The maximum end of the temperature range.
 * @returns {Array} Array of the filtered colors.
 * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
 */


//TODO Could also specify warm|cool to quickly return the filtered array. This param overrides startTemp and endTemp.




export default (colors = [], startTemp = 1000, endTemp = 6000) => {


    var getColor = _.nth;
    var colorArr = purify(colors);
    var colorObjArr = _.map(colorArr, (val, key) => _.fromPairs([['temp', getTemp(val)], ['name', getColor(colors, key)]]));

    // This variable stores the array that matches the filtering criteria defined by the start and end hues
    var filteredArr = _.filter(colorObjArr, (val) => _.inRange(val.temp, startTemp, endTemp)

    );

    return _.map(filteredArr, val => val.name);


};

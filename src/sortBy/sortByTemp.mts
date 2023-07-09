import chroma from 'chroma-js';
import _ from 'lodash';
import purify from '../core-utils/purify.mjs';
import { getTemp } from '../core-utils/helpers.mjs';
import type { Colors, ColorSpaces } from '../colors/colors.js';

/**
 * @function sortByTemp
 * Sorts colors according to temperature value in Kelvins according to the temperature scale in Chroma.temperature(). Achromatic colors may return awkward results.
 * @param {Array<Color>} colors The array of colors to sort
 * @param {'warm'|'cool'} order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns [colors] An array of the sorted color values.
 * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
 */

export default function sortByTemp(colors: Colors, order: 'asc' | 'desc', mode: keyof ColorSpaces) {
    // Purifying the data.All colors are converted to the specified mode to ensure unbiased results.
    var colorArr = purify(colors, mode || 'rgb');
    // For fetching color value at specified index. Used to preserve original color name in the output.
    var getColor = _.nth;

    // Transforming each color in the array to an object with the temp and name key value pairs.
    var colorObjArr = _.map(colorArr, (val, index) =>
        _.fromPairs([
            ['name', getColor(colors, index)],
            ['temp', getTemp(val)]
        ])
    );

    //Sorting the color array of object by the 'temp' property in the specified order.
    var sortedColorArr = _.orderBy(colorObjArr, ['temp'], [order]);
    /* console.log(sortedColorArr) */
    return _.map(sortedColorArr, (val) => val.name);
}

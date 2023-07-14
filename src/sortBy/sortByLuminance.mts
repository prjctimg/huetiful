import _ from 'lodash';
import purify from '../core-utils/purify.mjs';
import { getLuminance } from '../core-utils/getLuminance';

// sortByLuminance
/**
 * Sorts colors according to the relative brightness as defined by WCAG definition.
 * @param {Array<string>} colors The array of colors to sort
 * @param {string} order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns [colors] An array of the sorted color values.
 * @see Uses chroma.luminance() https://vis4.net/chroma-js/#color-luminance
 */

// TODO Do color space differences affect color temperature.

export default function (colors, order) {
    var colorArr = purify(colors);
    var getColor = _.nth;
    var colorObjArr = _.map(colorArr, (val, key) =>
        _.fromPairs([
            ['name', getColor(colors, key)],
            ['luminance', getLuminance(val)]
        ])
    );

    //Use my own color maps because Chroma-js dosnt have ochre color
    return _.orderBy(colorObjArr, ['luminance']).map((val) => val.name);
}

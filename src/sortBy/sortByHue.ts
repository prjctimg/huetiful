import _ from 'lodash';
import purify from '../core-utils/purify.mjs';
import { getChannel } from '../core-utils/helpers.mjs';
import hslHueMap from '../color-maps/hslHueMap.mjs';
import { differenceEuclidean, nearest } from 'culori';
import type { Colors, HueColorSpaces } from '../colors/colors.js';

/**
 * @function sortByHue * Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported
 * @param {Array<any>} colors The array of colors to sort
 * @param {string} order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
 * @returns [colors] An array of the sorted color values.
 * @param {string} mode The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results.
 */

// Todo: Add the mode param so that users can select mode to work with. The default is
export default function sortByHue(
    colors: Colors,
    order: 'asc' | 'desc',
    mode: keyof HueColorSpaces
) {
    const tailwindBaseHues = _.keys({
        indigo: '#4f46e5',
        gray: '#4b5563',
        zinc: '#52525b',
        neutral: '#525252',
        stone: '#57534e',
        red: '#dc2626',
        orange: '#ea580c',
        amber: '#d97706',
        yellow: '#ca8a04',
        lime: '#65a30d',
        green: '#16a34a',
        emerald: '#059669',
        teal: '#0d9488',
        sky: '#0284c7',
        blue: '#2563eb',
        violet: '#7c3aed',
        purple: '#9333ea',
        fuchsia: '#c026d3',
        pink: '#db2777',
        rose: '#e11d48'
    });
}

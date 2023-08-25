import _ from 'lodash';
import type { Colors } from '../colors/colors';

// Sort by shade
// Create a map of shades
// Sort an array of colors according to shade family
/**
 * @function
 * Unlike opther sorting functions, sortByShade returns a map of the shade as key and an array of iits colors as values.
 * @param {U} colors
 * @param {*} order
 * @returns
 */

export default function sortByShade(colors: Colors, order: 'asc' | 'desc'): Colors {
    // The shades to taxonomify the colors against.
    // Store th tailwindcolorsNames in a var
    // Pass the color    var tailwindColorsHues =
    var dcf = {
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
    };

    /* var tailwindColorsHues = [
        { hue: 'indigo', base: '#4f46e5' },
        { hue: 'gray', base: '#4b5563' },
        { hue: 'zinc', base: '#52525b' },
        { hue: 'neutral', base: '#525252' },
        { hue: 'stone', base: '#57534e' },
        { hue: 'red', base: '#dc2626' },
        { hue: 'orange', base: '#ea580c' },
        { hue: 'amber', base: '#d97706' },
        { hue: 'yellow', base: '#ca8a04' },
        { hue: 'lime', base: '#65a30d' },
        { hue: 'green', base: '#16a34a' },
        { hue: 'emerald', base: '#059669' },
        { hue: 'teal', base: '#0d9488' },
        { hue: 'sky', base: '#0284c7' },
        { hue: 'blue', base: '#2563eb' },
        { hue: 'violet', base: '#7c3aed' },
        { hue: 'purple', base: '#9333ea' },
        { hue: 'fuchsia', base: '#c026d3' },
        { hue: 'pink', base: '#db2777' },
        { hue: 'rose', base: '#e11d48' }
    ] */
    // For every hue in tailwindcolorsNames. Create a key and store colors within its range found in the array to an array.
    var keys = _.keys(dcf).flatMap((VAL) => VAL);
    console.log(`The keys are ${keys}`);

    // Compare the colors against the tailwindColorsHex as a source of truth.
    /*    var d = nearest(keys, differenceEuclidean('hsl', [1, 1, 1]), hue => keys[hue])
       return console.log(d('#3f39da', 1)) */
    var getColor = _.nth;
    var colorObjArr = _.map(colorArr, (val, key) =>
        _.fromPairs([
            ['name', getColor(colors, key)],
            ['hue', getChannel(val)(mode)]
        ])
    );

    return _.orderBy(colorObjArr, ['hue'], [order]).map((value) => value.name);
}

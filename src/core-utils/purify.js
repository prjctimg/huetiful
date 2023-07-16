import _ from 'lodash';
import { converter, formatHex8 } from 'culori';
import colors from '../colors/colors.js';
import tailwindColors from '../color-maps/tailwindColors.js';

import { num2rgb } from './num2rgb.js';

/**
 * @function purify
 * Converts all elements in array to hex values. Checks if the value is a color object with the mode key.
 * @param  arr
 * @returns
 */
const purify = (arr, mode) => {
    return _.map(arr, (val) => {
        //First check if the color token is valid using the Chroma constructor
        return _.isInteger(val)
            ? num2rgb(val)
            : // If not identifiable then check it against the keys of tailwind hues. If true return that hue at 500
            _.isString(val) && _.has(tailwindColors, val)
                ? colors(val, '500')
                : // If its an object then check if it has the mode param. If it doesnt stringify the keys of the object
                _.isObject(val) && (val.mode || _.keys(val).toString())
                    ? converter(mode)(val)
                    : ReferenceError(`Not a valid color token`);
    });
};

export { purify };

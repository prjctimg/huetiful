import _ from 'lodash';
import chroma from 'chroma-js';
import { converter, formatHex8 } from 'culori';
import colors from '../colors/colors.mjs';
import tailwindColors from '../color-maps/tailwindColors.mjs';
import type { Colors } from '../colors/colors.js';

/**
 * @function purify
 * Converts all elements in array to hex values. Checks if the value is a color object with the mode key.
 * @param {Color | Array<Color>} arr
 * @returns
 */

export default function purify(arr: Colors, mode: keyof ColorSpaces) {
    //PEMDAS... this must always run first

    return _.map(arr, (val) => {
        //First check if the color token is valid using the Chroma constructor
        return chroma.valid(val)
            ? chroma(val).hex('auto')
            : // If not identifiable then check it against the keys of tailwind hues. If true return that hue at 500
            _.isString(val) && _.has(tailwindColors, val)
            ? colors(val, '500')
            : // If its an object then check if it has the mode param. If it doesnt stringify the keys of the object
            _.isObject(val) && (val.mode || _.keys(val).toString())
            ? converter(mode)(val)
            : ReferenceError(`Not a valid color token`);
    });
}

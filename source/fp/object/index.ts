import type { callback, Factor, Color } from "../../types";

function colorObj(factor: Factor, callback: callback) {
    return (color: Color) => {
        // @ts-ignore
        return { [factor]: callback(color), color: color };
    };
}

import { inRange } from "../number";
import { max, min } from "../array";

/**

 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} factor The value to compare against
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function customFindKey(collection: object, factor: number) {
    // If the color is achromatic return the string gray
    const propKeys = Object.keys(collection);

    const result: string | undefined = propKeys
        .filter((key) => {
            const hueVals = customConcat(collection[key]);
            // @ts-ignore
            const minVal = min(...hueVals);
            // @ts-ignore
            const maxVal = max(...hueVals);
            // Capture the min and max values and see if the passed in color is within that range
            return inRange(factor, minVal, maxVal);
        })
        .toString();

    return result;
}

function customConcat(hue: object) {
    const res = [];
    const { keys } = Object;
    if (typeof hue == "object") {
        const hueKeys = keys(hue);

        //@ts-ignore
        res.push(...hueKeys.map((key) => hue[key]));
    }
    // @ts-ignore
    return res.flat(1);
}

export { customFindKey, colorObj, customConcat }
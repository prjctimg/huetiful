import { colorObj } from "../object";
import { Factor, Color, Order, callback } from "../../types";
import { gt, gte, lt, lte, inRange } from "../number";

/**
 * @description Helper function for native sorting method for arrays.
 * @param factor The property to query.
 * @param order Either ascending or descending.
 * @returns A sorted array.
 */
function customSort(order: Order, factor?: Factor | string) {
    //  Special thanks to deechris27 on youtube
    // a-b gives asc order & b-a gives desc order
    factor = factor || 'factor';
    return (a, b) => {
        if (order === 'asc') {
            return a[factor] - b[factor];
        } else if (order === 'desc') {
            return b[factor] - a[factor];
        }
    };
}




/*
 * @function
 * Creates a custom object with a factor to pass to the predicate function.
 * @param factor The quality being queried.
 * @param cb The callback function for computing the factor's start.
 * @param colors The array of colors to iterate over.
 * @returns An array of objects.
 */
function colorObjArr(factor: Factor, callback) {
    return (colors: Color[]): Array<{ factor: Factor; color: Color; }> => {
        const cb = colorObj(factor, callback);
        // @ts-ignore
        return colors.map((color) => cb(color));
    };
}



// from the lodash implementation of _.min and _.max
const identity = (value) => {
    return value;
};
function baseExtremum(array: number[], iteratee, comparator) {
    var index = -1, length = array.length;

    while (++index < length) {
        var value = array[index], current = iteratee(value);

        if (current != null &&
            (computed === undefined
                ? current === current
                : comparator(current, computed))) {
            var computed = current, result = value;
        }
    }
    return result;
}
/**
 * @description Gets the smallest value in an array
 * @param array The array to retrieve minimum value
 * @returns The smallest number in the array
 */
function min(array: number[]): number {
    return array && array.length ? baseExtremum(array, identity, lt) : undefined;
}
/**
 * @description Gets the largest value in an array
 * @param array The array to retrieve maximum value
 * @returns The largest number in the array
 */
function max(array: number[]): number {
    return array && array.length ? baseExtremum(array, identity, gt) : undefined;
}


/**
 *  Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.
 * @param factor The property to query
 * @param callback The function to use for comparison.
 * @returns An array of colors or color objects.
 */
function sortedArr(factor: Factor, callback: callback, order: Order, colorObj = false) {
    return (colors: Color[]) => {
        const results: Color[] | Array<{ factor: number; color: Color; }> = colorObjArr(factor, callback)(colors);

        // Assign the value of colorObj to results variable
        // Sort the array using our customSort helper function
        results.sort(customSort(order, factor));

        // colorObj parameter is true return the array of color objects
        // else just return the color's name value.
        if (colorObj) {
            return results;
        } else {
            return results.map((color) => color["color"]);
        }
    };
}




/**
 * @description Filters an array according to the value of a color's queried factor
 * @param factor The property to query and use as filtering criteria
 * @param cb The function to use for comparison
 * @returns The filtered array
 */
const filteredArr =
    (factor: Factor, cb?: callback) =>
        (colors: Color[], start: number | string, end: number): Color[] => {
            let result: Color[];

            if (typeof start === "number") {
                result = colorObjArr(
                    factor,
                    cb
                )(colors)
                    .filter((color) => inRange(color[factor], start, end))
                    .map((color) => color["color"]);

                // If string split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
            } else if (typeof start === "string") {
                //The pattern to match
                const reOperator = /^(>=|<=|<|>)/;

                const value = /[0-9]*\.?[0-9]+/;

                // Array
                const val = value.exec(start)["0"],
                    op = reOperator.exec(start)["0"];

                const mapFilter = (test: (x: number, y: number) => boolean): Color[] => {
                    return colorObjArr(
                        factor,
                        cb
                    )(colors)
                        .filter((el) => test(el[factor], parseFloat(val)))
                        .map((el) => el["color"]);
                };
                switch (op) {
                    case "<":
                        result = mapFilter(lt);

                        break;
                    case ">":
                        result = mapFilter(gt);
                        break;
                    case "<=":
                        result = mapFilter(lte);
                        break;
                    case ">=":
                        result = mapFilter(gte);
                        break;
                }
            }
            return result;
        };



export { min, max, customSort, colorObjArr, sortedArr, filteredArr };

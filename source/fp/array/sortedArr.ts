import { Factor, Color, callback, Order } from "../../types";
import { colorObjArr } from "./colorObjArr";
import { customSort } from "./customSort";

/**
 *  Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.
 * @param factor The property to query
 * @param callback The function to use for comparison.
 * @returns An array of colors or color objects.
 */
const sortedArr =
  (factor: Factor, callback: callback, order: Order, colorObj = false) =>
  (colors: Color[]) => {
    const results: Color[] | Array<{ factor: number; color: Color }> =
      colorObjArr(factor, callback)(colors);

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

export { sortedArr };

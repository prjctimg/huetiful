import type { baseColor, factorMapper } from "../paramTypes.ts";
import { map, fromPairs, inRange, filter, orderBy } from "lodash-es";

/**
 * Creates a custom object with a factor to pass to the predicate function.
 * @param factor The quality being queried.
 * @param cb The callback function for computing the factor's value.
 * @param colors The array of colors to iterate over.
 * @returns An array of objects.
 */
const colorObjArr: factorMapper = (factor, cb) => (colors) =>
  map(colors, (el) =>
    fromPairs([
      [factor, cb(el)],
      ["name", el],
    ])
  );

const filteredArr =
  (factor: string) =>
  (colorObjArr: object[], start: number, end: number): baseColor[] =>
    map(
      filter(colorObjArr, (el) => inRange(el[factor], start, end)),
      (color) => color["name"]
    );

const sortedArr =
  (factor: string, cb: () => {}, order: string) =>
  (colorObjArr: factorMapper, colors: baseColor[]): baseColor[] =>
    map(
      orderBy(colorObjArr(factor, cb)(colors), factor, order),
      (el) => el["name"]
    );

export { colorObjArr, filteredArr, sortedArr };

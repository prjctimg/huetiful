import type { Color, factorMapper, predicate } from "../paramTypes.ts";
import {
  map,
  fromPairs,
  inRange,
  filter,
  orderBy,
  isString,
  isNumber,
  toNumber,
  lt,
  split,
  startsWith,
  gt,
  lte,
  gte,
} from "lodash-es";

/**
 * Creates a custom object with a factor to pass to the predicate function.
 * @param factor The quality being queried.
 * @param cb The callback function for computing the factor's start.
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
  (factor: string, cb?: (arg: Color) => number) =>
  (colors: Color[], start: number | string, end: number): Color[] => {
    /**
     * Higher order function over map,filter and colorObjArr.
     * @param test The predicate callback functions. Adds elements that return truthy.
     * @returns
     */
    const mapFilter = (test: typeof predicate): Color[] =>
      map(filter(colorObjArr(factor, cb)(colors), test), (el) => el["name"]);
    let result: Color[];

    if (isNumber(start)) {
      result = mapFilter((el) => inRange(el[factor], start, end));
      return result;
    } else if (isString(start)) {
      const pattern = /(>=|<|>|=<)/;

      let [sign, value] = split(start, pattern);

      switch (sign) {
        case "<":
          result = mapFilter(lt(el[factor], toNumber(value)));
          break;
        case ">":
          result = mapFilter(gt(el[factor], toNumber(value)));
          break;
        case "=<":
          result = mapFilter(lte(el[factor], toNumber(value)));
          break;
        case ">=":
          result = mapFilter(gte(el[factor], toNumber(value)));
          break;
      }
    }
    return result;
  };

const sortedArr: factorMapper = (factor, cb, order) => (colors) =>
  map(
    orderBy(colorObjArr(factor, cb)(colors), factor, order),
    (el) => el["name"]
  );
export { colorObjArr, filteredArr, sortedArr };

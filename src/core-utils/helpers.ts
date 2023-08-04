import { Color, factorMapper, predicate } from "../paramTypes.ts";
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
  flow,
  words,
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
/**
 *  Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.
 * @param factor
 * @param cb
 * @returns
 */
const filteredArr =
  (factor: string, cb?: (arg: Color) => number) =>
  (colors: Color[], start: number | string, end: number): Color[] => {
    let result: Color[];

    if (isNumber(start)) {
      result = map(
        filter(colorObjArr(factor, cb)(colors), (el) =>
          inRange(el[factor], start, end)
        ),
        (el) => el["name"]
      );
      return result;

      // If string split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
    } else if (isString(start)) {
      //The pattern to match
      let operator = /^(>=|<=|<|>)/,
        value = /[0-9]*\.?[0-9]+/;

      // Array
      let val = value.exec(start),
        op = operator.exec(start);

      function mapFilter(test: () => boolean) {
        return map(
          filter(colorObjArr(factor, cb)(colors), (el) =>
            test(el[factor], toNumber(val["0"]))
          ),
          (el) => el["name"]
        );
      }
      switch (op["0"]) {
        case "<":
          result = mapFilter(lt);

          break;
        case ">":
          result = mapFilter(gt);
          break;
        case "=<":
          result = mapFilter(lte);
          break;
        case ">=":
          result = mapFilter(gte);
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

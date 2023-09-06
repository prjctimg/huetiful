import { Color, factor, factorMapper } from "../paramTypes.ts";
import {
  map,
  slice,
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
  subtract,
  divide,
  min,
  multiply,
  toString,
} from "lodash-es";

/**
 * @function
 * @private
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
  (factor: factor, cb?: (arg: Color) => number) =>
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

      const mapFilter = (test: (x: number, y: number) => boolean): Color[] => {
        return map(
          filter(colorObjArr(factor, cb)(colors), (el) =>
            test(el[factor], toNumber(val["0"]))
          ),
          (el) => el["name"]
        );
      };
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

const sortedArr: factorMapper =
  (factor, cb, order, colorObj = false) =>
  (colors) =>
    map(orderBy(colorObjArr(factor, cb)(colors), factor, order), (el) =>
      colorObj ? el : el["name"]
    );

/**
 * @description Normalizes passed in values to 0 and 1
 * @param start
 * @param end
 */
const normalize = (num: number, start: number, end: number): number => {
  return multiply(num, subtract(end, start));
};

const adjustHue = (value = 0) =>
  lt(value, 0)
    ? (value += multiply(Math.ceil(divide(-value, 360)), 360))
    : value % 360;

/**
 * Checks if a number is a float.
 * @param num The number to query
 * @returns True if the number is an integer else false
 */
const isInt = (num: number) => /^-?[0-9]+$/.test(toString(num));

/**
 * @function
 * Rounds up or down a number based on the float value.
 * @param num The number to round up or down.
 * @returns An integer
 */
const floorCeil = (num: number): number => {
  const { ceil, floor } = Math;
  if (isInt(num)) {
    return num;
  } else {
    let strArr = split(toString(num), ".");
    let float = strArr[1];

    //If the decimal value is .4  and below it will be rounded down else it will be rounded up.
    return /^[0-4]$/.test(float.charAt(0)) ? floor(num) : ceil(num);
  }
};

/**
 * Performs arithmetic operations on colors by passing the arithmetic operator from the value if it is a string. It requires the src variable to be declared in the global scope of the invoking func.
 * @param src The color object.
 * @param channel The channel to set.
 * @param value The value to apply.
 */

const expressionParser = (
  src: Color,
  channel: string,
  value: string
): number => {
  const reOperator = /^(\*|\+|\-|\/)/,
    reValue = /[0-9]*\.?[0-9]+/;
  const sign = reOperator.exec(value),
    amt = reValue.exec(value);
  const cb = (amt: string) => toNumber(amt);
  switch (sign["0"]) {
    case "+":
      src[channel] += +cb(amt["0"]);
      break;
    case "-":
      src[channel] -= +cb(amt["0"]);
      break;
    case "*":
      src[channel] *= +cb(amt["0"]);
      break;
    case "/":
      src[channel] /= +cb(amt["0"]);
      break;
    default:
      src[channel] = +cb(amt["0"]);
  }
  return src;
};

export {
  adjustHue,
  colorObjArr,
  filteredArr,
  sortedArr,
  normalize,
  floorCeil,
  isInt,
  expressionParser,
};

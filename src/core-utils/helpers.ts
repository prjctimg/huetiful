// @ts-nocheck

import { Color, factor, factorMapper } from "../paramTypes.ts"
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
  set,
  keys,
  isArray,
  last,
  has,
  size,
  isPlainObject,
  replace,
  isLength,
} from "lodash-es"
import { num2rgb } from "./num2rgb.ts"
import { converter, formatHex, formatHex8 } from "culori"

/*
 
 * @function
 * @description argType is a contract that checks the argument passed in and applies the relevant parsing function for the data type passed in.
 * @param arg The argument to query
 * @param mutate Boolean value to determine whether a color token should be modified to hex before being returne. This is because off precision loss if colors are first converted to hex before being manipulated since different color spaces have different gamut limits.
 * @returns A recognizable or purified color token.
 
const argType = (arg: any, mutate = false): Color => {
  const arr =
      'If the color token is an array it must have the mode channel values in the respective and a string as the last element specifying the color space the passed in values belong to. For example [255,10,50,"rgb"] ',
    obj =
      'If the color token is an object it must have the mode property defined to specify the color space the channel values belong to. For example {r:30,g:100,b:0,mode:"rgb"}',
    num = "If the color token is a number it must be between 0 and 16,777,215",
    str =
      "If the color token is a string it will be treated as a hex code which can be of length 3,4,6 or 8 characters long and begin with the # symbol"

  if (typeof arg == "number") {
    return num2rgb(arg, mutate)
  } else if (isPlainObject(arg)) {
    return mutate ? formatHex8(arg) : arg
  } else if (isArray(arg)) {
    let mode: string = last(arg),
      color = {}

    // For each channel set the color object to have the the path[channel] and value of the channel as arg[index]
    color = map(mode, (channel, index) => set(color, channel, index)) && set(color, "mode", mode)

    return formatHex(color)
  } else if (isString(arg)) {
    return (startsWith(arg, "#", 0) && arg.length === 3) || 4 || 6
      ? formatHex(arg)
      : formatHex8(arg)
  } else {
    throw Error(
      `${arg} is an unrecognized color token. ${
        typeof arg === "number"
          ? num
          : typeof arg === "string"
          ? str
          : typeof arg === "object"
          ? obj
          : isArray(arg)
          ? arr
          : ""
      }`
    )
  }
}
 */
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
  )
/**
 *  Filters an array of color objects with a "factor"  property whose value is determined by a predicate or getter via the cb param.
 * @param factor
 * @param cb
 * @returns
 */
const filteredArr =
  (factor: factor, cb?: (arg: Color) => number) =>
  (colors: Color[], start: number | string, end: number): Color[] => {
    let result: Color[]

    if (isNumber(start)) {
      result = map(
        filter(colorObjArr(factor, cb)(colors), (el) =>
          inRange(el[factor], start, end)
        ),
        (el) => el["name"]
      )
      return result

      // If string split the the string to an array of signature [sign,value] with sign being the type of predicate returned to mapFilter.
    } else if (isString(start)) {
      //The pattern to match
      let operator = /^(>=|<=|<|>)/,
        value = /[0-9]*\.?[0-9]+/

      // Array
      let val = value.exec(start),
        op = operator.exec(start)

      const mapFilter = (test: (x: number, y: number) => boolean): Color[] => {
        return map(
          filter(colorObjArr(factor, cb)(colors), (el) =>
            test(el[factor], toNumber(val["0"]))
          ),
          (el) => el["name"]
        )
      }
      switch (op["0"]) {
        case "<":
          result = mapFilter(lt)

          break
        case ">":
          result = mapFilter(gt)
          break
        case "=<":
          result = mapFilter(lte)
          break
        case ">=":
          result = mapFilter(gte)
          break
      }
    }
    return result
  }

const sortedArr: factorMapper =
  (factor, cb, order, colorObj = false) =>
  (colors) =>
    map(orderBy(colorObjArr(factor, cb)(colors), factor, order), (el) =>
      colorObj ? el : el["name"]
    )

/**
 * @description Normalizes passed in values to 0 and 1
 * @param start
 * @param end
 */
const normalize = (num: number, start: number, end: number): number => {
  return multiply(num, subtract(end, start))
}

const adjustHue = (value = 0) =>
  lt(value, 0)
    ? (value += multiply(Math.ceil(divide(-value, 360)), 360))
    : value % 360

/**
 * Checks if a number is a float.
 * @param num The number to query
 * @returns True if the number is an integer else false
 */
const isInt = (num: number) => /^-?[0-9]+$/.test(toString(num))

/**
 * @function
 * Rounds up or down a number based on the float value.
 * @param num The number to round up or down.
 * @returns An integer
 */
const floorCeil = (num: number): number => {
  const { ceil, floor } = Math
  if (isInt(num)) {
    return num
  } else {
    let strArr = split(toString(num), ".")
    let float = strArr[1]

    //If the decimal value is .4  and below it will be rounded down else it will be rounded up.
    return /^[0-4]$/.test(float.charAt(0)) ? floor(num) : ceil(num)
  }
}

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
    reValue = /[0-9]*\.?[0-9]+/
  const sign = reOperator.exec(value),
    amt = reValue.exec(value)
  const cb = (amt: string) => toNumber(amt)
  switch (sign["0"]) {
    case "+":
      src[channel] += +cb(amt["0"])
      break
    case "-":
      src[channel] -= +cb(amt["0"])
      break
    case "*":
      src[channel] *= +cb(amt["0"])
      break
    case "/":
      src[channel] /= +cb(amt["0"])
      break
    default:
      src[channel] = +cb(amt["0"])
  }
  return src
}

/**
 * @function
 * Matches the chroma/saturation channel of any compliant color space
 * @param colorSpace The color space to match saturation/chroma channel.
 * @returns The mode channel string passed to getChannel()
 */
const matchChromaChannel = (colorSpace: HueColorSpaces | string): string => {
  // Matches any string with c or s
  const reChroma = /(s|c)/
  let ch = reChroma.exec(colorSpace)

  return reChroma.test(colorSpace)
    ? `${colorSpace}.${ch[0]}`
    : Error(`The color space ${colorSpace} has no chroma/saturation channel.`)
}

export {
  matchChromaChannel,
  adjustHue,
  colorObjArr,
  filteredArr,
  sortedArr,
  normalize,
  floorCeil,
  isInt,
  expressionParser,
}

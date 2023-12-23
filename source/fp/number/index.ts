import { getChannel } from "../../utils";
import { Color } from "../../types";
function adjustHue(value = 0) {
  if (value > 0) {
    return (value += Math.ceil(-value / 360) * 360);
  } else {
    return value % 360;
  }
}

function channelDifference(color: Color, modeChannel?: string) {
  return (subtrahend: Color) => {
    const cb = (color) => getChannel(modeChannel as string)(color);
    if (cb(color) < cb(subtrahend)) {
      return cb(subtrahend) - cb(color);
    } else {
      return cb(color) - cb(subtrahend);
    }
  };
}

// Comparison operators
function gt(x: number, y: number): boolean {
  return x > y;
}
function lt(x: number, y: number): boolean {
  return x < y;
}
function gte(x: number, y: number): boolean {
  return x >= y;
}
function lte(x: number, y: number): boolean {
  return x <= y;
}
function eq(x: number, y: number): boolean {
  return x === y;
}

/**
 * @function
 * @description Checks if a value is within the start and end range.
 * @param number The number to check.
 * @param start The minimum or starting value.
 * @param end The maximum or starting value.
 * @returns True if the number is in range else false.
 */

function inRange(number: number, start: number, end?: number): boolean {
  /* Built-in method references for those with the same name as other `lodash` methods. */
  Math.min;
  return number >= Math.min(start, end) && number < Math.max(start, end);
}

/**
 * @description Checks if a number is an integer or float.
 * @param num The number to query
 * @returns True if the number is an integer else false if it is a float.
 */
function isInteger(num: number | string) {
  const reInt = /^-?[0-9]+$/;
  return reInt.test(num.toString());
}

import modeRanges from "../../color-maps/samples/modeRanges";

/**
 * @function
 * @description Normalizes passed in channel value to a range accepted by color spaces as defined in Culori.
 * @param value The value to chec if its in the accepted range for the passed in mode channel
 * @param modeChannel A string defining the mode and channel ranges to use for comparison
 * @returns The normalized channel value or the passed in value if it was within range
 */
function normalize(value: number, modeChannel: string): number {
  const [mode, channel]: string[] = modeChannel.split(".");
  const [start, end]: number[] = modeRanges[mode][channel];
  const range = inRange(value, start, end);

  if (!range) {
    if (inRange(value, 0, 1)) {
      value = end * value;
    } else if (inRange(value, 1, 100)) {
      value = end * (value / 100);
    } else {
      throw Error(
        `The value ${value} is out of range for channel ${channel} of colorspace ${mode} can only accept a value between [0,1] or [0,100] with 0.5 or 50 being half of the channel range.`
      );
    }
  }
  return value;
}

/**
 * @function
 * @description Returns a random number between minimum and maximum bounds.
 * @param min The lower bound.
 * @param max The upper bound.
 * @returns A number.
 */
function random(min: number, max: number): number {
  if (min > max) {
    const mn = min;
    const mx = max;
    max = mn;
    min = mx;
  } else {
    return Math.random() * (max - min) + min;
  }
}

const { ceil, floor } = Math;
/**
 * @function
 * Rounds up or down a number based on the float value.
 * @param num The number to round up or down.
 * @returns An integer
 */

function floorCeil(num: number): number {
  if (!isInteger(num)) {
    const strArr = num.toString().split(".");
    const float = strArr[1];

    //If the decimal value is .4  and below it will be rounded down else it will be rounded up.
    const reFloorCeil = (float: string) => /^[0-4]$/.test(float.charAt(0));

    if (reFloorCeil(float)) {
      num = floor(num);
    } else {
      num = ceil(num);
    }
  }

  return num;
}

export {
  inRange,
  random,
  isInteger,
  floorCeil,
  adjustHue,
  channelDifference,
  lt,
  gt,
  gte,
  lte,
  eq,
  normalize,
};

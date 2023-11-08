// This module has number methods
// @ts-nocheck

const { ceil, floor } = Math;

/**
 * @description Normalizes passed in values to 0 and 1
 * @param start
 * @param end
 */
const normalize = (num: number, start: number, end: number): number => {
  return num * (end - start);
};

const random = (min: number, max: number): number => {
  if (min > max) {
    let mn = min;
    let mx = max;
    max = mn;
    min = mx;
  } else {
    return Math.random() * (max - min) + min;
  }
};

const adjustHue = (value = 0) => {
  if (value > 0) {
    return (value += ceil(-value / 360) * 360);
  } else {
    return value % 360;
  }
};

const inRange = (number: number, start: number, end?: number): boolean => {
  // If start is greater than end flip the values
  if (start > end) {
    // Store the values in temporary variable
    let s = start;
    let e = end((end = s)) && (start = e);
  }

  // If there's no end, then start = end and start = 0
  if (!end) {
    end = start;
    start = 0;
  }
  return number >= start && number <= end;
};

/**
 * Checks if a number is a float.
 * @param num The number to query
 * @returns True if the number is an integer else false
 */
const isInt = (num: number) => {
  const reInt = /^-?[0-9]+$/;
  return reInt.test(num.toString());
};

/**
 * @function
 * Rounds up or down a number based on the float value.
 * @param num The number to round up or down.
 * @returns An integer
 */
const floorCeil = (num: number): number => {
  if (isInt(num)) {
    return num;
  } else {
    let strArr = num.toString().split('.');
    let float = strArr[1];

    //If the decimal value is .4  and below it will be rounded down else it will be rounded up.
    const reFloorCeil = (float: string) => /^[0-4]$/.test(float.charAt(0));

    if (reFloorCeil(float)) {
      num = floor(num);
    } else {
      num = ceil(num);
    }
  }
  return num;
};

export { inRange, floorCeil, isInt, normalize, adjustHue, random };

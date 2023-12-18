/**
 * @function
 * @description Checks if a value is within the start and end range.
 * @param number The number to check.
 * @param start The minimum or starting value.
 * @param end The maximum or starting value.
 * @returns True if the number is in range else false.
 */
const inRange = (number: number, start: number, end?: number): boolean => {
  /* Built-in method references for those with the same name as other `lodash` methods. */
  Math.min;
  return number >= Math.min(start, end) && number < Math.max(start, end);
};

export { inRange };

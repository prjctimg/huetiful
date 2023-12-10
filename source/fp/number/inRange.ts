// @ts-nocheck

const inRange = (number: number, start: number, end?: number): boolean => {
  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
    nativeMin = Math.min;
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
};

export { inRange };

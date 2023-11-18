/**
 * @description Normalizes passed in values to 0 and 1
 * @param start
 * @param end
 */
const normalize = (num: number, start: number, end: number): number => {
  return num * (end - start);
};

export { normalize };

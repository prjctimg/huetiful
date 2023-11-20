/**
 * Checks if a number is a float.
 * @param num The number to query
 * @returns True if the number is an integer else false
 */
const isInt = (num: number) => {
  const reInt = /^-?[0-9]+$/;
  return reInt.test(num.toString());
};

export { isInt };

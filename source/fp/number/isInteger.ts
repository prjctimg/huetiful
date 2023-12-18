/**
 * @description Checks if a number is an integer or float.
 * @param num The number to query
 * @returns True if the number is an integer else false if it is a float.
 */
const isInteger = (num: number | string) => {
  const reInt = /^-?[0-9]+$/;
  return reInt.test(num.toString());
};

export { isInteger };

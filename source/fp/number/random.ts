/**
 * @function
 * @description Returns a random number between minimum and maximum bounds.
 * @param min The lower bound.
 * @param max The upper bound.
 * @returns A number.
 */
const random = (min: number, max: number): number => {
  if (min > max) {
    const mn = min;
    const mx = max;
    max = mn;
    min = mx;
  } else {
    return Math.random() * (max - min) + min;
  }
};

export { random };

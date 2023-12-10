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

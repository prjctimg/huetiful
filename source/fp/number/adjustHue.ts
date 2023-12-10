// @ts-nocheck

const adjustHue = (value = 0) => {
  if (value > 0) {
    return (value += Math.ceil(-value / 360) * 360);
  } else {
    return value % 360;
  }
};

export { adjustHue };

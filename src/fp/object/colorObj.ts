import type { callback, factor, Color } from '../../paramTypes';

// @ts-nocheck
const colorObj = (factor: factor, callback: callback) => (color: Color) => {
  return { [factor]: callback(color), name: color };
};

export { colorObj };

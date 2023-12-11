import type { callback, Factor, Color } from "../../types";

// @ts-nocheck
const colorObj = (factor: Factor, callback: callback) => (color: Color) => {
  return { [factor]: callback(color), name: color };
};

export { colorObj };

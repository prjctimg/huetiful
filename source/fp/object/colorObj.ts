import type { callback, Factor, ColorToken } from "../../types";

// @ts-nocheck
const colorObj =
  (factor: Factor, callback: callback) => (color: ColorToken) => {
    return { [factor]: callback(color), name: color };
  };

export { colorObj };

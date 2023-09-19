import { formatHex, formatHex8 } from "culori";
import {
  getChannel,
  getFarthestChroma,
  getNearestChroma,
  maxChroma,
  minChroma,
  alpha,
  darken,
  getLuminance,
  setLuminance,
  getTemp,
  temp2Color,
  getNearestHue,
  getFarthestHue,
} from "./dist/huetiful.esm.mjs";

let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"];

console.log(maxChroma(sample, "lch"));

// 67.22120855010492
console.log(
  formatHex8({
    r: 1,
    g: 0.6424549534953387,
    b: 0.2919643957148001,
    mode: "rgb",
  }),
);

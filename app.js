import { formatHex, formatHex8 } from "culori"
import { discoverPalettes } from "./dist/huetiful.esm.mjs"

let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#ffff00",
  "#310000",
  "#3e0000",
  "#4e0000",
  "#600000",
  "#720000",
]

<<<<<<< HEAD
console.log(discoverPalettes(sample))
=======
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
>>>>>>> b6a8452b1ab110b7367b1b178c2f33136175c11d

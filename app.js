import { formatHex } from "culori";
import { hueShift, pastel } from "huetiful-js";

console.log(pastel("blue", true));

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
];
console.log(sample.map((val) => pastel(val, true)));

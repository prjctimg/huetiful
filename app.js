import { formatHex, formatHex8 } from "culori"
import {
  minTemp,
  maxTemp,
  getTemp,
  num2rgb,
  rgb2num,
  base,
  discoverPalettes,
  earthtone,
  getHue,
  getComplimentaryHue,
  pairedScheme,
  pastel,
  filterByDistance,
} from "./dist/huetiful.esm.mjs"

let sample = [
  "#ffff00",
  "#00ffdc",
  "#00ff78",
  "#00c000",
  "#007e00",
  "#164100",
  "#720000",
  "#600000",
  "#4e0000",
]

console.log(filterByDistance(sample, "green", 0.001))

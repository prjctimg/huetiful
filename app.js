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
  overtone,
  getChannel,
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
]

console.log(getComplimentaryHue("pink", true))
//// { hue: 'blue-green', color: '#97dfd7ff' }

console.log(getComplimentaryHue("purple"))

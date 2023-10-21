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
  "yellow",
  "pink",
  "purple",
  "green",
  "green",
  "cyan",
]

console.log(discoverPalettes(sample))

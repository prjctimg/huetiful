
import _ from 'lodash'
import chroma from 'chroma-js'
import { adjustHue } from '../helpers/adjustHue.mjs';

export default function createPalettes(baseColor = { l: 0, c: 0, h: 0 }) {
  const targetHueSteps = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210]
  };

  const palettes = {};

  for (const type of Object.keys(targetHueSteps)) {
    palettes[type] = targetHueSteps[type].map((step) => ({
      mode: "lch",
      l: baseColor.l,
      c: baseColor.c,
      h: adjustHue(baseColor.h + step)
    }));
  }


  return palettes

}





function generate() {
  // choose a random base color
  const base = {
    l: 50 + Math.random() * 10,
    c: 60 + Math.random() * 10,
    h: Math.random() * 360,
    mode: "lch"
  };
}
createPalettes({ l: 70, c: 80, h: 70 })


//MUST make the function more generic
/**
 * Takes the palette object and returns the colorspace converted to hex. 
 * @param {} lchPaletteObj 
 */


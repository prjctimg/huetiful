import _ from 'lodash'
import chroma from 'chroma-js'



function adjustHue(value = 0) {
  if (value < 0)
    value += Math.ceil(-value / 360) * 360;

  return value % 360;
}


export function classicPalettes(baseColor = { l: 0, c: 0, h: 0 }) {
  const targetHueSteps = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210]
  };

  const palettes = {};
  _.each(targetHueSteps, (value, key) => {
    palettes[key] = targetHueSteps[key].map((step) => ({
      mode: "lch",
      l: baseColor.l,
      c: baseColor.c,
      h: adjustHue(baseColor.h + step)
    }))
  })


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
let palettes = classicPalettes({ l: 70, c: 80, h: 70 })
console.log(palettes)

//MUST make the function more generic



// Train  a network that can generate nice color scheme



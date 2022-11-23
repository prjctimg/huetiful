
function adjustHue(val) {
  if (val < 0) val += Math.ceil(-val / 360) * 360;

  return val % 360;
}

function createScientificPalettes(baseColor) {
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

  return palettes;
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

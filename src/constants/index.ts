// Extracted from The Color Strategist  color wheel. Each hue has two properties :warm and cool as well an [] for each prop with the signature [start,end]

const hue = {
  "red-purple": {
    warm: [343, 359],
    cool: [321, 342],
  },
  red: {
    warm: [21, 40],
    cool: [0, 20],
  },
  "yellow-red": {
    warm: [41, 54],
    cool: [55, 70],
  },
  yellow: {
    warm: [71, 90],
    cool: [91, 109],
  },
  "green-yellow": {
    warm: [110, 124],
    cool: [125, 140],
  },
  green: {
    warm: [141, 160],
    cool: [161, 180],
  },
  "blue-green": {
    warm: [181, 200],
    cool: [201, 220],
  },
  blue: {
    warm: [221, 235],
    cool: [236, 250],
  },
  "purple-blue": {
    warm: [271, 290],
    cool: [251, 270],
  },
  purple: {
    warm: [316, 320],
    cool: [291, 315],
  },
};

const limits = {
  cubehelix: {
    s: [0, 4.614],
    l: [0, 1],
  },
  lab: {
    l: [0, 100],
  },
  dlch: { l: [0, 100], c: [0, 51.484] },
  jab: {
    j: [0, 0.222],
  },
  jch: {
    j: [0, 0.221],
    c: [0, 0.19],
  },
  lch: { l: [0, 100], c: [0, 150] },
  lch65: { l: [0, 100], c: [0, 133.807] },
  lchuv: { l: [0, 100], c: [0, 176.956] },
  luv: { l: [0, 100] },
  oklab: { l: [0, 1] },
  oklch: { l: [0, 1], c: [0, 0.4] },
};

export { limits, hue };

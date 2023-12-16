// getters_and_setters/get.ts
import { converter } from "culori/fn";
import "culori/css";

// converters/toHex.ts
import "culori/css";
import { formatHex8, formatHex, colorsNamed } from "culori/fn";

// converters/num2rgb.ts
var num2rgb = (num, hex = false) => {
  if (typeof num === "number" && num >= 0 && num <= 16777215) {
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    const output = {
      r: r / 255,
      g: g / 255,
      b: b / 255,
      mode: "rgb"
    };
    if (hex) {
      return toHex(output);
    } else {
      return output;
    }
  } else {
    throw Error("unknown num color: " + num);
  }
};

// fp/misc.ts
var checkArg = (arg, def) => typeof arg === void 0 ? def : arg;
var getSaturationRange = (modeRanges, mode2, chromaChannel) => modeRanges[mode2.toLowerCase()][chromaChannel];
var getModeChannel = (mode2, key) => mode2.charAt(key);

// converters/toHex.ts
var toHex = (color2) => {
  let src = {};
  if (typeof color2 === "string" && !Object.keys(colorsNamed).some((el) => el === color2)) {
    return color2;
  } else {
    if (Array.isArray(color2)) {
      const mode2 = color2[0];
      const modeChannels = mode2.substring(mode2.length - 3);
      const channels = (src2, colorArr) => {
        colorArr.shift();
        if (colorArr.length === 4) {
          colorArr = colorArr.slice(0, 3);
        }
        return colorArr;
      };
      const channelMapper = (src2 = {}, mode3, colorArr) => {
        src2["mode"] = mode3;
        if (src2["mode"] === "rgb") {
          if (colorArr.some((ch) => Math.abs(ch) > 1)) {
            colorArr.map(
              (ch, key) => src2[getModeChannel(mode3, key)] = ch / 255
            );
          }
        } else {
          colorArr.map((ch, key) => src2[getModeChannel(mode3, key)] = ch);
        }
        return src2;
      };
      src["alpha"] = color2[4] || 1;
      src = channelMapper(src, modeChannels, channels(src, color2));
      src = src["alpha"] < 1 && formatHex8(src) || formatHex(src);
    } else if (typeof color2 === "number") {
      src = num2rgb(color2, true);
    } else {
      src = formatHex8(color2);
    }
    return src;
  }
};

// getters_and_setters/get.ts
var getChannel = (mc) => (color2) => {
  const [mode2, channel] = mc.split(".");
  const src = converter(mode2)(toHex(color2));
  if (channel) {
    return src[channel];
  } else {
    throw Error(`unknown channel ${channel} in mode ${mode2}`);
  }
};

// fp/string/matchChromaChannel.ts
var matchChromaChannel = (colorSpace) => {
  const reChroma = /(s|c)/;
  const ch = reChroma.exec(colorSpace);
  if (reChroma.test(colorSpace)) {
    return `${colorSpace}.${ch[0]}`;
  } else {
    throw Error(
      `The color space ${colorSpace} has no chroma/saturation channel.`
    );
  }
};

// fp/object/colorObj.ts
var colorObj = (factor2, callback) => (color2) => {
  return { [factor2]: callback(color2), name: color2 };
};

// fp/array/colorObjArr.ts
var colorObjArr = (factor2, callback) => (colors2) => {
  const cb4 = colorObj(factor2, callback);
  return colors2.map((color2) => cb4(color2));
};

// fp/array/customSort.ts
var customSort = (order, factor2) => {
  factor2 = factor2 || "factor";
  return (a, b) => {
    if (order === "asc") {
      return a[factor2] - b[factor2];
    } else if (order === "desc") {
      return b[factor2] - a[factor2];
    }
  };
};

// fp/array/sortedArr.ts
var sortedArr = (factor2, callback, order, colorObj2 = false) => (colors2) => {
  const results = colorObjArr(factor2, callback)(colors2);
  results.sort(customSort(order, factor2));
  if (colorObj2) {
    return results;
  } else {
    return results.map((color2) => color2["name"]);
  }
};

// colors/chroma.ts
var chromaDiff = (color2, colorSpace) => (subtrahend) => {
  const cs = matchChromaChannel(colorSpace);
  if (getChannel(cs)(color2) < getChannel(cs)(subtrahend)) {
    return getChannel(cs)(subtrahend) - getChannel(cs)(color2);
  } else {
    return getChannel(cs)(color2) - getChannel(cs)(subtrahend);
  }
};
var predicate = (colorSpace) => (color2) => getChannel(matchChromaChannel(colorSpace))(color2) || void 0;
var getNearestChroma = (color2, colors2, colorSpace) => {
  const factor2 = "saturation";
  const cb4 = chromaDiff(color2, colorSpace || "lch");
  const sortedObjArr = sortedArr(
    factor2,
    cb4,
    "asc",
    true
  )(colors2).filter((el) => el[factor2] !== void 0);
  return sortedObjArr[0][factor2];
};
var getFarthestChroma = (color2, colors2, colorSpace) => {
  const factor2 = "saturation";
  const cb4 = chromaDiff(color2, colorSpace || "lch");
  const sortedObjArr = sortedArr(
    factor2,
    cb4,
    "desc",
    true
  )(colors2).filter((el) => el[factor2] !== void 0);
  return sortedObjArr[0][factor2];
};
var minChroma = (colors2, colorSpace, colorObj2 = false) => {
  const factor2 = "saturation";
  const result = sortedArr(
    factor2,
    predicate(colorSpace || "lch"),
    "asc",
    true
  )(colors2).filter((el) => el[factor2] !== void 0);
  let value;
  if (result.length > 0) {
    if (colorObj2) {
      value = result[0];
    } else {
      value = result[0][factor2];
    }
  }
  return value;
};
var maxChroma = (colors2, colorSpace, colorObj2 = false) => {
  const factor2 = "saturation";
  const result = sortedArr(
    factor2,
    predicate(colorSpace || "lch"),
    "desc",
    true
  )(colors2).filter((el) => el[factor2] !== void 0);
  let value;
  if (result.length > 0) {
    if (colorObj2) {
      value = result[0];
    } else {
      value = result[0][factor2];
    }
  }
  return value;
};

// colors/colorBrewer.ts
var cb = (str) => str.toLowerCase();
var schemeMapper = (scheme2, schemesObject) => {
  const { keys: keys3 } = Object;
  const schemeOptions = keys3(schemesObject).map(cb);
  scheme2 = cb(scheme2);
  if (schemeOptions.indexOf(scheme2) > -1) {
    return schemesObject[scheme2];
  } else {
    throw Error(`${scheme2} is an invalid scheme option.`);
  }
};
var sequential = (scheme2) => {
  const schemes = {
    OrRd: [
      "#fff7ec",
      "#fee8c8",
      "#fdd49e",
      "#fdbb84",
      "#fc8d59",
      "#ef6548",
      "#d7301f",
      "#b30000",
      "#7f0000"
    ],
    PuBu: [
      "#fff7fb",
      "#ece7f2",
      "#d0d1e6",
      "#a6bddb",
      "#74a9cf",
      "#3690c0",
      "#0570b0",
      "#045a8d",
      "#023858"
    ],
    BuPu: [
      "#f7fcfd",
      "#e0ecf4",
      "#bfd3e6",
      "#9ebcda",
      "#8c96c6",
      "#8c6bb1",
      "#88419d",
      "#810f7c",
      "#4d004b"
    ],
    Oranges: [
      "#fff5eb",
      "#fee6ce",
      "#fdd0a2",
      "#fdae6b",
      "#fd8d3c",
      "#f16913",
      "#d94801",
      "#a63603",
      "#7f2704"
    ],
    BuGn: [
      "#f7fcfd",
      "#e5f5f9",
      "#ccece6",
      "#99d8c9",
      "#66c2a4",
      "#41ae76",
      "#238b45",
      "#006d2c",
      "#00441b"
    ],
    YlOrBr: [
      "#ffffe5",
      "#fff7bc",
      "#fee391",
      "#fec44f",
      "#fe9929",
      "#ec7014",
      "#cc4c02",
      "#993404",
      "#662506"
    ],
    YlGn: [
      "#ffffe5",
      "#f7fcb9",
      "#d9f0a3",
      "#addd8e",
      "#78c679",
      "#41ab5d",
      "#238443",
      "#006837",
      "#004529"
    ],
    Reds: [
      "#fff5f0",
      "#fee0d2",
      "#fcbba1",
      "#fc9272",
      "#fb6a4a",
      "#ef3b2c",
      "#cb181d",
      "#a50f15",
      "#67000d"
    ],
    RdPu: [
      "#fff7f3",
      "#fde0dd",
      "#fcc5c0",
      "#fa9fb5",
      "#f768a1",
      "#dd3497",
      "#ae017e",
      "#7a0177",
      "#49006a"
    ],
    Greens: [
      "#f7fcf5",
      "#e5f5e0",
      "#c7e9c0",
      "#a1d99b",
      "#74c476",
      "#41ab5d",
      "#238b45",
      "#006d2c",
      "#00441b"
    ],
    YlGnBu: [
      "#ffffd9",
      "#edf8b1",
      "#c7e9b4",
      "#7fcdbb",
      "#41b6c4",
      "#1d91c0",
      "#225ea8",
      "#253494",
      "#081d58"
    ],
    Purples: [
      "#fcfbfd",
      "#efedf5",
      "#dadaeb",
      "#bcbddc",
      "#9e9ac8",
      "#807dba",
      "#6a51a3",
      "#54278f",
      "#3f007d"
    ],
    GnBu: [
      "#f7fcf0",
      "#e0f3db",
      "#ccebc5",
      "#a8ddb5",
      "#7bccc4",
      "#4eb3d3",
      "#2b8cbe",
      "#0868ac",
      "#084081"
    ],
    Greys: [
      "#ffffff",
      "#f0f0f0",
      "#d9d9d9",
      "#bdbdbd",
      "#969696",
      "#737373",
      "#525252",
      "#252525",
      "#000000"
    ],
    YlOrRd: [
      "#ffffcc",
      "#ffeda0",
      "#fed976",
      "#feb24c",
      "#fd8d3c",
      "#fc4e2a",
      "#e31a1c",
      "#bd0026",
      "#800026"
    ],
    PuRd: [
      "#f7f4f9",
      "#e7e1ef",
      "#d4b9da",
      "#c994c7",
      "#df65b0",
      "#e7298a",
      "#ce1256",
      "#980043",
      "#67001f"
    ],
    Blues: [
      "#f7fbff",
      "#deebf7",
      "#c6dbef",
      "#9ecae1",
      "#6baed6",
      "#4292c6",
      "#2171b5",
      "#08519c",
      "#08306b"
    ],
    PuBuGn: [
      "#fff7fb",
      "#ece2f0",
      "#d0d1e6",
      "#a6bddb",
      "#67a9cf",
      "#3690c0",
      "#02818a",
      "#016c59",
      "#014636"
    ],
    Viridis: [
      "#440154",
      "#482777",
      "#3f4a8a",
      "#31678e",
      "#26838f",
      "#1f9d8a",
      "#6cce5a",
      "#b6de2b",
      "#fee825"
    ]
  };
  return schemeMapper(scheme2, schemes);
};
var diverging = (scheme2) => {
  const schemes = {
    Spectral: [
      "#9e0142",
      "#d53e4f",
      "#f46d43",
      "#fdae61",
      "#fee08b",
      "#ffffbf",
      "#e6f598",
      "#abdda4",
      "#66c2a5",
      "#3288bd",
      "#5e4fa2"
    ],
    RdYlGn: [
      "#a50026",
      "#d73027",
      "#f46d43",
      "#fdae61",
      "#fee08b",
      "#ffffbf",
      "#d9ef8b",
      "#a6d96a",
      "#66bd63",
      "#1a9850",
      "#006837"
    ],
    RdBu: [
      "#67001f",
      "#b2182b",
      "#d6604d",
      "#f4a582",
      "#fddbc7",
      "#f7f7f7",
      "#d1e5f0",
      "#92c5de",
      "#4393c3",
      "#2166ac",
      "#053061"
    ],
    PiYG: [
      "#8e0152",
      "#c51b7d",
      "#de77ae",
      "#f1b6da",
      "#fde0ef",
      "#f7f7f7",
      "#e6f5d0",
      "#b8e186",
      "#7fbc41",
      "#4d9221",
      "#276419"
    ],
    PRGn: [
      "#40004b",
      "#762a83",
      "#9970ab",
      "#c2a5cf",
      "#e7d4e8",
      "#f7f7f7",
      "#d9f0d3",
      "#a6dba0",
      "#5aae61",
      "#1b7837",
      "#00441b"
    ],
    RdYlBu: [
      "#a50026",
      "#d73027",
      "#f46d43",
      "#fdae61",
      "#fee090",
      "#ffffbf",
      "#e0f3f8",
      "#abd9e9",
      "#74add1",
      "#4575b4",
      "#313695"
    ],
    BrBG: [
      "#543005",
      "#8c510a",
      "#bf812d",
      "#dfc27d",
      "#f6e8c3",
      "#f5f5f5",
      "#c7eae5",
      "#80cdc1",
      "#35978f",
      "#01665e",
      "#003c30"
    ],
    RdGy: [
      "#67001f",
      "#b2182b",
      "#d6604d",
      "#f4a582",
      "#fddbc7",
      "#ffffff",
      "#e0e0e0",
      "#bababa",
      "#878787",
      "#4d4d4d",
      "#1a1a1a"
    ],
    PuOr: [
      "#7f3b08",
      "#b35806",
      "#e08214",
      "#fdb863",
      "#fee0b6",
      "#f7f7f7",
      "#d8daeb",
      "#b2abd2",
      "#8073ac",
      "#542788",
      "#2d004b"
    ]
  };
  return schemeMapper(scheme2, schemes);
};
var qualitative = (scheme2) => {
  const schemes = {
    Set2: [
      "#66c2a5",
      "#fc8d62",
      "#8da0cb",
      "#e78ac3",
      "#a6d854",
      "#ffd92f",
      "#e5c494",
      "#b3b3b3"
    ],
    Accent: [
      "#7fc97f",
      "#beaed4",
      "#fdc086",
      "#ffff99",
      "#386cb0",
      "#f0027f",
      "#bf5b17",
      "#666666"
    ],
    Set1: [
      "#e41a1c",
      "#377eb8",
      "#4daf4a",
      "#984ea3",
      "#ff7f00",
      "#ffff33",
      "#a65628",
      "#f781bf",
      "#999999"
    ],
    Set3: [
      "#8dd3c7",
      "#ffffb3",
      "#bebada",
      "#fb8072",
      "#80b1d3",
      "#fdb462",
      "#b3de69",
      "#fccde5",
      "#d9d9d9",
      "#bc80bd",
      "#ccebc5",
      "#ffed6f"
    ],
    Dark2: [
      "#1b9e77",
      "#d95f02",
      "#7570b3",
      "#e7298a",
      "#66a61e",
      "#e6ab02",
      "#a6761d",
      "#666666"
    ],
    Paired: [
      "#a6cee3",
      "#1f78b4",
      "#b2df8a",
      "#33a02c",
      "#fb9a99",
      "#e31a1c",
      "#fdbf6f",
      "#ff7f00",
      "#cab2d6",
      "#6a3d9a",
      "#ffff99",
      "#b15928"
    ],
    Pastel2: [
      "#b3e2cd",
      "#fdcdac",
      "#cbd5e8",
      "#f4cae4",
      "#e6f5c9",
      "#fff2ae",
      "#f1e2cc",
      "#cccccc"
    ],
    Pastel1: [
      "#fbb4ae",
      "#b3cde3",
      "#ccebc5",
      "#decbe4",
      "#fed9a6",
      "#ffffcc",
      "#e5d8bd",
      "#fddaec",
      "#f2f2f2"
    ]
  };
  return schemeMapper(scheme2, schemes);
};

// color-maps/swatches/tailwind.ts
var tailwind_default = {
  /*     black: '#000',
        white: '#fff', */
  indigo: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  }
};

// colors/colors.ts
var colors = (shade, val) => {
  const { keys: keys3 } = Object;
  const defaultHue = "all";
  const hueKeys2 = keys3(tailwind_default);
  shade = shade.toLowerCase();
  if (shade === defaultHue) {
    return hueKeys2.map((color2) => tailwind_default[color2][val || "500"]);
  } else if (hueKeys2.some((hue) => hue === shade) && val) {
    return tailwind_default[shade][val];
  } else if (shade && typeof val == "undefined") {
    const keyVals = keys3(tailwind_default[shade]);
    return keyVals.map((key) => tailwind_default[shade][key]);
  } else if (typeof val == "undefined") {
    throw Error(`Both shade and value cannot be undefined`);
  }
};

// fp/number/comparison.ts
var gt = (x, y) => x > y;
var lt = (x, y) => x < y;
var gte = (x, y) => x >= y;
var lte = (x, y) => x <= y;

// fp/number/random.ts
var random = (min2, max2) => {
  if (min2 > max2) {
    const mn = min2;
    const mx = max2;
    max2 = mn;
    min2 = mx;
  } else {
    return Math.random() * (max2 - min2) + min2;
  }
};

// fp/number/isInt.ts
var isInt = (num) => {
  const reInt = /^-?[0-9]+$/;
  return reInt.test(num.toString());
};

// fp/number/inRange.ts
var inRange = (number, start, end) => {
  var nativeMax = Math.max, nativeMin = Math.min;
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
};

// color-maps/samples/modeRanges.ts
var modeRanges_default = {
  cubehelix: {
    s: [0, 4.614],
    l: [0, 1]
  },
  lab: {
    l: [0, 100]
  },
  dlch: { l: [0, 100], c: [0, 51.484] },
  jab: {
    j: [0, 0.222]
  },
  jch: {
    j: [0, 0.221],
    c: [0, 0.19]
  },
  lch: { l: [0, 100], c: [0, 150] },
  lch65: { l: [0, 100], c: [0, 133.807] },
  lchuv: { l: [0, 100], c: [0, 176.956] },
  luv: { l: [0, 100] },
  oklab: { l: [0, 1] },
  oklch: { l: [0, 1], c: [0, 0.4] }
};

// fp/number/normalize.ts
var normalize = (value, modeChannel) => {
  const [mode2, channel] = modeChannel.split(".");
  const [start, end] = modeRanges_default[mode2][channel];
  const range = inRange(value, start, end);
  if (!range) {
    if (inRange(value, 0, 1)) {
      value = end * value;
    } else if (inRange(value, 1)) {
      value = end * (value / 100);
    } else {
      throw Error(
        `The value ${value} is out of range for channel ${channel} of colorspace ${mode2} can only accept a value between [0,1] or [0,100] with 0.5 or 50 being half of the channel range.`
      );
    }
  }
  return value;
};

// fp/number/floorCeil.ts
var { ceil, floor } = Math;
var floorCeil = (num) => {
  if (isInt(num)) {
    return num;
  } else {
    const strArr = num.toString().split(".");
    const float = strArr[1];
    const reFloorCeil = (float2) => /^[0-4]$/.test(float2.charAt(0));
    if (reFloorCeil(float)) {
      num = floor(num);
    } else {
      num = ceil(num);
    }
  }
  return num;
};

// fp/number/adjustHue.ts
var adjustHue = (value = 0) => {
  if (value > 0) {
    return value += Math.ceil(-value / 360) * 360;
  } else {
    return value % 360;
  }
};

// fp/number/polynomial.ts
var polynomial = (x) => {
  return Math.sqrt(Math.sqrt((Math.pow(x, 2.25) + Math.pow(x, 4)) / 2));
};

// fp/array/min_max.ts
var identity = (value) => {
  return value;
};
var baseExtremum = (array, iteratee, comparator) => {
  var index = -1, length = array.length;
  while (++index < length) {
    var value = array[index], current = iteratee(value);
    if (current != null && (computed === void 0 ? current === current : comparator(current, computed))) {
      var computed = current, result = value;
    }
  }
  return result;
};
var min = (array) => {
  return array && array.length ? baseExtremum(array, identity, lt) : void 0;
};
var max = (array) => {
  return array && array.length ? baseExtremum(array, identity, gt) : void 0;
};

// fp/array/filteredArr.ts
var filteredArr = (factor2, cb4) => (colors2, start, end) => {
  let result;
  if (typeof start === "number") {
    result = colorObjArr(
      factor2,
      cb4
    )(colors2).filter((color2) => inRange(color2[factor2], start, end)).map((color2) => color2["name"]);
    return result;
  } else if (typeof start === "string") {
    const reOperator = /^(>=|<=|<|>)/;
    const value = /[0-9]*\.?[0-9]+/;
    const val = value.exec(start), op = reOperator.exec(start);
    const mapFilter = (test) => {
      return colorObjArr(
        factor2,
        cb4
      )(colors2).filter((el) => test(el[factor2], parseFloat(val["0"]))).map((el) => el["name"]);
    };
    switch (op["0"]) {
      case "<":
        result = mapFilter(lt);
        break;
      case ">":
        result = mapFilter(gt);
        break;
      case "<=":
        result = mapFilter(lte);
        break;
      case ">=":
        result = mapFilter(gte);
        break;
    }
  }
  return result;
};

// palettes/hueShift.ts
import { easingSmoothstep, modeLch, samples, useMode } from "culori/fn";
var lightnessMapper = (n) => (start1, end1) => (start2, end2) => (n - start1) / (end1 - start1) * (end2 - start2) + start2;
var hueShift = (color2, options) => {
  const toLch = useMode(modeLch);
  color2 = toLch(toHex(color2));
  let { iterations, hueStep, minLightness: minLightness2, maxLightness: maxLightness2, easingFunc } = options || {};
  easingFunc = checkArg(easingFunc, easingSmoothstep);
  iterations = checkArg(iterations, 6) + 1;
  hueStep = checkArg(hueStep, 5);
  minLightness2 = checkArg(minLightness2, 10);
  maxLightness2 = checkArg(maxLightness2, 90);
  const tValues = samples(iterations);
  const palette = [color2];
  for (let i = 1; i < iterations; i++) {
    const hueDark = adjustHue(color2["h"] - hueStep * i);
    const hueLight = adjustHue(color2["h"] + hueStep * i);
    const lightnessDark = lightnessMapper(easingFunc(tValues[i - 1]))(
      0.1,
      iterations
    )(color2["l"], minLightness2);
    const lightnessLight = lightnessMapper(easingFunc(tValues[i - 1]))(
      0.05,
      iterations
    )(color2["l"], maxLightness2);
    palette.push({
      l: lightnessDark,
      c: color2["c"],
      h: hueDark,
      mode: "lch"
    });
    palette.unshift({
      l: lightnessLight,
      c: color2["c"],
      h: hueLight,
      mode: "lch"
    });
  }
  return palette.map(toHex);
};

// palettes/discoverPalettes.ts
import { nearest, differenceEuclidean, useMode as useMode3, modeLch as modeLch3 } from "culori/fn";

// palettes/base.ts
import { useMode as useMode2, modeLch as modeLch2, easingSmoothstep as easingSmoothstep2, samples as samples2 } from "culori/fn";
var cb2 = (iterations, distance, color2) => samples2(iterations).map(
  (val) => adjustHue((color2["h"] + distance) * (val * easingSmoothstep2(val)))
);
var scheme = (schemeType) => (color2, easingFunc) => {
  schemeType = schemeType.toLowerCase();
  easingFunc = checkArg(easingFunc, easingSmoothstep2);
  const lch = useMode2(modeLch2);
  color2 = lch(color2);
  const lowMin = 0.05, lowMax = 0.495, highMin = 0.5, highMax = 0.995;
  const targetHueSteps = {
    analogous: cb2(3, 12, color2),
    triadic: cb2(3, 120, color2),
    tetradic: cb2(4, 90, color2),
    complementary: cb2(2, 180, color2)
  };
  for (const scheme2 of Object.keys(targetHueSteps)) {
    targetHueSteps[scheme2].map(
      (step) => random(step * lowMax, step * lowMin) + random(step * highMax, step * highMin) / 2
    );
  }
  const colors2 = targetHueSteps[schemeType].map((step) => ({
    l: color2["l"],
    c: color2["c"],
    h: step * easingFunc(1 / targetHueSteps[schemeType].length),
    mode: "lch"
  }));
  return colors2.map(toHex);
};

// palettes/discoverPalettes.ts
var { keys } = Object;
var isColorEqual = (c1, c2) => {
  return c1["h"] === c2["h"] && c1["l"] === c2["l"] && c1["c"] === c2["c"];
};
var discoverPalettes = (colors2, schemeType) => {
  const toLch = useMode3(modeLch3);
  colors2 = colors2.map((color2) => toLch(toHex(color2)));
  const palettes = {};
  const schemeKeys = ["analogous", "triadic", "tetradic", "complementary"];
  const targetPalettes = {};
  for (const color2 of colors2) {
    schemeKeys.forEach((s) => targetPalettes[s] = scheme(s)(color2));
    for (const paletteType of keys(targetPalettes)) {
      const palette = [];
      let variance = 0;
      for (const targetColor of targetPalettes[paletteType]) {
        const availableColors = colors2.filter(
          (color1) => !palette.some((color22) => isColorEqual(color1, color22))
        );
        const match = nearest(
          availableColors,
          differenceEuclidean("lch")
        )(targetColor)[0];
        variance += differenceEuclidean("lch")(targetColor, match);
        palette.push(match);
      }
      if (!palettes[paletteType] || variance < palettes[paletteType].variance) {
        palettes[paletteType] = palette.map(toHex);
      }
    }
  }
  if (typeof schemeType === "string") {
    return palettes[schemeType.toLowerCase()];
  } else if (typeof schemeType === "undefined") {
    return palettes;
  } else {
    throw Error(
      `${schemeType} is not a valid scheme. The schemes are triadic | tetradic | analogous | complementary`
    );
  }
};

// palettes/earthtone.ts
import {
  interpolate,
  samples as samples3
} from "culori/fn";

// fp/defaults.ts
import {
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineBasisClosed,
  interpolatorSplineMonotone
} from "culori";
var {
  chromaInterpolator,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator
} = {};
chromaInterpolator = checkArg(chromaInterpolator, interpolatorSplineNatural);
hueFixup = checkArg(hueFixup, fixupHueShorter);
hueInterpolator = checkArg(hueInterpolator, interpolatorSplineBasisClosed);
lightnessInterpolator = checkArg(
  lightnessInterpolator,
  interpolatorSplineMonotone
);
var interpolatorConfig = {
  chromaInterpolator,
  hueFixup,
  hueInterpolator,
  lightnessInterpolator
};

// palettes/earthtone.ts
var earthtone = (color2, options) => {
  let {
    chromaInterpolator: chromaInterpolator2,
    hueFixup: hueFixup2,
    hueInterpolator: hueInterpolator2,
    lightnessInterpolator: lightnessInterpolator2,
    iterations,
    earthtones,
    easingFunc
  } = options || {};
  iterations = checkArg(iterations, 1);
  earthtones = checkArg(earthtones, "dark");
  const tones = {
    "light-gray": "#e5e5e5",
    silver: "#f5f5f5",
    sand: "#c2b2a4",
    tupe: "#a79e8a",
    mahogany: "#958c7c",
    "brick-red": "#7d7065",
    clay: "#6a5c52",
    cocoa: "#584a3e",
    "dark-brown": "#473b31",
    dark: "#352a21"
  };
  const base = tones[earthtones.toLowerCase()];
  const f = interpolate(
    [base, toHex(color2), easingFunc],
    "lch",
    checkArg(options, interpolatorConfig)
  );
  if (iterations === 1) {
    return toHex(f(0.5));
  } else {
    return samples3(iterations).map((t) => toHex(f(t)));
  }
};

// getters_and_setters/set.ts
import { converter as converter2 } from "culori/fn";
import "culori/css";

// fp/string/expressionParser.ts
function expressionParser(src, channel, value) {
  const reOperator = /^(\*|\+|\-|\/)/;
  const reValue = /[0-9]*\.?[0-9]+/;
  const sign = reOperator.exec(value);
  const amt = reValue.exec(value);
  const cb4 = (amt2) => parseFloat(amt2);
  switch (sign["0"]) {
    case "+":
      src[channel] += +cb4(amt["0"]);
      break;
    case "-":
      src[channel] -= +cb4(amt["0"]);
      break;
    case "*":
      src[channel] *= +cb4(amt["0"]);
      break;
    case "/":
      src[channel] /= +cb4(amt["0"]);
      break;
    default:
      src[channel] = +cb4(amt["0"]);
  }
  return src;
}

// getters_and_setters/set.ts
var setChannel = (mc) => (color2, value) => {
  const [mode2, channel] = mc.split(".");
  const src = converter2(mode2)(toHex(color2));
  if (channel) {
    if (typeof value === "number") {
      src[channel] = value;
    } else if (typeof value === "string") {
      expressionParser(src, channel, value);
    } else {
      throw new Error(`unsupported value for setChannel`);
    }
    return src;
  } else {
    throw new Error(`unknown channel ${channel} in mode ${mode2}`);
  }
};

// palettes/paired.ts
import {
  interpolate as interpolate2,
  samples as samples4,
  useMode as useMode4,
  modeLch as modeLch4,
  easingSmoothstep as easingSmoothstep4
} from "culori/fn";
var pairedScheme = (color2, options) => {
  let {
    chromaInterpolator: chromaInterpolator2,
    hueFixup: hueFixup2,
    hueInterpolator: hueInterpolator2,
    lightnessInterpolator: lightnessInterpolator2,
    iterations,
    via: tone,
    hueStep,
    easingFunc
  } = options || {};
  iterations = checkArg(iterations, 1);
  easingFunc = checkArg(easingFunc, easingSmoothstep4);
  tone = checkArg(tone, "light");
  hueStep = checkArg(hueStep, 5);
  const toLch = useMode4(modeLch4);
  color2 = toLch(toHex(color2));
  const derivedHue = setChannel("lch.h")(color2, color2["h"] + hueStep);
  const tones = {
    dark: "#263238",
    light: { l: 100, c: 1e-4, h: 0, mode: "lch" }
  };
  const scale = interpolate2(
    [color2, tones[tone], derivedHue, easingFunc],
    "lch",
    checkArg(options, interpolatorConfig)
  );
  if (iterations <= 1) {
    return toHex(scale(0.5));
  } else {
    const smp = samples4(iterations * 2);
    const results = smp.map((t) => toHex(scale(easingFunc(t))));
    return results.slice(0, results.length / 2);
  }
};

// palettes/pastel.ts
import { averageNumber, modeHsv, useMode as useMode5 } from "culori/fn";
var samplePastelObj = [
  {
    color: "#fea3aa",
    saturation: 0.35826771653543305,
    value: 0.996078431372549
  },
  {
    color: "#f8b88b",
    saturation: 0.43951612903225806,
    value: 0.9725490196078431
  },
  { color: "#faf884", saturation: 0.472, value: 0.9803921568627451 },
  {
    color: "#f2a2e8",
    saturation: 0.3305785123966942,
    value: 0.9490196078431372
  },
  {
    color: "#b2cefe",
    saturation: 0.2992125984251969,
    value: 0.996078431372549
  },
  {
    color: "#baed91",
    saturation: 0.3881856540084388,
    value: 0.9294117647058824
  }
];
var sampleSaturation = samplePastelObj.map((el) => el["saturation"]);
var sampleValues = samplePastelObj.map((el) => el["value"]);
var pastelSample = {
  averageSaturation: averageNumber(sampleValues),
  averageValue: averageNumber(sampleSaturation),
  minSampleSaturation: min(sampleSaturation),
  maxSampleSaturation: max(sampleSaturation),
  minSampleValue: min(sampleValues),
  maxSampleValue: max(sampleValues)
};
var pastel = (color2) => {
  const toHsv = useMode5(modeHsv);
  color2 = toHsv(toHex(color2));
  return toHex({
    h: color2["h"],
    s: pastelSample["averageSaturation"],
    v: random(pastelSample["minSampleValue"], pastelSample["maxSampleValue"]),
    mode: "hsv"
  });
};

// converters/getTemp.ts
import { useMode as useMode6, modeLrgb } from "culori/fn";

// converters/temp2Color.ts
var temp2Color = (kelvin, hex = false) => {
  const { log } = Math;
  const temp = kelvin / 100;
  let r, g, b;
  if (temp < 66) {
    r = 255;
    g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
    b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
  } else {
    r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
    g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
    b = 255;
  }
  const result = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    mode: "rgb"
  };
  if (hex) {
    return toHex(result);
  } else {
    return result;
  }
};

// converters/getTemp.ts
var getTemp = (color2) => {
  const { round } = Math;
  const toRgb2 = useMode6(modeLrgb);
  const rgb2 = toRgb2(toHex(color2));
  let channelArr = [];
  channelArr[0] = rgb2["r"];
  channelArr[1] = rgb2["b"];
  let minTemp2 = 1e3;
  let maxTemp2 = 4e4;
  const eps = 0.4;
  let temp;
  while (maxTemp2 - minTemp2 > eps) {
    temp = (maxTemp2 + minTemp2) * 0.5;
    const rgb3 = temp2Color(temp, false);
    if (rgb3["b"] / rgb3["r"] >= channelArr[1] / channelArr[0]) {
      maxTemp2 = temp;
    } else {
      minTemp2 = temp;
    }
  }
  return round(temp);
};

// filterBy/filterByTemp.ts
var filterByTemp = (colors2, startTemp = 1e3, endTemp = 6e3) => {
  const factor2 = "temp";
  const cb4 = getTemp;
  return filteredArr(factor2, cb4)(colors2, startTemp, endTemp);
};

// filterBy/filterBySaturation.ts
var filterBySaturation = (colors2, startSaturation = 0.05, endSaturation = 1, mode2) => {
  const factor2 = "saturation";
  if (matchChromaChannel(mode2)) {
    const chromaChannel = matchChromaChannel(mode2);
    const cb4 = getChannel(`${mode2}.${chromaChannel}`);
    const saturationRange = getSaturationRange(modeRanges_default, mode2, chromaChannel);
    const start = saturationRange[0];
    const end = saturationRange[1];
    const reDigits = /([0-9])/.exec(startSaturation)["0"];
    return filteredArr(factor2, cb4)(
      colors2,
      normalize(reDigits, start, end),
      normalize(endSaturation, start, end)
    );
  } else {
    throw Error(
      `The passed in color space ${mode2} has no chroma or saturation channel. Try 'jch'`
    );
  }
};

// getters_and_setters/luminance.ts
import { interpolate as interpolate3, wcagLuminance, useMode as useMode7, modeRgb } from "culori/fn";
var getLuminance = (color2) => wcagLuminance(toHex(color2));
var { pow, abs } = Math;
var toRgb = useMode7(modeRgb);
var setLuminance = (color2, lum) => {
  const white = "#ffffff", black = "#000000";
  const EPS = 1e-7;
  let MAX_ITER = 20;
  if (lum !== void 0 && typeof lum == "number") {
    lum == 0 && lum || black || lum == 1 && !lum || white;
    const cur_lum = wcagLuminance(color2);
    color2 = toRgb(toHex(color2));
    const test = (low, high) => {
      const mid = interpolate3([low, high])(0.5);
      const lm = getLuminance(color2);
      if (abs(lum - lm > EPS) || !MAX_ITER--) {
        return mid;
      }
      if (lm > lum) {
        return test(low, mid);
      } else {
        return test(mid, high);
      }
    };
    let rgb2;
    if (cur_lum > lum) {
      rgb2 = test(black, color2);
    } else {
      rgb2 = test(color2, white);
    }
    color2 = rgb2;
    return color2;
  }
  return rgb2luminance(color2);
};
var rgb2luminance = (color2) => {
  color2 = toRgb(toHex(color2));
  return 0.7152 * luminance_x(color2["g"]) + 0.2126 * luminance_x(color2["r"]) + 0.0722 * luminance_x(color2["b"]);
};
var luminance_x = (x) => {
  x /= 255;
  if (x <= 0.03928) {
    return x / 12.92;
  } else {
    return pow((x + 0.055) / 1.055, 2.4);
  }
};

// filterBy/filterByLuminance.ts
var filterByLuminance = (colors2, startLuminance = 0.05, endLuminance = 1) => {
  const factor2 = "luminance";
  const cb4 = getLuminance;
  return filteredArr(factor2, cb4)(colors2, startLuminance, endLuminance);
};

// filterBy/filterByHue.ts
var filterByHue = (colors2, startHue = 0, endHue = 360) => {
  const factor2 = "hue";
  const cb4 = getChannel("lch.h");
  return filteredArr(factor2, cb4)(colors2, startHue, endHue);
};

// filterBy/filterByLightness.ts
var filterByLightness = (colors2, startLightness = 5, endLightness = 100) => {
  const factor2 = "lightness";
  const cb4 = getChannel("lch.l");
  return filteredArr(factor2, cb4)(colors2, startLightness, endLightness);
};

// filterBy/filterByDistance.ts
import { differenceEuclidean as differenceEuclidean2 } from "culori/fn";
var filterByDistance = (colors2, against, startDistance = 0.05, endDistance, mode2, weights) => {
  const factor2 = "distance";
  against = toHex(against);
  const cb4 = (against2, mode3) => (color2) => {
    return differenceEuclidean2(mode3 || "lch", weights || [1, 1, 1, 0])(
      against2,
      color2
    );
  };
  return filteredArr(factor2, cb4(against, mode2))(
    colors2,
    startDistance,
    endDistance
  );
};

// getters_and_setters/contrast.ts
import { wcagContrast } from "culori/fn";
var getContrast = (color2, against) => {
  return wcagContrast(toHex(color2), toHex(against));
};

// filterBy/filterByContrast.ts
var filterByContrast = (colors2, against, startContrast = 0.05, endContrast) => {
  const factor2 = "contrast";
  const cb4 = (against2) => (color2) => getContrast(color2, against2);
  return filteredArr(factor2, cb4(against))(colors2, startContrast, endContrast);
};

// sortBy/sortByContrast.ts
import { wcagContrast as wcagContrast2 } from "culori/fn";
var sortByContrast = (colors2, against, order) => {
  const factor2 = "contrast";
  const cb4 = (against2) => (color2) => wcagContrast2(color2, against2);
  return sortedArr(factor2, cb4(against), order)(colors2);
};

// sortBy/sortByDistance.ts
import { differenceEuclidean as differenceEuclidean3 } from "culori/fn";
var sortByDistance = (colors2, against, order, options) => {
  let { mode: mode2, weights } = options || {};
  mode2 = checkArg(mode2, "lchuv");
  weights = checkArg(weights, [1, 1, 1, 0]);
  const factor2 = "distance";
  const cb4 = (against2, mode3) => (color2) => {
    return differenceEuclidean3(mode3, weights)(against2, color2);
  };
  return sortedArr(factor2, cb4(against, mode2), order)(colors2);
};

// sortBy/sortByHue.ts
var sortByHue = (colors2, order, mode2 = "jch") => {
  const factor2 = "hue";
  const reHue = /h/gi.test(mode2);
  if (reHue) {
    const cb4 = getChannel(`${mode2}.h`);
    return sortedArr(factor2, cb4, order)(colors2);
  } else {
    throw Error(`The color space ${mode2} has no hue channel try 'lch' instead`);
  }
};

// sortBy/sortByLightness.ts
var sortByLightness = (colors2, order) => {
  const factor2 = "lightness";
  const cb4 = getChannel("lch.l");
  return sortedArr(factor2, cb4, order)(colors2);
};

// sortBy/sortByLuminance.ts
var sortByLuminance = (colors2, order) => {
  const factor2 = "luminance";
  const cb4 = getLuminance;
  return sortedArr(factor2, cb4, order)(colors2);
};

// sortBy/sortBySaturation.ts
var sortBySaturation = (colors2, order, mode2) => {
  const factor2 = "saturation";
  mode2 = checkArg(mode2, "jch");
  if (matchChromaChannel(mode2)) {
    const chromaChannel = matchChromaChannel(mode2);
    const cb4 = getChannel(`${mode2}.${chromaChannel}`);
    return sortedArr(factor2, cb4, order)(colors2);
  } else {
    throw Error(
      `The passed in color space ${mode2} has no chroma channel. Try 'jch' instead.`
    );
  }
};

// sortBy/sortByTemp.ts
var sortByTemp = (colors2, order) => {
  const factor2 = "temp";
  const cb4 = getTemp;
  return sortedArr(factor2, cb4, order)(colors2);
};

// fp/array/colorArray.ts
var ColorArray = class {
  // private _colors: ColorToken[];
  constructor(colors2) {
    this["colors"] = checkArg(colors2, []);
  }
  /**
   * @function
   * @description Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
   * @param schemeType (Optional) The palette type you want to return.
   * @returns An array of colors if the scheme parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
   * @example
   * 
   * import { discoverPalettes } from 'huetiful-js'
  
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
    "#3e0000",
    "#310000",
  ]
  
  console.log(discoverPalettes(sample, "tetradic"))
  // [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
   */
  discoverPalettes(schemeType) {
    return discoverPalettes(this["colors"], schemeType);
  }
  /**
   *@function
   * @description Gets the largest hue value from the passed in colors.
   * @param colorSpace The mode color space to perform the computation in.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
   * @returns The largest hue value in the colors passed in or a custom object.
   * @example
   * 
   * import { maxHue } from 'huetiful-js'
  let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']
  
  console.log(maxHue(sample, 'lch'))
  // 273.54920266436477
   */
  maxHue(colorSpace, colorObj2 = false) {
    return maxHue(this["colors"], colorSpace, colorObj2);
  }
  /**
   * Returns the current length of the resultant array of colors
   * @returns The colors array length
   */
  length() {
    return this["colors"].length;
  }
  /**
   *@function
   * @description Gets the smallest hue value from the passed in colors.
   * @param colors The array of colors to query the color with the smallest hue value.
   * @param colorSpace The mode color space to perform the computation in.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (hue) and name of the color as keys. Default is false.
   * @returns The smallest hue value in the colors passed in or a custom object.
   * @example
   * 
   * import { minHue } from 'huetiful-js'
  
  let sample = ['b2c3f1', '#a1bd2f', '#f3bac1']
  
  console.log(minHue(sample, 'lch'))
  // 12.462831644544274
   */
  minHue(colorSpace, colorObj2 = false) {
    return minHue(this["colors"], colorSpace, colorObj2);
  }
  /**
   *@function
   * @description Gets the smallest lightness value from the passed in colors.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
   * @returns The smallest lightness value in the colors passed in or a custom object.
   * @example
   * 
   * import { minLightness } from 'huetiful-js'
  
  let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]
  
  console.log(minLightness(sample, true))
  
  // { lightness: 72.61647882089876, name: '#a1bd2f' }
  
   */
  minLightness(colorObj2 = false) {
    return minLightness(this["colors"], colorObj2);
  }
  /**
   *@function
   * @description Gets the largest lightness value from the passed in colors.
   * @param colors The array of colors to query the color with the largest lightness value.
   * @param colorObj Optional boolean that makes the function return a custom object with factor (lightness) and name of the color as keys. Default is false.
   * @returns The largest lightness value in the colors passed in or a custom object.
   * @example 
   * 
   * import { maxLightness } from 'huetiful-js'
  
  let sample = ["b2c3f1", "#a1bd2f", "#f3bac1"]
  
  console.log(maxLightness(sample, true))
  
  // { lightness: 80.94668903360088, name: '#f3bac1' }
  
   */
  maxLightness(colorObj2 = false) {
    return maxLightness(this["colors"], colorObj2);
  }
  /**
   * @experimental
   * @function
   * @description Checks the approximate maximum temperature that a color can have without losing its original hue. Does not take into account overtones (for now)
   * @param color The color to check its maximum temperature.
   * @returns The maximum temperature in Kelvins.
   * @example
   * 
   * import { maxTemp } from "huetiful-js"; 
   * 
   * console.log(maxTemp("#a1bd2f"))
  // 7926
  
  console.log(maxTemp("b2c3f1"))
  // 9570
   */
  maxTemp(color2) {
    return maxTemp(this["colors"]);
  }
  /**
   * @experimental
   * @function
   * @description Checks the approximate minimum temperature that a color can have without losing its original hue. Does not take into account overtones (for now)
   * @param color The color to check its minimum temperature.
   * @returns The minimum temperature in Kelvins.
   * @example
   * 
   * import { minTemp } from 'huetiful-js'
   * 
   * console.log(minTemp("#a1bd2f"))
  // 2528
  
  console.log(minTemp("b2c3f1"))
  // 20107
   * 
   */
  minTemp(color2) {
    return minTemp(this["colors"]);
  }
  /**
   * @function
   * @description Returns an array of colors in the specified saturation range. The range is normalised to [0,1].
   * @param  startSaturation The minimum end of the saturation range.
   * @param  endSaturation The maximum end of the saturation range.
   * @param mode The color space to fetch the saturation value from. Any color space with a chroma channel e.g 'lch' or 'hsl' will do.
   * @returns Array of filtered colors.
   * @example
   * import { filterByContrast } from 'huetiful-js'
  
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  console.log(filterByContrast(sample, 'green', '>=3'))
  // [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
   */
  filterBySaturation(startSaturation = 0.05, endSaturation = 1, mode2) {
    this["colors"] = filterBySaturation(
      this["colors"],
      startSaturation,
      endSaturation,
      mode2
    );
    return this;
  }
  /**
   * @function
   * @description Returns an array of colors in the specified lightness range. The range is between 0 and 100.
   * @param  startLightness The minimum end of the lightness range.
   * @param  endLightness The maximum end of the lightness range.
   * @returns Array of filtered colors.
   * @example
   * 
   * import { filterByLightness } from 'huetiful-js'
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  filterByLightness(sample, 20, 80)
  
  // [ '#00c000', '#007e00', '#164100', '#720000' ]
   */
  filterByLightness(startLightness = 5, endLightness = 100) {
    this["colors"] = filterByLightness(
      this["colors"],
      startLightness,
      endLightness
    );
    return this;
  }
  /**
   * @function
   * @description Returns an array of colors with the specified distance range. The distance is tested against a comparison color (the 'against' param) and the specified distance ranges.
   * @param  startDistance The minimum end of the distance range.
   * @param  endDistance The maximum end of the distance range.
   * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
   * @param mode The color space to calculate the distance in .
   * @returns Array of filtered colors.
   * @example
   * import { filterByDistance } from 'huetiful-js'
  
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
  
  console.log(filterByDistance(sample, "yellow", 0.1))
  // [ '#ffff00' ]
   */
  filterByDistance(against, startDistance = 0.05, endDistance, mode2, weights) {
    this["colors"] = filterByDistance(
      this["colors"],
      against,
      startDistance,
      endDistance,
      mode2,
      weights
    );
    return this;
  }
  /**
   * @function
   * @description Returns an array of colors in the specified temperature range between 0 and 30,000 Kelvins.
   * @param  startTemp The minimum end of the temperature range.
   * @param  endTemp The maximum end of the temperature range.
   * @returns  Array of the filtered colors.
   * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
   * @example
   * 
   * import { filterByTemp } from "huetiful-js";
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
  
  
  filterByTemp(sample, 1000, 20000);
  
  // [
  '#00c000', '#007e00',
  '#164100', '#ffff00',
  '#310000', '#3e0000',
  '#4e0000', '#600000',
  '#720000'
  ]
   */
  filterByTemp(startTemp = 1e3, endTemp = 6e3) {
    this["colors"] = filterByTemp(this["colors"], startTemp, endTemp);
    return this;
  }
  /**
     * 
   * @function
   * @description Returns an array of colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
   * @param  startContrast The minimum end of the contrast range.
   * @param  endContrast The maximum end of the contrast range.
   * @returns Array of filtered colors.
   * 
   * @example
   * 
   * import { filterByContrast } from 'huetiful-js'
  
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  console.log(filterByContrast(sample, 'green', '>=3'))
  // [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
   */
  filterByContrast(against, startContrast = 0.05, endContrast) {
    this["colors"] = filterByContrast(
      this["colors"],
      against,
      startContrast,
      endContrast
    );
    return this;
  }
  /**
   * @function
   * @description Returns colors in the specified hue ranges between 0 to 360.
   * @param  startHue The minimum end of the hue range.
   * @param  endHue The maximum end of the hue range.
   * @returns  Array of the filtered colors.
   * @example
   * let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  filterByHue(sample, 20, 80)
  
  // [ '#310000', '#3e0000', '#4e0000', '#600000', '#720000' ]
   */
  filterByHue(startHue = 0, endHue = 360) {
    this["colors"] = filterByHue(this["colors"], startHue, endHue);
    return this;
  }
  /**
   *  @function
   * @description Returns an array of colors in the specified luminance range. The range is normalised to [0,1].
   * @param  startLuminance The minimum end of the luminance range.
   * @param  endLuminance The maximum end of the luminance range.
   * @returns Array of filtered colors.
   * @example
   * 
   * import { filterByLuminance } from 'huetiful-js'
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  filterByLuminance(sample, 0.4, 0.9)
  
  // [ '#00ffdc', '#00ff78' ]
   */
  filterByLuminance(startLuminance = 0.05, endLuminance = 1) {
    this["colors"] = filterByLuminance(
      this["colors"],
      startLuminance,
      endLuminance
    );
    return this;
  }
  /**
   * @function
   * @description Sorts colors according to their lightness.
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns An array of the sorted color values.
   * @example
   * import { sortByLightness } from "huetiful-js";
  
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
  
  sortByLightness(sample)
  
  // [
    '#310000', '#3e0000',
    '#4e0000', '#600000',
    '#720000', '#164100',
    '#007e00', '#00c000',
    '#00ff78', '#00ffdc',
    '#ffff00'
  ]
  
  
  sortByLightness(sample,'desc')
  
  // [
    '#ffff00', '#00ffdc',
    '#00ff78', '#00c000',
    '#007e00', '#164100',
    '#720000', '#600000',
    '#4e0000', '#3e0000',
    '#310000'
  ]
  
   */
  sortByLightness(order) {
    this["colors"] = sortByLightness(this["colors"], order);
    return this;
  }
  /**
   * @function
   * @description Sorts colors according to their Euclidean distance. The distance factor is determined by the color space used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the array i.e it sorts the colors against the dist
   * @param against The color to compare the distance with. All the distances are calculated between this color and the ones in the colors array.
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @param weights The weighting values to pass to the Euclidean function. Default is [1,1,1,0].
   * @param mode The color space to calculate the distance in . The default is the cylindrical variant of the CIELUV colorspace ('lchuv')
   * @returns An array of the sorted color values.
   * @example
   * import { sortByDistance } from 'huetiful-js'
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(
    sortByDistance(sample, 'yellow', 'asc', {
      mode: 'lch',
    })
  )
  
  // [ 'brown', 'red', 'green', 'purple' ]
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(
    sortByDistance(sample, 'yellow', 'asc', {
      mode: 'lch',
    })
  )
  
  // [ 'green', 'brown', 'red', 'purple' ]
   */
  sortByDistance(against, order, options) {
    this["colors"] = sortByDistance(
      this["colors"],
      against,
      order,
      options
    );
    return this;
  }
  /**
   * @function
   * @description Sorts colors according to the relative brightness as defined by WCAG definition.
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns An array of the sorted color values.
   * @example
   * import { sortByLuminance } from "huetiful-js";
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
  
  
  
  let sorted = sortByLuminance(sample)
  console.log(sorted)
  // [
    '#310000', '#3e0000',
    '#4e0000', '#600000',
    '#720000', '#164100',
    '#007e00', '#00c000',
    '#00ff78', '#00ffdc',
    '#ffff00'
  ]
  
  let sortedDescending = sortByLuminance(sample, "desc");
  console.log(sortedDescending)
  // [
    '#ffff00', '#00ffdc',
    '#00ff78', '#00c000',
    '#007e00', '#164100',
    '#720000', '#600000',
    '#4e0000', '#3e0000',
    '#310000'
  ]
  
   
   */
  sortByLuminance(order) {
    this["colors"] = sortByLuminance(this["colors"], order);
    return this;
  }
  /**
   * @function
   * @description Sorts colors according to their saturation.
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @param mode The mode color space to compute the saturation value in. The default is jch .
   * @returns An array of the sorted color values.
   * @example
   * import { sortBySaturation } from "huetiful-js";
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
  
  let sorted = sortBySaturation(sample);
  console.log(sorted);
  
  // [
    '#310000', '#3e0000',
    '#164100', '#4e0000',
    '#600000', '#720000',
    '#00ffdc', '#007e00',
    '#00ff78', '#00c000',
    '#ffff00'
  ]
  
  let sortedDescending = sortBySaturation(sample,'desc');
  console.log(sortedDescending)
  // [
    '#ffff00', '#00c000',
    '#00ff78', '#007e00',
    '#00ffdc', '#720000',
    '#600000', '#4e0000',
    '#164100', '#3e0000',
    '#310000'
  ]
  
   */
  sortBySaturation(order, mode2) {
    this["colors"] = sortBySaturation(this["colors"], order, mode2);
    return this;
  }
  /**
   * @function
   * @description Sorts colors according to their contrast value as defined by WCAG. The contrast is tested against a comparison color (the 'against' param)
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns An array of the sorted color values.
   * @example
   * 
   * import { sortByContrast } from 'huetiful-js'
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(sortByContrast(sample, 'yellow'))
  // [ 'red', 'green', 'brown', 'purple' ]
  
  console.log(sortByContrast(sample, 'yellow', 'desc'))
  // [ 'purple', 'brown', 'green', 'red' ]
   
   */
  sortByContrast(against, order) {
    this["colors"] = sortByContrast(this["colors"], against, order);
    return this;
  }
  /**
   * @function
   * @description Sorts colors according to hue values. It works with any color space with a hue channel. Note that hue values between HSL and Lch do not align. Achromatic colors are not supported
   * @param order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
  * @param mode The color space to compute the color distances in. All colors within the collection will be converted to mode. Also note that because differences in hue mapping certain color spaces such as HSL and LCH hue values do not align. Keep such quirks in mind to avoid weird results. 
  * @returns  An array of the sorted color values.
   * @example
   * let sample = [
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
  
  
  let sorted = sortByHue(sample);
  console.log(sorted)
  // [
    '#310000', '#3e0000',
    '#4e0000', '#600000',
    '#720000', '#ffff00',
    '#164100', '#00c000',
    '#007e00', '#00ff78',
    '#00ffdc'
  ]
  
  let sortedDescending = sortByHue(sample,'desc');
  console.log(sortedDescending)
  // [
    '#00ffdc', '#00ff78',
    '#007e00', '#00c000',
    '#164100', '#ffff00',
    '#720000', '#600000',
    '#4e0000', '#3e0000',
    '#310000'
  ]
  
   */
  // Todo: Add the mode param so that users can select mode to work with. The default is lch
  sortByHue(order, mode2 = "jch") {
    this["colors"] = sortByHue(this["colors"], order, mode2);
    return this;
  }
  /**
   * @function
   * @description Sorts colors according to temperature value in Kelvins according to the temperatu. Achromatic colors may return awkward results.Please note that color temperature makes sense when measuring color that is nearer to white.
   * @param  colors The array of colors to sort
   * @param  order The expected order of arrangement. Either 'asc' or 'desc'. Default is ascending ('asc')
   * @returns  An array of the sorted color values.
   * @see Based on Neil Bartlett's implementation https://github.com/neilbartlett/color-temperature
   * @example
   * import { sortByTemp } from 'huetiful-js'
  let sample = [
    '#00ffdc',
    '#00ff78',
    '#00c000',
    '#007e00',
    '#164100',
    '#ffff00',
    '#310000',
    '#3e0000',
    '#4e0000',
    '#600000',
    '#720000',
  ]
  
  let sorted = sortByTemp(sample)
  console.log(sorted)
  
  let sortedDescending = sortByTemp(sample, 'desc')
  console.log(sortedDescending)
   */
  sortByTemp(order) {
    this["colors"] = sortByTemp(this["colors"], order);
    return this;
  }
  /**
   * @method
   * @returns Returns the result value from the chain.
   */
  output() {
    return this["colors"];
  }
};
var load = (colors2) => {
  return new ColorArray(colors2);
};

// fp/object/customConcat.ts
var customConcat = (hue) => {
  const res = [];
  const { keys: keys3 } = Object;
  if (typeof hue == "object") {
    const hueKeys2 = keys3(hue);
    res.push(...hueKeys2.map((key) => hue[key]));
  }
  return res;
};

// fp/object/customFindKey.ts
var customFindKey = (collection, factor2) => {
  const propKeys = Object.keys(collection);
  const result = propKeys.filter((key) => {
    const hueVals = customConcat(collection[key]);
    const minVal = min(...hueVals);
    const maxVal = max(...hueVals);
    return inRange(factor2, minVal, maxVal);
  }).toString();
  return result;
};

// colors/lightness.ts
var lightness = "lab.l";
var lightnessDiff = (color2) => (subtrahend) => {
  if (getChannel(lightness)(color2) < getChannel(lightness)(subtrahend)) {
    return getChannel(lightness)(subtrahend) - getChannel(lightness)(color2);
  } else {
    return getChannel(lightness)(color2) - getChannel(lightness)(subtrahend);
  }
};
var getNearestLightness = (color2, colors2) => {
  const factor2 = "lightness";
  const cb4 = lightnessDiff(color2);
  const sortedObjArr = sortedArr(factor2, cb4, "asc", true)(colors2);
  return sortedObjArr[0][factor2];
};
var getFarthestLightness = (color2, colors2) => {
  const factor2 = "lightness";
  const cb4 = lightnessDiff(color2);
  const sortedObjArr = sortedArr(factor2, cb4, "desc", true)(colors2);
  return sortedObjArr[0][factor2];
};
var minLightness = (colors2, colorObj2 = false) => {
  const factor2 = "lightness";
  const cb4 = getChannel(lightness);
  const result = sortedArr(
    factor2,
    cb4,
    "asc",
    true
  )(colors2);
  let value;
  if (gt(result.length, 0)) {
    if (colorObj2) {
      value = result[0];
    } else {
      value = result[0][factor2];
    }
  }
  return value;
};
var maxLightness = (colors2, colorObj2 = false) => {
  const factor2 = "lightness";
  const cb4 = getChannel(lightness);
  const result = sortedArr(
    factor2,
    cb4,
    "desc",
    true
  )(colors2);
  let value;
  if (gt(result.length, 0)) {
    if (colorObj2) {
      value = result[0];
    } else {
      value = result[0][factor2];
    }
  }
  return value;
};

// colors/hue.ts
var { abs: abs2 } = Math;
var factor = "hue";
var mode = (colorSpace) => `${colorSpace || "lch"}.h`;
var targetHue = (color2, colorSpace) => getChannel(mode(colorSpace))(color2);
var cb3 = (color2, colorSpace) => (subtrahend) => {
  return abs2(
    targetHue(color2, colorSpace) - getChannel(mode(colorSpace))(subtrahend)
  );
};
var predicate2 = (colorSpace) => (color2) => {
  return getChannel(mode(colorSpace))(color2) || void 0;
};
var getNearestHue = (color2, colors2, colorSpace) => {
  return sortedArr(
    factor,
    cb3(color2, mode(colorSpace)),
    "asc",
    true
  )(colors2).filter((el) => el[factor] !== void 0)[0][factor];
};
var getFarthestHue = (color2, colors2, colorSpace) => {
  return sortedArr(
    factor,
    cb3(color2, mode(colorSpace)),
    "desc",
    true
  )(colors2).filter((el) => el[factor] !== void 0)[0][factor];
};
var minHue = (colors2, colorSpace, colorObj2 = false) => {
  const result = sortedArr(
    factor,
    predicate2(colorSpace),
    "asc",
    true
  )(colors2).filter((el) => el[factor] !== void 0);
  let value;
  if (result.length > 0) {
    if (colorObj2) {
      value = result[0];
    } else {
      value = result[0][factor];
    }
  }
  return value;
};
var maxHue = (colors2, colorSpace, colorObj2 = false) => {
  const result = sortedArr(
    factor,
    predicate2(colorSpace),
    "desc",
    true
  )(colors2).filter((el) => el[factor] !== void 0);
  let value;
  if (result.length > 0) {
    if (colorObj2) {
      value = result[0];
    } else {
      value = result[0][factor];
    }
  }
  return value;
};

// color-maps/samples/hueTemperature.ts
var hueTemperature_default = {
  "red-purple": {
    warm: [343, 359],
    cool: [321, 342]
  },
  red: {
    warm: [21, 40],
    cool: [0, 20]
  },
  "yellow-red": {
    warm: [41, 54],
    cool: [55, 70]
  },
  yellow: {
    warm: [71, 90],
    cool: [91, 109]
  },
  "green-yellow": {
    warm: [110, 124],
    cool: [125, 140]
  },
  green: {
    warm: [141, 160],
    cool: [161, 180]
  },
  "blue-green": {
    warm: [181, 200],
    cool: [201, 220]
  },
  blue: {
    warm: [221, 235],
    cool: [236, 250]
  },
  "purple-blue": {
    warm: [271, 290],
    cool: [251, 270]
  },
  purple: {
    warm: [316, 320],
    cool: [291, 315]
  }
};

// colors/achromatic.ts
var isAchromatic = (color2) => {
  const cb4 = (mc) => getChannel(mc)(color2);
  const checkHsl = cb4("hsl.s");
  const checkLch = cb4("lch.c");
  if ((checkHsl || checkLch) === 0) {
    return true;
  } else {
    return false;
  }
};

// colors/overtone.ts
var overtone = (color2) => {
  const factor2 = getChannel("lch.h")(color2);
  let hue = customFindKey(hueTemperature_default, factor2);
  if (isAchromatic(color2)) {
    return "gray";
  } else if (/-/.test(hue)) {
    hue = hue.split("-");
    return hue[1];
  } else {
    return false;
  }
};

// colors/tailwindColors.ts
var tailwindColors = (shade) => (val) => {
  shade = shade.toLowerCase();
  const { keys: keys3 } = Object;
  let targetHue2;
  if (keys3(tailwind_default).indexOf(shade) != -1) {
    targetHue2 = tailwind_default[shade];
  } else {
    throw Error(
      `${shade} is not a valid shade in the default Tailwind palette`
    );
  }
  if (typeof val === "undefined") {
    return keys3(targetHue2).map((value) => targetHue2[value]);
  } else if (keys3(targetHue2).indexOf(val) > -1) {
    return targetHue2[val];
  } else {
    throw Error(
      `${val} is not a valid scale value. Values are in increments of 100 up to 900 e.g "200"`
    );
  }
};

// colors/temperature.ts
var predicate3 = (factor2, temp) => {
  const hueKeys2 = Object.keys(hueTemperature_default);
  if (hueKeys2.some(
    (val) => inRange(
      floorCeil(factor2),
      hueTemperature_default[val][temp][0],
      hueTemperature_default[val][temp][1]
    )
  )) {
    return true;
  } else {
    return false;
  }
};
var isCool = (color2) => {
  const factor2 = getChannel("lch.h")(color2);
  return predicate3(factor2, "cool");
};
var isWarm = (color2) => {
  const factor2 = getChannel("lch.h")(color2);
  return predicate3(factor2, "cool");
};
var maxTemp = (color2) => {
  const factor2 = getChannel("lch.h")(color2);
  const hue = customFindKey(hueTemperature_default, factor2);
  const maxHue2 = max(...customConcat(hueTemperature_default[hue]));
  const result = getTemp({
    l: getChannel("lch.l")(color2),
    c: getChannel("lch.c")(color2),
    h: maxHue2,
    mode: "lch"
  });
  return result;
};
var minTemp = (color2) => {
  let factor2 = getChannel("lch.h")(color2);
  const hue = customFindKey(hueTemperature_default, factor2);
  const minHue2 = min(...customConcat(hueTemperature_default[hue]));
  const result = getTemp({
    l: getChannel("lch.l")(color2),
    c: getChannel("lch.c")(color2),
    h: minHue2,
    mode: "lch"
  });
  return result;
};

// colors/getHue.ts
import { useMode as useMode8, modeLch as modeLch5 } from "culori/fn";
var getHue = (color2) => {
  const lch = useMode8(modeLch5);
  color2 = lch(toHex(color2));
  const factor2 = color2["h"];
  const hueKeys2 = Object.keys(hueTemperature_default);
  const hueFamily = hueKeys2.map((hue) => {
    const hueVals = customConcat(hueTemperature_default[hue]);
    const minVal = min(...hueVals);
    const maxVal = max(...hueVals);
    const bool = customConcat(hueTemperature_default[hue]).some(
      () => inRange(factor2, minVal, maxVal)
    );
    if (bool) {
      return hue;
    }
  }).filter((val) => typeof val === "string").toString();
  return hueFamily;
};

// colors/getComplimentaryHue.ts
var { keys: keys2 } = Object;
var hueKeys = keys2(hueTemperature_default);
var getComplimentaryHue = (color2, colorObj2 = false) => {
  const modeChannel = "lch.h";
  const complementaryHue = adjustHue(
    getChannel(modeChannel)(color2) + 180
  );
  const hueFamily = hueKeys.map((hue) => {
    const hueVals = customConcat(hueTemperature_default[hue]);
    const minVal = min(...hueVals);
    const maxVal = max(...hueVals);
    const bool = customConcat(hueTemperature_default[hue]).some(
      () => inRange(complementaryHue, minVal, maxVal)
    );
    if (bool) {
      return hue;
    }
  }).filter((val) => typeof val === "string").toString();
  let result;
  if (complementaryHue) {
    result = {
      hue: hueFamily,
      color: toHex(setChannel(modeChannel)(color2, complementaryHue))
    };
  } else {
    result = { hue: "gray", color: color2 };
  }
  return colorObj2 && result || result["color"];
};

// converters/rgb2num.ts
import { useMode as useMode9, modeRgb as modeRgb2 } from "culori/fn";
var rgb2num = (color2) => {
  const toRgb2 = useMode9(modeRgb2);
  const rgb2 = toRgb2(toHex(color2));
  return (255 * rgb2["r"] << 16) + (255 * rgb2["g"] << 8) + 255 * rgb2["b"];
};

// converters/ciecam.ts
import { rgb, illuminant, xyz, workspace } from "ciebase-ts";
import { cfs, cam } from "ciecam02-ts";
var baseCieCam = cam(
  {
    whitePoint: illuminant["D65"],
    adaptingLuminance: 40,
    backgroundLuminance: 20,
    surroundType: "average",
    discounting: false
  },
  cfs("JCh")
);
var xyzConverter = xyz(workspace["WideGamutRGB"], illuminant["D65"]);
var colorToCam = (color2) => {
  return baseCieCam.fromXyz(
    xyzConverter.fromRgb(rgb.fromHex(toHex(color2)))
  );
};
var camToColor = (CAM) => {
  return rgb.toHex(xyzConverter.toRgb(baseCieCam.toXyz(CAM)));
};

// colors/color.ts
import { interpolate as interpolate4 } from "culori/fn";
var IColor = class {
  constructor(c, options) {
    let {
      illuminant: illuminant2,
      alpha: alpha2,
      colorspace,
      luminance,
      saturation,
      lightMode,
      darkMode,
      lightness: lightness2,
      temperature
    } = options || {};
    c = checkArg(c, "#000");
    this["temperature"] = checkArg(temperature, getTemp(c));
    this["illuminant"] = checkArg(illuminant2, "D65");
    this["alpha"] = checkArg(alpha2, alpha(c));
    this["_color"] = c;
    this["_luminance"] = checkArg(luminance, getLuminance(c));
    this["lightness"] = checkArg(lightness2, getChannel("lch.l")(c));
    this["colorspace"] = checkArg(colorspace, "jch");
    this["_saturation"] = checkArg(
      saturation,
      getChannel(
        `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
      )(c)
    );
    this["temperature"] = checkArg(temperature, getTemp(c));
    this["lightMode"] = checkArg(lightMode, colors("gray", "100"));
    this["darkMode"] = checkArg(darkMode, colors("gray", "800"));
  }
  alpha(amount) {
    if (amount) {
      this["_color"] = alpha(this["_color"], amount);
      return this;
    } else {
      return alpha(this["_color"]);
    }
  }
  getChannel(channel) {
    return getChannel(`${this["colorspace"]}.${channel.toLowerCase()}`)(
      this["_color"]
    );
  }
  setChannel(channel, value) {
    this["_color"] = setChannel(
      `${this["colorspace"]}.${channel.toLowerCase()}`
    )(this["_color"], value);
    return this;
  }
  temperature(kelvins) {
    if (kelvins) {
      this["_color"] = temp2Color(kelvins);
      this["temperature"] = getTemp(this["_color"]);
      return this;
    } else {
      return getTemp(this["_color"]);
    }
  }
  via(origin, t, options) {
    const result = (t2) => interpolate4(
      [origin, this["color"]],
      this["colorspace"],
      checkArg(options, interpolatorConfig)
    )(t2);
    return toHex(result(t));
  }
  brighten(amount) {
    this["_color"] = brighten(this["_color"], amount);
    return this;
  }
  darken(amount) {
    this["_color"] = darken(this["_color"], amount);
    return this;
  }
  // Added viewing conditions options
  toCam() {
    return colorToCam(this["_color"]);
  }
  toHex() {
    this["_color"] = toHex(this["_color"]);
    return this["_color"];
  }
  pastel() {
    this["_color"] = pastel(this["_color"]);
    return this;
  }
  pairedScheme(options) {
    this["colors"] = load(
      pairedScheme(this["_color"], checkArg(options, {}))
    );
    return this["colors"];
  }
  hueShift(options) {
    options["iterations"] = checkArg(options["iterations"], 1);
    if (options["iterations"]) {
      return hueShift(this["_color"], options);
    } else {
      this["colors"] = load(
        hueShift(this["_color"], checkArg(options, {}))
      );
      return this["colors"];
    }
  }
  getComplimentaryHue(colorObj2) {
    if (colorObj2) {
      return getComplimentaryHue(
        this["_color"],
        checkArg(colorObj2, colorObj2)
      );
    } else {
      this["_color"] = getComplimentaryHue(
        this["_color"],
        checkArg(colorObj2, colorObj2)
      );
      return this["_color"];
    }
  }
  earthtone(options) {
    options["iterations"] = checkArg(options["iterations"], 1);
    if (options["iterations"] <= 1) {
      return earthtone(this["_color"], options);
    } else {
      this["colors"] = load(
        earthtone(this["_color"], checkArg(options, {}))
      );
      return this["colors"];
    }
  }
  contrast(against) {
    let result;
    switch (against) {
      case "lightMode":
        result = getContrast(this["_color"], this["background"]["lightMode"]);
        break;
      case "darkMode":
        result = getContrast(this["_color"], this["background"]["darkMode"]);
        break;
      default:
        result = getContrast(this["_color"], this["background"]["custom"]);
        break;
    }
    return result;
  }
  luminance(amount) {
    if (amount) {
      this["_luminance"] = amount;
      this["_color"] = setLuminance(this["_color"], this["_color"]);
      return this;
    } else {
    }
    return getLuminance(this["_color"]);
  }
  output() {
    return this["_color"];
  }
  saturation(amount) {
    this["_saturation"] = getChannel(
      `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
    )(this["_color"]);
    if (amount) {
      this["_color"] = setChannel(
        `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
      )(this["_color"], amount);
      return this;
    } else {
      return this["_saturation"];
    }
  }
  isAchromatic() {
    return isAchromatic(this["_color"]);
  }
  isWarm() {
    return isWarm(this["_color"]);
  }
  isCool() {
    return isCool(this["_color"]);
  }
  /**
   * @function
   * @description Returns the color as a simulation of the passed in type of color vision deficiency with the deficiency filter's intensity determined by the severity value.
   * @param deficiency The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' are unable to perceive 'blue' light. Default is 'red' when the defeciency parameter is undefined or any falsy value.
   * @see For a deep dive on  color vision deficiency go to
   * @param color The color to return its deficiency simulated variant.
   * @param severity The intensity of the filter. The exepected value is between [0,1]. For example 0.5
   * @returns The color as its simulated variant as a hexadecimal string.
   * @example
   * 
   * import { colorDeficiency, toHex } from 'huetiful-js'
  
  // Here we are simulating color blindness of tritanomaly or we can't see 'blue'. 
  // We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
  let tritanomaly = colorDeficiency('blue')
  console.log(tritanomaly(['rgb', 230, 100, 50, 0.5], 0.1))
  // #dd663680
  
  // Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
  let protanopia = colorDeficiency('red')
  console.log(protanopia({ h: 20, w: 50, b: 30, mode: 'hwb' }))
  // #9f9f9f
   */
  deficiency(deficiency, severity = 1) {
    this["_color"] = colorDeficiency(deficiency)(this["_color"], severity);
    return this;
  }
  getFarthestHue(colors2) {
    return getFarthestHue(this["_color"], colors2, this["colorspace"]);
  }
  getNearestHue(colors2) {
    return getNearestHue(this["_color"], colors2, this["colorspace"]);
  }
  getNearestChroma(colors2) {
    return getNearestChroma(this["_color"], colors2, this["colorspace"]);
  }
  getNearestLightness(colors2) {
    return getNearestLightness(this["_color"], colors2);
  }
  getFarthestChroma(colors2) {
    return getFarthestChroma(this["_color"], colors2, this["colorspace"]);
  }
  getFarthestLightness(colors2) {
    return getFarthestLightness(this["_color"], colors2);
  }
  ovetone() {
    return overtone(this["_color"]);
  }
  getHue() {
    return getHue(this["_color"]);
  }
  scheme(scheme2, easingFunc) {
    return load(scheme(scheme2)(this["_color"], easingFunc));
  }
};
var color = (color2) => new IColor(color2);

// getters_and_setters/alpha.ts
import { useMode as useMode10, modeLch as modeLch6 } from "culori/fn";
var alpha = (color2, value) => {
  color2 = color2 || "black";
  const channel = "alpha";
  const lch = useMode10(modeLch6);
  const src = lch(toHex(color2));
  if (typeof value === "undefined" || null) {
    return src[channel];
  } else if (typeof value === "number") {
    if (inRange(value, 0, 1)) {
      src[channel] = value;
    } else {
      src[channel] = value / 100;
    }
  } else if (typeof value === "string") {
    expressionParser(src, channel, value);
  }
  return toHex(src);
};

// getters_and_setters/darken.ts
import { easingSmootherstep as easingSmootherstep2, modeLab, useMode as useMode11 } from "culori/fn";
var toLab = useMode11(modeLab);
var darken = (color2, value) => {
  const Kn = 18;
  const channel = "l";
  const src = toLab(toHex(color2));
  if (typeof value === "number") {
    src["l"] -= Kn * easingSmootherstep2(value / 100);
  } else if (typeof value === "string") {
    expressionParser(src, channel, value || 1);
  }
  return toHex(src);
};
var brighten = (color2, value) => {
  const src = toLab(toHex(color2));
  const channel = "l";
  if (typeof value == "number") {
    value = Math.abs(value);
    src["l"] -= 18 * easingSmootherstep2(value / 100);
  } else if (typeof value == "string") {
    expressionParser(src, channel, value);
  }
  return toHex(src);
};

// accessibility/colorDeficiency.ts
import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  filterGrayscale
} from "culori/fn";
var baseColorDeficiency = (def, col, sev) => {
  let result;
  col = toHex(col);
  switch (def) {
    case "blue":
      result = filterDeficiencyTrit(sev)(col);
      break;
    case "red":
      result = filterDeficiencyProt(sev)(col);
      break;
    case "green":
      result = filterDeficiencyDeuter(sev)(col);
      break;
    case "monochromacy":
      result = filterGrayscale(sev, "lch")(col);
      break;
  }
  return toHex(result);
};
var colorDeficiency = (deficiency) => (color2, severity = 1) => {
  const deficiencies = ["red", "blue", "green", "monochromacy"];
  deficiency = checkArg(deficiency, "red");
  if (typeof deficiency === "string" && deficiencies.some((el) => el === deficiency)) {
    return baseColorDeficiency(deficiency, color2, severity);
  } else {
    throw Error(
      `Unknown color vision deficiency ${deficiency}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`
    );
  }
};
export {
  IColor,
  adjustHue,
  alpha,
  baseCieCam,
  brighten,
  camToColor,
  checkArg,
  color,
  colorDeficiency,
  colorObj,
  colorObjArr,
  colorToCam,
  colors,
  customConcat,
  customFindKey,
  customSort,
  darken,
  discoverPalettes,
  diverging,
  earthtone,
  expressionParser,
  filterByContrast,
  filterByDistance,
  filterByHue,
  filterByLightness,
  filterByLuminance,
  filterBySaturation,
  filterByTemp,
  filteredArr,
  floorCeil,
  getChannel,
  getComplimentaryHue,
  getContrast,
  getFarthestChroma,
  getFarthestHue,
  getFarthestLightness,
  getHue,
  getLuminance,
  getModeChannel,
  getNearestChroma,
  getNearestHue,
  getNearestLightness,
  getSaturationRange,
  getTemp,
  gt,
  gte,
  hueShift,
  inRange,
  isAchromatic,
  isCool,
  isInt,
  isWarm,
  load,
  lt,
  lte,
  matchChromaChannel,
  max,
  maxChroma,
  maxHue,
  maxLightness,
  maxTemp,
  min,
  minChroma,
  minHue,
  minLightness,
  minTemp,
  normalize,
  num2rgb,
  overtone,
  pairedScheme,
  pastel,
  polynomial,
  qualitative,
  random,
  rgb2num,
  scheme,
  sequential,
  setChannel,
  setLuminance,
  sortByContrast,
  sortByDistance,
  sortByHue,
  sortByLightness,
  sortByLuminance,
  sortBySaturation,
  sortByTemp,
  sortedArr,
  tailwindColors,
  temp2Color,
  toHex
};

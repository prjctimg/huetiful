// src/getters_and_setters/get.ts
import { converter } from "culori/fn";
import "culori/css";

// src/converters/toHex.ts
import "culori/css";
import { formatHex8 as formatHex82, formatHex, colorsNamed } from "culori/fn";

// src/converters/num2rgb.ts
import "culori/css";
var num2rgb = (num, hex2 = !1) => {
  if (typeof num == "number" && num >= 0 && num <= 16777215) {
    let r = num >> 16, g = num >> 8 & 255, b = num & 255, output = {
      r: r / 255,
      g: g / 255,
      b: b / 255,
      mode: "rgb"
    };
    return hex2 ? toHex(output) : output;
  } else
    throw Error("unknown num color: " + num);
};

// src/fp/misc.ts
var checkArg = (arg, def) => arg || def, getModeChannel = (mode2, key) => mode2.charAt(key);

// src/converters/toHex.ts
var toHex = (color) => {
  let src = {};
  if (typeof color == "string" && !Object.keys(colorsNamed).some((el) => el === color))
    return color;
  if (Array.isArray(color)) {
    let mode2 = color[0], modeChannels = mode2.substring(mode2.length - 3), channels = (src2, colorArr) => (colorArr.shift(), colorArr.length === 4 && (colorArr = colorArr.slice(0, 3)), colorArr), channelMapper = (src2 = {}, mode3, colorArr) => (src2.mode = mode3, src2.mode === "rgb" ? colorArr.some((ch) => Math.abs(ch) > 1) && colorArr.map(
      (ch, key) => src2[getModeChannel(mode3, key)] = ch / 255
    ) : colorArr.map((ch, key) => src2[getModeChannel(mode3, key)] = ch), src2);
    src.alpha = color[4] || 1, src = channelMapper(src, modeChannels, channels(src, color)), src = src.alpha < 1 && formatHex82(src) || formatHex(src);
  } else
    typeof color == "number" ? src = num2rgb(color, !0) : src = color.alpha && formatHex82(color) || formatHex(color);
  return src;
};

// src/getters_and_setters/get.ts
var getChannel = (mc) => (color) => {
  let [mode2, channel] = mc.split("."), src = converter(mode2)(toHex(color));
  if (channel)
    return src[channel];
  throw Error(`unknown channel ${channel} in mode ${mode2}`);
};

// src/fp/string/matchChromaChannel.ts
var matchChromaChannel = (colorSpace) => {
  let reChroma = /(s|c)/, ch = reChroma.exec(colorSpace);
  if (reChroma.test(colorSpace))
    return `${colorSpace}.${ch[0]}`;
  throw Error(
    `The color space ${colorSpace} has no chroma/saturation channel.`
  );
};

// src/fp/object/colorObj.ts
var colorObj = (factor2, callback) => (color) => ({ [factor2]: callback(color), name: color });

// src/fp/array/colorObjArr.ts
var colorObjArr = (factor2, callback) => (colors2) => {
  let cb4 = colorObj(factor2, callback);
  return colors2.map((color) => cb4(color));
};

// src/fp/array/customSort.ts
var customSort = (order, factor2) => (factor2 = factor2 || "factor", (a, b) => {
  if (order === "asc")
    return a[factor2] - b[factor2];
  if (order === "desc")
    return b[factor2] - a[factor2];
});

// src/fp/array/sortedArr.ts
var sortedArr = (factor2, callback, order, colorObj2 = !1) => (colors2) => {
  let results = colorObjArr(factor2, callback)(colors2);
  return results.sort(customSort(order, factor2)), colorObj2 ? results : results.map((color) => color.name);
};

// src/colors/chroma.ts
var chromaDiff = (color, colorSpace) => (subtrahend) => {
  let cs = matchChromaChannel(colorSpace);
  return getChannel(cs)(color) < getChannel(cs)(subtrahend) ? getChannel(cs)(subtrahend) - getChannel(cs)(color) : getChannel(cs)(color) - getChannel(cs)(subtrahend);
}, predicate = (colorSpace) => (color) => getChannel(matchChromaChannel(colorSpace))(color) || void 0, getNearestChroma = (color, colors2, colorSpace) => {
  let factor2 = "saturation", cb4 = chromaDiff(color, colorSpace || "lch");
  return sortedArr(
    factor2,
    cb4,
    "asc",
    !0
  )(colors2).filter((el) => el[factor2] !== void 0)[0][factor2];
}, getFarthestChroma = (color, colors2, colorSpace) => {
  let factor2 = "saturation", cb4 = chromaDiff(color, colorSpace || "lch");
  return sortedArr(
    factor2,
    cb4,
    "desc",
    !0
  )(colors2).filter((el) => el[factor2] !== void 0)[0][factor2];
}, minChroma = (colors2, colorSpace, colorObj2 = !1) => {
  let factor2 = "saturation", result = sortedArr(
    factor2,
    predicate(colorSpace || "lch"),
    "asc",
    !0
  )(colors2).filter((el) => el[factor2] !== void 0), value;
  return result.length > 0 && (colorObj2 ? value = result[0] : value = result[0][factor2]), value;
}, maxChroma = (colors2, colorSpace, colorObj2 = !1) => {
  let factor2 = "saturation", result = sortedArr(
    factor2,
    predicate(colorSpace || "lch"),
    "desc",
    !0
  )(colors2).filter((el) => el[factor2] !== void 0), value;
  return result.length > 0 && (colorObj2 ? value = result[0] : value = result[0][factor2]), value;
};

// src/colors/colorBrewer.ts
var cb = (str) => str.toLowerCase(), schemeMapper = (scheme, schemesObject) => {
  let { keys: keys3 } = Object, schemeOptions = keys3(schemesObject).map(cb);
  if (scheme = cb(scheme), schemeOptions.indexOf(scheme) > -1)
    return schemesObject[scheme];
  throw Error(`${scheme} is an invalid scheme option.`);
}, sequential = (scheme) => schemeMapper(scheme, {
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
}), diverging = (scheme) => schemeMapper(scheme, {
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
}), qualitative = (scheme) => schemeMapper(scheme, {
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
});

// src/color-maps/swatches/tailwind.ts
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

// src/colors/colors.ts
var colors = (shade, val) => {
  let { keys: keys3 } = Object, defaultHue = "all", hueKeys2 = keys3(tailwind_default);
  if (shade = shade.toLowerCase(), shade === defaultHue)
    return tailwind_default.map((color) => color[val || "500"]);
  if (hueKeys2.some((hue) => hue === shade) && val)
    return tailwind_default[shade][val];
  if (shade && typeof val > "u")
    return keys3(tailwind_default[shade]).map((key) => tailwind_default[shade][key]);
  if (typeof val > "u")
    throw Error("Both shade and value cannot be undefined");
};

// src/colors/lightness.ts
var lightness = "lab.l", lightnessDiff = (color) => (subtrahend) => getChannel(lightness)(color) < getChannel(lightness)(subtrahend) ? getChannel(lightness)(subtrahend) - getChannel(lightness)(color) : getChannel(lightness)(color) - getChannel(lightness)(subtrahend), getNearestLightness = (color, colors2) => {
  let factor2 = "lightness", cb4 = lightnessDiff(color);
  return sortedArr(factor2, cb4, "asc", !0)(colors2)[0][factor2];
}, getFarthestLightness = (color, colors2) => {
  let factor2 = "lightness", cb4 = lightnessDiff(color);
  return sortedArr(factor2, cb4, "desc", !0)(colors2)[0][factor2];
}, minLightness = (colors2, colorObj2 = !1) => {
  let factor2 = "lightness", cb4 = getChannel(lightness), result = sortedArr(
    factor2,
    cb4,
    "asc",
    !0
  )(colors2), value;
  return gt(result.length, 0) && (colorObj2 ? value = result[0] : value = result[0][factor2]), value;
}, maxLightness = (colors2, colorObj2 = !1) => {
  let factor2 = "lightness", cb4 = getChannel(lightness), result = sortedArr(
    factor2,
    cb4,
    "desc",
    !0
  )(colors2), value;
  return gt(result.length, 0) && (colorObj2 ? value = result[0] : value = result[0][factor2]), value;
};

// src/colors/hue.ts
var { abs } = Math, factor = "hue", mode = (colorSpace) => `${colorSpace || "lch"}.h`, targetHue = (color, colorSpace) => getChannel(mode(colorSpace))(color), cb2 = (color, colorSpace) => (subtrahend) => abs(
  targetHue(color, colorSpace) - getChannel(mode(colorSpace))(subtrahend)
), predicate2 = (colorSpace) => (color) => getChannel(mode(colorSpace))(color) || void 0, getNearestHue = (color, colors2, colorSpace) => sortedArr(
  factor,
  cb2(color, mode(colorSpace)),
  "asc",
  !0
)(colors2).filter((el) => el[factor] !== void 0)[0][factor], getFarthestHue = (color, colors2, colorSpace) => sortedArr(
  factor,
  cb2(color, mode(colorSpace)),
  "desc",
  !0
)(colors2).filter((el) => el[factor] !== void 0)[0][factor], minHue = (colors2, colorSpace, colorObj2 = !1) => {
  let result = sortedArr(
    factor,
    predicate2(colorSpace),
    "asc",
    !0
  )(colors2).filter((el) => el[factor] !== void 0), value;
  return result.length > 0 && (colorObj2 ? value = result[0] : value = result[0][factor]), value;
}, maxHue = (colors2, colorSpace, colorObj2 = !1) => {
  let result = sortedArr(
    factor,
    predicate2(colorSpace),
    "desc",
    !0
  )(colors2).filter((el) => el[factor] !== void 0), value;
  return result.length > 0 && (colorObj2 ? value = result[0] : value = result[0][factor]), value;
};

// src/color-maps/samples/hueTemperature.ts
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

// src/colors/achromatic.ts
var isAchromatic = (color) => {
  let cb4 = (mc) => getChannel(mc)(color), checkHsl = cb4("hsl.s"), checkLch = cb4("lch.c");
  return (checkHsl || checkLch) === 0;
};

// src/fp/number/inRange.ts
var inRange = (number, start, end) => {
  var nativeMax = Math.max, nativeMin = Math.min;
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
};

// src/fp/number/comparison.ts
var gt2 = (x, y) => x > y, lt = (x, y) => x < y, gte = (x, y) => x >= y, lte = (x, y) => x <= y;

// src/fp/array/min_max.ts
var identity = (value) => value, baseExtremum = (array, iteratee, comparator) => {
  for (var index = -1, length = array.length; ++index < length; ) {
    var value = array[index], current = iteratee(value);
    if (current != null && (computed === void 0 ? current === current : comparator(current, computed)))
      var computed = current, result = value;
  }
  return result;
}, min = (array) => array && array.length ? baseExtremum(array, identity, lt) : void 0, max = (array) => array && array.length ? baseExtremum(array, identity, gt2) : void 0;

// src/fp/object/customConcat.ts
var customConcat = (hue) => {
  let res = [], { keys: keys3 } = Object;
  if (typeof hue == "object") {
    let hueKeys2 = keys3(hue);
    res.push(...hueKeys2.map((key) => hue[key]));
  }
  return res;
};

// src/fp/object/customFindKey.ts
var customFindKey = (collection, factor2) => Object.keys(collection).filter((key) => {
  let hueVals = customConcat(collection[key]), minVal = min(...hueVals), maxVal = max(...hueVals);
  return inRange(factor2, minVal, maxVal);
}).toString();

// src/colors/overtone.ts
var overtone = (color) => {
  let factor2 = getChannel("lch.h")(color), hue = customFindKey(hueTemperature_default, factor2);
  return isAchromatic(color) ? "gray" : /-/.test(hue) ? (hue = hue.split("-"), hue[1]) : !1;
};

// src/colors/tailwindColors.ts
var tailwindColors = (shade) => (val) => {
  shade = shade.toLowerCase();
  let { keys: keys3 } = Object, targetHue2;
  if (keys3(tailwind_default).indexOf(shade) != -1)
    targetHue2 = tailwind_default[shade];
  else
    throw Error(
      `${shade} is not a valid shade in the default Tailwind palette`
    );
  if (typeof val > "u")
    return keys3(targetHue2).map((value) => targetHue2[value]);
  if (keys3(targetHue2).indexOf(val) > -1)
    return targetHue2[val];
  throw Error(
    `${val} is not a valid scale value. Values are in increments of 100 up to 900 e.g "200"`
  );
};

// src/converters/getTemp.ts
import { useMode, modeLrgb } from "culori/fn";

// src/converters/temp2Color.ts
var temp2Color = (kelvin, hex2 = !1) => {
  let { log } = Math, temp = kelvin / 100, r, g, b;
  temp < 66 ? (r = 255, g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g), b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b)) : (r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r), g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g), b = 255);
  let result = {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    mode: "rgb"
  };
  return hex2 ? toHex(result) : result;
};

// src/converters/getTemp.ts
var getTemp = (color) => {
  let { round } = Math, src = useMode(modeLrgb)(toHex(color)), r = src.r, b = src.b, minTemp2 = 1e3, maxTemp2 = 4e4, eps = 0.4, temp;
  for (; maxTemp2 - minTemp2 > eps; ) {
    temp = (maxTemp2 + minTemp2) * 0.5;
    let rgb2 = temp2Color(temp, !1);
    rgb2.b / rgb2.r >= b / r ? maxTemp2 = temp : minTemp2 = temp;
  }
  return round(temp);
};

// src/fp/number/isInt.ts
var isInt = (num) => /^-?[0-9]+$/.test(num.toString());

// src/fp/number/floorCeil.ts
var { ceil, floor } = Math, floorCeil = (num) => {
  if (isInt(num))
    return num;
  {
    let float = num.toString().split(".")[1];
    ((float2) => /^[0-4]$/.test(float2.charAt(0)))(float) ? num = floor(num) : num = ceil(num);
  }
  return num;
};

// src/colors/temperature.ts
var predicate3 = (factor2, temp) => !!Object.keys(hueTemperature_default).some(
  (val) => inRange(
    floorCeil(factor2),
    hueTemperature_default[val][temp][0],
    hueTemperature_default[val][temp][1]
  )
), isCool = (color) => {
  let factor2 = getChannel("lch.h")(color);
  return predicate3(factor2, "cool");
}, isWarm = (color) => {
  let factor2 = getChannel("lch.h")(color);
  return predicate3(factor2, "cool");
}, maxTemp = (color) => {
  let factor2 = getChannel("lch.h")(color), hue = customFindKey(hueTemperature_default, factor2), maxHue2 = max(...customConcat(hueTemperature_default[hue]));
  return getTemp({
    l: getChannel("lch.l")(color),
    c: getChannel("lch.c")(color),
    h: maxHue2,
    mode: "lch"
  });
}, minTemp = (color) => {
  let factor2 = getChannel("lch.h")(color), hue = customFindKey(hueTemperature_default, factor2), minHue2 = min(...customConcat(hueTemperature_default[hue]));
  return getTemp({
    l: getChannel("lch.l")(color),
    c: getChannel("lch.c")(color),
    h: minHue2,
    mode: "lch"
  });
};

// src/getters_and_setters/alpha.ts
import { useMode as useMode2, modeLch } from "culori/fn";

// src/fp/string/expressionParser.ts
function expressionParser(src, channel, value) {
  let reOperator = /^(\*|\+|\-|\/)/, reValue = /[0-9]*\.?[0-9]+/, sign = reOperator.exec(value), amt = reValue.exec(value), cb4 = (amt2) => parseFloat(amt2);
  switch (sign[0]) {
    case "+":
      src[channel] += +cb4(amt[0]);
      break;
    case "-":
      src[channel] -= +cb4(amt[0]);
      break;
    case "*":
      src[channel] *= +cb4(amt[0]);
      break;
    case "/":
      src[channel] /= +cb4(amt[0]);
      break;
    default:
      src[channel] = +cb4(amt[0]);
  }
  return src;
}

// src/getters_and_setters/alpha.ts
var alpha = (color, value) => {
  color = color || "black";
  let channel = "alpha", src = useMode2(modeLch)(toHex(color));
  return typeof value > "u" ? src[channel] : (typeof value == "number" ? inRange(value, 0, 1) ? src[channel] = value : src[channel] = value / 100 : typeof value == "string" && expressionParser(src, channel, value), formatHex8(src));
};

// src/getters_and_setters/darken.ts
import { easingSmootherstep, modeLab, useMode as useMode3 } from "culori/fn";
var toLab = useMode3(modeLab), darken = (color, value) => {
  let channel = "l", src = toLab(toHex(color));
  return typeof value == "number" ? src.l -= 18 * easingSmootherstep(value / 100) : typeof value == "string" && expressionParser(src, channel, value || 1), toHex(src);
}, brighten = (color, value) => {
  let src = toLab(toHex(color));
  return typeof value == "number" ? (value = Math.abs(value), src.l -= Kn * easingSmootherstep(value / 100)) : typeof value == "string" && expressionParser(src, "l", value), toHex(src);
};

// src/getters_and_setters/luminance.ts
import { interpolate, wcagLuminance, useMode as useMode4, modeRgb } from "culori/fn";
var getLuminance = (color) => wcagLuminance(hex(color)), { pow, abs: abs2 } = Math, toRgb = useMode4(modeRgb), setLuminance = (color, lum) => {
  let white = "#ffffff", black = "#000000", MAX_ITER = 20;
  if (lum !== void 0 && typeof lum == "number") {
    lum == 0 && lum || black || lum == 1;
    let cur_lum = wcagLuminance(color);
    color = toRgb(hex(color));
    let test = (low, high) => {
      let mid = interpolate([low, high])(0.5), lm = wcagLuminance(mid);
      return abs2(lum - lm > 1e-7) || !MAX_ITER-- ? mid : lm > lum ? test(low, mid) : test(mid, high);
    }, rgb2;
    return cur_lum > lum ? rgb2 = test(black, color) : rgb2 = test(color, white), color = rgb2, color;
  }
  return rgb2luminance(color);
}, rgb2luminance = (color) => (color = toRgb(toHex(color)), 0.7152 * luminance_x(color.g) + 0.2126 * luminance_x(color.r) + 0.0722 * luminance_x(color.b)), luminance_x = (x) => (x /= 255, x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4));

// src/getters_and_setters/set.ts
import { converter as converter2 } from "culori/fn";
import "culori/css";
var setChannel = (mc) => (color, value) => {
  let [mode2, channel] = mc.split("."), src = converter2(mode2)(toHex(color));
  if (channel) {
    if (typeof value == "number")
      src[channel] = value;
    else if (typeof value == "string")
      expressionParser(src, channel, value);
    else
      throw new Error("unsupported value for setChannel");
    return src;
  } else
    throw new Error(`unknown channel ${channel} in mode ${mode2}`);
};

// src/palettes/hueShift.ts
import { easingSmoothstep, modeLch as modeLch2, samples, useMode as useMode5 } from "culori/fn";

// src/fp/number/adjustHue.ts
var adjustHue = (value = 0) => value > 0 ? value += Math.ceil(-value / 360) * 360 : value % 360;

// src/palettes/hueShift.ts
var lightnessMapper = (n) => (start1, end1) => (start2, end2) => (n - start1) / (end1 - start1) * (end2 - start2) + start2, hueShift = (color, options) => {
  color = useMode5(modeLch2)(toHex(color));
  let { iterations, hueStep, minLightness: minLightness2, maxLightness: maxLightness2, easingFunc } = options || {};
  easingFunc = checkArg(easingFunc, easingSmoothstep), iterations = checkArg(iterations, 6) + 1, hueStep = checkArg(hueStep, 5), minLightness2 = checkArg(minLightness2, 10), maxLightness2 = checkArg(maxLightness2, 90);
  let tValues = samples(iterations), palette = [color];
  for (let i = 1; i < iterations; i++) {
    let hueDark = adjustHue(color.h - hueStep * i), hueLight = adjustHue(color.h + hueStep * i), lightnessDark = lightnessMapper(easingFunc(tValues[i - 1]))(
      0.1,
      iterations
    )(color.l, minLightness2), lightnessLight = lightnessMapper(easingFunc(tValues[i - 1]))(
      0.05,
      iterations
    )(color.l, maxLightness2);
    palette.push({
      l: lightnessDark,
      c: color.c,
      h: hueDark,
      mode: "lch"
    }), palette.unshift({
      l: lightnessLight,
      c: color.c,
      h: hueLight,
      mode: "lch"
    });
  }
  return palette.map(toHex);
};

// src/palettes/discoverPalettes.ts
import { nearest, differenceEuclidean, useMode as useMode7, modeLch as modeLch4 } from "culori/fn";

// src/palettes/base.ts
import { useMode as useMode6, modeLch as modeLch3, easingSmoothstep as easingSmoothstep2, samples as samples2 } from "culori/fn";

// src/fp/number/random.ts
var random = (min2, max2) => {
  if (min2 > max2) {
    let mn = min2, mx = max2;
    max2 = mn, min2 = mx;
  } else
    return Math.random() * (max2 - min2) + min2;
};

// src/palettes/base.ts
var cb3 = (iterations, distance, color) => samples2(iterations).map(
  (val) => adjustHue((color.h + distance) * (val * easingSmoothstep2(val)))
), base = (scheme) => (color, easingFunc) => {
  scheme = scheme.toLowerCase(), easingFunc = checkArg(easingFunc, easingSmoothstep2), color = useMode6(modeLch3)(color);
  let lowMin = 0.05, lowMax = 0.495, highMin = 0.5, highMax = 0.995, targetHueSteps = {
    analogous: cb3(3, 12, color),
    triadic: cb3(3, 120, color),
    tetradic: cb3(4, 90, color),
    complementary: cb3(2, 180, color)
  };
  for (let scheme2 of Object.keys(targetHueSteps))
    targetHueSteps[scheme2].map(
      (step) => random(step * lowMax, step * lowMin) + random(step * highMax, step * highMin) / 2
    );
  return targetHueSteps[scheme].map((step) => ({
    l: color.l,
    c: color.c,
    h: step * easingFunc(1 / targetHueSteps[scheme].length),
    mode: "lch"
  })).map(toHex);
};

// src/palettes/discoverPalettes.ts
var { keys } = Object, isColorEqual = (c1, c2) => c1.h === c2.h && c1.l === c2.l && c1.c === c2.c, discoverPalettes = (colors2, scheme) => {
  let toLch = useMode7(modeLch4);
  colors2 = colors2.map((color) => toLch("lch")(toHex(color)));
  let palettes = {}, schemes = ["analogous", "triadic", "tetradic", "complementary"], targetPalettes = {};
  for (let color of colors2) {
    schemes.forEach((s) => targetPalettes[s] = base(s)(color, !1));
    for (let paletteType of keys(targetPalettes)) {
      let palette = [], variance = 0;
      for (let targetColor of targetPalettes[paletteType]) {
        let availableColors = colors2.filter(
          (color1) => !palette.some((color2) => isColorEqual(color1, color2))
        ), match = nearest(
          availableColors,
          differenceEuclidean("lch")
        )(targetColor)[0];
        variance += differenceEuclidean("lch")(targetColor, match), palette.push(match);
      }
      (!palettes[paletteType] || variance < palettes[paletteType].variance) && (palettes[paletteType] = palette.map(formatHex8));
    }
  }
  if (typeof scheme == "string")
    return palettes[scheme.toLowerCase()];
  if (typeof scheme > "u")
    return palettes;
  throw Error(
    `${scheme} is not a valid scheme. The schemes are triadic | tetradic | analogous | complementary`
  );
};

// src/palettes/getComplimentaryHue.ts
var { keys: keys2 } = Object, hueKeys = keys2(hueTemperature_default), getComplimentaryHue = (color, colorObj2 = !1) => {
  let modeChannel = "lch.h", complementaryHue = adjustHue(
    getChannel(modeChannel)(color) + 180
  ), hueFamily = hueKeys.map((hue) => {
    let hueVals = customConcat(hueTemperature_default[hue]), minVal = min(...hueVals), maxVal = max(...hueVals);
    if (customConcat(hueTemperature_default[hue]).some(
      () => inRange(complementaryHue, minVal, maxVal)
    ))
      return hue;
  }).filter((val) => typeof val == "string").toString(), result;
  return complementaryHue ? result = {
    hue: hueFamily,
    color: toHex(setChannel(modeChannel)(color, complementaryHue))
  } : result = { hue: "gray", color }, colorObj2 && result || result.color;
};

// src/palettes/earthtone.ts
import {
  interpolate as interpolate2,
  samples as samples3,
  interpolatorSplineNatural,
  fixupHueShorter,
  interpolatorSplineMonotone,
  interpolatorSplineBasisClosed,
  easingSmootherstep as easingSmootherstep2
} from "culori/fn";
var earthtone = (color, options) => {
  let {
    chromaInterpolator,
    hueFixup,
    hueInterpolator,
    lightnessInterpolator,
    iterations,
    earthtones,
    easingFunc
  } = options || {};
  easingFunc = checkArg(easingFunc, easingSmootherstep2), chromaInterpolator = checkArg(chromaInterpolator, interpolatorSplineNatural), hueFixup = checkArg(hueFixup, fixupHueShorter), hueInterpolator = checkArg(hueInterpolator, interpolatorSplineBasisClosed), lightnessInterpolator = checkArg(
    lightnessInterpolator,
    interpolatorSplineMonotone
  ), iterations = checkArg(iterations, 1), earthtones = checkArg(earthtones, "dark");
  let base2 = {
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
  }[earthtones.toLowerCase()], f = interpolate2([base2, toHex(color), easingFunc], "lch", {
    h: {
      fixup: hueFixup,
      use: hueInterpolator
    },
    c: {
      use: chromaInterpolator
    },
    l: {
      use: lightnessInterpolator
    }
  });
  return iterations === 1 ? toHex(f(0.5)) : samples3(iterations).map((t) => toHex(f(t)));
};

// src/palettes/getHue.ts
import { useMode as useMode8, modeLch as modeLch5 } from "culori/fn";
var getHue = (color) => {
  color = useMode8(modeLch5)(toHex(color));
  let factor2 = color.h;
  return Object.keys(hueTemperature_default).map((hue) => {
    let hueVals = customConcat(hueTemperature_default[hue]), minVal = min(...hueVals), maxVal = max(...hueVals);
    if (customConcat(hueTemperature_default[hue]).some(
      () => inRange(factor2, minVal, maxVal)
    ))
      return hue;
  }).filter((val) => typeof val == "string").toString();
};

// src/palettes/paired.ts
import {
  interpolate as interpolate3,
  samples as samples4,
  interpolatorSplineNatural as interpolatorSplineNatural2,
  fixupHueShorter as fixupHueShorter2,
  interpolatorSplineMonotone as interpolatorSplineMonotone2,
  interpolatorSplineBasisClosed as interpolatorSplineBasisClosed2,
  useMode as useMode9,
  modeLch as modeLch6,
  easingSmoothstep as easingSmoothstep3
} from "culori/fn";
var pairedScheme = (color, options) => {
  let {
    chromaInterpolator,
    hueFixup,
    hueInterpolator,
    lightnessInterpolator,
    iterations,
    via,
    hueStep,
    easingFunc
  } = options || {};
  easingFunc = checkArg(easingFunc, easingSmoothstep3), chromaInterpolator = checkArg(chromaInterpolator, interpolatorSplineNatural2), hueFixup = checkArg(hueFixup, fixupHueShorter2), hueInterpolator = checkArg(hueInterpolator, interpolatorSplineBasisClosed2), lightnessInterpolator = checkArg(
    lightnessInterpolator,
    interpolatorSplineMonotone2
  ), iterations = checkArg(iterations, 1), via = checkArg(via, "light"), hueStep = checkArg(hueStep, 5), color = useMode9(modeLch6)(toHex(color));
  let derivedHue = setChannel("lch.h")(color, color.h + hueStep), scale = interpolate3([color, {
    dark: "#263238",
    light: { l: 100, c: 1e-4, h: 0, mode: "lch" }
  }[via], derivedHue], "lch", {
    h: {
      fixup: hueFixup,
      use: hueInterpolator
    },
    c: {
      use: chromaInterpolator
    },
    l: {
      use: lightnessInterpolator
    }
  });
  if (iterations <= 1)
    return toHex(scale(0.5));
  {
    let results = samples4(iterations * 2).map((t) => toHex(scale(easingFunc(t))));
    return results.slice(0, results.length / 2);
  }
};

// src/palettes/pastel.ts
import { averageNumber, modeHsv, useMode as useMode10 } from "culori/fn";
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
], sampleSaturation = samplePastelObj.map((el) => el.saturation), sampleValues = samplePastelObj.map((el) => el.value), pastelSample = {
  averageSaturation: averageNumber(sampleValues),
  averageValue: averageNumber(sampleSaturation),
  minSampleSaturation: min(sampleSaturation),
  maxSampleSaturation: max(sampleSaturation),
  minSampleValue: min(sampleValues),
  maxSampleValue: max(sampleValues)
}, pastel = (color) => (color = useMode10(modeHsv)(toHex(color)), toHex({
  h: color.h,
  s: pastelSample.averageSaturation,
  v: random(pastelSample.minSampleValue, pastelSample.maxSampleValue),
  mode: "hsv"
}));

// src/fp/array/filteredArr.ts
var filteredArr = (factor2, cb4) => (colors2, start, end) => {
  let result;
  if (typeof start == "number")
    return result = colorObjArr(
      factor2,
      cb4
    )(colors2).filter((color) => inRange(color[factor2], start, end)).map((color) => color.name), result;
  if (typeof start == "string") {
    let reOperator = /^(>=|<=|<|>)/, val = /[0-9]*\.?[0-9]+/.exec(start), op = reOperator.exec(start), mapFilter = (test) => colorObjArr(
      factor2,
      cb4
    )(colors2).filter((el) => test(el[factor2], parseFloat(val[0]))).map((el) => el.name);
    switch (op[0]) {
      case "<":
        result = mapFilter(lt);
        break;
      case ">":
        result = mapFilter(gt2);
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

// src/filterBy/filterByTemp.ts
var filterByTemp = (colors2, startTemp = 1e3, endTemp = 6e3) => filteredArr("temp", getTemp)(colors2, startTemp, endTemp);

// src/filterBy/filterBySaturation.ts
var filterBySaturation = (colors2, startSaturation = 0.05, endSaturation = 1) => {
  let factor2 = "saturation", cb4 = getChannel("lch.c");
  return filteredArr(factor2, cb4)(
    colors2,
    100 * startSaturation,
    100 * endSaturation
  );
};

// src/filterBy/filterByLuminance.ts
var filterByLuminance = (colors2, startLuminance = 0.05, endLuminance = 1) => filteredArr("luminance", getLuminance)(colors2, startLuminance, endLuminance);

// src/filterBy/filterByHue.ts
var filterByHue = (colors2, startHue = 0, endHue = 360) => {
  let factor2 = "hue", cb4 = getChannel("lch.h");
  return filteredArr(factor2, cb4)(colors2, startHue, endHue);
};

// src/filterBy/filterByLightness.ts
var filterByLightness = (colors2, startLightness = 5, endLightness = 100) => {
  let factor2 = "lightness", cb4 = getChannel("lch.l");
  return filteredArr(factor2, cb4)(colors2, startLightness, endLightness);
};

// src/filterBy/filterByDistance.ts
import { differenceEuclidean as differenceEuclidean2 } from "culori/fn";
var filterByDistance = (colors2, against, startDistance = 0.05, endDistance, mode2, weights) => filteredArr("distance", ((against2, mode3) => (color) => differenceEuclidean2(
  mode3 || "lch",
  weights || [1, 1, 1, 0]
)(...[against2, color].map(toHex)))(against, mode2))(
  colors2,
  startDistance,
  endDistance
);

// src/filterBy/filterByContrast.ts
import { wcagContrast } from "culori/fn";
var filterByContrast = (colors2, against, startContrast = 0.05, endContrast) => filteredArr("contrast", ((against2) => (color) => wcagContrast(...[color, against2].map(toHex)))(against))(colors2, startContrast, endContrast);

// src/sortBy/sortByContrast.ts
import { wcagContrast as wcagContrast2 } from "culori/fn";
var sortByContrast = (colors2, against, order) => sortedArr("contrast", ((against2) => (color) => wcagContrast2(color, against2))(against), order)(colors2);

// src/sortBy/sortByDistance.ts
import { differenceEuclidean as differenceEuclidean3 } from "culori/fn";
var sortByDistance = (colors2, against, order, mode2, weights) => sortedArr("distance", ((against2, mode3) => (color) => differenceEuclidean3(mode3 || "lch", weights || [1, 1, 1, 0])(against2, color))(against, mode2), order)(colors2);

// src/sortBy/sortByHue.ts
var sortByHue = (colors2, order) => {
  let factor2 = "hue", cb4 = getChannel("lch.h");
  return sortedArr(factor2, cb4, order)(colors2);
};

// src/sortBy/sortByLightness.ts
var sortByLightness = (colors2, order) => {
  let factor2 = "lightness", cb4 = getChannel("lch.l");
  return sortedArr(factor2, cb4, order)(colors2);
};

// src/sortBy/sortByLuminance.ts
var sortByLuminance = (colors2, order) => sortedArr("luminance", getLuminance, order)(colors2);

// src/sortBy/sortBySaturation.ts
var sortBySaturation = (colors2, order) => {
  let factor2 = "saturation", cb4 = getChannel("lch.c");
  return sortedArr(factor2, cb4, order)(colors2);
};

// src/sortBy/sortByTemp.ts
var sortByTemp = (colors2, order) => sortedArr("temp", getTemp, order)(colors2);

// src/converters/rgb2num.ts
import { useMode as useMode11, modeRgb as modeRgb2 } from "culori/fn";
var rgb2num = (color) => {
  let rgb2 = useMode11(modeRgb2)(toHex(color));
  return (255 * rgb2.r << 16) + (255 * rgb2.g << 8) + 255 * rgb2.b;
};

// src/converters/ciecam.ts
import { rgb, illuminant, xyz, workspace } from "ciebase-ts";
import { cfs, cam } from "ciecam02-ts";
var baseCieCam = cam(
  {
    whitePoint: illuminant.D65,
    adaptingLuminance: 40,
    backgroundLuminance: 20,
    surroundType: "average",
    discounting: !1
  },
  cfs("JCh")
), xyzConverter = xyz(workspace.WideGamutRGB, illuminant.D65), colorToCam = (color) => baseCieCam.fromXyz(
  xyzConverter.fromRgb(rgb.fromHex(toHex(color)))
), camToColor = (CAM) => rgb.toHex(xyzConverter.toRgb(baseCieCam.toXyz(CAM)));

// src/accessibility/colorDeficiency.ts
import {
  filterDeficiencyDeuter,
  filterDeficiencyProt,
  filterDeficiencyTrit,
  filterGrayscale
} from "culori/fn";
var baseColorDeficiency = (def, col, sev) => {
  let result;
  switch (col = toHex(col), def) {
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
}, colorDeficiency = (deficiency) => (color, severity = 1) => {
  let deficiencies = ["red", "blue", "green", "monochromacy"];
  if (deficiency = [deficiency || "red"].toString().toLowerCase(), typeof deficiency == "string" && deficiencies.some((el) => el === deficiency))
    return baseColorDeficiency(deficiency, color, severity);
  throw Error(
    `Unknown color vision deficiency ${deficiency}. The options are the strings 'red' | 'blue' | 'green' | 'monochromacy'`
  );
};

// src/fp/number/normalize.ts
var normalize = (num, start, end) => num * (end - start);

// src/fp/number/polynomial.ts
var polynomial = (x) => Math.sqrt(Math.sqrt((Math.pow(x, 2.25) + Math.pow(x, 4)) / 2));
export {
  adjustHue,
  alpha,
  base,
  baseCieCam,
  brighten,
  camToColor,
  checkArg,
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
  getFarthestChroma,
  getFarthestHue,
  getFarthestLightness,
  getHue,
  getLuminance,
  getModeChannel,
  getNearestChroma,
  getNearestHue,
  getNearestLightness,
  getTemp,
  gt2 as gt,
  gte,
  hueShift,
  inRange,
  isAchromatic,
  isCool,
  isInt,
  isWarm,
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

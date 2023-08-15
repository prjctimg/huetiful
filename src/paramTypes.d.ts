export type earthtones = {
  "light gray": "#e5e5e5";
  silver: "#f5f5f5";
  sand: "#c2b2a4";
  tupe: "#a79e8a";
  mahogany: "#958c7c";
  "brick red": "#7d7065 ";
  clay: "#6a5c52";
  cocoa: "#584a3e";
  "dark brown": "#473b31";
  dark: "#352a21";
};
export type divergingScheme =
  | "Spectral"
  | "RdYlGn"
  | "RdBu"
  | "PiYG"
  | "PRGn"
  | "RdYlBu"
  | "BrBG"
  | "RdGy"
  | "PuOr";
export type qualitativeScheme =
  | "Set2"
  | "Accent"
  | "Set1"
  | "Set3"
  | "Dark2"
  | "Paired"
  | "Pastel2"
  | "Pastel1";

export type sequentialScheme =
  | "OrRd"
  | "PuBu"
  | "BuPu"
  | "Oranges"
  | "BuGn"
  | "YlOrBr"
  | "YlGn"
  | "Reds"
  | "RdPu"
  | "Greens"
  | "YlGnBu"
  | "Purples"
  | "GnBu"
  | "Greys"
  | "YlOrRd"
  | "PuRd"
  | "Blues"
  | "PuBuGn"
  | "Viridis";

export type palette =
  | "analogous"
  | "triadic"
  | "tetradic"
  | "complementary"
  | "splitComplementary";
export type Color = number | string | object;

/**
 * @param
 * An array of baseColor tokens (in short, just an array of valid colors)
 */

/**
 * @param
 *
 */
export type filterBy = (colors: Color[], start: number, end: number) => Color[];
export type factor = "luminance" | "temp" | "saturation";
export type sortBy = (colors: Color[], order: "asc" | "desc") => Color[];
export type factorMapper = (
  factor: string,
  cb: (arg: Color) => number,
  order?: "asc" | "desc"
) => (colors: Color[]) => Color[];

type HueColorSpaces = {
  hsl?: [number, number];
  hsv?: [number, number];
  hsi?: [number, number];

  lch?: [number, number];
  oklch?: [number, number];
  hcl?: [number, number];
};

type ScaleValues = {
  "100": string;
  "50": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
};

// The users dont interact directly with the Color instance rather it is wrapped in a function and acts as an entry wrapper to the underlying class meta.

type HueMap = {
  indigo: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };
  gray: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  zinc: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  neutral: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  stone: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  red: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  orange: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  amber: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  yellow: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  lime: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  green: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  emerald: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  teal: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  sky: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  blue: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  violet: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  purple: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  fuchsia: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  pink: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };

  rose: {
    "50": string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
  };
};

type ColorSpaces = {
  rgb: [number, number, number];
  rgba: [number, number, number, number];
  hsl: [number, number, number];
  hsv: [number, number, number];
  hsi: [number, number, number];
  lab: [number, number, number];
  oklab: [number, number, number];
  lch: [number, number, number];
  oklch: [number, number, number];
  hcl: [number, number, number];
  cmyk: [number, number, number, number];
  gl: [number, number, number, number];
};

type ColorTemp = "warm" | "cool" | "daylight" | "incadescent" | "fluorescent";

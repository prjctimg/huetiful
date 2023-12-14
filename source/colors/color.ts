import { getTemp, temp2Color, toHex } from "../converters";
import { load, ColorArray } from "../fp/array/colorArray";
import {
  colors,
  alpha as nativeAlpha,
  brighten as nativeBrighten,
  darken as nativeDarken,
  isAchromatic as nativeIsAchromatic,
  isCool as nativeIsCool,
  isWarm as nativeIsWarm,
  getFarthestChroma as nativeGetFarthestChroma,
  getFarthestHue as nativeGetFarthestHue,
  getFarthestLightness as nativeGetFarthestLightness,
  getNearestHue as nativeGetNearestHue,
  getNearestChroma as nativeGetNearestChroma,
  getNearestLightness as nativeGetNearestLightness,
  overtone as nativeOvertone,
  toHex as nativeToHex,
  getChannel as nativeGetChannel,
  getContrast,
  getLuminance,
  setChannel as nativeSetChannel,
  setLuminance,
  checkArg,
  matchChromaChannel,
  scheme as nativeScheme,
  pastel as nativePastel,
  hueShift as nativeHueShift,
  getHue as nativeGetHue,
  colorToCam,
  getTemp as temp,
  pairedScheme as nativePairedScheme,
  earthtone as nativeEarthtone,
  getComplimentaryHue as nativeGetComplimentaryHue,
  colorDeficiency,
} from "../index";

import modeRanges from "../color-maps/samples/modeRanges";
import type {
  ColorOptions,
  Color,
  EarthtoneOptions,
  Hue,
  HueColorSpaces,
  HueShiftOptions,
  PairedSchemeOptions,
} from "../types";
import { IJchProps } from "ciecam02-ts";

class IColor {
  constructor(color: Color, options?: ColorOptions) {
    let {
      illuminant,
      alpha,
      colorspace,
      luminance,
      saturation,
      lightMode,
      darkMode,
      lightness,
      temperature,
    } = options || {};
    color = checkArg(color, "#000");
    // if the color temperature is not passed get
    this["temperature"] = checkArg(temperature, temp(color));

    // Culori has some illuminant variants for certain color spaces
    this["illuminant"] = checkArg(illuminant, "D65");

    // Set the alpha of the color if its not explicitly passed in.
    this["alpha"] = checkArg(alpha, nativeAlpha(color));

    // if the color is undefined we cast pure black

    this["_color"] = color;

    // set the color's luminance if its not explicitly passed in
    this["_luminance"] = checkArg(luminance, getLuminance(color));

    // set the color's lightness if its not explicitly passed in the default lightness is in Lch but will be refactored soon
    this["lightness"] = checkArg(lightness, nativeGetChannel("lch.l")(color));

    // set the default color space as jch if a color space is not specified. TODO: get the mode from object and array
    this["colorspace"] = checkArg(colorspace, "jch");

    // set the default saturation to that of the passed in color if the value is not explicitly set
    this["_saturation"] = checkArg(
      saturation,
      nativeGetChannel(
        `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
      )(color)
    );

    // color's temperature according to the D65 illuminant
    this["temperature"] = checkArg(temperature, temp(color));

    // light mode default is gray-100
    this["lightMode"] = checkArg(lightMode, colors("gray", "100"));

    // dark mode default is gray-800
    this["darkMode"] = checkArg(darkMode, colors("gray", "800"));
  }

  alpha(amount?: number | string): IColor | number {
    if (amount) {
      this["_color"] = nativeAlpha(this["_color"], amount);
      return this;
    } else {
      return nativeAlpha(this["_color"]);
    }
  }
  getChannel(channel: string) {
    return nativeGetChannel(`${this["colorspace"]}.${channel.toLowerCase()}`)(
      this["_color"]
    );
  }
  setChannel(channel: string, value: number | string): IColor {
    this["_color"] = nativeSetChannel(
      `${this["colorspace"]}.${channel.toLowerCase()}`
    )(this["_color"], value);
    return this;
  }

  temperature(kelvins: number): number | IColor {
    if (kelvins) {
      this["_color"] = temp2Color(kelvins);
      //@ts-ignore
      this["temperature"] = temp(this["_color"]);
      return this;
    } else {
      return getTemp(this["_color"]);
    }
  }

  brighten(amount: number | string) {
    this["_color"] = nativeBrighten(this["_color"], amount);
    return this;
  }
  darken(amount: number | string) {
    this["_color"] = nativeDarken(this["_color"], amount);
    return this;
  }

  // Added viewing conditions options
  toCam(): IJchProps {
    return colorToCam(this["_color"]);
  }
  toHex(): IColor {
    this["_color"] = nativeToHex(this["_color"]);
    return this["_color"];
  }
  pastel(): IColor {
    this["_color"] = nativePastel(this["_color"]);
    return this;
  }
  pairedScheme(options?: PairedSchemeOptions): IColor[] {
    this["colors"] = load(
      nativePairedScheme(this["_color"], checkArg(options, {}))
    );
    return this["colors"];
  }
  hueShift(options?: HueShiftOptions): ColorArray | Color {
    options["iterations"] = checkArg(options["iterations"], 1);
    if (options["iterations"]) {
      return nativeHueShift(this["_color"], options);
    } else {
      this["colors"] = load(
        nativeHueShift(this["_color"], checkArg(options, {}))
      );
      return this["colors"];
    }
  }
  getComplimentaryHue(colorObj?: boolean): { hue: Hue; color: Color } | Color {
    if (colorObj) {
      return nativeGetComplimentaryHue(
        this["_color"],
        checkArg(colorObj, colorObj)
      );
    } else {
      this["_color"] = nativeGetComplimentaryHue(
        this["_color"],
        checkArg(colorObj, colorObj)
      );
      return this["_color"];
    }
  }
  earthtone(options?: EarthtoneOptions): ColorArray | Color {
    options["iterations"] = checkArg(options["iterations"], 1);

    if (options["iterations"] <= 1) {
      return nativeEarthtone(this["_color"], options);
    } else {
      this["colors"] = load(
        nativeEarthtone(this["_color"], checkArg(options, {}))
      );
      return this["colors"];
    }
  }
  contrast(against: "lightMode" | "darkMode" | IColor) {
    let result: number;
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
  luminance(amount?: number): number {
    if (amount) {
      this["_luminance"] = amount;
      this["_color"] = setLuminance(this["_color"], this["_color"]);
      // @ts-ignore
      return this;
    } else {
    }
    return getLuminance(this["_color"]);
  }

  output() {
    return this["_color"];
  }

  saturation(amount?: string | number) {
    this["_saturation"] = nativeGetChannel(
      `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
    )(this["_color"]);
    if (amount) {
      this["_color"] = nativeSetChannel(
        `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
      )(this["_color"], amount);

      return this;
    } else {
      return this["_saturation"];
    }
  }
  isAchromatic() {
    return nativeIsAchromatic(this["_color"]);
  }
  isWarm() {
    return nativeIsWarm(this["_color"]);
  }
  isCool() {
    return nativeIsCool(this["_color"]);
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
  deficiency(
    deficiency?: "red" | "blue" | "green" | "monochromacy",
    severity = 1
  ): Color {
    this["_color"] = colorDeficiency(deficiency)(this["_color"], severity);
    return this;
  }

  getFarthestHue(colors: IColor[]) {
    return nativeGetFarthestHue(this["_color"], colors, this["colorspace"]);
  }
  getNearestHue(colors: IColor[]) {
    return nativeGetNearestHue(this["_color"], colors, this["colorspace"]);
  }
  getNearestChroma(colors: IColor[]) {
    return nativeGetNearestChroma(this["_color"], colors, this["colorspace"]);
  }
  getNearestLightness(colors: IColor[]) {
    return nativeGetNearestLightness(this["_color"], colors);
  }
  getFarthestChroma(colors: IColor[]) {
    return nativeGetFarthestChroma(this["_color"], colors, this["colorspace"]);
  }
  getFarthestLightness(colors: IColor[]) {
    return nativeGetFarthestLightness(this["_color"], colors);
  }
  ovetone() {
    return nativeOvertone(this["_color"]);
  }
  getHue() {
    return nativeGetHue(this["_color"]);
  }
  scheme(
    scheme: "analogous" | "triadic" | "tetradic" | "complementary",
    easingFunc?: (t: number) => number
  ): Color[] | ColorArray {
    return load(nativeScheme(scheme)(this["_color"], easingFunc));
  }
}

var color = (color: Color) => new IColor(color);

export { IColor, color };

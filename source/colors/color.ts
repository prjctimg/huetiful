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
} from "../index";

import modeRanges from "../color-maps/samples/modeRanges";
import type {
  ColorOptions,
  ColorToken,
  EarthtoneOptions,
  Hue,
  HueColorSpaces,
  HueShiftOptions,
  PairedSchemeOptions,
} from "../types";
import { IJchProps } from "ciecam02-ts";

class Color {
  color: ColorToken;

  constructor(color: ColorToken, options?: ColorOptions) {
    let {
      illuminant,
      alpha,
      colorspace,
      luminance,
      saturation,
      background,
      lightness,
      temperature,
    } = options || {};

    // if the color temperature is not passed get
    this["temperature"] = checkArg(temperature, temp(this["color"]));

    // Culori has some illuminant variants for certain color spaces
    this["illuminant"] = checkArg(illuminant, "D65");

    // Set the alpha of the color if its not explicitly passed in.
    this["alpha"] = checkArg(alpha, nativeAlpha(this["color"]));

    // if the color is undefined we cast pure black
    this["color"] = checkArg(color, "#000");

    // set the color's luminance if its not explicitly passed in
    this["luminance"] = checkArg(luminance, getLuminance(this["color"]));

    // set the color's lightness if its not explicitly passed in the default lightness is in Lch but will be refactored soon
    this["lightness"] = checkArg(
      lightness,
      nativeGetChannel("lch.l")(this["color"])
    );

    // set the default color space as jch if a color space is not specified. TODO: get the mode from object and array
    this["colorspace"] = checkArg(colorspace, "jch");

    // set the default saturation to that of the passed in color if the value is not explicitly set
    this["saturation"] = checkArg(
      saturation,
      nativeGetChannel(
        `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
      )(this["color"])
    );

    // color's temperature according to the D65 illuminant
    this["temperature"] = checkArg(temperature, temp(this["color"]));
    // the object containg color tokens as values and theme names as keys.
    this["background"] = checkArg(background, {});

    // light mode default is gray-100
    this["background"]["lightMode"] = checkArg(
      this["background"]["lightMode"],
      colors("gray", "100")
    );

    // dark mode default is gray-800
    this["background"]["darkMode"] = checkArg(
      this["background"]["darkMode"],
      colors("gray", "800")
    );

    // the custom background is undefined by default and must be explicitly set
    this["background"]["custom"] = checkArg(
      this["background"]["custom"],
      undefined
    );
  }

  alpha(amount?: number | string): ColorToken | number {
    if (amount === undefined) {
      return nativeAlpha(this["color"]);
    } else {
      this["color"] = this;
      this["color"] = nativeAlpha(this["color"], amount);

      return this;
    }
  }
  getChannel(channel: string) {
    return nativeGetChannel(`${this["colorspace"]}.${channel.toLowerCase()}`)(
      this["color"]
    );
  }
  setChannel(channel: string, value: number | string): ColorToken {
    this["color"] = this;
    this["color"] = nativeSetChannel(
      `${this["colorspace"]}.${channel.toLowerCase()}`
    )(this["color"], value);
    return this;
  }
  //
  temperature(kelvins: number): number | ColorToken {
    if (kelvins === undefined) {
      return getTemp(this["color"]);
    } else {
      this["color"] = this;
      this["color"] = temp2Color(kelvins);
      //@ts-ignore
      this["temperature"] = temp(this["color"]);
      return this;
    }
  }

  brighten(amount: number | string) {
    this["color"] = this;
    this["color"] = nativeBrighten(this["color"], amount);
    return this;
  }
  darken(amount: number | string) {
    this["color"] = this;
    this["color"] = nativeDarken(this["color"], amount);
    return this;
  }
  toCam(): IJchProps {
    return colorToCam(this["color"]);
  }
  toHex(): ColorToken {
    this["color"] = this;
    this["color"] = nativeToHex(this["color"]);
    return this;
  }
  pastel(): ColorToken {
    this["color"] = this;
    this["color"] = nativePastel(this["color"]);
    return this;
  }
  pairedScheme(options?: PairedSchemeOptions): ColorToken[] {
    this["colors"] = load(
      nativePairedScheme(this["color"], checkArg(options, {}))
    );
    return this["colors"];
  }
  hueShift(options?: HueShiftOptions): ColorArray {
    this["colors"] = load(nativeHueShift(this["color"], checkArg(options, {})));
    return this["colors"];
  }
  getComplimentaryHue(
    colorObj?: boolean
  ): { hue: Hue; color: ColorToken } | ColorToken {
    return nativeGetComplimentaryHue(this["color"], checkArg(colorObj, false));
  }
  earthtone(options?: EarthtoneOptions): ColorArray {
    this["colors"] = load(
      nativeEarthtone(this["color"], checkArg(options, []))
    );
    return this["colors"];
  }
  contrast(against: "lightMode" | "darkMode" | ColorToken) {
    let result: number;
    switch (against) {
      case "lightMode":
        result = getContrast(this["color"], this["background"]["lightMode"]);

        break;
      case "darkMode":
        result = getContrast(this["color"], this["background"]["darkMode"]);
        break;
      default:
        result = getContrast(this["color"], this["background"]["custom"]);
        break;
    }
    return result;
  }

  get luminance(): number {
    return this["luminance"];
  }

  set luminance(luminance: number) {
    this["color"] = setLuminance(this["color"], luminance);
    this["luminance"] = getLuminance(this["color"]);
  }

  get saturation(): number {
    return this["saturation"];
  }

  set saturation(amount: string | number) {
    this["color"] = nativeSetChannel(
      `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
    )(this["color"], amount);
    this["saturation"] = nativeGetChannel(
      `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
    )(this["color"]);
  }
  isAchromatic() {
    return nativeIsAchromatic(this["color"]);
  }
  isWarm() {
    return nativeIsWarm(this["color"]);
  }
  isCool() {
    return nativeIsCool(this["color"]);
  }
  getFarthestHue(colors: ColorToken[]) {
    return nativeGetFarthestHue(this["color"], colors, this["colorspace"]);
  }
  getNearestHue(colors: ColorToken[]) {
    return nativeGetNearestHue(this["color"], colors, this["colorspace"]);
  }
  getNearestChroma(colors: ColorToken[]) {
    return nativeGetNearestChroma(this["color"], colors, this["colorspace"]);
  }
  getNearestLightness(colors: ColorToken[]) {
    return nativeGetNearestLightness(this["color"], colors);
  }
  getFarthestChroma(colors: ColorToken[]) {
    return nativeGetFarthestChroma(this["color"], colors, this["colorspace"]);
  }
  getFarthestLightness(colors: ColorToken[]) {
    return nativeGetFarthestLightness(this["color"], colors);
  }
  ovetone() {
    return nativeOvertone(this["color"]);
  }
  getHue() {
    return nativeGetHue(this["color"]);
  }
  scheme(
    scheme: "analogous" | "triadic" | "tetradic" | "complementary",
    easingFunc?: (t: number) => number
  ): ColorToken[] {
    return nativeScheme(scheme)(this["color"], easingFunc);
  }
}

export { Color };

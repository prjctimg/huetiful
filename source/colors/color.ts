import { toHex } from "../converters";
import {
  colors,
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
  getChannel,
  getContrast,
  getLuminance,
  setChannel,
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
  HueShiftOptions,
  PairedSchemeOptions,
} from "../types";
import { IJchProps } from "ciecam02-ts";

class Color {
  constructor(
    color: ColorToken,
    {
      colorspace,
      luminance,
      saturation,
      background,
      lightness,
      temperature,
    }: ColorOptions
  ) {
    this["color"] = checkArg(color, "#000");
    this["luminance"] = checkArg(luminance, getLuminance(this["color"]));
    this["lightness"] = checkArg(lightness, getChannel("lch.l")(this["color"]));
    this["colorspace"] = checkArg(colorspace, "jch");
    this["saturation"] = checkArg(
      saturation,
      getChannel(
        `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
      )(this["color"])
    );
    this["temperature"] = checkArg(temperature, temp(this["color"]));
    this["background"] = checkArg(background, {});
    this["background"]["lightMode"] = checkArg(
      this["background"]["lightMode"],
      colors("gray", "100")
    );
    this["background"]["lightMode"] = checkArg(
      this["background"]["darkMode"],
      colors("gray", "800")
    );
    this["background"]["custom"] = checkArg(
      this["color"],
      this["background"]["custom"]
    );
  }

  set alpha(amount: number | string) {}
  getChannel() {}
  setChannel() {}
  get alpha(): number {}
  brighten(amount: number | string) {}
  darken(amount: number | string) {}
  toCam(): IJchProps {
    return colorToCam(this["color"]);
  }
  toHex(): ColorToken {
    return nativeToHex(this["color"]);
  }
  pastel(): ColorToken {
    return nativePastel(this["color"]);
  }
  pairedScheme(options?: PairedSchemeOptions): ColorToken[] {
    return nativePairedScheme(this["color"], checkArg(options, {}));
  }
  hueShift(options?: HueShiftOptions): ColorToken[] {
    return nativeHueShift(this["color"], checkArg(options, {}));
  }
  getComplimentaryHue(
    colorObj?: boolean
  ): { hue: Hue; color: ColorToken } | ColorToken {
    return nativeGetComplimentaryHue(this["color"], checkArg(colorObj, false));
  }
  earthtone(options?: EarthtoneOptions): ColorToken {
    return nativeEarthtone(this["color"], checkArg(options, []));
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
    this["color"] = setChannel(
      `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
    )(this["color"], amount);
    this["saturation"] = getChannel(
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

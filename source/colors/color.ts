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
} from "../colors";
import { checkArg, matchChromaChannel } from "../fp";
import {
  getChannel,
  getContrast,
  getLuminance,
  setChannel,
  setLuminance,
} from "../getters_and_setters";
import modeRanges from "../color-maps/samples/modeRanges";
import type { ColorToken, HueColorSpaces } from "../types";

class Color {
  color: ColorToken;
  colorspace: HueColorSpaces;
  output: ColorToken;
  background: {
    lightMode: ColorToken;
    darkMode: ColorToken;
    custom: ColorToken;
  };
  constructor(
    color: ColorToken,
    {
      colorspace,
      luminance,
      output,
      saturation,
      background,
      lightness,
    }: {
      colorspace?: HueColorSpaces;
      luminance?: number;
      saturation?: number;
      output?: ColorToken;
      illuminant?: "D50" | "D65";
      background?: {
        lightMode?: ColorToken;
        darkMode?: ColorToken;
        custom?: ColorToken;
      };
      contrast?: number;
      lightness?: number;
    }
  ) {
    this["color"] = checkArg(color, "#000");
    this["luminance"] = getLuminance(this["color"]);
    this["colorspace"] = checkArg(colorspace, "jch");
    this["saturation"] = getChannel(
      `${this["colorspace"]}.${matchChromaChannel(this["colorspace"])}`
    )(this["color"]);
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
    this.output = checkArg(output, "hex");
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
}

export { Color };

import { ColorToken, UniformColorSpaces } from './types';

declare function getFarthestChromaFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getNearestChromaFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getFarthestHueFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getNearestHueFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };

declare function getFarthestLightnessFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getNearestLightnessFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getNearestLuminanceFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getFarthestLuminanceFrom(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };

declare function getMeanChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces
): number | undefined;
declare function getMeanLightness(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces
): number;
declare function getMeanHue(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces,
  excludeGreys?: boolean
): number;
declare function getMeanLuminance(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>
): number;
declare function getMeanDistance(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against?: ColorToken
): number;
declare function getMeanContrast(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against?: ColorToken
): number;

declare function getNearestContrast(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getFarthestContrast(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  against: ColorToken,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getNearestChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getFarthestChroma(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getNearestHue(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces | string,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getFarthestHue(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };

declare function getNearestLightness(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };
declare function getFarthestLightness(
  collection: ArrayLike<ColorToken> | object | Map<any, ColorToken>,
  colorspace?: UniformColorSpaces,
  colorObj?: boolean
):
  | number
  | {
      factor: number;
      color: ColorToken;
    };

export {
  getFarthestChroma,
  getNearestChroma,
  getFarthestContrast,
  getNearestContrast,
  getFarthestLightness,
  getNearestLightness,
  getFarthestHue,
  getNearestHue,
  getFarthestChromaFrom,
  getFarthestHueFrom,
  getFarthestLightnessFrom,
  getNearestChromaFrom,
  getNearestHueFrom,
  getNearestLightnessFrom,
  getFarthestLuminanceFrom,
  getNearestLuminanceFrom,
  getMeanChroma,
  getMeanContrast,
  getMeanDistance,
  getMeanHue,
  getMeanLightness,
  getMeanLuminance
};

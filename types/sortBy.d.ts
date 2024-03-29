import type {
  ColorToken,
  ColorDistanceOptions,
  HueColorSpaces,
  Order,
  Collection
} from './types';
declare function sortByChroma(
  collection: Collection,
  order?: Order,
  colorspace?: HueColorSpaces
): Collection;
declare function sortByLuminance(
  collection: Collection,
  order?: Order
): Collection;
declare function sortByLightness(
  collection: Collection,
  order?: Order,
  colorspace?: HueColorSpaces
): Collection;
declare function sortByHue(
  collection: Collection,
  order?: Order,
  colorspace?: HueColorSpaces
): Collection;
declare function sortByContrast(
  collection: Collection,
  against: ColorToken,
  order?: Order
): Collection;
declare function sortByDistance(
  collection: Collection,
  against: ColorToken,
  order?: Order,
  options?: ColorDistanceOptions
): Collection;
export {
  sortByContrast,
  sortByDistance,
  sortByLightness,
  sortByChroma,
  sortByHue,
  sortByLuminance
};

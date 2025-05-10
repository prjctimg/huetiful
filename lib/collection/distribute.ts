import {
  fixupHueLonger,
  fixupHueShorter
} from "culori/fn";
import {
  hf,
  iterator,
  map,
  mcchn,
  or
} from "../internal";
import type {
  Collection,
  ColorToken, DistributionOptions,
  Factor
} from "../types.d.ts";
import { achromatic, luminance, mc } from "../utils";


// distributionfunc => the function to use when tweaking the channel values. we use culori's mapper function

/**
 * distributes the `factor`(s) of a color in the collection at the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.
 * @param collection the property you want to distribute to the colors in the collection for example `hue | luminance`
 * @param options  optional overrides to change the default configursation
 */
export default function distribute<Options extends DistributionOptions>(
  collection: Collection,
  options?: Options,
): Collection {
  // Destructure the opts to check before distributing the factor
  let {
    extremum,
    excludeSelf,
    excludeAchromatic,
    colorspace,
    hueFixup,
    factor,
  } = (options || {}) as Options;
  // Set the extremum to distribute to default to max if its not min
  extremum = extremum || "max";

  factor = factor || ["chroma"];
  // Exclude the colorToken with the specified factor extremum being distributed from the mapping
  excludeSelf = excludeSelf || false;

  excludeAchromatic = excludeAchromatic || false;

  if (excludeAchromatic) collection = map(collection, achromatic);

  // The fixup to use when tweaking the hue channels
  // @ts-ignore:
  hueFixup = factor.includes("hue")
    ? hueFixup?.toLowerCase() === "longer"
      ? fixupHueLonger
      : fixupHueShorter
    : hf;
  colorspace = or(colorspace, "lch");

  type ExtremumObject = {
    [K in Factor]:
    | Array<{
      color: ColorToken[];
      factor: number;
    }>
    | Array<{ [K in Factor]: number }>;
  };
  // @ts-ignore:
  const extremumsObject = sortBy(collection, {
    factorObject: true,
    factor: factor,
    order: extremum?.toLowerCase() === "max" ? "desc" : "asc",
  }) as ExtremumObject,
    factCallbacks = (fact: Factor, tkn: ColorToken, val: number | string) => {
      // @ts-ignore:
      return {
        hue: mc(`${colorspace}.h`),
        lightness: mc(mcchn("l", colorspace, true)),
        chroma: mc(mcchn("c", colorspace, true)),
        luminance: luminance,
      }[fact](tkn, val) as ColorToken;
    };

  const callback = (fact: Factor) => {
    // for each color tuple, tweak its factor
    // and have the operation clamped

var c = 0 


    for (const idx in collection as Array<ColorToken>) {
      // pass the current token to a factor callback that retrieves the token's targeted factor
      // and mutates it
      // collection[idx] = factCallbacks(fact, collection[idx]);
    }
  };

  return iterator(factor, callback, true, ["chroma", "hue", "lightness"]);
}





//  @ts-nocheck

/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').Collection} Collection
 * @typedef { import('../types.js').Colorspaces} Colorspaces
 * @typedef {import('../types.js').Stats} Stats
 * @typedef {import('../types.js').StatsOptions} StatsOptions
 */

/**
 * Computes statistical values about the passed in color collection.
 *
 * The properties from each returned `factor` object are:
 *
 * * `against` - The color being used for comparison.
 *
 * Required for the `distance` and `contrast` factors.
 * If `relativeMean` is `false`, other factors that take the comparison color token as an overload will have this property's value as `null`.
 * * `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast` or `distance` factors (for now).
 *
 *
 * * `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
 * * `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
 * * `mean` - The average value for the `factor`.
 *
 * The `mean` property can be overloaded by the `relativeMean` option:
 *
 * * If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
 * For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."
 *
 * These properties are available at the topmost level of the resultant object:
 *
 * * `achromatic` - The amount of colors which are gray out of the total colors in the collection as a value in the range [0,1].
 * * `colorspace` - The colorspace in which the values were computed from, expected to be hue based.
 * Defaults to `lch` if an invalid mode like `rgb` is used.
 *
 * @param {Collection} collection The collection to compute stats from. Any collection with color tokens as values will work.
 * @param {StatsOptions} options
 * @returns {Stats}
 */
function stats(collection = [], options = undefined) {
  var { factor, relative, colorspace, against } = options || {};

  /*
                                    //// DEFAULT OPTIONS  \\\\
      factor
      if factor is defined we return the specified
      factors else all factors if undefined.
  

     relative
     return the largest/smallest factor distances by default
     else compare the distances agains a comparison color.
   
   colorspace
    default is lch if an invalid colorpace is passed in
    expects the colorspace to be hue based
   
   
  against
  default is cyan so that factors dependant on the argument
  don't f*ck things up in the result object

   */

  factor = or(factor, undefined);
  relative = or(relative, false);
  colorspace = or(colorspace, "lch");
  against = or(against, "cyan");

  //convert all color tokens to excepted colorspace

  collection = map(collection, token);

  // put a bunch of stuff in arrays. f*ck readability :lol:
  //  z,j,v are similar
  // Callback functions for retrieving factors
  var [o, m] = [
      (f) => {
        // if relativeMean is true
        // use the overload on all other factors when fetching their mean

        const [y, z, g] = [
          (a, b) => sortedColl(a, b, "asc", true)(collection),
          (a) => (b) => mc(a)(b),
          (a) => contrast(a, against),
        ];
        return or(
          and(eq(relative, true), {
            chroma: y(f, chnDiff(against, mcchn("c", colorspace))),
            luminance: (() => {
              // @ts-ignore
              let cb1 = (a) => (b) => Math.abs(luminance(a) - luminance(b));
              return y(f, cb1(against));
            })(),
            lightness: y(f, chnDiff(against, mcchn("l", colorspace))),
            hue: y(f, chnDiff(against, `${colorspace}.h`)),
            contrast: y(f, g),
          }),
          {
            chroma: y(f, z(mcchn("c", colorspace))),
            luminance: y(f, luminance),
            lightness: y(f, z(mcchn("l", colorspace))),
            hue: y(f, z(colorspace + `.h`)),
          }
        )[f];
      },

      // @ts-ignore
      collection.length,
    ],
    [t, i] = [
      (k) => {
        // we filter out falsy values from the collection to avoid getting NaN
        // @ts-ignore
        const n = (a, b) => (c) => map(a, b(c));

        return {
          chroma: n(mc(mcchn("c", colorspace)), averageNumber),
          distance: (() => {
            let i = (a) => (b) => differenceHyab()(a, b);
            return n(i, averageNumber);
          })(),
          hue: n(mc(colorspace + `.h`), averageAngle),
          lightness: n(mc(mcchn("l", colorspace)), averageNumber),
          contrast: (() => {
            let h = (a) => (b) => contrast(a, b);
            return n(h, averageNumber);
          })(),
          luminance: n(luminance, averageNumber),
        }[k];
      },
      (k) => {
        const [x, y] = [o(k)[0], o(k)[m - 1]];

        return {
          against: or(
            and(or(relative, eq(k, or("contrast", "distance"))), against),
            null
          ),
          colors: [x["color"], y["color"]],
          // @ts-ignore
          mean: t(k)(collection),
          extremums: [x[k], y[k]],
          families: [family(x["color"]), family(y["color"])],
        };
      },
    ];

  return (() => {
    const p = wtf(factor, i);
    p["achromatic"] =
      // @ts-ignore
      values(collection).filter(achromatic).length / m;
    p["colorspace"] = colorspace;

    return p;
  })();
}

/**
 * @typedef { import('../types.js').Collection} ColorToken
 * @typedef { import('../types.js').Collection} Collection
 * @typedef { import('../types.js').Colorspaces} Colorspaces
 * @typedef {import('../types.js').Factor} Factor
 * @typedef {import('../types.js').Order} Order
 * @typedef {import('../types.js').SortByOptions} SortByOptions
 */

import { sortedColl, mcchn, chnDiff, wtf, or, and } from "../fp/index.js";
import { luminance } from "../luminance/luminance.js";
import { mc } from "../mc/mc.js";
import { contrast } from "../core/contrast.js";
import { differenceHyab } from "culori/fn";

/**
 * Sorts colors according to the specified `factor`. The supported options are:
 *
 * * `'contrast'` - Sorts colors according to their contrast value as defined by WCAG.
 * The contrast is tested `against` a comparison color  which can be specified in the `options` object.
 * * `'lightness'` - Sorts colors according to their lightness.
 * * `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
 * * `'distance'` - Sorts colors according to their distance.
 * The distance is computed from the `against` color token which is used for comparison for all the colors in the `collection`.
 * * `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 * 
 * The return type is determined by the type of `collection`:
 * 
 * * Plain objects are returned as `Map` objects because they remember insertion order. `Map` objects are returned as is.
 * * `ArrayLike` objects are returned as plain arrays. Plain arrays are returned as is.
 * @param {Collection} collection The `collection` of colors to sort.
 * @param {SortByOptions} options
 * @returns {Collection}  

 * @example

import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortBy(sample,{ against:'yellow' kind:'distance',order:'desc',})
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
function sortBy(collection = [], options = undefined) {
  let { against, colorspace, factor, order, relative } = options || {};
  factor = or(factor, undefined);
  relative = or(relative, false);
  colorspace = or(colorspace, "lch");
  against = or(against, "cyan");
  order = or(order, "asc");

  const [l, c] = ["l", "c"].map((w) => mcchn(w, colorspace, false)),
    y = (a) => sortedColl(factor, a, order),
    // returns factor cbs determined by the options
    z = (h) => {
      return or(
        and(relative, {
          chroma: y(chnDiff(against, mc(colorspace + "." + c))),
          hue: y(chnDiff(against, mc(`${colorspace}.h`))),
          luminance: (() => {
            let v = (a) => (b) => Math.abs(luminance(a) - luminance(b));
            return y(v(against));
          })(),
          lightness: y(chnDiff(against, mc(colorspace + "." + l))),
        }),
        {
          chroma: y(mc(colorspace + "." + c)),
          hue: y(mc(`${colorspace}.h`)),
          luminance: y(luminance),
          distance: (() => {
            const u = (a) => (c) => differenceHyab()(a, c);

            return y(u(against));
          })(),
          contrast: (() => {
            const w = (a) => (c) => contrast(c, a);
            return y(w(against));
          })(),
          lightness: y(mc(colorspace + "." + l)),
        }
      )[h](collection);
    };

  return wtf(factor, z);
}

/**
 * Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.
 *@param {import('../filterBy/filterBy.js').Factor} [factor='hue'] The property you want to distribute to the colors in the collection for example `hue | luminance`
 * @param {import('../types.js').DistributionOptions} [options={}] Optional overrides to change the default configursation

  @returns {(collection:import('./token.js').Collection,options?:import('../types.js').DistributionOptions)=>import('./token.js').Collection}
 */
function distribute(factor, options) {
  // Destructure the opts to check before distributing the factor
  var { extremum, excludeSelf, excludeAchromatic, hueFixup, colorspace } =
      options || {},
    get_cb,
    set_cb;

  // Set the extremum to distribute to default to max if its not min
  extremum = or(extremum, "max");

  // Exclude the colorToken with the specified factor extremum being distributed
  excludeSelf = or(excludeSelf, false);

  // Exclude achromatic colors from the manipulations. The colors are returned in the resultant collection
  excludeAchromatic = or(excludeAchromatic, false);

  // The fixup to use when tweaking the hue channels
  // @ts-ignore
  hueFixup =
    factor === "hue"
      ? hueFixup === "longer"
        ? fixupHueLonger
        : fixupHueShorter
      : null;
  colorspace = or(colorspace, "lch");

  // v is expected to be a color object so that we can access the color's hue property during the mapping
  // set the callbacks depending on the type of factor
  switch (factor) {
    case "chroma":
      break;
    case "hue":
      break;
    case "luminance":
      break;
    case "lightness":
      break;
  }

  /**
   *
   * @param {import('./token.js').Collection} collection The colors to manipulate.
   * @returns {import('./token.js').Collection} The collection with each color's `factor` adjusted.
   */
  return (collection = []) => {};
}

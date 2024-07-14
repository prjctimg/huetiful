/**
 * @typedef { import('../types.js').ColorToken} ColorToken
 * @typedef { import('../types.js').Collection} Collection
 * @typedef { import('../types.js').Colorspaces} Colorspaces
 * @typedef {import('../types.js').Stats} Stats
 * @typedef {import('../types.js').StatsOptions} StatsOptions
 * @typedef {import('../types.js').Factor} Factor
 * @typedef {import('../types.js').Order} Order
 * @typedef {import('../types.js').SortByOptions} SortByOptions
 * @typedef {import('../types.js').DistributionOptions} DistributionOptions
 */

import {
  sortedColl,
  mcchn,
  chnDiff,
  wtf,
  or,
  and,
  isArray,
  map,
  eq,
  filteredColl,
} from "../internal/index.js";
import { family, luminance, mc, token } from "../utilities/index.js";
import { contrast } from "../accessibility/index.js";
import {
  averageAngle,
  averageNumber,
  differenceHyab,
  fixupHueLonger,
  fixupHueShorter,
} from "culori/fn";
import { limits } from "../constants/index.js";

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
            // @ts-ignore
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
 *@param {import('../types.js').Factor} [factor='hue'] The property you want to distribute to the colors in the collection for example `hue | luminance`
 * @param {import('../types.js').DistributionOptions} [options={}] Optional overrides to change the default configursation

  @returns {undefined}
 */
function distribute(factor, options) {
  // Destructure the opts to check before distributing the factor
  var { extremum, excludeSelf, excludeAchromatic, colorspace, hueFixup } =
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
   * @param {any} collection The colors to manipulate.
   * @returns {any} The collection with each color's `factor` adjusted.
   */
}

/**
 * Filters a collection of colors using the specified `factor` as the criterion. The supported options are:
 * * `'contrast'` - Returns colors with the specified contrast range. The contrast is tested against a comparison color (the 'against' param) and the specified contrast ranges.
 * * `'lightness'` - Returns colors in the specified lightness range.
 * * `'chroma'` - Returns colors in the specified `saturation` or `chroma` range. The range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range.
 
 * * `'distance'` - Returns colors with the specified `distance` range. The `distance` is tested against a comparison color (the 'against' param) and the specified `distance` ranges. Uses the `differenceHyab` metric for calculating the distances.
 * * `luminance` - Returns colors in the specified luminance range.
 * * `'hue'` - Returns colors in the specified hue ranges between 0 to 360.
 * 
 * 
 * For the `chroma` and `lightness` factors, the range is internally normalized to the supported ranges by the `colorspace` in use if it is out of range. 
 * This means a value in the range `[0,1]` will return, for example if you pass `startLightness` as `0.3` it means `0.3 (or 30%)` of the channel's supported range. 
 * But if the value of either start or end is above 1 AND the `colorspace` in use has an end range higher than 1 then the value is treated as is else the value is treated as if in the range `[0,100]` and will return the normalized value.
 * 
 * @see https://culorijs.org/color-spaces/ For the expected ranges per colorspace.
 *
 * Supports expression strings e.g `'>=0.5'`. The supported symbols are `== | === | != | !== | >= | <= | < | >`
 * @param {Collection} collection The collection of colors to filter.  
 * @param {import("../types.js").FilterByOptions} options
 * @returns {Collection}
 * @example
 * 
 * import { filterBy } from 'huetiful-js'

let sample = [
  '#00ffdc',
  '#00ff78',
  '#00c000',
  '#007e00',
  '#164100',
  '#ffff00',
  '#310000',
  '#3e0000',
  '#4e0000',
  '#600000',
  '#720000',
]

 */
function filterBy(collection, options) {
  var { against, colorspace, factor, ranges } = options || {};

  factor = or(factor, undefined);
  //	relative = or(relative, false);
  colorspace = or(colorspace, "lch");
  against = or(against, "cyan");
  //	order = or(order, 'asc');

  var w = (b, s, e) => {
      return filteredColl(factor, b)(collection, s, e);
    },
    p = (k) => {
      /**
       * @type { string | number } x
       * The `start` or min extremum.
       */
      let x,
        /**
         * @type { string | number } x
         * The `end` or max extremum.
         */
        y,
        z,
        [c, l] = [mcchn("c", colorspace, false), mcchn("l", colorspace, false)];
      if (isArray(factor) || undefined) {
        x = ranges[k][0];
        y = or(ranges[k][1], undefined);
        switch (k) {
          case "chroma":
            y = !y ? limits[colorspace][c][1] : y;

            z = w(
              mc(c),

              // @ts-ignore
              x,
              y
            );

            break;
          case "contrast":
            let q = (a) => (b) => contrast(b, a);

            z = w(
              q(against),

              x,
              y
            );
            break;
          case "distance":
            /**
             * The `distance` factor callback.
             * @param {ColorToken} a The color ro compare against.
             * @returns
             */
            // @ts-ignore
            let u = (a) => differenceHyab()(a, against);

            z = w(
              u(token(against)),

              // @ts-ignore
              x,
              y
            );
            break;
          case "hue":
            z = w(
              mc(`${colorspace}.h`),
              // @ts-ignore
              x,
              y
            );
            break;
          case "lightness":
            y = !y ? limits[colorspace][mcchn("l", colorspace, false)][1] : y;
            z = w(
              mc(mcchn("l", colorspace)),
              // @ts-ignore
              x,
              y
            );
            break;
          case "luminance":
            z = w(
              luminance,
              // @ts-ignore
              x,
              y
            );
            break;
        }
      } else {
        x = ranges[0];

        y = or(ranges[1], undefined);
        switch (k) {
          case "chroma":
            y = !ranges[1] ? limits[colorspace][c][1] : y;

            z = w(
              mc(mcchn("c", colorspace)),

              // @ts-ignore
              x,
              y
            );

            break;
          case "contrast":
            let q = (a) => contrast(against, a);

            z = w(
              q(against),
              // @ts-ignore
              x,
              y
            );
            break;
          case "distance":
            // @ts-ignore
            let u = (b) => differenceHyab()(against, b);

            z = w(
              u(token(against)),

              // @ts-ignore
              x,
              y
            );
            break;
          case "hue":
            z = w(
              mc(`${colorspace}.h`),
              // @ts-ignore
              x,
              y
            );
            break;
          case "lightness":
            y = !y ? limits[colorspace][c.split(".")[1]][1] : y;
            z = w(
              mc(mcchn("l", colorspace)),
              // @ts-ignore
              x,
              y
            );
            break;
          case "luminance":
            z = w(
              luminance,
              // @ts-ignore
              x,
              y
            );
            break;
        }
      }

      return z;
    };

  return wtf(factor, p);
}

export { stats, sortBy, filterBy, distribute };

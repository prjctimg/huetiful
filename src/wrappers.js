// i really need you to believe in me :smile:

/**
 * @typedef { import('../types/types.js').Collection} ColorToken
 * @typedef { import('../types/types.js').Collection} Collection

 * @typedef {import('../types/types.js').FactObject} FactObject
 * @typedef {import('../types/types.js').InterpolatorOptions} InterpolatorOptions
 * @typedef {import('../types/types.js').SchemeType} SchemeType
 * @typedef {import('../types/types.js').Colorspaces} Colorspaces
 * @typedef {import('../types/types.js').ColorOptions} ColorOptions
 * @typedef {import('../types/types.js').PairedSchemeOptions} PairedSchemeOptions
 * @typedef {import('../types/types.js').HueShiftOptions} HueShiftOptions
 * @typedef {import('../types/types.js').EarthtoneOptions} EarthtoneOptions

 * @typedef {import('../types/types.js').DeficiencyType} DeficiencyType
 */

import { filterBy } from './filterBy.js';
import { sortBy } from './sortBy.js';
import { nearest } from './nearest.js';
import { stats } from './stats.js';
import { interpolator } from './interpolator.js';
import { distribute } from './distribute.js';
import { discover } from './discover.js';
import { gt, mcchn, or } from './fp/index.js';
import { colors } from './colors.js';
import { token } from './token.js';
import { darken, brighten } from './lightness.js';
import { hueshift } from './hueshift.js';
import { deficiency } from './deficiency.js';
import { luminance } from './luminance.js';
import { earthtone } from './earthtone.js';
import { mc } from './mc.js';

/**
 Creates a lazy chain wrapper over a collection of colors that has all the array methods (functions that take a collection of colors as their first argument).
 * @example
 * import { ColorArray } from 'huetiful-js'
 *
let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new ColorArray(sample);
// We can even chain the methods and get the result by calling output()

console.log(wrapper.sortByHue('desc', 'lch').output());

// [ 'blue', 'green', 'yellow', 'pink' ]
 */
class ColorArray {
  /**
   *
   * @param {Collection} colors The collection of colors to bind.
   */
  constructor(colors) {
    this['colors'] = colors;
    return this;
  }

  /**
 * Returns the nearest color(s) in the bound collection against
 * @param {ColorToken} color  The color to use for distance comparison.
 * @param {number} num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
 * @returns {ColorArray} An array of colors.
 * @example
 *
 * import { load } from 'huetiful-js';
 *
 * let cols = tailwindColors('all', '500')
 *
console.log(load(cols).nearest('blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
  nearest(color, num = 1) {
    if (gt(num, 1)) {
      // @ts-ignore
      return nearest(this['colors'], color, num);
    } else {
      this['colors'] = nearest(this['colors'], color, num);
      return this;
    }
  }

  /**
   * 
     
     *  Returns a spline interpolator function with customizable interpolation methods (by selecting the `kind` of ), with support for generating color scales for cyclic data (by setting the `closed` parameter to `true`) and optional channel specific overrides.
     *  {Colorspaces} [colorspace='jch'] The colorspace to perform the color space in. Prefer uniform color spaces for better results such as Lch or Jch.
     *  {'natural' | 'monotone' | 'basis'} kind The type of the spline interpolation method. Default is basis.
     *  Optional parameter to return the 'closed' variant of the 'kind' of interpolation method which can be useful for cyclical color scales. Default is false
     * @param {InterpolatorOptions} options Optional channel specific overrides.
     * @returns The discovered palettes.Respects the `ColorToken` type of the first color in the array of colors to interpolate
     *
     * @example
     *
     * import { load } from 'huetiful-js';
  
  console.log(load(['pink', 'blue']).interpolateSpline('lch', 8));
  
  // [
    '#ffc0cb', '#ff9ebe',
    '#f97bbb', '#ed57bf',
    '#d830c9', '#b800d9',
    '#8700eb', '#0000ff'
  ]
     *
     */

  // @ts-ignore
  interpolator(options) {
    this['colors'] = interpolator(
      // @ts-ignore
      this['colors'],
      options
    );

    return this;
  }

  /**
   * 
   *
   * Takes an array of colors and finds the best matches for a set of predefined palettes. The function does not work on achromatic colors, you may use isAchromatic to filter grays from your collection before passing it to the function.
   * @param {SchemeType} kind (Optional) The palette type you want to return.
   * @returns {ColorArray} A collection of colors if the `schemeType` parameter is specified else it returns an object of all the palette types as keys and their values as an array of colors. If no colors are valid for the palette types it returns an empty array for the palette results.
   * @example
   *
   * import { load } from 'huetiful-js'
  
  let sample = [
    "#ffff00",
    "#00ffdc",
    "#00ff78",
    "#00c000",
    "#007e00",
    "#164100",
    "#720000",
    "#600000",
    "#4e0000",
    "#3e0000",
    "#310000",
  ]
  
  console.log(load(sample).discoverPalettes(sample, "tetradic").output())
  // [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
   */

  discover(kind) {
    this['colors'] = discover(this['colors'], kind);
    return this;
  }

  filterBy(options) {
    return filterBy(this['colors'], options);
  }

  sortBy(options) {
    return sortBy(options)(this['colors']);
  }

  stats(options) {
    return stats(this['colors'], options);
  }

  distribute(options) {
    return discover(this['colors'], options);
  }

  /**
   *
   * @returns Returns the result value from the chain.
   */
  output() {
    return this['colors'];
  }
}

/**
 *
 * A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword
 * @param {Collection} colors A collection of colors to chain the array methods on. Every element in the array will be parsed as a color token.
 * @returns {ColorArray} A new instance of the `ColorArray` class with the passed in collection bound to it.
 */
function load(colors) {
  return new ColorArray(colors);
}

/**
 * 
 * @internal
 @this {ColorArray}
 * Creates a lazy chain wrapper over a single color token that has all the functions that take a `ColorToken` as their first argument.
 *
 * @example
 * import { Color } from 'huetiful-js'
 *
 * let wrapper = new Color('pink');

console.log(wrapper.color2hex());
// #ffc0cb
 */

class Color {
  /**
   *
   *
   * @param {ColorToken} [c= '#000'] The color to bind.
   * @param {ColorOptions} [options= {}] Optional overrides and properties for the bound color.
   */
  constructor(c, options) {
    let {
      alpha,
      colorspace,
      luminance,
      saturation,
      lightMode,
      darkMode,
      lightness
    } = or(options, {});

    // Set the alpha of the color if its not explicitly passed in.
    // @ts-ignore
    this['alpha'] = or(alpha, _opac(c));

    // if the color is undefined we cast pure black
    this['_color'] = c;

    // set the color's luminance if its not explicitly passed in
    // @ts-ignore
    this['_luminance'] = or(luminance, _glmnce(c));

    // set the color's lightness if its not explicitly passed in the default lightness is in Lch but will be refactored soon
    // @ts-ignore
    this['lightness'] = or(lightness, _gchn('lch.l')(c));

    // set the default color space as jch if a color space is not specified. TODO: get the mode from object and array
    this['colorspace'] = or(colorspace, 'lch');

    // set the default saturation to that of the passed in color if the value is not explicitly set
    this['_saturation'] = or(
      saturation,
      // @ts-ignore
      _gchn(`${this['colorspace']}.${mcchn(this['colorspace'])}`)(c)
    );

    // light mode default is gray-100
    this['lightMode'] = or(lightMode, colors('gray', '100'));

    // dark mode default is gray-800
    this['darkMode'] = or(darkMode, colors('gray', '800'));
  }

  /**
   * 
 *
 * Sets/Gets the opacity or `alpha` channel of a color. If the `value` parameter is omitted it gets the bound color's `alpha` value.
 * @param {number|string} [amount=undefined] The value to apply to the opacity channel. The value is normalized to the range [0,1]
 * @returns {number|Color} The resulting color or value of the alpha channel. Preserves the bound `ColorToken` type.
 * @example
 *
 * import { color } from 'huetiful-js';
 *
 * // Getting the alpha
console.log(color('#a1bd2f0d').alpha())
// 0.050980392156862744
 
// Setting the alpha
let myColor = color('b2c3f1')alpha(0.5)
 
console.log(myColor)
 
// #b2c3f180
 */

  alpha(amount) {
    if (amount) {
      // @ts-ignore
      this['_color'] = _opac(this['_color'], amount);
      return this;
    } else {
      // @ts-ignore
      return _opac(this['_color']);
    }
  }

  /**
   * 
 *
 *  Returns the specified channel value on the bound color token.
 * @param {string} mc The mode and channel to be retrieved. For example `rgb.b` will return the value of the blue channel's value in the RGB color space of that color.
 * @returns {number} The value of the queried channel.
 * @example
 *
 * import { color } from 'huetiful-js'
 
console.log(color('#a1bd2f').getChannel('rgb.g'))
// 0.7411764705882353
 *
*/

  get(mc) {
    // @ts-ignore
    return _gchn(`${this['colorspace']}.${mc.toLowerCase()}`)(this['_color']);
  }

  /**
   * 
 *
 * Sets the specified channel value on the bound color token.
 * @param {string} mc The mode and channel to work with. For example `'rgb.b'`.
 * @param {number|string} value The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"`
 * @returns {Color} The mutated color. Preserves the bound in `ColorToken` type.
 *
 * @example
 *
 * import { color } from 'huetiful-js'
 
let myColor = color('green').setChannel('lch.h',10)
 
console.log(myColor.getChannel('lch.h'))
// 10
 */

  set(mc, value) {
    // @ts-ignore
    this['_color'] = _schn(mc)(this['_color'], value);
    return this;
  }

  /**
   *
   * Interpolates the bound color via the `origin` at the point `t`. Call `output()` to get the results.
   * @param {ColorToken} origin The color to interpolate via.
   * @param {number} t The point in the interpolation to return. Expected value is in the range [0,1]
   * @param {InterpolatorOptions} options Overrides object to customize the easing and the interpolation methods /fixups.
   * @returns {Color} The result of the interpolation. Preserves the bound `ColorToken` type.
   */

  via(origin, t, options) {
    // @ts-ignore

    this['_color'] = interpolator(
      [origin, this['_color']],

      options
    )(t);
    return this;
  }

  /**
   * 
   * 
   * The inverse of `darken`. Brightens the bound color by increasing the lightness channel.
   * @param {number} amount The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is  `0.5`.
   * @returns {Color} The brightened color. Preserves the `ColorToken` type of the pased in color.
   * @example  import { color } from "huetiful-js";
  
  console.log(color('blue').brighten(0.3, 'lch'));
  //#464646
   */
  brighten(amount) {
    // @ts-ignore
    this['_color'] = brighten(this['_color'], amount);
    return this;
  }

  /**
   * 
 *
 * Darkens the bound color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.
 * @param {number} amount The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`.
 * @returns {Color} The darkened color. Preserves the `ColorToken` type of the pased in color.
 * @example
 *
 *  import { color } from "huetiful-js";
console.log(color('blue'+-).darken(0.3, 'lch'));
//#464646

 */

  darken(amount) {
    this['_color'] = darken(this['_color'], amount);
    return this;
  }

  /**
   *
   * Returns the bound `ColorToken` as a hexadecimal string.
   * @returns {ColorToken}
   */
  token(kind, options) {
    return token(kind, options)(this['_color']);
  }

  /**
   *
   * Returns a randomized pastel variant of the bound color token. Preserves the bound `ColorToken` type.
   *
   * @example
   *
   * import { color } from 'huetiful-js';
   *
   * console.log(color("green").pastel())
   *
   * // #036103ff
   * @returns {Color}
   */

  pastel() {
    // @ts-ignore
    this['_color'] = pastel(this['_color']);
    return this;
  }

  /**
   * 
   * Returns a palette that contains a base color that is incremented by a `hueStep` to get the final hue to pair with.The colors are interpolated via white or black. A negative `hueStep` will pick a color that is `n` degrees behind the base color. Call `output()` to get the final result.
   * @param {PairedSchemeOptions} options The optional overrides object to customize per channel options like interpolation methods and channel fixups.
   * @returns {Color|ColorArray} An array containing the paired scheme.
   * @example
   *
   * import { color } from 'huetiful-js'
  
  console.log(color("green").pairedScheme({hueStep:6,samples:4,tone:'dark'}))
  // [ '#008116ff', '#006945ff', '#184b4eff', '#007606ff' ]
   */

  pair(options) {
    if (gt(options['num'], 1)) {
      // @ts-ignore
      return new ColorArray(_ps(this['_color'], options));
    } else {
      // @ts-ignore
      this['_color'] = pair(this['_color'], options);
      return this;
    }
  }

  /**
   * 
   * Returns a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts  down) from a single color. `maxLightness` and `minLightness` values determine how light or dark our colour will be at either extreme. Call `output()` to get the result.
   * @param {HueShiftOptions} options The optional overrides object to customize the `HueShiftOptions` like easing function.
   *@returns {ColorArray|Color} An array of colors. The length of the resultant array is the number of iterations multiplied by 2 plus the scheme color passed or `(iterations * 2) + 1`. Preserves the passed in `ColorToken` type.
   * @example
   * import { color } from "huetiful-js";
  
  let hueShiftedPalette = color("#3e0000").hueShift({ iterations:1 });
  
  console.log(hueShiftedPalette);
  
  // [
    '#ffffe1', '#ffdca5',
    '#ca9a70', '#935c40',
    '#5c2418', '#3e0000',
    '#310000', '#34000f',
    '#38001e', '#3b002c',
    '#3b0c3a'
  ]
   */

  hueshift(options) {
    if (gt(options['num'], 1)) {
      this['colors'] = hueshift(this['_color'], options);

      return new ColorArray(this['colors']);
    } else {
      // @ts-ignore
      this['_color'] = hueshift(this['_color'], options);
      return this;
    }
  }

  /**
   * Returns the complementary hue of the bound color. The function returns `'gray'` when you pass in an achromatic color.
   * @param {boolean} [colorObj=false] Optional boolean whether to return a custom object with the color `name` and `hueFamily` as keys or just the result color. Default is `false`.
   * @returns {FactObject|Color} A custom object if `colorObj` is `true` else the complimentary color. Preserves the bound `Colortoken` type.
   * @example
   *import { color } from "huetiful-js";
   *
   
  console.log(color("pink").getComplimentaryHue(true))
  // { hue: 'blue-green', color: '#97dfd7ff' }
  
   */

  family(colorObj) {
    // @ts-ignore
    this['_color'] = _gch(this['_color'], colorspace, colorObj);
    if (colorObj) {
      // @ts-ignore
      return _gch(this['_color'], colorspace, colorObj);
    }

    return this;
  }

  /**
   * 
   * Returns a spline interpolation between an `earthtone` and the bound color. Call `output()` to get the results.
   * @param {EarthtoneOptions} options Optional overrides for customizing interpolation and easing functions.
   * @returns {Color|ColorArray} The collection of colors resulting from the earthtone interpolation. Preserves the `ColorToken` type of the bound color.
   *
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   * let base = 'purple'
   *
   * console.log(color(base).earthtone({iterations:8}))
   *
   ColorArray {
  colors: [
    '#352a21', '#3e2825',
    '#4c2624', '#5f2028',
    '#741033', '#860040',
    '#940049', '#99004b'
  ]
}
 
console.log(color(base).earthtone({ iterations:8 }).output())
   * // call output() to only get results array
 
// [
    '#352a21', '#3e2825',
    '#4c2624', '#5f2028',
    '#741033', '#860040',
    '#940049', '#99004b'
  ]
   */

  earthtone(options) {
    // @ts-ignore
    this['colors'] = earthtone(this['_color'], options);

    if (gt(options['num'], 1)) {
      // @ts-ignore
      return new ColorArray(this['colors']);
    } else {
      // @ts-ignore
      this['_color'] = this['colors'];

      return this;
    }
  }

  /**
   *
   * Gets the contrast value between the bound and  comparison ( or `against`) color.
   * @param {ColorToken} [against='#000'] The color to use for comparison.
   * @returns {number} The contrast value between the two colors.
   *
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   * console.log(color('pink').contrast('yellow'))
   * // 1.4322318222624262
   */

  contrast(against) {
    let result;
    switch (against) {
      case 'lightMode':
        // @ts-ignore
        result = _gctrst(this['_color'], this['background']['lightMode']);

        break;
      case 'darkMode':
        // @ts-ignore
        result = _gctrst(this['_color'], this['background']['darkMode']);
        break;
      default:
        // @ts-ignore
        result = _gctrst(this['_color'], against);
        break;
    }
    return result;
  }

  /**
   * 
   * Sets/Gets the `luminance` value of the bound color.
   * @param {number} amount The `luminance` value to set on the bound color.
   * @returns {number|Color} The `luminance` value if the method is called with no arguments else it returns a color with its `luminance `value mutated.
   *
   * @example
   * import { color } from 'huetiful-js'
   *
let myColor = 'green';
console.log(color(myColor).luminance());
// 0.1543834296814607
 
console.log(color(myColor)._luminance);
// 0.1543834296814607
 
console.log(color(myColor).luminance(0.5));
 
 

// Color {
   alpha: 1,
   _color: '#008000',
   _luminance: 0.5,
   lightness: 46.27770902748027,
   colorspace: 'lch',
   _saturation: undefined,
   lightMode: '#f3f4f6',
   darkMode: '#1f2937'
 }
   */

  luminance(amount) {
    if (amount) {
      this['_color'] = luminance(this['_color'], amount);

      return this;
    }

    // @ts-ignore
    return luminance(this['_color']);
  }

  /**
   *
   * Returns the final value from the chain.
   * @returns {ColorToken}
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   * let myOutput = color(['rgb',200,34,65]).output()
   *
   * console.log(myOutput)
   * // ['rgb',200,34,65]
   *
   */

  output() {
    // @ts-ignore
    return this['_color'];
  }

  /**
   *
   * Sets/Gets the saturation value of the bound color.
   * @param {string|number} amount The amount of `saturation` to set on the bound color token. See also the supported string expressions in the docs.
   * @see https://huetiful-js.com/basics/string-expressions
   * @returns {number|Color} The `saturation` value if the method is called with no arguments else it returns a color with its `saturation` value mutated.
   * @example
   *
   * import { color } from 'huetiful-js'
   *
   *
   * let myColor = ['hsl',200,0.09,0.5]
   *
   * console.log(color(myColor).saturation())
   * // 0.3
   *
   * console.log(color(myColor).saturation("*0.3"))
   *
   * // ['hsl',200,0.09,0.5]
   *
   */

  saturation(amount) {
    if (amount) {
      // @ts-ignore
      this['_color'] = _schn(
        `${this['colorspace']}.${mcchn(this['colorspace'])}`
        // @ts-ignore
      )(this['_color'], amount);

      return this;
    } else {
      this['_saturation'] = mc(
        `${this['colorspace']}.${mcchn(this['colorspace'])}`
        // @ts-ignore
      )(this['_color']);
      return this['_saturation'];
    }
  }

  /**
   * 
 *@experimental
 * Returns `true` if the bound color has hue or is grayscale elsColorspaces} [colorspace='lch'] The colorspace to use when checking if the `color` is grayscale or not.

 * @returns True if the color is achromatic else false.
 * @example
 *
 * import { color } from "huetiful-js";
import { formatHex8, interpolate, samples } from "culori"
 
var test = c => color(c).isAchromatic()
 
 
test('pink')
// false
 
let sample = [
  "#164100",
  "#ffff00",
  "#310000",
  'pink'
];
 
console.log(sample.map(test));
 
// [false, false, false,false]
 
test('gray')
 
// true
 
 
 
// we create an interpolation using black and white
let f = interpolate(["black", "white"]);
 
//We then create 12 evenly spaced samples and pass them to f as the `t` param required by an interpolating function.
// Lastly we convert the color to hex for brevity for this example (otherwise color objects work fine too.)
let grays = samples(12).map((c) => formatHex8(f(c)));
console.log(grays.map(test));
 
//
 [ false, true, true,
  true,  true, true,
  true,  true, true,
  true,  true, false
]
 
 */

  // @ts-ignore
  achromatic(colorspace) {
    // @ts-ignore
    return _ia(this['_color']);
  }

  /**
   * 
 *
 * @experimental
 * Returns `true` if color the bound color can be roughly classified as a warm color else `false`.
 * @returns {boolean}
 * @example
 * import { color } from 'huetiful-js'
 
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];
 
 
 
console.log(color(sample[2]).isWarm());
//true
 
 
 */

  /**
   * 
 *
* Returns `true` if color the bound color can be roughly classified as a cool color else `false`.
* @returns {boolean}
 * @example
 *
 * import { color } from 'huetiful-js'
 
let sample = [
  "#00ffdc",
  "#00ff78",
  "#00c000"
];
 
 
console.log(color(sample[2]).isCool());
// false
 
 
 
 
 */

  temp() {
    // @ts-ignore
    return _icl(this['_color']);
  }

  /**
   * 
   *
   * Returns the bound color as a simulation of the specified type of color vision deficiency with the deficiency filter's intensity determined by the `severity` value.
   * @param {DeficiencyType} kind The type of color vision deficiency. To avoid writing the long types, the expected parameters are simply the colors that are hard to perceive for the type of color blindness. For example those with 'tritanopia' can't perceive `'blue'` light properly. Default is `'red'` when the defeciency parameter is `undefined`.
   * @param {number} severity The intensity of the filter in the range [0,1].
   * @returns {Color} The color as its simulated variant. Preserves the bound `ColorToken` type.
   * @example
   *
   * import { color } from 'huetiful-js'
  
  // Here we are simulating color blindness of tritanomaly or we can't see 'blue'.
  // We are passing in our color as an array of channel values in the mode "rgb". The severity is set to 0.1
  let tritanomaly = color(['rgb', 230, 100, 50, 0.5]).colorDeficiency('blue', 0.1)
  console.log(tritanomaly)
  // #dd663680
  
  // Here we are simulating color blindness of tritanomaly or we can't see 'red'. The severity is not explicitly set so it defaults to 1
  let protanopia = color({ h: 20, w: 50, b: 30, mode: 'hwb' }).colorDeficiency('red')
  console.log(protanopia)
  // #9f9f9f
   */

  deficiency(kind, severity = 1) {
    this['_color'] = deficiency(kind)(this['_color'], severity);
    return this;
  }

  /**
   * 
 *
 * Returns the hue which is biasing the passed in color.
 * @returns {string} The name of the overtone hue. If an achromatic color is passed in it return the string `'gray'` otherwise if the color has no bias it returns false.
 * @example
 *
console.log(color("fefefe").overtone())
// 'gray'
 
console.log(color("cyan").overtone())
// 'green'
 
console.log(color("blue").overtone())
// false
 */

  overtone() {
    // @ts-ignore
    return _ot(this['_color']);
  }

  /**
   * 
 *
 * Returns a randomised classic color scheme from the bound color.
 * @param {"analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary"} schemeType  Any classic color scheme.
@param {(t:number)=>number} [easingFunc=undefined] The easing function to apply to the palette. It's applied on the `hue` channel.
 * @returns {ColorArray} The collection of colors. Elements in the array depend on the number of sample colors in the targeted scheme. Preserves the type of the bound `ColorToken` as elements of the collection.
 * @example
 *
 import { color  } from 'huetiful-js'
 
console.log(color("#a1bd2f").scheme("triadic"))
// [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
 */

  scheme(schemeType, easingFunc) {
    // @ts-ignore
    return load(_schm(schemeType)(this['_color'], easingFunc));
  }
}

/**
 * 
 * Wrapper function over the Color class that returns a new Color method chain.
 * @param {ColorToken} color The color token to bind.
 * @returns {Color} A `new Color` class with all the utilities that take a single color as the first parameter bound to its prototype.
 *
 * @example
 * import { color } from 'huetiful-js'
 * 
 * let wrapper = color('cyan').getHueFamily()
  // 'blue-green'
 
 */

function color(color) {
  return new Color(color);
}

export { load, color, Color, ColorArray };

export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type FactObject = import('../types/types.js').FactObject;
export type InterpolatorOptions = import('../types/types.js').InterpolatorOptions;
export type SchemeType = import('../types/types.js').SchemeType;
export type Colorspaces = import('../types/types.js').Colorspaces;
export type ColorOptions = import('../types/types.js').ColorOptions;
export type PairedSchemeOptions = import('../types/types.js').PairedSchemeOptions;
export type HueShiftOptions = import('../types/types.js').HueShiftOptions;
export type EarthtoneOptions = import('../types/types.js').EarthtoneOptions;
export type DeficiencyType = import('../types/types.js').DeficiencyType;
/**
 *
 * A wrapper function over the `ColorArray` class which returns a new instance of the class. Use it to invoke the class without using the `new` keyword
 * @param {Collection} colors A collection of colors to chain the array methods on. Every element in the array will be parsed as a color token.
 * @returns {ColorArray} A new instance of the `ColorArray` class with the passed in collection bound to it.
 */
export function load(colors: Collection): ColorArray;
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
export function color(color: ColorToken): Color;
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
export class Color {
    /**
     *
     *
     * @param {ColorToken} [c= '#000'] The color to bind.
     * @param {ColorOptions} [options= {}] Optional overrides and properties for the bound color.
     */
    constructor(c?: ColorToken, options?: ColorOptions);
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
    alpha(amount?: number | string): number | Color;
    _color: import("../types/types.js").ColorToken;
    _luminance: any;
    lightness: any;
    colorspace: any;
    _saturation: any;
    lightMode: any;
    darkMode: any;
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
    get(mc: string): number;
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
    set(mc: string, value: number | string): Color;
    /**
     *
     * Interpolates the bound color via the `origin` at the point `t`. Call `output()` to get the results.
     * @param {ColorToken} origin The color to interpolate via.
     * @param {number} t The point in the interpolation to return. Expected value is in the range [0,1]
     * @param {InterpolatorOptions} options Overrides object to customize the easing and the interpolation methods /fixups.
     * @returns {Color} The result of the interpolation. Preserves the bound `ColorToken` type.
     */
    via(origin: ColorToken, t: number, options: InterpolatorOptions): Color;
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
    brighten(amount: number): Color;
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
    darken(amount: number): Color;
    /**
     *
     * Returns the bound `ColorToken` as a hexadecimal string.
     * @returns {ColorToken}
     */
    token(kind: any, options: any): ColorToken;
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
    pastel(): Color;
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
    pair(options: PairedSchemeOptions): Color | ColorArray;
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
    hueshift(options: HueShiftOptions): ColorArray | Color;
    colors: import("../types/types.js").ColorToken | import("../types/types.js").ColorToken[];
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
    family(colorObj?: boolean): FactObject | Color;
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
    earthtone(options: EarthtoneOptions): Color | ColorArray;
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
    contrast(against?: ColorToken): number;
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
    luminance(amount: number): number | Color;
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
    output(): ColorToken;
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
    saturation(amount: string | number): number | Color;
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
    achromatic(colorspace: any): any;
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
    temp(): boolean;
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
    deficiency(kind: DeficiencyType, severity?: number): Color;
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
    overtone(): string;
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
    scheme(schemeType: "analogous" | "triadic" | "tetradic" | "complementary" | "splitComplementary", easingFunc?: (t: number) => number): ColorArray;
}
/**
 *
 * @this {ColorArray}
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
export class ColorArray {
    /**
     *
     * @param {Collection} colors The collection of colors to bind.
     */
    constructor(colors: Collection);
    colors: import("../types/types.js").Collection;
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
    nearest(color: ColorToken, num?: number): ColorArray;
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
    interpolator(options: InterpolatorOptions): this;
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
    discover(kind: SchemeType): ColorArray;
    /**
     *
     * @returns Returns the result value from the chain.
     */
    output(): import("../types/types.js").Collection;
}

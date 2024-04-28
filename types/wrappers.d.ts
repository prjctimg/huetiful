export type ColorToken = import('./types.js').Collection;
export type Collection = import('./types.js').Collection;
export type FactObject = import('./types.js').FactObject;
export type InterpolatorOptions = import('./types.js').InterpolatorOptions;
export type SortByOptions = import('./types.js').SortByOptions;
export type Colorspaces = import('./types.js').Colorspaces;
export type ColorOptions = import('./types.js').ColorOptions;
export type PairedSchemeOptions = import('./types.js').PairedSchemeOptions;
export type HueShiftOptions = import('./types.js').HueshiftOptions;
export type EarthtoneOptions = import('./types.js').EarthtoneOptions;
export type DiscoverOptions = import('./types.js').DiscoverOptions;
export type FilterByOptions = import('./types.js').FilterByOptions;
export type StatsOptions = import('./types.js').StatsOptions;
export type HueFamily = import('./types.js').HueFamily;
export type Stats = import('./types.js').Stats;
export type DeficiencyOptions = import('./types.js').DeficiencyOptions;
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
     * @param {ColorToken} [c= 'cyan'] The color to bind.
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
    _color: any;
    _luminance: any;
    lightness: any;
    colorspace: any;
    _saturation: any;
    lightMode: any;
    darkMode: any;
    /**
   *
   * Sets the value of the specified channel on the passed in color.
   *
   * If the `amount` parameter is `undefined` it gets the value of the specified channel.
    * @param {string} modeChannel The mode and channel to be retrieved. For example `rgb.b` will return the value of the blue channel's value in the RGB color space of that color.
    * @param {string|number} value The value to set on the queried channel. Also supports expressions as strings e.g `"#fc23a1"` `"*0.5"`
    *
    * The supported symbols `*` `+` `-` `/`
   * @returns {number|Color} The value of the queried channel.
   * @example
   *
   * import { color } from 'huetiful-js'
   
  console.log(color('#a1bd2f').mc('rgb.g'))
  // 0.7411764705882353
   *
  */
    mc(modeChannel: string, value: string | number): number | Color;
    /**
     *
     * Interpolates the bound color via the `origin` with the point `t` at `0.5`.
     *
     * Call `output()` to get the results.
     * @param {ColorToken} origin The color to interpolate via.
     value is in the range [0,1]
      the easing and the interpolation methods /fixups.
     * @returns {Color} The result of the interpolation. Preserves the bound `ColorToken` type.
     */
    via(origin: ColorToken): Color;
    /**
     *
     *
     * The inverse of `darken`. Brightens the bound color by increasing the lightness channel.
     * @param {number} amount The amount to brighten with. The value is expected to be in the range `[0,1]`. Default is  `0.5`.
     * @returns {Color} The brightened color.
     * @example
     *
     * import { color } from "huetiful-js";
    
    console.log(color('blue').brighten(0.3));
    //#464646
     */
    brighten(amount: number): Color;
    /**
     *
   *
   * Darkens the bound color by reducing the `lightness` channel by `amount` of the channel. For example `0.3` means reduce the lightness by `0.3` of the channel's current value.
   * @param {number} amount The amount to darken with. The value is expected to be in the range `[0,1]`. Default is `0.5`.
   * @returns {Color} The darkened color.
   * @example
   *
   *  import { color } from "huetiful-js";
  console.log(color('blue'+-).darken(0.3));
  //#464646
  
   */
    darken(amount: number): Color;
    /**
     *
     * Parses any recognizable color to the specified `kind` of `ColorToken` type.
     *
     * The `kind` option supports the following types as options:
     *
     * * `'array'` - Parses the color token to an array of channel values with the `colorspace` as the first element if the `omitMode` parameter is set to `false` in the `options` object.
     *
     * * `'number'` - Parses the color token to its numerical equivalent to a number between `0` and `16,777,215`.
     *
     * The `numberType` can be used to specify which type of number to return if the `kind` option is set to `'number'`:
     *  - `'hexadecimal'`
     *  - `'binary'`
     *  - `'octal'`
     *  - `'decimal'` exponential notation
     *
     * * `'hex'` - Parses the color token to its hexadecimal string equivalent.
     *
     * If the color token has an explicit `alpha` (specified by the `alpha` key in color objects and as the fourth and last number in a color array) the string will be 8 characters long instead of 6.
     *
     * * `'object'` - Parses the color token to a plain color object in the `mode` specified by the `targetMode` parameter in the `options` object.
     *
     * @returns {ColorToken}
     */
    token(options: any): ColorToken;
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
    * Creates a palette that consists of a `baseColor` that is incremented by a `hueStep` to get the final color to pair with.
   * The colors are then spline interpolated via white or black.
   *
   * A negative `hueStep` will pick a color that is `hueStep` degrees behind the base color.
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
     * * Creates a palette of hue shifted colors from the passed in color.
   *
   * Hue shifting means that:
   *
   * * As a color becomes lighter, its hue shifts up (increases).
   * * As a color becomes darker its hue shifts down (decreases).
   *
   * The `minLightness` and `maxLightness` values determine how dark or light our color will be at either extreme respectively.
   *
   *  The length of the resultant array is the number of samples (`num`) multiplied by 2 plus the base color passed in or `(num * 2) + 1`.
   *
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
    colors: string | string[];
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
    complimentary(colorObj?: boolean): FactObject | Color;
    /**
   * Gets the hue family which a color belongs to with the overtone included (if it has one.).
   *
   * For example `'red'` or `'blue-green'`. If the color is achromatic it returns the string `'gray'`.
   * @returns {HueFamily}
   * @example
   *
   * import { color } from 'huetiful-js'
  
  
  console.log(color("#310000").family())
  // 'red'
   */
    family(): HueFamily;
    /**
     *
     * Creates a color scale between an earth tone and any color token using spline interpolation.
     *
  
     * @param {EarthtoneOptions} options
     * @returns {Color|ColorArray}
     *
     * @example
     *
     * import { color } from 'huetiful-js'
     *
     * let base = 'purple'
     *
     * console.log(color(base).earthtone({num:8}))
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
   * Gets the luminance of the passed in color token.
   *
   * If the `amount` parameter is not passed in else it will adjust the luminance by interpolating the color with black (to decrease luminance) or white (to increase the luminance) by the specified `amount`.
     * @param {number} amount The `luminance` value to set on the bound color.
     * @returns {number|Color}
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
     * @param {string|number} amount The amount of `saturation` to set on the bound color token. Also supports string expressions.
     * @returns {number|Color} The `saturation` value if the method is called with no arguments else it returns a color with its `saturation` value mutated.
     * @example
     *
     * import { color } from 'huetiful-js'
     *
     *
     * let myColor = ['lch',60,13,0.5]
     *
     * console.log(color(myColor).saturation())
     * // 13
     *
     * console.log(color(myColor).saturation("*0.3"))
     *
     * // ['lch',60,19.9,0.5]
     *
     */
    saturation(amount: string | number): number | Color;
    /**
     *
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
    achromatic(): boolean;
    /**
     *
   *
  
   * import { color } from 'huetiful-js'
   
  let sample = [
    "#00ffdc",
    "#00ff78",
    "#00c000"
  ];
   
   
   
  console.log(color(sample[2]).temp());
  // 'warm'
   
   
   */
    temp(): "cool" | "warm";
    /**
     *
    * Simulates how a color may be perceived by people with color vision deficiency.
   *
   * To avoid writing the long types, the expected parameters for the `kind` of blindness are simply the colors that are hard to perceive for the type of color blindness:
   *
   * * 'tritanopia' - An inability to distinguish the color 'blue'. The `kind` is `'blue'`.
   * * 'deuteranopia' - An inability to distinguish the color 'green'.. The `kind` is `'green'`.
   * * 'protanopia' - An inability to distinguish the color 'red'. The `kind` is `'red'`.
   *
   * @param {DeficiencyOptions} options
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
    deficiency(options: DeficiencyOptions): Color;
    /**
   * Returns the name of the hue family which is biasing the passed in color.
   *
   * * If an achromatic color is passed in it returns the string `'gray'`
   * * If the color has no bias it returns `false`.
   * @returns {string}
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
  
   * @returns {ColorArray}
   * @example
   *
   import { color  } from 'huetiful-js'
   
  console.log(color("#a1bd2f").scheme("triadic"))
  // [ '#a1bd2fff', '#00caffff', '#ff78c9ff' ]
   */
    scheme(options: any): ColorArray;
}
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
export class ColorArray {
    /**
     *
     * @param {Collection} colors The collection of colors to bind.
     */
    constructor(colors: Collection);
    colors: any;
    /**
   * Returns the nearest color(s) in the bound collection against
   * @param {ColorToken} against  The color to use for distance comparison.
   * @param {number} num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
   * @returns {ColorArray}
   * @example
   *
   * import { load,colors } from 'huetiful-js';
   *
   * let cols = colors('all', '500')
   *
  console.log(load(cols).nearest('blue', 3));
   // [ '#a855f7', '#8b5cf6', '#d946ef' ]
   */
    nearest(against: ColorToken, num: number): ColorArray;
    /**
   *
   * Interpolates the passed in colors and returns a collection of colors from the interpolation.
   *
   * Some things to keep in mind when creating color scales using this function:
   *
   * * To create a color scale for cyclic values pass `true` to the `closed` parameter in the `options` object.
   * * If `num` is 1 then a single color is returned from the resulting interpolation with the internal `t` value at `0.5` else a collection of the `num` of color scales is returned.
   * * If the collection of colors contains an achromatic color, the resulting samples may all be grayscale or pure black.
   * @param {InterpolatorOptions} options Optional channel specific overrides.
   * @returns {ColorArray}
   *
   * @example
   *
   * import { load } from 'huetiful-js';
    
    console.log(load(['pink', 'blue']).interpolateSpline({num:8, colorspace:'lch'}));
    
    // [
      '#ffc0cb', '#ff9ebe',
      '#f97bbb', '#ed57bf',
      '#d830c9', '#b800d9',
      '#8700eb', '#0000ff'
    ]
       *
       */
    interpolator(options: InterpolatorOptions): ColorArray;
    /**
     *
   * Takes a collection of colors and finds the nearest matches using the `differenceHyab()` color difference metric for a set of predefined palettes.
   *
   * The function returns different values based on the `kind` parameter passed in:
   *
   * * An array of colors for the `kind` of scheme, if the `kind` parameter is specified.
   * * Else it returns an object of all the palette types as keys and their values as an array of colors.
   *
   * If no colors are valid for the palette types it returns an empty array for the palette results. It does not work with achromatic colors thus they're excluded from the resulting collection.
   * @param {DiscoverOptions} options
   * @returns {ColorArray}
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
    
    console.log(load(sample).discover({kind:'tetradic'}).output())
    // [ '#ffff00ff', '#00ffdcff', '#310000ff', '#720000ff' ]
     */
    discover(options: DiscoverOptions): ColorArray;
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
   * @param {FilterByOptions} options
   * @returns {ColorArray}
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
  
  // Filtering colors by their relative contrast against 'green'.
  // The collection will include colors with a relative contrast equal to 3 or greater.
  
  console.log(load(sample).filterBy({start:'>=3', factor:'contrast',against:'green' }))
  // [ '#00ffdc', '#00ff78', '#ffff00', '#310000', '#3e0000', '#4e0000' ]
   */
    filterBy(options: FilterByOptions): ColorArray;
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
   * @param {SortByOptions} options
   * @returns {ColorArray}
  
   * @example
  
  import { sortBy } from 'huetiful-js'
  
  let sample = ['purple', 'green', 'red', 'brown']
  console.log(
    load(sample).sortBy({ against:'yellow' factor:'distance',order:'desc'})
  )
  
  // [ 'brown', 'red', 'green', 'purple' ]
   */
    sortBy(options: SortByOptions): ColorArray;
    /**
     * Computes statistical values about the passed in color collection.
     *
     * The topmost properties from each returned `factor` object are:
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
     * * `displayable` - The percentage of the displayable or colors with channel ranges that can be rendered in  that colorspace when converted to RGB.
     *
     * The `mean` property can be overloaded by the `relativeMean` option:
     *
     * * If `relativeMean` is `true`, the `against` option will be used as a subtrahend for calculating the distance between each `extremum`.
     * For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest `factor` from thr passed in collection."
     *
     * @param {StatsOptions} options Optional parameters to specify how the data should be computed.
     * @returns {Stats}
     */
    stats(options: StatsOptions): Stats;
    /**
     *
     * @returns Returns the result value from the chain.
     */
    output(): any;
}

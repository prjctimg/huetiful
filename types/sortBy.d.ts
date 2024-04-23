export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type Colorspaces = import('../types/types.js').Colorspaces;
export type Factor = import('../types/types.js').Factor;
export type Order = import('../types/types.js').Order;
/**
 * @public
 * Sorts colors according to the specified `factor`. The supported options are:
 *
 * * `'contrast'` - Sorts colors according to their contrast value as defined by WCAG. The contrast is tested `against` a comparison color  which can be specified in the `options` object.
 * * `'lightness'` - Sorts colors according to their lightness.
 * * `'chroma'` - Sorts colors according to the intensity of their `chroma` in the `colorspace` specified in the `options` object.
 * * `'distance'` - Sorts colors according to their distance. The distance factor is determined by the colorspace used (some color spaces are not symmetrical meaning that the distance between colorA and colorB is not equal to the distance between colorB and colorA ). The distance is computed from against a color which is used for comparison for all the colors in the collection.
 * * `luminance` - Sorts colors according to their relative brightness as defined by the WCAG3 definition.
 *
 * @param {Factor} factor The factor to use for sorting the colors.
 * @param {'asc'|'desc'} [order='asc'] The arrangement order of the colors either `asc | desc`. Default is ascending (`asc`).
 * @param options
 
 
 * @example
 *import { sortBy } from 'huetiful-js'

let sample = ['purple', 'green', 'red', 'brown']
console.log(
  sortBy('distance','desc',{ against:'yellow'})(sample)
)

// [ 'brown', 'red', 'green', 'purple' ]
 */
export function sortBy(factor: Factor, order?: 'asc' | 'desc', options?: {
    /**
     * @type {ColorToken}  The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor.
     */
    against: ColorToken;
    /**
     * @type {Colorspaces} The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.
     */
    colorspace: Colorspaces;
}): (collection: Collection) => Collection;

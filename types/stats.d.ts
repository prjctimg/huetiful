export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type Colorspaces = import('../types/types.js').Colorspaces;
export type Stats = import('../types/types.js').Stats;
/**
 * Computes statistical values about the passed in color collection and returns an object.
 *
 * The topmost properties are:
 *
 * * `against` - The color being used for comparison. Required for the `distance` and `contrast` factors.
 * * `colorspace` - The colorspace in which the factors were computed in. It has no effect on the `contrast | distance` factors.
 *
 *  For each `factor`, there is an object with the following signature:
 * * `extremums` - An array of the minimum and the maximum value (respectively) of the `factor`.
 * * `colors` - An array of color tokens that have the minimum and maximum `extremum` values respectively.
 * * `mean` - The average value for the `factor`.
 *
 * If the `against` option is specified, it will also affect the final extremums for all the factors. This is because the `against` parameter will be used as a subtrahend for calculating the distance between each `extremum`. For example, it will mean "Get the largest/smallest distance between `factor` as compared `against` this color token otherwise just get the smallest/largest factor from thr passed in collection."
 *
 * @param {Collection} collection The collection to compute stats from. Any collection with color tokens as values will work.
 * @param  options Optional parameters to specify how the data should be computed.
 * @returns {Stats}
 */
export function stats(collection: Collection, options?: {
    /**
     * @type {ColorToken}  The color to compare the `factor` with. All the `factor`s are calculated between this color and the ones in the colors array. Only works for the `'distance'` and `'contrast'` factor.
     */
    against: ColorToken;
    /**
     * @type {Colorspaces} The mode colorspace to perform the sorting operation in. It is ignored when the factor is `'luminance' | 'contrast' | 'distance'`.
     */
    colorspace: Colorspaces;
}): Stats;

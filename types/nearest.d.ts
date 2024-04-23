export type ColorToken = import('../types/types.js').ColorToken;
export type Collection = import('../types/types.js').Collection;
export type Colorspaces = import('../types/types.js').Colorspaces;
export type ScaleValues = import('../types/types.js').ScaleValues;
/**
 * @public
 * Returns the nearest color(s) in a collection as compared `against` the passed in color.
 * @param {Collection} collection The collection of colors to search for nearest colors.
 * @param {ColorToken} against The color to use for distance comparison.
 * @param {number} num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
 * @returns {Collection} A collection of colors.
 * @example
 *
 * let cols = colors('all', '500')
 *
console.log(nearest(cols, 'blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
export function nearest(collection: Collection, against: ColorToken, num?: number): Collection;

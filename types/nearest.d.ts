export type ColorToken = import('./types.js').Collection;
export type Collection = import('./types.js').Collection;
export type Colorspaces = import('./types.js').Colorspaces;
export type ScaleValues = import('./types.js').ScaleValues;
/**
 * Returns the nearest color(s) in a collection as compared `against` the passed in color using the `differenceHyab` metric function.
 *
 * * To get the nearest color from the Tailwind CSS default palette pass in the string `tailwind` as the `collection` parameter.
 * * If the `num` parameter is more than 1, the returned collection of colors has the colors sorted starting with the nearest color first
 *
 * @param {Collection | 'tailwind'} collection The collection of colors to search for nearest colors.
 * @param {ColorToken} against The color to use for distance comparison.
 * @param {number} num The number of colors to return, if the value is above the colors in the available sample, the entire collection is returned with colors ordered in ascending order using the `differenceHyab` metric.
 * @returns {Collection}
 * @example
 *
 * let cols = colors('all', '500')
 *
console.log(nearest(cols, 'blue', 3));
 // [ '#a855f7', '#8b5cf6', '#d946ef' ]
 */
export function nearest(collection: Collection | 'tailwind', against: ColorToken, num?: number): Collection;

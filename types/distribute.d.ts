/**
 * Distributes the specified `factor` of a color in the collection with the specified `extremum` (i.e the color with the smallest/largest `hue` angle or `chroma` value) to all color tokens in the collection.
 *@param {import('./filterBy.js').Factor} [factor='hue'] The property you want to distribute to the colors in the collection for example `hue | luminance`
 * @param {import('../types/types.js').DistributionOptions} [options={}] Optional overrides to change the default configursation

  @returns {(collection:import('./token.js').Collection,options?:import('../types/types.js').DistributionOptions)=>import('./token.js').Collection}
 */
export function distribute(factor?: import('./filterBy.js').Factor, options?: import('../types/types.js').DistributionOptions): (collection: import('./token.js').Collection, options?: import('../types/types.js').DistributionOptions) => import('./token.js').Collection;

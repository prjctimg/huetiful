export type DeficiencyType = import('./types.js').DeficiencyType;
export type ColorToken = import('./types.js').Collection;
export type AdaptivePaletteOptions = import('./types.js').AdaptivePaletteOptions;
/**
 * @typedef {import('./types.js').DeficiencyType} DeficiencyType
 * @typedef {import('./types.js').Collection} ColorToken
 * @typedef {import('./types.js').AdaptivePaletteOptions} AdaptivePaletteOptions
 */
/**
 *
 * @param {*} color
 * @param { AdaptivePaletteOptions} options
 */
export function adaptive(color: any, options: AdaptivePaletteOptions): void;

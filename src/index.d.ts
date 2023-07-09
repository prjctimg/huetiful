/**
 * Any color value as recognized by the Chroma() constructor.
 * @param
 * @see chromajswebsitehere
 */
export type baseColor = number | string | object | [number, number, number, keyof HueColorSpaces];

/**
 * @param
 * An array of baseColor tokens (in short, just an array of valid colors)
 */
export type Colors = Array<baseColor>;

/**
 * @param
 * The upper and lower bound of a property.Usually clamped to [0,1]
 */

export type Range = [number, number];

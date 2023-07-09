import chroma from 'chroma-js';
import type { baseColor, ColorSpaces } from '../colors/colors';

const $ = chroma;
/**
 * Gets the specifified channel on the color. Can be used to perform checks on channel values before applying color corrections
 * @param color Any recognizable color token
 * @param channel The channel to be retrieved */
export const getChannel = (color: baseColor) => (modeChannel: keyof ColorSpaces) =>
    $(color).get(modeChannel);

export const getLuminance = (color: baseColor) => chroma(color).luminance();
export const setLuminance =
    (color: baseColor) =>
    (value = 1) =>
        chroma(color).luminance(value);

/**Sets the value for a single specifified channel in a color object.
 *
 * @param {} color Any recognizable color token.
 * @param {} modeChannel The mode and channel to work with. For example 'rgb.b'.
 * @returns color The mutated color.
 */
export const setChannel = (color: baseColor) => (modeChannel) => (value) =>
    $(color).set(modeChannel, value);

/**
 * Brightens a color.
 * @param {*} color Any recognizable color token.
 * @param value The value to increase brightness with.
 * @returns The mutated color token.
 */
export const brighten =
    (color: baseColor) =>
    (value = 0.1) =>
        $(color).brighten(value);

export const getTemp = (color: baseColor) => $(color).temperature();

export const setTemp = (color: baseColor) => $(color).temperature(val);

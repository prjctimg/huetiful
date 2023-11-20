// @ts-nocheck

// This module is focused on creating color blind safe palettes that adhere to the minimum contrast requirements

// How can I achieve this ?
// 1. First I pass the color(s) to a color vision deficiency simulation function
// 2. Check if the color has the minimum required contrast as compared to a dark/light mode surface which can optionally be overriden
// Check the min luminance contrast ratio between the color and background.
// So which channels do I need to tweak in order to fix up the colors.
// Maybe provide an optional adaptive boolean which returns dark/light mode variant colors of the color blind safe palettes.

// Read more about the minimum accepted values for palette accessibility

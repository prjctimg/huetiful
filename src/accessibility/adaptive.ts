/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck

// This module will make use of contrast ratio to create adaptive palettes

// Things I need to understand first:
// 1. What is adaptive color exactly
// 2. What makes color adaptive
// 3. What is contrast and how does it affect adaptive color
// 4. What are the specifics of contrast ratio in relation to design elements
// 5. What are the nuances of dark/light mode. How is the color corrected when we switch themes
// 6. How can this be implemented in code

// Providing a min luminance contrast ratio between text and background.
//

// adaptive returns an object of the adjusted colors
// {lightMode/darkMode:Color[]}

// Possible params
// 1. backgroundColor
// 2. foregroundColor
// Do I need constrains for the background

// First I need to declare some constants to serve as starting points
const MIN_CONTRAST = 0;
const MAX_CONTRAST = 1;
const MIN_LUMINANCE = 1;
const MAX_LUMINANCE = 2;

// Allows us to generate color based based on the desired contrast ratio
const TARGET_CONTRAST_RATIO = 1;


const lightMode = () => {};
const darkMode = () => {};

export { lightMode, darkMode };

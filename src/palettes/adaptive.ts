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

const lightMode = () => {};
const darkMode = () => {};

export { lightMode, darkMode };

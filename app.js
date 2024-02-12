import { Color, ColorArray } from './lib/colors.esm.mjs';

let sample = ['blue', 'pink', 'yellow', 'green'];
let wrapper = new Color('pink');

console.log(wrapper.color2hex());

// [ 'blue', 'green', 'yellow', 'pink' ]

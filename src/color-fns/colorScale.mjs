import { formatHex8, interpolate, samples } from "../libs/culori.mjs";


/* Right now our values are scaling linearly. Can we apply an easing to the interpolated channels?
How can we dial up this function to create more creative palettes ?
*/
function colorScales(colors = [], n = 3, mode = 'lab') {
    let _colors = interpolate(colors, mode);
    return samples(n)
        .map(_colors)
        .map(formatHex8)

}


console.log(colorScales(['blue', 'purple'], 8))
console.log(colorScales(['blue', 'purple'], 8, 'rgb'))
console.log(colorScales(['blue', 'purple'], 8, 'oklch'))
console.log(colorScales(['blue', 'purple'], 8, 'hsl'))
const chroma = require('./chroma');

let baseColor = '#e77dae';

let col = chroma(baseColor);

console.debug(col.get('lch.h'));

/**
 * Takes any color and returns the required property for manipulation
 * @param {*} color
 * @param {*} modeChannel
 * @returns number
 * @see chroma.get()
 */
function getProp(color, modeChannel) {
    return chroma(color).get(modeChannel);
}

/**Hue step definations for 'classic' palette types */
const Palettes = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210]
};

/* Given a base color use the the generic chroma() to create a palette type
Convert the input color to LCH first for perceptual uniformity during computations
First retrieve the channel (in this case its hue) to be manipulated
Declare a variable to store the palette data
For each hue step in the selected palette type add the hue value to the baseColor's hue value
Convert the LCH colors into hex codes for easy use in browsers
Return the result as an array

*/

function generate(baseColor, type) {
    /* palette = Palettes[type] */
    console.log(baseColor);
    let hue = getProp(baseColor, 'lch.h');
    console.log(hue);
}

generate('blue');

//For every step in the palette type set the channel to be manipulated and return the new color array
chroma('purple').set('hsl.h', 20);

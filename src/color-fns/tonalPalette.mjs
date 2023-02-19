import _ from 'lodash';
import chroma from 'chroma-js';

//MUST make the function more generic
// Train  a network that can generate nice color scheme
// I need to create a tonal palette for each color in the returned array by createPalettes
// How are tonal palettes made ? What function in chroma .js can I use to reproduce the effect?`
// So far the function returns the 13 colors. Must define the optional overrides 


export function tonalPalette(color = 'blue', mode = 'lab', ch = 'l') {
    //First it will put the color in  a color space that gives us the required result

    var tonalPaletteMap = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];
    // Add every value in the tonalPaletteMap to the passed in base color
    return _.map(tonalPaletteMap, (tone) => chroma(color).set(`${mode}.${ch}`, tone).hex(`rgba`)

    );

}


console.log(tonalPalette())
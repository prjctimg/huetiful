
import { formatHex } from '../culori.mjs';
import { adjustHue } from '../helpers/adjustHue.mjs'
import { map } from '../helpers/map.mjs'


const opts = {};


/**
 * Creates a palette of hue shifted colors(As a colour becomes lighter, its hue shifts up and darker when its hue shifts  down. ) from a single base color. Min and max lightness value determine how light or dark our colour will be at either extreme.
 * @param base {number} color object containing Hue channel. Preferably LCH
 * @param mode {string}  Color space to compute the palette in.
 * @param minLightness {number} Minimum lightness value (range 0-100).
 * @param maxLightness {number} Maximum lightness value (range 0-100).
 * @param hueStep {number} Controlos how much the hue will shift at each color.
 * 
 * @returns [string]
 */

// Can we also map palette types to create hue shifted variants per each color in the palette ?
export default function hueShift(base = {
    l: 0,
    c: 0,
    h: 0
}) {




    //Provide defaults for the base color to prevent adjustHue from throwing an error when it tries to access an unidentified property on the base object.



    // Store the base color in an array.
    const palette = [base];






    //Each iteration add a darker shade to the start of the array and a lighter tint to the end.
    for (let i = 1; i < 5; i++) {

        //adjustHue checks hue values are clamped.
        const hueDark = adjustHue(base.h - hueStep * i);
        const hueLight = adjustHue(base.h + hueStep * i);

        // Here we use map to calculate our lightness values which takes a number thatexists in range [0,1].
        const lightnessDark = map(i)
            (0)
            (4)
            (base.l)
            (minLightness);


        const lightnessLight = map(i)
            (0)
            (4)
            (base.l)
            (maxLightness);


        const chroma = base.c;

        palette.push({ l: lightnessDark, c: chroma, h: hueDark, mode: 'lch' });

        palette.unshift({ l: lightnessLight, c: chroma, h: hueLight, mode: 'lch' });
    }

    return palette.map(color => formatHex(color))

}

const base = {
    l: 55,
    c: 75,
    h: 30

}
let mode = 'lch'

const minLightness = 10
const maxLightness = 90
const hueStep = 12




const d = hueShift(base, mode, minLightness, maxLightness)

console.log(d) 
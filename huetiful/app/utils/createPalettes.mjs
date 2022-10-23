import { adjustHue } from '../helpers/adjustHue.mjs';


/**
 * Takes a base color and returns a palette object with classic palette types and their corresponding hex values
 * @param baseColor
 * @returns palette{}
 */


export function createPalettes(base) {
    const result = {};

    const pallettes = {
        analogous: [0, 30, 60],
        triadic: [0, 120, 240],
        tetradic: [0, 90, 180, 270],
        splitComplimentary: [0, 150, 210],
        complimentary: [0, 180]
    };




    for (const palette of Object.keys(pallettes)) {

        result[palette] = pallettes[palette]
            .map((step) => ({
                l: baseColor.l,
                c: baseColor.c,
                h: adjustHue(baseColor.h + step),
            }));

    }
    return result;
}



// Usage
let baseColor = {
    l: 80,
    c: 100,
    h: 5
}
console.log(createPalettes(baseColor)) 
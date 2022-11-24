//Discover palettes
//Checks if the color is equal by querying the chroma and hue channel values
export function isColorEqual(c1, c2) {
    return c1.h === c2.h && c1.c === c2.c;

}

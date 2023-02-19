import { clampChroma, displayable, formatHex } from '../culori.mjs'


/**
 * Checks if a color is displayable if false. It will look for the closest displayable chroma value thats displayable for the given lightness and hue.
 * @param {} color Any recognizable color object.
 * @returns color A displayable color version
 */
function isVisible(color) {
    if (displayable(color)) {
        return console.log(color)
    } else {

        return clampChroma(color, color.c !== undefined ? color.mode : 'lch')




    }


}


/* const i = isVisible({ r: 280, g: 60, b: 40 })
 */

const t = displayable('red')
console.log(t)

isVisible('red')
export default isVisible
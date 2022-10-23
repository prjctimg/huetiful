import { formatHex, interpolate } from '../culori.mjs';
import { gradients } from '../js/gradients.mjs';

// Interpolation utilities for manipulating color results programmatically.
export function colorInterpolator() {
    const colors = [];

    gradients.forEach((node) => {

        const baseColors = node.colors;
        const interpolatedColor = formatHex(interpolate(baseColors, 'lab')(1));
        colors.push({ gradient: node.name, result: interpolatedColor })


        console.log(colors);
    });
    colors.forEach((node) => {
        /* Create a tile for each interpolated color with accompanying meta info */
        const colorTile = document.createElement('div');

        colorTile
            .style
            .setProperty('background', node.result)

        colorTile.classList
            .add('colorTile')

        document.body
            .appendChild(colorTile)

    })

}

colorInterpolator()
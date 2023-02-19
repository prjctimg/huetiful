
import { differenceEuclidean, nearest } from '../libs/culori.mjs'



export default function discoverPalette([...colors]) {
    const palettes = {};


    for (const color of colors) {
        const targetPalettes = generate(color);

        for (const paletteType of Object.keys(targetPalettes)) {
            const palette = [];

            let variance = 0;

            for (const targetColor of targetPalettes[paletteType]) {
                //Filter out colors already in the palette
                const availableColors = colors
                    .filter(color1 => !palette
                        .some(color2 => (color1, color2)
                        ));

                const match = nearest(availableColors, differenceEuclidean('lch'))
                    (targetColor)[0];


                variance += differenceEuclidean('lch')(targetColor, match);

                palette.push(match);
            }
            if (!palettes[paletteType] || variance < palettes[paletteType]) {
                palette[paletteType] = { colors: palette, variance };
            }
        }
    }
    return palettes
}

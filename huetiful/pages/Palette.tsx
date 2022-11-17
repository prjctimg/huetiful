import { Grid, Paper } from '@mui/material';
import _ from 'lodash';

import { converter, formatHex } from '../app/culori.mjs';
import createPalettes from '../app/utils/createPalettes.mjs';

let baseColor = {
    mode: 'lch',
    l: 80,
    c: 100,
    h: 6
};

export default function PaletteGeneratorPage() {
    var _cp = createPalettes;
    var palettes = _cp(baseColor);
    return (
        <>
            <Grid container>
                {' '}
                <Grid item>
                    {_.map(palettes, (paletteArray) => {
                        return _.map(paletteArray, (color) => {
                            let rgb = converter('rgb')(color);
                            console.log(rgb);
                            let hex = formatHex(rgb);
                            return (
                                <Paper
                                    style={{
                                        background: hex
                                    }}
                                    className="w-10 h-10 p-2"
                                />
                            );
                        });
                    })}
                </Grid>
            </Grid>
        </>
    );
}

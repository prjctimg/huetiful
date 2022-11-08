import { Card, Grid, IconButton, Input, InputLabel, Paper, Typography } from '@mui/material';
import hueShift from '../../app/utils/hueShift.mjs';
import { HiDocumentDownload } from 'react-icons/hi';

const base = {
    l: 55,
    c: 75,
    h: 30
};
let mode = 'lch';

const minLightness = 10;
const maxLightness = 90;
const hueStep = 12;
const hueShiftPalette = hueShift(base, mode, minLightness, maxLightness);

/* export default function hueShiftPaletteContainer() {

    return (<>
        <Grid container spacing={2}>
            {hueShiftPalette.map((color) => {

                return (<>
                    <Grid item>
                        <Paper style={{ background: color }} className='w-10 h-10' />
                        <Typography variant='caption'>{color}</Typography>
                    </Grid>

                </>)
            })}
        </Grid>

    </>)
} */

export default function HueShiftPage() {
    return (
        <>
            <Card className="w-1/2 h-[75vh] bg-black rounded-md shadow-md">
                <Typography variant="h3">Create hue shifted palettes.</Typography>

                <IconButton>
                    <HiDocumentDownload />
                </IconButton>
            </Card>
        </>
    );
}

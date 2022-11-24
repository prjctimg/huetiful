import { Grid, Typography, Card, CardContent, Stack, Paper, Input } from '@mui/material';
import _ from 'lodash';
import chroma from 'chroma-js';
import createPalettes from '../../utils/utils/createPalettes.mjs';

export default function PaletteGenerator() {
    function generate() {
        var palettes = createPalettes({ l: 90, c: 80, h: 70 });

        return _.map(palettes, (value, key) => {
            return (
                <Grid
                    key={key}
                    xs={12}
                    sm={8}
                    item
                >
                    <Card>
                        <CardContent>
                            <Typography>{key}</Typography>

                            <Stack
                                component="div"
                                direction="row"
                                spacing={2}
                            >
                                {value.map((lchObj) => {
                                    let hex = chroma.lch(lchObj).hex('lch');
                                    return (
                                        <Typography
                                            component="div"
                                            variant="caption"
                                        >
                                            <Paper
                                                className="w-[40px] h-[40px]"
                                                style={{
                                                    background: hex
                                                }}
                                            />
                                            {hex}
                                        </Typography>
                                    );
                                })}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            );
        });
    }

    return (
        <Grid
            rowSpacing={2}
            columnSpacing={3}
            container
        >
            {generate()}
            <Grid
                item
                xs={12}
                sm={4}
            >
                <Card>
                    <CardContent></CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

import { Grid, Typography, Card, CardContent, Stack, Paper, Input, Box } from '@mui/material';
import _ from 'lodash';
import chroma from 'chroma-js';
import createPalettes from '../../utils/utils/createPalettes.mjs';
function generate() {
    var palettes = createPalettes({ l: 90, c: 80, h: 70 });

    return _.map(palettes, (value, key) => {
        return (
            <Grid
                key={key}
                item
            >
                <Card>
                    <CardContent>
                        <Typography gutterBottom>{key}</Typography>

                        <Stack
                            flexWrap="wrap"
                            component="div"
                            direction="row"
                            rowGap={2}
                            columnGap={1}
                        >
                            {value.map((lchObj) => {
                                let hex = chroma.lch(lchObj).hex('lch');
                                return (
                                    <Typography
                                        key={hex}
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
//Variables for storing objects with responsive values for respective breakpoints
const columnSpacing = { xs: 2, sm: 4, lg: 6 };

export default function PaletteGenerator() {
    return (
        <Grid
            flexDirection="row"
            container
            columnSpacing={columnSpacing}
        >
            <Grid
                flexDirection="column"
                flexWrap
                container
                xs={7}
                sm={8}
            >
                {generate()}
            </Grid>
            <Grid
                item
                xs={5}
                sm={6}
            >
                <Card>
                    <CardContent>
                        <Input
                            type="color"
                            className="w-8 h-8"
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

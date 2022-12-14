import { Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import _ from 'lodash';
import { colorbrewer } from '../../utils/colors/color-brewer.mjs';

export default function ColorBrewer() {
    return (
        <Grid
            rowSpacing={2}
            container
        >
            {_.map(colorbrewer, (brew, name) => {
                return (
                    <Grid
                        xs={12}
                        sm={8}
                        item
                    >
                        <Card>
                            <CardContent>
                                <Typography>{name}</Typography>
                                <Stack
                                    component="div"
                                    direction="row"
                                    spacing={2}
                                >
                                    {_.map(brew, (hex) => {
                                        return (
                                            <Paper
                                                key={name}
                                                className="w-[40px] h-[40px]"
                                                style={{
                                                    background: hex
                                                }}
                                            />
                                        );
                                    })}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}

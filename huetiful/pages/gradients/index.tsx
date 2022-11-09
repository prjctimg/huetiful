import _ from 'lodash';
import { Paper, Grid, Card, CardContent, ImageList, ImageListItem } from '@mui/material';
import { gradients } from '../../app/colors/gradients.mjs';

function GradientsPage() {
    return (
        <>
            <title>Gradient generator</title>

            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Paper
                                style={{
                                    background: 'pink'
                                }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <ImageList cols={12} rowHeight={64}>
                        {_.map(gradients, (gradient) => {
                            return (
                                <Paper
                                    className="xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0"
                                    style={{
                                        background: `linear-gradient(45deg,${gradient.colors})`
                                    }}
                                />
                            );
                        })}
                    </ImageList>
                </Grid>
            </Grid>
        </>
    );
}

export default GradientsPage;

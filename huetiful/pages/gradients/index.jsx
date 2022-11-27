import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {
    Paper,
    Grid,
    Card,
    CardContent,
    ImageList,
    ImageListItem,
    Box,
    Typography
} from '@mui/material';
import { gradients } from '../../utils/colors/gradients.mjs';

function GradientsPage() {
    //Initialize state variable for the gradient colors array
    var [_gradient, setGradient] = useState({});

    return (
        <>
            <title>Gradient generator</title>

            <Grid
                container
                columnSpacing={3}
                rowSpacing={3}
            >
                <Grid
                    item
                    xs={12}
                    md={8}
                >
                    <Card>
                        <Paper
                            className="h-[50vh]"
                            style={{ background: `linear-gradient(45deg,${_gradient.colors})` }}
                        />

                        <CardContent>
                            <Typography
                                textAlign="center"
                                variant="subtitle1"
                                fontWeight="bold"
                                className="bg-white w-fit p-1.5 rounded-md mx-auto "
                                component="div"
                            >
                                {_gradient.name}
                                <Typography variant="subtitle2">{_gradient.colors}</Typography>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={4}
                >
                    <Box
                        sx={{
                            overflowX: 'wrap',
                            overflowY: 'scroll',
                            height: '50vh'
                        }}
                    >
                        <ImageList
                            gap={10}
                            cols={4}
                            className="xs:w-full grid xs:grid-cols-6 md:grid-cols-3 lg:grid-cols-5"
                        >
                            {_.map(gradients, (gradient) => {
                                return (
                                    <Paper
                                        onClick={() => setGradient(gradient)}
                                        key={gradient.name}
                                        className="pt-4 transition ease-in-out duration-200 hover:-translate-y-1  xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:h-24 xl:w-24 flex-shrink-0"
                                        style={{
                                            background: `linear-gradient(45deg,${gradient.colors})`
                                        }}
                                    />
                                );
                            })}
                        </ImageList>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default GradientsPage;

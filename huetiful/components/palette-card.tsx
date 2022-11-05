import { Button, Card, CardActions, CardHeader, Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import { BsDownload } from "react-icons/bs";
import { PaperStack } from "./paper-stack";


export default function PaletteCard() {
    return (<>
        <Container maxWidth='md'>
            <Paper className='w-fit px-2 rounded-lg bg-inherit'>
                <Typography textAlign={'center'} fontFamily={'Poppins'} variant="h5" className='pt-4 pb-0 text-gray-700'>Create your palette</Typography>
            </Paper>
            <Card className=' h-72 px-10 rounded-2xl' >
                <Grid justifyContent={'left'}>
                    <Grid item>


                        <Typography fontFamily={'Poppins'} variant="subtitle">Discover balanced palettes using the LCH color space.</Typography>

                        <CardActions >
                            <IconButton title="Download source files.">
                                <BsDownload />
                            </IconButton>
                        </CardActions>
                        <PaperStack />
                        {/* CTA grid */}


                    </Grid>
                </Grid>
            </Card>
        </Container>

    </>)
}
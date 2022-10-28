import { Paper, Typography, Grid } from "@mui/material";


//Responsible for laying out color tiles for the computed color values.
export function PaperGrid() {
    return (<>
        <Grid spacing={2} container>
            <Grid item>{/* On hover with a mouse show tooltip with copy to clipboard cta */}
                <Paper className='w-10 h-10 bg-slate-600 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>

                </Paper>
            </Grid>

        </Grid>

    </>)
}
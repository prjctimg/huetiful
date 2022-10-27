import { Paper, Typography } from "@mui/material";

export function PaletteLayout(params: type) {
    return (<>

        <Paper className='w-2/3 h-2/3 bg-slate-600'>
            <Typography variant='h5'>Create your palette.</Typography>
        </Paper>
    </>)
}

import { Paper, Grid } from '@mui/material'
import { gradients } from '../app/codelab/gradients.mjs'

function _createGradients(gradients: [{}]) {
    return (
        gradients.forEach((gradient) => {
            return (<Grid item>
                <Paper className='w-20 h-20' style={{ background: `linearGradient(60deg,${gradient.colors})` }} />
            </Grid>)
        })
    )

}


export default function _GradientContainer() {
    return (<>
        <Grid container spacing={2} className='w-screen h-screen '>
            {_createGradients(gradients)}

        </Grid>
    </>)
}




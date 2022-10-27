
import { Paper, Grid, Typography } from '@mui/material'
import { gradients } from '../app/codelab/gradients.mjs'
import { grey } from '@mui/material/colors'



function _GradientContainer() {
    return (<>
        <section className="bg-gray-200 w-1/3 h-1/2 overflow-scroll">
            <Grid container justifyItems={'center'} spacing={2} >


                {gradients.map((gradient) => 
                    return (
                    <Grid item>
                        <Paper className='h-20 w-20' style={{ background: `linear-gradient(45deg, ${gradient.colors})` }} />

                        <div className=''>

                            <Typography variant='caption'>{gradient.name}</Typography>
                        </div>
                    </Grid>)
                )}


            </Grid>
        </section>

    </>)
}


export default _GradientContainer

import { Grid, Paper } from '@mui/material'
import _ from 'lodash'
import { colorbrewer } from '../../app/helpers/colorBrewer.mjs'

export default function ColorBrewer() {


    return (
        <Grid container spacing={2}>
            {_.map(colorbrewer, (node) => {
                return node.map((color) => {
                    return (<>
                        <Grid item>
                            <Paper style={{ background: color }} className='w-10 h-10' />
                        </Grid>

                    </>)
                })
            })}
        </Grid>)
}

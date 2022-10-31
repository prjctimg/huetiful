import { Paper, Typography, Grid } from "@mui/material";
import { colorbrewer } from "../app/helpers/colorBrewer.mjs";
import { LoDashStatic } from 'lodash'

//Responsible for laying out color tiles for the computed color values.
export function PaperGrid() {

    return (<>
        <Grid spacing={2} container>
            {
                _.map(colorbrewer, (el) => {
                    const data = el

                    return data.map((hex) => {
                        return (<Grid item>
                            {/* On hover with a mouse show tooltip with copy to clipboard cta */}
                            <Paper style={{ background: hex }} className='w-10 h-10 bg-slate-600 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' />


                        </Grid>
                        )

                    })
                })


            }

        </Grid>

    </>)
}


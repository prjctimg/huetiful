import { Divider, Paper, Stack } from '@mui/material'
import _ from "lodash";


//Flatten any data stuctures beforehand into iterable array or object
export default function PaperStack(color = []): JSX.Element {
    return (<Stack direction='row' spacing={2} divider={<Divider orientation='horizontal' flexItem />}>
        {
            _.map(color, (val) => <Paper className="w-8 h-8 rounded-md" style={{ background: val }} />)
        }

    </Stack>)
}
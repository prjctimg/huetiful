import { Paper, Grid, Typography, Card, CardActions, Input, Select } from '@mui/material';
import { gradients } from '../../app/codelab/gradients.mjs';
import { grey } from '@mui/material/colors';
import { PaperStack } from '../../components/paper-stack.jsx';

function GradientsPage() {
    return (
        <>
            <title>Gradient generator</title>
            <Grid container>
                <Typography variant="h5" fontWeight="light">
                    Gradient generator
                </Typography>

                <Grid item xs={12}>
                    <Card>
                        {/* Card will have to output the select values live. */}
                        <Paper className="w-full   bg-cyan-600 rounded-md xs:h-[50vh]" />

                        <Grid container direction={'row'} spacing={2}>
                            <Grid item>
                                <Paper className="w-8 h-8 bg-black" />
                            </Grid>
                        </Grid>
                        <Input type="color" className="w-6 h-6 rounded-md" />
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default GradientsPage;

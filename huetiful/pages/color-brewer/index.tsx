import { Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import _ from 'lodash';
import { colorbrewer } from '../../app/helpers/colorBrewer.mjs';
export default function ColorBrewer() {
    return (
        <>
            {_.map(colorbrewer, (brew, name) => {
                return (
                    <>
                        <Stack spacing={2} direction="row-reverse" className="py-3">
                            <Typography variant="title">{name}</Typography>
                            {_.map(brew, (hex) => {
                                return <Paper style={{ background: hex }} className="w-10 h-10" />;
                            })}
                        </Stack>
                    </>
                );
            })}
        </>
    );
}

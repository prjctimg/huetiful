import { Typography, Grid } from '@mui/material';
import {
    BsBehance,
    BsDribbble,
    BsGithub,
    BsMenuApp,
    BsMenuButtonFill,
    BsTwitter
} from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className="relative bottom-0 bg-slate-200 min-w-full h-24">
            <div className="  relative w-full h-2  bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 " />

            <Grid
                alignItems={'center'}
                alignContent={'end'}
                container
                spacing={2}
                justifyContent="right"
                className="px-6 text-slate-700"
            >
                <Grid item>
                    <BsBehance className="w-6 h-6" />
                </Grid>

                <Grid item>
                    <BsTwitter className="w-6 h-6" />
                </Grid>

                <Grid item>
                    <BsGithub className="w-6 h-6" />
                </Grid>

                <Grid item>
                    <BsDribbble className="w-5 h-5" />
                </Grid>
            </Grid>
        </footer>
    );
}

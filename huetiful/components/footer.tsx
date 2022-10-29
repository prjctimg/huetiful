import { Typography, Grid } from '@mui/material'
import { BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs'


export default function Footer() {
    return (<footer className="relative bottom-0 bg-slate-400 min-w-full h-24">
        <Typography variant="h6">Title</Typography>
        <Grid container spacing={2} justifyContent='right' className='px-10'>
            <Grid item>
                <BsTwitter href="https:/twitter.com/prjctimg" className="w-6 h-6" />
            </Grid>
            <Grid item>
                <BsDribbble className="w-6 h-6" />
            </Grid>
            <Grid item>
                <BsGithub className="w-6 h-6" />
            </Grid>


        </Grid>
    </footer>)
}
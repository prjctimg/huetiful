import { AppBar, Toolbar, Grid, IconButton, Typography } from "@mui/material"
import { BsDribbble, BsGithub, BsMenuApp, BsTwitter } from 'react-icons/bs'




export default function Header() {
    return (
        <AppBar>
            <Toolbar className="flex">
                <IconButton className=' bg-slate-300 rounded-sm'>
                    <BsMenuApp className=" w-8 h-8 bg-slate-300 rounded-sm" />
                </IconButton>
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


            </Toolbar>
        </AppBar>)
}
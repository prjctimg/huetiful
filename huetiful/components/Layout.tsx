import { AppBar, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";
import { HiMenu } from "react-icons/hi";
import { BsDribbble, BsGithub, BsTwitter } from 'react-icons/bs'

export default function Layout(props: ReactNode) {
    return (<>

        <Container className="bg-cyan-600 pt-32 min-h-screen "><AppBar>
            <Toolbar className="flex">
                <IconButton className=' bg-slate-300 rounded-sm'>
                    <HiMenu className=" w-8 h-8 bg-slate-300 rounded-sm" />
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
        </AppBar>
            {props.children}
        </Container>

        <footer className="relative bottom-0 bg-slate-400 min-w-full h-24">
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
        </footer>
    </>)
}
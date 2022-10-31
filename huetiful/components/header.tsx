import { AppBar, Toolbar, Grid, IconButton, Typography, Divider, Breadcrumbs } from "@mui/material"

import { HiMenu } from "react-icons/hi"




export default function Header() {
    return (<>

        <AppBar className="bg-white text-black">
            <header className="bg-white w-full h-8 block p-2 ">
                <Typography color={'black'} fontFamily={"Dancing Script"} textAlign='center' paddingX={4} fontWeight={'light'} variant="h5">Huetiful</Typography>

            </header>

            <Toolbar>


                <IconButton className=' rounded-sm'>
                    <HiMenu strokeWidth={0.05} className=" w-8 h-8 fill-slate-500 rounded-sm" />
                </IconButton>


            </Toolbar>
            <Breadcrumbs className="w-full h-4 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500">
            </Breadcrumbs>
        </AppBar>
    </>)
}
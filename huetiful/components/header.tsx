import {
    AppBar,
    Breadcrumbs,
    IconButton,
    Toolbar,
    Typography,
    Box,
    Drawer
} from "@mui/material";

import { HiMenu } from "react-icons/hi";

import { useState } from "react";


export default function Header() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (<>


        <AppBar className="bg-white text-black">
            <header className="bg-white w-full h-8 block p-2 ">
                <Typography color={'black'} fontFamily={"Dancing Script"} textAlign='center' paddingX={4} fontWeight={'light'} variant="h5">Huetiful</Typography>

            </header>

            <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} anchor="left">
                <Box p={2} width='250px' textAlign={'center'} role='presentation'>
                    <Typography color='black' fontWeight={'light'} variant='h5' fontFamily={'Dancing Script'}>Huetiful</Typography>
                </Box>

            </Drawer>




            <Toolbar>
                <IconButton
                    size="large"
                    edge='start'
                    onClick={() => setIsDrawerOpen(true)}>
                    <HiMenu />
                </IconButton>


            </Toolbar>
            <Breadcrumbs className="w-full h-4 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500">
            </Breadcrumbs>
        </AppBar>
    </>)
}
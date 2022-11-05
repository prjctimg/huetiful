import { Drawer, Typography, Box, IconButton } from "@mui/material";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";



export default function SideDrawer() {

    // We initialize state as false because the drawer is not visible by default.
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)


    return (<>

        <IconButton
            size="large"
            edge='start'
            onClick={() => setIsDrawerOpen(true)}>
            <HiMenu />
        </IconButton>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} anchor="left">
            <Box p={2} width='250px' textAlign={'center'} role='presentation'>
                <Typography fontFamily={'Poppins'}>Huetiful</Typography>
            </Box>

        </Drawer>
    </>)
}
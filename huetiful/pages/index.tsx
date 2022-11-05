import { createTheme, ThemeProvider, AppBar, BottomNavigation, Card, Paper } from "@mui/material"
import { orange } from "@mui/material/colors"
import Link from 'next/router'
import Layout from "../components/layout"
import PaletteCard from "../components/palette-card"
import { PaperStack } from "../components/paper-stack"
import SideNavbar from "../components/side-drawer"


const theme = createTheme({
    palette: {
        primary: {
            main: orange[300]
        }

    }
})




const Landing = () => {

    return (
        <>
            <PaperStack />
        </>
    )

}

export default Landing
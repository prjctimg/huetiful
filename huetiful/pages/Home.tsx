import { createTheme, ThemeProvider, AppBar, BottomNavigation, Card, Paper } from "@mui/material"
import { orange } from "@mui/material/colors"
import Link from 'next/router'
import Layout from "../components/Layout"
import { PaletteLayout } from "../components/palette-layout"


const theme = createTheme({
    palette: {
        primary: {
            main: orange[300]
        }

    }
})



const Home = () => {

    return (
        <Layout>
            <PaletteLayout />
        </Layout>)
}

export default Home
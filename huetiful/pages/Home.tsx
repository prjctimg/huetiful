import { createTheme, ThemeProvider, AppBar, BottomNavigation, Card, Paper } from "@mui/material"
import { orange } from "@mui/material/colors"
import Link from 'next/router'
import Layout from "../components/layout"
import PaletteCard from "../components/palette-card"
import { PaperGrid } from "../components/paper-grid"


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
            <PaletteCard />
        </Layout>)
}

export default Home
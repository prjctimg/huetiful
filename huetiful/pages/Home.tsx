import { createTheme, ThemeProvider, AppBar, BottomNavigation, Card } from "@mui/material"
import { orange } from "@mui/material/colors"
import Link from 'next/router'


const theme = createTheme({
    palette: {
        primary: {
            main: orange[300]
        }

    }
})



const Home = () => {

    return (
        <ThemeProvider theme={theme}>
            <div>
                <AppBar className="w-full h-16 ">

                </AppBar>
                <main className=" pt-24 grid sm:grid-cols-1 md:grid-cols-2 min-h-screen min-w-full lg:grid-cols-12">

                    <Card className="bg-gray-700 col-span-6 h-[70vh] shadow-md rounded-2xl">

                    </Card>


                    <Card color="primary" className="bg-gray-700 h-64 w-24 shadow-md"></Card>
                    <Card color="primary" className="bg-gray-700 h-64 w-24 shadow-md"></Card>
                    <Card color="primary" className="bg-gray-700 h-64 w-24 shadow-md"></Card>
                </main>
                <BottomNavigation className="relative bottom-0 bg-slate-600 w-full h-24 "></BottomNavigation>
            </div>
        </ThemeProvider>)
}

export default Home
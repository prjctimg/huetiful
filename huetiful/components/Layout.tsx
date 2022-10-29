import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { purple } from "@mui/material/colors";
import grey from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: { main: purple[300] }

    }

})

export default function Layout(props: ReactNode) {
    return (<>
        <ThemeProvider theme={theme}>
            <Header />
            <Container maxWidth='xs' /* style={{background:}} Dynamic bg per view  */ className="bg-gray-200 pt-32 min-h-screen ">
                {props.children}
            </Container>
            <Footer />

        </ThemeProvider>

    </>)
}
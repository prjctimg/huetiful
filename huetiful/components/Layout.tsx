import {
    Container,
    Grid,
    ThemeProvider,
    createTheme,
    Typography,
    colors
} from "@mui/material";

import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { purple } from "@mui/material/colors";
import grey from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: { main: colors.purple[300] }

    },

    typography: {
        fontFamily: 'Poppins'
    }

})

export default function Layout(props: ReactNode) {
    return (<>
        <ThemeProvider theme={theme}>
            <Typography fontFamily={'Poppins'} component='div'>
                <Header />
                <Container maxWidth='xs' /* style={{background:}} Dynamic bg per view  */ className="bg-gray-200 pt-32 min-h-screen ">
                    {props.children}
                </Container>
                <Footer />


            </Typography>

        </ThemeProvider>

    </>)
}
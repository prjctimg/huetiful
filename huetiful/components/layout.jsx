import { Container, Grid, ThemeProvider, createTheme, Typography, colors } from '@mui/material';

import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import { purple } from '@mui/material/colors';
import grey from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: { main: colors.purple[300] }
    },

    typography: {
        fontFamily: 'Poppins'
    }
});

export default function Layout(props) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <Container
                    /* style={{background:}} Dynamic bg per view  */
                    className="bg-gray-200 min-h-screen pt-[140px] "
                >
                    {props.children}
                </Container>
                <Footer />
            </ThemeProvider>
        </>
    );
}

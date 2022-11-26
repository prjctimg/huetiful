import '../styles/globals.css';
import Layout from '../components/layout';
import { createTheme, ThemeProvider } from '@mui/system';

const theme = createTheme({
    palette: {
        background: {
            paper: 'red'
        }
    }
});

function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;

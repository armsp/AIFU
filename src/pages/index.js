import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import CountryGrid from '../components/CardGrid';
import SubmitArticle from '../components/SubmitArticle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Appbar from '../components/Appbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2'
import ContactForm from '../components/ContactForm';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ['Roboto','Helvetica'].join(','),
      textTransform: 'none',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
      // fontSize: 16,
    },
  },
});

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Appbar />
    <Main />
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <br></br>
        {/* <ProTip /> */}
        {/* <Album /> */}
        <Link to="/appshell" color="secondary">
          appshell
        </Link>
        <br></br>
        <CountryGrid />
        {/* <MyComponent /> */}
        {/* <SubmitArticle /> */}
        <ContactForm />
        <Divider dark />
        {/* <Footer /> */}
        <Footer2 />
        {/* <Copyright /> */}
      {/* </Box>
    </Container> */}
        </ThemeProvider>

  );
}

import * as React from 'react';
import { Box, Divider } from '@mui/material';
import CountryGrid from '../components/CountryGrid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '../components/Appbar';
import Main from '../components/Main';
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm';

// const theme = createTheme({
//   typography: {
//     allVariants: {
//       fontFamily: ['Roboto','Helvetica'].join(','),
//       textTransform: 'none',
//       fontWeightLight: 300,
//       fontWeightRegular: 400,
//       fontWeightMedium: 500
//       // fontSize: 16,
//     },
//   },
// });

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ['Roboto','Helvetica'].join(','),
      // textTransform: 'none',
      // fontWeightLight: 300,
      // fontWeightRegular: 400,
      // fontWeightMedium: 500
      // fontSize: 16,
    },
  },
  // palette: {
  //   primary: {
  //     main: '#0366d6', // GitHub's primary color
  //   },
  // },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#0366d6', // GitHub's button color
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#005cc5', // GitHub's button hover color
    //       },
    //     },
    //   },
    // },
    // MuiLink: {
    //   styleOverrides: {
    //     root: {
    //       color: '#0366d6', // GitHub's link color
    //       textDecoration: 'none',
    //       '&:hover': {
    //         textDecoration: 'underline',
    //       },
    //     },
    //   },
    // },
  },
});

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar />
      <Main />
      <CountryGrid />
      <ContactForm />
      <Divider dark />
      <Footer />
    </ThemeProvider>

  );
}

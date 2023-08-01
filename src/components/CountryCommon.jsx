import { CssBaseline, Container, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, CircularProgress  } from "@mui/material";
import CollapsibleTable from './CollapsibleTable';
import SubmissionForm from './Submit';
import Appbar from './Appbar';
import Footer2 from './Footer2';
import ExportButton from './Export';
import ServerErrorPage from './ServerError';

export default function CountryData({country}) {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleButtonClick = () => {
    setShowSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleHover(...args){
    console.log(args);
  }
  
  const signalListeners = { hover: handleHover };

  useEffect(() => {
    async function fetchData() {
      try {  
        const response = await fetch('https://aifuv2.eastus.azurecontainer.io/records?'+ new URLSearchParams({
          table_name: country}), {
          method: 'GET', // or 'PUT'
        });
        const json = await response.json();
        // console.log(json);
        setData(json);
        // console.log(json);
        setLoading(false);
        // console.log(JSON.parse(data["records"][0]));

      } catch (error) {
        setError(error);
        console.log("ERROR"+ error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

    return(
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <Appbar />
        <Container sx={{ flex: '1 0 auto' }} maxWidth="xxl">
        <SubmissionForm tablename={country} />

        {/* the snackbar works! just uncomment it... */}
        {/* <Button variant="contained" onClick={handleButtonClick}>
        Show Snackbar
        </Button>
        {showSnackbar && (<CustomSnackbar
          message="This is a custom snackbar"
          color="success"
          icon={<InfoIcon/>}
          duration={3000}
          position={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleSnackbarClose}
          open={showSnackbar}
        />)} */}

        {
          loading ? (<CircularProgress />): 
            (error || !data["records"]) ? (<ServerErrorPage />): 
              data["records"].length > 0 ? (<CollapsibleTable collapseOthers={false} data={data["records"]} /> ) : 
                (<p>No data found.</p>)
        } 
 
    <ExportButton tablename={country} />
    </Container>
    <Footer2 />
    </Box>
  )
}
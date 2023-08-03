import React, { useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CustomSnackbar from './MySnackbar';
import InfoIcon from '@mui/icons-material/Info';

const SubmissionForm = ({tablename}) => {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
    const requestBody = Object.fromEntries(formData.entries());
    requestBody.table = tablename;
    console.log(formData);
    console.log(requestBody);
    try {
      const response = await fetch('https://aifuv2.eastus.azurecontainer.io/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://aifu.shantam.io'
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const responseData = await response.json();
      setLoading(false);

      const successMessage = 'Your data has been submitted.';
      const successLink = responseData['Issue URL'];

      handleSnackbarOpen('success', (
        <>
          {successMessage}
          <br />
          Visit the link to view the status of your submission. Please wait on the page that opens when you click the link. Weather your submission was accepted or rejected will appear as a reply below your submission details:
          {' '}
          <a href={successLink} target="_blank" rel="noopener noreferrer">
            {successLink}
          </a>
        </>
      ));
  
      // Clear form fields
      e.target.reset();
    } catch (error) {
      setLoading(false);
      handleSnackbarOpen('error', 'Something went wrong. Please try again.');
  
      console.error(error);
    }
  };
  

  const handleSnackbarOpen = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
        <Box sx={{ mt: 4, mb: 4, border: '1px solid #ccc', borderRadius: 4, p: 2 }} maxWidth="lg" 
        display="flex"
        flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
        // alignSelf="center"
        margin='auto'
        component="form" onSubmit={handleSubmit}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Your Submission
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Required Fields
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="article"
                      name="article"
                      label="Article"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="url"
                      name="url"
                      label="URL"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="media_org"
                      name="media_org"
                      label="Media Org"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Optional Fields
              </Typography>
              <Box  maxWidth="xs">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Your Name"
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    id="twitter"
                    name="twitter"
                    label="Twitter"
                    fullWidth
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    id="github"
                    name="github"
                    label="GitHub"
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    id="research-gate"
                    name="research-gate"
                    label="ResearchGate"
                    fullWidth
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                  />
                </Grid>
              </Grid>
              </Box>
            </Grid>
          </Grid>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
        {/* <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          message={snackbarMessage}
        /> */}
         {snackbarOpen && (<CustomSnackbar
          message={snackbarMessage}
          severity={snackbarSeverity}
          color={snackbarSeverity}
          icon={<InfoIcon/>}
          duration={3000}
          position={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleSnackbarClose}
          open={snackbarOpen}
        />)} 
      </Box>
    </Box>
  );
};

export default SubmissionForm;

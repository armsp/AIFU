import React, { useState } from 'react';
import {Button, TextField, Stack} from '@mui/material'

export default function AnswerMe({question, answer}){
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
    const requestBody = Object.fromEntries(formData.entries());
    requestBody.question = question;
    requestBody.answer = answer;
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
          Visit the link to view the status of your submission:
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
    return(
        <Stack direction="row" justifyContent="center" component="form" onSubmit={handleSubmit}
            alignItems="center" spacing={1} >
            <TextField
                required
                id="article"
                name="article"
                label="Answer"
                size="small"
                // component="form"
                sx={{ flexGrow:1 }}
            />
            {/* <Box onSubmit={handleSubmit} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}> */}
            <Button type="submit"  variant="contained"  size="small" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
        {/* {snackbarOpen && (<CustomSnackbar
          message={snackbarMessage}
          severity={snackbarSeverity}
          color={snackbarSeverity}
          icon={<InfoIcon/>}
          duration={3000}
          position={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleSnackbarClose}
          open={snackbarOpen}
        />)}  */}
        
        </Stack>
    )
}
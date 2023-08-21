import React from "react";

import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import CustomSnackbar from './CustomSnackbar';
import InfoIcon from '@mui/icons-material/Info';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');
  const [snackbarColor, setSnackbarColor] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData); // Replace with your own logic
    // const formData = new FormData(event.target);
    // const requestBody = Object.fromEntries(formData.entries());
    const requestBody = JSON.stringify(formData);
    
    console.log(formData);
    console.log(requestBody);
    try {
      const response = await fetch('https://aifuv2.eastus.azurecontainer.io/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://aifu.shantam.io'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }
      const responseData = await response.json();
      // setLoading(false);

      const successMessage = 'Your message has been submitted!';
      

      handleSnackbarOpen('success', (
        <>
          {successMessage}
        </>
      ));

      // Clear form fields
      event.target.reset();
    } catch (error) {
      // setLoading(false);
      handleSnackbarOpen('error', 'Something went wrong. Please try again.');

      console.error(error);
    }
  };


  const handleSnackbarOpen = (severity, message) => {
    // setSnackbarSeverity(severity);
    setSnackbarColor(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box bgcolor="white" py={4}>
      <Container maxWidth="md">
        <Typography variant="h5" mb={0.5} align="center">
          Contact
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              variant="outlined"
              size="small"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Container>
      {snackbarOpen && (<CustomSnackbar
          message={snackbarMessage}
          // severity={snackbarSeverity}
          color={snackbarColor}
          icon={<InfoIcon />}
          duration={10000}
          position={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleSnackbarClose}
          open={snackbarOpen}
      />)}
    </Box>
  );
};

export default ContactForm;

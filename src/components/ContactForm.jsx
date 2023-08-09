import React from "react";

import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const ContactForm = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Replace with your own logic
  };

  return (
    <Box bgcolor="white" py={4}>
      <Container maxWidth="md">
        <Typography variant="h4" mb={4} align="center">
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
    </Box>
  );
};

export default ContactForm;

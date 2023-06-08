import React from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import { BrokenImage } from '@mui/icons-material';

const NotFoundPage = () => {
    return (
      <Box sx={{ textAlign: 'center', p: 4 }}>
        <BrokenImage sx={{ fontSize: 120, color: 'error.main' }} />
        <Typography variant="h4" color="textSecondary" sx={{ mt: 4 }}>
          Oops! We are working on identifying cases and updating the database for this country. 
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Please visit later or  
            <Button href="/" component={Link} to="/" variant="text" color="info">
            Submit
        </Button> 
        to us any cases that you know.       
        </Typography>
      </Box>
    );
  };
  
  export default NotFoundPage;
  
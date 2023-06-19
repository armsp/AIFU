import * as React from 'react';
import { Box, Typography  } from "@mui/material";
import FixImage from '../images/186.png';

export default function ServerErrorPage() {
    return (
      <Box sx={{ textAlign: 'center', p: 4 }}>
        {/* <FixImage /> */}
        <img src={FixImage} alt="Server Error" width="300" height="300" />
        <Typography variant="h4" color="textSecondary" sx={{ mt: 4 }}>
          Something is wrong with the server.
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
          We are working to fix it. Please check again later...
        </Typography>
      </Box>
    );
  };
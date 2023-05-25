import * as React from 'react';
import { Typography, Container } from '@mui/material';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Container disableGutters maxWidth={false}>
    <Typography variant="body2" color="text.secondary" align="center" style={{color: "gray", width: "100%"}}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Container>
  );
}

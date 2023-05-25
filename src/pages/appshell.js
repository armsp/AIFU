import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import Link from '../components/Link';

function Appshell() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Link to="/">Go to the main page</Link>

      </Box>
    </Box>
  );
}

export default Appshell;

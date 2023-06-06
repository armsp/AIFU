import * as React from 'react';
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import AIFU from '../images/icons/brass-eye.svg';
const styles = {
  logo: {
    height: '40px',
    marginRight: '16px'
  }
}
export default function Appbar() {
    return (
      
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: 'darkgrey', borderBottom: '3px solid #ccc', }}>
          <Toolbar  sx={{
      width: "100%",
      maxWidth: 1200,
      mx: "auto"
    }}>
            {/* <Box sx={{display: 'flex', alignItems: 'center'}}> */}
          <Box maxWidth="md"
            component="img"
            sx={{
            height: 48,
            mr: 2
            }}
            alt="Your logo."
            src={AIFU}
          />
          {/* <Box display="flex" alignItems="center">
          <img src={AIFU} alt="Logo" style={styles.logo} />
          </Box> */}
            {/* <CameraIcon sx={{ mr: 2 }} /> */}
            
            {/* <img src={AIFU} alt="React Logo" /> */}
            <Typography variant="h6" color="inherit" noWrap>
              AIFU
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
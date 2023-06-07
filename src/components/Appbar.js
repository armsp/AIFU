import * as React from 'react';
import { Box, Button} from '@mui/material'
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
      
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: 'black', borderBottom: '3px solid #ccc', }}>
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
            <Typography variant="h5" color="inherit"  sx={{
              mr: 2,
              // display: { xs: 'flex', md: 'none' },
              // flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            noWrap>
              AIFU
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
  
            <Button color="inherit">About</Button>
            {/* <Button color="inherit">Testimonials</Button> */}
          </Toolbar>
        </AppBar>
    )
}
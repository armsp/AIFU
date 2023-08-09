import * as React from 'react';
import { Box, Button, Link } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AIFU from '../images/icons/brass-eye.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
// const styles = {
//   logo: {
//     height: '40px',
//     marginRight: '16px'
//   }
// }
export default function Appbar() {
  return (

    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', color: 'black', borderBottom: '3px solid #ccc', }}>
      <Toolbar sx={{
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
          alt="aifu logo."
          src={AIFU}
        />
     
        <Typography variant="h4" color="inherit" sx={{
          mr: 2,
          // display: { xs: 'flex', md: 'none' },
          // flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 800,
          // letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
          noWrap>
          <Link href="https://aifu.shantam.io">AIFU</Link>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Link href="https://github.com/armsp/AIFU" color="secondary">
          <GitHubIcon />
        </Link>
        {/* <Button color="inherit">About</Button> */}
        {/* <Button color="inherit">Testimonials</Button> */}
      </Toolbar>
    </AppBar>
  )
}
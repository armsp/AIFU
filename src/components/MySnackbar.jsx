import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
// const CustomSnackbar = ({ message, color, icon, duration = 3000, position = 'top' }) => {
//   const [open, setOpen] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleClose();
//     }, duration);

//     return () => clearTimeout(timer);
//   }, [duration]);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Snackbar
//       open={open}
//       autoHideDuration={duration}
//       anchorOrigin={{ vertical: position === 'top' ? 'top' : 'bottom', horizontal: 'center' }}
//       onClose={handleClose}
//     >
//       <Alert variant="filled" severity={color}>
//         {icon && <span>{icon}</span>}
//         {message}
//         <IconButton
//           size="small"
//           aria-label="close"
//           color="inherit"
//           onClick={handleClose}
//           sx={{ position: 'absolute', right: 8, top: 8 }}
//         >
//           <CloseIcon fontSize="small" />
//         </IconButton>
//       </Alert>
//     </Snackbar>
//   );
// };



const CustomSnackbar = ({ message, color, icon, duration, position, onClose }) => {
    const [open, setOpen] = useState(true);
  
    const handleClose = () => {
      setOpen(false);
      onClose();
    };
  
    return (
      <Snackbar open={open} autoHideDuration={duration || 3000} onClose={handleClose} anchorOrigin={position}>
        <MuiAlert onClose={handleClose} severity={color} variant="filled">
          {icon}
          {message}
        </MuiAlert>
      </Snackbar>
    );
  };
  
  export default CustomSnackbar;
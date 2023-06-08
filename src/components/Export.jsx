//flat button component that exports data when clicked
// it is disabled when there is no data to export
import React from 'react';
import { Button } from '@mui/material';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
export default function ExportButton({ disabled }) {
   const exportData = () => {
    console.log("calling mongodb export api");
   }
  
    return (
      <Button
        // variant="contained"
        // color="primary"
        color="secondary" 
        variant="outlined"
        onClick={exportData}
        disabled={disabled}
        disableElevation
        endIcon={<FileDownloadRoundedIcon  color="success" />}
      >
        Export Data
      </Button>
    );
  }

//flat button component that exports data when clicked
// it is disabled when there is no data to export
import React from 'react';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Box, CircularProgress  } from "@mui/material";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

export default function ExportButton({ disabled, tablename }) {
  const [loading, setLoading] = useState(false);

  const exportData = async () => {
    console.log("calling mongodb export api");

    try {
      setLoading(true);

      // Make the API call to the "/export" endpoint
      const response = await fetch('https://aifuv2.eastus.azurecontainer.io/export?'+ new URLSearchParams({
        collection_name: tablename}), {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch the export data.');
      }

            // Extract the filename from the response headers
            const contentDisposition = response.headers.get('content-disposition');
            const filenameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
            const filename = filenameMatch ? filenameMatch[1] : `${tablename}.json`;
      
            // Convert the response to a Blob
            const blob = await response.blob();
      
            // Create a temporary URL for the Blob
            const url = URL.createObjectURL(blob);
      
            // Create a link element to download the file
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
      
            // Trigger the click event on the link to download the file
            link.click();
      
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        };

  
    return (
      <div>
      {loading ? (
        <CircularProgress />
      ) : (
        
    
      <Button sx={{ mt:3, mb: 3 }}
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
      )}
    </div>
    );
  }

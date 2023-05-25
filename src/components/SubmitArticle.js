import { useState } from 'react';
import { TextField, Button, CircularProgress, Box } from '@mui/material';
import * as React from 'react';

const SubmitArticle = () => {
  const [article, setArticle] = useState('');
  const [mediaOrg, setMediaOrg] = useState('');
  const [url, setUrl] = useState('');
  const [iam, setIam] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const requestBody = {
      article,
      mediaOrg,
      url,
      iam,
    };
    try {
      const response = await fetch('https://sample.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      console.log('response:', response);
      setIsLoading(false);
      setArticle('');
      setMediaOrg('');
      setUrl('');
      setIam('');
    } catch (error) {
      console.error('error:', error);
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ mt: 2, mb: 1 }}>
        <h3>Submit new article here</h3>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', width: '100%' }}>
        <TextField
          label="Article"
          variant="outlined"
          value={article}
          onChange={(event) => setArticle(event.target.value)}
        />
        <TextField
          label="Media Organization"
          variant="outlined"
          value={mediaOrg}
          onChange={(event) => setMediaOrg(event.target.value)}
        />
        <TextField label="URL" variant="outlined" value={url} onChange={(event) => setUrl(event.target.value)} />
        <TextField label="I am" variant="outlined" value={iam} onChange={(event) => setIam(event.target.value)} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      {isLoading && <CircularProgress sx={{ mt: 2 }} />}
    </Box>
  );
};
export default SubmitArticle;
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SubmissionForm = () => {
  return (
      
    
          <Box sx={{ mt: 4, mb: 4, border: '1px solid #ccc', borderRadius: 4, p: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
        Submit Your Article
      </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Required Fields
                </Typography>
                <Box sx={{ borderRight: 1, borderColor: 'divider' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="article"
                        name="article"
                        label="Article"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="url"
                        name="url"
                        label="URL"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        id="media-org"
                        name="media-org"
                        label="Media Org"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Optional Fields
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      name="name"
                      label="Your Name"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="twitter"
                      name="twitter"
                      label="Twitter"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="github"
                      name="github"
                      label="GitHub"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="research-gate"
                      name="research-gate"
                      label="ResearchGate"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained">Submit</Button>
      </Box>
    </Box>
  );
};

export default SubmissionForm;

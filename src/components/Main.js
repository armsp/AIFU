import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import ReactMarkdown from 'react-markdown';
import SubmissionFormWithCountry from './SubmitWithCountry';

const markdown = `
# AI Flub Ups

AIFU is a one stop solution for researchers and anyone looking for a place to learn about the repercussions of using Algorithms and AI blatantly, too soon, indiscriminately, harmfully.

## How to contribute?

**Steps** -
* Go to the country of the concerned article/news.
* Enter the article, organization and other details you could discern (you see an example when you go to the country)
* Press \`Submit\`
* If the country you want to submit for is not in the list below, then use the form below and choose \`global\`
`;

export default function Main() {
    return(
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 0,
            pb: 0,
          }}
        >
          <Container maxWidth="md" sx={{ pb:0 }}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </Container>
          <Container maxWidth="lg">
            <SubmissionFormWithCountry />
          </Container>
        </Box>
      </main>
    )
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import ReactMarkdown from 'react-markdown';
import SubmissionFormWithCountry from './SubmitWithCountry';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BouncyArrow = ({ targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <IconButton onClick={handleClick} sx={{ animation: 'bounce 1s infinite' }}>
      <KeyboardArrowDownIcon fontSize="large" />
    </IconButton>
  );
};

const markdown = `
# AI Flub Ups

AIFU aims to be a platform for researchers and anyone looking for a place to learn about the repercussions of using AI blatently, too soon, indiscriminately, harmfully. Its an experiment in meta analysis. All of the information is "generated" and "retreived" using large language model(s). Currently, the design of the platform leans towards using causal language models as judge, jury and executioner if you will.

## How to use the platform?

We intend you to submit links to articles that you think document/inform of cases where harm "may" have been caused becasue of the use of AI. Your submission will be recorded publicly on GitHub and the processing pipeline will start. You may have to wait for a few seconds to a few minutes for the workflow to finish and a short response of the outcome of the workflow will be posted as a reply to the created issue. See an [example outcome](https://github.com/armsp/AIFU/issues/84).

**Steps** -

* Go to the country of the concerned article/news. If the article/news does not pertain to a country then submit it as global.
* If your country of choice is not in the grid below, scroll down and use the submission form at the bottom of the page where you can select any country you like. 
* Enter the headline, url, media organization and other details you can discern (see examples when you navigate to a country)
* Press **Submit** to start the workflow
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
            {/* <BouncyArrow targetId="submitmain" /> */}
          </Container>
          {/* <Container maxWidth="lg">
            <SubmissionFormWithCountry />
          </Container> */}
        </Box>
      </main>
    )
}
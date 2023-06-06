import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import ReactMarkdown from 'react-markdown';
import SubmissionFormWithCountry from './SubmitWithCountry';
const markdown = `
# AI Fuck Ups

AIFU is a one stop solution for researchers and anyone looking for a place to learn about the repercussions of using Algorithms and AI blatantly, too soon, indiscriminately, harmfully.

## How to contribute?

**Steps** -
* Go to the country of the concerned article/news.
* Enter the article, organization and other details you could discern (you see an example when you go to the country)
* Press \`Submit\`
* If the country you want to submit for is not in the list below, then use the form below -
`;

export default function Main() {
    return(
        <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            {/* <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              AIFU
            </Typography> */}
            {/* <Typography variant="h5" align="left" color="text.secondary" paragraph>
            Algorithmic or AI Fuck Ups

AIFU is a one stop solution for researchers and anyone looking for a place to learn about the repercussions of using Algorithms and AI blatently, too soon, indiscriminately, harmfully.
How to contribute?

Steps -

    Go to the country of the concerned article/news.<br></br>
    Enter the article, organization and other details you could discern (you see an example when you go to the country)<br></br>
    Press `Submit`<br></br>

            </Typography> */}
            <ReactMarkdown>{markdown}</ReactMarkdown>
            <SubmissionFormWithCountry />
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        {/* <Container sx={{ py: 8 }} maxWidth="md"> */}
          {/* End hero unit */}
          {/* <Grid container spacing={4}> */}
            {/* {cards.map((card) => ( */}
              {/* <Grid item key={card} xs={12} sm={6} md={4}> */}
                {/* <Card */}
                  {/* sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} */}
                {/* > */}
                  {/* <CardMedia */}
                    {/* component="img" */}
                    {/* sx={{ */}
                      {/*// 16:9*/}
                      {/* pt: '56.25%', */}
                    {/* }} */}
                    {/* image="https://source.unsplash.com/random" */}
                    {/* alt="random" */}
                  {/* /> */}
                  {/* <CardContent sx={{ flexGrow: 1 }}> */}
                    {/* <Typography gutterBottom variant="h5" component="h2"> */}
                      {/* Heading */}
                    {/* </Typography> */}
                    {/* <Typography> */}
                      {/* This is a media card. You can use this section to describe the */}
                      {/* content. */}
                    {/* </Typography> */}
                  {/* </CardContent> */}
                  {/* <CardActions> */}
                    {/* <Button size="small">View</Button> */}
                    {/* <Button size="small">Edit</Button> */}
                  {/* </CardActions> */}
                {/* </Card> */}
              {/* </Grid> */}
            {/* ))} */}
          {/* </Grid> */}
        {/* </Container> */}
      </main>
    )
}
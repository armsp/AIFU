import { CssBaseline, Grid, Card, CardContent, Container, Typography, CardMedia, Button } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
// import Copyright from '../components/Copyright';
import SubmitArticle from '../../components/SubmitArticle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, CircularProgress  } from "@mui/material";
import CollapsibleTable from '../../components/CollapsibleTable';
import VCollapsibleTable from '../../components/VTable';
import SubmissionForm from '../../components/Submit';
import Chart from './chart.json'
import { Vega } from 'react-vega';
import { TableVirtuoso } from 'react-virtuoso';
import InfoIcon from '@mui/icons-material/Info';
import CustomSnackbar from '../../components/MySnackbar';
import Appbar from '../../components/Appbar';
import Footer2 from '../../components/Footer2';

const showTable = () =>{
  let tableName = "usa";
  fetch('https://aifuv2.eastus.azurecontainer.io/records?'+ new URLSearchParams({
    table_name: tableName}), {
    method: 'GET', // or 'PUT'
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    console.table(data["records"]);
    var obj = data["records"];
    document.getElementById("tablecontent").innerHTML = obj
    .map(row => `<tr><td class="title">${row["Headline"]}</td><td class="media">${row["Media org"]}</td><td class="url"><a href=${row["URL"]}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"/></svg></a></td>`).join("")
    })
  .catch((error) => {
    console.error('Error:', error);
  });
}
export default function Usa() {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleButtonClick = () => {
    setShowSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };
  // showTable();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

  };
  function handleHover(...args){
    console.log(args);
  }
  
  const signalListeners = { hover: handleHover };
  useEffect(() => {
    async function fetchData() {
      try {
        let tableName = "usa";
  
        const response = await fetch('https://aifuv2.eastus.azurecontainer.io/records?'+ new URLSearchParams({
          table_name: tableName}), {
          method: 'GET', // or 'PUT'
        });
        const json = await response.json();
        console.log(json);
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
console.log(Chart);
    return(
        <>
        <CssBaseline />
        <Appbar />
        header
        submit from
        table/Accordion
        footer
        <SubmitArticle />
        <Button variant="contained" onClick={handleButtonClick}>
        Show Snackbar
      </Button>

      {showSnackbar && (<CustomSnackbar
        message="This is a custom snackbar"
        color="success"
        icon={<InfoIcon/>}
        duration={3000}
        position={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleSnackbarClose}
        open={showSnackbar}
      />)}
        <SubmissionForm />
        {/* <Chart /> */}
        <Card sx={{display: 'flex',flexShrink:1,
  justifyContent: 'center',
  alignItems: 'center',
  height: '300px',}}>
        <Vega spec={Chart} signalListeners={signalListeners} />
        </Card>
        {/* <Chart2 /> */}
        <CollapsibleTable collapseOthers={false}/>
        <VCollapsibleTable />
        {/* <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {data[0].map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {Object.keys(item).map((key) => (
                <TableCell key={key}>{item[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    {loading ? (
        <CircularProgress />
      ) : data["records"].length > 0 ? (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Headline</TableCell>
            <TableCell>Media Org</TableCell>
            <TableCell>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.records.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.Headline}</TableCell>
              <TableCell>{row['Media org']}</TableCell>
              <TableCell>{row.URL}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
) : (
  <p>No data found.</p>
)}
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
        </Accordion>
        <Footer2 />
        </>
        )
}
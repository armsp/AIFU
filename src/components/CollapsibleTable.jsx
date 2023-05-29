import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Collapse,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
const moredata = [
  {"Affected Group": ""},
  {"Who developed the model/AI system?": ""},
  {"How and where was it deployed?": ""},
  {"What was its effect?": ""},
  {"Did the state/party accept their error?": ""},
  {"Were there compensations/apologies made?": ""},
  {"Did they address the issue through any legislation and (or) regulation?": ""},
  {"Where there any regulations & legislation already in place that still failed to prevent this?": ""},
  {"Did something similar happen again? Why?": ""},
  {"Are there any legislations in the making to address something like this?": ""},
  {"Were there any legislations that got blocked? Why? What were the arguements? Who blocked it?": ""}
];
const Row = React.memo((props) => {
  const { row, open, setOpen, collapseOthers } = props;

  const handleClick = () => {
    if (collapseOthers) {
      if (open === row.name) {
        setOpen(null);
      } else {
        setOpen(row.name);
      }
    } else {
      setOpen((prevOpen) => {
        if (prevOpen && prevOpen.includes(row.name)) {
          return prevOpen.filter((name) => name !== row.name);
        } else {
          return prevOpen ? [...prevOpen, row.name] : [row.name];
        }
      });
    }
  };

  const isOpen = collapseOthers ? open === row.name : open.includes(row.name);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={handleClick}>
            {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.Headline}</TableCell>
        <TableCell>{row['Media org']}</TableCell>
        <TableCell>{row.URL}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box margin={1}>
            {/* {moredata.map((item, index) => (
        <Typography key={index} variant="body1" component="div">
          <strong>{Object.keys(item)[0]}:</strong> {Object.values(item)[0]}
        </Typography>
      ))} */}
      <List dense>
        {moredata.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={<strong>{Object.keys(item)[0]}</strong>}
              secondary={Object.values(item)[0]}
            />
          </ListItem>
        ))}
      </List>
              {/* <Paper elevation={4}>
                <Box p={2}>
                  <p>{row.details}</p>
                  <Button variant="contained" color="primary">
                    Click me
                  </Button>
                </Box>
              </Paper> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
});

const CollapsibleTable = ({ collapseOthers = true, data }) => {
  // const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(collapseOthers ? null : []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       let tableName = "usa";
  
  //       const response = await fetch('https://aifuv2.eastus.azurecontainer.io/records?'+ new URLSearchParams({
  //         table_name: tableName}), {
  //         method: 'GET', // or 'PUT'
  //       });
  //       const json = await response.json();
  //       console.log(json);
  //       setData(json);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Headline</TableCell>
            <TableCell>Media Org</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <Row
              key={index}
              row={row}
              open={open}
              setOpen={setOpen}
              collapseOthers={collapseOthers}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  )
};

export default CollapsibleTable;
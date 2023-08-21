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
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AnswerMe from './AnswerMe';
const theme = createTheme({
  palette: {
    primary: {
      main: "#90caf9"
    }
  },
});
const Row = React.memo((props) => {
  const { row, isOpen, onRowClick } = props;
  // const { row, open, setOpen, collapseOthers } = props;
  console.log(row);
  // const handleClick = () => {
  //   if (collapseOthers) {
  //     if (open === row.name) {
  //       setOpen(null);
  //     } else {
  //       setOpen(row.name);
  //     }
  //   } else {
  //     setOpen((prevOpen) => {
  //       if (prevOpen && prevOpen.includes(row.name)) {
  //         return prevOpen.filter((name) => name !== row.name);
  //       } else {
  //         return prevOpen ? [...prevOpen, row.name] : [row.name];
  //       }
  //     });
  //   }
  // };

  // const isOpen = collapseOthers ? open === row.name : open.includes(row.name);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={onRowClick}>
            {isOpen ? <KeyboardArrowUp color="info"/> : <KeyboardArrowDown color="success"/>}
          </IconButton>
        </TableCell>
        <TableCell>{row.headline}</TableCell>
        <TableCell>{row['media_org']}</TableCell>
        {/* <TableCell>{row.score}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box margin={1} sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>
              {/* {moredata.map((item, index) => (
        <Typography key={index} variant="body1" component="div">
          <strong>{Object.keys(item)[0]}:</strong> {Object.values(item)[0]}
        </Typography>
      ))} */}
      <Box sx={{ m:1, }}>
                <h3>Summary of the Article</h3>
                <p>{row.summary}</p>
                <p><a href={row.uri}>Link</a> to the article</p>
              </Box>
              <List >
                {
                  row['q_as'].map((item, index) => ([
                    <ListItem key={index}
                    // primaryAction={ 
                    //   Object.values(item)[0].tag.map(who => (
                    //   <Chip label={who} />
                    //   ))
                    // }

                    >

                      <ListItemText
                        primary={<strong>{Object.values(item)[0]}</strong>}
                        secondary={
                          <>
                            {Object.values(item)[1]}
                            {"  "}
                            {/* { Object.values(item)[2].map(who => (
                  <Chip label={who} color="info" sx={{borderRadius: 1}} size="small"  variant="inset" component="span" />))
                } */}
                            <Chip label="GPT-4" sx={{ borderRadius: 5, bgcolor: 'rgba(0, 0, 255, 0.1)' }} size="small" variant="inset" component="span" />
                           
                          </>
                        }
                      />

                      {/* <AnswerMe question={Object.keys(item)[0]} answer={Object.values(item)[1]} /> */}

                      {/* <>{   Object.values(item)[0].tag.map(who => (
             <Chip label={who} />
             ))}</> */}

                    </ListItem>,
                    // <Divider variant="inset" component="li" />,
                    <Divider />
                  ]
                  ))
                }

              </List>

              
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
  // const [open, setOpen] = React.useState(collapseOthers ? null : []);
    const [openRows, setOpenRows] = useState(new Array(data.length).fill(false));

const handleRowClick = (index) => {
    setOpenRows((prevOpenRows) => {
      const newOpenRows = [...prevOpenRows];
      
      if (collapseOthers) {
        newOpenRows[index] = !newOpenRows[index]; // Toggle the clicked row
      } else {
        newOpenRows[index] = !newOpenRows[index]; // Toggle the clicked row
      }

      return newOpenRows;
    });
  };
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
  // {row['details'].map(item => (Object.values(item)[0].tag.map(who => (console.log(who)))))}
  return (

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{
            "& th": {
              color: "rgba(96, 96, 96)",
              backgroundColor: "lightgrey"
            }
          }}>
            <TableCell />
            <TableCell>Headline</TableCell>
            <TableCell>Media Org</TableCell>
            {/* <TableCell>Score</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <Row
              key={index}
              row={JSON.parse(row)}
              // open={open}
              // setOpen={setOpen}
            
                isOpen={openRows[index]} // Use the open state from the array
              onRowClick={() => handleRowClick(index)} // Pass the index to the click handler
              collapseOthers={collapseOthers}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
};

export default CollapsibleTable;
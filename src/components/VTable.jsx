import * as React from 'react';
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Collapse,
  Button,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Virtuoso } from 'react-virtuoso';

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
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={handleClick}>
            {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Paper elevation={4}>
                <Box p={2}>
                  <p>{row.details}</p>
                  <Button variant="contained" color="primary">
                    Click me
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
});

const VCollapsibleTable = ({ collapseOthers = true }) => {
  const data = [
    {
      name: 'Item 1',
      description: 'Description 1',
      details: 'Details for item 1',
    },
    {
      name: 'Item 2',
      description: 'Description 2',
      details: 'Details for item 2',
    },
    // Add more items here
  ];

  const [open, setOpen] = React.useState(collapseOthers ? null : []);

  return (
    <TableContainer component={Paper} sx={{width: "100%"}}>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
        </TableRow>
      </TableHead>
      <Virtuoso
        style={{ width: "100%" }}
        totalCount={data.length}
        itemContent={(index) => {
          const row = data[index];
          return (
            <Row
              key={row.name}
              row={row}
              open={open}
              setOpen={setOpen}
              collapseOthers={collapseOthers}
            />
          );
        }}
      />
    </TableContainer>
  );
};

export default VCollapsibleTable;
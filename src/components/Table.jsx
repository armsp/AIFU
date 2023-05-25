import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Dummy data for demonstration purposes
const rows = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@gmail.com",
    info: {
      message: "This is a custom component!",
      buttonText: "Click me",
    },
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    info: {
      message: "Another custom component here!",
      buttonText: "Press me",
    },
  },
];

// Custom component that will be displayed when the table row is expanded
function CustomComponent(props) {
  const { message, buttonText } = props;

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="body1" gutterBottom>
        {message}
      </Typography>
      <button>{buttonText}</button>
    </Paper>
  );
}

function CollapsibleTable() {
  const [openRows, setOpenRows] = useState([]);

  // Function to handle the expanding and collapsing of table rows
  const handleOpenRow = (id) => {
    setOpenRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => handleOpenRow(row.id)}
                  >
                    {openRows.includes(row.id) ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={openRows.includes(row.id)} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                      <CustomComponent {...row.info} />
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;

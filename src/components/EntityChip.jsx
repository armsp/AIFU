import React from 'react';
import Chip from '@mui/material/Chip';
import {Stack, Box, Typography} from '@mui/material';
// to use links for DBPedia Entities use the Chip component as - 
// <Chip
//   label="Clickable Link"
//   component="a"
//   href="#basic-chip"
//   variant="outlined"
//   clickable
// />
const EntityChips = ({ entities }) => {
    return (
        // <Stack direction="row" spacing={1}>
        <Box margin={1}>
            <Typography><strong>Entities</strong></Typography>
          {entities.map((entity, index) => {
            let color;
            if (entity.label === "PERSON") {
              color = "rgba(255, 173, 173, 0.5)";
            } else if (entity.label === "ORG") {
              color = "rgba(255, 214, 165, 0.5)";
            } else if (entity.label === "GPE") {
              color = "rgba(253, 255, 182, 0.5)";
            } else if (entity.label === "DATE") {
              color = "rgba(202, 255, 191, 0.5)";
            } else if (entity.label === "MONEY") {
                color = "rgba(155, 246, 255, 0.5)"
            } else if (entity.label === "NORP") {
                color = "rgba(160, 196, 255, 0.5)"
            } else if (entity.label === "LOC") {
                color = "rgba(189, 178, 255, 0.5)"
            } else if (entity.label === "FAC") {
                color = "rgba(255, 198, 255, 0.5)"
            } else if (entity.label === "LAW") {
                color = "rgba(255, 255, 252, 0.5)"
            }
    
            return (
              <Chip
                key={index}
                label={`${entity.text} | ${entity.label}`}
                variant="outlined"
                style={{ margin: '4px', backgroundColor: color }}
              />
            );
          })}
        {/* </Stack> */}
        </Box>
      );
//   return (
//     <div>
//       {entities.map((entity, index) => (
//         <Chip
//           key={index}
//           label={`${entity.text} | ${entity.label}`}
//           variant="outlined"
//           style={{ margin: '4px' }}
//         />
//       ))}
//     </div>
//   );
};

export default EntityChips;

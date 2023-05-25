import { Grid, Card, CardContent, Container, Typography, CardMedia } from '@mui/material';
import * as React from 'react';
import Copyright from '../components/Copyright';
import SubmitArticle from '../components/SubmitArticle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Country({countryData}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const emptyCountry = <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}><Typography sx={{ width: '33%', flexShrink: 0 }}>
  Nothing much going on here, seems fishy. lets investigate a bit more...
</Typography></Accordion>;

  return (
    <div>
      {countryData ? countryData : emptyCountry}
      <SubmitArticle />
        <Copyright />
    </div>
  );
}
// export default function Country () {
//     return(
//         //accordion
//         <>
//         country
//         <SubmitArticle />
//         <Copyright />
//         </>
//     )
// }
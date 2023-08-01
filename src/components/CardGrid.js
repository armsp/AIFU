import { Grid, Button, Badge, Slide, Card, CardActionArea, CardContent, Container, Typography, CardMedia, Chip, CardHeader } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import countriesyaml from './countries.yaml';
import { Link } from 'gatsby';

const CountryGrid = () => {
  // const countriesjson = yaml.load(countriesyaml);
  console.log(countriesyaml.countries);
  const [cards, setCards] = useState(countriesyaml.countries);
  // console.log(countriesjson.countries);
  // console.log(JSON.stringify(countriesjson));
  const [inTransition, setInTransition] = useState(false);

  const handleSortByTitle = () => {
    if (inTransition) return;
    setInTransition(true);

    const sortedCards = [...countriesyaml.countries].sort((a, b) => a.title.localeCompare(b.title));

    setTimeout(() => {
      setCards(sortedCards);
      setInTransition(false);
    }, 50); // Adjust the duration as needed
  };

  const handleSortByData = () => {
    if (inTransition) return;
    setInTransition(true);

    const sortedCards = [...countriesyaml.countries].sort((a, b) => {
      const reportsA = a.reports || 0;
      const reportsB = b.reports || 0;
      return reportsB - reportsA;
    });

    setTimeout(() => {
      setCards(sortedCards);
      setInTransition(false);
    }, 50); // Adjust the duration as needed
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="left" color="text.secondary">
      Articles per Country
      </Typography>
      <Button variant="outlined" onClick={handleSortByTitle}>Sort by Title</Button>
      <Button variant="outlined" onClick={handleSortByData}>Sort by Cases</Button>
      
      <Grid container spacing={2}>
      {/* {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} xl={2}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))} */}
{cards.map((item) => (console.log(item)))}
      {cards.map((item) => (
        
        <Grid item xs={12} sm={6} md={4} xl={3} style={{display: 'flex'}}>
           <Slide direction="up" in={true} timeout={500}>
           {/* <Badge color="error" badgeContent="WIP" anchorOrigin={{ vertical: 'top', horizontal: 'right' }} invisible={!item.wip}> */}
          <Card variant="outlined" sx={{width: "100%"}} >
            {/* <CardHeader title={
            <Badge badgeContent={item.wip? "WIP": ""} anchorOrigin='right' variant="WIP" color="secondary" />
             
          } /> */}
                      {/* <Badge color="error" badgeContent="WIP" anchorOrigin={{ vertical: 'top', horizontal: 'right' }} invisible={!item.wip}> */}
          <CardActionArea sx={{p:1}} component={Link} to={item.url}>
            <CardMedia style={{ backgroundSize: "contain" }} sx={{ height: 175 }} image={item.flag} />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.url}
              </Typography>
              
              <Chip color="warning" label={item.reports?`${item.reports} known cases`:"No known cases"}/>
              {/* <Chip color="warning" label={ }/> */}
             
            </CardContent>
            </CardActionArea>
           
            {/* </Badge> */}
          </Card>
         {/* </Badge> */}
          </Slide>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};
export default CountryGrid;
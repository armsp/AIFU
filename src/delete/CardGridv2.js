import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const GridContainer = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '2000px',
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
  [theme.breakpoints.only('lg')]: {
    maxWidth: '1080px',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.only('md')]: {
    maxWidth: '600px',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '600px',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const CardItem = ({ title, image, chip1, chip2, content }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Grid container justifyContent="space-between">
          <Chip label={chip1} variant="outlined" />
          <Chip label={chip2} variant="outlined" />
        </Grid>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const MyComponent = () => {
  const data = [
    {
      id: 1,
      title: 'Drive',
      image: 'https://www.example.com/drive.jpg',
      chip1: 'Action',
      chip2: 'Drama',
      content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
    },
    {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },

      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
      {
        id: 1,
        title: 'Drive',
        image: 'https://www.example.com/drive.jpg',
        chip1: 'Action',
        chip2: 'Drama',
        content: 'A Hollywood stunt performer who moonlights as a wheelman for criminals discovers that a contract has been put on him after a heist gone wrong.',
      },
    // add more data objects as needed
  ];

  return (
    <GridContainer container spacing={2}>
      {data.map((item) => (
        <Grid item key={item.id}>
          <CardItem
            title={item.title}
            image={item.image}
            chip1={item.chip1}
            chip2={item.chip2}
            content={item.content}
          />
        </Grid>
      ))}
    </GridContainer>
  );
};

export default MyComponent;

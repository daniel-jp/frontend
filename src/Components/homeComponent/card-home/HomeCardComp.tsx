import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react';

interface SubCardProps {
  title: string;
  content: string;
  image: string;
  price: string;
}

const HomeCardComp: React.FC<SubCardProps> = ({title, content, image, price}) => {
  return (
    <Grid item xs={12} sm={6} md={3} >
      <Card sx={{
        borderRadius: '0', ":hover": {
          cursor: "pointer",
          color: "#2D3748",
          transform: "scale(1.1)",
          boxShadow: 10,
          filter: "opacity(1)",
        }, boxShadow: 4
      }} >
        <CardMedia component="img" height={150} image={image} alt={title} />
        <CardContent>
          <Typography fontWeight={600} fontFamily='Roboto, sans-serif' variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" fontWeight={500} color="#2D3748">

            {content}
          </Typography>

        </CardContent>
        <CardActions>
          <Typography sx={{color: "#718096"}} fontWeight={400} variant="body2">
            £\kg
          </Typography>
          <Typography fontWeight={400}
            variant="body2" color="red">
            {price}
          </Typography>
        </CardActions>
      </Card >
    </Grid >
  );
};

export default HomeCardComp;

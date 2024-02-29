import {Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react';

interface SubCardProps {
  title: string;
  content: string;
  image: string;
  price: string;
}

const HomeCardComp: React.FC<SubCardProps> = ({title, content, image, price}) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{
        borderRadius: '0',
        ":hover": {
          cursor: "pointer",
          color: "#2D3748",
          boxShadow: 8,
          //transform: "scale(1.1)",
          // filter: "opacity(1.5)",
        }, boxShadow: -0
      }}>
        <CardMedia component="img" height={200} image={`${image}`} alt={title}
          sx={{// Adicione o efeito de zoom ao passar o cursor (hover)
            '&:hover': {
              transform: 'scale(1.1)', // Ajuste o valor conforme necessário
            },
            transition: 'transform 0.3s ease', // Adiciona uma transição suave ao efeito de zoom
          }} />
        <CardContent>
          <Typography fontWeight={600} fontFamily='Roboto, sans-serif' variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" fontWeight={500} color="#2D3748">
            {content}
          </Typography>

        </CardContent>
        <CardActions disableSpacing>
          <Typography pb={1} fontSize="lg" fontWeight="400">
            £{price}
          </Typography>
        </CardActions>
      </Card >
    </Grid >
  );
};

export default HomeCardComp;

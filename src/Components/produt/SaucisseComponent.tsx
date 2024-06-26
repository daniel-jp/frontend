import {Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography} from '@mui/material';







interface SubCardProps {
  imageUrl: string;
  description: string;
  ratingValue: number;
  alt: string;
  price: string;
}

const SaucisseComponent: React.FC<SubCardProps> = ({imageUrl, description, ratingValue, alt, price}) => {
  return (
    <>
      <Grid container item xs={12} sm={6} md={3}>
        <Card sx={{
          borderRadius: '0',
          width: 300,
          ":hover": {
            cursor: "pointer",
            color: "#2D3748",
            boxShadow: 8,

          }, boxShadow: -0
        }}>
          <CardMedia component="img" height={200} width={"100%"} image={`${imageUrl}`} alt={alt}
            sx={{// Adicione o efeito de zoom ao passar o cursor (hover)
              '&:hover': {
                transform: 'scale(1.1)', // Ajuste o valor conforme necessário
              },
              transition: 'transform 0.3s ease', // Adiciona uma transição suave ao efeito de zoom
            }} />
          <CardContent>

            <Typography variant="body2" fontWeight={500} color="#2D3748">
              {description}
            </Typography>

          </CardContent>

          <CardActions disableSpacing sx={{justifyContent: 'space-between'}}>
            <Typography fontSize="lg" fontWeight="lg">
              £{price}
            </Typography>
            <Rating value={ratingValue} />
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default SaucisseComponent;

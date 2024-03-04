import {Box, Grid, Typography} from '@mui/material';

import GourmandComponent from '../../../Components/produt/GourmandComponent';
import ProdutProps3 from '../../../props/produtProps/ProdutProps3';


// Service.tsx
export default function Gourmand() {
  const produtPorps = ProdutProps3();
  return (
    <Box my={10}>

      <Box mb={5}
        sx={{
          px: 2, mt: "75px",
          textAlign: "center", justifyContent: 'center'
        }}
      >
        <Typography component="h2" sx={{fontSize: {xs: 20, sm: 20, md: 22, lg: 26}, fontWeight: "900"}} color="#2D3748">
          Gamme gourmande
        </Typography>
        <Typography variant="body1" sx={{textAlign: 'center', width: "100%", fontWeight: "500"}} color="#718096">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>


      <Grid container spacing={2} >
        {
          produtPorps.map((prods) => (
            <GourmandComponent
              imageUrl={prods.imageUrl}
              description={prods.description}
              ratingValue={prods.ratingValue}
              alt={prods.alt} price={prods.price} />
          ))}
      </Grid>
    </Box>
  )
}

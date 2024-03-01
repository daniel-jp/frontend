import {Box, Grid, Stack, Typography} from '@mui/material';

import ViandeComponent from '../../../Components/produt/ViandeComponent';
import ViandeComponent2 from '../../../Components/produt/ViandeComponent2';
import ProdutProps1 from '../../../props/produtProps/ProdutProps1';
import ProdutProps2 from '../../../props/produtProps/ProdutProps2';

// Service.tsx
export default function FraiPoulet() {

  const produtProps = ProdutProps1();
  const produtProp2 = ProdutProps2();


  return (
    <Box sx={{my: 10}}>
      <Stack mb={10}>
        <Box mb={5}
          sx={{
            px: 2,
            textAlign: "center", justifyContent: 'center'
          }}
        >
          <Typography component="h2" sx={{fontSize: {xs: 20, sm: 20, md: 22, lg: 26}, fontWeight: "900"}} color="#2D3748">
            Viandes bovines
          </Typography>
          <Typography variant="body1" sx={{textAlign: 'center', width: "100%", fontWeight: "500"}} color="#718096">
            See what our customers love about our products. Discover how we excel in
            efficiency, durability, and satisfaction. Join us for quality, innovation,
            and reliable support.
          </Typography>
        </Box>
        <Grid container spacing={2} >
          {
            produtProps.map((prods) => (
              <ViandeComponent
                imageUrl={prods.imageUrl}
                description={prods.description}
                ratingValue={prods.ratingValue}
                alt={prods.alt} price={prods.price} />
            ))
          }
        </Grid>
      </Stack>

      <Stack mt={10}>
        <Box mb={5}
          sx={{
            px: 2,
            textAlign: "center", justifyContent: 'center'
          }}
        >
          <Typography component="h2" sx={{fontSize: {xs: 20, sm: 20, md: 22, lg: 26}, fontWeight: "900"}} color="#2D3748">
            Viandes de volailles
          </Typography>
          <Typography variant="body1" sx={{textAlign: 'center', width: "100%", fontWeight: "500"}} color="#718096">
            See what our customers love about our products. Discover how we excel in
            efficiency, durability, and satisfaction. Join us for quality, innovation,
            and reliable support.
          </Typography>
        </Box>
        <Grid container spacing={2} >
          {
            produtProp2.map((prods) => (
              <ViandeComponent2
                imageUrl={prods.imageUrl}
                description={prods.description}
                ratingValue={prods.ratingValue}
                alt={prods.alt} price={prods.price} />
            ))
          }
        </Grid>
      </Stack>
    </Box>
  )
}

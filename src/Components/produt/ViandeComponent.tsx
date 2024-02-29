import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import ProdutProps1 from '../../props/produtProps/ProdutProps1';
import ProdutProps2 from '../../props/produtProps/ProdutProps2';





export default function PouletComponent() {
  const prodprops1 = ProdutProps1();

  const prodprops2 = ProdutProps2();

  return (
    <>
      <Box

        sx={{
          pt: {xs: 4, sm: 12},
          pb: {xs: 6, sm: 6},
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: {xs: 3, sm: 6},
        }}>
        <Box
          sx={{
            width: {sm: '100%', md: '60%'},
            textAlign: {sm: 'left', md: 'center'},
          }}
        >
          <Typography component="h2"
            sx={{fontSize: {xs: 20, sm: 20, md: 22, lg: 26}, fontWeight: "700"}} color="#2D3748">
            Viandes bovines
          </Typography>
          <Typography variant="body1" sx={{textAlign: 'center', width: "100%", fontWeight: "500"}} color="#718096">
            See what our customers love about our products. Discover how we excel in
            efficiency, durability, and satisfaction. Join us for quality, innovation,
            and reliable support.
          </Typography>
        </Box>
        <Grid container spacing={2} >
          {prodprops1.map((prod, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}
              sx={{display: 'flex'}}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1, boxShadow: -0,
                  p: 1,
                }}
              >

                <img
                  src={`${prod.imageUrl}`}
                  alt={prod?.alt}
                  height='100%'
                />

                <Box
                  sx={{

                    flexDirection: 'column',
                    justifyContent: 'center',

                  }}
                >

                  <Typography variant="h6" component="p">
                    {prod?.description}
                  </Typography>

                  <CardActions disableSpacing sx={{justifyContent: 'space-between'}}>
                    <Typography fontSize="lg" fontWeight="lg">
                      $2,900
                    </Typography>
                    <Rating value={prod?.ratingValue} readOnly /></CardActions>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>



      <Box

        sx={{
          pt: {xs: 4, sm: 12},
          pb: {xs: 8, sm: 12},
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: {xs: 3, sm: 6},
        }}>
        <Box
          sx={{
            width: {sm: '100%', md: '60%'},
            textAlign: {sm: 'left', md: 'center'},
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
          {prodprops2.map((prod, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}
              sx={{display: 'flex'}}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1, boxShadow: -0,
                  p: 1,
                }}
              >

                <img
                  src={`${prod.imageUrl}`}
                  alt={prod?.alt}
                  height='100%'
                />

                <Box
                  sx={{

                    flexDirection: 'column',
                    justifyContent: 'center',

                  }}
                >

                  <Typography variant="h6" component="p">
                    {prod.description}
                </Typography>

                <CardActions disableSpacing sx={{justifyContent: 'space-between'}}>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                  <Rating value={prod?.ratingValue} readOnly /></CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    </>
  );
}
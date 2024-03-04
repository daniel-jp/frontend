import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {Grid, Stack} from '@mui/material';

import BannerComponent from '../../Components/decouvre/BannerComponent';
import DecouvCard1 from '../../Components/decouvre/DecouvCard';
import DecouvFeatuere from '../../Components/decouvre/DecouvFeatuere';
import DecouvFeatuereProp from '../../props/DecService/DecouvFeatuereProp';

// Service.tsx
export default function index() {
  const decouv = DecouvFeatuereProp();


  return (
    <div>

      <Stack>
        <BannerComponent />
      </Stack>
      {/* <Stack>
        <DecouvreComponent />
  </Stack>*/}

      <Grid py={5}>
        {
          decouv.map((decouv) => (

            <DecouvFeatuere
              date={decouv.date}
              description={decouv.description}
              image={decouv.image}
              imageLabel={decouv.imageLabel}
              title={decouv.title} />
          ))

        }

      </Grid>

      {/*<Typography variant="h4">Service Page</Typography>
        */}
      <Stack>
        <DecouvCard1 />
      </Stack>


    </div>
  )
}

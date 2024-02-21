import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {Box, Grid, Stack, Typography} from '@mui/material';
import Slider from 'react-slick';

import BannerComponent from '../../Components/decouvre/BannerComponent';
import DecouvCard from '../../Components/decouvre/DecouvCard';
import DecouvCard1 from '../../Components/decouvre/DecouvCard';
import DecouvFeatuere from '../../Components/decouvre/DecouvFeatuere';
import DecouvreComponent from '../../Components/decouvre/DecouvreComponent';
import BannerProp from '../../props/DecService/BannerProp';
import CardDecouv from '../../props/DecService/CardDecouvProps';
import CardDecouvProps from '../../props/DecService/CardDecouvProps';
import DecouvFeatuereProp from '../../props/DecService/DecouvFeatuereProp';

// Service.tsx
export default function index() {
  const decouv = DecouvFeatuereProp();
  const cardDecouv = CardDecouvProps();


  const sliderProps = BannerProp();





  return (
    <div>

      <Stack sx={{overflow: 'hidden', }}>
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

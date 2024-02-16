import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {Grid, Stack, Typography} from '@mui/material';

import DecouvCard from '../../Components/decouvre/DecouvCard';
import DecouvFeatuere from '../../Components/decouvre/DecouvFeatuere';
import DecouvreComponent from '../../Components/decouvre/DecouvreComponent';
import Root from '../../layout/Root';
import CardDecouv from '../../props/DecService/CardDecouv';
import DecouvFeatuereProp from '../../props/DecService/DecouvFeatuereProp';

// Service.tsx
export default function index() {
  const decouv = DecouvFeatuereProp();
  const cardDecouv = CardDecouv();

  const bannerItems = [
    {
      title: 'Item 1',
      imageUrl: '/public/assets/decouvre/boi.jpg'
    },
    {
      title: 'Item 2',
      imageUrl: '/public/assets/decouvre/fgg.jpg'
    },
    // Adicione mais itens conforme necessário
  ];
  return (
    <div>
      <Stack>
        <DecouvreComponent />
      </Stack>

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
      <div>
        <DecouvCard images={[
          {src: '/public/assets/decouvre/card1.jpg', title: 'imag1', alt: 'Page 1'},
          {src: '/public/assets/decouvre/beefred.jpg', title: 'imag2', alt: 'Page 2'},
          {src: '/public/assets/decouvre/Saucisse.jpg', title: 'imag3', alt: 'Page 3'},
          {src: '/public/assets/decouvre/saus.jpg', title: 'imag4', alt: 'Page 4'},
          {src: '/public/assets/decouvre/card1.jpg', title: 'imag5', alt: 'Page 5'},
          {
            src: '/public/assets/decouvre/card3.jpg', title: 'Delícias variadas',
            alt: 'Page 6'
          },
          // Adicione mais imagens conforme necessário
        ]} />
      </div>


    </div>
  )
}

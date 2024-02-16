import {Stack} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface MainFeaturedPostProps {
  Img: string;
  imageText: string;
  text: string;

}

export default function MainFeature({Img, imageText, text}: MainFeaturedPostProps) {


  return (

    <Box
      sx={{
        position: 'relative',
        width: "100%",
        //backgroundColor: 'grey.800',
        color: '#fff',
        height: 400,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${Img})`,
        // Adicione a transparência aqui
        opacity: 1.1,
        // Adicione o filtro de desfoque aqui
        filter: 'blur(5px)',

      }}
    >
      {<img style={{display: 'none', filter: 'auto', }} src={Img}
        alt={imageText} loading='lazy' />}
    </Box>

  );
}
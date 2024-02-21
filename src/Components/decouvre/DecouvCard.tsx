import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {Box, Button, CardMedia, Stack, Typography, useMediaQuery, useTheme} from '@mui/material';
import Slider from 'react-slick';

import Root from '../../layout/Root';
import CardDecouvProps from '../../props/DecService/CardDecouvProps';

export default function DecouvCard1() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const cardDecouv = CardDecouvProps();


  return (
    <div>
      <Stack sx={{
        height: '100%',
        imageRendering: "optimizeQuality",
        pb: 4,
        textAlign: "center",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url("/public/assets/decouvre/carv.jpg")',

      }}>
        <Root>
          <Box sx={{px: 2}}>
            <Typography
              sx={{
                pt: 10, pb: 8, px: 1,
                fontSize: {xs: 16, sm: 22, md: 44},
                fontWeight: '800',
                fontFamily: "Oswald, sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.30em',
                color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.2)',

              }}>
            DÉCOUVREZ NOTRE GAMME DE PRODUITS
          </Typography>
            <Slider {...settings} >

              {cardDecouv.map((slide, index) => (
                <Stack key={index} sx={{p: 2, }}>

                  <CardMedia component="img" sx={{
                    width: '100%',
                    height: '60%',
                    '&:hover': {
                      cursor: 'auto',
                      backgroundImage: 'rgba(250, 0, 0, 0.8)',
                      opacity: 0.9,
                      //  transform: 'scale(1.0)',
                    },
                    transition: 'transform 0.3s ease',
                    opacity: "100%"
                  }}

                    image={slide.src} alt={`Image ${index + 1}`}
                  />
                <Button

                  sx={{
                      mt: {xs: -40, sm: -40, md: -60},
                    textDecoration: 'none',
                    background: 'transparent',
                    border: '2px solid #e1e1e1',
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: {xs: '12px', sm: '16px', md: '22px'},
                    letterSpacing: '0.4em',
                    textIndent: '2px', color: '#fff',
                      fontWeight: "900",
                    textTransform: 'uppercase',
                    transition: 'color 0.1s linear 0.05s',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',

                    '&:hover': {
                      transition: 'color 0.1s linear 0s',
                      backgroundColor: 'rgba(10, 50, 50, 0.8)',


                      '&:before': {
                        top: 0,
                        height: '100%',
                        opacity: 1,
                        transition: 'height 0.2s ease, top 0.2s ease, opacity 0s linear 0s',
                      },
                      '&:after': {
                        borderColor: '#373737',
                        transition: 'border 0.1s linear 0s',
                      },
                    },
                  }}
                >
                  Voir plus
                </Button>
                  <Typography
                    sx={{
                      px: 2, mt: -2,
                      position: "sticky", color: '#fff',
                      fontSize: {xs: '12px', sm: '16px', md: '20px'},
                      backgroundColor: 'rgba(9, 0, 0, 0.8)',
                      fontWeight: '900',
                      '&:hover': {
                        transition: 'color 0.1s linear 0s',
                        backgroundColor: 'rgba(10, 50, 50, 0.8)',
                      },
                      width: "100%",
                      py: 1
                    }}>
                    {slide.title}
                  </Typography>
                </Stack>
            ))}
            </Slider>
          </Box>
        </Root>
      </Stack>
    </div >
  )
}

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {Button, CardMedia, Grid, Stack, Typography, useMediaQuery, useTheme} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
}

const slides: Slide[] = [
  {
    title: "Portrait d'animal oiseau coq",
    description: 'Cuisinez vos plats à partir de produits naturels',
    imageUrl: '/public/assets/decouvre/slider2.png',
  },
  {
    title: "Meilleur que l'original.",
    description: 'Nuggets de qualité pour un moment de convivialité !',
    imageUrl: '/public/assets/decouvre/slidem1.jpg',
  },
  {
    title: "LE GOÛT DE VIANDE CARACTÈRE",
    description: "Découvrez notre gamme de produits à base de viandes bovines. Steak façon bouchère, 100 % Pur boeuf, Burger, Burger à L'Oignons...",
    imageUrl: '/public/assets/decouvre/boi.jpg',
  },
  {
    title: "Viandes bovines",
    description: 'Découvrez notre gamme de produits à base de viandes bovines.',
    imageUrl: '/public/assets/decouvre/slidem2.jpg',
  },
  {
    title: 'DU FRAIS DANS VOS ASSIETTES',
    description: 'Cuisinez vos plats à partir de produits frais de qualité supérieure,Filets de poulet, pilons de poulet, cuisses de poulet.',
    imageUrl: '/public/assets/decouvre/bnner3.webp',
  },
];




const Carousel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const Slideshow = styled.div`
   .btn {
          display: inline-block;
         
          color: #fff;
          text-decoration: none;
          position: relative;
          background: transparent;
          border: 1px solid #e1e1e1;
          
          text-align: center;
          text-indent: 2px;
          

          &::before {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: #e1e1e4;
            z-index: 1;
            opacity: 0;
            transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0.2s;
          }

          &::after {
            transition: border 0.1s linear 0.05s;
          }

          .text {
            position: relative;
            z-index: 2;
          }

          &:hover {
            color: #373737;
            transition: color 0.1s linear 0s;

            &::before {
              top: 0;
              height: 100%;
              opacity: 1;
              transition: height 0.2s ease, top 0.2s ease, opacity 0s linear 0s;
            }

            &::after {
              border-color: #373737;
              transition: border 0.1s linear 0s;
            }
          }
  
  ` ;

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: isMobile ? 1 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: 'sticky',
            width: '100%',
            height: '60vh',
            overflow: 'hidden',
            backgroundPosition: 'center',
            zIndex: 1,


          }}
        >
          <Slideshow className='Slideshow'>
            <CardMedia
              component="img"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                backgroundSize: 'cover', imageRendering: 'optimizeQuality',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              image={slide.imageUrl}
              alt={`Image ${index + 1
                }`}
            />
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.5)',
                textAlign: 'center',

              }}
            >
              <Grid item xs={12} sx={{mx: 2, color: '#fff', }}>
                <Typography sx={{
                  // fontFamily: "'Oswald', sans-serif",
                  textTransform: 'uppercase', mb: 1,
                  font: "'Oswald', sans- serif",
                  letterSpacing: '0.28em', fontSize: {
                    xs: 20, sm: 32, md: 42,
                  }, fontWeight: '900', mx: {xs: 0, sm: 0, md: 30},

                }}>
                  {slide.title}
                </Typography>

                <Typography sx={{
                  fontWeight: '800',
                  mb: 3,
                  fontSize: {
                    xs: 18, sm: 18, md: 20,
                  }, mx: {xs: 0, sm: 0, md: 40}, lineHeight: 1.4,
                }}>{slide.description}</Typography>
                <Button className='btn' sx={{
                  textTransform: 'uppercase',
                  transition: 'color 0.1s linear 0.05s', px: 2, py: 2,

                }} >
                  <Typography className='text' sx={{
                    font: "16px/ 1.2 'Oswald', sans-serif",
                    letterSpacing: ' 0.4em', fontWeight: '800',
                  }}
                  > Learn More</Typography>
                </Button>
              </Grid>
            </Stack>
          </Slideshow>
        </Box>
      ))
      }
    </Slider >
  );
};

export default Carousel;

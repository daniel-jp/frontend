import {Box, Button, Typography} from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import {styled} from '@mui/system';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import Root from '../../layout/Root';

// Adicionando os estilos para o Swiper
const StyledSwiper = styled(Swiper)({
  width: '100%',
  height: '100%',
});

// Adicionando os estilos para o SwiperSlide
const StyledSwiperSlide = styled(SwiperSlide)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  margin: 4,
});

// Adicionando os estilos para a imagem no SwiperSlide
const StyledImage = styled('img')({
  display: 'block',
  width: '100%',
  height: '60%',
  opacity: 1,
});


interface DecouvCardProps {
  images: {src: string; title: string; alt: string}[];
}

const DecouvCard: React.FC<DecouvCardProps> = ({images}) => {
  return (
    <div>
      <Box sx={{
        height: '100%',
        imageRendering: "optimizeQuality",
        background: '#000',
        pb: 8,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url("/public/assets/decouvre/carv.jpg")',
        textAlign: "center"
      }}>

        <Root>
          <Typography
            sx={{
              pt: 10, pb: 8,
              fontSize: {xs: 16, sm: 18, md: 22, lg: 32},
              fontWeight: '800',
              fontFamily: "Oswald, sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '0.30em',
              color: '#fff'
            }}>
            DÉCOUVREZ NOTRE GAMME DE PRODUITS
          </Typography>
          <StyledSwiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper">
            {images.map((image, index) => (
              <StyledSwiperSlide key={index}>

                <StyledImage src={image.src} alt={image.alt} />

                <Typography
                  sx={{
                    textAlign: 'center',
                    position: 'absolute', color: '#fff',
                    top: {xs: 90, sm: 100, md: 100, lg: 170},
                    fontSize: {xs: '12px', sm: '16px', md: '22px'},
                    fontWeight: '900'
                  }}>
                  {image.title}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    textDecoration: 'none',
                    background: 'transparent',
                    border: '2px solid #e1e1e1',
                    font: "12px/1.2 'Oswald', sans-serif",
                    letterSpacing: '0.4em',
                    textIndent: '2px', color: '#fff',
                    fontWeight: "800",
                    textTransform: 'uppercase',
                    transition: 'color 0.1s linear 0.05s',
                    '&::after': {
                      transition: 'border 0.1s linear 0.05s',
                    },
                    '&:hover': {
                      transition: 'color 0.1s linear 0s',

                      '&::before': {
                        top: 0,
                        height: '100%',
                        opacity: 1,
                        transition: 'height 0.2s ease, top 0.2s ease, opacity 0s linear 0s',
                      },
                      '&::after': {
                        borderColor: '#373737',
                        transition: 'border 0.1s linear 0s',
                      },
                    },
                  }}
                >
                  Voir plus
                </Button>
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </Root>
      </Box>
    </div >
  );
};

export default DecouvCard;

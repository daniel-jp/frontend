import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { CardMedia, Stack, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image: '/dist/assets/homeImg/carousel/im3.png',
  },
  {
    image: '/dist/assets/homeImg/carousel/im5.png',
  },
  {
    image: '/dist/assets/homeImg/carousel/im6.png',

  },
  {
    image: '/dist/assets/homeImg/carousel/Imagem8.png',

  },

  {
    image: '/dist/assets/homeImg/carousel/Imagem9.png',
  },
  {
    image: '/dist/assets/homeImg/carousel/car5.png',

  },
  {
    image: '/dist/assets/homeImg/carousel/car2.png',
  },
  {
    image: '/dist/assets/homeImg/carousel/car3.png',
  },
  {
    image: '/dist/assets/homeImg/carousel/car4.png',
  },
  {
    image: '/dist/assets/homeImg/carousel/Imagem19.png',
  },

];

const Carousel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: isMobile ? 1 : 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };



  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Stack key={index}
          sx={{
            p: 2,
          }}>
          <CardMedia component="img" sx={{
            '&:hover': {
              transform: 'scale(1.4)',
            },
            transition: 'transform 0.3s ease',
            opacity: "100%"
          }}
            height="200px"
            image={slide.image} alt={`Image ${index + 1}`} />
        </Stack>
      ))}
    </Slider>
  );
};

export default Carousel;

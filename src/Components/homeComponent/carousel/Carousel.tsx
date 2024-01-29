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
    image: '/public/assets/homeImg/carousel/im3.png',
  },
  {
    image: '/public/assets/homeImg/carousel/im5.png',
  },
  {
    image: '/public/assets/homeImg/carousel/im6.png',

  },
  {
    image: '/public/assets/homeImg/carousel/Imagem8.png',

  },

  {
    image: '/public/assets/homeImg/carousel/Imagem9.png',
  },
  {
    image: '/public/assets/homeImg/carousel/car5.png',

  },
  {
    image: '/public/assets/homeImg/carousel/car2.png',
  },
  {
    image: '/public/assets/homeImg/carousel/car3.png',
  },
  {
    image: '/public/assets/homeImg/carousel/car4.png',
  },
  {
    image: '/public/assets/homeImg/carousel/Imagem19.png',
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
          <CardMedia component="img"
            height="200px"
            image={slide.image} alt={`Image ${index + 1}`} />
        </Stack>
      ))}
    </Slider>
  );
};

export default Carousel;

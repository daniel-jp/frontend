import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Box, Grid, Stack, useMediaQuery, useTheme} from '@mui/material';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
}

const slides: Slide[] = [
  {
    title: "Portrait d'animal oiseau coq",
    description: 'Cuisinez vos plats à partir de produits naturelle',
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
  const [currentSlide, setCurrentSlide] = useState(0);


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



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };


  const Slideshow = styled.div`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 60vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .slides {
      position: absolute;
      top: 0;
      left: 0; 
      width: 100%;
      height: 100%;
      z-index: 1;

      .slide {
        display: none;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s ease;
       
        &.is-active {
          display: block;
        }

        &.is-loaded {
          opacity: 1;
        }

        .image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-position: center;
          z-index: 1;
          background-size: cover;
          image-rendering: optimizeQuality;

          &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
          }
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-content {
          position: absolute;
          top: 50%;
          left: 50%;
          color: #fff;
          transform: translate(-50%, -50%);
          text-align: center;
         
        }

        .title {
          margin-bottom: 12px;
          max-width: 1000px;
          font: 800 30px/1.8 'Oswald',sans-serif;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .text {
          margin-bottom: 12px;
          max-width: 1000px;
          font-size: 18px;
          line-height: 1.4;
        }

        .btn {
          display: inline-block;
          padding: 13px 20px;
          color: #fff;
          text-decoration: none;
          position: relative;
          background: transparent;
          border: 1px solid #e1e1e1;
          font: 12px/1.2 'Oswald', sans-serif;
          letter-spacing: 0.4em;
          text-align: center;
          text-indent: 2px;
          text-transform: uppercase;
          transition: color 0.1s linear 0.05s;

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

          .btn-inner {
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
        }
      }
    }
    .arrow-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #fff;
      font-size: 30px;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
      border-radius: 50%;
      z-index: 2;

      &.left {
        left: 10px;
      }

      &.right {
        right: 10px;
      }
    }
  `;




  return (
    <Slideshow {...settings} className="slideshow">
      <div className="slides">
        <ArrowBackIosIcon className="arrow-icon left" onClick={handlePrevSlide} />
        {slides.map((slide, index) => (
          <Box
            key={index}
            className={`slide ${currentSlide === index ? 'is-active' : ''}`}
            style={{
              display: currentSlide === index ? 'block' : 'none',
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            <Stack className="image-container" sx={{fontWeight: 800}}>
              <img src={slide.imageUrl} alt="banner" className="image" />
              <Grid className="slide-content"  >
                <div className="title">{slide.title}</div>
                <div className="text">{slide.description}</div>
                <button className="btn">
                  <span className="btn-inner">Learn More</span>
                </button>
              </Grid>
            </Stack>
          </Box>
        ))}
        <ArrowForwardIosIcon className="arrow-icon right" onClick={handleNextSlide} />
      </div>
    </Slideshow>
  );
};
export default Carousel

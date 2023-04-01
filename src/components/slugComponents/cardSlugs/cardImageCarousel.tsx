import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { Box } from '@mui/material';

interface CardImageCarouselProps {
  images: string[];
  alt: string;
}

const CardImageCarousel = ({ images, alt }: CardImageCarouselProps) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image: string, index: number) => (
        <Box key={index}>
          <Image 
            src={image} 
            alt={alt} 
            width={450}
            height={300}
          />
        </Box>
      ))}
    </Slider>
  );
};

export default CardImageCarousel;

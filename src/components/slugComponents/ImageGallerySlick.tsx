import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, Card } from "@mui/material";
import { urlFor } from "../../../sanity";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ImageCarouselProps {
  images: string[];
  mainImage: string;
  alt: string;
}

const ImageCarousel = ({ images, alt, mainImage }: ImageCarouselProps) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mainImageUrl = urlFor(mainImage).auto("format").url();

  const mainCard = {

  };

  const mainBox = {
    width: "100%",
    margin: "0 auto",
    position: "relative",
    mb: '3rem',
    mt: '3rem',
  };

  return (
    <Card sx={mainCard}>
      <Box sx={mainBox}>
        <Slider {...settings}>
          <Box key="main">
            <Image
              src={mainImageUrl}
              alt={alt}
              width={1920}
              height={1080}
            />
          </Box>
          {images.map((image, index) => {
            const imageUrl = urlFor(image).auto("format").url();
            return (
              <Box key={index}>
                <Image
                  src={imageUrl}
                  alt={alt}
                  width={1920}
                  height={1080}
                />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Card>
  );
};

export default ImageCarousel;

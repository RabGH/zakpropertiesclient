import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, Card } from "@mui/material";
import { urlFor } from "../../../sanity";

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

  const cardGalleryStyle = {
    maxWidth: '1110px',
    maxHeight: '1000px',
    padding: '3rem',
    borderRadius: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  };

  const mainBox = {

  };

  return (
    <Card sx={cardGalleryStyle}>
      <Box sx={mainBox}>
        <Slider {...settings}>
          <Box key="main">
            <Image
              src={mainImageUrl}
              alt={alt}
              width={1024}
              height={720}
            />
          </Box>
          {images.map((image, index) => {
            const imageUrl = urlFor(image).auto("format").url();
            return (
              <Box key={index}>
                <Image
                  src={imageUrl}
                  alt={alt}
                  width={1024}
                  height={720}
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

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, ButtonBase } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface CardImageCarouselProps {
  images: string[];
  alt: string;
}

const CardImageCarousel = ({ images, alt }: CardImageCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (index: number) => {
      return (
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: index === currentSlide ? 1 : 0.5,
          }}
        />
      );
    },
    appendDots: (dots: string) => {
      return (
        <Box
          sx={{
            position: "absolute",
            top: '90%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {dots}
        </Box>
      );
    },
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
  };

  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image: string, index: number) => (
          <Box key={index}>
            <Image src={image} alt={alt} width={450} height={300} />
          </Box>
        ))}
      </Slider>
      <ButtonBase
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
          color: 'white',
        }}
        onClick={handlePrev}
      >
        <ChevronLeft fontSize="large" />
      </ButtonBase>
      <ButtonBase
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
          color: 'white',
        }}
        onClick={handleNext}
      >
        <ChevronRight fontSize="large" />
      </ButtonBase>
    </Box>
  );
};

export default CardImageCarousel;
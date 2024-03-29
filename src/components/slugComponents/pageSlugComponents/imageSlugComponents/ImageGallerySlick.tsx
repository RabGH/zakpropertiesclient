import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, useTheme, ButtonBase } from "@mui/material";
import { urlFor } from "@lib/sanity";
import { getImageCarouselStyles } from "./imageCarouselStyles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface ImageCarouselProps {
  images: string[];
  mainImage: string;
  alt: string;
}
// add link to open the image user presses and opens in view all photos
const ImageCarousel = ({ images = [], alt, mainImage }: ImageCarouselProps) => {
  const muiTheme = useTheme();
  const style = getImageCarouselStyles();
  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: images.length > 3 ? 3 : images.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rows: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  let mainImageUrl;
  try {
    mainImageUrl = urlFor(mainImage).auto("format").url();
  } catch (error) {
    mainImageUrl =
      "/zakpropertiesclient/public/images/static_images/WaitHouseIcon.png";
  }

  return (
    <Box sx={style.mainBox}>
      <Slider {...settings} ref={sliderRef}>
        <Box key="main" sx={style.imageBox}>
          {images != null && (
            <Image
              src={mainImageUrl}
              alt={alt}
              width={1920}
              height={1080}
              style={style.imageStyles}
              objectFit="contain"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,..."
            />
          )}
        </Box>
        {images &&
          images
            .filter((image) => image != null)
            .map((image, index) => {
              const imageUrl = urlFor(image).auto("format").url().toString();
              return (
                <Box key={index} sx={style.imageBox}>
                  {image != null && (
                    <Image
                      src={imageUrl}
                      alt={alt}
                      width={1920}
                      height={1080}
                      style={style.imageStyles}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,..."
                    />
                  )}
                </Box>
              );
            })}
      </Slider>
      <Box>
        <ButtonBase
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
            color: "white",
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
            color: "white",
          }}
          onClick={handleNext}
        >
          <ChevronRight fontSize="large" />
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default ImageCarousel;

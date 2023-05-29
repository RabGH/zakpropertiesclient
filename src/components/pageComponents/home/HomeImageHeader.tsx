import React, { useEffect, RefObject, useState, useRef } from "react";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { urlFor } from "@lib/sanity";
import { Project } from "@lib/types";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HomeImageHeaderProps {
  projects: Project[];
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function HomeImageHeader({ projects }: HomeImageHeaderProps) {
  const muiTheme = useTheme();

  const zakLearnMore = {
    textAlign: "left",
  };

  const zakTitle = {
    fontSize: "5rem",
    fontWeight: "bold",
    mb: "4rem",
    color: "white",
    textAlign: "left",
    transition: "color 0.3s ease-in-out",
    ":hover": {
      color: muiTheme.palette.error.light,
    },
  };

  const zakSubTitle = {
    fontSize: "1.3rem",
    fontWeight: "400",
    mb: "5rem",
    color: "white",
    textAlign: "left",
  };

  const imgContainer = {
    position: "relative",
    height: "110vh",
    width: "100%",
    zIndex: 1,
  };

  const imgOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "111vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const contentContainer = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    textAlign: "center",
    color: "white",
    maxWidth: "1300px",
    margin: "0 auto",
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    setCurrentSlide(0);
  }, [projects]);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current?.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current?.slickNext();
    }
  };

  return (
    <>
      {projects.length > 0 && (
        <Box sx={{ position: "relative" }}>
          <Box
            onClick={goToPrevSlide}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translate(-50%, -50%)",
              zIndex: "2",
              ml: "3rem",
            }}
          >
            <ChevronLeft />
          </Box>
          <Box
            onClick={goToNextSlide}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translate(50%, -50%)",
              zIndex: "2",
              mr: "3rem",
            }}
          >
            <ChevronRight />
          </Box>
          <Box>
            <Slider
              {...sliderSettings}
              ref={sliderRef}
              beforeChange={(_, next) => setCurrentSlide(next)}
            >
              {projects.map((project, index) => (
                <Box key={project._id}>
                  <Box sx={imgContainer} data-slide-index={index}>
                    <Image
                      src={urlFor(project.mainProjectImage)
                        .auto("format")
                        .url()}
                      width={1920}
                      height={1080}
                      alt={project.title}
                    />
                    <Box sx={imgOverlay} />
                    <Box sx={contentContainer}>
                      <Typography variant="body1" sx={zakLearnMore}>
                        Learn More
                      </Typography>
                      <Link
                        key={project._id}
                        href={`projects/${project.slug.current}`}
                      >
                        <Typography variant="h1" sx={zakTitle}>
                          {project.title}
                        </Typography>
                      </Link>
                      <Typography variant="h1" sx={zakSubTitle}>
                        {project.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      )}
    </>
  );
}

export default HomeImageHeader;

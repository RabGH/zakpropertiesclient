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
import { getHomePageStyles } from "./homePageStyles";

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
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
  ],
};

function HomeImageHeader({ projects }: HomeImageHeaderProps) {
  const styles = getHomePageStyles();

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
        <Box sx={styles.mainBox}>
          <Box onClick={goToPrevSlide} sx={styles.chevLeftBox}>
            <ChevronLeft />
          </Box>
          <Box onClick={goToNextSlide} sx={styles.chevRightBox}>
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
                  <Box sx={styles.imgContainer} data-slide-index={index}>
                    <Image
                      src={urlFor(project.mainProjectImage)
                        .auto("format")
                        .url()
                        .toString()}
                      width={1920}
                      height={1080}
                      alt={project.title}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,..."
                    />
                    <Box sx={styles.imgOverlay} />
                    <Box sx={styles.contentContainer}>
                      <Typography variant="body1" sx={styles.zakLearnMore}>
                        Learn More
                      </Typography>
                      <Link
                        key={project._id}
                        href={`projects/${project.slug.current}`}
                      >
                        <Typography variant="h1" sx={styles.zakTitle}>
                          {project.title}
                        </Typography>
                      </Link>
                      <Typography variant="h1" sx={styles.zakSubTitle}>
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

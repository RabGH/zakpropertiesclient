import React, { useEffect, RefObject } from "react";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { urlFor } from "../../../../sanity";
import { Project } from "../../../../types";
import Image from "next/image";
import Link from "next/link";

import { useKeenSlider, KeenSliderOptions } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface HomeImageHeaderProps {
  projects: Project[];
}

const useCurrentSlide = (sliderRef: RefObject<any>, projects: Project[]) => {
  const currentSlideRef = React.useRef(0);
  const [currentProject, setCurrentProject] = React.useState(projects[0]);

  React.useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const currentSlideIndex = slider.details().relativeSlide;
      if (currentSlideIndex !== currentSlideRef.current) {
        currentSlideRef.current = currentSlideIndex;
        setCurrentProject(projects[currentSlideIndex]);
      }
    }
  }, [sliderRef, projects]);

  return currentProject;
};

function HomeImageHeader({ projects }: HomeImageHeaderProps) {

  const muiTheme = useTheme();

  const zakTitle = {
    fontSize: "5rem",
    fontWeight: "",
    mb: "4rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    textAlign: "center",
  };

  const imgContainer = {
    height: "100vh",
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      zIndex: 1,
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    },
  };

  const logoContainer = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  };

  const options: KeenSliderOptions<{}, boolean, string> = {
    rubberband: true,
    renderMode: "precision",
    loop: true,
    drag: true,
    mode: "free-snap",
  };

  const [sliderRef, slider] = useKeenSlider(options);

  useEffect(() => {
    if (slider && slider.current) {
    }
  }, [slider]);

  return (
    <>
      {projects.length > 0 && (
        <Box ref={sliderRef} className="keen-slider">
          {projects.map((project, index) => (
            <Box key={index} className="keen-slider__slide" sx={imgContainer}>
              <Image
                src={urlFor(project.mainProjectImage).auto("format").url()}
                width={1920}
                height={1080}
                alt={project.title}
              />
              <Box sx={logoContainer}>
              <Typography variant="body1">
                  Click to view
                </Typography>
                <Link key={project._id} href={`projects/${project.slug.current}`}>
                  <Typography variant="h1" sx={zakTitle}>
                    {project.title}
                  </Typography>
                </Link>
                <Typography variant="h1" sx={zakSubTitle}>
                  {project.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}

export default HomeImageHeader;

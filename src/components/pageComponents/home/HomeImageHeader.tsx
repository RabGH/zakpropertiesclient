import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { urlFor } from "../../../../sanity";
import { Project } from "../../../../types";
import Image from "next/image";

import KeenSlider from "keen-slider";
import {
  useKeenSlider,
  KeenSliderOptions,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface HomeImageHeaderProps {
  projects: Project[];
}


const useCurrentSlide = (sliderRef, projects) => {
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
  const zakTitle = {
    fontSize: "5rem",
    fontWeight: "",
    mb: "6rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const zakSubTitle = {
    fontSize: "",
    fontWeight: "",
    mb: "5rem",
    justifyContent: "center",
    color: "white",
  };

  const imgContainer = {
    height: "100vh",
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      zIndex: 1,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
      backdropFilter: "blur(0.5px)",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
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
  renderMode: 'precision',
  loop: true,
  drag: true,
  slidesPerView: 1,
  mode: "free-snap",
  spacing: 15,
  duration: 1000,
};

const [sliderRef, slider] = useKeenSlider(options);

const currentProject = useCurrentSlide(sliderRef, projects);

useEffect(() => {
  if (slider && slider.current) {
    console.log("Slider is ready!");
    console.log("Current slide: ", slider.current);
    console.log("Slider instance: ", slider);
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
                <Typography variant="h1" sx={zakTitle}>
                  {project.title}
                </Typography>
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

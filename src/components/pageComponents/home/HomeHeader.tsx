import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import LogoImage from "../../../../public/images/logo/logoNoBg.png";
import MainJouri from "../../../../public/images/project_images/project2/jouri-hills-1.jpg";
import { Property, Project } from "../../../../types";
import SearchBar from "./mainSearchBar";

interface HomeHeaderProps {
  properties: Property[];
  projects: Project[];
}

function HomeHeader({ properties, projects }: HomeHeaderProps) {
  const mainContainer = {
    height: "65vh",
    position: "relative",
  };

  const imgContainer = {
    position: "absolute",
    top: "-65px",
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    zIndex: -1,
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      right: 0,
      bottom: "-10px",
      height: "60px",
      zIndex: 1,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)",
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
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    filter: "invert(1)",
  };

  const searchBarContainer = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const searchBarBox = {
    maxWidth: 750,
    width: "100%",
    mt: "20rem",
  };

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={imgContainer}>
        <Image src={MainJouri} alt="" style={{ objectFit: "cover" }} />
      </Box>
      <Box sx={logoContainer}>
        <Image src={LogoImage} alt="" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={searchBarContainer}>
          <Box sx={searchBarBox}>
            <SearchBar
              properties={properties}
              projects={projects}
              handleToggle={handleToggle}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeHeader;

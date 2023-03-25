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
    height: "100vh",
    position: "relative",
  };

  const imgContainer = {
    position: "absolute",
    top: "-65px",
    left: 0,
    right: 0,
    bottom: "40%",
    overflow: "hidden",
  };

  const searchBarContainer = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const searchBarBox = {
    maxWidth: 600,
    width: "100%",
  };

  const [open, setOpen] = useState(false); // Add state for handling toggle

  const handleToggle = () => {
    setOpen(!open);
  }; // Define handleToggle function

  return (
    <Box sx={mainContainer}>
      <Box sx={imgContainer}>
        <Image src={MainJouri} alt="" style={{ objectFit: "cover" }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={searchBarContainer}>
          <Box sx={searchBarBox}>
            {/* Pass handleToggle to SearchBar */}
            <SearchBar
              properties={properties}
              projects={projects}
              handleToggle={handleToggle}
            />
          </Box>
        </Box>
        {/* Add the rest of your content here */}
      </Box>
    </Box>
  );
}

export default HomeHeader;

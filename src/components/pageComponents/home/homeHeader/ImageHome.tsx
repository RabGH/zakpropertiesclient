import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import LogoImage from "../../../../../public/images/logo/logoNoBg.png";
import MainJouri from "../../../../../public/images/project_images/project2/jouri-hills-1.jpg";

function HomeImage() {
  const muiTheme = useTheme();

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

  const searchBar = {
    maxWidth: 600,
    width: "100%",
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={imgContainer}>
        <Image src={MainJouri} alt="" style={{ objectFit: "cover" }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={searchBarContainer}>
          <Box sx={searchBar}>{/* Add your search bar component here */}</Box>
        </Box>
        {/* Add the rest of your content here */}
      </Box>
    </Box>
  );
}

export default HomeImage;

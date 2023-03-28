import React, { useState } from "react";
import { Box } from "@mui/material";
import { Property, Project } from "../../../../types";
import SearchBar from "./mainSearchBar";
import HomeImageHeader from "./HomeImageHeader";

interface HomeHeaderProps {
  properties: Property[];
  projects: Project[];
}

function HomeHeader({ properties, projects }: HomeHeaderProps) {
  const mainContainer = {
    height: "64vh",
    position: "relative",
  };

  const searchBarContainer = {

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
    <>
      <Box sx={mainContainer}>
        <HomeImageHeader projects={projects} />
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
    </>
  );
}

export default HomeHeader;

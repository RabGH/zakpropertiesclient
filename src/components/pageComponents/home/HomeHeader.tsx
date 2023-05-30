import React, { useState } from "react";
import { Box } from "@mui/material";
import { Property, Project } from "@lib/types";
import SearchBar from "./mainSearchBar";
import HomeImageHeader from "./HomeImageHeader";
import { getHomePageStyles } from "./homePageStyles";

interface HomeHeaderProps {
  properties: Property[];
  projects: Project[];
}

function HomeHeader({ properties, projects }: HomeHeaderProps) {
  const styles = getHomePageStyles();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box sx={styles.mainContainer}>
        <HomeImageHeader projects={projects} />
        <Box sx={styles.homeComponentMainBox}>
          <Box sx={styles.searchBarContainer}>
            <Box sx={styles.searchBarBox}>
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

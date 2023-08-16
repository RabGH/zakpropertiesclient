import React, { useState } from "react";
import { Autocomplete, TextField, Box, useTheme, Button } from "@mui/material";
import { Property, Project } from "@lib/types";
import { useRouter } from "next/router";
import Link from "next/link";
import { getSearchbarStyles } from "./searchbarStyles";

interface SearchBarProps {
  properties: Property[];
  projects: Project[];
  handleToggle: (value: string, selectedType: string) => void;
  currentSlide: number;
}

function SearchBar(props: SearchBarProps) {
  const router = useRouter();
  const { properties, projects, handleToggle, currentSlide } = props;
  const [selectedType, setSelectedType] = useState("All");

  const handleTypeChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string | null = "All"
  ) => {
    setSelectedType(value || "All");
  };

  const handleSearch = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    if (selectedType === "Properties") {
      const property = properties.find((property) => property.title === value);
      if (property) {
        router.push(`/property/${property.slug.current}`);
      }
    } else if (selectedType === "Projects") {
      const project = projects.find((project) => project.title === value);
      if (project) {
        router.push(`/project/${project.slug.current}`);
      }
    } else {
      const property = properties.find((property) => property.title === value);
      const project = projects.find((project) => project.title === value);
      if (property) {
        router.push(`/property/${property.slug.current}`);
      } else if (project) {
        router.push(`/project/${project.slug.current}`);
      }
    }
  };

  const propertyOptions = properties.map((property) => property.title);
  const projectOptions = projects.map((project) => project.title);
  const options = ["All", "Properties", "Projects"];

  const handleProjectsClick = () => {
    setSelectedType("Projects");
  };

  const handlePropertiesClick = () => {
    setSelectedType("Properties");
  };

  const muiTheme = useTheme();
  const styles = getSearchbarStyles();

  const searchBarWrapper = {
    position: "absolute",
    top: currentSlide === 0 ? "100%" : "100%",
    left: "0",
    right: "0",
    zIndex: "9999",
    flex: 1,
    // [muiTheme.breakpoints.down("xl")]: {
    //   top: currentSlide === 0 ? "100%" : "127%",
    // },
    // [muiTheme.breakpoints.down("lg")]: {
    //   top: currentSlide === 0 ? "105%" : "123%",
    // },
    // [muiTheme.breakpoints.down("md")]: {
    //   top: currentSlide === 0 ? "100%" : "100%",
    // },
    // [muiTheme.breakpoints.down("sm")]: {
    //   top: currentSlide === 0 ? "100%" : "115%",
    // },
    // [muiTheme.breakpoints.down("smallphones")]: {
    //   top: currentSlide === 0 ? "100%" : "115%",
    // },
    // [muiTheme.breakpoints.down("xs")]: {
    //   top: currentSlide === 0 ? "90%" : "110%",
    // },
  };

  return (
    <Box sx={searchBarWrapper}>
      <Box sx={styles.mainBox}>
        <Box sx={styles.mainButtonContainer}>
          <Link href="/buyProperties" passHref>
            <Button
              onClick={handlePropertiesClick}
              sx={styles.propertiesButtonStyles}
              variant="contained"
            >
              Buy Properties
            </Button>
          </Link>
          <Link href="/viewProjects" passHref>
            <Button
              onClick={handleProjectsClick}
              sx={styles.projectButtonStyles}
              variant="contained"
            >
              View Projects
            </Button>
          </Link>
        </Box>
        <Box sx={styles.mainSearchContainer}>
          <Autocomplete
            disablePortal
            options={
              selectedType === "All"
                ? [...propertyOptions, ...projectOptions]
                : selectedType === "Properties"
                ? propertyOptions
                : projectOptions
            }
            sx={styles.autoSearchStyles}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                variant="outlined"
                sx={styles.autoTextField}
              />
            )}
            onInputChange={handleSearch}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SearchBar;

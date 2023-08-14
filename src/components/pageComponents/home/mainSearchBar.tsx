import React, { useState } from "react";
import { Autocomplete, TextField, Box, useTheme, Button } from "@mui/material";
import { Property, Project } from "@lib/types";
import { useRouter } from "next/router";
import Link from "next/link";

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

  const autoSearchStyles = {
    width: "600px",
    flexGrow: 1,
    "& .MuiInputBase-input": {
      color: "black",
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(30, 59, 114, 1)",
      borderWidth: "0px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
    },
    zIndex: 5,

    "@media (max-width: 1024px)": {
      width: "470px",
    },
    "@media (max-width: 600px)": {
      width: "370px",
    },
    "@media (max-width: 400px)": {
      width: "300px",
    },
    "@media (max-width: 375px)": {
      width: "300px",
    },
    "@media (max-width: 360px)": {
      width: "300px",
    },
  };

  const searchBarWrapper = {
    position: "absolute",
    top: currentSlide === 0 ? "100%" : "110%",
    left: "0",
    right: "0",
    zIndex: "9999",
    flex: 1,
    "@media (max-width: 1440px)": {
      top: currentSlide === 0 ? "100%" : "127%",
    },
    "@media (max-width: 1280px)": {
      top: currentSlide === 0 ? "110%" : "130%",
    },
    "@media (max-width: 1024px)": {
      top: currentSlide === 0 ? "105%" : "123%",
    },
    "@media (max-width: 961px)": {
      top: currentSlide === 0 ? "100%" : "100%",
    },
    "@media (max-width: 912px)": {
      top: currentSlide === 0 ? "100%" : "100%",
    },
    "@media (max-width: 768px)": {
      top: currentSlide === 0 ? "100%" : "115%",
    },
    "@media (max-width: 600px)": {
      top: currentSlide === 0 ? "100%" : "115%",
    },
    "@media (max-width: 540px)": {
      top: currentSlide === 0 ? "100%" : "145%",
    },
    "@media (max-width: 481px)": {
      top: currentSlide === 0 ? "100%" : "125%",
    },
    "@media (max-width: 400px)": {
      top: currentSlide === 0 ? "100%" : "115%",
    },
    "@media (max-width: 375px)": {
      top: currentSlide === 0 ? "95%" : "125%",
    },
    "@media (max-width: 360px)": {
      top: currentSlide === 0 ? "90%" : "110%",
    },
  };

  const mainBox = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const autoTextField = {};

  const propertiesButtonStyles = {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "white",
    textDecoration: "underline",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "22px",
    margin: "0 0px",
    "&:hover": {
      color: muiTheme.palette.error.light,
      backgroundColor: "transparent",
      boxShadow: "none",
      textDecoration: "none",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.3rem",
    },
    "@media (max-width: 360px)": {
      mb: "0.7rem",
      fontSize: "1.2rem",
    },
  };

  const projectButtonStyles = {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "white",
    textDecoration: "underline",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "22px",
    margin: "0 0px",
    "&:hover": {
      color: muiTheme.palette.error.light,
      backgroundColor: "transparent",
      boxShadow: "none",
      textDecoration: "none",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.3rem",
    },
    "@media (max-width: 360px)": {
      mb: "0.7rem",
      fontSize: "1.2rem",
    },
  };

  const mainSearchContainer = {
    display: "flex",
  };

  const mainButtonContainer = {
    display: "flex",
    flexDirection: "row",
    spaceBetween: "1rem",
    alignItems: "center",
    justifyContent: "center",
    mb: "1rem",
  };

  return (
    <Box sx={searchBarWrapper}>
      <Box sx={mainBox}>
        <Box sx={mainButtonContainer}>
          <Link href="/buyProperties" passHref>
            <Button
              onClick={handlePropertiesClick}
              sx={propertiesButtonStyles}
              variant="contained"
            >
              {/* {getButtonLabel(["Properties"])} */}Buy Properties
            </Button>
          </Link>
          <Link href="/viewProjects" passHref>
            <Button
              onClick={handleProjectsClick}
              sx={projectButtonStyles}
              variant="contained"
            >
              {/* {getButtonLabel(["Projects"])} */}View Projects
            </Button>
          </Link>
        </Box>
        <Box sx={mainSearchContainer}>
          <Autocomplete
            disablePortal
            options={
              selectedType === "All"
                ? [...propertyOptions, ...projectOptions]
                : selectedType === "Properties"
                ? propertyOptions
                : projectOptions
            }
            sx={autoSearchStyles}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                variant="outlined"
                sx={autoTextField}
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

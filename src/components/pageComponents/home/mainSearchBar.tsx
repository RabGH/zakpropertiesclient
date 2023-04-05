import React, { useState } from "react";
import { Autocomplete, TextField, Box, useTheme, Button } from "@mui/material";
import { Property, Project } from "../../../../types";
import { useRouter } from "next/router";
import Link from "next/link";

interface SearchBarProps {
  properties: Property[];
  projects: Project[];
  handleToggle: (value: string, selectedType: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const router = useRouter();
  const { properties, projects, handleToggle } = props;
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

  const getLabel = (type: string) => {
    if (type === "All") {
      return `Total Properties: ${properties.length} | Total Projects: ${projects.length}`;
    } else if (type === "Properties") {
      return `Total Properties: ${properties.length}`;
    } else {
      return `Total Projects: ${projects.length}`;
    }
  };

  const getButtonLabel = (type: string[]) => {
    if (type.includes("All")) {
      return `${properties.length} ${projects.length}`;
    } else if (type.includes("Properties")) {
      return `${properties.length}`;
    } else {
      return `${projects.length}`;
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
      color: "white",
    },
    zIndex: 5,
  };

  const autoSelectStyles = {
    width: "155px",
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
      borderColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    zIndex: 5,
  };

  const searchBarWrapper = {
    position: "absolute",
    top: "120%",
    left: "0",
    right: "0",
    zIndex: "9999",
    flex: 1,
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
  };

  const mainSearchContainer = {
    display: "flex",
  };

  const mainButtonContainer = {
    display: "flex",
    flexDirection: "row",
    spaceBetween: "1rem",
    mb: "2rem",
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
              Properties {getButtonLabel(["Properties"])}
            </Button>
          </Link>
          <Link href="/developments" passHref>
            <Button
              onClick={handleProjectsClick}
              sx={projectButtonStyles}
              variant="contained"
            >
              Developments {getButtonLabel(["Projects"])}
            </Button>
          </Link>
        </Box>
        <Box sx={mainSearchContainer}>
          <Autocomplete
            disablePortal
            options={options}
            value={selectedType}
            onChange={handleTypeChange}
            // inputValue={getLabel(selectedType)}
            sx={autoSelectStyles}
            renderInput={(params) => (
              <TextField {...params} label="Type" variant="outlined" />
            )}
          />
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

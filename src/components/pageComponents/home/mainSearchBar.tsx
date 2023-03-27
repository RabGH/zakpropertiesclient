import React, { useState } from "react";
import { Autocomplete, TextField, Box, useTheme } from "@mui/material";
import { Property, Project } from "../../../../types";
import { useRouter } from "next/router";
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
    event: React.SyntheticEvent<Element, Event>,
    value: string | null = "All"
  ) => {
    setSelectedType(value || "All");
  };

  const handleSearch = (
    event: React.SyntheticEvent<Element, Event>,
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
      // If All is selected, search in both properties and projects
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

  const propertyOptions = properties.map((property) => property.title);
  const projectOptions = projects.map((project) => project.title);
  const options = ["All", "Properties", "Projects"];

  const mainBox = {
    display: "flex",
    alignItems: "center",
    padding: "3px",
    zIndex: 10,
  };

  const autoSearchStyles = {
    width: "600px",
    flexGrow: 1,
    "& .MuiInputBase-input": {
      color: "black",
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    // "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "rgba(30, 59, 114, 0.3)",
    //   borderWidth: "0px",
    // },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: 'white',
    },
  };

  const autoSelectStyles = {
    width: "170px",
    flexGrow: 1,
    "& .MuiInputBase-input": {
      color: "black",
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    // "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "rgba(30, 59, 114, 0.3)",
    //   borderWidth: "0px",
    // },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: 'white',
    },
  };

  const searchBarWrapper = {
    display: "flex",
    flexDirection: "column",
  };

  const autoTextField = {};

  return (
    <Box sx={searchBarWrapper}>
      <Box sx={mainBox}>
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
  );
}

export default SearchBar;

import React, { useState } from "react";
import { Autocomplete, TextField, Box, Button, AutocompleteChangeReason, AutocompleteInputChangeReason } from "@mui/material";
import { Property, Project } from "../../../../types";

interface SearchBarProps {
  properties: Property[];
  projects: Project[];
  handleToggle: (value: string, selectedType: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const { properties, projects, handleToggle } = props;

  const [selectedType, setSelectedType] = useState("All");

  const handleTypeChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null = "All",
    reason: AutocompleteChangeReason
  ) => {
    setSelectedType(value || "All");
  };
  
  

  const handleSearch = (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    handleToggle(value, selectedType);
  };
  
  const propertyOptions = properties.map((property) => property.title);
  const projectOptions = projects.map((project) => project.title);
  const options = ["All", "Properties", "Projects"];

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Autocomplete
        disablePortal
        options={options}
        value={selectedType}
        onChange={handleTypeChange}
        sx={{ width: 150, color: 'black' }}
        renderInput={(params) => <TextField {...params} label="Type" />}
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
        sx={{ flexGrow: 1 }}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onInputChange={handleSearch}
      />
      <Button
        variant="contained"
        onClick={() => handleToggle("", selectedType)}
      >
        Reset
      </Button>
    </Box>
  );
}

export default SearchBar;

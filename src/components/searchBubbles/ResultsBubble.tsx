import React from "react";
import { Button } from "@mui/material";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { filterProperties } from "./searchComponents/filterPropertiesFunction";
import { ResultsBubbleProps } from "./searchComponents/bubbleInterfaces";

const ResultsBubble: React.FC<ResultsBubbleProps> = ({
  search,
  setSearch,
  properties,
  setFilteredProperties,
}) => {
  const styles = getBubbleStyles();

  const results = filterProperties(
    search.propertyType,
    search.priceRange,
    search.propertyOffPlan,
    search.bedrooms,
    search.sizeRange,
    search.propertyFeatures,
    properties
  ).length;

  const handleButtonClick = () => {
    const filteredProperties = filterProperties(
      search.propertyType,
      search.priceRange,
      search.propertyOffPlan,
      search.bedrooms,
      search.sizeRange,
      search.propertyFeatures,
      properties
    );
    setSearch((prev) => ({
      ...prev,
      filteredProperties,
    }));
    setFilteredProperties(filteredProperties);
  };

  return (
    <Button
      onClick={handleButtonClick}
      variant="contained"
      sx={styles.searchResultsButton}
    >
      Results: {results}
    </Button>
  );
};

export default ResultsBubble;

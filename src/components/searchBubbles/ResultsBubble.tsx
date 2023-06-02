import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { filterProperties } from "./searchComponents/filterPropertiesFunction"; // Keep this import
import { ResultsBubbleProps } from "./searchComponents/bubbleInterfaces";

const ResultsBubble: React.FC<ResultsBubbleProps> = ({
  search,
  setSearch,
  properties,
  setFilteredProperties,
}) => {
  const styles = getBubbleStyles();

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const results = filterProperties(
      search.propertyType,
      search.priceRange,
      search.propertyOffPlan,
      search.bedroomRange,
      search.sizeRange,
      search.propertyFeatures,
      properties
    ).length;
    setButtonText(`Results: ${results}`);
    console.log("Search state:", search);
    console.log("Results:", results);
  }, [search]);

  const handleButtonClick = () => {
    const filteredProperties = filterProperties(
      search.propertyType,
      search.priceRange,
      search.propertyOffPlan,
      search.bedroomRange,
      search.sizeRange,
      search.propertyFeatures,
      properties
    );
    setSearch({ ...search, filteredProperties });
    setFilteredProperties(filteredProperties);
  };

  return (
    <Button
      onClick={handleButtonClick}
      variant="contained"
      sx={styles.searchResultsButton}
    >
      {buttonText}
    </Button>
  );
};

export default ResultsBubble;

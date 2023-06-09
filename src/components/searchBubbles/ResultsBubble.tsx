import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { filterProperties } from "./searchComponents/filterPropertiesFunction";
import { ResultsBubbleProps } from "./searchComponents/bubbleInterfaces";

const ResultsBubble: React.FC<ResultsBubbleProps> = ({
  search,
  setSearch,
  properties,
  setFilteredProperties,
  resultsButtonRef,
}) => {
  const styles = getBubbleStyles();

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const results = filterProperties(
      search.propertyFeatures,
      search.propertyType,
      search.propertyOffPlan,
      properties,
      search.priceRange,
      search.bedrooms,
      search.sizeRange
    ).length;
    setButtonText(`Results: ${results}`);
  }, [search]);

  const handleButtonClick = () => {
    const filteredProperties = filterProperties(
      search.propertyFeatures,
      search.propertyType,
      search.propertyOffPlan,
      properties,
      search.priceRange,
      search.bedrooms,
      search.sizeRange
    );
    setSearch({ ...search, filteredProperties });
    setFilteredProperties(filteredProperties);
  };

  resultsButtonRef.current = handleButtonClick;

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
// console.log("Search state:", search);
// console.log("Results:", results);

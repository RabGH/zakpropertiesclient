import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { filterProperties } from "./searchComponents/filterPropertiesFunction"; // Keep this import
import { ResultsBubbleProps } from "./searchComponents/bubbleInterfaces";
import { useRouter } from "next/router";

const ResultsBubble: React.FC<ResultsBubbleProps> = ({
  search,
  properties,
}) => {
  const styles = getBubbleStyles();

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    const results = filterProperties(
      search.propertyType,
      search.priceRange,
      search.propertyOffPlan,
      search.bedrooms,
      search.sizeRange,
      search.propertyFeatures,
      properties
    ).length;
    setButtonText(`Results: ${results}`);
    console.log("Search state:", search);
    console.log("Results:", results);
  }, [search]);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push(
      {
        pathname: "/buyProperties",
        query: {
          ...router.query,
          propertyType: search.propertyType.join(","),
          priceRange: `${search.priceRange[0]}-${search.priceRange[1]}`,
          propertyOffPlan: search.propertyOffPlan,
          bedrooms: search.bedrooms.join(","),
          sizeRange: `${search.sizeRange[0]}-${search.sizeRange[1]}`,
          propertyFeatures: search.propertyFeatures.join(","),
        },
      },
      undefined,
      { shallow: true }
    );
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

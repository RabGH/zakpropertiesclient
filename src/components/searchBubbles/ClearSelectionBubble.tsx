import React, { useContext } from "react";
import { Button, Stack } from "@mui/material";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { ClearSelectionBubbleProps } from "./searchComponents/bubbleInterfaces";
import { PropertiesContext } from "./searchComponents/bubbleInterfaces";

const ClearSelectionBubble = ({ setSearch }: ClearSelectionBubbleProps) => {
  const styles = getBubbleStyles();
  const properties = useContext(PropertiesContext);

  const handleClear = () => {
    setSearch({
      propertyType: [],
      priceRange: [0, 500000000],
      propertyOffPlan: undefined,
      filteredProperties: properties,
      bedrooms: [1, 15],
      propertyFeatures: [],
      readyToBuy: "Any",
      sizeRange: [0, 10000],
      sortBy: "Latest",
    });
  };

  return (
    <Stack sx={styles.generalBubbleStackStyles}>
      <Button
        onClick={handleClear}
        variant="outlined"
        sx={styles.clearSelectionButtonStyles}
      >
        Clear Selection
      </Button>
    </Stack>
  );
};

export default ClearSelectionBubble;

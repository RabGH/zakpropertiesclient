import React from "react";
import { Button, Stack } from "@mui/material";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { ClearSelectionBubbleProps } from "./searchComponents/bubbleInterfaces";

const ClearSelectionBubble = ({ setSearch }: ClearSelectionBubbleProps) => {
  const styles = getBubbleStyles();

  const handleClear = () => {
    setSearch({
      propertyType: [],
      priceRange: [0, 500000000],
      propertyOffPlan: undefined,
      filteredProperties: [],
      bedrooms: [1, 15],
      propertyFeatures: [],
      readyToBuy: "Any",
      sizeRange: [0, 10000],
      sortBy: "Featured",
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

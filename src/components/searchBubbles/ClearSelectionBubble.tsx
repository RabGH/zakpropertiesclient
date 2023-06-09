import React from "react";
import { Button, Stack } from "@mui/material";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { SearchInterface } from "./searchComponents/bubbleInterfaces";
import { ClearSelectionBubbleProps } from "./searchComponents/bubbleInterfaces";

const ClearSelectionBubble = ({
  search,
  setSearch,
}: ClearSelectionBubbleProps) => {
  const styles = getBubbleStyles();

  const defaultSearch: SearchInterface = {
    propertyType: [],
    priceRange: [0, 500000000],
    propertyOffPlan: undefined,
    filteredProperties: [],
    bedrooms: [1, 15],
    propertyFeatures: [],
    readyToBuy: "Any",
    sizeRange: [0, 10000],
  };

  const handleClear = () => {
    setSearch(defaultSearch);
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

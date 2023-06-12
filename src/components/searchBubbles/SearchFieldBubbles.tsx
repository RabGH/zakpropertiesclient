import React from "react";
import { Box, Stack } from "@mui/material";

import PropertyTypeBubble from "./bubbleComponents/TypeBubble";
import BedroomBubble from "./bubbleComponents/BedroomBubble";
import SizeBubble from "./bubbleComponents/SizeBubble";
import PriceRangeBubble from "./bubbleComponents/PriceBubble";
import FeatureBubble from "./bubbleComponents/FeatureBubble";
import SortByBubble from "./SortByBubble";
import ClearSelectionBubble from "./ClearSelectionBubble";

import { SearchFieldBubblesProps } from "./searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";

const SearchFieldBubbles = ({ search, setSearch }: SearchFieldBubblesProps) => {
  const styles = getBubbleStyles();

  return (
    <Box sx={styles.searchFieldMainBox}>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={0}
        sx={styles.mainSearchFieldStack}
      >
        <PropertyTypeBubble search={search} setSearch={setSearch} />
        <BedroomBubble
          minBedrooms={1}
          maxBedrooms={15}
          search={search}
          setSearch={setSearch}
        />
        <SizeBubble
          sizeRange={search.sizeRange}
          search={search}
          setSearch={setSearch}
        />
        <PriceRangeBubble
          priceRange={search.priceRange}
          search={search}
          setSearch={setSearch}
        />
        <FeatureBubble search={search} setSearch={setSearch} />
        <SortByBubble search={search} setSearch={setSearch} />
        <ClearSelectionBubble setSearch={setSearch} />
      </Stack>
    </Box>
  );
};
export default SearchFieldBubbles;

import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import PropertyTypeBubble from "./bubbleComponents/PropertyTypeBubble";
import PriceRangeBubble from "./bubbleComponents/PriceRangeBubble";
import BedroomBubble from "./bubbleComponents/BedroomBubble";
import FeatureBubble from "./bubbleComponents/FeatureBubble";
import SizeBubble from "./bubbleComponents/SizeBubble";
import ResultsBubble from "./ResultsBubble";
import SortByBubble from "./SortByBubble";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { SearchFieldBubblesProps } from "./searchComponents/bubbleInterfaces";

const SearchFieldBubbles = ({
  search,
  properties,
}: SearchFieldBubblesProps) => {
  const styles = getBubbleStyles();

  return (
    <Box sx={styles.searchFieldMainBox}>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={0}
        sx={styles.mainSearchFieldStack}
      >
        <Box sx={styles.searchButtonBox}>
          <ResultsBubble search={search} properties={properties} />
        </Box>
        <PropertyTypeBubble search={search} />
        <BedroomBubble minBedrooms={1} maxBedrooms={15} />
        <SizeBubble sizeRange={search.sizeRange} />
        <PriceRangeBubble priceRange={search.priceRange} />
        <FeatureBubble search={search} />
        <SortByBubble search={search} />
      </Stack>
    </Box>
  );
};
export default SearchFieldBubbles;

import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import PropertyTypeBubble from "./bubbleComponents/PropertyTypeBubble";
import PriceRangeBubble from "./bubbleComponents/PriceRangeBubble";
import BedroomBubble from "./bubbleComponents/BedroomBubble";
import FeatureBubble from "./bubbleComponents/FeatureBubble";
import SizeBubble from "./bubbleComponents/SizeBubble";
import ResultsBubble from "./ResultsBubble";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { SearchFieldBubblesProps } from "./searchComponents/bubbleInterfaces";
import { filterProperties } from "./searchComponents/filterPropertiesFunction";

const SearchFieldBubbles = ({
  search,
  setSearch,
  properties,
  setFilteredProperties,
}: SearchFieldBubblesProps) => {
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

  return (
    <Box sx={styles.searchFieldMainBox}>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={0}
        sx={styles.mainSearchFieldStack}
      >
        <Typography variant="h6">{results} Homes</Typography>
        <Box sx={styles.searchButtonBox}>
          <ResultsBubble
            search={search}
            setSearch={setSearch}
            properties={properties}
            setFilteredProperties={setFilteredProperties}
          />
        </Box>
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
      </Stack>
    </Box>
  );
};
export default SearchFieldBubbles;

import React, { useEffect } from "react";
import { Box, Stack } from "@mui/material";

import PropertyTypeBubble from "./bubbleComponents/PropertyTypeBubble";
import BedroomBubble from "./bubbleComponents/BedroomBubble";
import SizeBubble from "./bubbleComponents/SizeBubble";
import PriceRangeBubble from "./bubbleComponents/PriceRangeBubble";
import FeatureBubble from "./bubbleComponents/FeatureBubble";
import SortByBubble from "./SortByBubble";
import ResultsBubble from "./ResultsBubble";
import ClearSelectionBubble from "./ClearSelectionBubble";

import { SearchFieldBubblesProps } from "./searchComponents/bubbleInterfaces";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { filterProperties } from "./searchComponents/filterPropertiesFunction";

const SearchFieldBubbles = ({
  search,
  setSearch,
  properties,
  setFilteredProperties,
}: SearchFieldBubblesProps) => {
  const styles = getBubbleStyles();

  const filteredProperties = filterProperties(
    search.propertyFeatures,
    search.propertyType,
    search.propertyOffPlan,
    properties,
    search.priceRange,
    search.bedrooms,
    search.sizeRange
  );

  useEffect(() => {
    setSearch({ ...search, filteredProperties });
    setFilteredProperties(filteredProperties);
  }, [search]);

  return (
    <Box sx={styles.searchFieldMainBox}>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={0}
        sx={styles.mainSearchFieldStack}
      >
        <ResultsBubble
          search={search}
          setSearch={setSearch}
          properties={properties}
          setFilteredProperties={setFilteredProperties}
        />
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
        <SortByBubble
          search={search}
          setSearch={setSearch}
          setFilteredProperties={setFilteredProperties}
        />
        <ClearSelectionBubble search={search} setSearch={setSearch} />
      </Stack>
    </Box>
  );
};
export default SearchFieldBubbles;

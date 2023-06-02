import React, { useRef, createContext } from "react";
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

export const ResultsButtonContext = createContext<() => void>(() => {});

const SearchFieldBubbles = ({
  search,
  setSearch,
  properties,
  setFilteredProperties,
}: SearchFieldBubblesProps) => {
  const styles = getBubbleStyles();
  const resultsButtonRef = useRef<() => void>(() => {});
  return (
    <Box sx={styles.searchFieldMainBox}>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={0}
        sx={styles.mainSearchFieldStack}
      >
        <Box sx={styles.searchButtonBox}>
          <ResultsButtonContext.Provider value={resultsButtonRef.current}>
            <ResultsBubble
              search={search}
              setSearch={setSearch}
              properties={properties}
              setFilteredProperties={setFilteredProperties}
              resultsButtonRef={resultsButtonRef}
            />
          </ResultsButtonContext.Provider>
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
        <SortByBubble
          search={search}
          setSearch={setSearch}
          setFilteredProperties={setFilteredProperties}
        />
      </Stack>
    </Box>
  );
};
export default SearchFieldBubbles;

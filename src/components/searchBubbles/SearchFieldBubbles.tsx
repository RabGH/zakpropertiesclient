import React, { useEffect, useState } from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import PropertyTypeBubble from "./bubbleComponents/PropertyTypeBubble";
import PriceRangeBubble from "./bubbleComponents/PriceRangeBubble";
import ReadyToBuyBubble from "./bubbleComponents/ReadyToBuyBubble";
import BedroomBubble from "./bubbleComponents/BedroomBubble";
import FeatureBubble from "./bubbleComponents/FeatureBubble";
import SizeBubble from "./bubbleComponents/SizeBubble";
import ResultsBubble from "./ResultsBubble";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { SearchFieldBubblesProps } from "./searchComponents/bubbleInterfaces";

const SearchFieldBubbles = ({
  search,
  setSearch,
  properties,
  setFilteredProperties,
}: SearchFieldBubblesProps) => {
  const styles = getBubbleStyles();
  const [readyToBuyOption, setReadyToBuyOption] = useState("Any");

  const handleReadyToBuyChange = (option: string) => {
    let updatedSearch = search;
    let filteredProperties = search.filteredProperties;

    if (option === "Any") {
      updatedSearch = { ...updatedSearch, filteredProperties: properties };
      filteredProperties = properties;
    } else {
      updatedSearch = {
        ...updatedSearch,
        propertyOffPlan: option === "Off-Plan",
      };
      if (option === "Off-Plan") {
        filteredProperties = properties.filter(
          (property) =>
            property.propertyOffPlan?.offplan ??
            property.propertyOffPlan === undefined
        );
      } else if (option === "Ready to Buy") {
        filteredProperties = properties.filter(
          (property) => !property.propertyOffPlan?.offplan
        );
      }
    }

    setSearch((prevState) => ({ ...prevState, readyToBuy: option }));
    setFilteredProperties(filteredProperties);
  };

  return (
    <Box sx={styles.searchFieldMainBox}>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={0}
        sx={styles.mainSearchFieldStack}
      >
        <Box sx={styles.searchButtonBox}>
          <ResultsBubble
            search={search}
            setSearch={setSearch}
            properties={properties}
            setFilteredProperties={setFilteredProperties}
          />
        </Box>
        <ReadyToBuyBubble
          search={search}
          setSearch={setSearch}
          readyToBuyOption={readyToBuyOption}
          setReadyToBuyOption={setReadyToBuyOption}
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
        <FeatureBubble
          handleSearch={(propertyFeatures) => {
            setSearch((prevSearch) => ({
              ...prevSearch,
              propertyFeatures,
            }));
          }}
          search={search}
          setSearch={setSearch}
        />
      </Stack>
    </Box>
  );
};
export default SearchFieldBubbles;

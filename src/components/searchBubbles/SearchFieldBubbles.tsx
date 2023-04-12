import React, { useEffect, useState } from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import PropertyTypeBubble from "./bubbleComponents/PropertyTypeBubble";
import PriceRangeBubble from "./bubbleComponents/PriceRangeBubble";
import ReadyToBuyBubble from "./bubbleComponents/ReadyToBuyBubble";
import BedroomBubble from "./bubbleComponents/BedroomBubble";
import FeatureBubble from "./bubbleComponents/FeatureBubble";
import SizeBubble from "./bubbleComponents/SizeBubble";
import { getBubbleStyles } from "./searchComponents/bubbleStyles";
import { SearchFieldBubblesProps } from "./searchComponents/bubbleInterfaces";
import { filterProperties } from "./searchComponents/filterPropertiesFunction";

const SearchFieldBubbles = ({
  filteredProperties,
  search,
  setSearch,
  properties,
  setFilteredProperties,
}: SearchFieldBubblesProps) => {
  const styles = getBubbleStyles();
  const [isChanged, setIsChanged] = useState(false);
  const [readyToBuyOption, setReadyToBuyOption] = useState("Any");
  const [results, setResults] = useState(filteredProperties.length);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    search.priceRange[0],
    search.priceRange[1],
  ]);
  const [bedroomRange, setBedroomRange] = useState<[number, number]>([
    search.bedrooms[0],
    search.bedrooms[1],
  ]);

  const [sizeRange, setSizeRange] = useState<[number, number]>([
    search.sizeRange[0],
    search.sizeRange[1],
  ]);
  const [featureArray, setFeatureArray] = useState<string[]>([]);
  const handleTypeChange = (propertyType: string) => {
    setSearch({ ...search, propertyType });
  };
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

  useEffect(() => {
    if (
      priceRange[0] !== search.priceRange[0] ||
      priceRange[1] !== search.priceRange[1] ||
      bedroomRange[0] !== search.bedrooms[0] ||
      bedroomRange[1] !== search.bedrooms[1] ||
      sizeRange[0] !== search.sizeRange[0] ||
      sizeRange[1] !== search.sizeRange[1] ||
      featureArray.length !== search.propertyFeatures.length
    ) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [
    sizeRange,
    priceRange,
    bedroomRange,
    featureArray,
    search.sizeRange,
    search.priceRange,
    search.bedrooms,
  ]);

  const handleButtonClick = async () => {
    const filteredProperties = filterProperties(
      search.propertyType,
      priceRange,
      readyToBuyOption === "Any" ? undefined : readyToBuyOption === "Off-Plan",
      bedroomRange,
      sizeRange,
      search.propertyFeatures,
      properties
    );
    setSearch((prev) => ({
      ...prev,
      filteredProperties,
      priceRange,
    }));
    setFilteredProperties(filteredProperties);
  };

  useEffect(() => {
    setResults(filteredProperties.length);
  }, [filteredProperties]);

  return (
    <Box sx={styles.searchFieldMainBox}>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={0}
        sx={styles.mainSearchFieldStack}
      >
        <ReadyToBuyBubble
          readyToBuyOption={readyToBuyOption}
          setReadyToBuyOption={setReadyToBuyOption}
        />
        <PropertyTypeBubble
          handleSearch={handleTypeChange}
          search={search}
          setSearch={setSearch}
        />
        <BedroomBubble
          handleBedroomRange={(low, high) => setBedroomRange([low, high])}
          minBedrooms={1}
          maxBedrooms={15}
          search={search}
          bedroomRange={bedroomRange}
          setIsChanged={setIsChanged}
          setSearch={setSearch}
        />
        <FeatureBubble
          handleSearch={(propertyFeatures) => {
            setSearch((prevSearch) => ({
              ...prevSearch,
              propertyFeatures,
            }));
            setFeatureArray(propertyFeatures);
          }}
          search={search}
          setSearch={setSearch}
        />
        <SizeBubble
          handleSizeRange={(sizeRange) => setSizeRange(sizeRange)}
          sizeRange={sizeRange}
          search={search}
          setIsChanged={setIsChanged}
          setSearch={setSearch}
        />
        <PriceRangeBubble
          handlePriceRange={(priceRange) => setPriceRange(priceRange)}
          priceRange={priceRange}
          search={search}
          setIsChanged={setIsChanged}
          setSearch={setSearch}
        />
      </Stack>
      <Box sx={styles.searchButtonBox}>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          sx={styles.searchResultsButton}
          // disabled={isChanged}
        >
          Results: {results}
        </Button>
      </Box>
    </Box>
  );
};
export default SearchFieldBubbles;

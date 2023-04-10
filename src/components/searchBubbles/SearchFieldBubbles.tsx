import { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import PropertyTypeBubble from "./PropertyTypeBubble";
import PriceRangeBubble from "./PriceRangeBubble";
import ReadyToBuyBubble from "./ReadyToBuyBubble";
import { SearchFieldBubblesProps, SearchInterface } from "./bubbleInterfaces";
import { Property } from "../../../lib/types";

const SearchFieldBubbles = ({
  handleSearch,
  selectedType,
  priceRange,
  setPriceRange,
  filteredProperties,
  search,
  setSearch,
  properties,
  setFilteredProperties,
}: SearchFieldBubblesProps) => {
  const [minPrice, setMinPrice] = useState<number>(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState<number>(priceRange[1]);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "minPrice") {
      setMinPrice(Number(value));
      setPriceRange([Number(value), priceRange[1]]);
      setSearch({
        ...search,
        minPrice: Number(value),
      });
      handleSearch(selectedType, Number(value), priceRange[1]);
    } else if (name === "maxPrice") {
      setMaxPrice(Number(value));
      setPriceRange([priceRange[0], Number(value)]);
      setSearch({
        ...search,
        maxPrice: Number(value),
      });
      handleSearch(selectedType, priceRange[0], Number(value));
    }
  };

  const handleTypeChange = (propertyType: string) => {
    const updatedSearch = { ...search, propertyType };
    setSearch(updatedSearch);
    handleSearch(propertyType, search.minPrice, search.maxPrice);
  };

  const handleReadyToBuyChange = (option: string) => {
    let filteredProperties = properties;
    let updatedSearch: SearchInterface = { ...search };

    if (option === "Any") {
      updatedSearch.propertyOffPlan = false;
    } else {
      updatedSearch.propertyOffPlan = option === "Off-Plan";
      if (option === "Off-Plan") {
        filteredProperties = properties.filter(
          (property) =>
            property.propertyOffPlan?.offplan === true ||
            property.propertyOffPlan === undefined
        );
      }
    }

    updatedSearch = { ...updatedSearch, filteredProperties };
    setSearch(updatedSearch);
    handleSearch(
      updatedSearch.propertyType,
      updatedSearch.minPrice,
      updatedSearch.maxPrice
    );
  };

  useEffect(() => {
    setFilteredProperties(properties);
  }, [properties, setFilteredProperties]);

  return (
    <Stack direction="row" flexWrap="wrap" spacing={2} sx={{ mb: "2rem" }}>
      <Typography sx={{ alignSelf: "center" }}>
        {filteredProperties.length} results found
      </Typography>
      <ReadyToBuyBubble
        search={search}
        setSearch={setSearch}
        properties={properties}
        setFilteredProperties={setFilteredProperties}
        handleReadyToBuyChange={handleReadyToBuyChange}
      />
      <PropertyTypeBubble
        handleSearch={handleTypeChange}
        selectedType={selectedType}
        search={search}
        setSearch={setSearch}
        filteredProperties={filteredProperties}
      />
      <PriceRangeBubble
        handlePriceRange={handlePriceChange}
        priceRange={priceRange}
        minPrice={0}
        maxPrice={1000000000}
        handleSearch={handleSearch}
      />
    </Stack>
  );
};

export default SearchFieldBubbles;

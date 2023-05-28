import React, { useState } from "react";
import { Property } from "@lib/types";
import { SearchInterface } from "./bubbleInterfaces";

export function useSearch(properties: Property[]) {
  const [search, setSearch] = useState<SearchInterface>({
    propertyType: [],
    priceRange: [0, 1000000000],
    propertyOffPlan: undefined,
    filteredProperties: properties,
    bedrooms: [1, 15],
    propertyFeatures: [],
    readyToBuy: "ANY",
    sizeRange: [0, 100000],
  });

  const updateSearch = (newSearch: Partial<SearchInterface>) => {
    setSearch((prevSearch) => ({
      ...prevSearch,
      ...newSearch,
    }));
  };

  return [search, updateSearch] as const;
}

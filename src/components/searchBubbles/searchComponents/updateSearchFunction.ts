import React, { useState } from "react";
import { Property } from "@lib/types";
import { SearchInterface } from "./bubbleInterfaces";
import { filterProperties } from "./filterPropertiesFunction";
//! Not in use
// export function useSearch(properties: Property[]) {
//   const [search, setSearch] = useState<SearchInterface>({
//     propertyType: [],
//     priceRange: [0, 1000000000],
//     propertyOffPlan: undefined,
//     filteredProperties: properties,
//     bedrooms: [1, 15],
//     propertyFeatures: [],
//     readyToBuy: "ANY",
//     sizeRange: [0, 100000],
//   });

//   const updateSearch = (newSearch: Partial<SearchInterface>) => {
//     setSearch((prevSearch) => ({
//       ...prevSearch,
//       ...newSearch,
//     }));
//   };

//   return [search, updateSearch] as const;
// }
// Create a custom hook that takes the search state and the properties array as arguments
export const useSearch = (search: SearchInterface, properties: Property[]) => {
  const updateSearch = (
    setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>,
    setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>
  ) => {
    const filteredProperties = filterProperties(
      search.propertyType,
      search.priceRange,
      search.propertyOffPlan,
      search.bedrooms,
      search.sizeRange,
      search.propertyFeatures,
      properties
    );
    setSearch({ ...search, filteredProperties });
    setFilteredProperties(filteredProperties);
  };
  return updateSearch;
};

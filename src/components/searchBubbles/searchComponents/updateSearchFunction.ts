// import React, { useState } from "react";
// import { Property } from "@lib/types";
// import { SearchInterface } from "./bubbleInterfaces";
// import { filterProperties } from "./filterPropertiesFunction";
// //! Not in use
// export function useSearch(properties: Property[]) {
//   const [search, setSearch] = useState<SearchInterface>({
//     propertyType: [],
//     priceRange: [0, 1000000000],
//     propertyOffPlan: undefined,
//     filteredProperties: properties,
//     bedroomRange: [1, 15],
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
// // Create a custom hook that takes the search state and the properties array as arguments

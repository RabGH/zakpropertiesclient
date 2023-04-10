import React, { useState } from "react";
import { Box, Grid, Pagination, useTheme } from "@mui/material";
import { Property } from "../../../../../lib/types";
import PropertyCard from "../PropertyAllSlugs";
import SearchFieldBubbles from "../../../searchBubbles/SearchFieldBubbles";
import { getPropertyGridCardStyles } from "./propertyCardGridStyles";
import { SearchInterface } from "../../../searchBubbles/bubbleInterfaces";

interface Props {
  properties: Property[];
}

const PropertyCardGrid: React.FC<Props> = ({ properties }) => {
  const styles = getPropertyGridCardStyles();
  const [search, setSearch] = useState<SearchInterface>({
    propertyType: "",
    minPrice: 0,
    maxPrice: 0,
    propertyOffPlan: false,
    filteredProperties: [],
    bedrooms: 0,
    bathrooms: 0,
    propertyFeatures: [],
  });
  const [page, setPage] = useState(1);
  const cardsPerPage = 9;
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const numPages = Math.ceil(filteredProperties.length / cardsPerPage); // calculate total number of pages

  const handleSearch = (
    propertyType: string,
    minPrice: number,
    maxPrice: number
  ) => {
    setSelectedType(propertyType);
    setPriceRange([minPrice, maxPrice]);
    setPage(1);
    const filtered = properties
      .filter(
        (property) =>
          propertyType === "All" || property.propertyType === propertyType
      )
      .filter((property) => {
        if (minPrice === 0 && maxPrice === 0) {
          return true;
        } else {
          return (
            property.totalPrice >= minPrice && property.totalPrice <= maxPrice
          );
        }
      });
    setFilteredProperties(filtered);
  };

  return (
    <Box sx={styles.mainBox}>
      <SearchFieldBubbles
        handleSearch={handleSearch}
        selectedType={selectedType}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        filteredProperties={filteredProperties}
        search={search}
        setSearch={setSearch}
        properties={properties}
        setFilteredProperties={setFilteredProperties} // Add this
      />
      <Box sx={styles.cardGridStyles}>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={styles.gridStyles}
        >
          {filteredProperties
            .slice((page - 1) * cardsPerPage, page * cardsPerPage)
            .map((property) => (
              <Box sx={styles.propertyCardBox} key={property._id}>
                <PropertyCard property={property} />
              </Box>
            ))}
        </Grid>
      </Box>
      <Box sx={styles.paginationBox}>
        <Pagination
          count={numPages}
          page={page}
          onChange={handleChangePage}
          sx={styles.paginationStyles}
        />
      </Box>
    </Box>
  );
};

export default PropertyCardGrid;

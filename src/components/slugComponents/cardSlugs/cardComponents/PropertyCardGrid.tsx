import React, { useState } from "react";
import { Box, Grid, Pagination, useTheme } from "@mui/material";
import { Property } from "../../../../../lib/types";
import PropertyCard from "../PropertyAllSlugs";
import PropertySearchBar from "../../../searchBubbles/PropertyTypes";
import PriceRange from "../../../searchBubbles/PriceRange";
import { getPropertyGridCardStyles } from "./propertyCardGridStyles";

interface Props {
  properties: Property[];
  selectedType: string;
}

const PropertyCardGrid: React.FC<Props> = ({ properties }) => {
  const styles = getPropertyGridCardStyles();

  const [page, setPage] = useState(1);
  const cardsPerPage = 9;

  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const numPages = Math.ceil(properties.length / cardsPerPage); // calculate total number of pages

  const filteredProperties = properties
    .filter(
      (property) =>
        selectedType === "All" || property.propertyType === selectedType
    )
    .filter((property) => {
      if (priceRange[0] === 0 && priceRange[1] === 0) {
        return true; // if price range is not set, show all properties
      } else {
        return (
          property.totalPrice >= priceRange[0] &&
          property.totalPrice <= priceRange[1]
        );
      }
    });

  const handleSearch = (propertyType: string) => {
    setSelectedType(propertyType);
    setPage(1);
  };

  return (
    <Box sx={styles.mainBox}>
      <PropertySearchBar handleSearch={handleSearch} />
      <PriceRange handlePriceRange={setPriceRange} priceRange={priceRange} />
      <Box sx={styles.cardGridStyles}>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={styles.gridStyles}
        >
          {filteredProperties
            .slice((page - 1) * cardsPerPage, page * cardsPerPage) // slice the properties array based on the current page number
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

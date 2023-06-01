import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination, Divider } from "@mui/material";
import { Property } from "../../../../../lib/types";
import PropertyAllCard from "./PropertyAllCards";
import SearchFieldBubbles from "../../../searchBubbles/SearchFieldBubbles";
import { getPropertyGridCardStyles } from "../cardComponents/propertyCardGridStyles";
import { SearchInterface } from "../../../searchBubbles/searchComponents/bubbleInterfaces";

interface Props {
  properties: Property[];
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  filteredProperties: Property[];
  setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}

const PropertyCardGrid: React.FC<Props> = ({
  properties,
  search,
  setSearch,
  filteredProperties,
  setFilteredProperties,
}) => {
  const styles = getPropertyGridCardStyles();
  const [page, setPage] = useState(1);
  const cardsPerPage = 9;

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const numPages = Math.ceil(search.filteredProperties.length / cardsPerPage);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.propertyCardGridSearchBarBox}>
        <SearchFieldBubbles
          filteredProperties={filteredProperties}
          search={search}
          setSearch={setSearch}
          properties={properties}
          setFilteredProperties={setFilteredProperties}
        />
      </Box>
      <Divider sx={styles.searchGridDividerStyles} />
      <Grid container spacing={1} sx={styles.cardGridStyles}>
        {search.filteredProperties
          .slice((page - 1) * cardsPerPage, page * cardsPerPage)
          .map((property) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={property._id}
              sx={styles.cardAllGridStyles}
            >
              <PropertyAllCard property={property} />
            </Grid>
          ))}
      </Grid>
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

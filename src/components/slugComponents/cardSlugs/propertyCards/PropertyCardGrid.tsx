import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Box, Grid, Pagination, Divider, Typography } from "@mui/material";
import { Property } from "@lib/types";
import PropertyAllCard from "./PropertyAllCards";
import SearchFieldBubbles from "../../../searchBubbles/SearchFieldBubbles";
import { getPropertyGridCardStyles } from "../cardComponents/propertyCardGridStyles";
import { SearchInterface } from "../../../searchBubbles/searchComponents/bubbleInterfaces";
import { filterProperties } from "../../../searchBubbles/searchComponents/filterPropertiesFunction";
import orderBy from "lodash/orderBy";

interface Props {
  properties: Property[];
  search: SearchInterface;
  setSearch: React.Dispatch<React.SetStateAction<SearchInterface>>;
  setFilteredProperties: React.Dispatch<React.SetStateAction<Property[]>>;
}

const PropertyCardGrid: React.FC<Props> = ({
  properties,
  search,
  setSearch,
}) => {
  const styles: any = getPropertyGridCardStyles();
  const [page, setPage] = useState(1);
  const cardsPerPage = 9;
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

  const sortedProperties = useMemo(() => {
    return orderBy([...filteredProperties], [search.sortBy], ["desc"]);
  }, [filteredProperties, search.sortBy]);

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    [setPage]
  );

  const numPages = Math.ceil(filteredProperties.length / cardsPerPage);

  useEffect(() => {
    const filteredProperties = filterProperties(
      search.propertyFeatures,
      search.propertyType,
      search.propertyOffPlan,
      properties,
      search.priceRange,
      search.bedrooms,
      search.sizeRange
    );
    setFilteredProperties(filteredProperties);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [
    search.propertyFeatures,
    search.propertyType,
    search.propertyOffPlan,
    search.priceRange,
    search.bedrooms,
    search.sizeRange,
  ]);

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.propertyCardGridSearchBarBox}>
        <SearchFieldBubbles search={search} setSearch={setSearch} />
      </Box>
      <Typography variant="h6" sx={styles.resultsTypography}>
        Results: {filteredProperties.length}
      </Typography>
      <Divider sx={styles.searchGridDividerStyles} />
      <Grid container spacing={1} sx={styles.cardGridStyles}>
        {filteredProperties.length > 0 ? (
          sortedProperties
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
            ))
        ) : (
          <Typography
            variant="h3"
            sx={styles.noPropertiesFoundTypographyStyles}
          >
            The property search criteria you entered does not contain any
            properties, please press on Clear Selection.
          </Typography>
        )}
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

import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination, Divider } from "@mui/material";
import { Property } from "@lib/types";
import PropertyAllCard from "./PropertyAllCards";
import SearchFieldBubbles from "../../../searchBubbles/SearchFieldBubbles";
import { getPropertyGridCardStyles } from "../cardComponents/propertyCardGridStyles";
import { SearchInterface } from "../../../searchBubbles/searchComponents/bubbleInterfaces";
import { useRouter } from "next/router";
import { filterProperties } from "../../../searchBubbles/searchComponents/filterPropertiesFunction"; // Keep this import

interface Props {
  properties: Property[];
}

const PropertyCardGrid: React.FC<Props> = ({ properties }) => {
  const styles = getPropertyGridCardStyles();
  const [page, setPage] = useState(1);
  const cardsPerPage = 9;
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const [search, setSearch] = useState<SearchInterface>({
    propertyType: [],
    priceRange: [0, 1000000],
    propertyOffPlan: undefined,
    bedrooms: [1, 15],
    sizeRange: [0, 100000],
    propertyFeatures: [],
    filteredProperties: properties,
    readyToBuy: "Any",
  });

  const numPages = Math.ceil(search.filteredProperties.length / cardsPerPage);
  const router = useRouter();

  useEffect(() => {
    const propertyType = router.query.propertyType
      ? (router.query.propertyType as string).split(",")
      : [];
    const priceRange = router.query.priceRange
      ? (router.query.priceRange as string).split("-").map(Number)
      : [0, 1000000];
    const propertyOffPlan = router.query.propertyOffPlan
      ? router.query.propertyOffPlan === "true"
      : undefined;
    const bedrooms = router.query.bedrooms
      ? (router.query.bedrooms as string).split(",").map(Number)
      : [1, 15];
    const sizeRange = router.query.sizeRange
      ? (router.query.sizeRange as string).split("-").map(Number)
      : [0, 100000];
    const propertyFeatures = router.query.propertyFeatures
      ? (router.query.propertyFeatures as string).split(",")
      : [];
    setSearch({
      propertyType,
      priceRange,
      propertyOffPlan,
      bedrooms,
      sizeRange,
      propertyFeatures,
      filteredProperties: properties,
      readyToBuy: router.query.readyToBuy as string, // add this property from URL query parameter
    });
  }, [router.query]);

  useEffect(() => {
    const filteredProperties = filterProperties(
      search.propertyType,
      search.priceRange,
      search.propertyOffPlan,
      search.bedrooms,
      search.sizeRange,
      search.propertyFeatures,
      properties
    );
    setSearch((prev) => ({ ...prev, filteredProperties }));
  }, [search]);

  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.propertyCardGridSearchBarBox}>
        <SearchFieldBubbles search={search} properties={properties} />
      </Box>
      <Divider sx={styles.searchGridDividerStyles} />
      <Grid container spacing={1} sx={styles.cardGridStyles}>
        {search.filteredProperties
          .slice((page - 1) * cardsPerPage, page * cardsPerPage)
          .map((property) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={property.id}>
              <PropertyAllCard property={property} />
            </Grid>
          ))}
      </Grid>
      <Pagination
        count={numPages}
        page={page}
        onChange={handleChangePage}
        sx={styles.paginationStyles}
      />
    </Box>
  );
};
export default PropertyCardGrid;

import React, { useState } from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { Property } from "../../lib/types";
import { sanityClient } from "../../lib/sanity";
import PropertyCardGrid from "../components/slugComponents/cardSlugs/cardComponents/PropertyCardGrid";
import { getBuyPropertiesPageStyles } from "../components/pageComponents/pageSlugStyles/buyPropertiesStyles";
import { SearchInterface } from "../components/searchBubbles/searchComponents/bubbleInterfaces";

export default function PropertySearch({
  properties,
}: {
  properties: Property[];
}) {
  const styles = getBuyPropertiesPageStyles();
  const [search, setSearch] = useState<SearchInterface>({
    propertyType: "All",
    priceRange: [0, 1000000000],
    propertyOffPlan: false,
    filteredProperties: properties,
    bedrooms: [1, 15],
    propertyFeatures: [],
    readyToBuy: "Any",
    sizeRange: [0, 100000],
  });
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);

  return (
    <Box sx={styles.mainBox}>
      <Head>
        <title>Property Search</title>
        <meta name="description" content="Search for properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={styles.contentMainBox}>
        <Typography variant="h3" sx={styles.featuredTitlePos}>
          Featured Properties for Sale
        </Typography>
        <Box sx={styles.propertyAllCardBox}>
          <PropertyCardGrid
            properties={properties}
            search={search}
            setSearch={setSearch}
            filteredProperties={filteredProperties}
            setFilteredProperties={setFilteredProperties}
          />
        </Box>
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const propertyQuery = `*[ _type == "property"]{
...,
location,
propertyType,
mainPropertyImage,
propertyImages,
totalPrice,
bathrooms,
bedrooms,
description,
squareFootage,
plottedArea,
builtUpArea,
features,
propertyOffPlan,
}`;
  const [properties] = await Promise.all([
    sanityClient.fetch<Property[]>(propertyQuery),
  ]);

  return {
    props: {
      properties,
    },
  };
}

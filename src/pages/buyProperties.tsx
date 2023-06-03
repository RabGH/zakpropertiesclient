import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { Property } from "@lib/types";
import { GetStaticProps } from "next";
import { sanityClient } from "@lib/sanity";
import { previewClient } from "@lib/client";
import PropertyCardGrid from "@/components/slugComponents/cardSlugs/buyPropertiesComponents/PropertyCardGrid";
import { getBuyPropertiesPageStyles } from "@/components/slugComponents/pageSlugComponents/pageSlugStyles/buyPropertiesStyles";
import { SearchInterface } from "@/components/searchBubbles/searchComponents/bubbleInterfaces";

export default function PropertySearch({
  properties,
}: {
  properties: Property[];
}) {
  const styles = getBuyPropertiesPageStyles();
  const [search, setSearch] = useState<SearchInterface>({
    propertyType: [],
    priceRange: [0, 500000000],
    propertyOffPlan: undefined,
    filteredProperties: properties,
    bedrooms: [1, 15],
    propertyFeatures: [],
    readyToBuy: "ANY",
    sizeRange: [0, 10000],
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
            setFilteredProperties={setFilteredProperties}
          />
        </Box>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  previewData,
}) => {
  const propertyQuery = `*[ _type == "property"]{
    ...,
    createdAt,
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
    features->{
      name,
      features[],
    },
    propertyOffPlan,    
  }`;
  const client = preview ? previewClient : sanityClient;
  const params = preview ? previewData : {};
  const properties = await client.fetch(propertyQuery, params);

  return {
    props: {
      properties,
      preview,
    },
    revalidate: 60,
  };
};

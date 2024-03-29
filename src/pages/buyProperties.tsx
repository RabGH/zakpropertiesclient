import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { Property } from "@lib/types";
import { GetStaticProps } from "next";
import { sanityClient } from "@lib/sanity";
import { previewClient } from "@lib/client";
import PropertyCardGrid from "@/components/slugComponents/cardSlugs/propertyCards/PropertyCardGrid";
import { getBuyPropertiesPageStyles } from "@/components/pageComponents/buyProperties/buyPropertiesStyles";
import { SearchInterface } from "@/components/searchBubbles/searchComponents/bubbleInterfaces";
import { PropertiesContext } from "@/components/searchBubbles/searchComponents/bubbleInterfaces";

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
    propertyAmenities: [],
    readyToBuy: "Any",
    sizeRange: [0, 10000],
    sortBy: "Latest",
  });
  const [filteredProperties, setFilteredProperties] =
    useState<Property[]>(properties);

  return (
    <Box sx={styles.mainBox}>
      <Head>
        <title>Property Search</title>
        <meta
          name="description"
          content="Zak Properties Buy and Search for Properties"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={styles.contentMainBox}>
        <Typography variant="h3" sx={styles.featuredTitlePos}>
          Featured Properties for Sale
        </Typography>
        <Box sx={styles.propertyAllCardBox}>
          <PropertiesContext.Provider value={properties}>
            <PropertyCardGrid
              properties={properties}
              search={search}
              setSearch={setSearch}
              setFilteredProperties={setFilteredProperties}
            />
          </PropertiesContext.Provider>
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
    id,
    createdAt,
    location,
    propertyType,
    mainPropertyImage,
    propertyImages,
    totalPrice,
    bathrooms,
    bedrooms,
    description,
    plottedArea,
    builtUpArea,
    propertyAmenities->{
      name,
      propertiesAmenities[],
    },
    address->{
      street,
      city,
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

import React from "react";
import Head from "next/head";
import { Box, Divider, Typography } from "@mui/material";
import { Project, Property } from "../../lib/types";
import { sanityClient } from "../../lib/sanity";
import PropertyCardGrid from "../components/slugComponents/cardSlugs/cardComponents/PropertyCardGrid";
import {
  mainBox,
  contentMainBox,
  featuredTitlePos,
  dividerStyles,
  propertyAllCardBox,
} from "../components/slugComponents/pageSlugStyles/buyPropertiesStyles";

export default function PropertySearch({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <Box sx={mainBox}>
      <Head>
        <title>Property Search</title>
        <meta name="description" content="Search for properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={contentMainBox}>
        <Typography variant="h3" sx={featuredTitlePos}>
          Featured Properties for Sale
        </Typography>
        <Divider sx={dividerStyles} />
        <Box sx={propertyAllCardBox}>
          <PropertyCardGrid properties={properties} />
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

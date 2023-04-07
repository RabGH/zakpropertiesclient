import React from "react";
import Head from "next/head";
import { Box, Divider, Typography } from "@mui/material";
import { Property } from "../../lib/types";
import { sanityClient } from "../../lib/sanity";
import PropertyCardGrid from "../components/slugComponents/cardSlugs/cardComponents/PropertyCardGrid";

export default function PropertySearch({
  properties,
}: {
  properties: Property[];
}) {
  const dividerStyles = {};

  const featuredTitlePos = {
    mt: "8rem",
  };
  const mainBox = {};

  return (
    <Box sx={mainBox}>
      <Head>
        <title>Property Search</title>
        <meta name="description" content="Search for properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Divider sx={dividerStyles}>
        <Typography variant="h5" sx={featuredTitlePos}>
          Featured Properties
        </Typography>
      </Divider>
      <Box>
        <PropertyCardGrid properties={properties} />
      </Box>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const query = `*[ _type == "property"]{
      title,
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
      "slug": slug.current,
    }`;

  const properties = await sanityClient.fetch(query);

  return { props: { properties } };
};

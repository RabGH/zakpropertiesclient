import React from "react";
import { Box, Grid } from "@mui/material";
import { Property } from "@lib/types";
import { getHomePageStyles } from "@/components/pageComponents/home/homePageStyles";

import PropertyVillaCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyVillaCards";
import PropertyAptCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyAptCards";
import PropertyTownCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyTownCards";
import ProjectCardSlug from "@/components/pageComponents/developments/ProjectCardSlugs";

interface HomePropertyCardsProps {
  properties: Property[];
}

export default function HomePropertyCardsComponent({
  properties,
}: HomePropertyCardsProps) {
  const styles = getHomePageStyles();
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      direction={{
        xs: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}
    >
      <PropertyVillaCardSlug properties={properties} />
      <PropertyAptCardSlug properties={properties} />
      <PropertyTownCardSlug properties={properties} />
    </Grid>
  );
}

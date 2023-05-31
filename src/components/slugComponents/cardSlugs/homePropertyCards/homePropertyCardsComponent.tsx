import React from "react";
import { Box, Grid } from "@mui/material";
import { Property } from "@lib/types";
import { CardStyles } from "../cardComponents/cardStyles";

import PropertyVillaCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyVillaCards";
import PropertyAptCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyAptCards";
import PropertyTownCardSlug from "@/components/slugComponents/cardSlugs/homePropertyCards/PropertyTownCards";

interface HomePropertyCardsProps {
  properties: Property[];
}

export default function HomePropertyCardsComponent({
  properties,
}: HomePropertyCardsProps) {
  const styles = CardStyles();
  return (
    <Grid
      container
      spacing={0}
      justifyContent="center"
      direction={{
        xs: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}
      sx={styles.homeGridStyles}
    >
      <PropertyVillaCardSlug properties={properties} />
      <PropertyAptCardSlug properties={properties} />
      <PropertyTownCardSlug properties={properties} />
    </Grid>
  );
}

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Property } from "@lib/types";
import { filterSimilarProperties } from "../cardComponents/filterSimilarPropertiesFunction"; // import the function
import PropertyAllCard from "@/components/slugComponents/cardSlugs/buyPropertiesCardComponents/PropertyAllCards";
import { getSimilarPropertyGridCardStyles } from "../cardComponents/propertySimilarCardGridStyles";

interface PropertySimilarCardsProps {
  property: Property;
  properties: Property[];
}

const PropertySimilarCards: React.FC<PropertySimilarCardsProps> = ({
  property,
  properties,
}) => {
  const styles = getSimilarPropertyGridCardStyles();
  const similarProperties = filterSimilarProperties(property, properties);
  console.log(similarProperties);
  const maxSimilar = 3;
  const viewButton = 1;

  return (
    <Box sx={styles.similarMainBox}>
      <Typography variant="h3" sx={styles.similarMainTitleStyles}>
        Similar Properties
      </Typography>
      <Grid
        container
        direction={{
          xs: "row",
          sm: "row",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        spacing={1}
        sx={styles.similarCardGridContainerStyles}
      >
        {similarProperties.length > 0 ? (
          similarProperties.slice(0, maxSimilar).map((property) => (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              lg={4}
              key={property._id}
              sx={styles.similarCardGridItemStyles}
            >
              <PropertyAllCard property={property} />
            </Grid>
          ))
        ) : (
          <Box sx={styles.similarViewMoreBoxStyles}>
            <Typography variant="h3" sx={styles.similarNoPropMsgStyles}>
              No similar properties
            </Typography>
            <Button
              variant="contained"
              href="/buyProperties"
              sx={styles.similarViewMoreBtnStyles}
            >
              View more properties
            </Button>
          </Box>
        )}
      </Grid>
      {similarProperties.length > viewButton && (
        <Button
          variant="contained"
          href="/buyProperties"
          sx={styles.similarPropMsgStyles}
        >
          View similar properties
        </Button>
      )}
    </Box>
  );
};

export default PropertySimilarCards;

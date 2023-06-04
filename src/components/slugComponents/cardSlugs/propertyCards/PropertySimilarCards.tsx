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

  return (
    <Box sx={styles.similarMainBox}>
      <Grid container spacing={1} sx={styles.similarCardGridStyles}>
        {similarProperties.length > 0 ? (
          similarProperties.slice(0, maxSimilar).map((property) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={property._id}
              sx={styles.similarCardAllGridStyles}
            >
              <PropertyAllCard property={property} />
            </Grid>
          ))
        ) : (
          <Box sx={styles.similarViewMoreBoxStyles}>
            <Typography variant="h6" sx={styles.similarNoPropMsgStyles}>
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
      {similarProperties.length > maxSimilar && (
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

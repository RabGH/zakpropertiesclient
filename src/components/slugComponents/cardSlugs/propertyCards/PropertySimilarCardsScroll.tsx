import React from "react";
import { Box, Typography, Button, Container, Divider } from "@mui/material";
import { Property } from "@lib/types";
import { filterSimilarProperties } from "../cardComponents/filterSimilarPropertiesFunction"; // import the function
import PropertyAllCard from "@/components/slugComponents/cardSlugs/propertyCards/PropertyAllCards";
import { getSimilarPropertyGridCardStyles } from "../cardComponents/propertySimilarCardGridStyles";
import Link from "next/link";

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
  const maxSimilar = 3;
  const viewButton = 1;

  return (
    <Container maxWidth="xl" sx={styles.similarMainBox}>
      <Divider>
        <Typography variant="h3" sx={styles.similarMainTitleStyles}>
          <Link href="/buyProperties">Similar Properties</Link>
        </Typography>
      </Divider>

      <Box sx={styles.similarCardGridContainerStyles}>
        {similarProperties.length > 0 ? (
          similarProperties.slice(0, maxSimilar).map((property) => (
            <Box key={property._id} sx={styles.similarCardGridItemStyles}>
              <PropertyAllCard property={property} />
            </Box>
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
      </Box>
      {similarProperties.length > viewButton && (
        <Button
          variant="contained"
          href="/buyProperties"
          sx={styles.similarPropBtnStyles}
        >
          View similar properties
        </Button>
      )}
    </Container>
  );
};

export default PropertySimilarCards;

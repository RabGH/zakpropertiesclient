import { urlFor, sanityClient } from "@lib/sanity";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Container, Card, Divider, Grid } from "@mui/material";
import { Property } from "@lib/types";
import {
  main,
  featuredTitlePos,
  cardStyles,
  propertyTypeStyles,
  propertyTitleCard,
  propertyAreaCard,
  propertyPriceCard,
  cardInfoStyles,
  dividerStyles,
  mainBox,
  bedroomStyles,
  offPlanStyles,
  offPlanTextStyles,
  offPlanCompleteStyles,
} from "../cardComponents/cardStyles";

import CardImageCarousel from "../cardComponents/CardImageCarousel";

interface PropertyTownCardBodyProps {
  properties?: Property[];
}

const PropertyTownCardBodyData = ({
  properties,
}: PropertyTownCardBodyProps) => {
  if (!properties) {
    return null;
  }

  const townhouses = properties.filter(
    (property) => property.propertyType === "Townhouse"
  );

  return (
    <>
      {properties && (
        <Container>
          <Box sx={main}>
            <Box>
              <Divider sx={dividerStyles}>
                <Typography variant="h5" sx={featuredTitlePos}>
                  Featured Townhouses
                </Typography>
              </Divider>
              <Box sx={mainBox}>
                <Grid container spacing={3} justifyContent="center">
                  {townhouses?.slice(0, 3).map((property) => (
                    <Grid item xs={12} sm={6} md={4}>
                      <Card sx={cardStyles} key={property._id}>
                        {property.mainPropertyImage && (
                          <CardImageCarousel
                            images={[
                              urlFor(property.mainPropertyImage)
                                .auto("format")
                                .url(),
                              ...property.propertyImages.map((img) =>
                                urlFor(img).auto("format").url()
                              ),
                            ]}
                            alt={property.title}
                          />
                        )}
                        <Box sx={cardInfoStyles}>
                          <Link
                            key={property._id}
                            href={`property/${property.slug.current}`}
                          >
                            <Typography variant="h6" sx={propertyTitleCard}>
                              {property.title}
                            </Typography>
                            <Typography variant="body1" sx={propertyAreaCard}>
                              Area: {formatArea(property.squareFootage)}
                            </Typography>
                            <Typography variant="body1" sx={bedroomStyles}>
                              Bedrooms: {property.bedrooms}
                            </Typography>
                            <Box sx={offPlanStyles}>
                              {property.propertyOffPlan &&
                              typeof property.propertyOffPlan === "object" &&
                              property.propertyOffPlan.offplan ? (
                                <Box>
                                  {property.propertyOffPlan
                                    .propertyCompletionDate && (
                                    <Typography
                                      variant="body1"
                                      sx={offPlanCompleteStyles}
                                    >
                                      Completion date:{" "}
                                      {
                                        property.propertyOffPlan
                                          .propertyCompletionDate
                                      }
                                    </Typography>
                                  )}
                                </Box>
                              ) : (
                                <Typography>Ready to buy</Typography>
                              )}{" "}
                            </Box>
                            <Typography variant="body1" sx={propertyPriceCard}>
                              {formatPrice(property.totalPrice)}
                            </Typography>
                          </Link>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
export default PropertyTownCardBodyData;

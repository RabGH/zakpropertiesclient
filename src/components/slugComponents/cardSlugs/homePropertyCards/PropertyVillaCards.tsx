import { urlFor, sanityClient } from "@lib/sanity";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Container, Card, Divider, Grid } from "@mui/material";
import { Property } from "@lib/types";
import { CardStyles } from "../cardComponents/cardStyles";
import CardImageCarousel from "../cardComponents/CardImageCarousel";

interface PropertyVillaCardBodyProps {
  properties?: Property[];
}

const PropertyVillaCardBodyData = ({
  properties,
}: PropertyVillaCardBodyProps) => {
  const styles = CardStyles();
  if (!properties) {
    return null;
  }

  const villas = properties.filter(
    (property) => property.propertyType === "Villa"
  );

  return (
    <>
      {properties && (
        <Box sx={styles.mainAll}>
          <Box sx={styles.mainBox}>
            <Box>
              <Divider sx={styles.dividerStyles}>
                <Typography variant="h5" sx={styles.featuredTitlePos}>
                  Featured Villas
                </Typography>
              </Divider>

              <Grid container spacing={0} justifyContent="center">
                {villas?.slice(0, 3).map((property) => (
                  <Grid item xs={12} sm={6} md={4} key={property._id}>
                    <Card sx={styles.allCardStyles}>
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
                      <Box sx={styles.cardInfoStyles}>
                        <Link
                          key={property._id}
                          href={`property/${property.slug.current}`}
                        >
                          <Typography
                            variant="h6"
                            sx={styles.propertyTitleCard}
                          >
                            {property.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={styles.propertyAreaCard}
                          >
                            Area: {formatArea(property.squareFootage)}
                          </Typography>
                          <Typography variant="body1" sx={styles.bedroomStyles}>
                            Bedrooms: {property.bedrooms}
                          </Typography>
                          <Box sx={styles.offPlanStyles}>
                            {property.propertyOffPlan &&
                            typeof property.propertyOffPlan === "object" &&
                            property.propertyOffPlan.offplan ? (
                              <Box>
                                {property.propertyOffPlan
                                  .propertyCompletionDate && (
                                  <Typography
                                    variant="body1"
                                    sx={styles.offPlanCompleteStyles}
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
                          <Typography
                            variant="body1"
                            sx={styles.propertyPriceCard}
                          >
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
      )}
    </>
  );
};

export default PropertyVillaCardBodyData;

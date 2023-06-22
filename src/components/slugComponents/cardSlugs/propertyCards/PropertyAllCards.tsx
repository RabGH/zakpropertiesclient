import { urlFor } from "@lib/sanity";
import { formatPrice, formatArea } from "@lib/utils";
import Link from "next/link";
import { Box, Typography, Card } from "@mui/material";
import { Property } from "@lib/types";
import { getPropertyCardStyles } from "../cardComponents/propertyCardStyles";
import CardImageCarousel from "../cardComponents/CardImageCarousel";
import moment from "moment";

interface PropertyAllCardBodyProps {
  property?: Property;
}

const PropertyAllCardBodyData = ({ property }: PropertyAllCardBodyProps) => {
  const styles = getPropertyCardStyles();
  if (!property) {
    return null;
  }
  return (
    <>
      {property && (
        <Box sx={styles.mainAll}>
          <Box sx={styles.mainBox}>
            <Card sx={styles.allCardStyles}>
              <Link
                key={property._id}
                href={`/property/${property.slug.current}`}
              >
                {property.mainPropertyImage && (
                  <CardImageCarousel
                    images={[
                      urlFor(property.mainPropertyImage)
                        .auto("format")
                        .url()
                        .toString(),
                      ...property.propertyImages
                        .filter((img) => img != null)
                        .map((img) =>
                          urlFor(img).auto("format").url().toString()
                        ),
                    ]}
                    alt={property.title}
                  />
                )}
                <Box sx={styles.cardInfoStyles}>
                  <Typography variant="body1" sx={styles.propertyTypeStyles}>
                    {property.propertyType} ⋅ {property.bedrooms} Beds ⋅{" "}
                    {formatArea(property.squareFootage)}
                  </Typography>
                  <Typography variant="h6" sx={styles.propertyTitleCard}>
                    {property.title} ⋅{" "}
                    <span style={{ fontWeight: 400 }}>
                      {property.address?.city}
                    </span>
                  </Typography>
                  <Box sx={styles.offPlanStyles}>
                    {property.propertyOffPlan &&
                    typeof property.propertyOffPlan === "object" &&
                    property.propertyOffPlan.offplan ? (
                      <Box>
                        {property.propertyOffPlan.propertyCompletionDate && (
                          <Typography
                            variant="body1"
                            sx={styles.offPlanCompleteStyles}
                          >
                            Off-Plan Date:{" "}
                            <span style={{ fontWeight: "bold" }}>
                              {moment(
                                property.propertyOffPlan.propertyCompletionDate
                              ).format("YYYY-MM-DD")}{" "}
                            </span>{" "}
                          </Typography>
                        )}
                      </Box>
                    ) : (
                      <Typography
                        variant="body1"
                        sx={styles.offPlanReadyToBuyStyles}
                      >
                        {/* <span style={{ fontWeight: "bold" }}>
                          {" "}
                          {property.address?.city}
                        </span>{" "} */}
                        Ready
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="body1" sx={styles.propertyAreaCard}>
                    {property.address?.street}
                  </Typography>
                  <Typography variant="body1" sx={styles.propertyPriceCard}>
                    {formatPrice(property.totalPrice)}
                  </Typography>
                </Box>
              </Link>
            </Card>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PropertyAllCardBodyData;

import { urlFor, sanityClient } from "@lib/sanity";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Container, Card, Divider } from "@mui/material";
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

interface PropertyVillaCardBodyProps {
  properties?: Property[];
}

const PropertyVillaCardBodyData = ({
  properties,
}: PropertyVillaCardBodyProps) => {
  if (!properties) {
    return null;
  }

  const villas = properties.filter(
    (property) => property.propertyType === "Villa"
  );

  return (
    <>
      {properties && (
        <Container>
          <Box sx={main}>
            <Box>
              <Divider sx={dividerStyles}>
                <Typography variant="h5" sx={featuredTitlePos}>
                  Featured Villas
                </Typography>
              </Divider>
              <Box sx={mainBox}>
                {villas?.slice(0, 3).map((property) => (
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
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default PropertyVillaCardBodyData;

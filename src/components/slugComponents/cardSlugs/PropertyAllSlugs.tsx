import { urlFor } from "../../../../lib/sanity";
import { formatPrice, formatArea } from "../../../../lib/utils";
import Link from "next/link";
import { Box, Typography, Container, Card, Divider } from "@mui/material";
import { Property } from "../../../../lib/types";
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
} from "./cardComponents/cardStylesSlugs";
import CardImageCarousel from "./cardComponents/CardImageCarousel";

interface PropertyAllCardBodyProps {
  property?: Property;
}

const PropertyAllCardBodyData = ({ property }: PropertyAllCardBodyProps) => {
  if (!property) {
    return null;
  }

  return (
    <>
      {property && (
        <Container>
          <Box sx={main}>
            <Box>
              <Box sx={mainBox}>
                <Card sx={cardStyles}>
                  {property.mainPropertyImage && (
                    <CardImageCarousel
                      images={[
                        urlFor(property.mainPropertyImage).auto("format").url(),
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
                      <Typography variant="body1" sx={propertyTypeStyles}>
                        {property.propertyType}
                      </Typography>
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
              </Box>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default PropertyAllCardBodyData;

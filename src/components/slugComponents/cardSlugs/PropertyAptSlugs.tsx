import { urlFor, sanityClient } from "../../../../sanity";
import { isMultiple, formatPrice, formatArea } from "../../../../utils";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Container, Card, Divider } from "@mui/material";
import { Property } from "../../../../types";
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
} from "./cardStylesSlugs";

import CardImageCarousel from "./CardImageCarousel";

interface PropertyAptCardBodyProps {
  properties?: Property[];
}

const PropertyAptCardBodyData = ({ properties }: PropertyAptCardBodyProps) => {
  if (!properties) {
    return null;
  }

  const apartments = properties.filter(
    (property) => property.propertyType === "Apartment"
  );

  return (
    <>
      {properties && (
        <Container>
          <Box sx={main}>
            <Box>
              <Divider sx={dividerStyles}>
                <Typography variant="h5" sx={featuredTitlePos}>
                  Featured Apartments
                </Typography>
              </Divider>
              <Box sx={mainBox}>
                {apartments?.slice(0, 3).map((property) => (
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
                          Area {formatArea(property.squareFootage)}
                        </Typography>
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

export default PropertyAptCardBodyData;

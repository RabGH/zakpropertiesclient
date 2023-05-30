import { urlFor } from "@lib/sanity";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import Link from "next/link";
import { Box, Typography, Card } from "@mui/material";
import { Property } from "@lib/types";
import { CardStyles } from "../cardComponents/cardStyles";
import CardImageCarousel from "../cardComponents/CardImageCarousel";

export const propertyContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

interface PropertySimilarCardProps {
  properties: Property[];
  projects?: Property[];
}

const PropertySimilarCard = ({ properties }: PropertySimilarCardProps) => {
  const styles = CardStyles();
  const main = {
    mt: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const cardStyles = {
    maxWidth: "420px",
    maxHeight: "500px",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "transparent",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
    "&:hover": {
      backgroundColor: "#9B9B9B50",
    },
    padding: "0.7rem",
  };

  const cardSizeStyles = {
    width: "100%",
    flex: "1 0 30%",
    margin: "1rem",
  };

  return (
    <Box sx={main}>
      {properties.map((property: Property, index: number) => (
        <Box key={`project_${property._id}_${index}`} sx={cardSizeStyles}>
          <Card sx={cardStyles}>
            {property.mainPropertyImage && (
              <CardImageCarousel
                images={[
                  urlFor(property.mainPropertyImage)
                    .auto("format")
                    .url()
                    .toString(),
                  ...property.propertyImages
                    .filter((img) => img != null)
                    .map((img) => urlFor(img).auto("format").url().toString()),
                ]}
                alt={property.title}
              />
            )}
            <Box sx={styles.cardInfoStyles}>
              <Link
                key={`property_${property._id}`}
                href={`/property/${property.slug.current}`}
              >
                <Typography variant="body1" sx={styles.propertyTypeStyles}>
                  {property.propertyType}
                </Typography>
                <Typography variant="h6" sx={styles.propertyTitleCard}>
                  {property.title}
                </Typography>
                <Typography variant="body1" sx={styles.propertyAreaCard}>
                  Area {formatArea(property.squareFootage)}
                </Typography>
                <Typography variant="h5" sx={styles.propertyPriceCard}>
                  {formatPrice(property.totalPrice)}
                </Typography>
              </Link>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default PropertySimilarCard;

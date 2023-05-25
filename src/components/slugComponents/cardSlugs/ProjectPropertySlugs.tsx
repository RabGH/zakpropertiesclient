import { urlFor } from "@lib/sanity";
import { isMultiple, formatPrice, formatArea } from "@lib/utils";
import Link from "next/link";
import { Box, Typography, Card } from "@mui/material";
import { Property } from "@lib/types";
import {
  propertyTypeStyles,
  propertyTitleCard,
  propertyAreaCard,
  propertyPriceCard,
  cardInfoStyles,
} from "./cardComponents/cardStylesSlugs";
import CardImageCarousel from "./cardComponents/CardImageCarousel";

export const propertyContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};

interface ProjectPropertyCardsProps {
  properties: Property[];
  projects?: Property[];
}

const ProjectPropertyCards = ({ properties }: ProjectPropertyCardsProps) => {
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
                key={`property_${property._id}`}
                href={`/property/${property.slug.current}`}
              >
                <Typography variant="body1" sx={propertyTypeStyles}>
                  {property.propertyType}
                </Typography>
                <Typography variant="h6" sx={propertyTitleCard}>
                  {property.title}
                </Typography>
                <Typography variant="body1" sx={propertyAreaCard}>
                  Area {formatArea(property.squareFootage)}
                </Typography>
                <Typography variant="h5" sx={propertyPriceCard}>
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

export default ProjectPropertyCards;

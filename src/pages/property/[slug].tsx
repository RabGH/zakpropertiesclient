import { sanityClient } from "../../../sanity";
import { isMultiple, formatPrice, formatArea } from "../../../utils";
import Link from "next/link";

import { Box, Divider, Typography, Card } from "@mui/material";
import GeneralButton from "../../components/general/GButton";


import dynamic from "next/dynamic";
const MapSlug = dynamic(
  () => import("../../components/slugComponents/MapSlug"),
  {
    ssr: false,
  }
);

import { Property as PropertyProps } from "../../../types";
import ImageCarousel from "../../components/slugComponents/ImageGallery";

interface PageContext {
  query: {
    slug: string;
  };
}

const Property = ({
  title,
  propertyType,
  mainPropertyImage,
  totalPrice,
  bathrooms,
  bedrooms,
  description,
  squareFootage,
  plottedArea,
  builtUpArea,
  propertyImages,
  amenities,
  location,
}: PropertyProps) => {
  const mainContainer = {
    p: 2,
    maxWidth: 1200,
    margin: "0 auto",
  };

  const titleContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleStyle = {
    fontWeight: "",
  };

  const priceStyle = {
    ml: 2,
    fontSize: "1.5rem",
  };

  const mainSection = {
    mt: 2,
  };

  const amenityStyles = {
    maxWidth: 700,
    margin: "0 auto",
  };

  const bodyStyles = {
    mt: 2,
  };

  const staticStyles = {
    lineHeight: "1.5",
  };

  const priceBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    bg: "#f5f5f5",
    p: 3,
    mt: 3,
    borderRadius: "5px",
  };

  const priceButtonPos = {
    mt: 2,
  };

  const dividerStyles = {
    mt: 2,
  };

  const mapCard = {
    width: "100%",
    height: "500px",
    borderRadius: "5px",
    overflow: "hidden",
    padding: "1rem",
  };

  const mapCardPos = {
    mt: 3,
  };

  const squareFootageStyles = {
    mt: 3,
    lineHeight: "1.5",
  };

  const amenitiesCardStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 2,
    fontSize: "1rem",
  };

  const mainBodySlug = {
    fontSize: "1rem",
  };

  const getImageObjects = (mainPropertyImage: string, propertyImages: string[]) => {
    const imageObjects = propertyImages.map((image) => ({ image }));
    if (mainPropertyImage) {
      imageObjects.unshift({ image: mainPropertyImage });
    }
    return imageObjects;
  };
  
  const propertyImageObjects = getImageObjects(mainPropertyImage, propertyImages);
  return (
    <Box sx={mainContainer}>
      <Box sx={titleContainer}>
        <Typography variant="h1" sx={titleStyle}>
          {title}
        </Typography>
        <Typography variant="h6" sx={priceStyle}>
          {formatPrice(totalPrice)}
        </Typography>
      </Box>
      {propertyImages && (
      <ImageCarousel mainImage={mainPropertyImage} images={propertyImageObjects} />
    )}
      <Box sx={mainSection}>
        <Typography variant="body2" sx={mainBodySlug}>
          {propertyType}
        </Typography>
        <Typography variant="body2" sx={mainBodySlug}>
          {bedrooms} bedroom{isMultiple(bedrooms)}
        </Typography>
        <Typography variant="body2" sx={mainBodySlug}>
          {bathrooms} bathroom{isMultiple(bathrooms)}
        </Typography>
      </Box>

      <Box sx={bodyStyles}>
        <Box sx={staticStyles}>
          <Typography variant="body2" sx={mainBodySlug}>
            {description}
          </Typography>
          <Box sx={squareFootageStyles}>
            <Typography variant="body2" sx={mainBodySlug}>
              Main Area: {formatArea(squareFootage)} sqrft
            </Typography>
            <Typography variant="body2" sx={mainBodySlug}>
              Plotted Area: {formatArea(plottedArea)} sqrft
            </Typography>
            <Typography variant="body2" sx={mainBodySlug}>
              Built Up Area: {formatArea(builtUpArea)} sqrft
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={dividerStyles} />

      <Box sx={amenityStyles}>
        <Card sx={{ p: 2 }}>
          <Typography variant="h3">Amenities</Typography>
          <Box sx={amenitiesCardStyles}>{amenities}</Box>
        </Card>
      </Box>

      <Box sx={priceBox}>
        <Typography variant="h5">{formatPrice(totalPrice)}</Typography>
        <Box sx={priceButtonPos}>
          <Link href="/contact">
            <GeneralButton variant="contained">Contact</GeneralButton>
          </Link>
        </Box>
      </Box>

      <Divider sx={dividerStyles} />

      <Box sx={mapCardPos}>
        <Card sx={mapCard}>
          <Typography variant="h3">Location</Typography>
          <MapSlug
            title={title}
            lat={location?.lat || 0}
            lng={location?.lng || 0}
          />
        </Card>
      </Box>
    </Box>
  );
};

export const getServerSideProps = async (pageContext: PageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
      title,
      location,
      propertyType,
      mainPropertyImage,
      propertyImages,
      totalPrice,
      bathrooms,
      bedrooms,
      description,
      squareFootage,
      plottedArea,
      builtUpArea,
      amenities
    }`;

  const property = await sanityClient.fetch(query, { pageSlug });
  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainPropertyImage: property.mainPropertyImage || null,
        propertyImages: property.propertyImages || null,
        totalPrice: property.totalPrice,
        bathrooms: property.bathrooms,
        bedrooms: property.bedrooms,
        description: property.description,
        squareFootage: property.squareFootage,
        plottedArea: property.plottedArea,
        builtUpArea: property.builtUpArea,
        amenities: property.amenities,
      },
    };
  }
};
export default Property;

import { sanityClient } from "../../../sanity";
import { isMultiple, formatPrice, formatArea } from "../../../utils";
import Link from "next/link";
import { Box, Divider, Typography, Card, useTheme } from "@mui/material";
import GeneralButton from "../../components/general/GButton";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import FeaturesSlug from "../../components/slugComponents/FeaturesSlug";
import { featuresStyles } from "../../components/slugComponents/FeaturesSlug";
import dynamic from "next/dynamic";
const MapSlug = dynamic(
  () => import("../../components/slugComponents/MapSlug"),
  {
    ssr: false,
  }
);
import { Property as PropertyProps } from "../../../types";
import ImageCarousel from "../../components/slugComponents/ImageGallerySlick";
import {
  mainContainer,
  mainImageContainer,
  viewPhotosBox,
} from "../../components/slugComponents/imageCarouselStyles";
import ViewAllPhotos from "../../components/slugComponents/viewAllPhotos";

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
  features,
  location,
  propertyOffPlan,
}: PropertyProps) => {
  const muiTheme = useTheme();

  const dividerStyles = {
    m: 10,
  };

  const titleContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: "3rem",
    textAlign: "center",
  };

  const titleStyle = {};

  const priceStyle = {
    ml: 2,
    fontSize: "1.3rem",
    p: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "#F1EDEE",
    color: "#3D3D3D",
  };

  const contentContainer = {
    pr: "12rem",
    pl: "12rem",
  };

  const mainSection = {
    mt: 2,
  };

  const propertyTypeStyles = {
    fontSize: "1.3rem",
    mb: "1rem",
    mt: "1rem",
  };

  const propertyBedStyles = {
    fontSize: "1rem",
  };

  const propertyBathroomStyles = {
    fontSize: "1rem",
  };

  const bodyStyles = {
    mt: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const staticStyles = {
    lineHeight: "1.5",
  };

  const descriptionStyles = {
    fontSize: "1.3rem",
  };

  const squareFootageStyles = {
    mt: 3,
    lineHeight: "1.5",
  };

  const propertyMainAreaStyles = {
    fontSize: "1rem",
  };

  const propertyPlottedAreaStyles = {
    fontSize: "1rem",
  };

  const propertyBuiltAreaStyles = {
    fontSize: "1rem",
  };

  const buttonStyles = {
    "&:hover": {
      backgroundColor: muiTheme.palette.primary.light,
    },
    mb: "1rem",
  };

  const priceBox = {};

  const priceButtonPos = {
    mt: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const locationTitle = {};
  const mapCardPos = {
    mt: 3,
    mb: 3,
  };

  const mapCard = {
    width: "100%",
    height: "500px",
    borderRadius: "5px",
    overflow: "hidden",
    padding: "1rem",
  };

  const offPlanStyles = {};

  const offPlanTextStyles = {};

  const offPlanCompleteStyles = {};

  return (
    <>
      <Box sx={mainContainer}>
        <Box sx={mainImageContainer}>
          <ImageCarousel
            mainImage={mainPropertyImage}
            images={propertyImages}
            alt={title}
          />
        </Box>

        <Box sx={viewPhotosBox}>
          <ViewAllPhotos
            mainImage={mainPropertyImage}
            images={propertyImages}
            alt={title}
          />
        </Box>

        <Divider sx={dividerStyles} />

        <Box sx={contentContainer}>
          <Box sx={titleContainer}>
            <Typography variant="h2" sx={titleStyle}>
              {title}
            </Typography>
            <Typography variant="h3" sx={priceStyle}>
              {formatPrice(totalPrice)}
            </Typography>
          </Box>

          <Box sx={mainSection}>
            <Typography variant="h5" sx={propertyTypeStyles}>
              {propertyType}
            </Typography>

            <Box sx={offPlanStyles}>
              {propertyOffPlan &&
              typeof propertyOffPlan === "object" &&
              propertyOffPlan.offplan ? (
                <Box>
                  <Typography variant="body2" sx={offPlanTextStyles}>
                    Off-plan project
                  </Typography>
                  {propertyOffPlan.propertyCompletionDate && (
                    <Typography variant="body2" sx={offPlanCompleteStyles}>
                      Completion date: {propertyOffPlan.propertyCompletionDate}
                    </Typography>
                  )}
                </Box>
              ) : (
                <Typography>Ready to buy</Typography>
              )}{" "}
            </Box>

            <Typography variant="body2" sx={propertyBedStyles}>
              {bedrooms} bedroom{isMultiple(bedrooms)} <BiBed />
            </Typography>
            <Typography variant="body2" sx={propertyBathroomStyles}>
              {bathrooms} bathroom{isMultiple(bathrooms)} <BiBath />
            </Typography>
          </Box>

          <Box sx={squareFootageStyles}>
            <Typography variant="body2" sx={propertyMainAreaStyles}>
              Main Area {formatArea(squareFootage)}
            </Typography>
            <Typography variant="body2" sx={propertyPlottedAreaStyles}>
              Plotted Area {formatArea(plottedArea)}
            </Typography>
            <Typography variant="body2" sx={propertyBuiltAreaStyles}>
              Built Up Area {formatArea(builtUpArea)}
            </Typography>
          </Box>

          <Box sx={bodyStyles}>
            <Box sx={staticStyles}>
              <Typography variant="body2" sx={descriptionStyles}>
                {description}
              </Typography>
            </Box>
            <Box sx={priceBox}>
              <Box sx={priceButtonPos}>
                <Link href="/contact">
                  <GeneralButton variant="contained" sx={buttonStyles}>
                    Contact
                  </GeneralButton>
                </Link>
              </Box>
            </Box>
          </Box>

          <Divider sx={dividerStyles} />

          <Box sx={featuresStyles}>
            <FeaturesSlug features={features} />
          </Box>

          <Divider sx={dividerStyles} />

          <Box sx={mapCardPos}>
            <Card sx={mapCard}>
              <Typography variant="h3" sx={locationTitle}>
                Location
              </Typography>
              <MapSlug
                title={title}
                lat={location?.lat || 0}
                lng={location?.lng || 0}
              />
            </Card>
          </Box>
        </Box>
      </Box>
    </>
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
      features,
      propertyOffPlan,
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
        squareFootage: property.squareFootage || null,
        plottedArea: property.plottedArea || null,
        builtUpArea: property.builtUpArea || null,
        features: property.features,
        propertyOffPlan: property.propertyOffPlan || null,
      },
    };
  }
};
export default Property;
